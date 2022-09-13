import { useState } from "react"
import { Button, Container } from "react-bootstrap";
import FormCashItem from "../components/Forms/FormCashItem";

function CashPage({ cashDatas }) {

  const [cashItems, setCashItems] = useState(cashDatas)
  const [isFormCashShow, setIsFormCashShow] = useState(false)

  const handleAjout = (e) => {
    setIsFormCashShow(true)
    console.log("ajout");
  }

  const handleCloseFormCashItem = (e) => {
    console.log("handleCloseFormCashItem dans CashPage");
    setIsFormCashShow(false)
    // onClose()
  }

  const handleChange = (datas) => { 
    
    console.log(datas); 
    debugger
  }

  const CashItems = () => {

    if (cashItems) {
      console.log(cashItems);
      debugger
    }
    return (
      <>
        <p>Pas de données disponible</p>
        {isFormCashShow && <FormCashItem onClose={handleCloseFormCashItem} onChange={handleChange} />}
      </>
    )
  }



  return (
    <>
      <h2 className="text-center">Caisse</h2>
      <Container>
        <Button onClick={handleAjout} >Ajouter</Button>
      </Container>
      <CashItems />
    </>

  )
}

export default CashPage