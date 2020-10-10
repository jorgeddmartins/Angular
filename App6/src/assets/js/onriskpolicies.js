
let d = $(document);
let ck = 'click';


$(function() {

	"use strict";


	let onRiskUrl = 'assets/js/onriskpolicies.json';



	$.ajax({

		type: 'GET',
		url: onRiskUrl,

		success: function(onriskdata) { d.OnRiskExtend(onriskdata) }

	});


	$.fn.OnRiskExtend = function(onriskdata) {

		let onRiskHeader = '';
		for( let r in onriskdata.onriskheader ) {

			onRiskHeader += '<span class="ThHeader">' + onriskdata.onriskheader[r].name + '</span>';
		}

		$(onRiskHeader).appendTo('.onriskpoliciesTemp .AllPolHeader');


		let onRiskBody = '';

		for( let i in onriskdata.onriskBody ) {

			onRiskBody += '<div class="TrBody">' +
								'<span class="TdBody">' + onriskdata.onriskBody[i].policy + '</span>' +
								'<span class="TdBody">' + onriskdata.onriskBody[i].policyN + '</span>' +
								'<span class="TdBody">' + onriskdata.onriskBody[i].firstn + '</span>' +
								'<span class="TdBody">' + onriskdata.onriskBody[i].partn + '</span>' +
								'<span class="TdBody">' + onriskdata.onriskBody[i].postC + '</span>' +
								'<span class="TdBody">' + onriskdata.onriskBody[i].insuR + '</span>' +
								'<span class="TdBody">' + onriskdata.onriskBody[i].saleDt + '</span>' +
								'<span class="TdBody">' + onriskdata.onriskBody[i].startDt + '</span>' +
								'<span class="TdBody">' + onriskdata.onriskBody[i].applic + '</span>' +
								'<span class="TdBody">' + onriskdata.onriskBody[i].coverT + '</span>' +
								'<span class="TdBody">' + onriskdata.onriskBody[i].initialPol + '</span>' +
								'<span class="TdBody">' + onriskdata.onriskBody[i].grossComms + '</span>' +
								'<span class="TdBody">' + onriskdata.onriskBody[i].slPer + '</span>' +
								'<span class="TdBody">' + onriskdata.onriskBody[i].retSl + '</span>' +
								'<span class="TdBody">' + onriskdata.onriskBody[i].process + '</span>' +
							'</div>';
		}
		$(onRiskBody).appendTo('.onriskpoliciesTemp .AllPolBody');
		$('#StBodyOnRiskPolicies .TrBody:odd').css({ background: '#f9f9f9'});
	}


});