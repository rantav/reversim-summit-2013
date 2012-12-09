'use strict';

app.controller('SpeakersCtrl', ['$scope', '$http', 'data' ,function($scope, $http, data) {
  var sheet = 2;
  $http.jsonp(data.getDataSheetUrl(sheet)).success(function(returned) {
    $scope.people = data.parseFromSpreadsheet(returned, ['name', 'css', 'bio']);
  }).error(function(returned) {
    console.log(returned);
  });
}]);
