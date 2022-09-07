import { Button, CloseButton, Modal } from "react-bootstrap"

const Validation = ({ show, close, title }) => {



    return (
        <Modal
            show={show}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header >
                <Modal.Title>{title}</Modal.Title>
                <CloseButton variant="white" onClick={close}/>
            </Modal.Header>

            <Modal.Body>
                Cette action effacera toutes les données!
            </Modal.Body>

            <Modal.Footer>
                <Button
                    variant="danger"
                    // onClick={saveForm}
                >
                    Valider
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export {Validation as default}
