	// Module jddmobileApp
	
	var heypromoApp = angular.module('heypromoApp', []);

	heypromoApp.config(function($routeProvider) {
		$routeProvider

			.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'heypromoController'
			})

			.when('/cloud', {
				templateUrl : 'pages/room.html',
				controller  : 'roomController'
			});
	});

	// create the controller and inject Angular's $scope
	heypromoApp.controller('heypromoController', function($scope) {
		$scope.bannertop = 'img/banner/1.jpg';
		$scope.pagetit = 'Pick One Below!!!'; 
		$scope.prod1 = 'img/products/mobile/1.png';
		$scope.prod2 = 'img/products/mobile/2.png';
		$scope.prod3 = 'img/products/mobile/3.png';
		$scope.prod4 = 'img/products/mobile/4.png';
	});

	heypromoApp.controller('roomController', function($scope) {
		$scope.message = 'Cool Page!! :)';

	});
	
	
	
	
	
	
	