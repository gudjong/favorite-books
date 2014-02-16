Meteor.publish('transactions', function() {
    return Transactions.find();
});

Meteor.publish('records', function() {
    return Records.find();
});
