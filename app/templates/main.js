/*jshint devel:true*/
/*

# Main JavaScript
---

Requires the following libraries:

- lib/docready.js
- lib/extend.js

*/

(function(window, app, extend, ready){

  'use strict';

  app = app || 'UPFRONT';

  window[app] = function(options){

    var _this = this,
        defaults = {
          foo: 'bar',
          appName: app
        };

    this.config = extend({}, defaults, options);
    this.init = function(){
      console.log('Successfully initiated ' + _this.config.appName + '!');
    };

  };

  // on document ready
  ready(function(){
    var uf = new window.UPFRONT();
    uf.init();
  });

})(window, 'UPFRONT', window.extend, window.documentReady);
