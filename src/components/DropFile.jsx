import { useState } from "react"
import { Form } from "react-bootstrap";
import "./DropFile.css"

const DropFile = ({handleDatas}) => {

  const [fileInput, setFileInput] = useState(null)

  const handleFileInput = (e) => {
    // console.log(e.target.files[0]);
    setFileInput(e.target.files[0].name)
    const reader = new FileReader()
    reader.onload = onReaderLoad
    reader.readAsText(e.target.files[0])
  }

  const onReaderLoad = (e) => {
    console.log(e.target.result)
    handleDatas(e.target.result)
  }

  return (

    <>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label className="drop-zone" >
          {fileInput ? fileInput : 'Cliquez'}
          <Form.Control 
            type="file" 
            style={{ display: "none"}} 
            onChange={handleFileInput}
          />
        </Form.Label>
      </Form.Group>

      {/* <label className="drop-zone">
        {fileInput ? fileInput : 'Click Me'}
        <input
          type={"file"}
          onChange={handleFileInput}
          style={{ display: "none" }}
        />

      </label> */}
    </>
  )
}

export default DropFile