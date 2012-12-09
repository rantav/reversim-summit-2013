'use strict';

describe('Controller: SpeakersCtrl', function() {

  // load the controller's module
  beforeEach(module('app'));

  var SpeakersCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    scope = {};
    SpeakersCtrl = $controller('SpeakersCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function() {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
