
let clickEvent = 'click';
let ThDoc = $(document);

$(function() {

	"use strict"

	$.ajax({

		type: 'GET',
		url: 'assets/js/quotes.json',

		success: function(dataQuotes) { ThDoc.ResultsHead(dataQuotes); }
	});


	$.fn.ResultsHead = function(dataQuotes) {

		let resulshead = '';
		for( let i in dataQuotes.resultsDataHeader ) {

			resulshead += '<div class="stateColumn heightLevel">' + 

								'<span class="state-In" style="background: #1fadcf">' + 
										'<div class="state-InContent">' + 
											'<div><span>' + dataQuotes.resultsDataHeader[i].dateTime + '</span><a class="wom-res-link" id="lnkWOMRES">WOM</a></div>' +
											'<div><span>Cover: ' + dataQuotes.resultsDataHeader[i].cover + '</span></div><div><span>For: ' + dataQuotes.resultsDataHeader[i].forData + '</span></div>' +
											'<div><span>Over: 25 years</span></div><div><span>' + dataQuotes.resultsDataHeader[i].guaranteed + '</span></div>' +
											'<div><span>Comm Ret: ' + dataQuotes.resultsDataHeader[i].commret + '</span></div>' +
										'</div>' +
								'</span>' +

							'</div>';
		}
		$(resulshead).appendTo('#QuoteResultsHead .QuoteResultsHead');

		let QuoteHistoryBlk = '';
		for(let q in dataQuotes.resultsData) {

			QuoteHistoryBlk += '<div class="state-In">' + 

									'<div class="state-InContent">' + 
										'<span class="InsideTd" style="position: absolute;"><a routerLink="/policies" target="_blank"><img id="quoteImg" src="' + dataQuotes.resultsData[q].image + '" /></a></span>' +
										'<div class="QtBlk">' +
											'<span class="InsideTd" style="color: #3d566e; font-size: 18px; font-weight: 900;">£' + dataQuotes.resultsData[q].price + '</span>' +
											'<span class="InsideTd">LI <b>£' + dataQuotes.resultsData[q].li + '</b>/CI <b>£</b></span>' +
											'<span class="InsideTd">Com £' + dataQuotes.resultsData[q].com + '</span>' +
											'<span class="InsideTd">Ess Wellness Optimiser +£' + dataQuotes.resultsData[q].ess + '</span>' +
										'</div>' +
									'</div>' +

							    '</div>';
		}
		$(QuoteHistoryBlk).appendTo('#pnlQuoteResults .QuoteHistoryBlk, .ResutlColumn');
	}


	let QuoteResultsHead = '<div class="QuoteResultsHead"></div>';
	for( let d = 0; d < 1; d++ ) { $(QuoteResultsHead).appendTo('#QuoteResultsHead'); }

	let quoteResulMTemp = '<div class="QuoteHistoryBlk"></div>';
	for( let i = 0; i < 2; i++ ) { $(quoteResulMTemp).appendTo('#pnlQuoteResults'); }

	let HistoryResultsTemp = '<div class="QuoteHistoryBlk ResutlColumn"></div>';
	for( let r = 0; r < 6; r++ ) { $(HistoryResultsTemp).appendTo('#pnlHistoricQuoteResults'); }


	$.fn.quoteHeadResul = function() {

		return this.on('click', '.GeneQtBtn', function() { 
			$('#QuoteResultsHead, #pnlQuoteResults').show(); 
			$('.spinner_Fl').fadeIn(100).delay(3000).fadeOut(100);

		});
	}
	ThDoc.quoteHeadResul();

	let ResutlColumnVal = 1;
	$('.ResutlColumn').each(function() {

		$(this).addClass('_' + ResutlColumnVal); 
		ResutlColumnVal++;
	});


	$.fn.globalQuote = function() {
		return this.on('click', '.inputDropQuotes', function() {

			$('.inputDropQuotes .CDropDow').addClass('slideUpQuotes');
			$('.CDropDow', this).slideToggle(150).removeClass('slideUpQuotes');

			$('.slideUpQuotes').slideUp(150);

		});
	}

	$.fn.quoteGlobal = function() {
		return this.on(clickEvent, '*', function(e) {

			let ThEvent = $(this);

			switch(true) {

				case (ThEvent.hasClass('costDet1')):
					$('i', this).addClass('fa-spin');
					break;

				case (ThEvent.hasClass('costDet2')):
					$('i', this).addClass('fa-spin');
					break;

				case (ThEvent.hasClass('deathOpt')):
					e.stopPropagation();
					$('.death').val($(this).html());
					$('.dropDeath').slideUp(150);
					$('.coverDeath').removeClass('coverDropRot0');
					break;

				case (ThEvent.hasClass('livesOpt')):
					e.stopPropagation();
					$('.lives').val($(this).html());
					$('.dropLives').slideUp(150);
					$('.coverLives').removeClass('coverDropRot0');
					break;

				case (ThEvent.hasClass('checkmark')):
					$('.GeneBtn_Box').toggleClass('GeneQtMinWith');
					$('.CICSum').toggleClass('boxInpDispNone');
					break;

				case (ThEvent.hasClass('GeneQtBtn')):
					$('.GeneQtSpin').fadeIn(50).delay(3000).fadeOut(50);
					break;

				case (ThEvent.hasClass('state-In')):
					$(this).toggleClass('qrItemSelected');
					break;
			}

		});
	}

	ThDoc.globalQuote().quoteGlobal();

	let detailsIco = '<i class="fa fa-rotate-right" aria-hidden="true"></i>';
	$(detailsIco).appendTo('.updaTeDetail');

	let ThSpinTemp = $('<div/>', { class: 'spinner_Fl' });
	$('#QuoteResultsHead').before(ThSpinTemp);

	$('.spinner_Fl').delay(3000).fadeOut(100);

	$("#columnState_Fl").mCustomScrollbar({ theme:"dark-3", scrollInertia: 50 }).css({ width: '100%', float: 'left', height: '40.8vh' });
	let setQSpinner = $('<i/>', { class: 'spinnerLoad fa fa-spinner fa-spin', 'aria-hidden': 'true' }).appendTo('.spinner_Fl');

	$(".switch-Male").on('click', function() { $("#Gender1").val($(this).html()); });
	$(".switch-Female").on('click', function() { $("#Gender1").val($(this).html()); });

	let btnQuotesSp = $('<i/>', { class: 'fa fa-spinner fa-spin GeneQtSpin', 'aria-hidden': 'true' }).appendTo('.GeneBtn_Box');

});