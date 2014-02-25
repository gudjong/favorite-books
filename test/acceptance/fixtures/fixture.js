(function () {
    "use strict";

    function createRoute(route, handler) {
        var connectHandlers;
        if (typeof __meteor_bootstrap__.app !== 'undefined') {
            connectHandlers = __meteor_bootstrap__.app;
        } else {
            connectHandlers = WebApp.connectHandlers;
        }
        connectHandlers.stack.splice(0, 0, {
            route: '/' + route,
            handle: function (req, res) {
                res.writeHead(200, {'Content-Type': 'text/plain'});
                handler(req, res);
                res.end(route + ' complete');
            }.future()
        });
    }

    function reset() {
//        Meteor.users.remove({});
        Records.remove({});
        Transactions.remove({});
    }

    function setupTransactions() {
        var transactionId2 = Transactions.insert({
            transactionNumber: 1,
            registrationTime: new Date(2014, 1, 3, 10, 10, 22).getTime(),
            transactionDate: new Date(2014, 1, 3).getTime(),
            description: 'Millifærsla'
        });
        Records.insert({
            transactionId: transactionId2,
            account: 'Hlaupareikningur',
            kredit: 100,
            description: 'Út af hlaupareikningi'
        });
        Records.insert({
            transactionId: transactionId2,
            account: 'Sjóður',
            debit: 1000,
            description: 'Inn á sjóð'
        });
        Records.insert({
            transactionId: transactionId2,
            account: 'Sparnaðarreikningur',
            kredit: 900,
            description: 'Út af sparnaðarreikningi'
        });
        var transactionId1 = Transactions.insert({
            transactionNumber: 2,
            registrationTime: new Date(2014, 1, 3, 10, 14, 55).getTime(),
            transactionDate: new Date(2014, 0, 30).getTime(),
            description: 'Millifærsla'
        });
        Records.insert({
            transactionId: transactionId1,
            account: 'Sjóður',
            debit: 1000,
            description: 'Inn á sjóð'
        });
        Records.insert({
            transactionId: transactionId1,
            account: 'Hlaupareikningur',
            kredit: 1000,
            description: 'Út af hlaupareikningi'
        });
    }

    Meteor.startup(function () {
        reset();
        createRoute('reset', reset);
        createRoute('setupTransactions', setupTransactions);
    });
})();
