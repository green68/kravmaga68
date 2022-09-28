import { useEffect } from "react";
import { useState } from "react";
import { Form, ToggleButton } from "react-bootstrap";


const InputMvt = ({ mvt, handleChange }) => {

    const [checked, setChecked] = useState(Math.sign(mvt) === -1)

    const handleChangeValue = (e) => {
        const value = e.currentTarget.value
        e.currentTarget.value = checked ? "-"+value : value
        handleChange(e)
    }
    
    useEffect(() => {
        const value = mvt.value.replace("-", "")
        mvt.value = checked ? "-"+value : value
        console.log(checked, mvt.value);
    },[checked, mvt])

    return (
        <>
            <Form.Label>Montant :</Form.Label>
            <div className="row">

                <div className="col" style={{ paddingRight: "0" }}>
                    <Form.Control
                        id="mvt"
                        style={{ borderTopRightRadius: "0", borderBottomRightRadius: "0" }}
                        className={`form-inline input-control
                            ${mvt.valid === null ? "" : mvt.valid ? "is-valid" : "is-invalid"}
                            `}
                        placeholder="Montant du mouvement"
                        value={mvt.value.replace("-","")}
                        onChange={handleChangeValue}
                        pattern={"float"}
                        required
                    />
                </div>
                <div className="inline col-1" style={{ paddingLeft: "0", minWidth: "3.5rem" }}>

                    <ToggleButton
                        className=" col-1 w-100 h-100"
                        style={{ borderTopLeftRadius: "0", borderBottomLeftRadius: "0", display: "inline-block" }}
                        id="toggle-check"
                        type="checkbox"
                        variant={checked ? "danger" : "success"}
                        checked={checked}
                        value="1"
                        onChange={(e) => {
                            setChecked(e.currentTarget.checked)
                            
                        }}
                        tabIndex="-1"
                    >
                        {checked ? "-" : "+"}
                    </ToggleButton>
                </div>

            </div>
        </>
    )
}

export default InputMvt