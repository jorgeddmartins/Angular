
let d = $(document);

let ck = 'click';

let PathProtocol = 'http://';
let PathHost = 'localhost:4207/#/';
let WinLocation = window.location.href;


$(function() {

	"use strict";


	d.on(ck, '.teleSalesUrl', function() {
		$('body').addClass('bodyTaleSales')
		$('.box_lg').css({ left: '33px' })
		$('.top-nav').css({ height: '71px'})

		$('.bodyTaleSales .boxSystem').css({ 'padding-left': '15px'})
		$('.bodyCalendar').detach();
	});

	d.on(ck, '.leads, .SublinkUrl', function() {
		$('body').removeClass('bodyTaleSales')
		$('.left-nav').removeClass('goLNav')
		$('.box_lg, .top-nav').removeAttr('style')
	});


	// Render TeleSales Screen
	if(WinLocation === PathProtocol + PathHost + 'telesales') {

		$('body').addClass('bodyTaleSales')
		$('.box_lg').css({ left: '33px' })
		$('.top-nav').css({ height: '63px'})
		$('.bodyTaleSales .boxSystem').css({ 'padding-left': '15px'})
	}

});