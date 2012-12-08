'use strict';

function parseFromSpreatsheet(data, columns) {
  var entries = data.feed.entry;
  var ret = [];
  var regexpString = [];
  for (var i = 0; i < columns.length; ++i) {
    regexpString.push(columns[i]+ ": (.*)");
  }
  regexpString = regexpString.join(", ");
  var regexp = new RegExp(regexpString);
  for (var i = 0; i < entries.length; ++i) {
    var entry = entries[i];
    var content = entry.content.$t;
    var matches = content.match(regexp);
    var obj = {};
    for (var m = 1; m < matches.length; ++m) {
      obj[columns[m - 1]] = matches[m];
    }
    ret.push(obj);
  }
  return ret;
}

reversimSummit2013App.controller('AboutCtrl', ['$scope', '$http',function($scope, $http) {
  $http.jsonp('http://spreadsheets.google.com/feeds/list/0AngbRXPzHA7adDRoeDFVRkZ1UEY5SXBwSjdSLU1nX2c/1/public/basic?alt=json-in-script&callback=JSON_CALLBACK').success(function(data) {
    $scope.people = parseFromSpreatsheet(data, ['name', 'css', 'bio']);
  }).error(function(data) {
    console.log(data);
  });
}]);
