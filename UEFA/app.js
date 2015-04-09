

	// create the module and name it scotchApp
	var uclApp = angular.module('uclApp', ['ngRoute']);

	// configure our routes
	uclApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'templates/user.html',
				controller  : 'uclcontroller'
			})

			// route for the about page
			.when('/user', {
				templateUrl : 'templates/user.html',
				controller  : 'userController'
			})

			// route for the contact page
			.when('/userlist', {
				templateUrl : 'templates/user-list.html',
				controller  : 'userlistController'
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



