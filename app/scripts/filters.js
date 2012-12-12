'use strict';

angular.module('filters', []).
  filter('orFilter', function() {
    return function(items, orArr) {
      if (!items) {
        return [];
      }
      var ret = [];
      for (var i = items.length - 1; i >= 0; i--) {
        var item = items[i];
        for (var j = orArr.length - 1; j >= 0; j--) {
          var or = orArr[j]
          for (var p in or) {
            if (item[p] == or[p]) {
              ret.push(item);
              continue;
            }
          }
        };
      };
      return ret.reverse();
    }
  });
