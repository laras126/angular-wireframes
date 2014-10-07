'use strict';

/**
 * @ngdoc function
 * @name dfiClickthruApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dfiClickthruApp
 */
angular.module('dfiClickthruApp')
  .controller('MainCtrl', function ($scope) {
    $scope.clicked = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  })
  .animation('.slide', function() {
    var NG_HIDE_CLASS = 'ng-hide';
    return {
        beforeAddClass: function(element, className, done) {
            if(className === NG_HIDE_CLASS) {
                element.slideUp(done); 
            }
        },
        removeClass: function(element, className, done) {
            if(className === NG_HIDE_CLASS) {
                element.hide().slideDown(done);
            }
        }
    }
	});
