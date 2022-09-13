import { useState } from "react"
import { FaFileUpload } from "react-icons/fa"
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
        onUpload(userDatas)
        // TODO: send message for datas change
        handleClose()
    }

    const handleClose = (e) => {
        console.log("handleClose dans UploadDatas");
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
            icon={<FaFileUpload/>}
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