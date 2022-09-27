import { BankItem } from "../classes/BankItem"
import {  FaRegSquare, FaRegCheckSquare } from "react-icons/fa"
// import "./BankItemCard.css"

/**
 * @param {{datas: BankItem}} props
 */
const BankItemCard = ({ datas }) => {

    const color = Math.sign(parseFloat(datas.mvt)) === -1 ? "danger" : "success"

    return (
        <section className="item-card" style={{ '--border-color': `var(--bs-${color})` }}>
            <div className="bank item-card__title">
                <div>{datas.date?.toLocaleDateString()}</div>
                <span className="text-uppercase">{datas.type}</span>
                <span className="text-uppercase">{datas.folio}</span>
                <span>{datas.getMvt()} € </span>
                <span>{datas.isChecked() ? <FaRegCheckSquare/> : <FaRegSquare/>}</span>
            </div>
            <div className="item-card__body">
                <span className="text-truncate">
                    {datas.label}
                </span>
            </div>
        </section>
    )
}

export default BankItemCard