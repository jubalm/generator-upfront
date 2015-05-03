/*
# Extend
---
This is similar to jQuery's `$.extend` method.
*/

(function(window, app){
  'use strict';
  window[app] = function(out) {
    out = out || {};
    for (var i = 1; i < arguments.length; i++) {
      if (!arguments[i]) {
        continue;
      }
      for (var key in arguments[i]) {
        if (arguments[i].hasOwnProperty(key)) {
          out[key] = arguments[i][key];
        }
      }
    }
    return out;
  };
})(window, 'extend');
