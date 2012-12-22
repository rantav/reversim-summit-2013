'use strict';

app.controller('SessionsCtrl', ['$scope', '$http', 'data', '$routeParams' ,
      function($scope, $http, data, $routeParams) {
  var enrich = function() {
    if ($scope.people && $scope.sessions) {
      $scope.sessions = data.enrich($scope.sessions, $scope.people,
        [['Speaker', 'name']]);
    }
  }

  var sessionsSheet = 3;
  var peopleSheet = 2;
  $http.jsonp(data.getDataSheetUrl(sessionsSheet)).success(function(returned) {
    var sessions = data.parseFromSpreadsheet(returned);
    $scope.sessions = sessions;
    enrich();
  }).error(function(returned) {
    console.log(returned);
  });
  $http.jsonp(data.getDataSheetUrl(peopleSheet)).success(function(returned) {
    var people = data.parseFromSpreadsheet(returned);
    $scope.people = people;
    enrich();
  }).error(function(returned) {
    console.log(returned);
  });
  $scope.sessionName = $routeParams.sessionName || "";
  $scope.query = "";
}]);
