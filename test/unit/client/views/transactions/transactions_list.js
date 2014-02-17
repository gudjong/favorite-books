(function () {
    "use strict";

    jasmine.DEFAULT_TIMEOUT_INTERVAL = jasmine.getEnv().defaultTimeoutInterval = 20000;

    Template.stub('transactionsList');

    describe('Template.transactionsList.transactions', function() {

        // mock
        var expectedTransactionsCollectionCursor = {};

        beforeEach(function() {
            spyOn(Transactions, 'find').andReturn(expectedTransactionsCollectionCursor);
        });


        it('reactively sorts transactions in descending order', function() {
            // when
            var actualTransactionsCollectionCursor = Template.transactionsList.transactions();

            // then
            expect(Transactions.find.callCount).toBe(1);
            expect(Transactions.find).toHaveBeenCalledWith({}, {sort: {registrationTime: -1}, reactive: true});
            expect(actualTransactionsCollectionCursor).toBe(expectedTransactionsCollectionCursor);
        });

    });

    describe('Template.transactionsList.transactionWithRecords', function() {

        it('reactively sorts transactions in descending order', function() {
            expect(false).toBe(true);
        });

    });

})();
