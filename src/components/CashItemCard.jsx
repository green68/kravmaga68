import { CashItem } from "../classes/CashItem"
// TODO: put in App.css ?
import "./CashItemCard.css"

/**
 * @param {{datas: CashItem}} props
 */
const CashItemCard = ({ datas }) => {

    const color = Math.sign(parseFloat(datas.mvt)) === -1 ? "danger" : "success"

    return (
        <section className="item-card" style={{ '--border-color': `var(--bs-${color})` }}>
            <div className="item-card__title">
                <span>{datas.date?.toLocaleDateString()}</span>
                <span className="text-uppercase">{datas.type}</span>
                <span className="text-uppercase">{datas.folio}</span>
                <span>{datas.getMvt()} €</span>
            </div>
            <div className="item-card__body">
                <span className="text-truncate">
                    {datas.label}
                </span>
            </div>
        </section>
    )
}

export default CashItemCard