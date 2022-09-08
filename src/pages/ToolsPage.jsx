import { useState } from "react"
import { Button } from "react-bootstrap"
import { FaFileDownload, FaFileUpload, FaTrashRestore } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import Validation from "../components/Validation"
import { datas } from "../datas/datas"
import { objectToArray, pathTo } from "../utilities/Functions"
import { Menu } from "../utilities/Menu"
import "./ToolsPage.css"

const ToolsPage = ({ handleUpdate }) => {
  let navigate = useNavigate();
  const [showValidation, setShowValidation] = useState(false)
  const [toolsDefinitions, setToolsDefinitions] = useState({
    title: "Effacer les données",
    message: "Cette action effacera toutes les données!",
    callback: null
  })

  const resetDatas = () => {
    console.log("resetDatas");
    handleUpdate({
      name: null,
      years: []
    })
    validationClose()
    navigate(pathTo(Menu.Home));
  }
  const loadDatas = () => {
    console.log("loadDatas");
    validationClose()
  }
  const saveDatas = () => {
    console.log("saveDatas");
    datas.saveToFile()
    validationClose()
  }

  const toolsDefinitionsDatas = {
    resetDatas: {
      title: "Effacer les données",
      message: "Cette action effacera toutes les données.",
      color: "danger",
      icon: <FaTrashRestore />,
      callback: resetDatas
    },
    loadDatas: {
      title: "Charger des données",
      message: "Cette action remplacera les données actuelles.",
      color: "danger",
      icon: <FaFileUpload />,
      callback: loadDatas
    },
    saveDatas: {
      title: "Enregistrer les données",
      message: "Cette action enregistrera les données actuelles dans un fichier au format JSON.",
      color: "success",
      icon: <FaFileDownload />,
      callback: saveDatas
    },
  }

  /**
   * 
   * @param {MouseEvent} event - 
   * @param {String} title - The title of the modal 
   */
  const openValidation = (event) => {
    const target = event.currentTarget
    target.blur()
    setToolsDefinitions(toolsDefinitionsDatas[target.id])
    setShowValidation(true)
  }

  const validationClose = () => {
    setShowValidation(false)
  }

  const ButtonsTool = ({ datas }) => {
    const listButtons = datas.map(data =>
      <Button
        key={data[0]}
        size="lg"
        variant={`outline-${data[1].color}`}
        className="btn-menu btn-tools"
        id={data[0]}
        onClick={openValidation}
      >
        {data[1].icon}
        {data[1].title}
      </Button>
    )
    return (
      <>{listButtons}</>
    )
  }

  return (
    <div className="tools p-3">
      <h1 className="text-center p-2">Outils</h1>
      <div className="container d-flex flex-column align-items-center p-2 gap-4" >

        <ButtonsTool datas={objectToArray({ ...toolsDefinitionsDatas })} />

      </div>
      <Validation
        show={showValidation}
        datas={toolsDefinitions}
        close={validationClose}
      />
    </div>
  )
}

export default ToolsPage
