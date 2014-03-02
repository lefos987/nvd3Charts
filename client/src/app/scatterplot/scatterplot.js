'use strict';

/**
 * @ngdoc function
 * @name ng.module:scatterplot
 * @function
 *
 * @description
 * [add a description]
 *
 */
angular.module('scatterplot', [])

	/**
	 * @ngdoc function
	 * @name ng.controller:scatterCtrl
	 * @function
	 *
	 * @description
	 * [add a description]
	 *
	 */
	.controller('ScatterCtrl', ['$scope', function ($scope) {
		var getData = function (groups, points) {
			var data = [],
				shapes = ['circle', 'cross', 'triangle-up', 'triangle-down', 'diamond', 'square'],
				lograndom = d3.random.logNormal(),
				normalrandom = d3.random.normal(),
				myRandom = function () {
					return Math.floor(Math.random() * 6500);
				};

			for (var i = 0; i < groups; i++) {
				data.push({
					key: 'Group ' + i,
					values: []
				});

				for (var j = 0; j < points; j++) {
					data[i].values.push({
						x: normalrandom(),
						y: myRandom(),
						size: Math.random()
							//, shape: shapes[j % 6]
					});
				}
			}
			return data;
		};
		$scope.exampleData =  getData(4, 10);
	}]) //ghurt-marker:module
;