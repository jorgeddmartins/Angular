var myApp = angular.module('myApp', []);

myApp.controller("MainCtrl", ['$scope', '$interval', function ($scope, $interval) {
	$scope.someText = '';
	//[FR] Ajoute du texte toutes les 1500 ms pour vérifier que la scrollbar fonctionne correctement (stoppe au bout de 10 iterations)
	//[EN] Add some text every 1500 ms to see if the scrollbar works properly (stop after 10 iterations)
	$interval(function(){
		$scope.someText += 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, vero eum tenetur saepe tempora. ';
	}, 1500, 10);
}]);

//[FR] La directive qui rend un élément scrollable
//[EN] The directive that makes an element scrollable
myApp.directive("scrollable", [function () {
	return {
		link: function (scope, elem) {
			elem.mCustomScrollbar({
				autoHideScrollbar: false,
				theme: 'dark',
				advanced:{
					updateOnContentResize: true
				}
			});
		}
	};
}]);