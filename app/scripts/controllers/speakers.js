'use strict';

app.controller('SpeakersCtrl', ['$scope', '$http', 'data', '$routeParams' ,function($scope, $http, data, $routeParams) {
  var sheet = 2;
  $http.jsonp(data.getDataSheetUrl(sheet)).success(function(returned) {
    $scope.people = data.parseFromSpreadsheet(returned);
  }).error(function(returned) {
    console.log(returned);
  });
  $scope.editUrl = data.getDataSheetHumanUrl(sheet);
  $scope.speakerName = $routeParams.speakerName || "";
  $scope.permalinkable = true;
  $scope.query = "";
}]);
