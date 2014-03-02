(function () {

    "use strict";

    jasmine.DEFAULT_TIMEOUT_INTERVAL = jasmine.getEnv().defaultTimeoutInterval = 20000;

    var _ = require('underscore');
    var webdriver = require('selenium-webdriver');
    var driver;

    function findDisplayedTransactionRows() {
        var deferredTransactionRows = webdriver.promise.defer();

        driver.findElements(webdriver.By.id('transaction-row')).then(function (displayedTransactionRows) {
            var transactionRows = _.map(displayedTransactionRows, function (displayedTransactionRow) {
                var transactionRow = {};

                function setTransactionProperty(displayedObject, displayedElement, transactionPropertyName) {
                    displayedObject.isElementPresent(webdriver.By.id(displayedElement)).then(function (isPresent) {
                        if (isPresent) {
                            displayedObject.findElement(webdriver.By.id(displayedElement)).getText().
                                then(function (elementValue) {
                                    transactionRow[transactionPropertyName] = elementValue;
                                });
                        }
                    });
                }

                setTransactionProperty(displayedTransactionRow, 'transaction-number', 'transactionNumber');
                setTransactionProperty(displayedTransactionRow, 'registration-time', 'registrationTime');
                setTransactionProperty(displayedTransactionRow, 'transaction-date', 'transactionDate');
                setTransactionProperty(displayedTransactionRow, 'transaction-description', 'transactionDescription');
                setTransactionProperty(displayedTransactionRow, 'account', 'account');
                setTransactionProperty(displayedTransactionRow, 'debit', 'debit');
                setTransactionProperty(displayedTransactionRow, 'kredit', 'kredit');
                setTransactionProperty(displayedTransactionRow, 'description', 'description');

                return transactionRow;
            });

            webdriver.promise.controlFlow().execute(function () {
                deferredTransactionRows.fulfill(transactionRows);
            });
        });

        return deferredTransactionRows.promise;
    }

    function registerTransaction() {
        var deferred = webdriver.promise.defer();

        deferred.reject('registerTransaction not yet implemented');

        return deferred.promise;
    }

    var existingTransactionRows = [
        {
            transactionNumber: '2',
            registrationTime: '2014.02.03 10:14:55',
            transactionDate: '2014.01.30',
            transactionDescription: 'Millifærsla',
            account: 'Hlaupareikningur',
            debit: '',
            kredit: '1000',
            description: 'Út af hlaupareikningi'
        },
        {
            account: 'Sjóður',
            debit: '1000',
            kredit: '',
            description: 'Inn á sjóð'
        },
        {
            transactionNumber: '1',
            registrationTime: '2014.02.03 10:10:22',
            transactionDate: '2014.02.03',
            transactionDescription: 'Millifærsla',
            account: 'Hlaupareikningur',
            debit: '',
            kredit: '100',
            description: 'Út af hlaupareikningi'
        },
        {
            account: 'Sjóður',
            debit: '1000',
            kredit: '',
            description: 'Inn á sjóð'
        },
        {
            account: 'Sparnaðarreikningur',
            debit: '',
            kredit: '900',
            description: 'Út af sparnaðarreikningi'
        }
    ];

    var helper = require('../rtd').helper;

    beforeEach(function (done) {
        helper.getDriverPromise().then(function (theDriver) {
            driver = theDriver;
            driver.get('http://localhost:8000/reset').then(function(){console.log('ok');},function(error){console.log('not ok', error);});
            driver.get('http://localhost:8000/setupTransactions');
            driver.get('http://localhost:8000').then(function () {
                done();
            });
        });
    });

    afterEach(function (done) {
        helper.postBackCoverage().then(function () {
            done();
        });
    });

    describe('Register transaction', function () {

        it('it lists all registered transactions by registration time, latest transactions first', function (done) {
            // given
            var expectedTransactionRows = existingTransactionRows;

            // when
            findDisplayedTransactionRows().then(function (displayedTransactionRows) {
                // then
                expect(displayedTransactionRows).toEqual(expectedTransactionRows);

                // complete
                done();
            }, function (message) {
                // fail fast
                expect('Rejected: ' + message).toBeUndefined();

                // complete
                done();
            });
        });

        it('it registers new transactions', function (done) {
            // given
            var expectedTransactionRows = [
                {
                    transactionNumber: '3',
                    registrationTime: '2014.02.03 10:14:55',
                    transactionDate: '2014.02.28',
                    transactionDescription: 'Ný millifærsla',
                    account: 'Hlaupareikningur',
                    debit: '1000',
                    kredit: '',
                    description: 'Inn á hlaupareikning'
                },
                {
                    account: 'Sjóður',
                    debit: '',
                    kredit: '1000',
                    description: 'Út af sjóði'
                }
            ].concat(existingTransactionRows);

            // when
            registerTransaction().then(findDisplayedTransactionRows).then(function (displayedTransactionRows) {
                // then
                expect(displayedTransactionRows).toEqual(expectedTransactionRows);

                // complete
                done();
            }, function (message) {
                // fail fast
                expect('Rejected: ' + message).toBeUndefined();

                // complete
                done();
            });
        });

    });

})();
