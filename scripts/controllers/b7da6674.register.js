'use strict';

app.controller('RegisterCtrl', ['$scope',function($scope) {
  $('.popover').hide();
  $('.animated').removeClass('bounceIn');
  $('#register').addClass('bounceIn');
}]);
