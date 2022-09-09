import { useState } from "react"
import { Button, Container, FloatingLabel, Form, FormLabel } from "react-bootstrap"
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
    name: "",
    title: "",
    message: "",
    color: "",
    icon: null,
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

  const testDatas = () => {
    console.log("test ok")
  }
  const toolsDefinitionsDatas = [
    {
      name: "resetDatas",
      title: "Effacer les données",
      message: "Cette action effacera toutes les données.",
      color: "danger",
      icon: <FaTrashRestore />,
      callback: resetDatas
    },
    {
      name: "loadDatas",
      title: "Charger des données",
      message: "Cette action remplacera les données actuelles.",
      color: "danger",
      icon: <FaFileUpload />,
      callback: loadDatas
    },
    {
      name: "saveDatas",
      title: "Enregistrer les données",
      message: "Cette action enregistrera les données actuelles dans un fichier au format JSON.",
      color: "success",
      icon: <FaFileDownload />,
      callback: saveDatas
    },
    {
      name: "test",
      title: "Juste un titre",
      message: <>
        <Container>
          <Container className="text-center pb-3">
            Juste une phrase pour mettre un peu de contenu.

          </Container>
          <Form.Group className="mb-3 text-left mw-50">
            <Form.Label>Nom du fichier (optionel)</Form.Label>
              <Form.Control type="text" placeholder="Mon_Fichier-2022-06-01" pattern="/[a-zA-Z0-9-_]{5,30}/" />
            <Form.Text className="text-muted">
              Caractères alpha-numériques avec tirets mais sans espace.
            </Form.Text>
          </Form.Group>
        </Container>
      </>,
      color: "success",
      icon: <FaFileDownload />,
      callback: testDatas
    },
  ]

  /**
   * 
   * @param {MouseEvent} event - 
   * @param {String} title - The title of the modal 
   */
  const openValidation = (event) => {
    const target = event.currentTarget
    target.blur()
    const tool = toolsDefinitionsDatas.find(tool => tool.name === target.id)
    if (tool) {
      setToolsDefinitions(tool)
      setShowValidation(true)
    }
  }

  const validationClose = () => {
    setShowValidation(false)
  }

  const ButtonsTool = ({ datas }) => {
    const listButtons = datas.map(data => {
      return (<Button
        key={data.name}
        size="lg"
        variant={`outline-${data.color}`}
        className="btn-menu btn-tools"
        id={data.name}
        onClick={openValidation}
      >
        {data.icon}
        {data.title}
      </Button>)
    }
    )
    return (
      <>{listButtons}</>
    )
  }

  return (
    <div className="tools p-3">
      <h1 className="text-center p-2">Outils</h1>
      <div className="container d-flex flex-column align-items-center p-2 gap-4" >

        <ButtonsTool datas={[...toolsDefinitionsDatas]} />

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
