import { Button, CloseButton, Modal } from "react-bootstrap"
import "./Validation.css"

const Validation = ({ show, close, datas }) => {



    return (
        // TODO: implement logo like 
        // https://www.tutorialrepublic.com/snippets/preview.php?topic=bootstrap&file=simple-success-confirmation-popup
        <Modal
            show={show}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            {/* <Modal.Header className={`bg-${datas.color}`}> */}
            <Modal.Header className={`bg-${datas.color} validation-modal-header`} >
                <div className={`validation-icon bg-${datas.color}`}>{datas.icon}</div> 
                <Modal.Title>{datas.title}</Modal.Title>
                <CloseButton variant="white" onClick={close}/>
            </Modal.Header>

            <Modal.Body>
                {datas.message}
            </Modal.Body>

            <Modal.Footer>
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
