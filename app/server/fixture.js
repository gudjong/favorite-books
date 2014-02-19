if (Transactions.find().count() === 0) {
    Transactions.insert({
        transactionNumber: 2,
        registrationTime: new Date().getTime(),
        transactionDate: new Date(2014, 0, 30).getTime(),
        description: 'Millifærsla'
    });
    Transactions.insert({
        transactionNumber: 1,
        registrationTime: new Date().getTime() - 7 * 1000 * 60,
        transactionDate: new Date(2014, 1, 3).getTime(),
        description: 'Millifærsla'
    });
    Records.insert({
        transactionId: Transactions.findOne({transactionNumber: 2})._id,
        account: "Sjóður",
        debit: 1000,
        description: "Inn á sjóð"
    });
    Records.insert({
        transactionId: Transactions.findOne({transactionNumber: 2})._id,
        account: "Hlaupareikningur",
        kredit: 1000,
        description: "Út af hlaupareikningi"
    });
    Records.insert({
        transactionId: Transactions.findOne({transactionNumber: 1})._id,
        account: "Hlaupareikningur",
        kredit: 100,
        description: "Út af hlaupareikningi"
    });
    Records.insert({
        transactionId: Transactions.findOne({transactionNumber: 1})._id,
        account: "Sjóður",
        debit: 1000,
        description: "Inn á sjóð"
    });
    Records.insert({
        transactionId: Transactions.findOne({transactionNumber: 1})._id,
        account: "Sparnaðarreikningur",
        debit: 900,
        description: "Inn á sjóð"
    });
}
