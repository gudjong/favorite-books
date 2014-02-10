Template.transaction.helpers({
    registrationTimeToText: function (registrationTime) {
        var t = new Date(registrationTime);

        return t.getDate() + '.' + (t.getMonth() + 1) + '.' + t.getFullYear() + ' ' +
               t.getHours() + ':' + t.getMinutes() + ':' + t.getSeconds();
    },

    transactionDateToText: function(transactionDate) {
        var d = new Date(transactionDate);

        return d.getDate() + '.' + (d.getMonth() + 1) + '.' + d.getFullYear();
    }
});
