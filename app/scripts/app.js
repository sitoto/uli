'use strict';

/**
 * @ngdoc overview
 * @name uli365App
 * @description
 * # uli365App
 *
 * Main module of the application.
 */
angular
  .module('uli365App', []);
var PhoneGapInit = function () {
  this.boot = function () {
    angular.bootstrap(document, ['uli365App']);
  };

  if (window.phonegap !== undefined) {
    document.addEventListener('deviceready', function() {
      this.boot();
    });
  } else {
    console.log('PhoneGap not found, booting Angular manually');
    this.boot();
  }
};

angular.element(document).ready(function() {
  new PhoneGapInit();
});

