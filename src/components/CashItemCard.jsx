import { Card } from "react-bootstrap";
import { CashItem } from "../classes/CashItem";

/**
 * 
 * @param {CashItem} datas
 * @returns 
 */
const CashItemCard = ({datas}) => {

    const color = Math.sign( parseFloat( datas.mvt)) === -1 ? "danger" : "success"

    return (
        <Card className={`bg-dark text-lght border border-${color} mb-3 p-3`} >
            <Card.Title className="d-flex justify-content-between">
                <span>{datas.date?.toLocaleDateString()}</span>    
                <span>{datas.getMvt()}</span>    

            </Card.Title>
            <Card.Body>
                <p className="text-truncate">
                {datas.label}

                </p>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between">
                <span>{datas.type}</span>
                <span>{datas.folio}</span>
            </Card.Footer>
        </Card>
    )
}

export default CashItemCard