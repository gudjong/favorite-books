Template.transactionsList.helpers({
    transactions: function() {
        return Transactions.find();
    }
});
