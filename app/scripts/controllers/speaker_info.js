'use strict';

app.controller('SpeakerInfoCtrl', ['$scope',function($scope) {
  $('.popover').hide();
  $('.animated').removeClass('bounceIn');
  $('#speaker_info').addClass('bounceIn');
}]);
