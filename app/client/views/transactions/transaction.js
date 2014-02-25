Template.transaction.helpers({
    registrationTimeToText: function (registrationTime) {
        var time = moment(registrationTime);
        return time.format('YYYY.MM.DD HH:mm:ss');
    },

    transactionDateToText: function (transactionDate) {
        var date = moment(transactionDate);

        return date.format('YYYY.MM.DD');
    }
});
