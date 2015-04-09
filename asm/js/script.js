	// Module asmApp
	var asmApp = angular.module('asmApp', ['ngRoute']);

	asmApp.config(function($routeProvider) {
		$routeProvider

			.when('/', {
				templateUrl : 'assets/home.html',
				controller  : 'asmController'
			})

			.when('/products', {
				templateUrl : 'assets/products.html',
				controller  : 'productController'
			})
			
			.when('/skurts', {
				templateUrl : 'assets/products/skurts.html',
				controller  : 'skurtsController'
			});
	});

	// create the controller and inject Angular's $scope
	asmApp.controller('asmController', function($scope) {
		$scope.banner = 'img/banners/ballons.jpg';
		$scope.logo = 'img/logo.png';
		$scope.downmessage = 'Have a Look on our work...';
		$scope.doproduct1wnmes = 'Pick up one!!!';
		$scope.product1 = 'img/products/1.jpg';
		$scope.product2 = 'img/products/2.jpg';
		$scope.product3 = 'img/products/3.jpg';
		$scope.prodtxt = 'Belt’s Attachement';
		$scope.prodtxt2 = 'classic belt’s attachement';
		$scope.prodtxt3 = 'colar’s attachement';
		$scope.seeit = 'img/icons/seeit.png';
		$scope.closebtn = 'img/icons/close.png';
		$scope.seeitmid = 'img/icons/seeit-mid.png';
		$scope.facebook = 'img/socials/facebook.jpg';
		$scope.linkedin = 'img/socials/linkedin.jpg';
		$scope.privateasm = 'C. ASM, 2015';
		$scope.gobelt = false;
		$scope.gobeltcl = false;
		$scope.gocolar = false;
	});
	
	asmApp.controller('productController', function($scope) {
		$scope.bannerprod = 'img/banners/products.jpg';
		$scope.prodmessage = 'Our Products... are amazing!';
		$scope.prodsecmess = 'Please, Have a look!';
		$scope.plus = 'img/icons/plus.png';

	});
	
	asmApp.controller('skurtsController', function($scope) {
		$scope.bannerskurts = 'img/banners/skurts.jpg';
		$scope.bannerskurtsmob = 'img/banners/skurts-mobile.jpg';
		$scope.skurtsmessage = 'Products for Skurts';
		$scope.plus = 'img/icons/plus.png';
	});
	 

	
	
	
	
	