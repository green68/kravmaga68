
/**
 * @typedef {Object} CashItemObject
 * @property {string} id
 * @property {null|Date} date
 * @property {string} type
 * @property {string} folio
 * @property {string} mvt
 * 
 */

/** @type {CashItemObject} */
const initDatas = {
    "id": "",
    "date": null,
    "label": "",
    "type": "",
    // "cheque": "",
    "folio": "",
    "mvt": "0.00",
    // "checked": false
}

/**
 * 
 */
class CashItem {
    /**
     * 
     * @param {Object|CashItemObject} datas 
     */
    constructor(datas = {...initDatas}) {
        Object.assign(initDatas, datas)
        Object.assign(this, initDatas)
    }
    /**
     * 
     * @returns {string}
     */
    getMvt() {
        return isNaN(parseFloat(this.mvt)) ? "0.00" : parseFloat(this.mvt).toFixed(2)
    }

}

export { CashItem }