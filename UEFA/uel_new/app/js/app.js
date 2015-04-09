
	var uelApp = angular.module('uelApp', ['ngRoute']);

	uelApp.config(function($routeProvider) {
		$routeProvider

			.when('/', {
				templateUrl : 'app/templates/modal/login.html',
				controller  : 'uelcontroller'
			})

			.when('/registration', {
				templateUrl : 'app/templates/modal/registration.html',
				controller  : 'uelcontroller'
			})

			.when('/reset', {
				templateUrl : 'app/templates/modal/reset.html',
				controller  : 'uelcontroller'
			})
			
			.when('/activation', {
				templateUrl : 'app/templates/modal/activation.html',
				controller  : 'uelcontroller'
			})
			
			.when('/history', {
				templateUrl : 'templates/history.html',
				controller  : 'userController'
			})
			
			.when('/introduction', {
				templateUrl : 'templates/introduction.html',
				controller  : 'userController'
			});
	});

	uelApp.controller('uelcontroller', function($scope) {
		$scope.logodesk = 'img/logo.png';
		$scope.logomob = 'img/logo-m.png';
		$scope.logintxt1 = 'Welcome to the';
		$scope.logintxt2 = 'uefa europa league';
		$scope.logintxt3 = 'brand support site';
		$scope.loginuser = 'Username';
		$scope.loginpassword = 'Password';
		$scope.loginconfpassword = 'Confirm Password';
		$scope.logint = 'Login';
		$scope.resgistert = 'Register';
		$scope.forgotpss = 'Forgot Password';
		$scope.newht = 'New here?';
		$scope.loginemail = 'Email Address';
		$scope.loginconfemail = 'Confirm Email';
		$scope.loginfirstname = 'First Name';
		$scope.loginlastname = 'Last Name';

		//Reset Password
		$scope.respass = 'PASSWORD RESET';
		$scope.restx = 'Enter the email address of the account that you want to reset the password.';
		$scope.btnreset = 'Reset';

		//Registration
		$scope.resistert = 'REGISTRATION';
		$scope.loginjobdesc = 'Job Description';
		$scope.groupaccess = 'Group Access';
		$scope.optiontxt = 'Which category would you like to access?';
		$scope.modaltxt1 = 'All fields are compolsory for registration';
		$scope.modaltxt2 = 'By Signing up i agree to UEFA';
		$scope.modaltxta = 'Terms and Conditions';
		$scope.modaltxta2 = 'Privacy Policy';
		$scope.modaltxt3 = 'Have an Account already?';
		$scope.modaltxta3 = 'Login';

		//Activation
		$scope.acticationt = 'ACTIVATION';
		$scope.userfirst = 'User’s First Name';
		$scope.userlast = 'User’s Last Name';
		$scope.useremail = 'User’s Email Address';
		$scope.userejob = 'User’s Job Description';
		$scope.useregroup = 'User’s Group Access';
		$scope.activet = 'By submitting, you agree the above information is correct.';
		$scope.updatebnt = 'Update';
	});

	uelApp.controller('userController', function($scope) {
		$scope.user = 'Somethig here';
	});




