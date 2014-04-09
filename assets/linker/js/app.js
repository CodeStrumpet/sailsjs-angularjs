'use strict';

/**
 * The main Sails Angular app module
 *
 * @type {angular.Module}
 */

angular.module('app', [
  'ngRoute',
  'ui.bootstrap', 
  'sails.io'
])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/test', {
        templateUrl: '/template/find/test.html',
        controller: 'TestCtrl'
      }).when('/testjade', {
        templateUrl: '/template/find/testjade'
      });

    console.log('angular!!');
    //$locationProvider.html5Mode(true);
  });


/*
var app = angular.module('app', ['ui.bootstrap', 'sails.io']).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    console.log('angular!!');
    $locationProvider.html5Mode(true);//.hashPrefix('!')

    $routeProvider.
      when('/test', {
        templateUrl: '/template/find/test.html'
      }).
      when('/view4', {
        templateUrl: 'views/partials/partial1.html'
      });

  }]);

  */