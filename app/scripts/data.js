'use strict';


angular.module('data', []).
  factory('data', function() {
    return {
      getDataSheetUrl: function(index) {
        var SPREADSHEET = 'http://spreadsheets.google.com/feeds/list/0AngbRXPzHA7adDRoeDFVRkZ1UEY5SXBwSjdSLU1nX2c/';
        var url = SPREADSHEET + index + '/public/basic?alt=json-in-script&callback=JSON_CALLBACK';
        return url;
      },
      parseFromSpreadsheet: function (data, columns) {
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
    }
  });
