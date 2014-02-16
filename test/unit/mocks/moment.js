(function() {

    window.moment = jasmine.createSpy('moment').andReturn(jasmine.createSpyObj('moment', ['format']));

})();
