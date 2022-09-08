import "react-datepicker/dist/react-datepicker.css";
import "./UserInit.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from "react-bootstrap/Modal";
import { useState } from "react";

const UserInit = ({ show, handleInit }) => {

    const fieldsDatas = {
        name: { valid: null, value: "" },
        date: { valid: true, value: new Date().getFullYear() },
        bank: { valid: null, value: "" },
        cash: { valid: null, value: "" }
    }
    const [fields, setFields] = useState(fieldsDatas)
    const [isValid, setIsValid] = useState(false);

    const isTargetValid = (target, value) => {
        const floatRegex = /^[+-]?\d+(\.\d{0,2})?$/
        const pseudoRegex = /^([a-zA-Z0-9-_]{5,25})$/
        // console.log(target);
        switch (target) {
            case "name":
                if(!pseudoRegex.test(value[target].value)) return false
                break;
            // case "year":
            //     // if (name.length < 5) return false
            //     break;
            case "bank":
                if (!floatRegex.test(value[target].value)) return false
                break;
                case "cash":
                if (!floatRegex.test(value[target].value)) return false
                break;
            default:
                break;
        }
        return true
    }

    const handleChange = (e) => {
        let temp = {...fields}
        temp[e.target.id].value = e.target.value

        const valid = isTargetValid(e.target.id, temp)
        temp[e.target.id].valid = valid
        setFields(temp)
        // validation button
        if(fields.name.valid && fields.bank.valid && fields.cash.valid)  {
            setIsValid(true)
        } else {
            setIsValid(false)
        }
    }

    const saveForm = (e) => {
        console.log("Initialisation éffectué");
        handleInit({
            name: fields.name.value,
            years: [
                {
                    id: fields.date.value,
                    bank_report: fields.bank.value,
                    cash_report: fields.cash.value,
                }
            ]
        })
        setFields(fieldsDatas)
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
                <Form id="formInit" >
                    
                    <Form.Group className="mb-3" >
                        <Form.Label>Nom d'utilisateur</Form.Label>
                        <Form.Control
                            id="name"
                            className={`input-control
                            ${fields.name.valid === null ? "" : fields.name.valid ? "is-valid": "is-invalid"}
                            `}
                            placeholder="Votre nom/peudo"
                            value={fields.name.value}
                            onChange={handleChange}
                            // pattern="eric v"
                            required
                            autoFocus
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Année</Form.Label>
                        <Form.Select
                            id="year"
                        >
                            <option>{fields.date.value}</option>
                            <option value="1">{(parseInt(fields.date.value) - 1).toString()}</option>
                            <option value="2">{(parseInt(fields.date.value) - 2).toString()}</option>
                        </Form.Select>
                    </Form.Group>
                    
                    <Form.Group className="mb-3" >
                        <Form.Label>Report solde Banque</Form.Label>
                        <Form.Control
                            id="bank"
                            className={fields.bank.valid === null ? "" : fields.bank.valid ? "is-valid": "is-invalid"}
                            placeholder="0.00"
                            value={fields.bank.value}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Report solde Caisse</Form.Label>
                        <Form.Control
                            id="cash"
                            className={fields.cash.valid === null ? "" : fields.cash.valid ? "is-valid": "is-invalid"}
                            placeholder="0.00"
                            value={fields.cash.value}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>

                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button form="formInit"
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