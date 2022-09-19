
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
        this.id = +initDatas.id
        this.date = new Date(initDatas.date)
        this.label = initDatas.label
        this.type = initDatas.type
        this.folio = initDatas.folio
        this.mvt = initDatas.mvt
        
        // Object.assign(this, initDatas)
        debugger
    }
    /**
     * 
     * @returns {string}
     */
    getMvt() {
        return isNaN(parseFloat(this.mvt)) ? "0.00" : parseFloat(this.mvt).toFixed(2)
    }
    getDate() {
        return this.date
    }

}

export { CashItem }