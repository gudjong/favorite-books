Router.configure({
    layoutTemplate: 'layout',

    loadingTemplate: 'loading',

    waitOn: function() {
        return [Meteor.subscribe('transactions'), Meteor.subscribe('records')];
    }
});

Router.map(function() {
    this.route('transactionsList', {
        path: '/'
    });
});
