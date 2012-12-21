'use strict';

app.controller('Agenda2Ctrl', ['$scope', '$http', 'data', '$routeParams',
    function($scope, $http, data, $routeParams) {
  var enrich = function() {
    if ($scope.agenda && $scope.sessions) {
      $scope.agenda = data.enrich($scope.agenda, $scope.sessions,
        [['room1', 'Subject'], ['room2', 'Subject']]);
    }
  }
  var sessionsSheet = 3;
  var agendaSheet = 4;
  $http.jsonp(data.getDataSheetUrl(agendaSheet)).success(function(returned) {
    var agenda = data.parseFromSpreadsheet(returned);
    $scope.agenda = agenda;
    enrich();
  }).error(function(returned) {
    console.log(returned);
  });
  $http.jsonp(data.getDataSheetUrl(sessionsSheet)).success(function(returned) {
    var sessions = data.parseFromSpreadsheet(returned);
    $scope.sessions = sessions;
    enrich();
  }).error(function(returned) {
    console.log(returned);
  });
}]);
