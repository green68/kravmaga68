import { useState } from "react"
import { Button, Container, Form } from "react-bootstrap"
import { FaFileDownload, FaFileUpload, FaTrash } from "react-icons/fa"
import DownloadDatas from "../components/DownloadDatas"
import ResetDatas from "../components/ResetDatas"
import UploadDatas from "../components/UploadDatas"
import Validation from "../components/Validation"
import "./ToolsPage.css"

const ToolsPage = ({ handleUpdate }) => {

  const [isShowSaveDatas, setIsShowSaveDatas] = useState(false)
  const [isShowResetDatas, setIsShowResetDatas] = useState(false)
  const [isShowUploadDatas, setIsShowUploadDatas] = useState(false)
  
  const [showValidation, setShowValidation] = useState(false)
  const [toolsDefinitions, setToolsDefinitions] = useState({
    name: "",
    title: "",
    message: "",
    color: "",
    icon: null,
    callback: null
  })

  const testDatas = () => {
    console.log("test ok")
    validationClose()
  }
  const toolsDefinitionsDatas = [
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
            <Form.Control type="text" placeholder="Mon_Fichier-2022-06-01" pattern="/[a-zA-Z0-9-_]{5,30}/" autoFocus />
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
    <>
      {isShowResetDatas && <ResetDatas onClose={() => setIsShowResetDatas(false)} onReset={(datas) => handleUpdate(datas)} />}
      {isShowUploadDatas && <UploadDatas onClose={() => setIsShowUploadDatas(false)} onUpload={(datas) => handleUpdate(datas)} />}
      {isShowSaveDatas && <DownloadDatas onClose={() => setIsShowSaveDatas(false)} />}
      
      <div className="tools p-3">
        <h1 className="text-center p-2">Outils</h1>
        <div className="container d-flex flex-column align-items-center p-2 gap-4" >

          <ButtonsTool datas={[...toolsDefinitionsDatas]} />
          <Validation
            show={showValidation}
            datas={toolsDefinitions}
            onClose={validationClose}
          />
          
          <Button
            size="lg"
            variant={`outline-danger`}
            className="btn-menu btn-tools"
            onClick={(e) => {
              e.currentTarget.blur();
              setIsShowResetDatas(true)
            }}
          >
            {<FaTrash />}
            Effacer les données
          </Button>
          
          <Button
            size="lg"
            variant={`outline-danger`}
            className="btn-menu btn-tools"
            onClick={(e) => {
              e.currentTarget.blur();
              setIsShowUploadDatas(true)
            }}
          >
            {<FaFileUpload />}
            Charger des données
          </Button>


          <Button
            size="lg"
            variant={`outline-success`}
            className="btn-menu btn-tools"
            onClick={(e) => {
              e.currentTarget.blur();
              setIsShowSaveDatas(true)
            }}
          >
            {<FaFileDownload />}
            Enregistrer les données
          </Button>

        </div>
      </div>
    </>
  )
}

export default ToolsPage
