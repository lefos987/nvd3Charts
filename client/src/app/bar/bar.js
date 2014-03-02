'use strict';

/**
 * @ngdoc function
 * @name ng.module:bar
 * @function
 *
 * @description
 * [add a description]
 *
 */
angular.module('bar', [])

	/**
	 * @ngdoc function
	 * @name ng.controller:barCtrl
	 * @function
	 *
	 * @description
	 * [add a description]
	 *
	 */
	.controller('BarCtrl', ['$scope', '$http', function ($scope, $http) {

		$http.get('/api/bar').then(function (data) {
			$scope.exampleData = data.bar;
		}, function (err) {
			$scope.error = err;
		});

	}]) //ghurt-marker:module
;