Template.transactionNew.helpers({
    transaction: function() {
        return newTransaction;
    },

    transactionDateToText: function(transactionDate) {
        var d = new Date(transactionDate);
        return d.getDate() + '.' + (d.getMonth() + 1) + '.' + d.getFullYear();
    }
});

Template.transactionNew.events({
    'change input[name=debit]': function(event, context) {
        console.log(newTransaction);
    }
});

var newTransaction = function() {
    var transaction = {
        transactionDate: function() { var now = new Date(); return new Date(now.getFullYear(), now.getMonth() + 1, now.getDate()).getTime(); }(),
        description: "Skráðu lýsingu",
        records: [{
            _first: true,
            account: "Tekjur"
        }]
    };

    return transaction;
}();
