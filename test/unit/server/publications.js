(function () {

    "use strict";

    jasmine.DEFAULT_TIMEOUT_INTERVAL = jasmine.getEnv().defaultTimeoutInterval = 20000;

    describe('Meteor.publish.__PublishTransactions__', function () {

        // given
        var expectedTransactionsCollectionCursor = {};

        beforeEach(function () {
            spyOn(Transactions, 'find').andReturn(expectedTransactionsCollectionCursor);
        });

        it('publishes all transactions and records', function () {
            // when
            var actualTransactionsCollectionCursor = Meteor.publish.__PublishTransactions__();

            // then
            expect(Transactions.find.callCount).toBe(1);
            expect(Transactions.find).toHaveBeenCalledWith();
            expect(actualTransactionsCollectionCursor).toBe(expectedTransactionsCollectionCursor);
        });

    });

    describe('Meteor.publish.__PublishRecords__', function () {

        // given
        var expectedRecordsCollectionCursor = {};

        beforeEach(function () {
            spyOn(Records, 'find').andReturn(expectedRecordsCollectionCursor);
        });

        it('publishes all transactions and records', function () {
            // when
            var actualRecordsCollectionCursor = Meteor.publish.__PublishRecords__();

            // then
            expect(Records.find.callCount).toBe(1);
            expect(Records.find).toHaveBeenCalledWith();
            expect(actualRecordsCollectionCursor).toBe(expectedRecordsCollectionCursor);
        });

    });

})();
