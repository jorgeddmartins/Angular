

	// create the module and name it scotchApp
	var uclApp = angular.module('uclApp', ['ngRoute']);

	// configure our routes
	uclApp.config(function($routeProvider) {
		$routeProvider

			.when('/', {
				templateUrl : 'templates/user.html',
				controller  : 'uclcontroller'
			})

			.when('/user', {
				templateUrl : 'templates/user.html',
				controller  : 'userController'
			})

			.when('/userlist', {
				templateUrl : 'templates/user-list.html',
				controller  : 'userlistController'
			})
			
			.when('/userlogo', {
				templateUrl : 'templates/corebrand-mainlogo.html',
				controller  : 'userlogoController'
			})
			
			.when('/history', {
				templateUrl : 'templates/history.html',
				controller  : 'historyController'
			})
			
			.when('/introduction', {
				templateUrl : 'templates/introduction.html',
				controller  : 'historyController'
			});
	});

	// create the controller and inject Angular's $scope
	uclApp.controller('uclcontroller', function($scope) {
		$scope.message = 'Something';
	});

	uclApp.controller('userController', function($scope) {
		$scope.message = 'Something.';
	});


uclApp.directive("scrollable", [function () {
	return {
		link: function (scope, elem) {
			elem.mCustomScrollbar({
				autoHideScrollbar: false,
				theme: 'uel-uefa',
				advanced:{
					updateOnContentResize: true
				}
			});
		}
	};
}]);



