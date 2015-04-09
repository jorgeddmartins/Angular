
	var userApp = angular.module('userApp', ['ngRoute']);

	userApp.config(function($routeProvider) {
		$routeProvider

			.when('/', {
				templateUrl : 'templates/user/introduction.html',
				controller  : 'userController'
			})

			.when('/visual', {
				templateUrl : 'templates/user/visual.html',
				controller  : 'userController'
			})

			.when('/userlist', {
				templateUrl : 'templates/user/user-list.html',
				controller  : 'userController'
			})
			
			.when('/mainlogo', {
				templateUrl : 'templates/user/corebrand-mainlogo.html',
				controller  : 'userController'
			})

			.when('/history', {
				templateUrl : 'templates/user/history.html',
				controller  : 'userController'
			});
	});

	userApp.controller('userController', function($scope) {
		$scope.logodesk = 'something';
	});





