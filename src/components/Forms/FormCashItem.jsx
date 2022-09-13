import { useState } from "react";
import { Form, Modal } from "react-bootstrap";
import { FaPiggyBank } from "react-icons/fa";
import Validation from "../Validation";

const FormCashItem = ({ onClose, onChange }) => {

    const fieldsDatas = {
        id: { valid: null, value: "" },
        date: { valid: true, value: null },
        label: { valid: null, value: "" },
        type: { valid: null, value: "" },
        folio: { valid: null, value: "" },
        mvt: { valid: null, value: "0.00" },
    }

    const [fields, setFields] = useState(fieldsDatas)
    const [isShow, setisShow] = useState(true)

    const updateDatas = () => {
        console.log("resetDatas");
        debugger
        // onChange({
        //     name: null,
        //     years: []
        // })
        setisShow(false)
        onClose()
        // navigate(pathTo(Menu.Home));
    }

    const handleClose = (e) => {
        console.log("handleClose dans ResetDatas");
        setisShow(false)
        onClose()
    }

    return (
        <>
            <Validation
                show={isShow}
                onClose={handleClose}
                icon={<FaPiggyBank />}
                title={"Saisir les données"}
                color={"success"}
                callback={updateDatas}
            >
                <Form>
                    <Form.Group className="mb-3" >
                        <Form.Label>Libellé</Form.Label>
                        <Form.Control
                            id="label"
                            className={`input-control
                                ${fields.label.valid === null ? "" : fields.label.valid ? "is-valid" : "is-invalid"}
                                `}
                            placeholder="Entrez le libellé du mouvement"
                            value={fields.label.value}
                            onChange={onChange}
                            pattern={"pseudo"}
                            required
                            autoFocus
                        />
                    </Form.Group>
                    
                    <Form.Group className="mb-3" >
                        <Form.Label>Type</Form.Label>
                        <Form.Control
                            id="type"
                            className={`input-control
                                ${fields.type.valid === null ? "" : fields.type.valid ? "is-valid" : "is-invalid"}
                                `}
                            placeholder="Entrez le type du mouvement"
                            value={fields.type.value}
                            onChange={onChange}
                            pattern={"pseudo"}
                            required
                        />
                    </Form.Group>
                    
                    <Form.Group className="mb-3" >
                        <Form.Label>Folio</Form.Label>
                        <Form.Control
                            id="folio"
                            className={`input-control
                                ${fields.folio.valid === null ? "" : fields.folio.valid ? "is-valid" : "is-invalid"}
                                `}
                            placeholder="Entrez le folio du mouvement"
                            value={fields.folio.value}
                            onChange={onChange}
                            pattern={"pseudo"}
                            required
                        />
                    </Form.Group>
                    
                    <Form.Group className="mb-3" >
                        <Form.Label>Mouvement</Form.Label>
                        <Form.Control
                            id="mvt"
                            className={`input-control
                                ${fields.mvt.valid === null ? "" : fields.mvt.valid ? "is-valid" : "is-invalid"}
                                `}
                            placeholder="Entrez le montant du mouvement"
                            value={fields.mvt.value}
                            onChange={onChange}
                            pattern={"pseudo"}
                            required
                        />
                    </Form.Group>   

                </Form>
            </Validation>
        </>
    )
}

export default FormCashItem