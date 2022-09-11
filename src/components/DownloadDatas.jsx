import { useState } from "react";
import { FaFileDownload } from "react-icons/fa";
import { DatasClass } from "../datas/datas";
import Validation from "./Validation";

/**
 * 
 * @param {{Function}} onClose 
 * @returns 
 */
const DownloadDatas = ({onClose}) => {
    const [isShow, setisShow] = useState(true)

    const saveToFile = () => {
        console.log("saveDatas");
        DatasClass.saveToFile()
        setisShow(false)
        onClose()
    }

    const datas = {
        name: "saveDatas",
        title: "Enregistrer les données",
        message: "Cette action enregistrera les données actuelles dans un fichier au format JSON.",
        color: "success",
        icon: <FaFileDownload />,
        callback: saveToFile
    }


    const handleClose = (e) => {
        console.log("handleClose dans SaveDatas");
        setisShow(false)
        onClose()
    }

    return (
        <>
            <Validation show={isShow} onClose={handleClose} datas={datas} />
        </>
    )
}

export { DownloadDatas as default }