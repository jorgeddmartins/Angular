
$(function() {

	"use strict";

	$.ajax({

		type: 'GET',
		url: 'assets/js/alerts.json',

		success: function(alertsData) { $(document).AlertsTD(alertsData) }
	});


	$.fn.AlertsTD = function(alertsData) {

		let TAlert = '';
		for( let a in alertsData.alertsTempDta ) {

			TAlert += '<span class="AlertIt">' + alertsData.alertsTempDta[a].alert + '</span>';
		}

		$(TAlert).appendTo('.alerts_Fl .mCSB_container');
		$('.AlertIt:even').css({ background: '#eee' });

		let ThisAlertDisplay = $('.alertsDisplay');
		const alertsClass = ($('.alerts_Fl .mCSB_container').children().length > 0) ? ThisAlertDisplay.addClass('withAlerts') : ThisAlertDisplay.removeClass('withAlerts');
		
	}

});