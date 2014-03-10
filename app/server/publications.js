Meteor.publish.__PublishTransactions__ = function () {
    return Transactions.find();
};

Meteor.publish('transactions', Meteor.publish.__PublishTransactions__);

Meteor.publish.__PublishRecords__ = function () {
    return Records.find();
};

Meteor.publish('records', Meteor.publish.__PublishRecords__);
