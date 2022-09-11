import { Button, CloseButton, Modal } from "react-bootstrap"
import "./Validation.css"



/**
 * 
 * @param {{boolean, function, object}} props
 * @returns 
 */
const Validation = ({ show, onClose, icon, title, color, children, callback }) => {

    return (
        <Modal
            show={show}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header >
                <div className={`validation-icon bg-${color}`}>{icon}</div> 
                <CloseButton variant="white" onClick={onClose}/>
            </Modal.Header>

            <Modal.Body className="">
                <h1 className={`pb-4 text-${color} text-center`} >{title}</h1>
                {children}
            </Modal.Body>

            <Modal.Footer className="pt-4">
                <Button
                    variant={color}
                    onClick={() => callback()}
                >
                    Valider
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export {Validation as default}
