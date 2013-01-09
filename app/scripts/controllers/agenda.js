'use strict';

app.controller('AgendaCtrl', ['$scope',function($scope) {
  $('.popover').hide();
  $('.animated').removeClass('bounceIn');
  $('#agenda').addClass('bounceIn');
}]);
