
let $TDocument = $(document);
let $ClEvent = 'click';

$(function() {

	"use strict"


	$.fn.navItem = function() {

		return this.on($ClEvent, '*', function() {

			let $ThisE = $(this);
			let $thisTrue = true;

			switch($thisTrue) {

				case ($ThisE.hasClass('nav-item')):
					$('.nav-item').removeClass('active');
					$(this).addClass('active');
					break;

				case ($ThisE.hasClass('callUsT')):
					$('.callUs').removeClass('tab-NoDisplay');
					$('.contUs').addClass('tab-NoDisplay');
					break;

				case ($ThisE.hasClass('contUsT')):
					$('.contUs').removeClass('tab-NoDisplay');
					$('.callUs').addClass('tab-NoDisplay');
					break;
			}

		});
	}

	$TDocument.navItem();

});