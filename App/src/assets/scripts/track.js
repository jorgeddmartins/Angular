
let d = $(document);

$(function() {

	"use strict";

	$.fn.loadTrackValue = function(optTrack) {
			
		let defaulTrask = {
			version: 0
		};
		
		let settingTrack = $.extend( true, {}, defaulTrask, optTrack);


		$('#versions div').addClass('trackNumber');

		$('.trackNumber').each(function() { $(this).addClass('val_' + settingTrack.version); settingTrack.version++ });

		$('.val_0 .string').addClass('thisOne');

		$('.getNumber').html($('.thisOne').html());
		
	}
	d.loadTrackValue();

});