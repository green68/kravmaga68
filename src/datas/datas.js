
const init = _ => {
    return {
        caisse: [
            {
                id: "2019-00",
                libelle: "solde",
                debit: 0.00,
                credit: 236.28
            },
            {
                id: "2019-01",
                libelle: "restitution avance caisse philippe",
                debit: 0.00,
                credit: 40.00
            },
            {
                id: "2019-02",
                libelle: "avance caisse philippe",
                debit: 40.00,
                credit: 0.00
            },
            {
                id: "2019-03",
                libelle: "achat tee-shirt alma",
                debit: 0.00,
                credit: 10.00
            },
            {
                id: "2019-04",
                libelle: "retrait banque",
                debit: 0.00,
                credit: 120.00
            },
            {
                id: "2019-05",
                libelle: "paiement stage",
                debit: 10.00,
                credit: 0.00
            },
        ],
        banque: [
            {
                id: "2019-00",
                libelle: "report solde",
                type: "",
                cheque: "",
                folio: "",
                debit: 0.00,
                credit: 3000.00,
                verifie: false
            },
            {
                id: "2019-01",
                libelle: "achat billet de train stage Lyon",
                type: "CB",
                cheque: "",
                folio: "",
                debit: 285.50,
                credit: 0.00,
                verifie: false
            },
            {
                id: "2019-02",
                libelle: "retrait gab",
                type: "",
                cheque: "",
                folio: "",
                debit: 120.00,
                credit: 0.00,
                verifie: false
            },
            {
                id: "2019-03",
                libelle: "cotisation laurent",
                type: "",
                cheque: "",
                folio: "",
                debit: 0.00,
                credit: 150.00,
                verifie: false
            },
        ]
    }
}

const getYear = () => {
    const _datas = init()

    console.log(_datas);
    return 2019
}

export {
    // init,
    getYear,
}
