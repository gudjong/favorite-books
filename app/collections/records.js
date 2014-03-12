Records = new Meteor.Collection('records', {
    schema: new SimpleSchema({
        transactionId: {
            type: String,
            denyUpdate: true
        },
        account: {
            type: String,
            denyUpdate: true
        },
        debit: {
            type: Number,
            optional: true,
            min: 0,
            denyUpdate: true
        },
        kredit: {
            type: Number,
            optional: true,
            min: 0,
            denyUpdate: true
        },
        description: {
            type: String,
            denyUpdate: true
        }
    })
});
