(function() {

    "use strict";

    jasmine.DEFAULT_TIMEOUT_INTERVAL = jasmine.getEnv().defaultTimeoutInterval = 20000;

    // Capture Router.configure initialization.
    function emptyFn() {
        return undefined;
    }

    var routerWaitOn = emptyFn;

    spyOn(Router, 'configure').andCallFake(function(config) {
        expect(routerWaitOn).toBe(emptyFn);
        expect(config).toBeDefined();
        expect(config.waitOn).toBeDefined();
        expect(typeof config.waitOn).toEqual('function');
        routerWaitOn = config.waitOn;
    });

    describe('waitOn', function() {

        // given
        var expectedTransactionsCollectionCursor = {};
        var expectedRecordsCollectionCursor = {};

        function fakeSubscribe(collectionName) {
            if (collectionName === 'transactions') {
                return expectedTransactionsCollectionCursor;
            }
            if (collectionName === 'records') {
                return expectedRecordsCollectionCursor;
            }
            return undefined;
        }

        beforeEach(function() {
            spyOn(Meteor, 'subscribe').andCallFake(fakeSubscribe);
        });

        it('subscribes to all transactions and records', function() {
            // when
            var actualCollectionCursors = routerWaitOn();

            // then
            expect(Meteor.subscribe.callCount).toBe(2);
            expect(Meteor.subscribe).toHaveBeenCalledWith('transactions');
            expect(Meteor.subscribe).toHaveBeenCalledWith('records');
            expect(actualCollectionCursors).toEqual([
                expectedTransactionsCollectionCursor,
                expectedRecordsCollectionCursor
            ]);
        });

    });

})();
