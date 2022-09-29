import { useState } from "react"
import { FaFileImport, FaFileUpload } from "react-icons/fa"
import Validation from "./Validation";
import DropFile from "./DropFile";
import { Container } from "react-bootstrap";
import { User } from "../classes/User";

function UploadDatas({ onClose, onUpload }) {
    const [isShow, setisShow] = useState(true)
    const [isButtonDisabled, setIsButtonDisabled] = useState(true)
    const [userDatas, setUserDatas] = useState(null)

    const loadFromFile = (e) => {
        console.log(userDatas);
        const newUser = new User(userDatas)
        onUpload(newUser)
        // TODO: send message for datas change
        handleClose()
    }

    const handleClose = () => {
        console.log("UploadDatas : handleClose");
        console.log(userDatas);
        setisShow(false)
        onClose()
    }

    const handleDatas = (datas) => {
        const obj = new User(datas)
        if(obj) {
            setIsButtonDisabled(false)
            setUserDatas(datas)
        } else {
            setIsButtonDisabled(true)
            setUserDatas(null)
        }
    }

    return (
        <Validation 
            show={isShow} 
            onClose={handleClose} 
            icon={<FaFileImport/>}
            title={"Charger des données"}
            color={"danger"}
            callback={loadFromFile}
            isButtonDisabled={isButtonDisabled}
        >
            <Container className="d-flex flex-column align-items-center" >
                <p>Cette action remplacera les données actuelles.</p>
                <DropFile handleDatas={handleDatas} />
            </Container>
        </Validation>
    )
}

export default UploadDatas