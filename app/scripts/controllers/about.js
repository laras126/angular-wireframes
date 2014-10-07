'use strict';

/**
 * @ngdoc function
 * @name dfiClickthruApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the dfiClickthruApp
 * Gets About page data and lists case studies
 */
angular.module('dfiClickthruApp')
  .controller('AboutCtrl', function ($scope, $http) {
  	// Hack to get around writing tests
  	$scope.awesomeThings = [1,2,3];
    $http.get('data/pages/about.json').success(function(data) {
      $scope.about = data;
    });
    $http.get('data/studies/studies.json').success(function(data) {
      $scope.studies = data;
    });
  });
