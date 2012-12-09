'use strict';

describe('Controller: SessionsCtrl', function() {

  // load the controller's module
  beforeEach(module('reversimSummit2013App'));

  var SessionsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    scope = {};
    SessionsCtrl = $controller('SessionsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function() {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
