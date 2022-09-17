import { useState } from "react"
import { Alert, Button, Container } from "react-bootstrap";
import { CashItem } from "../classes/CashItem";
import CashItemCard from "../components/CashItemCard";
import FormCashItem from "../components/Forms/FormCashItem";

const cashItemDatasInit = {
  id: { valid: null, value: -1 },
  date: { valid: true, value: new Date() },
  label: { valid: null, value: "" },
  type: { valid: true, value: "" },
  folio: { valid: true, value: "" },
  mvt: { valid: null, value: "" },
}

/**
 * @param {Array<CashItem>} cashDatas
 * @param {boolean} test
 */
function CashPage({ cashDatas, test }) {

  const [cashItemsArray, setCashItemsArray] = useState(structuredClone(cashDatas) )
  const [isFormCashShow, setIsFormCashShow] = useState(false)
  const [cashItemDatas, setCashItemDatas] = useState(structuredClone(cashItemDatasInit))

  const handleAjout = (e) => {
    setCashItemDatas(structuredClone(cashItemDatasInit) )
    setIsFormCashShow(true)
    console.log("ajout");
  }

  const handleCloseFormCashItem = (e) => {
    console.log("handleCloseFormCashItem dans CashPage");
    setCashItemDatas(structuredClone(cashItemDatasInit))
    setIsFormCashShow(false)
  }

  const handleChange = (datas) => {
    const temp = cashItemsArray
    console.log(datas);
    if (datas.id === -1) {
      datas.id = temp.length + 1
    }
    const cashItem = new CashItem(datas)
    temp.push(cashItem)
    setCashItemsArray(temp)
    console.log(cashItemsArray);
    setCashItemDatas(structuredClone(cashItemDatasInit))
    setIsFormCashShow(false)
  }

  const CashItemsList = () => {

    if (cashItemsArray.length !== 0) {
      console.log(cashItemsArray)
      console.log(cashItemsArray.length);
      return cashItemsArray.map(item => <CashItemCard key={item.id} datas={item} />)
    }
    return (
      <>
        <Alert variant="warning">Pas de données disponible</Alert>
      </>
    )
  }



  return (
    <>
      <h2 className="text-center">Caisse</h2>
      <Container>
        <Button onClick={handleAjout} >Ajouter</Button>
      </Container>
      <Container className="mt-3">
        <CashItemsList />
      </Container>
      {isFormCashShow
        && <FormCashItem
          onClose={handleCloseFormCashItem}
          onChange={handleChange}
          datas={structuredClone(cashItemDatas) }
        />}
    </>

  )
}

export default CashPage