Template.transactionNew.helpers({
    transactionCollection: function () {
        return Transactions;
    },

    today: function () {
        var now = new Date();

        return new Date(now.getFullYear(), now.getMonth(), now.getDate());
    }
});
