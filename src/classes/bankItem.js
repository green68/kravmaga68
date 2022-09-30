// @ts-check

/**
 * @typedef {Object} BankItemObject
 * @property {string} id
 * @property {string|Date} date
 * @property {string} label
 * @property {string} type
 * @property {string} cheque
 * @property {string} folio
 * @property {string} mvt
 * @property {string} checked
 */

/** @type BankItemObject */
const initDatas = {
    "id": "",
    "date": "",
    "label": "",
    "type": "",
    "cheque": "",
    "folio": "",
    "mvt": "0.00",
    "checked": "false"
}

class BankItem {
    /**
     * 
     * @param {BankItemObject} datas 
     */
    constructor(datas = {...initDatas}) {
        Object.assign(initDatas, datas)
        this.id = +initDatas.id
        this.date = new Date(initDatas.date)
        this.label = initDatas.label
        this.type = initDatas.type
        this.cheque = initDatas.cheque
        this.folio = initDatas.folio
        this.mvt = initDatas.mvt
        this.checked = initDatas.checked
    }
    getMvt() {
        return isNaN(parseFloat(this.mvt)) ? "0.00" : parseFloat(this.mvt).toFixed(2)
    }
    getDate() {
        return this.date
    }
    getChecked() {
        return this.checked
    }
    isChecked() {
        return this.checked === "true"
    }

}

export { BankItem }