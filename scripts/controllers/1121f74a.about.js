'use strict';


app.controller('AboutCtrl', ['$scope', '$http', 'data' ,function($scope, $http, data) {
  var sheet = 1;
  $http.jsonp(data.getDataSheetUrl(sheet)).success(function(returned) {
    $scope.people = data.parseFromSpreadsheet(returned);
  }).error(function(returned) {
    console.log(returned);
  });

  $scope.editUrl = data.getDataSheetHumanUrl(sheet);
  $scope.speakerName = "";
  $scope.permalinkable = false;
  $scope.query = "";
}]);
