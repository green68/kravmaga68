import { BankItem } from "../classes/bankItem"
const datas = {
    "id": "01",
    "date": new Date(2022, 7, 26, 15, 0, 0),
    "label": "juste un label",
    "type": "",
    "cheque": "",
    "folio": "",
    "mvt": "0",
    "checked": false
}


test("create empty", () => {
    const data = { ...datas }
    const bankItem = new BankItem(data)

    expect(bankItem.date).toBeInstanceOf(Date)
})

describe.each([
    {value:{ id: "01", mvt: "x0" }, expected: /0.00/}, 
    {value:{ id: "01", mvt: "" }, expected: "0.00"}, 
    {value:{ id: "01", mvt: "2000" }, expected: "2000.00"}, 
    {value:{ id: "01", mvt: "-1" }, expected: "-1.00"}
])("new BankItem($value).getMvt()", ({value, expected}) =>
    test(`retourne ${expected}`, () => {
        const bankItem = new BankItem(value)

        expect(bankItem.getMvt()).toMatch(expected)
    })
)