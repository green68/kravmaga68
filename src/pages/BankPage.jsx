import { useState } from "react"
import { Alert, Button, Container } from "react-bootstrap"
import { FaPlus } from "react-icons/fa"
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
  /**@type {{valid: boolean, value: string}} */
  checked: { valid: true, value: "false" },
}

/**
 * 
 * @param {{bankDatas: BankItem[], onChange: (datas: BankItem[]) => void}} props
 * @returns 
 */
function BankPage({ bankDatas, onChange }) {

  const [bankItemsArray, setBankItemsArray] = useState([...bankDatas])
  const [isFormBankShow, setIsFormBankShow] = useState(false)
  const [bankItemDatas, setBankItemDatas] = useState(structuredClone(bankItemDatasInit))


  /** @param {MouseEvent|TouchEvent} e */
  const handleAddBankItem = (e) => {
    setBankItemDatas(structuredClone(bankItemDatasInit))
    setIsFormBankShow(true)
    console.log("BankPage : handleAddBankItem");
  }

  /** @param {MouseEvent|TouchEvent} e */
  const handleCloseFormBankItem = (e) => {
    console.log("BankPage : handleCloseFormBankItem");
    setBankItemDatas(structuredClone(bankItemDatasInit))
    setIsFormBankShow(false)
  }

  /** @param {bankItem} datas */
  const handleChange = (datas) => {
    const temp = bankItemsArray
    console.log("BankPage : handleChange");
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
      // console.log(bankItemsArray)
      // console.log(bankItemsArray.length);
      return bankItemsArray.map(item => <BankItemCard key={item.id} datas={item} />)
    }
    return (
      <>
        <Alert variant="warning">Pas de données disponible</Alert>
      </>
    )
  }

  return (
    <Container className="d-grid overflow-hidden h-100" style={{ gridTemplateRows: "auto 1fr" }}>

      <Container className="d-flex justify-content-between p-3">
        <Container></Container>
        <Container>
          <h2 className="text-center">Banque</h2>

        </Container>
        <Container className="d-flex align-items-center justify-content-end " >
          <Button onClick={ handleAddBankItem } >
            <FaPlus />
          </Button>
        </Container>
      </Container>

      <Container className="my-3 overflow-hidden">
        <Container className="overflow-auto h-100 py-2">
          <BankItemsList />
        </Container>
      </Container>

      {isFormBankShow
        && <FormBankItem
          onClose={ handleCloseFormBankItem }
          onChange={ handleChange }
          datas={ bankItemDatas }
        />}

    </Container>

  )
}

export default BankPage