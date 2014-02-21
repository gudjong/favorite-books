(function() {

    "use strict";

    jasmine.DEFAULT_TIMEOUT_INTERVAL = jasmine.getEnv().defaultTimeoutInterval = 20000;

    // Capture Meteor.publish initialization.
    function emptyFn() {
        return undefined;
    }

    var transactionsPublish = emptyFn;
    var recordsPublish = emptyFn;

    spyOn(Meteor, 'publish').andCallFake(function(collectionName, callback) {
        expect(['transactions', 'records']).toContain(collectionName);
        expect(callback).toBeDefined();
        expect(typeof callback).toEqual('function');
        if (collectionName === 'transactions') {
            expect(transactionsPublish).toBe(emptyFn);
            transactionsPublish = callback;
        } else if (collectionName === 'records') {
            expect(recordsPublish).toBe(emptyFn);
            recordsPublish = callback;
        }
    });

    describe('Meteor.publish transactions', function() {

        // given
        var expectedTransactionsCollectionCursor = {};

        beforeEach(function() {
            spyOn(Transactions, 'find').andReturn(expectedTransactionsCollectionCursor);
        });

        it('publishes all transactions and records', function() {
            // when
            var actualTransactionsCollectionCursor = transactionsPublish();

            // then
            expect(Transactions.find.callCount).toBe(1);
            expect(Transactions.find).toHaveBeenCalledWith();
            expect(actualTransactionsCollectionCursor).toBe(expectedTransactionsCollectionCursor);
        });

    });

    describe('Meteor.publish transactions', function() {

        // given
        var expectedRecordsCollectionCursor = {};

        beforeEach(function() {
            spyOn(Records, 'find').andReturn(expectedRecordsCollectionCursor);
        });

        it('publishes all transactions and records', function() {
            // when
            var actualRecordsCollectionCursor = recordsPublish();

            // then
            expect(Records.find.callCount).toBe(1);
            expect(Records.find).toHaveBeenCalledWith();
            expect(actualRecordsCollectionCursor).toBe(expectedRecordsCollectionCursor);
        });

    });

})();
