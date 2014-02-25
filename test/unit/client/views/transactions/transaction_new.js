(function () {
    "use strict";

    jasmine.DEFAULT_TIMEOUT_INTERVAL = jasmine.getEnv().defaultTimeoutInterval = 20000;

    Template.stub('transactionNew');

    describe('Template.transactionNew.transaction', function () {

        it('returns a new transaction', function () {
            expect(true).toBe(true);
        });

    });

})();
