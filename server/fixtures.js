console.log(Transactions.findOne());
if (Transactions.find().count === 0) {
    console.log('no transactions');
    Transactions.insert({
        transactionDate: new Date().getDate(),
        registrationTime: new Date().getTime(),
        description: 'Dæmi um færslu'
    });
}
