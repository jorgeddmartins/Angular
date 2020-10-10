
let d = $(document);
let ck = 'click';

let allDoc = $('*');

let NavRefer = $('.leadTNav .referenceLead');

let $dragging = null;
let $ThBody = $('body');


$(function() {

	"use strict";

	$.ajax({

		type: 'GET',
		url: 'assets/js/global.json',

		success: function(globalData) { Global.GlobalTemp(globalData); }
	});

	let leadtxt = 'Lead Reference : 556715'; 
	let quotetxt = 'Generate Life Insurance Quote';
	let policyTxt = 'Policy Quote Details Ref No.:';
	let fishingTxt = 'Fishing';
	let addleadTxt = 'Add New Lead';
	let policydetailTxt = 'Policy Details:';
	let leadpotTxt = 'Lead Pot';
	let iconmodalTxt = 'Icon Modal';
	let newstickertext = 'News Ticker Manager';
	let listenliveTxt = 'Listen Live:';

	let fakeTemp = $('<div>', { class: 'fake_Box' });

	let ImgTemp = $('<img>');

	$('.topHeaderRight_Floor').before(fakeTemp);
	$(ImgTemp).appendTo('.fake_Box');

	$('.fake_Box img').attr({ src: 'assets/img/fake.png' });


	$.fn.globalCl = function() {
		return this.on(ck, '*', function() {

			let ThEvent = $(this);

			/* User Log */ const userLog = ThEvent.hasClass('userLog') ? $('.userLog').removeClass('selected') && ThEvent.addClass('selected') : '';

			/* Tabs */ const HTab = ThEvent.hasClass('HTab') ? $('.HTab').removeClass('selectedHtb') && ThEvent.addClass('selectedHtb') : '';

			/* Add Lead */ const addleadUrl = ThEvent.hasClass('addleadUrl') ? $('.leadTNav .referenceLead').html(addleadTxt) && SmarterWith() : '';

 			/* All POlicies */ const allpolicies = ThEvent.hasClass('allpolicies') ? $('.leadTNav .referenceLead').html('POLICIES') && SmarterWith() : '';

 			/* Lead Pot */ const leadpotUrl = ThEvent.hasClass('leadpotUrl') ? $('.leadTNav .referenceLead').html(leadpotTxt) && SmarterWith() : '';

 			/* Icon Modal */ const iconmodalUrl = ThEvent.hasClass('iconmodalUrl') ? $('.leadTNav .referenceLead').html(iconmodalTxt) && SmarterWith() : '';

 			/* News Ticker */ const newsUrl = ThEvent.hasClass('newsUrl') ? $('.leadTNav .referenceLead').html(newstickertext) && SmarterWith() : '';

 			/* Sale Person Cap */ const salepersoncap = ThEvent.hasClass('salepersoncap') ? $('.leadTNav .referenceLead').html('Sales Persons Cap') && SmarterWith() : '';

 			/* Sale Person Types */ const salepersontypes = ThEvent.hasClass('salepersontypes') ? $('.leadTNav .referenceLead').html('Sales Persons Types') && SmarterWith() : '';

 			/* Menu Settings */ const Menusettings = ThEvent.hasClass('Menusettings') ? $('.leadTNav .referenceLead').html('') && SmarterWith() : '';

 			/* Menu My Leads */ const Myleads = ThEvent.hasClass('myleads') ? $('.leadTNav .referenceLead').html('My Leads (0)') && SmarterWith() : '';

 			/* Menu My Policies */ const Mypolicies = ThEvent.hasClass('mypolicies') ? $('.leadTNav .referenceLead').html('My Policies') && SmarterWith() : '';

 			/* Menu PreRiskPolicies */ const Preriskpolicies = ThEvent.hasClass('preriskpolicies') ? $('.leadTNav .referenceLead').html('Pre Risk Policies') && SmarterWith() : '';

 			/* Menu PreSavePolicies */ const Presavepolicies = ThEvent.hasClass('presavepolicies') ? $('.leadTNav .referenceLead').html('Pre Save Policies') && SmarterWith() : '';

 			/* Menu PreCancellationPolicies */ const Precancellationpolicies = ThEvent.hasClass('precancellation') ? $('.leadTNav .referenceLead').html('Pre Cancellation Policies') && SmarterWith() : '';

 			/* Menu On Risk Policies */ const Onriskpolicies = ThEvent.hasClass('onriskpolicies') ? $('.leadTNav .referenceLead').html('On Risk Policies') && SmarterWith() : '';

 			/* MenuTasks */ const Tasks = ThEvent.hasClass('tasks') ? $('.leadTNav .referenceLead').html('Tasks') && SmarterWith() : '';
 

			switch(true) {

				case (ThEvent.hasClass('openShow')):
					$('.topNav_Floor').addClass('topGo').removeClass('toUp').css({
						position: 'absolute',
						top: '31px',
						'z-index': '200'
					});
					$('.toShow').removeClass('openShow').addClass('closeShow');
					$('.toShow').html('Show Less -');
					$('.TasksTop_Fl').css({ height: '86.4vh'});
					break;

				case (ThEvent.hasClass('openShowFish')):
					$('.topNav_Floor').addClass('topGoFish').removeClass('toUpFish').css({
						position: 'absolute',
						top: '31px',
						'z-index': '200'
					});
					$('.toShow').removeClass('openShowFish').addClass('closeShowFish');
					$('.toShow').html('Show Less -');
					$('.TasksTop_Fl').css({ height: '68.9vh'});
					break;

				case (ThEvent.hasClass('closeShow')):
					$('.topNav_Floor').addClass('toUp').removeClass('topGo').css({
						position: 'relative',
						top: '0',
						'z-index': '0'
					});
					$('.toShow').removeClass('closeShow').addClass('openShow');
					$('.toShow').html('Show More +');
					$('.TasksTop_Fl').removeAttr('style');
					break;

				case (ThEvent.hasClass('closeShowFish')):
					$('.topNav_Floor').addClass('toUpFish').removeClass('topGoFish').css({
						position: 'relative',
						top: '0',
						'z-index': '0'
					});
					$('.toShow').removeClass('closeShowFish').addClass('openShowFish');
					$('.toShow').html('Show More +');
					$('.TasksTop_Fl').removeAttr('style');
					break;

				case (ThEvent.hasClass('goTTop')):
					$('.bottomTasks').addClass('topGoBtt').removeClass('topGoDown'); 
					$('.bottomTasks .bottomShow').removeClass('goTTop').addClass('goTDown');
					$('.bottomTasks .bottomShow').html('Show Less -');
					$('.bottomNav_Floor').addClass('bottHeight').removeClass('topHeight');

					// if($('body').hasClass('body1008')) {

					// 	$('#calls_Floor').css({ height: '82.6vh' });

					// } else if($('body').hasClass('body969')) {

					// 	$('.calls_Floor').css({ height: '83.5vh' });
					// }
					break;

				case (ThEvent.hasClass('goTDown')):
					$('.bottomTasks').addClass('topGoDown').removeClass('topGoBtt');
					$('.bottomTasks .bottomShow').removeClass('goTDown').addClass('goTTop');
					$('.bottomTasks .bottomShow').html('Show More +');
					$('.bottomNav_Floor').addClass('topHeight').removeClass('bottHeight');
					$('.calls_Floor').removeAttr('style');
					break;

				case (ThEvent.hasClass('normal')):
					$('.dateCrtLead, .dupeLeadLabel, .taskSection, .rightBtnsPg').show();
					$('.leadTNav .referenceLead').html(leadtxt);
					$('.topLeadDetail, .downRightHeader').hide();
					$('.notes_Floor').removeClass('notesHeightFish');
					$('.toShow').removeClass('openShowFish').addClass('openShow');
					$('.topNav_Floor').removeClass('toUpFish topGoFish');
					$('.SmarterSection').removeClass('SmarterSectionWith');

					if($('body').hasClass('body1008')) { height1008();

					} else if($('body').hasClass('body969')) { height969(); }

					leadsStatement();
					break;

				case (ThEvent.hasClass('policies')):
					$('.dateCrtLead, .dupeLeadLabel, .topLeadDetail, .downRightHeader, .rightBtnsPg').hide();
					$('.leadTNav .referenceLead').html(policyTxt);
					$('.notes_Floor').removeClass('notesHeightFish');
					$('.toShow').removeClass('openShowFish').addClass('openShow');
					$('.topNav_Floor').removeClass('toUpFish topGoFish');
					$('.taskSection').show();
					$('.SmarterSection').removeClass('SmarterSectionWith');

					if($('body').hasClass('body1008')) { height1008();

					} else if($('body').hasClass('body969')) { height969(); }
					break;

				case (ThEvent.hasClass('fishing')):
					$('.dateCrtLead, .dupeLeadLabel, .downRightHeader, .rightBtnsPg').hide();
					$('.leadTNav .referenceLead').html(fishingTxt);
					$('.topLeadDetail, .taskSection').show();
					$('.notes_Floor').addClass('notesHeightFish');
					$('.toShow').removeClass('openShow ').addClass('openShowFish');
					$('.topNav_Floor').removeClass('toUp topGo');
					$('.SmarterSection').removeClass('SmarterSectionWith');

					if($('body').hasClass('body1008')) { height1008();

					} else if($('body').hasClass('body969')) { height969(); }
					break;

				case (ThEvent.hasClass('policydetailUrl')):
					$('.dateCrtLead, .dupeLeadLabel, .downRightHeader, .rightBtnsPg').hide();
					$('.leadTNav .referenceLead').html(policydetailTxt);
					$('.taskSection').show();
					$('.SmarterSection').removeClass('SmarterSectionWith');

					if($('body').hasClass('body1008')) { height1008();

					} else if($('body').hasClass('body969')) { height969(); }
					break;

				case (ThEvent.hasClass('listenUrl')):
					$('.dateCrtLead, .dupeLeadLabel, .taskSection, .LRefr_Btns.bigBtn, .rightBtnsPg').hide();
					$('.leadTNav .referenceLead').html(listenliveTxt);
					$('.downRightHeader').show();

					if($('body').hasClass('body1008')) { height1008();

					} else if($('body').hasClass('body969')) { height969(); }
					break;

				case (ThEvent.hasClass('addPoliBtn')):
					$('.dateCrtLead, .dupeLeadLabel, .rightBtnsPg').hide();
					if($('body').hasClass('body1008')) { height1008();

					} else if($('body').hasClass('body969')) { height969(); }
					break;

				case (ThEvent.hasClass('QutBtn')):
					$('.dateCrtLead, .dupeLeadLabel, .rightBtnsPg').hide();
					if($('body').hasClass('body1008')) { height1008();

					} else if($('body').hasClass('body969')) { height969(); }
					break;
			}
		});
	}

	d.globalCl();

	let rightTask = $('<span/>', { class: 'borderTask' }).appendTo('.taskSection');

	let Global = {

		GlobalTemp: function(globalData) {

			let cloneNotesFl = '<div class="notesClone-Fl">' +
									'<div class="loadItemEdit"></div>' +
								'</div>';			

			let notesSmsEdit = '<div class="noteSms_Floor"></div>';

			let taskEdit = $('<div/>', { class: 'taskTopNote_Floor'}).append($('<div/>', { class: 'loadItemEdit'}));

			$(cloneNotesFl).add(notesSmsEdit).appendTo('.notes_Floor .mCSB_container');



			$(taskEdit).appendTo('.TasksTop_Fl .mCSB_container');

			let notesGrey = '<div class="notesF_Item addThNoteEdit">' +
								'<span class="NoteIt width20"><input type="text" class="NoteItEdit" placeholder="Author Name" /></span>' +
								'<span class="NoteIt width54 writeAllNote icoNote">' +
									'<span class="cloneNote">Write a Note</span>' +
									'<span class="ThisNot_Fl"><textarea></textarea><span class="addTh addNoteNow">Finish</span></span>' +
								'</span>' +
								'<span class="NoteIt paddLft"><input type="text" class="NoteItEdit" placeholder="dd/mm/yyyy" /></span>' +
								'<span class="saveNote"></span>' +
						 	'</div>';

			$.fn.extend({

				addNote: function() {
					return this.on(ck, '*', function() {

						let ThEvent = $(this);

						const fireContent = ThEvent.hasClass('fireContent') ? $('.addContent').html($('.thisArea').val()) : '';

						/* Add Note */ const addThNote = ThEvent.hasClass('addThNote') ? $('.thNote').html($('.NTContent').val()) && $('.ThisNot_Fl').fadeOut(100) : '';

						/* Add Ico Sms */ const addIcoSms = ThEvent.hasClass('AddIcoSms') ? $('.addNoteNow').hide() && $('.addSmsNow').show() : '';

						/* Add Ico Note */ const addIcoNote = ThEvent.hasClass('AddIcoNote') ? $('.addNoteNow').show() && $('.addSmsNow').hide() : '';

						/* Add Th Note */ const addThNote2 = ThEvent.hasClass('addThNote') ? $('.thNote').html($('.NTContent').val()) && $('.ThisNot_Fl').fadeOut(100) : '';

						switch(true) {

							case (ThEvent.hasClass('addNoteGrey')):
								$('.notesClone-Fl .loadItemEdit').after(notesGrey);
								$('#notesFloor .notesF_Item:odd').css({ background: '#eee' });
								$('#notesFloor .notesF_Item:even').css({ background: '#fff' });
								$('.saveNote').show();
								break;

							case (ThEvent.hasClass('writeAllNote')):
								$('.writeAllNote .ThisNot_Fl').hide();
								$('.ThisNot_Fl', this).show();

								$('.writeAllNote .cloneNote').removeClass('thNote');
								$('.writeAllNote textarea').removeClass('NTContent');
								$('.writeAllNote .addNoteNow').removeClass('addThNote');

								$('.cloneNote', this).addClass('thNote');
								$('textarea', this).addClass('NTContent');
								$('.addNoteNow', this).addClass('addThNote');
								break;

							case (ThEvent.hasClass('saveNote')):

								$(this).removeClass('saveNote').addClass('saveNoteSpin fa-spin').delay(2500).fadeOut(100);
								$('.addNote, .addNoteSms').removeClass('notAllowedNote');
								$('.NoteIt').removeClass('writeAllNote');

								$('.notesF_Item').removeClass('ThSmsEdit');
								break;
						}

					});
				}

			});
			d.addNote();



			let Thisnotes = '';
			for( let i in globalData.globalNotes ) {

				Thisnotes += '<div class="notesF_Item ' + globalData.globalNotes[i].backClass + '">' +
								'<span class="NoteIt width20">' + globalData.globalNotes[i].name + '</span>' +
								'<span class="NoteIt width54 ' + globalData.globalNotes[i].icoClass + '">' + globalData.globalNotes[i].note + '</span>' +
								'<span class="NoteIt paddLft">' + globalData.globalNotes[i].date + '</span>' +
							 '</div>';
			}
			$(Thisnotes).appendTo('.notes_Floor .mCSB_container');

			let ThisTask = '';
			for( let i in globalData.tasksNotes ) {

				ThisTask += '<div class="notesF_Item">' +
								'<span class="NoteIt width20">' + globalData.tasksNotes[i].author + '</span>' +
								'<span class="NoteIt width45">' + globalData.tasksNotes[i].task + '</span>' +
								'<span class="NoteIt width17-5 paddLft">' + globalData.tasksNotes[i].due + '</span>' +
								'<span class="NoteIt paddLft">' + globalData.tasksNotes[i].date + '</span>' +
							'</div>';
			}
			$(ThisTask).appendTo('.TasksTop_Fl .mCSB_container');

			let ThisCaller = '';
			for( let i in globalData.callsNotes ) {

				ThisCaller += '<div class="notesF_Item ' + globalData.callsNotes[i].backClass + '">' +
								'<span class="NoteIt width20">' + globalData.callsNotes[i].caller + '</span>' +
								'<span class="NoteIt width12">' + globalData.callsNotes[i].extn + '</span>' +
								'<span class="NoteIt width20">' + globalData.callsNotes[i].callerid + '</span>' +
								'<span class="NoteIt width20">' + globalData.callsNotes[i].number + '</span>' +
								'<span class="NoteIt width27" style="width: 23%;">' + globalData.callsNotes[i].date + '</span>' +
								'<span class="NoteIt width12" style="width: 9%; padding-left: 0; padding-right: 0; text-align: center;">' + 
									'<a href="#"><i class="fa ' + globalData.callsNotes[i].iconCall + '" aria-hidden="true" style="color: ' + globalData.callsNotes[i].colorIcon + '; font-size: ' + globalData.callsNotes[i].fontSize + '; position: relative; top: 0"></i></a>' +
									'<span style="color: #000; font-size: 9px; float: left; width: 100%; position: relative; top: 0; text-align: center;">' + globalData.callsNotes[i].timecall + '</span>' +
								'</span>' +
							'</div>';
			}
			$(ThisCaller).appendTo('.calls_Floor .mCSB_container');





			$('.calls_Floor').each(function() {

			   $('.callsCount').html($('.notesF_Item', this).length);

			});

			let score = parseInt($('.callsCount').html());
    
		  	$(document).on('click', '.sc', function() {

		  		score += 1;

		    	$('.callsCount').html(score);

		  	});




			$('.TasksTop_Fl .notesF_Item:odd').css({ background: '#eee' });

			$.fn.dataGlobal = function() {
				return this.on(ck, '*', function(e) {

					let ThEvent = $(this);

					switch(true) {

						case (ThEvent.hasClass('tabAll')):
							$('.addThSms, .addThNote, .addThNoteEdit').show();
							$('.bottomNav_Floor, .calls_Floor').removeAttr('style');
							$('.bottomShow').removeClass('goTTopSms').addClass('goTTop');
							$('.bottomNav_Floor').addClass('topHeight');
							$('.bottomTasks').removeClass('topGoBttSmsDown');
							$('.addNote').show();
							$('.addNoteSms').hide();
							$('#notesFloor').removeAttr('style');
							break;

						case (ThEvent.hasClass('tabNotes')):
							$('.addThSms').hide();
							$('.addThNote, .addThNoteEdit').show();
							$('.bottomNav_Floor, .calls_Floor').removeAttr('style');
							$('.bottomShow').removeClass('goTTopSms').addClass('goTTop');
							$('.bottomNav_Floor').addClass('topHeight');
							$('.bottomTasks').removeClass('topGoBttSmsDown');
							$('.addNote').show();
							$('.addNoteSms').hide();
							$('#notesFloor').removeAttr('style');
							break;

						case (ThEvent.hasClass('Tabsms')):
							$('.addThSms').show();
							$('.addThNote, .addThNoteEdit').hide();
							$('.bottomNav_Floor').removeClass('topHeight').css({ height: '36.9vh' });
							$('.calls_Floor').css({ height: '34vh' });
							$('.bottomShow').removeClass('goTTop').addClass('goTTopSms');
							$('.addNote').hide();
							$('.addNoteSms').show();
							$('#notesFloor').css({ 'max-height': '336px' });
							break;

						case (ThEvent.hasClass('goTTopSms')):
							$('.bottomTasks').removeClass('topGoDown topGoBttSmsDown').addClass('topGoBttSms');
							$('.bottomNav_Floor').css({ height: '89.3vh' });
							$('.calls_Floor').css({ height: '84.85vh' });
							$('.bottomShow').removeClass('goTTopSms').addClass('goTDownSms').html('Show Less -');
							break;

						case (ThEvent.hasClass('goTDownSms')):
							$('.bottomTasks').removeClass('topGoBttSms').addClass('topGoBttSmsDown');
							$('.bottomNav_Floor').removeClass('topHeight').css({ height: '39.75vh' });
							$('.calls_Floor').css({ height: '36.6vh' });
							$('.bottomShow').removeClass('goTDownSms').addClass('goTTopSms').html('Show More +');
							break;

						case (ThEvent.hasClass('addTasks')):
							$('.taskNote_Fl').fadeIn(300);
							$('.task_TextArea').val('');
							$('.notesF_Item').removeClass('topTask');
							break;

						case (ThEvent.hasClass('addNoteSms')):
							$('.smsNote_Fl').fadeIn(300);
							$('.Lock_Content input, .Lock_Content textarea').val('');
							break;

						case (ThEvent.hasClass('smsBtn')):
							$('.smsNote_Fl').fadeIn(300);
							$('.Lock_Content input, .Lock_Content textarea').val('');
							break;

						case (ThEvent.hasClass('closeSmsNote')):
							$('.smsNote_Fl, .taskNote_Fl').fadeOut(300);
							$('.Select_Fl1, .Select_Fl2').slideUp(100);
							break;

						case (ThEvent.hasClass('searchIco')):
							$('.searchLead').addClass('slideSearch');
							$('.searchTxt').fadeOut(100);
							$(this).hide();
							$('.goSearch').show();
							break;

						// Search Loading	
						case (ThEvent.hasClass('goSearch')):

							const SearchVal = ($('.searchLead').val() != '') ? $(this).hide() && $('.SearchSpinner').show() : '';

							setTimeout(function() {
								$('.SearchSpinner').hide();
								$('.goSearch').show();

							}, 3000);
							break;

						case (ThEvent.hasClass('alertsDisplay')):
							$('.alerts_Fl').slideToggle(100);
							break;

						case ($(this).hasClass('closeSearch')):
							$('.searchLead').removeClass('slideSearch');
							$('.searchTxt').fadeIn(100);
							$('.searchIco').show();
							$('.goSearch').hide();
							$('html').removeClass('closeSearch');
							break;
					}

				});


			}

			d.dataGlobal();
		}
	}


	$.fn.extend({

		runKey: function(i,x) {
			var $showthis = $(window);
			$showthis.on('keyup', function(event) {
				if(event.keyCode == 13) { 

					$('.goSearch').click(); 
					$('.searchIco').hide();
				}
			});
		}

	});

	d.runKey();



	let shoM = 'Show More +';
	let btnShowM = $('<span/>', { class: 'toShow openShow' }).html(shoM).appendTo('.topTasks .topNav');
	let btnShowMD = $('<span/>', { class: 'bottomShow goTTop' }).html(shoM).appendTo('.bottomTasks .topNav');

	$('.lDetail .toShow').remove();
	$("#notesFloor, #TasksTop_Fl, #callsFloor, #alertsFl").mCustomScrollbar({ theme:"dark-3", scrollInertia: 50 });


	/* Add Lead Temp */ const addLeadTemp = allDoc.hasClass('addleadTemp') ? NavRefer.html(addleadTxt) && SmarterWith() : '';

	/* All POlicies Temp */ const allPoliTemp = allDoc.hasClass('allpoliciesTemp') ? NavRefer.html('POLICIES') && SmarterWith() : '';

	/* LeadPot Temp */ const leadpotTemp = allDoc.hasClass('leadpotTemp') ? NavRefer.html(leadpotTxt) && SmarterWith() : '';

	/* News Temp */ const newsTemp = allDoc.hasClass('newsTemp') ? NavRefer.html(newstickertext) && SmarterWith() : '';

	/* Icon Temp */ const iconTemp = allDoc.hasClass('IconModalTemp') ? NavRefer.html(iconmodalTxt) && SmarterWith() : '';

	/* Menu setting Temp */ const MSettingsTemp = allDoc.hasClass('menuSettingsTemp') ? $('.leadTNav .referenceLead').html('') && SmarterWith() : '';

	/* Sales Person Temp */ const salesTemp = allDoc.hasClass('salepersoncapTemp') ? $('.leadTNav .referenceLead').html('Sales Persons Cap') && SmarterWith() : '';

	/* Sales Per Types Temp */ const salesTytemp = allDoc.hasClass('salepersontypesTemp') ? $('.leadTNav .referenceLead').html('Sales Persons Types') && SmarterWith() : '';

	/* MyLeads Temp */ const myLeadsTemp = allDoc.hasClass('myleadsTemp') ? $('.leadTNav .referenceLead').html('My Leads (0)') && SmarterWith() : '';

	/* Mypolicies Temp */ const mypoliTemp = allDoc.hasClass('mypoliciesTemp') ? $('.leadTNav .referenceLead').html('My Policies') && SmarterWith() : '';

	/* preRisk Temp */ const preRiskTemp = allDoc.hasClass('preriskpoliciesTemp') ? $('.leadTNav .referenceLead').html('Pre Risk Policies') && SmarterWith() : '';

	/* preSav Temp */ const presaveTemp = allDoc.hasClass('presavepoliciesTemp') ? $('.leadTNav .referenceLead').html('Pre Save Policies') && SmarterWith() : '';

	/* preacance Temp */ const precanceTemp = allDoc.hasClass('precancellationpoliciesTemp') ? $('.leadTNav .referenceLead').html('Pre Cancellation Policies') && SmarterWith() : '';

	/* On Risk Temp */ const onRiskTemp = allDoc.hasClass('onriskpoliciesTemp') ? $('.leadTNav .referenceLead').html('On Risk Policies') && SmarterWith() : '';

	/* Tasks Temp */ const tasksTemp = allDoc.hasClass('tasksTemp') ? $('.leadTNav .referenceLead').html('Tasks') && SmarterWith() : '';
 

	// Load Pages
	switch(true) {

		case (allDoc.hasClass('quoteTemp')):
			$('.dateCrtLead, .dupeLeadLabel, .downRightHeader, rightBtnsPg').hide();
			NavRefer.html(quotetxt);
			$('.SmarterSection').removeClass('SmarterSectionWith');
			break;

		case (allDoc.hasClass('policyTemp')):
			$('.dateCrtLead, .dupeLeadLabel, .downRightHeader, .rightBtnsPg').hide();
			NavRefer.html(policyTxt);
			$('.SmarterSection').removeClass('SmarterSectionWith');
			break;

		case (allDoc.hasClass('fishingTemp')):
			$('.dateCrtLead, .dupeLeadLabel, .downRightHeader, .rightBtnsPg').hide();
			NavRefer.html(fishingTxt);
			$('.topLeadDetail').show();
			$('.notes_Floor').addClass('notesHeightFish');
			$('.toShow').removeClass('openShow').addClass('openShowFish');
			$('.topNav_Floor').removeClass('toUp topGo');
			$('.SmarterSection').removeClass('SmarterSectionWith');
			break;

		case (allDoc.hasClass('policydetailTemp')):
			$('.dateCrtLead, .dupeLeadLabel, .downRightHeader, .rightBtnsPg').hide();
			NavRefer.html(policydetailTxt);
			$('.SmarterSection').removeClass('SmarterSectionWith');
			break;

		case (allDoc.hasClass('listenliveTemp')):
			$('.dateCrtLead, .dupeLeadLabel, .taskSection, .LRefr_Btns.bigBtn, .rightBtnsPg').hide();
			NavRefer.html(listenliveTxt);
			$('.downRightHeader').show();
			break;	
	}

	let closeModalTemp = '<div class="lr"><div class="rl"></div></div>';
	$(closeModalTemp).appendTo('.close-modal');

	let addNoteSms = $('<span/>', { class: 'addNoteSms' }).appendTo('.headerTabs');

	let addNull = function(i) { if (i < 10) { i = '0' + i; } return i; }

	let currentdate = new Date(); 
	let dayWeek = currentdate.getDay() + " ";
	let fullY = currentdate.getFullYear().toString().slice(2);
    let datetime = addNull(currentdate.getDate()) + "/" + addNull(currentdate.getMonth() + 1)  + "/" + fullY;

    let $weekDay = $('.LocalDateTime .weekDay');

	$('.LocalDateTime .date').html(datetime);
	$weekDay.html(dayWeek);

	let elseOpt = '';

	const SunWeek = $weekDay.html() == 0 ? $weekDay.html('SUNDAY') : elseOpt;
	const MonWeek = $weekDay.html() == 1 ? $weekDay.html('MONDAY') : elseOpt;
	const TueWeek = $weekDay.html() == 2 ? $weekDay.html('TUEDAY') : elseOpt;
	const WedWeek = $weekDay.html() == 3 ? $weekDay.html('WEDNESDAY') : elseOpt;
	const ThuWeek = $weekDay.html() == 4 ? $weekDay.html('THURSDAY') : elseOpt;
	const FriWeek = $weekDay.html() == 5 ? $weekDay.html('FRIDAY') : elseOpt;
	const SatWeek = $weekDay.html() == 6 ? $weekDay.html('SATURDAY') : elseOpt;
 
	setInterval('updateClock()', 1000);

    // $ThBody.on('mousedown', '.smsNote_Content', function(e) {

    //     $(this).attr('unselectable', 'on').addClass('draggable');

    //     let el_w = $('.draggable').outerWidth(),
    //         el_h = $('.draggable').outerHeight();

    //     $ThBody.on("mousemove", function(e) {
    //         if ($dragging) {
    //             $dragging.offset({
    //                 top: e.pageY - el_h / 2,
    //                 left: e.pageX - el_w / 2
    //             });
    //         }
    //     });

    //     $dragging = $(e.target);

    // }).on('mouseup', '.draggable', function(e) {

    //     $dragging = null;
    //     $(this).removeAttr('unselectable').removeClass('draggable');

    // });

    $("#draggableSms, #draggableTask, #draggableBugReport").draggable({});
    // cancel: '.noDrag' 
	
	$.fn.GCl = function() {
    	return this.on(ck, '*', function(e) {

    		let THelm = $(this);
    		let TSpeed = 100;

    		const AlertsFl = (THelm.hasClass('closeAlerts')) ?
    			//e.stopPropagation() &&
    			$('.alerts_Fl').slideUp(TSpeed) &&
    			$('html').removeClass('closeAlerts') : '';

    		const closeNotes = (THelm.hasClass('closeNotes')) ?
    			$('.smsNote_Fl, .taskNote_Fl').fadeOut(200) &&
    			$('.Select_Fl1, .Select_Fl2').slideUp(TSpeed) : '';

    		const SelectFl1 = (THelm.hasClass('SelectCustomer1')) ?
    			$('.Select_Fl1').slideToggle(TSpeed) &&
    			$('.Select_Fl2').slideUp(TSpeed) : '';

    		const SelectFl2 = (THelm.hasClass('SelectCustomer2')) ?
    			$('.Select_Fl2').slideToggle(TSpeed) &&
    			$('.Select_Fl1').slideUp(TSpeed) : '';

    		const Selectopt1 = (THelm.hasClass('SelectOPtSelect1')) ?
    			$('.SelectCustomer1 input').val($(this).html()) &&
				$('.Select_Fl1').slideUp(TSpeed) : '';

			const Selectopt2 = (THelm.hasClass('SelectOPtSelect2')) ?
				$('.SelectCustomer2 input').val($(this).html()) &&
				$('.Select_Fl2').slideUp(TSpeed) : '';

			const jointon = (THelm.hasClass('switch-joint-on')) ? 
				$('.customerJointSelect').show() : '';

			const jointoff = (THelm.hasClass('switch-joint-off')) ?
				$('.customerJointSelect').hide() : '';

			const taskSelectSelectCustomer = (THelm.hasClass('SelectCustomer')) ?
				$('.TaskCustomer input').val($(this).html()) &&
				$('.taskSelect').slideUp(TSpeed) : '';

			const taskSelect = (THelm.hasClass('SelectOPtSelect')) ?
				$('.TaskCustomer input').val($(this).html()) &&
				$('.taskSelect').slideUp(TSpeed) : '';

			const TaskCustomer = (THelm.hasClass('TaskCustomer')) ?
				$('.taskSelect').slideToggle(TSpeed) : '';

    	});
    }

   	d.GCl();


	$.fn.extend({
		alertsFl: function() {
			return this.on('mouseover', '.alerts_Fl', function() { $('html').removeClass('closeAlerts'); });
		},
		alertsFlLeave: function() {
			return this.on('mouseleave', '.alerts_Fl', function() { $('html').addClass('closeAlerts'); });
		},
		searchLeave: function() {
			return this.on('mouseleave', '.search_Floor', function() { $('html').addClass('closeSearch'); });
		},
		searchOver: function() {
			return this.on('mouseover', '.search_Floor', function() { $('html').removeClass('closeSearch'); });
		}
	});

	d.alertsFl().alertsFlLeave().searchLeave().searchOver();


	$.fn.heightFunc = function() {
		switch(true) {

			case($ThBody.height() <= 969):
				$('body').addClass('body969');
				height969();
				break;

			case($ThBody.height() >= 1006):
				$('body').addClass('body1008');
				height1008();
				break;
		}
	}

	d.heightFunc();

	leadsStatement();



	// var score = parseInt($('.callsCount').html());

    
 //  	$(document).on('click', '.phoneAdt', function() {
 //  		score += 1;

 //    	$('.callsCount').html(score);

 //  	});




});

function updateClock () {
 	let currentTime = new Date();
  	let currentHours = currentTime.getHours();
  	let currentMinutes = currentTime.getMinutes();
  	let currentSeconds = currentTime.getSeconds();

  	currentHours = ( currentHours < 10 ? "0" : "" ) + currentHours;
  	currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
  	currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;

  	let timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";
  	currentHours = ( currentHours > 24 ) ? currentHours - 24 : currentHours;
  	currentHours = ( currentHours == 0 ) ? 24 : currentHours;
  	//let currentTimeString = currentHours + ":" + currentMinutes + ':' + currentSeconds;
  	let currentTimeString = currentHours + ":" + currentMinutes;
  	
   	$(".LocalDateTime .hours").html(currentTimeString);	  
}


function height969() {
	$('.bottomHomeGrid').removeAttr('style');
	$('.topHomeGrid').css({ height: '11vh' }).addClass('height969');
	$('.bottomHomeGrid').css({ height: '12.5vh' }).addClass('bheight969');

	$('.notes_Floor').css({ height: '61.5vh' });
	$('.columnState_Fl').css({ height: '50vh' }).addClass('colum969');
	$('.policyTemp .costumerRight, .policydetailTemp .costumerRight').css({ height: '81.6vh' });
	$('.policyTemp .costumerLeft:nth-child(3)').css({ height: '29.97vh' });
	$('.costumerDetails .costumerBoard .bottomForm .boxInp textarea').css({ height: '4vh' });
	$('.PoliciesLead_Fl').css({ height: '23.7vh' });
}

function height1008() {
	$('.topHomeGrid').css({ height: '13vh' }).removeClass('height969');
	$('.bottomHomeGrid').css({ height: '14.5vh '}).removeClass('bheight969');

	$('.notes_Floor').removeAttr('style');
	$('.policyTemp .costumerRight, .policydetailTemp .costumerRight').css({ height: '83.6vh' });
	$('.policyTemp .costumerLeft:nth-child(3)').css({ height: '33.9vh' });
	$('.costumerDetails .costumerBoard .bottomForm .boxInp textarea').css({ height: '7.5vh' });
	$('.PoliciesLead_Fl').css({ height: '27.9vh' });
	$('.columnState_Fl').css({ height: '51.8vh' }).addClass('colum1008');
	// $('.calls_Floor').css({ height: '84vh' });
}

function leadsStatement() {

	let maxGheight = 17.8; // 21.2
	let maxGHeight18 = 15; // 18.5
	let minGheight = 5;
	let topHGrid = $('.topHomeGrid');
	let bottHGrid = $('.bottomHomeGrid');


	if($('.topHomeGrid span').html() == 'POLICIES GRID LAYOUT' && $('.bottomHomeGrid span').html() != 'DUPLICATES GRID LAYOUT') {

		topHGrid.css({ height: minGheight + 'vh'});

		const bodyEnough = ($('body').hasClass('body1008')) ? bottHGrid.css({ height: maxGheight + 'vh' }) : bottHGrid.css({ height: maxGHeight18 + 'vh' });

		$('.bottomHomeGrid').removeClass('bothUp') 
		
		// if($('body').hasClass('body1008')) { 

		// 	bottHGrid.css({ height: maxGheight + 'vh' });
			
		// } else { bottHGrid.css({ height: maxGHeight18 + 'vh' }); }
		
	} else if($('.bottomHomeGrid span').html() == 'DUPLICATES GRID LAYOUT' && $('.topHomeGrid span').html() != 'POLICIES GRID LAYOUT') {

		const bodyEnoughBott = ($('body').hasClass('body1008')) ? topHGrid.css({ height: maxGheight + 'vh' }) : topHGrid.css({ height: maxGHeight18 + 'vh' });
		
		// if($('body').hasClass('body1008')) { 

		// 	topHGrid.css({ height: maxGheight + 'vh' });
			
		// } else { topHGrid.css({ height: maxGHeight18 + 'vh' }); }
		
		bottHGrid.css({ height: minGheight + 'vh' });
		$('.bottomHomeGrid').removeClass('bothUp') 
		
	} else { 

		topHGrid.add(bottHGrid).removeAttr('style')
		$('.bottomHomeGrid').addClass('bothUp') 
	}

}

function SmarterWith() {
	$('.dateCrtLead, .dupeLeadLabel').hide();
	$('.taskSection').hide();
	$('.downRightHeader').show();
	$('.SmarterSection').addClass('SmarterSectionWith');
	$('.rightBtnsPg').hide();

	if($('body').hasClass('body1008')) { height1008();

	} else if($('body').hasClass('body969')) { height969(); }
}