(function() {

    "use strict";

    jasmine.DEFAULT_TIMEOUT_INTERVAL = jasmine.getEnv().defaultTimeoutInterval = 20000;

    describe('Router.waitOn', function() {

        // given
        var routerWaitOn = function() {
            return undefined;
        };
        spyOn(Router, 'configure').andCallFake(function(config) {
            if (config && config.waitOn && typeof config.waitOn === 'function') {
                routerWaitOn = config.waitOn;
            }
        });

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
