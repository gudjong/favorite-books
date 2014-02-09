Template.transactionsList.helpers({
    transactions: function() {
        return Transactions.find({}, {sort: {registrationTime: -1}, reactive: true});
    }
});
