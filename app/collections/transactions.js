Meteor.Collection.__TransactionNumberAutoValue__ = function () {
    if (this.isInsert) {
        return incrementCounter('transactionNumber');
    } else {
        this.unset();
    }
};

Meteor.Collection.__RegistrationTimeAutoValue__ = function () {
    if (this.isInsert) {
        return new Date();
    } else {
        this.unset();
    }
};

Transactions = new Meteor.Collection('transactions', {
    schema: {
        transactionNumber: {
            type: Number,
            label: 'Númer',
            min: 0,
            denyUpdate: true,
            autoValue: Meteor.Collection.__TransactionNumberAutoValue__
        },
        registrationTime: {
            type: Date,
            label: 'Skráningartími',
            denyUpdate: true,
            autoValue: Meteor.Collection.__RegistrationTimeAutoValue__
        },
        transactionDate: {
            type: Date,
            label: 'Dagsetning færslu',
            denyUpdate: true
        },
        description: {
            type: String,
            label: 'Lýsing',
            denyUpdate: true
        }
    }
});
