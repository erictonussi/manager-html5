'use strict';

/**
 * @ngdoc function
 * @name managerHtml5App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the managerHtml5App
 */
angular.module('managerHtml5App')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
