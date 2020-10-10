
let d = $(document);
let ck = 'click';

$(function() {

	"use strict";

	$.ajax({

		type: 'GET',
		url: 'assets/js/fishing.json',

		success: function(data) { fishSData.thisBodyFish(data); }
	});

	let fishSData = {
		thisBodyFish: function(data) {

			let tdBody = '';
			for(let i in data.fishingData ) {

				tdBody += '<div class="trFish">' +

								'<span class="tdFish ref" id="' + data.fishingData[i].tBody[0].id + '">' + data.fishingData[i].tBody[0].name + '</span>' +
								'<span class="tdFish status" id="' + data.fishingData[i].tBody[1].id + '">' + data.fishingData[i].tBody[1].name + '</span>' +
								'<span class="tdFish client" id="' + data.fishingData[i].tBody[2].id + '">' + data.fishingData[i].tBody[2].name + '</span>' +
								'<span class="tdFish sum" id="' + data.fishingData[i].tBody[3].id + '">' + data.fishingData[i].tBody[3].name + '</span>' +
								'<span class="tdFish term" id="' + data.fishingData[i].tBody[4].id + '">' + data.fishingData[i].tBody[4].name + '</span>' +
								'<span class="tdFish added" id="' + data.fishingData[i].tBody[5].id + '">' + data.fishingData[i].tBody[5].name + '</span>' +
								'<span class="tdFish leadprov" id="' + data.fishingData[i].tBody[6].id + '">' + data.fishingData[i].tBody[6].name + '</span>' +
								'<span class="tdFish supplier" id="' + data.fishingData[i].tBody[7].id + '">' + data.fishingData[i].tBody[7].name + '</span>' +
								'<span class="tdFish owner" id="' + data.fishingData[i].tBody[8].id + '">' + data.fishingData[i].tBody[8].name + '</span>' +
								'<span class="tdFish actionFish" id="' + data.fishingData[i].tBody[9].id + '"><a class="ViewBtnF leftView">Quick View</a><a href="http://localhost:4232/#/" class="ViewBtnF rightView">View Lead</a></span>' +
								// '<span class="tdFish" id="' + data.fishingData[i].tBody[9].id + '">' + data.fishingData[i].tBody[9].name + '</span>' +
						   '</div>';
			}

			$(tdBody).appendTo('.tbodyFish .mCSB_container');
			$('.tbodyFish .trFish:even').css({ background: '#f9f9f9'});

			$.fn.extend({
				trFishOver: function() {
					return this.on('mouseover', '.trFish', function() {

						$('.trFish').removeClass('addFish');
						$(this).addClass('addFish');
					});
				}

			});
			d.trFishOver();

			$.fn.QuickView = function() {
				return this.on(ck, '.addFish .leftView', function() {

					$('.topLeadDetail #firstname').val($('.addFish .leadprov').html());

				});
			}
			d.QuickView();
		}
	}




	// Fishing Tasks Extend
	$.fn.FishTasks = function(fishingSection) {

		let fishDefault = {
			secFishingClass: 'SecTaskFishing',
			iconSpin: 'fa fa-spinner',
			ToSpinIcon: 'fa-spin',
			div: '<div>',
			span: '<span>',
			icon: '<i>',
			css: {
				fullWidth: '100%',
				floatL: 'left',
				floatR: 'right',
				heightTabs: '20.39vh',
				dispinBlk: 'inline-blobk'
			},
			fadeSpeed: 100,
			delaySpeed: 700,
			FadeOutSpeed: 200, 
			PathProtocol: 'http://',
			PathHost: 'localhost:4232/#/',
			WinLocation: window.location.href,
			fulltapText: 'Open Tasks',
			tasbHeightClass: 'fixTab',
			removeChildFrom: '.fishingExtend, .loadComponent i' 
		};

		// Extends Data
		let fishSettings = $.extend( true, {}, fishDefault, fishingSection);

		// Load Icon To Spin
		let IcSpin = $(fishSettings.icon, { class: fishSettings.iconSpin + ' ' + fishSettings.ToSpinIcon }).appendTo('.loadComponent');

		// Find The Right URL
		if(fishSettings.WinLocation === fishSettings.PathProtocol + fishSettings.PathHost + 'fishing') {

			$('.taskSection').addClass(fishSettings.secFishingClass);
			$(fishSettings.div, { class: 'fullTapFish'}).appendTo('.' + fishSettings.secFishingClass)
				.append($(fishSettings.span, { class: 'openFull'}).html(fishSettings.fulltapText));
		}

		if($('.taskSection').hasClass(fishSettings.secFishingClass)) {
			$('.navRoute, .navUrl, .normal').addClass('noFish');
			$('.fishing').removeClass('noFish');

			let cssInject = '.fixTab { height: ' + fishSettings.css.heightTabs +'!important }' +
							'.SecTaskFishing .bottomNav_Floor{ height: 8vh }';

			let colStyle = '<style type="text/css">' + cssInject + '</style>';
			$(colStyle).appendTo(document.head);
		}

		// Add Fishing Extension
		$('.SecTaskFishing .bottomTasks').after($(fishSettings.div, { class: 'fishingExtend'}))

		// Cloning Extra Tasks to Fishing Extend
		$('.SecTaskFishing .TaskFishExt').clone().appendTo('.SecTaskFishing .fishingExtend');

		// Removing Extra Taks from Main Fishing Section  
		$('.leadDetail_Floor .TaskFishExt').remove();

		// Extra Main Block Styling
		$('.ExtraFish').css({ width: fishSettings.css.fullWidth, float: fishSettings.css.floatL });

		// Removing Propreties
		$('.ExtraFish .toShow').detach();

		// Remove Extra fishExtend Element and Remove Extra Icon Load Component
		$(fishSettings.removeChildFrom).next().remove();

		// Task Tabs Section Height
		$('.SecTaskFishing .notesHeightFish').css({ height: fishSettings.css.heightTabs })

		// Task Calls Refresh
		$('.SecTaskFishing .bottomShow').addClass('goTTopFish').removeClass('goTTop')


		// Global Click Events
		return this.on(ck, '*', function() {

			// Load New Data
			if($(this).hasClass('trFish')) {
				$('.loadComponent').fadeIn(fishSettings.fadeSpeed).delay(fishSettings.delaySpeed).fadeOut(fishSettings.fadeSpeed)
				$('.detailUpLeadFishing #firstname').val($('.tdFish#1').html())
			} 

			// noFish Class Click Event
			else if($(this).hasClass('noFish')) {
				$('.fullTapFish, .fishingExtend').hide()
				$('.taskSection').removeClass(fishSettings.secFishingClass)
				$('.notes_Floor').removeClass(fishSettings.tasbHeightClass)
			} 

			// normal Class Click Event
			else if($(this).hasClass('normal')) {
				$('.fullTapFish, .fishingExtend').hide()
				$('.taskSection').removeClass(fishSettings.secFishingClass)
				$('.notes_Floor').removeClass(fishSettings.tasbHeightClass)
			}

			// Task Calls Event
			else if($(this).hasClass('goTTopFish')) {
				$('.bottomTasks').addClass('topGoBttFish').removeClass('topGoBtt');
				$('.SecTaskFishing .bottomNav_Floor').addClass('bottHeight');
				$('.SecTaskFishing .bottomShow').addClass('goTDown').removeClass('goTTopFish').html('Show Less -')
			}

			// fishing Class Click Event
			const fishingUrl = $(this).hasClass('fishing') ? $('.fullTapFish').show() : '';

			// Close FullTap
			const openFullUrl = $(this).hasClass('openFull') ? $('.fullTapFish').fadeOut(fishSettings.FadeOutSpeed) : '';

			// Main Class Tabs
			const HTabUrl = $(this).hasClass('HTab') ? $('.notesHeightFish').addClass(fishSettings.tasbHeightClass) : '';

		});

	}
	d.FishTasks();

	// Override Propreties Example for Actual Element
	//$('.ExtraFish').FishTasks({ css: { floatL: 'none' }});


	$("#tbodyFish").mCustomScrollbar({ theme:"dark-3", scrollInertia: 50 });

});




// case (ThEvent.hasClass('goTTop')):
// 	$('.bottomTasks').addClass('topGoBtt').removeClass('topGoDown'); 
// 	$('.bottomTasks .bottomShow').removeClass('goTTop').addClass('goTDown');
// 	$('.bottomTasks .bottomShow').html('Show Less -');
// 	$('.bottomNav_Floor').addClass('bottHeight').removeClass('topHeight');

// 	if($('body').hasClass('body1008')) {

// 		$('.calls_Floor').css({ height: '84vh' });

// 	} else if($('body').hasClass('body969')) {

// 		$('.calls_Floor').css({ height: '83.5vh' });
// 	}
// 	break;