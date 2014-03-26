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
            min: 0,
            denyUpdate: true,
            autoValue: Meteor.Collection.__TransactionNumberAutoValue__
        },
        registrationTime: {
            type: Date,
            denyUpdate: true,
            autoValue: Meteor.Collection.__RegistrationTimeAutoValue__
        },
        transactionDate: {
            type: Date,
            denyUpdate: true
        },
        description: {
            type: String,
            denyUpdate: true
        }
    }
});
