'use strict';

describe('Controller: AgendaCtrl', function() {

  // load the controller's module
  beforeEach(module('reversimSummit2013App'));

  var AgendaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    scope = {};
    AgendaCtrl = $controller('AgendaCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function() {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
