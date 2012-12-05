'use strict';

describe('Controller: CfpCtrl', function() {

  // load the controller's module
  beforeEach(module('reversimSummit2013App'));

  var CfpCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    scope = {};
    CfpCtrl = $controller('CfpCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function() {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
