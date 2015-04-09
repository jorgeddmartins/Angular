// Module uclApp
	var uclApp = angular.module('uclApp', []);

	uclApp.config(function($routeProvider) {
		$routeProvider

			.when('/', {
				templateUrl : 'mobile/userapp.html',
				controller  : 'uclcontroller'
			})

			.when('/corebrand', {
				templateUrl : 'mobile/corebrandapp.html',
				controller  : 'brandController'
			})
			
			.when('/history', {
				templateUrl : 'mobile/historyapp.html',
				controller  : 'historyController'
			});
	});

	// create the controller and inject Angular's $scope
	uclApp.controller('uclcontroller', function($scope) {
		$scope.visual = '2015-18 visual identity';
	});
	
	uclApp.controller('brandController', function($scope) {
		$scope.brand = '';

	});
	
	uclApp.controller('historyController', function($scope) {
		$scope.histor = '';
	});