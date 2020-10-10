
let d = $(document);
let ck = 'click';


$(function() {

	"use strict";

	let PreCanceUrl = 'assets/js/precancellationpolicies.json';


	$.ajax({

		type: 'GET',
		url: PreCanceUrl,

		success: function(precancelldata) { d.PreCancellDat(precancelldata) }

	});


	$.fn.PreCancellDat = function(precancelldata) {

		let preCanHeader = '';
		for( let c in precancelldata.preCanceHeader ) {

			preCanHeader += '<span class="ThHeader">' + precancelldata.preCanceHeader[c].name + '</span>';
		}

		$(preCanHeader).appendTo('.precancellationpoliciesTemp .AllPolHeader')

		let preCanBody = '';
		for( let i in precancelldata.preCanceBody ) {

			preCanBody += '<div class="TrBody">' +
							'<span class="TdBody">' + precancelldata.preCanceBody[i].policy + '</span>' +
							'<span class="TdBody">' + precancelldata.preCanceBody[i].policyN + '</span>' +
							'<span class="TdBody">' + precancelldata.preCanceBody[i].firstn + '</span>' +
							'<span class="TdBody">' + precancelldata.preCanceBody[i].partn + '</span>' +
							'<span class="TdBody">' + precancelldata.preCanceBody[i].postC + '</span>' +
							'<span class="TdBody">' + precancelldata.preCanceBody[i].insuR + '</span>' +
							'<span class="TdBody">' + precancelldata.preCanceBody[i].saleDt + '</span>' +
							'<span class="TdBody">' + precancelldata.preCanceBody[i].startDt + '</span>' +
							'<span class="TdBody">' + precancelldata.preCanceBody[i].applic + '</span>' +
							'<span class="TdBody">' + precancelldata.preCanceBody[i].coverT + '</span>' +
							'<span class="TdBody">' + precancelldata.preCanceBody[i].initialPol + '</span>' +
							'<span class="TdBody">' + precancelldata.preCanceBody[i].grossComms + '</span>' +
							'<span class="TdBody">' + precancelldata.preCanceBody[i].slPer + '</span>' +
							'<span class="TdBody">' + precancelldata.preCanceBody[i].retSl + '</span>' +
							'<span class="TdBody">' + precancelldata.preCanceBody[i].process + '</span>' +
						  '</div>';
		}

		$(preCanBody).appendTo('.precancellationpoliciesTemp .AllPolBody')
		$('#StBodyPreCanc .TrBody:odd').css({ background: '#f9f9f9'});
	}


});