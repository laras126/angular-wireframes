'use strict';

/**
 * @ngdoc function
 * @name dfiClickthruApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the dfiClickthruApp
 */
// angular.module('dfiClickthruApp')
//   .controller('ServiceCtrl', function ($scope, $http) {
// 		$http.get('data/services/photo-scanning.json').success(function(data) {
// 			$scope.scanning = data;
// 		});
// 		$http.get('data/services/film-transfer.json').success(function(data) {
//       $scope.film = data;
//     });
//   });

var serviceControllers = angular.module('serviceControllers', []);

serviceControllers.controller('ServiceCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    $http.get('data/services/' + $routeParams.serviceId + '.json').success(function(data) {
      $scope.service = data;
    });
  }]);