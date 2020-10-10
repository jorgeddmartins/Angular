
let d = $(document);
let ck = 'click';

$(function() {

	"use strict";

	let allDataUrl = 'assets/js/allpolicies.json';

	$.ajax({

		type: 'GET',
		url: allDataUrl,

		success: function(allPoliciesData) { d.allPolicyData(allPoliciesData) }

	});

	$.fn.allPolicyData = function(allPoliciesData) {

		try {

			let headerGrid = '';
			for( let i in allPoliciesData.headerAllPol ) {

				headerGrid += '<span class="ThHeader">' + allPoliciesData.headerAllPol[i].allname + '</span>';
			}
			$(headerGrid).appendTo('.allpoliciesTemp .AllPolHeader');
			$('.AllPolHeader .ThHeader:first').addClass('paddLeftGrid');

			let bodyGrid = '';
			for( let b in allPoliciesData.bodyAllPol ) {

				bodyGrid += '<div class="TrBody dropTrB">' +
								'<span class="TdBody ' + allPoliciesData.bodyAllPol[b].paddClass + '">' + allPoliciesData.bodyAllPol[b].policy + ' <i class="fa fa-caret-right dropSubGrid" aria-hidden="true"></i></span>' +
								'<span class="TdBody">' + allPoliciesData.bodyAllPol[b].policyN + '</span>' +
								'<span class="TdBody"><a href="http://localhost:4232/#/" target="_blank">' + allPoliciesData.bodyAllPol[b].firstn + '</a></span>' +
								'<span class="TdBody">' + allPoliciesData.bodyAllPol[b].partn + '</span>' +
								'<span class="TdBody">' + allPoliciesData.bodyAllPol[b].postC + '</span>' +
								'<span class="TdBody">' + allPoliciesData.bodyAllPol[b].insuR + '</span>' +
								'<span class="TdBody">' + allPoliciesData.bodyAllPol[b].saleDt + '</span>' +
								'<span class="TdBody">' + allPoliciesData.bodyAllPol[b].startDt + '</span>' +
								'<span class="TdBody">' + allPoliciesData.bodyAllPol[b].applic + '</span>' +
								'<span class="TdBody">' + allPoliciesData.bodyAllPol[b].coverT + '</span>' +
								'<span class="TdBody">' + allPoliciesData.bodyAllPol[b].initialPol + '</span>' +
								'<span class="TdBody">' + allPoliciesData.bodyAllPol[b].grossComms + '</span>' +
								'<span class="TdBody">' + allPoliciesData.bodyAllPol[b].slPer + '</span>' +
								'<span class="TdBody">' + allPoliciesData.bodyAllPol[b].retSl + '</span>' +
								'<span class="TdBody">' + allPoliciesData.bodyAllPol[b].process + '</span>' +
							'</div>' +

							// Sub Grid
							'<div class="DropBodyTr" id="DropTr_' + allPoliciesData.bodyAllPol[b].id + '">' +
								'<div class="SuGridBox">' +
									'<div class="row_Tabs"></div>' +
									'<div class="SubGrid_Flr">' +
										'<div class="THeader"></div>' +
										'<div class="TBody"></div>' +
									'</div>' +
								'</div>' +
							'</div>';
			}
			$(bodyGrid).appendTo('.AllPolBody');

			// SubGrid All Data
			let subGridTab = '';
			for( let s in allPoliciesData.subtabs ) {

				subGridTab += '<span class="subTab ' + allPoliciesData.subtabs[s].selectClass + '">' + allPoliciesData.subtabs[s].name + '</span>';
			}
			$(subGridTab).appendTo('.SuGridBox .row_Tabs');

			let suGridHeader = '';
			for( let s in allPoliciesData.subheader ) {

				suGridHeader += '<span class="ThHeader">' + allPoliciesData.subheader[s].name + '</span>';
			}
			$(suGridHeader).appendTo('.SuGridBox .THeader');

			let subGridBody = '';
			for( let b in allPoliciesData.subbody ) {

				subGridBody += '<div class="TrBody">' +
									'<span class="TdBody RiskWidth">' + allPoliciesData.subbody[b].riskname + '</span>' +
									'<span class="TdBody SaleWidth">' + allPoliciesData.subbody[b].salename + '</span>' +
									'<span class="TdBody DateRiskWidth">' + allPoliciesData.subbody[b].dateriskname + '</span>' +
									'<span class="TdBody OnRiskWidth">' + allPoliciesData.subbody[b].onriskname + '</span>' +
									'<span class="TdBody SumWidth">' + allPoliciesData.subbody[b].sumname + '</span>' +
									'<span class="TdBody PaymentWidth">' + allPoliciesData.subbody[b].paymentname + '</span>' +
									'<span class="TdBody GuarteeWidth">' + allPoliciesData.subbody[b].guaranteedname + '</span>' +
									'<span class="TdBody TermWidth">' + allPoliciesData.subbody[b].termname + '</span>' +
									'<span class="TdBody ConfirmWidth">' + allPoliciesData.subbody[b].confirname + '</span>' +
									'<span class="TdBody NetWidth">' + allPoliciesData.subbody[b].netname + '</span>' +
									'<span class="TdBody CommissionWidth">' + allPoliciesData.subbody[b].commissionname + '</span>' +
									'<span class="TdBody CDiferenceWidth">' + allPoliciesData.subbody[b].cdiferencename + '</span>' +
									'<span class="TdBody CDiference2Width">' + allPoliciesData.subbody[b].sdiference2name + '</span>' +
									'<span class="TdBody PositiveClawbackWidth">' + allPoliciesData.subbody[b].positiveclawname + '</span>' +
									'<span class="TdBody ClawBackStateWidth">' + allPoliciesData.subbody[b].clawbackstatename + '</span>' +
									'<span class="TdBody ClawBackValueWidth">' + allPoliciesData.subbody[b].clawbackvaluename + '</span>' +
								'</div>';
			}
			$(subGridBody).appendTo('.SuGridBox .TBody');

			$('.TrBody:even').css({ background: '#f9f9f9' });
			$("#StBodyPolicies").mCustomScrollbar({ theme:"dark-3", scrollInertia: 50 });

			$.fn.SlideTrBody = function() {
				return this.on(ck, '.dropTrB', function() {

					$('.dropTrB').next('.DropBodyTr').slideUp(200);
					$(this).next('.DropBodyTr').slideDown(200);

					$('.dropSubGrid').removeClass('rotate45');
					$('.dropSubGrid', this).addClass('rotate45');

					$('.TrBody').removeClass('gridBlueSelected');
					$(this).addClass('gridBlueSelected');

				});
			}
			d.SlideTrBody();

			d.on(ck, '.subTab', function() {
				$('.subTab').removeClass('subTabSelected');
				$(this).addClass('subTabSelected');
			});

			let dropSearch = '';
			for( let d in allPoliciesData.dropsearch ) {

				dropSearch += '<li class="DropSearchOPt">' + allPoliciesData.dropsearch[d].name + '</li>';
			}
			$(dropSearch).appendTo('.DropSearch')

			let dropSale = '';
			for( let s in allPoliciesData.dropsale ) {

				dropSale += '<li class="DropSaleOPt">' + allPoliciesData.dropsale[s].name + '</li>';
			}
			$(dropSale).appendTo('.DropSale')

			let myPolEd = '';
			for( let l in allPoliciesData.myPolEdit ) {

				myPolEd += '<span class="headerInpBox ' + allPoliciesData.myPolEdit[l].wClasstop + '" id="allPol_' + allPoliciesData.myPolEdit[l].id + '"><input type="text" class="gridSearchIn ' + allPoliciesData.myPolEdit[l].wClass + '" id="' + allPoliciesData.myPolEdit[l].idEdit + '" /></span>';
			}
			$(myPolEd).appendTo('.allpoliciesTemp .HeaderSearch')


			$('.DropSearchOPt:odd, .DropSaleOPt:odd').css({ background: '#f9f9f9'});
		}

		catch(allPolDt) { alert('Policies Grid Data Error' + ' ' + allPolDt + ' ' + 'You got a' + ' ' + allPolDt.stack) }

	}

	$.fn.tabEvent = function() {
		return this.on(ck, '.item a', function() {
			$('.item a').removeClass('selected');
			$(this).addClass('selected');
		});
	}
	d.tabEvent();

	$.fn.dropGlobal = function() {
		return this.on(ck, '*', function() {

			let ElmTh = $(this);

			try {
				let DropDownSearch = ElmTh.hasClass('DropDownSearch') ?
					$('.DropSearch').slideToggle(100) &&
					$('html').toggleClass('closeDropSearch') : '';

				let DropSearchOPt = ElmTh.hasClass('DropSearchOPt') ?
					$('.DropDownSearch').val($(this).html()) &&
					$('.DropSearch').slideUp(100) &&
					$('html').removeClass('closeDropSearch') : '';

				let DropDownSale = ElmTh.hasClass('DropDownSale') ?
					$('.DropSale').slideToggle(100) &&
					$('html').toggleClass('closeDropSale') : '';

				let DropSaleOPt = ElmTh.hasClass('DropSaleOPt') ?
					$('.DropDownSale').val($(this).html()) &&
					$('.DropSale').slideUp(100) &&
					$('html').removeClass('closeDropSale') : '';
			}

			catch(err) { alert('Report Policies Search Error' + ' ' + err + ' ' + 'You got a' + ' ' + err.name) }

		});
	}
	d.dropGlobal();


	d.on(ck, '.closeDropSearch', function(event) { event.stopPropagation();
		$('.DropSearch').slideUp(100);
		$('html').removeClass('closeDropSearch');
	});

	d.on(ck, '.closeDropSale', function(e) { e.stopPropagation();
		$('.DropSale').slideUp(100);
		$('html').removeClass('closeDropSale');
	});


	if($('*').hasClass('allpoliciesTemp')) {

		$('#datePickerFromPot').val($('.DayB_Item').html())
	}

	$(document).on(ck, '.currentP', function() {

		$('.currentP').removeClass('SelectedFoot');
		$(this).addClass('SelectedFoot');

	});


});