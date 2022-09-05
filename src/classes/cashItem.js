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

class CashItem {
    constructor(datas = {}) {
        Object.assign(initDatas, datas)
        Object.assign(this, initDatas)
    }
    getMvt() {
        return isNaN(parseFloat(this.mvt)) ? "0.00" : parseFloat(this.mvt).toFixed(2)
    }

}

export { CashItem }