'use strict';

/**
 * @ngdoc overview
 * @name dfiClickthruApp
 * @description
 * # dfiClickthruApp
 *
 * Main module of the application.
 */
angular
  .module('dfiClickthruApp', [
    'ngRoute',
    'studyControllers'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/static.html',
        controller: 'AboutCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/static.html',
        controller: 'MainCtrl'
      })
      .when('/case-studies', {
        templateUrl: 'views/studies.html',
        controller: 'StudyListCtrl'
      })
      .when('/case-studies/:studyId', {
        templateUrl: 'views/study-detail.html',
        controller: 'StudyDetailCtrl'
      })
      .when('/photo-scanning', {
        templateUrl: 'views/service.html',
        controller: 'ServiceCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
