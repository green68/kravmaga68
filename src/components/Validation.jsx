import { Button, CloseButton, Modal } from "react-bootstrap"
import "./Validation.css"



/**
 * 
 * @param {{boolean, function, object}} props
 * @returns 
 */
const Validation = ({ show, onClose, datas }) => {

    return (
        <Modal
            show={show}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header >
                <div className={`validation-icon bg-${datas.color}`}>{datas.icon}</div> 
                <CloseButton variant="white" onClick={onClose}/>
            </Modal.Header>

            <Modal.Body className="">
                <h1 className={`pb-4 text-${datas.color} text-center`} >{datas.title}</h1>
                {datas.message}
            </Modal.Body>

            <Modal.Footer className="pt-4">
                <Button
                    variant={datas.color}
                    onClick={() => datas.callback()}
                >
                    Valider
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export {Validation as default}
