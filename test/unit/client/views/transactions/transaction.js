(function () {

    "use strict";

    jasmine.DEFAULT_TIMEOUT_INTERVAL = jasmine.getEnv().defaultTimeoutInterval = 20000;

    Template.stub('transaction');

    // mocking
    var mockMomentObject = jasmine.createSpyObj('moment', ['format']);
    var mockFormat = mockMomentObject.format;
    var mockMoment;// = jasmine.createSpy('moment').andReturn(mockMomentObject);

    beforeEach(function () {
        spyOn(jasmine.getGlobal(), 'moment').andReturn(mockMomentObject);
        mockMoment = jasmine.getGlobal().moment;
        mockFormat.reset();
        mockMoment.reset();
    });

    describe('Template.transaction.registrationTimeToText', function () {

        // given
        var expectedFormattedRegistrationTime = '9999.99.99 99:99:99';

        beforeEach(function () {
            mockFormat.andReturn(expectedFormattedRegistrationTime);
        });

        it('formats registration time', function () {
            var someRegistrationTime = 999;

            // when
            var actualFormattedRegistrationTime = Template.transaction.registrationTimeToText(someRegistrationTime);

            // then
            expect(mockMoment.callCount).toBe(1);
            expect(mockMoment).toHaveBeenCalledWith(someRegistrationTime);
            expect(mockFormat.callCount).toBe(1);
            expect(mockFormat).toHaveBeenCalledWith('YYYY.MM.DD HH:mm:ss');
            expect(actualFormattedRegistrationTime).toBe(expectedFormattedRegistrationTime);
        });

    });

    describe('Template.transaction.transactionDateToText', function () {

        // given
        var expectedFormattedTransactionDate = '9999.99.99';

        beforeEach(function () {
            mockFormat.andReturn(expectedFormattedTransactionDate);
        });

        it('formats transaction date', function () {
            var someTransactionDate = 111;

            // when
            var actualFormattedTransactionDate = Template.transaction.transactionDateToText(someTransactionDate);

            // then
            expect(mockMoment.callCount).toBe(1);
            expect(mockMoment).toHaveBeenCalledWith(someTransactionDate);
            expect(mockFormat.callCount).toBe(1);
            expect(mockFormat).toHaveBeenCalledWith('YYYY.MM.DD');
            expect(actualFormattedTransactionDate).toBe(expectedFormattedTransactionDate);
        });

    });

})();
