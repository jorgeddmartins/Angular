	// Module r64cloudApp
	var r64cloudApp = angular.module('r64cloudApp', []);

	r64cloudApp.config(function($routeProvider) {
		$routeProvider

			.when('/', {
				templateUrl : 'assets/home.html',
				controller  : 'r64cloudController'
			})

			.when('/cloud', {
				templateUrl : 'assets/cloud.html',
				controller  : 'cloudController'
			});
	});

	// create the controller and inject Angular's $scope
	r64cloudApp.controller('r64cloudController', function($scope) {
		$scope.ilogo = 'img/logo.png';
		$scope.menu = 'img/icons/menu.png';
		$scope.contacts = 'img/icons/contacts.png';
		$scope.search = 'img/icons/search.png';
		$scope.imgtop = 'img/back/1600.jpg';
		$scope.titcloud = 'img/64-t.png';
		$scope.lcloud = 'Cloud';
		$scope.button = 'Give strenght to your company';
		$scope.simpleimg = 'img/simple.jpg';
		$scope.officeimg = 'img/office.jpg';
		$scope.ceoimg = 'img/ceo.jpg';
		$scope.simpeltxt = 'Simple R64Cloud +';
		$scope.officetxt = 'Office R64Cloud +';
		$scope.ceotxt = 'C.E.O. R64Cloud +';
		$scope.line = 'img/line.jpg';
		$scope.descript = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum mollis..';
		$scope.pluslink = 'See It Now +';
		$scope.iarrowtop = 'img/icons/arrow-top.png';
		$scope.arrowtxt = 'Have the best choice for you...';
		$scope.arrowtxtdev = 'Choose your best device...';
		$scope.btnarrtop = 'Step on it';
		$scope.macim = 'img/mac.png';
		$scope.macproim = 'img/mac-pro.png';
		$scope.iphoneim = 'img/iphone.png';
		$scope.icos13 = 'img/icons/s13.png';
		$scope.icoa13 = 'img/icons/a13.png';
		$scope.icom13 = 'img/icons/m13.png';
		$scope.icojdd13 = 'img/icons/jdd13.png';
	});

	r64cloudApp.controller('cloudController', function($scope) {
		$scope.message = 'Grande Página que vai ser!! :)';

	});
	
	
	
	
	
	
	