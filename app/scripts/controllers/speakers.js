'use strict';

app.controller('SpeakersCtrl', ['$scope', '$http', 'data', '$routeParams' ,function($scope, $http, data, $routeParams) {
  $('.popover').hide();
  var enrich = function() {
    if ($scope.people && $scope.sessions) {
      for (var i = $scope.people.length - 1; i >= 0; i--) {
        var p = $scope.people[i];
        p.sessions = $scope.sessions.filter(function (s) {return s['Speaker'] == p['name']});
      };
      setTimeout(function() {
        // This is ugly, I know, but I just couldn't get the correct way
        // to work for me (using directives)
        $(".popoverable").popover();
      }, 1000);

    }
  }

  var sessionsSheet = 3;
  var peopleSheet = 2;
  $http.jsonp(data.getDataSheetUrl(peopleSheet)).success(function(returned) {
    $scope.people = data.parseFromSpreadsheet(returned);
    enrich();
  }).error(function(returned) {
    console.log(returned);
  });
  $http.jsonp(data.getDataSheetUrl(sessionsSheet)).success(function(returned) {
    $scope.sessions = data.parseFromSpreadsheet(returned);
    enrich();
  }).error(function(returned) {
    console.log(returned);
  });
  $scope.editUrl = data.getDataSheetHumanUrl(peopleSheet);
  $scope.speakerName = $routeParams.speakerName || "";
  $scope.permalinkable = true;
  $scope.query = "";
}]);
