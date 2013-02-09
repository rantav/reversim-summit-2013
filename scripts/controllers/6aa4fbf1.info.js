'use strict';

app.controller('InfoCtrl', ['$scope',function($scope) {
  $('.popover').hide();
  $('.animated').removeClass('bounceIn');
  $('#info').addClass('bounceIn');
}]);
