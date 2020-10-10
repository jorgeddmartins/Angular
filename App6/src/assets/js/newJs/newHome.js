
// Documet Element
let d = $(document);

// Click Event
let ck = 'click';

$(function() {

	"use strict";

	$.fn.smarterHome = function(options) {

		let defaults = $.extend({

			// Json Data 
			data: {

				// Home Grid Data
				UrlGrid: 'assets/js/fishing.json',

				// Home Data
				UrlHome: 'assets/js/home.json'
			}

		}, options);

		let settings = $.extend( true, {}, defaults, options);

		function runHome() { this.dataHome(); }

		$.extend( runHome.prototype, {

			dataHome: function() {

				// Adds Top Home Grid Data
				let tGrh = $('<div>', { class: 'tTopHomebodyFish', id: 'tbodyFish' }).appendTo('.topHomeGrid');

				// Adds Bottom Home Grid Data
				let bGrh = $('<div>', { class: 'tBottomHomebodyFish', id: 'tBottombodyFish' }).appendTo('.bottomHomeGrid');
 
				$.ajax({

					type: 'GET',
					url: settings.data.UrlGrid,

					success: function(data) { d.fishData(data); }
				});

				$.fn.fishData = function(data) {

					try {

						let tdtophomeBody = '';
						for(let i in data.fishingData ) {

							tdtophomeBody += '<div class="trFish">' +
												'<span class="tdFish" id="' + data.fishingData[i].tBody[0].id + '">' + data.fishingData[i].tBody[0].name + '</span>' +
												'<span class="tdFish" id="' + data.fishingData[i].tBody[1].id + '">' + data.fishingData[i].tBody[1].name + '</span>' +
												'<span class="tdFish" id="' + data.fishingData[i].tBody[2].id + '">' + data.fishingData[i].tBody[2].name + '</span>' +
												'<span class="tdFish" id="' + data.fishingData[i].tBody[3].id + '">' + data.fishingData[i].tBody[3].name + '</span>' +
												'<span class="tdFish" id="' + data.fishingData[i].tBody[4].id + '">' + data.fishingData[i].tBody[4].name + '</span>' +
												'<span class="tdFish" id="' + data.fishingData[i].tBody[5].id + '">' + data.fishingData[i].tBody[5].name + '</span>' +
												'<span class="tdFish" id="' + data.fishingData[i].tBody[6].id + '">' + data.fishingData[i].tBody[6].name + '</span>' +
												'<span class="tdFish" id="' + data.fishingData[i].tBody[7].id + '">' + data.fishingData[i].tBody[7].name + '</span>' +
												'<span class="tdFish" id="' + data.fishingData[i].tBody[8].id + '">' + data.fishingData[i].tBody[8].name + '</span>' +
												'<span class="tdFish" id="' + data.fishingData[i].tBody[9].id + '">' + data.fishingData[i].tBody[9].name + '</span>' +
										      '</div>';
						}

						$(tdtophomeBody).appendTo('.tBottomHomebodyFish .mCSB_container');
						$('.topHomeGrid .trFish:even, .bottomHomeGrid .trFish:even').css({ background: '#f9f9f9' });
					}

					catch(homeGridError) {

						$('.ModalErrorPot').show();
						$('.ErrorPotContent').html('Home Screen Grid Error' + ' ' + homeGridError.stack);
					}
				}

				$.fn.homeG = function() {
					try {
						return this.on(ck, '*', function() {

							let cl = $(this)[0].className;

							if(cl.indexOf('addCustomerBtn') != -1) {

								$('.addCustomer').fadeOut(300);
								$('.costumerRight').removeClass('costumerRightBorder'); 
								$('#single').removeAttr('checked', true); 
								$('#joint').attr('checked', true); 
								$('.switch-joint-run').css({ left: '50%'}); 
								$('.customerJointSelect').show();
							}

							else if(cl.indexOf('datepicker') != -1) { $('.datepicker1').toggle(); }

							else if(cl.indexOf('datepicker2') != -1) { $('.calendar2').toggle(); }

							else if(cl.indxeOf('QutBtn') != -1) { $('.leadTNav .referenceLead').html('Generate Life Insurance Quote'); }

							else if(cl.indexOf('switch-joint-on') != -1) {
								$('.addCustomer').fadeOut(300);
								$('.costumerRight').removeClass('costumerRightBorder');
							}

							else if(cl.indexOf('switch-joint-off') != -1) {
								$('.addCustomer').fadeIn(300); 
								$('.costumerRight').addClass('costumerRightBorder'); 
								$('.switch-joint-run').removeAttr('style');
							}
						});
					}
					catch(homeGError) {

						$('.ModalErrorPot').show();
						$('.ErrorPotContent').html('Add Second Customer or the Calendar have an Error' + ' ' + homeGError.stack);
					}
				}
				d.homeG();


				$('.boxInp100 .phoneAdt_Fl').remove();

				d.on(ck, '.switch-label-on, .switch-joint-on', function() {

					$('.ReassignBtn').removeClass('disabled').addClass('btn-warning');
				});


				//let calendarDOBTemp = $('<div>', { class: 'calendarDOB'}).appendTo('.DOBcl');

				let searchEvent = $('<span>', { class: 'searchEvent'}).appendTo('.postcode_Fl');

				$('.postCodeSingle .searchEvent').addClass('searchPostSingle');
			}
		});

		let ruHm = new runHome();


		$('#tbodyFish, #tbodyFishHome, #tBottombodyFish, .postCode_fl').mCustomScrollbar({ theme:"dark-3", scrollInertia: 50 });
	}

	d.smarterHome();

});