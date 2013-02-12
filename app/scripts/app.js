'use strict';

var app = angular.module('app', ['data', 'filters'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/agenda', {
        templateUrl: 'views/agenda.html',
        controller: 'AgendaCtrl'
      })
      .when('/cfp', {
        templateUrl: 'views/cfp.html',
        controller: 'CfpCtrl'
      })
      .when('/vote', {
        templateUrl: 'views/vote.html',
        controller: 'VoteCtrl'
      })
      .when('/speakers', {
        templateUrl: 'views/speakers.html',
        controller: 'SpeakersCtrl'
      })
      .when('/speakers/:speakerName', {
        templateUrl: 'views/speakers.html',
        controller: 'SpeakersCtrl'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl'
      })
      .when('/sessions', {
        templateUrl: 'views/sessions.html',
        controller: 'SessionsCtrl'
      })
      .when('/sessions/:sessionName', {
        templateUrl: 'views/sessions.html',
        controller: 'SessionsCtrl'
      })
      .when('/info', {
        templateUrl: 'views/info.html',
        controller: 'InfoCtrl'
      })
      .when('/speaker_info', {
        templateUrl: 'views/speaker_info.html',
        controller: 'SpeakerInfoCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);

app.directive('agendaCell', function() {
  return {
    restrict: 'E',
    scope: {
      cell: '='
    },
    templateUrl: 'partials/agenda-cell.html'
  };
});
