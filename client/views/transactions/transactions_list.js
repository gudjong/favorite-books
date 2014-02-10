Template.transactionsList.helpers({
    transactions: function() {
        return Transactions.find({}, {sort: {registrationTime: -1}, reactive: true});
    },

    transactionWithRecords: function() {
        var records = Records.find({transactionId: this._id}, {sort: {account: 1}, reactive: true}).fetch();
        records[0]._first = true;

        return {
            _id: this._id,
            transactionNumber: this.transactionNumber,
            registrationTime: this.registrationTime,
            transactionDate: this.transactionDate,
            description: this.description,
            records: records
        };
    }
});
