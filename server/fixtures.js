console.log(Transactions.findOne());
if (Transactions.find().count() === 0) {
    Transactions.insert({
        transactionNumber: 1,
        registrationTime: new Date().getTime(),
        transactionDate: new Date(2014, 0, 30).getTime(),
        description: 'Millifærsla',
        records: [
            {
                account: "Sjóður",
                debit: 1000,
                description: "Inn á sjóð"
            },
            {
                account: "Hlaupareikningur",
                kredit: 1000,
                description: "Út af hlaupareikningi"
            }
        ]
    });
    Transactions.insert({
        transactionNumber: 1,
        registrationTime: new Date().getTime(),
        transactionDate: new Date(2014, 1, 3).getTime(),
        description: 'Millifærsla',
        records: [
            {
                account: "Hlaupareikningur",
                kredit: 100,
                description: "Út af hlaupareikningi"
            },
            {
                account: "Sjóður",
                debit: 1000,
                description: "Inn á sjóð"
            },
            {
                account: "Sparnaðarreikningur",
                debit: 900,
                description: "Inn á sjóð"
            }
        ]
    });
}
