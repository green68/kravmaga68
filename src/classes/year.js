const initDatas = {
    "id": "2022",
    "bank_report": "0.00",
    "cash_report": "0.00",
    "bank_items": [],
    "cash_items": [],
}

class Year {
    constructor(datas = {}) {
        Object.assign(initDatas, datas)
        Object.assign(this, initDatas)
    }
    getId() {
        return this.id
    }
    getBankReport() {
        return isNaN(parseFloat(this.bank_report)) ? "0.00" : parseFloat(this.bank_report).toFixed(2)
    }
    getCashReport() {
        return isNaN(parseFloat(this.cash_report)) ? "0.00" : parseFloat(this.cash_report).toFixed(2)
    }
}

export { Year }