Template.transaction.helpers({
    recordsWithFirstFlag: function() {
        var recordsWithFirstFlag = [];
        var first = true;
        _.each(this.records, function(record, index) {
            recordsWithFirstFlag.push(_.extend(_.pick(record, 'account', 'debit', 'kredit', 'description'), {_first: first}));
            first = false;
        });
        return recordsWithFirstFlag;
    },

    recordsCount: function(records) {
        return records.length
    },

    transactionDateToText: function(transactionDate) {
        var d = new Date(transactionDate);
        return d.getDate() + '.' + (d.getMonth() + 1) + '.' + d.getFullYear();
    }
});
