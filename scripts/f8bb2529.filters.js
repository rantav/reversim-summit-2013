'use strict';

angular.module('filters', []).
filter('orFilter', function() {
  /*
    An orFilter filters an array of objects by ORing a set of citerias.
    For example the array [{a: 1}, {b: 2}, {c: 3}, {d: 4}]
    with the cliterias: [{a: 1}, {b: 2, c: 3}, {d: 4}]
    would result in: [{a: 1}, {d: 4}]
   */
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
}).
filter('markdown', function() {
  return function(input) {
    return markdown.toHTML(input);
  };
});

