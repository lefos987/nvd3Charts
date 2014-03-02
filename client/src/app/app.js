'use strict';

angular.module('app', ['templates', 'common', 'ngRoute', 'nvd3ChartDirectives'])
	.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'app/scatterplot/scatterplot.view.html',
				controller: 'ScatterCtrl'
			})
			.when('/pie', {
				templateUrl: 'app/pie/pie.view.html',
				controller: 'PieCtrl'
			})
			.when('/bar', {
				templateUrl: 'app/bar/bar.view.html',
				controller: 'BarCtrl'
			})
			.when('/stackedChart', {
				templateUrl: 'app/stackedChart/stackedChart.view.html',
				controller: 'StackedChartCtrl'
			})
			.otherwise({
				redirectTo: '/'
			});
		$locationProvider.html5Mode(true);
	}])
	.controller('AppCtrl', ['$scope', function ($scope) {}]);