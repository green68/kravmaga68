import { Button } from "react-bootstrap"
import { BsDownload } from "react-icons/bs"
import { FaExclamation, FaFileDownload, FaFileUpload } from "react-icons/fa"

const ToolsPage = (props) => {
    return (
      <div className="tools p-3">
        <h1 className="text-center p-2">Outils</h1>
        <div className="d-flex flex-column p-2 gap-4">
          <Button size="lg" variant="outline-danger" className="btn-menu">
            <FaExclamation/>
            Effacer les données
          </Button>
          <Button size="lg" variant="outline-danger" className="btn-menu">
            <FaFileUpload/>
            Charger les données
          </Button>
          <Button size="lg" variant="outline-success" className="btn-menu">
            <FaFileDownload/>
            Sauvegarder les données
          </Button>

        </div>

      </div>
    )
  }
  
  export default ToolsPage
  