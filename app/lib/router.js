Router.configure.__WaitOn__ = function () {
    return [Meteor.subscribe('transactions'), Meteor.subscribe('records')];
};

Router.configure({
    layoutTemplate: 'layout',

    loadingTemplate: 'loading',

    waitOn: Router.configure.__WaitOn__
});

Router.map(function () {
    this.route('transactionsList', {
        path: '/'
    });
});
