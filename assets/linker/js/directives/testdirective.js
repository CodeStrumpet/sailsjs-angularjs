'use strict';

angular.module('app')
  .directive('testDirective', function () {
    return {
      templateUrl: '/template/find/testdirective.html',
      restrict: 'E',
      scope: {
      },
      controller : function($scope) {
        
      },
      link: function postLink(scope, element, attrs) {
        //element.text('this is the strengthInitForm directive');
      }
    };
  });