
let d = $(document);

let ck = 'click';


$(function() {

	"use strict";

	let PreSaveUrl = 'assets/js/presavepolicies.json';

	$.ajax({

		type: 'GET',
		url: PreSaveUrl,

		success: function(presavedata) { d.ExtendData(presavedata) }

	});


	$.fn.ExtendData = function(presavedata) {

		let presaveHeader = '';
		for( let p in presavedata.preSaveHeader ) {

			presaveHeader += '<span class="ThHeader">' + presavedata.preSaveHeader[p].name + '</span>';
		}
		$(presaveHeader).appendTo('.presavepoliciesTemp .AllPolHeader');
		
	}


	$.fn.TopBtns = function() {

		return this.on(ck, '.riskBtn', function() {

			$('.riskBtn').removeClass('riskSelect')
			$(this).addClass('riskSelect')
		});
	}
	d.TopBtns()

});