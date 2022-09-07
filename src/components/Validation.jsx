import { Button, CloseButton, Modal } from "react-bootstrap"

const Validation = ({ show, close, datas }) => {



    return (
        <Modal
            show={show}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header >
                <Modal.Title>{datas.title}</Modal.Title>
                <CloseButton variant="white" onClick={close}/>
            </Modal.Header>

            <Modal.Body>
                {datas.message}
            </Modal.Body>

            <Modal.Footer>
                <Button
                    variant={datas.button}
                    onClick={() => datas.callback()}
                >
                    Valider
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export {Validation as default}
