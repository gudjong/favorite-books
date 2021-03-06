if (Transactions.find().count() === 0) {
    var transactionId1 = Transactions.insert({
//        transactionNumber: incrementCounter('transactionNumber'),
//        registrationTime: new Date().getTime() - 7 * 1000 * 60,
        transactionDate: new Date(2014, 1, 3),
        description: 'Millifærsla'
    });
    Records.insert({
        transactionId: transactionId1,
        account: 'Hlaupareikningur',
        kredit: 100,
        description: 'Út af hlaupareikningi'
    });
    Records.insert({
        transactionId: transactionId1,
        account: 'Sjóður',
        debit: 1000,
        description: 'Inn á sjóð'
    });
    Records.insert({
        transactionId: transactionId1,
        account: 'Sparnaðarreikningur',
        kredit: 900,
        description: 'Út af spranaðarreikningi'
    });
    var transactionId2 = Transactions.insert({
//        transactionNumber: incrementCounter('transactionNumber'),
//        registrationTime: new Date().getTime(),
        transactionDate: new Date(2014, 0, 30),
        description: 'Millifærsla'
    });
    Records.insert({
        transactionId: transactionId2,
        account: 'Sjóður',
        debit: 1000,
        description: 'Inn á sjóð'
    });
    Records.insert({
        transactionId: transactionId2,
        account: 'Hlaupareikningur',
        kredit: 1000,
        description: 'Út af hlaupareikningi'
    });
}
