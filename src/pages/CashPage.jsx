import { useState } from "react"
import { Alert, Button, Container } from "react-bootstrap";
import { CashItem } from "../classes/CashItem";
import CashItemCard from "../components/CashItemCard";
import FormCashItem from "../components/Forms/FormCashItem";

const cashItemDatasInit = {
  /**@type {{valid: boolean, value: number}} */
  id: { valid: null, value: -1 },
  /**@type {{valid: boolean, value: Date}} */
  date: { valid: true, value: new Date() },
  /**@type {{valid: boolean, value: string}} */
  label: { valid: null, value: "" },
  /**@type {{valid: boolean, value: string}} */
  type: { valid: true, value: "" },
  /**@type {{valid: boolean, value: string}} */
  folio: { valid: true, value: "" },
  /**@type {{valid: boolean, value: string}} */
  mvt: { valid: null, value: "" },
}

/**
 * @param {{cashDatas: Array<CashItem>, onChange: Function}} props
 */
function CashPage({ cashDatas, onChange }) {

  const [cashItemsArray, setCashItemsArray] = useState([...cashDatas] )
  const [isFormCashShow, setIsFormCashShow] = useState(false)
  const [cashItemDatas, setCashItemDatas] = useState(structuredClone(cashItemDatasInit))

  /** @param {MouseEvent|TouchEvent} e */
  const handleAddCashItem = (e) => {
    setCashItemDatas(structuredClone(cashItemDatasInit) )
    setIsFormCashShow(true)
    console.log("CashPage : handleAddCashItem");
  }
  
  /** @param {MouseEvent|TouchEvent} e */
  const handleCloseFormCashItem = (e) => {
    console.log("CashPage : handleCloseFormCashItem");
    setCashItemDatas(structuredClone(cashItemDatasInit))
    setIsFormCashShow(false)
  }

  /** @param {cashItem} datas */
  const handleChange = (datas) => {
    const temp = cashItemsArray
    console.log("CashPage : handleChange");
    if (datas.id === -1) {
      datas.id = temp.length + 1
      const cashItem = new CashItem(datas)
      temp.push(cashItem)
      setCashItemsArray(temp)
      onChange(cashItemsArray)
    }
    setIsFormCashShow(false)
  }

  const CashItemsList = () => {

    if (cashItemsArray.length !== 0) {
      // console.log(cashItemsArray)
      // console.log(cashItemsArray.length);
      return cashItemsArray.map(item => <CashItemCard key={item.id} datas={item} />)
    }
    return (
      <>
        <Alert variant="warning">Pas de données disponible</Alert>
      </>
    )
  }

  return (
    <Container className="d-grid overflow-hidden h-100" style={{gridTemplateRows: "auto auto 1fr"}}>
      <h2 className="text-center">Caisse</h2>
      <Container>
        <Button onClick={handleAddCashItem} >Ajouter</Button>
      </Container>
      <Container className="my-3 overflow-hidden">
        <Container className="overflow-auto h-100 py-2">
          <CashItemsList />
        </Container>
      </Container>
      {isFormCashShow
        && <FormCashItem
          onClose={handleCloseFormCashItem}
          onChange={handleChange}
          datas={ cashItemDatas }
        />}
    </Container>

  )
}

export default CashPage