
let ThDoc = $(document);
let EvClick = 'click';
 
$(function() {

	"use strict";

	$('.leadTBtn, .leadTSuccess').css({ background: 'rgb(52, 198, 52)', border: 'rgb(52, 198, 52)' });
	$('.leadTBtn').addClass('pulse');

	$('.leadFail').css({ background: '#cc0000', border: '#cc0000' });

	let spinnerGo = '<i class="fa fa-spinner fa-spin" aria-hidden="true"></i>';

	$.fn.extend({

		leadTBtn: function() {
			return this.on('mouseover', '.takeLead_Go', function() {
				$('.leadTBtn', this).css({ width: '50%', 'font-size': '13px', padding: '9px' });
				// $('.leadTSuccess', this).css({ width: '50%', 'font-size': '13px', padding: '9px' });
				// $('.leadFail', this).css({ width: '50%', 'font-size': '13px', padding: '9px' });
			});
		},
		leadTBtnLeave: function() {
			return this.on('mouseleave', '.takeLead_Go', function() {
				$('.leadTBtn', this).css({ width: '100%', 'font-size': '22px', padding: '2px' });
				$('.leadTSuccess', this).css({ width: '100%', 'font-size': '22px', padding: '2px' });
				$('.leadFail', this).css({ width: '100%', 'font-size': '22px', padding: '2px' });
			});
		},
		viewBtn: function() {
			return this.on('mouseover', '.viewBtn', function() { $('.ViewLeadTip').show(); });
		},
		viewBtnLeave: function() {
			return this.on('mouseleave', '.viewBtn', function() { $('.ViewLeadTip').hide(); });
		},
		addBtn: function() {
			return this.on('mouseover', '.addBtn', function() { $('.AddLeadTip').show(); });
		},
		addBtnLeave: function() {
			return this.on('mouseleave', '.addBtn', function() { $('.AddLeadTip').hide(); });
		}

	});

	ThDoc.leadTBtn().leadTBtnLeave().viewBtn().viewBtnLeave().addBtn().addBtnLeave();

	$.fn.leadTBtnAction = function() {
		return this.on(EvClick, '.leadTBtn', function() {

			funcDelay();
			$(this).html('');
		
			$(spinnerGo).appendTo(this);

			$('.takeLead_Success').delay(3000).fadeIn(0).delay(4000).fadeOut(0);
			$('.takeLead_Go').delay(3000).fadeOut(0).delay(4000).fadeIn(0);
		});
	}

	ThDoc.leadTBtnAction();

});

function funcDelay() { $('.leadTBtn').html('Take Lead'); setTimeout(funcDelay, 5000); }