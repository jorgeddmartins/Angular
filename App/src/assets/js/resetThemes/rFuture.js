
var removElms = $('.secTemp_1, .secTemp_2, .secTemp_3, .secTemp_4, .Content_In, .r-Header, .r-Footer');

var thisDocument = $(document);

;(function() {

	"use strict"

	$('._In_0').addClass('r_Future');
	removElms.remove();	

	$.fn.extend({

		rFuture: function(thisHero, thisHeroIn) {

			var fHero = thisHero;
			var fHeroIn = thisHeroIn;
		}

	});

	thisDocument.rFuture($('<div/>').addClass('rFHero').appendTo('.r_Future .secTemp_0'), $('<div/>').addClass('rHero_In').appendTo('.rFHero'));

})();