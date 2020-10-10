
let d = $(document);

$(function() {

	"use strict";

	let HeaderUrl = 'assets/js/headerGridCalendar/headerGridCalendar.json';
	

	$.fn.RunHeadercalendar = function() {
		let NullHeader = function(e) {

			const NulNumber = e < 10 ? e = '0' + e : e = '' + e;
			return e;
		}

		let getHeaderDate = new Date();
		let getTime = ' ' + '/' + ' ' + NullHeader(getHeaderDate.getMonth()) + ' ' + '/' + ' ' + getHeaderDate.getFullYear();
		let getMonth = getHeaderDate.getMonth();
		let getYear = getHeaderDate.getFullYear();
		let getDay = getHeaderDate.getDate();
	    let nowMinute = NullHeader(getHeaderDate.getMinutes());
	    let nowHour = NullHeader(getHeaderDate.getHours());

	}

});