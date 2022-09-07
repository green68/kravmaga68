import { useState } from "react"
import { Button } from "react-bootstrap"
import { BsDownload } from "react-icons/bs"
import { FaExclamation, FaFileDownload, FaFileUpload } from "react-icons/fa"
import Validation from "../components/Validation"
import "./ToolsPage.css"

const ToolsPage = (props) => {
  const [showValidation, setShowValidation] = useState(false)
  const [validationTitle, setValidationTitle] = useState("Validation")

  const resetDatas = () => {

  }

  /**
   * 
   * @param {MouseEvent} event - 
   * @param {String} title - The title of the modal 
   */
  const openValidation = (event, title) => {
    event.currentTarget.blur()
    setValidationTitle(title)
    setShowValidation(true)
  }
  const validationClose = () => {
    setShowValidation(false)
  }
  
  
  return (
      <div className="tools p-3">
        <h1 className="text-center p-2">Outils</h1>
        <div className="container d-flex flex-column align-items-center p-2 gap-4" >
          <Button size="lg" variant="outline-danger" className="btn-menu btn-tools"
            onClick={(e) => {
              openValidation( e, "Effacer les données")
            }}
          >
            <FaExclamation/>
            Effacer les données
          </Button>
          <Button size="lg" variant="outline-danger" className="btn-menu btn-tools"
            onClick={(e) => {
              openValidation( e, "Charger les données")
            }}>
            <FaFileUpload/>
            Charger les données
          </Button>
          <Button size="lg" variant="outline-success" className="btn-menu btn-tools"
            onClick={(e) => {
              openValidation( e, "Sauvegarder les données")
            }}>
            <FaFileDownload/>
            Sauvegarder les données
          </Button>

        </div>
        <Validation show={showValidation} title={validationTitle} close={validationClose} />
      </div>
    )
  }
  
  export default ToolsPage
  