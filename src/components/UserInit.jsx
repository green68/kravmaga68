import "react-datepicker/dist/react-datepicker.css";
import "./UserInit.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from "react-bootstrap/Modal";
import DatePicker from "react-datepicker";
import { useState } from "react";
import { BsPlusSquareDotted } from "react-icons/bs";

const UserInit = ({ show }) => {

    const [isValid, setIsValid] = useState(false);
    const [startDate, setStartDate] = useState(new Date())
    const [pseudo, setPseudo] = useState("")
    const [bank, setBank] = useState("")
    const [cash, setCash] = useState("")

    const checkValid = () => {
        if (pseudo.length < 5) return
        if (isNaN(parseFloat(bank))) return
        if (isNaN(parseFloat(cash))) return
        setIsValid(true)
    }
 
    const handleBlur = (e) => {
        console.log(e.target.value)
        checkValid()
    }

    const saveForm = (e) => {

    }

    return (
        <Modal
            show={show}
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header >
                <Modal.Title>Initialisation</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" >
                        <Form.Label>Utilisateur</Form.Label>
                        <Form.Control 
                            placeholder="Votre nom/peudo" 
                            value={pseudo}
                            onChange={(e) => setPseudo(e.target.value)}
                            onBlur={handleBlur}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Année</Form.Label>
                        <DatePicker
                            selected={startDate}
                            showYearPicker
                            dateFormat={"yyyy"}
                            yearItemNumber={4}
                            onChange={date => setStartDate(date)}
                            className="form-control"
                        />

                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Solde Caisse</Form.Label>
                        <Form.Control
                            placeholder="0.00"
                            value={cash}
                            onChange={(e) => setCash(e.target.value)}
                            onBlur={handleBlur}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Solde Banque</Form.Label>
                        <Form.Control
                            placeholder="0.00"
                            value={bank}
                            onChange={(e) => setBank(e.target.value)}
                            onBlur={handleBlur}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button
                    // variant="primary"
                    className={`btn-dark ${isValid ? "" : "disabled"}`}
                    onClick={saveForm}
                >
                    Enregistrer
                </Button>
            </Modal.Footer>
        </Modal>
    )

}

export { UserInit as default };