import { useState } from "react"
import { FaFileUpload } from "react-icons/fa"
import Validation from "./Validation";

function UploadDatas({ onClose, onUpload }) {
    const [isShow, setisShow] = useState(true)

    const loadFromFile = () => {
        console.log("loadDatas");
        setisShow(false)
        debugger
        // navigate(pathTo(Menu.Home));
    }

    const handleClose = (e) => {
        console.log("handleClose dans UploadDatas");
        setisShow(false)
        onClose()
    }

    // const datas = {
    //     name: "uploadDatas",
    //     // title: "Charger des données",
    //     // message: "Cette action remplacera les données actuelles.",
    //     // color: "danger",
    //     // icon: <FaFileUpload />,
    //     // callback: loadFromFile
    // }

    return (
        <Validation 
            show={isShow} 
            onClose={handleClose} 
            icon={<FaFileUpload/>}
            title={"Charger des données"}
            color={"danger"}
            children={"Cette action remplacera les données actuelles."}
            callback={loadFromFile}
            // datas={datas} 
        />
    )
}

export default UploadDatas