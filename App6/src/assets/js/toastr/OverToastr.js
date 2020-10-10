
let d = $(document);

let ck = 'click';

// Default Toastr Options
function toasterOptions() {
    toastr.options = {
        "closeButton": true,
        "debug": false,
        "newestOnTop": false,
        "progressBar": true,
        "positionClass": "toast-top-center",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "5000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }
};

// // for success - green box
// toastr.success('Success messages');

// // for errors - red box
// toastr.error('errors messages');

// // for warning - orange box
// toastr.warning('warning messages');

// // for info - blue box
// toastr.info('info messages');

$(function() {

	"use strict";

	toasterOptions();

	// Toastr Msg To Display
	$.fn.toastrMsg = function(mgsPop) {

		let tMDefaults = {
			window: $(document),
			OnWindowLoad: true,
			ariaHidden: true,
			titles: {
				successTl: 'Smarter Success',
				infoTl: 'Info from SmarterCover',
				warningTl: 'Too Many Requests',
				errorTl: 'Error SmarterCover'
			},
			msgToDisplay: {
				successMsg: 'Success Msg from Smater Cover!',
				infoMsg: 'Info Msg from Smater Cover!',
				warningMsg: 'Warning Msg from Smater Cover!',
				errorMsg: 'Error Msg from Smater Cover!'
			},
			closeBtn: true,
			alertBtnClass: 'closeAlert',
			timeOut: 5000,
			fadeTime: 200,
			toastrMsgId: 'toast-container',
			alertTClass: 'AlertToastr',
			bodyTag: 'body',
			html: {
				iconTag: '<i>',
				divTag: '<div>'
			}
		};

		let thisSettings = $.extend( true, {}, tMDefaults, mgsPop);

		let AlertToastr = $(thisSettings.html.divTag, { class: thisSettings.alertTClass}).html('Success Mgs From SmarterCover')
			.append($(thisSettings.html.iconTag, { class: 'fa fa-close ' + thisSettings.alertBtnClass + '', 'aria-hidden': thisSettings.ariaHidden }))
	
		$('.' + thisSettings.alertTClass).delay(thisSettings.timeOut).fadeOut(thisSettings.fadeTime);

		// On Window Load
		if(thisSettings.OnWindowLoad == true) {

			toastr.info(thisSettings.msgToDisplay.successMsg, thisSettings.titles.successTl, { timeOut: thisSettings.timeOut } )

			$(AlertToastr).appendTo(thisSettings.bodyTag);

			$('.' + thisSettings.alertTClass).delay(thisSettings.timeOut).fadeIn(thisSettings.fadeTime);

			thisSettings.window.on('mouseover', '#' + thisSettings.toastrMsgId, function() { 

				$('.' + thisSettings.alertTClass).show() 
			});

			thisSettings.window.on('mouseleave', '.' + thisSettings.alertTClass, function() {

				$(this).detach();
				toastr.info(thisSettings.msgToDisplay.successMsg, thisSettings.titles.successTl, { timeOut: 1000 } )
			});

		} else if(thisSettings.OnWindowLoad == false) {}


		// Show/Hide Alert Close Button
		const closeBtn = thisSettings.closeBtn == false ? $('.' + thisSettings.alertBtnClass).hide() : $('.' + thisSettings.alertBtnClass).show();

		// Global Click Event
		return this.on(ck, '*', function() {

			const closeAlert = $(this).hasClass(thisSettings.alertBtnClass) ? $('.' + thisSettings.alertTClass).detach() : '';

			if(thisSettings.OnWindowLoad == false) {

				const openFull = $(this).hasClass('openFull') ? $(AlertToastr).show() && $(AlertToastr).appendTo('body') : '';
			}
		});

	}
	d.toastrMsg();

});