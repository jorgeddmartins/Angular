
let $eventClick = 'click';
let $ThDocument = $(document);

$(function() {

	"use strict"

	let preHTemp = $('<div/>').addClass('pre-header');
	$('.container-downHeader').before(preHTemp);

	let mobNavTemp = '<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">' + 
							'<span class="icon-bar"></span>' +
							'<span class="icon-bar"></span>' +
							'<span class="icon-bar"></span>' +
					  '</button>';

	$('.navbar-brand').before(mobNavTemp);


	$.fn.mainMenu = function() {

		return this.on($eventClick, '.liNav', function(){

			$('.liNav').removeClass('borderNav');
			$(this).addClass('borderNav');

		});
	}

	$($ThDocument).mainMenu();


});