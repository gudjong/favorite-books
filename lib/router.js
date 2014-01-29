Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    waitOn: function() {
        return Meteor.subscribe('transactions');
    }
});

Router.map(function() {
    this.route('transactionsList', { path: '/' });
});
