
let TDoc =  $(document);
let TClEvent = 'click';

$(function() {

	"use strict";

	$.fn.dropLead = function() {

		return this.on(TClEvent, '*', function() {

			switch(true) {

				case ($(this).hasClass('lifeDrop')):
					$('.lifeAddLeadDrop').slideToggle(200);
					$('.lifeAddLead').toggleClass('rotateAddLead0');
					break;

				case ($(this).hasClass('lifeAddOpt')): 
					$('.lifeAddLead .lifeDrop').val($(this).html());
					$('.lifeAddLeadDrop').slideUp(200);
					$('.lifeAddLead').removeClass('rotateAddLead0');
					break;


				case ($(this).hasClass('cicDrop')):
					$('.cicAddLeadDrop').slideToggle(200);
					$('.cicAddLead').toggleClass('rotateAddLead0');
					break;

				case ($(this).hasClass('cicAddOpt')): 
					$('.cicAddLead .cicDrop').val($(this).html());
					$('.cicAddLeadDrop').slideUp(200);
					$('.cicAddLead').removeClass('rotateAddLead0');
					break;


				case ($(this).hasClass('levelDrop')):
					$('.levelAddLeadDrop').slideToggle(200);
					$('.levelAddLead').toggleClass('rotateAddLead0');
					break;

				case ($(this).hasClass('levelAddOpt')): 
					$('.levelAddLead .levelDrop').val($(this).html());
					$('.levelAddLeadDrop').slideUp(200);
					$('.levelAddLead').removeClass('rotateAddLead0');
					break;


				case ($(this).hasClass('guaranteedDrop')):
					$('.guaranteedAddLeadDrop').slideToggle(200);
					$('.guarteedAddLead').toggleClass('rotateAddLead0');
					break;

				case ($(this).hasClass('guaranteedAddOpt')): 
					$('.guarteedAddLead .guaranteedDrop').val($(this).html());
					$('.guaranteedAddLeadDrop').slideUp(200);
					$('.guarteedAddLead').removeClass('rotateAddLead0');
					break;

			}

		});
	}

	TDoc.dropLead();

});