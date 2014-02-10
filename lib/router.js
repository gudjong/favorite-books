Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading'
});

Router.map(function() {
    this.route('transactionsList', {
        path: '/',

        waitOn: function() {
            return [Meteor.subscribe('transactions'), Meteor.subscribe('records')];
        }
    })
});
