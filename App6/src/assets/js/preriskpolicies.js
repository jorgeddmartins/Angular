
let d = $(document);
let ck = 'click';

$(function() {

	"use strict";


	let preRiskUrl = 'assets/js/preriskpolicies.json';

	$.ajax({

		type: 'GET',
		url: preRiskUrl,

		success: function(preriskdata) { d.GridData(preriskdata) }

	});

	$.fn.GridData =  function(preriskdata) {

		let preRiskHeader = '';
		for( let p in preriskdata.preRiskHeader ) {

			preRiskHeader += '<span class="ThHeader">' + preriskdata.preRiskHeader[p].name + '</span>';
		}
		$(preRiskHeader).appendTo('.PreRiskPol .AllPolHeader');

		let RiskEdit = '';
		for( let r in preriskdata.preRiskEdit ) {

			RiskEdit += '<span class="headerInpBox" id="Risk_' + preriskdata.preRiskEdit[r].id + '"><input type="text" class="gridSearchIn ' + preriskdata.preRiskEdit[r].wClass + '" /></span>';
		}
		$(RiskEdit).appendTo('.PreRiskPol .HeaderSearch');


		let preReferredHeader = '';
		for( let i in preriskdata.preReferredHeader ) {

			preReferredHeader += '<span class="ThHeader">' + preriskdata.preReferredHeader[i].name + '</span>';
		}
		$(preReferredHeader).appendTo('.PreReferredPol .AllPolHeader');

		let ReferredEdit = '';
		for( let e in preriskdata.preReferredEdit ) {

			ReferredEdit += '<span class="headerInpBox" id="Referred_' + preriskdata.preReferredEdit[e].id + '"><input type="text" class="gridSearchIn ' + preriskdata.preReferredEdit[e].wClass + '" /></span>';
		}
		$(ReferredEdit).appendTo('.PreReferredPol .HeaderSearch');
	}

	$.fn.RiskBtn = function() {
		return this.on(ck, '.riskBtn', function() {

			$('.riskBtn').removeClass('riskSelect')
			$(this).addClass('riskSelect')
		});
	}
	d.RiskBtn();

	$.fn.GlobalRPol = function() {
		return this.on(ck, '*', function() {

			const prereferred = $(this).hasClass('prereferred') ? $('.PreRiskPol').hide() && $('.PreReferredPol').show() : '';
			const prerisk = $(this).hasClass('prerisk') ? $('.PreRiskPol').show() && $('.PreReferredPol').hide() : '';

		});
	}
	d.GlobalRPol();

});