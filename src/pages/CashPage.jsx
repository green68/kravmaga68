import { useState } from "react"
import { Button, Container } from "react-bootstrap";
import FormCashItem from "../components/Forms/FormCashItem";

function CashPage({cashDatas}) {
    
  const [cashItems, setCashItems] = useState(cashDatas)
  const [isFormCashShow, setIsFormCashShow] = useState(false)

  const handleAjout = (e) => {
    setIsFormCashShow(true)
    console.log("ajout");
  }
  
  const handleCloseFormCashItem = (e) => {
    console.log("handleClose dans ResetDatas");
    setIsFormCashShow(false)
    // onClose()
}
  
  const CashItems = () => {

    if(cashItems){
      console.log(cashItems);
      debugger
    }
    return (
      <>
        <p>Pas de données disponible</p>
        {isFormCashShow && <FormCashItem onClose={handleCloseFormCashItem} />}
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