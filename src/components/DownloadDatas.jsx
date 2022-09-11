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

    const handleClose = (e) => {
        console.log("handleClose dans DownloadDatas");
        setisShow(false)
        onClose()
    }
    
    // const datas = {
    //     name: "saveDatas",
    //     // title: "Enregistrer les données",
    //     // message: "Cette action enregistrera les données actuelles dans un fichier au format JSON.",
    //     // color: "success",
    //     // icon: <FaFileDownload />,
    //     // callback: saveToFile
    // }
    
    return (
        <>
            <Validation 
                show={isShow} 
                onClose={handleClose} 
                icon={<FaFileDownload/>}
                title={"Enregistrer les données"}
                color={"success"}
                children={"Cette action enregistrera les données actuelles dans un fichier au format JSON."}
                callback={saveToFile}
                // datas={datas} 
            />
        </>
    )
}

export { DownloadDatas as default }