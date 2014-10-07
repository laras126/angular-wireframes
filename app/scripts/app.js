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
    'studyControllers',
    'serviceControllers'
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
      .when('/contact', {
        templateUrl: 'views/contact.html',
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
      .when('/:serviceId', {
        templateUrl: 'views/service.html',
        controller: 'ServiceCtrl'
      })
      .when('/film-transfer', {
        templateUrl: 'views/service.html',
        controller: 'ServiceCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
