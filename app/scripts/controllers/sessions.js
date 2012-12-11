'use strict';


app.controller('SessionsCtrl', ['$scope', '$http', 'data', '$routeParams' ,function($scope, $http, data, $routeParams) {
  var sheet = 3;
  $http.jsonp(data.getDataSheetUrl(sheet)).success(function(returned) {
    var sessions = data.parseFromSpreadsheet(returned);
    for (var i = sessions.length - 1; i >= 0; i--) {
      var s = sessions[i];
      s['css'] = s.speaker.split(' ')[0].toLowerCase();
    };
    $scope.sessions = sessions;
  }).error(function(returned) {
    console.log(returned);
  });
}]);
