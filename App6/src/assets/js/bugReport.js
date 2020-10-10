

$(function() {

	"use strict"

	let closeTipTxt = 'Close';

	let closeReport = $('<div/>', { class: 'closebugReport' });
	$('.bugReport_Content').before(closeReport);

	let closeTemp = '<i aria-hidden="true" class="fa fa-close">' + '</i>' +
					'<span class="closeTip">' + closeTipTxt + '</span>';

	$(closeTemp).appendTo('.modalContent_Header');

});