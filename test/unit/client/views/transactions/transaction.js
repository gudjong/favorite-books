(function () {

    "use strict";

    jasmine.DEFAULT_TIMEOUT_INTERVAL = jasmine.getEnv().defaultTimeoutInterval = 20000;

    Template.stub('transaction');

    describe('Template.transaction.registrationTimeToText', function() {

        // given
        var expectedFormattedRegistrationTime = '9999.99.99 99:99:99';
        var mockMoment = jasmine.createSpyObj('moment', ['format']);
        var format = mockMoment.format.andReturn(expectedFormattedRegistrationTime);
        var moment = jasmine.createSpy('moment').andReturn(mockMoment);

        beforeEach(function() {
            window.moment = moment;
        });

        it('formats registration time', function() {
            var someRegistrationTime = 999;

            // when
            var actualFormattedRegistrationTime = Template.transaction.registrationTimeToText(someRegistrationTime);

            // then
            expect(moment.callCount).toBe(1);
            expect(moment).toHaveBeenCalledWith(someRegistrationTime);
            expect(format.callCount).toBe(1);
            expect(format).toHaveBeenCalledWith('YYYY.MM.DD HH:mm:ss');
            expect(actualFormattedRegistrationTime).toBe(expectedFormattedRegistrationTime);
        });

    });

    describe('Template.transaction.transactionDateToText', function() {

        // given
        var expectedFormattedTransactionDate = '9999.99.99';
        var mockMoment = jasmine.createSpyObj('moment', ['format']);
        var format = mockMoment.format.andReturn(expectedFormattedTransactionDate);
        var moment = jasmine.createSpy('moment').andReturn(mockMoment);

        beforeEach(function() {
            window.moment = moment;
        });

        it('formats transaction date', function() {
            var someTransactionDate = 111;

            // when
            var actualFormattedTransactionDate = Template.transaction.transactionDateToText(someTransactionDate);

            // then
            expect(moment.callCount).toBe(1);
            expect(moment).toHaveBeenCalledWith(someTransactionDate);
            expect(format.callCount).toBe(1);
            expect(format).toHaveBeenCalledWith('YYYY.MM.DD');
            expect(actualFormattedTransactionDate).toBe(expectedFormattedTransactionDate);
        });

    });

})();
