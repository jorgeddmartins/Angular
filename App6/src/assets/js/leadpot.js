
let d = $(document);
let ck = 'click';

$(function() {

	"use strict";

	let leadPUrl = 'assets/js/leadpot.json';

	$.ajax({

		type: 'GET',
		url: leadPUrl,

		success: function(potdata) { d.LPotData(potdata) }

	});


	$.fn.LPotData =  function(potdata) {

		let PotBody = '';
		for( let i in potdata.lPotData ) {

			PotBody += '<div class="TrBody">' +
			                '<span class="TdBody">' + potdata.lPotData[i].leadId + '</span>' +
			                '<span class="TdBody">' + potdata.lPotData[i].cmrID + '</span>' +
			                '<span class="TdBody">' + potdata.lPotData[i].status + '</span>' +
			                '<span class="TdBody">' + potdata.lPotData[i].alerts + '</span>' +
			                '<span class="TdBody">' + potdata.lPotData[i].fname + '</span>' +
			                '<span class="TdBody">' + potdata.lPotData[i].lname + '</span>' +
			                '<span class="TdBody">' + potdata.lPotData[i].sum + '</span>' +
			                '<span class="TdBody">' + potdata.lPotData[i].term + '</span>' +
			                '<span class="TdBody">' + potdata.lPotData[i].dob + '</span>' +
			                '<span class="TdBody">' + potdata.lPotData[i].postCode + '</span>' +
			                '<span class="TdBody">' + potdata.lPotData[i].email + '</span>' +
			                '<span class="TdBody">' + potdata.lPotData[i].added + '</span>' +
			                '<span class="TdBody">' + potdata.lPotData[i].leadAge + '</span>' +
			                '<span class="TdBody">' + potdata.lPotData[i].leadSource + '</span>' +
			                '<span class="TdBody">' + potdata.lPotData[i].userID + '</span>' +
			            '</div>';
		}

		$(PotBody).appendTo('#StBody .mCSB_container');

		let leadPotEd = '';
		for( let l in potdata.leadPotEdit ) {

			leadPotEd += '<span class="headerInpBox ' + potdata.leadPotEdit[l].wClasstop + '" id="LeadPot_' + potdata.leadPotEdit[l].id + '"><input type="text" class="gridSearchIn ' + potdata.leadPotEdit[l].wClass + '" id="' + potdata.leadPotEdit[l].idEdit + '" /></span>';
		}
		$(leadPotEd).appendTo('.leadpotTemp .HeaderSearch')
		$('.TrBody:odd').css({ background: '#f9f9f9'})
	}

	$("#StBody").mCustomScrollbar({ theme:"dark-3", scrollInertia: 50 });


	$.fn.tabEvent = function() {
		return this.on(ck, '.item a', function() {

			$('.item a').removeClass('selected')
			$(this).addClass('selected')
		});
	}


	$.fn.LeadpotUrl = function() {
		return this.on(ck, '.leadpotUrl', function() {

			$('.leadTNav .referenceLead').html('Lead Pot ( 2578 )')
		});
	}

	d.tabEvent().LeadpotUrl();

	const potTempNav = $('*').hasClass('leadpotTemp') ? $('.leadTNav .referenceLead').html('Lead Pot ( 2578 )') : '';

	d.on(ck, '.currentP', function() {

		$('.currentP').removeClass('SelectedFoot');
		$(this).addClass('SelectedFoot');

	});

});