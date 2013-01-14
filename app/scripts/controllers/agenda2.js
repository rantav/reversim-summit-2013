'use strict';

function getClassName(track) {
  if (! track) {
    return "";
  }
  if (track.indexOf("devops") > -1 || track.indexOf("dev culture") > -1) {
    return "devops";
  }
  if (track.indexOf("panel") > -1) {
    return "panel";
  }
  if (track.indexOf("craftsmanship") > -1) {
    return "craftsmanship";
  }
  if (track.indexOf("data") > -1) {
    return "data";
  }
  if (track.indexOf("product") > -1 || track.indexOf("startup") > -1 || track.indexOf("UX") > -1) {
    return "product";
  }
  if (track.indexOf("web") > -1) {
    return "web";
  }
  if (track.indexOf("mobile") > -1) {
    return "mobile";
  }
  if (track.indexOf("lab") > -1) {
    return "lab";
  }
  if (track.indexOf("KEYNOTE") > -1) {
    return "keynote";
  }

  return "";
}
app.controller('Agenda2Ctrl', ['$scope', '$http', 'data', '$routeParams',
    function($scope, $http, data, $routeParams) {
  $('.popover').hide();
  $('.animated').removeClass('bounceIn');
  $('#agenda2').addClass('bounceIn');
 var enrich = function() {
    if ($scope.agenda && $scope.sessions) {
      $scope.agenda = data.enrich($scope.agenda, $scope.sessions,
        [['room1', 'Subject'], ['room2', 'Subject'], ['lab', 'Subject']]);
      for (var i = $scope.agenda.length - 1; i >= 0; i--) {
        var row = $scope.agenda[i];
        row.room1.className = getClassName(row.room1.Track);
        row.room2.className = getClassName(row.room2.Track);
        row.lab.className = getClassName(row.lab.Track);
      };
      setTimeout(function() {
        // This is ugly, I know, but I just couldn't get the correct way
        // to work for me (using directives)
        $(".popoverable").popover();
      }, 1000);

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
