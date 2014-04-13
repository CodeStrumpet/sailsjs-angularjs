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
      .when('/', {
        templateUrl: '/template/find/main.jade',
        controller: 'MainCtrl'
      })
      .when('/test', {
        templateUrl: '/template/find/test.html',
        controller: 'TestCtrl'
      }).when('/testjade', {
        templateUrl: '/template/find/testjade.jade'
      }).otherwise({
        redirectTo: '/'
      });
    
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