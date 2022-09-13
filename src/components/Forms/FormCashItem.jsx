import { useEffect, useState } from "react";
import { Button, FloatingLabel, Form, Modal } from "react-bootstrap";
import ReactDatePicker from "react-datepicker";
import { FaPiggyBank } from "react-icons/fa";
import Validation from "../Validation";
import fr from "date-fns/locale/fr";

const FormCashItem = ({ onClose, onChange }) => {

    const [startDate, setStartDate] = useState(new Date())
    const fieldsDatas = {
        id: { valid: null, value: -1 },
        date: { valid: true, value: startDate },
        label: { valid: null, value: "" },
        type: { valid: null, value: "" },
        folio: { valid: null, value: "" },
        mvt: { valid: null, value: "0.00" },
    }

    const [fields, setFields] = useState(fieldsDatas)
    const [isShow, setisShow] = useState(true)
    const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

    const updateDatas = () => {
        console.log("updateDatas dans FormCashItem");
        debugger
        onChange({
            id: fields.id.value,
            date: fields.date.value,
            label: fields.label.value,
            type: fields.type.value,
            folio: fields.folio.value,
            mvt: fields.mvt.value,
        })
        // setisShow(false)
        onClose()
        // navigate(pathTo(Menu.Home));
    }

    const handleClose = (e) => {
        console.log("handleClose dans FormCashItem");
        // setisShow(false)
        onClose()
    }


    const handleButtonDateClick = (e) => {
        // console.log(e)
        // debugger
        e.preventDefault()
        setIsDatePickerOpen(!isDatePickerOpen)
    }

    /**
     * 
     * @param {MouseEvent} e 
     */
    const handleChange = (e) => {
        const newFields = { ...fields }
        console.log(e.target.value)
        // debugger
        switch (e.target.id) {
            case "type":
                newFields.type.value = e.target.value
                break;
            case "folio":
                newFields.folio.value = e.target.value
                break;
            case "label":
                newFields.label.value = e.target.value
                break;
            case "mvt":
                newFields.mvt.value = e.target.value
                break;
            default:
                break;
        }
        setFields({
            ...fields,
            newFields
        })
        // debugger
     }

    const handleDateChange = (e) => {
        setIsDatePickerOpen(!isDatePickerOpen)
        setStartDate(e)
        const newFields = { ...fields }
        newFields.date.value = startDate
        setFields({
            ...fields,
            newFields
        })
    }

    return (
        <>
            {/* {console.log(`startDate: ${startDate}`)} */}
            <Validation
                show={isShow}
                onClose={handleClose}
                icon={<FaPiggyBank className="text-black"/>}
                title={"Mouvement de caisse"}
                color={"light"}
                callback={updateDatas}
            >
                <Form>
                    <Form.Group className="mb-3" >
                        <Button
                            className="btn-date"
                            onClick={handleButtonDateClick}
                        >
                            {console.log(startDate.toLocaleDateString())}
                            {startDate.toLocaleDateString()}
                        </Button>
                        {isDatePickerOpen && (
                            <ReactDatePicker
                                locale={fr}
                                dateFormat={"dd/MM/yyyy"}
                                selected={startDate}
                                onChange={handleDateChange}
                                inline
                            />

                        )}
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <FloatingLabel 
                            controlId="type"
                            label="Type du mouvement"
                            className="text-dark"
                        >
                            <Form.Control
                                label="Type du mouvement"
                                className={`input-control
                                    ${fields.type.valid === null ? "" : fields.type.valid ? "is-valid" : "is-invalid"}
                                    `}
                                placeholder="Type du mouvement"
                                value={fields.type.value}
                                onChange={handleChange}
                                pattern={"pseudo"}
                                required
                            />

                        </FloatingLabel>
                    </Form.Group>
                    
                    <Form.Group className="mb-3" >
                        <FloatingLabel 
                            controlId="folio"
                            label="Folio du mouvement"
                            className="text-dark"
                        >
                        <Form.Control
                            className={`input-control
                                ${fields.folio.valid === null ? "" : fields.folio.valid ? "is-valid" : "is-invalid"}
                                `}
                            placeholder="Folio du mouvement"
                            value={fields.folio.value}
                            onChange={handleChange}
                            pattern={"pseudo"}
                            required
                        />
                        </FloatingLabel>
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <FloatingLabel 
                            controlId="label"
                            label="Libellé du mouvement"
                            className="text-dark"
                        >
                            <Form.Control
                                className={`input-control
                                    ${fields.label.valid === null ? "" : fields.label.valid ? "is-valid" : "is-invalid"}
                                    `}
                                placeholder="Libellé du mouvement"
                                value={fields.label.value}
                                onChange={handleChange}
                                pattern={"pseudo"}
                                required
                                autoFocus
                            />
                        </FloatingLabel>
                    </Form.Group>


                    <Form.Group className="mb-3" >
                    <FloatingLabel 
                            controlId="mvt"
                            label="Montant du mouvement"
                            className="text-black"
                        >
                        <Form.Control
                            className={`input-control
                                ${fields.mvt.valid === null ? "" : fields.mvt.valid ? "is-valid" : "is-invalid"}
                                `}
                            placeholder="Montant du mouvement"
                            value={fields.mvt.value}
                            onChange={handleChange}
                            pattern={"pseudo"}
                            required
                        />
                        </FloatingLabel>
                    </Form.Group>

                </Form>
            </Validation>
        </>
    )
}

export default FormCashItem