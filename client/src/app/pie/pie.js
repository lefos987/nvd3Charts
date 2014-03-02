'use strict';

/**
 * @ngdoc function
 * @name ng.module:pie
 * @function
 *
 * @description
 * [add a description]
 *
 */
angular.module('pie', [])

	/**
	 * @ngdoc function
	 * @name ng.controller:pieCtrl
	 * @function
	 *
	 * @description
	 * [add a description]
	 *
	 */
	.controller('PieCtrl', ['$scope', function ($scope) {
		$scope.pieData = [
			{ key: 'First', y: 5 },
			{ key: 'Second', y: 2 },
			{ key: 'Third', y: 9 },
			{ key: 'Fourth', y: 7 },
			{ key: 'Fifth', y: 4 },
			{ key: 'Sixth', y: 3 },
			{ key: 'Seventh', y: 9 }
		];

		$scope.xFunction = function () {
			return function (d) {
				return d.key;
			};
		};

		$scope.yFunction = function () {
			return function (d) {
				return d.y;
			};
		};
	}]) //ghurt-marker:module
;