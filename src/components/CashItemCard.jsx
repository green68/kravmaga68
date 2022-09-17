import { Card } from "react-bootstrap";
import { CashItem } from "../classes/CashItem";

/**
 * 
 * @param {CashItem} datas
 * @returns 
 */
const CashItemCard = ({datas}) => {

    console.log(datas);

    return (
        <Card className="bg-dark text-lght border border-secondary mb-3 p-3">
            <Card.Title className="d-flex justify-content-between">
                <span>{datas.date.toLocaleDateString()}</span>    
                <span>Montant : {datas.mvt}</span>    

            </Card.Title>
            <Card.Body>
                Label : {datas.label}
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between">
                <span>{datas.type}</span>
                <span>{datas.folio}</span>
            </Card.Footer>
        </Card>
    )
}

export default CashItemCard