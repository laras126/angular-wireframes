'use strict';

/**
 * @ngdoc function
 * @name dfiClickthruApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the dfiClickthruApp
 */

var studyControllers = angular.module('studyControllers', []);

studyControllers.controller('StudyListCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('data/studies/studies.json').success(function(data) {
      $scope.studies = data;
    });
  }]);

studyControllers.controller('StudyDetailCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    $http.get('data/studies/' + $routeParams.studyId + '.json').success(function(data) {
      $scope.study = data;
    });
  }]);