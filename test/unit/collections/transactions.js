(function () {

    "use strict";

    jasmine.DEFAULT_TIMEOUT_INTERVAL = jasmine.getEnv().defaultTimeoutInterval = 20000;

    describe('Meteor.Collection', function () {

        // given
        beforeEach(function () {
            Meteor.Collection.unset = jasmine.createSpy('unset');
        });

        describe('__TransactionNumberAutoValue__', function () {

            // given
            var expectedTransactionNumber = 99;

            beforeEach(function () {
                spyOn(jasmine.getGlobal(), 'incrementCounter').andReturn(expectedTransactionNumber);
            });

            it('produces the next transaction number', function () {
                // given
                Meteor.Collection.isInsert = true;

                // when
                var actualTransactionNumber = Meteor.Collection.__TransactionNumberAutoValue__();

                // then
                expect(Meteor.Collection.unset.callCount).toBe(0);
                expect(jasmine.getGlobal().incrementCounter.callCount).toBe(1);
                expect(jasmine.getGlobal().incrementCounter).toHaveBeenCalledWith('transactionNumber');
                expect(actualTransactionNumber).toBe(expectedTransactionNumber);
            });

            it('only works on insert', function () {
                // given
                Meteor.Collection.isInsert = false;

                // when
                var actualTransactionNumber = Meteor.Collection.__TransactionNumberAutoValue__();

                // then
                expect(jasmine.getGlobal().incrementCounter.callCount).toBe(0);
                expect(Meteor.Collection.unset.callCount).toBe(1);
                expect(Meteor.Collection.unset).toHaveBeenCalledWith();
                expect(actualTransactionNumber).toBeUndefined();
            });

        });

        describe('__RegistrationTimeAutoValue__', function () {

            it('produces a registration time', function () {
                // given
                Meteor.Collection.isInsert = true;
                var expectedTransactionTime = new Date();

                // when
                var actualRegistrationTime = Meteor.Collection.__RegistrationTimeAutoValue__();

                // then
                expect(Meteor.Collection.unset.callCount).toBe(0);
                expect(actualRegistrationTime).toEqual(expectedTransactionTime);
            });

            it('only works on insert', function () {
                // given
                Meteor.Collection.isInsert = false;

                // when
                var actualRegistrationTime = Meteor.Collection.__RegistrationTimeAutoValue__();

                // then
                expect(Meteor.Collection.unset.callCount).toBe(1);
                expect(Meteor.Collection.unset).toHaveBeenCalledWith();
                expect(actualRegistrationTime).toBeUndefined();
            });

        });

    });

})();
