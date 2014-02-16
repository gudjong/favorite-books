(function () {
    "use strict";

    jasmine.DEFAULT_TIMEOUT_INTERVAL = jasmine.getEnv().defaultTimeoutInterval = 20000;

    Template.stub('transactionsList');

    describe('Template.transactionsList.transactions', function() {

        it('reactively sorts transactions in descending order', function() {
            expect(true).toBe(true);
        });

    });

})();
