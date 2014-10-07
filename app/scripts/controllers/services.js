'use strict';

/**
 * @ngdoc function
 * @name dfiClickthruApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the dfiClickthruApp
 */

var serviceControllers = angular.module('serviceControllers', []);

serviceControllers.controller('ServiceCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    $http.get('data/services/' + $routeParams.serviceId + '.json').success(function(data) {
      $scope.service = data;
    });
  }]);