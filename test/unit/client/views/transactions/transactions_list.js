(function () {

    "use strict";

    jasmine.DEFAULT_TIMEOUT_INTERVAL = jasmine.getEnv().defaultTimeoutInterval = 20000;

    Template.stub('transactionsList');

    describe('Template.transactionsList.transactions', function() {

        // given
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

        // mocking
        var mockRecordsCollectionCursor = jasmine.createSpyObj('recordsCollectionCursor', ['fetch']);

        // given
        var recordDescription1 = "Record 1";
        var recordDescription2 = "Record 2";

        var recordsForCurrentTransaction = [
            {
                description: recordDescription1
            },
            {
                description: recordDescription2
            }
        ];

        mockRecordsCollectionCursor.fetch.andReturn(recordsForCurrentTransaction);

        var _id = 444;
        var transactionNumber = 55;
        var registrationTime = 999;
        var transactionDate = 111;
        var description = "Some description";

        var expectedTransactionWithRecords = {
            _id: _id,
            transactionNumber: transactionNumber,
            registrationTime: registrationTime,
            transactionDate: transactionDate,
            description: description,
            records: [
                {
                    _first: true,
                    description: recordDescription1
                },
                {
                    description: recordDescription2
                }
            ]
        };

        beforeEach(function() {
            spyOn(Records, 'find').andReturn(mockRecordsCollectionCursor);

            Template.transactionsList._id = _id;
            Template.transactionsList.transactionNumber = transactionNumber;
            Template.transactionsList.registrationTime = registrationTime;
            Template.transactionsList.transactionDate = transactionDate;
            Template.transactionsList.description = description;
        });

        it('joins transaction with its records', function() {
            // when
            var actualTransactionWithRecords = Template.transactionsList.transactionWithRecords();

            // then
            expect(Records.find.callCount).toBe(1);
            expect(Records.find).toHaveBeenCalledWith({transactionId: _id}, {sort: {account: 1}, reactive: true});
            expect(mockRecordsCollectionCursor.fetch.callCount).toBe(1);
            expect(mockRecordsCollectionCursor.fetch).toHaveBeenCalledWith();
            expect(actualTransactionWithRecords).toEqual(expectedTransactionWithRecords);
        });

    });

})();
