'use strict';

/**
 * @ngdoc function
 * @name dfiClickthruApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the dfiClickthruApp
 */
angular.module('dfiClickthruApp')
  .controller('ServiceCtrl', function ($scope) {
    $scope.services = [
      {
      	'name': 'Photo Scanning',
      	'tagline': 'Catchy tagline encouraging you to scan photos'
      }
    ];
  });
