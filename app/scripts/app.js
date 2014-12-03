'use strict';

/**
 * @ngdoc overview
 * @name managerHtml5App
 * @description
 * # managerHtml5App
 *
 * Main module of the application.
 */
angular
  .module('managerHtml5App', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
