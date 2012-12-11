'use strict';


app.controller('SessionsCtrl', ['$scope', '$http', 'data', '$routeParams' ,function($scope, $http, data, $routeParams) {
  var sheet = 3;
  $http.jsonp(data.getDataSheetUrl(sheet)).success(function(returned) {
    var sessions = data.parseFromSpreadsheet(returned);
    $scope.sessions = sessions;
  }).error(function(returned) {
    console.log(returned);
  });
}]);
