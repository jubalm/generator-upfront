(function(window, app) {
  'use strict';
  app = app || 'documentReady';
  var readyList = [];
  var readyFired = false;
  var readyEventHandlersInstalled = false;

  function ready() {
    if (!readyFired) {
      readyFired = true;
      for (var i = 0; i < readyList.length; i++) {
        readyList[i].fn.call(window, readyList[i].ctx);
      }
      readyList = [];
    }
  }

  function readyStateChange() {
    if (document.readyState === 'complete') {
      ready();
    }
  }

  window[app] = function(callback, context) {
    if (readyFired) {
      setTimeout(function() {
        callback(context);
      }, 1);
      return;
    } else {
      readyList.push({
        fn: callback,
        ctx: context
      });
    }
    if (document.readyState === 'complete') {
      setTimeout(ready, 1);
    } else if (!readyEventHandlersInstalled) {
      if (document.addEventListener) {
        document.addEventListener('DOMContentLoaded', ready, false);
        window.addEventListener('load', ready, false);
      } else {
        document.attachEvent('onreadystatechange', readyStateChange);
        window.attachEvent('onload', ready);
      }
      readyEventHandlersInstalled = true;
    }
  };
})(window, 'documentReady');
