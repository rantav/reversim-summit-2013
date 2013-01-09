'use strict';

app.controller('CfpCtrl', ['$scope',function($scope) {
  $('.popover').hide();
  $('.animated').removeClass('bounceIn');
  $('#cfp').addClass('bounceIn');
}]);
