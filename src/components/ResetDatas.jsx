import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { pathTo } from "../utilities/Functions";
import { Menu } from "../utilities/Menu";
import Validation from "./Validation";

/**
 * 
 * @param {{function, function}} {onClose, onReset }
 * @returns 
 */
const ResetDatas = ({onClose, onReset}) => {
    let navigate = useNavigate();

    const [isShow, setisShow] = useState(true)

    const resetDatas = () => {
        console.log("resetDatas");
        debugger
        onReset({
            name: null,
            years: []
          })
        setisShow(false)
        onClose()
        navigate(pathTo(Menu.Home));
    }

    const datas = {
        name: "resetDatas",
        title: "Effacer les données",
        message: "Cette action effacera toutes les données.",
        color: "danger",
        icon: <FaTrash />,
        callback: resetDatas
      }

    const handleClose = (e) => {
        console.log("handleClose dans ResetDatas");
        setisShow(false)
        onClose()
    }

    return (
        <>
            <Validation show={isShow} onClose={handleClose} datas={datas} />
        </>
    )
}

export { ResetDatas as default }