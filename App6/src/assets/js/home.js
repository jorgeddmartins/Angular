
// Documet Element
let d = $(document);

// Click Event
let ck = 'click';

// Empty if Statement / Else
let elseNull = '';

$(function() {

	"use strict";

	let topGridHome = $('<div/>').addClass('tTopHomebodyFish').attr({ id: 'tbodyFish' }).appendTo('.topHomeGrid');
	let bottomGridHome = $('<div/>').addClass('tBottomHomebodyFish').attr({ id: 'tBottombodyFish' }).appendTo('.bottomHomeGrid');

	let UrHomeGrid = 'assets/js/fishing.json';
	let UrlHome = 'assets/js/home.json';

	$.ajax({

		type: 'GET',
		url: UrHomeGrid,

		success: function(data) { fishSData.thisBodyFish(data) }
	});

	let fishSData = {
		thisBodyFish: function(data) {

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
	}

	$.fn.homeG = function() {
		try {
			return this.on(ck, '*', function() {

				let ThEvent = $(this);

				const addCustomerBtn = (ThEvent.hasClass('addCustomerBtn')) ? 
					$('.addCustomer').fadeOut(300) && 
					$('.costumerRight').removeClass('costumerRightBorder') && 
					$('#single').removeAttr('checked', true) && 
					$('#joint').attr('checked', true) && 
					$('.switch-joint-run').css({ left: '50%'}) && 
					$('.customerJointSelect').show() : elseNull;

				const datepicker = (ThEvent.hasClass('datepicker')) ? $('.datepicker1').toggle() : elseNull;

				const datepicker2 = (ThEvent.hasClass('datepicker2')) ? $('.calendar2').toggle() : elseNull;

				const QutBtn = (ThEvent.hasClass('QutBtn')) ? $('.leadTNav .referenceLead').html('Generate Life Insurance Quote') : elseNull;

				const switchjointon = (ThEvent.hasClass('switch-joint-on')) ? 
					$('.addCustomer').fadeOut(300) && 
					$('.costumerRight').removeClass('costumerRightBorder') : elseNull;

				const switchjointoff = (ThEvent.hasClass('switch-joint-off')) ? 
					$('.addCustomer').fadeIn(300) && 
					$('.costumerRight').addClass('costumerRightBorder') && 
					$('.switch-joint-run').removeAttr('style') : elseNull;
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


	let calendarDOBTemp = $('<div>', { class: 'calendarDOB'}).appendTo('.DOBcl');

	let searchEvent = $('<span>', { class: 'searchEvent'}).appendTo('.postcode_Fl');

	$('.postCodeSingle .searchEvent').addClass('searchPostSingle');


	$.ajax({

		type: 'GET',
		url: UrlHome,

		success: function(data) { postItem.ItemLoad(data); }
	});


	let postItem = {
		ItemLoad: function(data) {
			try {

				let ItemTemp = '';
				for( var i in data.items) {

					ItemTemp += '<li class="AutoPostAll">' +
									'<span class="autoPost AddressLine1">' + data.items[i].Address1 + '</span>' +
									'<span class="autoPost AddressLine2">' + data.items[i].Address5 + '</span>' +
									'<span class="autoPost Town">' + data.items[i].Town + '</span>' +
									'<span class="autoPost City">' + data.items[i].County + '</span>' +
									'<span class="autoPost PostCode">' + data.items[i].PostCode + '</span>' +
								 '</li>';
				}

				$(ItemTemp).appendTo('.postCodeSingle .postCode_fl .mCSB_container');

				$('.AutoPostAll:odd').css({ background: '#eee', 'border-top': '1px solid #ddd' });


				$.fn.GlobalItemClick = function() {
					return this.on(ck, '*', function() {

						switch(true) {
							case ($(this).hasClass('AutoPostAll')):

								$('.postCodeSingleInput').val($('.PostCode', this).html());
								$('.AddressLine1SingleInput').val($('.AddressLine1', this).html());
								$('.TownSingleInput').val($('.Town', this).html());
								$('.searchPostSingle').click();
								break;
						}

					});
				}
				d.GlobalItemClick();
			}

			catch(PostCodeError) {

				$('.ModalErrorPot').show();
				$('.ErrorPotContent').html('Post Code AutoComplete has an Error' + ' ' + PostCodeError.stack);
			}
		}
	}

	$.fn.AutoCompletePosCode = function() {
		try {
			return this.on(ck, '.searchPostSingle', function(event) { 
				event.stopPropagation();

				$('.postCode_flSingle').slideToggle(100); 
			});
		}
		catch(SearchPostCodeError) {
			$('.ModalErrorPot').show();
			$('.ErrorPotContent').html('Post Code Search has an Error' + ' ' + SearchPostCodeError.stack);
		}
	}
	d.AutoCompletePosCode();


	$.fn.closePost = function() {
		return this.on('mouseover', 'html', function() {

			$('.postCode_flSingle').slideUp(100);
		});
	}
	//d.closePost();


	$('#tbodyFish, #tbodyFishHome, #tBottombodyFish, .postCode_fl').mCustomScrollbar({ theme:"dark-3", scrollInertia: 50 });


	// Routing Rendering
	let PathProtocol = 'http://';
	let PathHost = 'localhost:4232/#/';
	let WinLocation = window.location.href;

	// Rendering Lead Screen Url
	const LeadScreen = WinLocation === PathProtocol + PathHost ? $('.leadTNav').css({ width: '100%' }) : '';


	$('.DOBcl .calendarDOB').detach();

});