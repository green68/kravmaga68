const initDatas = {
    "id": "",
    "date": null,
    "label": "",
    "type": "",
    "cheque": "",
    "folio": "",
    "mvt": "0.00",
    "checked": false
}

class BankItem {
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

}

export { BankItem }