'use strict';


angular.module('data', []).
  factory('data', function() {
    var SHEET = '0AngbRXPzHA7adDRoeDFVRkZ1UEY5SXBwSjdSLU1nX2c';
    var SPREADSHEETS_API = 'http://spreadsheets.google.com/feeds/list/';
    var SPREADSHEETS_UI = 'https://docs.google.com/spreadsheet/ccc?key=';
    return {
      getDataSheetUrl: function(index) {
        var url =  SPREADSHEETS_API + SHEET + '/' + index + '/public/basic?alt=json-in-script&callback=JSON_CALLBACK';
        return url;
      },
      getDataSheetHumanUrl: function(index) {
        var url = SPREADSHEETS_UI + SHEET + "#gid=" + index;
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
          if (matches) {
            var obj = {};
            for (var m = 1; m < matches.length; ++m) {
              obj[columns[m - 1]] = matches[m];
            }
            ret.push(obj);
          }
        }
        return ret;
      }
    }
  });
