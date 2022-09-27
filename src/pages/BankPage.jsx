import { useState } from "react"
import { Alert, Button, Container } from "react-bootstrap"
import { BankItem } from "../classes/BankItem"
import BankItemCard from "../components/BankItemCard"
import FormBankItem from "../components/Forms/FormBankItem"

const bankItemDatasInit = {
  /**@type {{valid: boolean, value: number}} */
  id: { valid: null, value: -1 },
  /**@type {{valid: boolean, value: Date}} */
  date: { valid: true, value: new Date() },
  /**@type {{valid: boolean, value: string}} */
  label: { valid: null, value: "" },
  /**@type {{valid: boolean, value: string}} */
  type: { valid: true, value: "" },
  /**@type {{valid: boolean, value: string}} */
  cheque: { valid: true, value: "" },
  /**@type {{valid: boolean, value: string}} */
  folio: { valid: true, value: "" },
  /**@type {{valid: boolean, value: string}} */
  mvt: { valid: null, value: "" },
  /**@type {{valid: boolean, value: boolean}} */
  checked: { valid: true, value: false },
}

/**
 * 
 * @param {{bankDatas: Array<BankItem>, onChange: Function}} props
 * @returns 
 */
function BankPage({ bankDatas, onChange }) {

  const [bankItemsArray, setBankItemsArray] = useState([...bankDatas] )
  const [isFormBankShow, setIsFormBankShow] = useState(false)
  const [bankItemDatas, setBankItemDatas] = useState(structuredClone(bankItemDatasInit))
  

/** @param {MouseEvent|TouchEvent} e */
const handleAddBankItem = (e) => {
  setBankItemDatas(structuredClone(bankItemDatasInit) )
  setIsFormBankShow(true)
  console.log("ajout");
}

/** @param {MouseEvent|TouchEvent} e */
const handleCloseFormBankItem = (e) => {
  console.log("handleCloseFormBankItem dans BankPage");
  setBankItemDatas(structuredClone(bankItemDatasInit))
  setIsFormBankShow(false)
}

  /** @param {bankItem} datas */
  const handleChange = (datas) => {
    const temp = bankItemsArray
    console.log(datas);
    if (datas.id === -1) {
      datas.id = temp.length + 1
      const bankItem = new BankItem(datas)
      temp.push(bankItem)
      setBankItemsArray(temp)
      onChange(bankItemsArray)
    }
    setIsFormBankShow(false)
  }

  const BankItemsList = () => {

    if (bankItemsArray.length !== 0) {
      console.log(bankItemsArray)
      console.log(bankItemsArray.length);
      return bankItemsArray.map(item => <BankItemCard key={item.id} datas={item} />)
    }
    return (
      <>
        <Alert variant="warning">Pas de données disponible</Alert>
      </>
    )
  }

  return (
    <Container className="d-grid overflow-hidden h-100" style={{gridTemplateRows: "auto auto 1fr"}}>
      <h2 className="text-center">Banque</h2>
      <Container>
        <Button onClick={handleAddBankItem} >Ajouter</Button>
      </Container>
      <Container className="my-3 overflow-hidden">
        <Container className="overflow-auto h-100 py-2">
          <BankItemsList />
        </Container>
      </Container>
      {isFormBankShow
        && <FormBankItem
          onClose={handleCloseFormBankItem}
          onChange={handleChange}
          datas={ bankItemDatas }
        />}
    </Container>

  )
  }
  
  export default BankPage