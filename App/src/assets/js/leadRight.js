
// Click Event
let ck = 'click';

// Document Element
let d = $(document);

$(function() {

	"use strict";


	$.fn.runDaultRight = function(rightOptions) {

		let defaultRight = {

			// All Html Tags
			tags: {

				// Span Tag
				spanTag: '<span>',

				// Hr Tag
				hrTag: '<hr>'
			},

			// Main Accordion Link
			accorCl: 'accor-link',

			// iP Count Value
			ipValue: 77
		};

		// Right Accor Settings
		let settingsR = $.extend( true, {}, defaultRight, rightOptions);

		// Green Border Injection
		let staticBorder = $(settingsR.tags.spanTag, { class: 'static-ico-sm'}).appendTo('.accor-link');

		// Adding Borders On AccorLink
        $.fn.borderGreen = function(borL, iCl) { 

        	// Border & icon green Logic
        	return this.on(ck, '.' + settingsR.accorCl, function() { 

        		$('.' + settingsR.accorCl).removeClass(borL) 
        		$(this).addClass(borL);

        		$('.accor-link .icon').removeClass(iCl);
        		$('.icon', this).addClass(iCl); 
        	}); 
        }

        // Run value Function
		d.borderGreen('borderGreen', 'iconCol');

		// Global Click Event
		$.fn.GlobCk = function(idL) {

			// Global Click Event
			return this.on(ck, '*', function() {

				// Check For An Id
				let id = $(this).attr(idL);

				// id 'add-comment' To Be Clicked On
				if(id == 'add-comment') {

					$(this).toggleClass('icon-plus-circle icon-circle-minus');
					
					$('#comment-scroll').slideToggle(100);
				}

			});
		}
		d.GlobCk('id');


		// hr Template For Square1
		let hr = $(settingsR.tags.hrTag, { class: 'Square1'});

		// hr Injection For Square1
		$('.OriginID').after(hr);

		// hr Template For Square2
		let hr2 = $(settingsR.tags.hrTag, { class: 'Square2'});

		// hr Injection For Square2
		$('.postCField').after(hr2);

		// IpCount Value Template
		let iC = $(settingsR.tags.spanTag, { class: 'ipCount' }).html(settingsR.ipValue);

		// IpCount Value Injection
		$('#IPLabel').before(iC);


		// d.on(ck, '#avalFrom', function() {

		// 	$('.bodyCalend, .DatePickerDrop').toggle();
		// 	$('.AvailableCalendar').toggleClass('z_Calendar');
		// 	$('.sdob, .pdob').removeClass('z_Calendar');
		// 	$('.TeleGridHour').show();
		// 	$('.DatePickerDrop').css({ width: '609px', left: '95px', top: '34%'});
		// 	$('.TeleGridDays').css({ 'margin-right': '7px'});

		// });

		// d.on(ck, '#DateOfBirth', function() {

		// 	$('.bodyCalend, .DatePickerDrop').toggle();
		// 	$('.sdob').toggleClass('z_Calendar');
		// 	$('.AvailableCalendar, .pdob').removeClass('z_Calendar');
		// 	$('.TeleGridHour').hide();
		// 	$('.DatePickerDrop').css({ width: 'auto', left: '37.57%', top: '27.7%'});
		// 	$('.TeleGridDays').css({ 'margin-right': 0 });

		// });

		// d.on(ck, '#PartnerDateOfBirth', function() {

		// 	$('.bodyCalend, .DatePickerDrop').toggle();
		// 	$('.pdob').toggleClass('z_Calendar');
		// 	$('.AvailableCalendar, .sdob').removeClass('z_Calendar');
		// 	$('.TeleGridHour').hide();
		// 	$('.DatePickerDrop').css({ width: 'auto', left: '37.57%', top: '55.2%'});
		// 	$('.TeleGridDays').css({ 'margin-right': 0 });

		// });

		// d.on(ck, '.closeBodyCalend', function() {

		// 	$('.bodyCalend, .DatePickerDrop').hide();
		// 	$('.AvailableCalendar').removeClass('z_Calendar');

		// });


		// Run ScrollBars
		$("#ProductAnswers, #LogHistory, #MerchantSales, #CallRecording").mCustomScrollbar({ theme: "minimal" });

	}

	// Runs Prpreties Function(Runs Main Function)
	d.runDaultRight();

});