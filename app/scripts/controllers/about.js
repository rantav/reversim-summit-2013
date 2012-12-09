'use strict';


reversimSummit2013App.controller('AboutCtrl', ['$scope', '$http', 'data' ,function($scope, $http, data) {
  $http.jsonp(data.getDataSheetUrl(1)).success(function(returned) {
    $scope.people = data.parseFromSpreadsheet(returned, ['name', 'css', 'bio']);
  }).error(function(returned) {
    console.log(returned);
  });
}]);
