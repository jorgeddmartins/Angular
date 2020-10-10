
// Document Element
let d = $(document);

// Click event
let ck = 'click';


$(function() {

	"use strict";

	// Global & Settings Function
	$.fn.GlobalRun = function(nl, globalOpt) {

		let defaultGl = $.extend({

			// Window Load
			window: $(window),

			// Global Document
			allDoc: $('*'),

			// Body Document
			ThBody: $('body'),

			// Fake Element
			fakeTemp: $('<div>', { class: 'fake_Box' }),

			// Image Element
			ImgTemp: $('<img>'),

			// Nav Element 
			NavRefer: $('.leadTNav .referenceLead'),

			// Task Section Tabs Select Class
			seleHtbCl: 'selectedHtb',

			// Add Data
			data: {

				// Url for Json Data Injection
				url: 'assets/js/global.json',

				// Fake Right Header img Injection
				fImgurl: 'assets/img/fake.png'
			},
			
			// Set All Values
			values: {

				// Value Null(0)
				dragging: nl
			},

			// HTML Tags To run 
			tags: {

				// Span Tag
				spanTag: '<span>',

				// Div Tag
				divTag: '<div>',

				// Body Tag
				bodyTag: 'body'
			},

			// Show More + Text
			shoM: 'Show More +',

			// Show Less - Text
			showL: 'Show Less -',

			// Adds Templates
			temps: {

				// Template To Clone Notes Floor
				cnf: $('<div>', { class: 'notesClone-Fl' }).append($('<div>', { class: 'loadItemEdit'})),

				// Template To SMS Notes
				ntSmsE: $('<div>', { class: 'noteSms_Floor'}),

				// Template For Top tasks Notes To Clone
				taEd: $('<div>', { class: 'taskTopNote_Floor'}).append( $('<div>', { class: 'loadItemEdit'}))
			}
			
		}, globalOpt);

		// Global Settings
		let gSettings = $.extend( true, {}, defaultGl, globalOpt);

		// Ajax Call( Data Injection )
		$.ajax({

			type: 'GET',
			url: gSettings.data.url,

			success: function(globalData) { d.GlobalTemp(globalData); }
		});

		// Appending Fake Temp to the Right Nav
		$('.topHeaderRight_Floor').before(gSettings.fakeTemp);

		// Appending Image To FakeBox Element
		$(gSettings.ImgTemp).appendTo('.fake_Box');

		// Fake Img Injection( If Needed )
		$('.fake_Box img').attr({ src: gSettings.data.fImgurl });

		// Show More Text Injection On Top Tasks
		let btnShowM = $(gSettings.tags.spanTag, { class: 'toShow openShow' }).html(gSettings.shoM).appendTo('.topTasks .topNav');

		// Show More Text Injection On Calls Tasks
		let btnShowMD = $(gSettings.tags.spanTag, { class: 'bottomShow goTTop' }).html(gSettings.shoM).appendTo('.bottomTasks .topNav');


		// Global Click Event Function
		$.fn.globalCl = function() {
			return this.on(ck, '*', function() {

				// Check To Find Class
				let tFind = $(this)[0].className;

				// User Log
				const userLog = tFind.indexOf('userLog') != -1 ? $('.userLog').removeClass('selected') && $(this).addClass('selected') : '';

				// Tabs
				const HTab = tFind.indexOf('HTab') != -1 ? $('.HTab').removeClass('selectedHtb') && $(this).addClass('selectedHtb') : '';

				// width 100% Urls
				const longWith = tFind.indexOf('longWith') != -1 ? SmarterWith() : '';

				// Click Event to Open Top Tasks Section
				if(tFind.indexOf('openShow') != -1) {

					// Top Task Section Floor To Add & Remove Logic Classes To Open 
					$('.topNav_Floor').addClass('topGo').removeClass('toUp').css({ position: 'absolute', top: '31px', 'z-index': '200' });

					// Removing Open Class & Adding Close Class, Also Changing Show More Text To Show Less Text
					$('.toShow').removeClass('openShow').addClass('closeShow').html(gSettings.showL);

					// Task Top Floor Adding the Right Height
					$('.TasksTop_Fl').css({ height: '86.4vh'});
				}

				// Click Event To Close Top Tasks Section
				else if(tFind.indexOf('closeShow') != -1) {

					// Top Task Section Floor To Remove & Add Logic Classes To Close
					$('.topNav_Floor').addClass('toUp').removeClass('topGo').css({ position: 'relative', top: '0', 'z-index': '0' });

					// Removing Close Class & Adding Open Class, also Changing Show Less Text To Show More Text
					$('.toShow').removeClass('closeShow').addClass('openShow').html(gSettings.shoM);

					// Top Task Floor Removing All Styles
					$('.TasksTop_Fl').removeAttr('style');
				}

				// Click Event To Open Calls Floor
				else if(tFind.indexOf('goTTop') != -1) {

					// BottomTask Adds Open Class & Removes Close Class
					$('.bottomTasks').addClass('topGoBtt').removeClass('topGoDown');

					// This Removes Class That Open Task & Add Class That Close Task, also Adds Show Less text
					$('.bottomTasks .bottomShow').removeClass('goTTop').addClass('goTDown').html(gSettings.showL);

					// Bottom Task Floor Adds Height Class & Removes Top Height Class 
					$('.bottomNav_Floor').addClass('bottHeight').removeClass('topHeight');
				}

				// Click Event To Close Calls Floor
				else if(tFind.indexOf('goTDown') != -1) {

					// BottomTask Removes Close Class & Adds Open Class
					$('.bottomTasks').addClass('topGoDown').removeClass('topGoBtt');

					// This Removes Class That Close Task & Add Class That Open Task, also Adds Show More Text 
					$('.bottomTasks .bottomShow').removeClass('goTDown').addClass('goTTop').html(gSettings.shoM);

					// Bottom Task Floor Adds Top Height Class & Removes Height Class
					$('.bottomNav_Floor').addClass('topHeight').removeClass('bottHeight');

					// Calls Floor Removes All Styles Added
					$('.calls_Floor').removeAttr('style');
				}

				// Menu Links that have normal Class( This just Happens On My Local )
				else if(tFind.indexOf('normal') != -1) {

					// Shows Right Task Section
					$('.dateCrtLead, .dupeLeadLabel, .taskSection, .rightBtnsPg').show();

					// Hiding Unnessary Elements
					$('.topLeadDetail, .downRightHeader').hide();

					// Notes Floor Removes Fishing Height Note Class
					$('.notes_Floor').removeClass('notesHeightFish');

					// This Removes Open Class For Fishing Screen & Add Open Normal Class
					$('.toShow').removeClass('openShowFish').addClass('openShow');

					// This Removes Fishing screen Classes
					$('.topNav_Floor').removeClass('toUpFish topGoFish');

					// Main Section Removes Class to be width 100%
					$('.SmarterSection').removeClass('SmarterSectionWith');

					// If Body Tag Has body1008 Class
					const b1008 = gSettings.ThBody.hasClass('body1008') ? height1008() : '';

					// If Body Tag Has body969 Class
					const b969 = gSettings.ThBody.hasClass('body969') ? height969() : '';

					// When Clicking on This element Loads Grids On the Lead Screen( Customer Policies & Duplicate Leads )
					leadsStatement();
				}

				// Policies Link( Goes to Policies Screen )
				else if(tFind.indexOf('policies') != -1) {

					// Hides Other Screen Blocks
					$('.dateCrtLead, .dupeLeadLabel, .topLeadDetail, .downRightHeader, .rightBtnsPg').hide();

					// Policies Task Section Removes Class For Fishing
					$('.notes_Floor').removeClass('notesHeightFish');

					// TopShow Class Removes OpenFishing Class
					$('.toShow').removeClass('openShowFish').addClass('openShow');

					// TopNavFloor Class Removes Top Fishing Classes
					$('.topNav_Floor').removeClass('toUpFish topGoFish');

					// Shows Task Section
					$('.taskSection').show();

					// Policies Screen Removes 100% Class
					$('.SmarterSection').removeClass('SmarterSectionWith');

					// If Body Tag Has body1008 Class
					const b1008 = gSettings.ThBody.hasClass('body1008') ? height1008() : '';

					// If Body Tag Has body969 Class
					const b969 = gSettings.ThBody.hasClass('body969') ? height969() : '';
				}

				// Fishing Link( Goes to Fishing Screen )
				else if(tFind.indexOf('fishing') != -1) {

					// Hides Other Screen Blocks
					$('.dateCrtLead, .dupeLeadLabel, .downRightHeader, .rightBtnsPg').hide();

					// Top Task Section Shows For Task Section
					$('.topLeadDetail, .taskSection').show();

					// Fishing Notes Floor adds Class For Fishing Tasks Section
					$('.notes_Floor').addClass('notesHeightFish');

					// Fishing Open Tasks
					$('.toShow').removeClass('openShow ').addClass('openShowFish');

					// Fishing Top Nav Removes Classes to go Up
					$('.topNav_Floor').removeClass('toUp topGo');

					// Fishing Screen Removes 100% Class
					$('.SmarterSection').removeClass('SmarterSectionWith');

					// If Body Tag Has body1008 Class
					const b1008 = gSettings.ThBody.hasClass('body1008') ? height1008() : '';

					// If Body Tag Has body969 Class
					const b969 = gSettings.ThBody.hasClass('body969') ? height969() : '';
				}

				// Policy Details Link( Goes to Policy Details )
				else if(tFind.indexOf('policydetailUrl') != -1) {

					// Hides Other Screen Blocks
					$('.dateCrtLead, .dupeLeadLabel, .downRightHeader, .rightBtnsPg').hide();

					// Task Section Shows For the Policy Details Screen
					$('.taskSection').show();

					// SmarteCover Element Removes 100% Class
					$('.SmarterSection').removeClass('SmarterSectionWith');

					// If Body Tag Has body1008 Class
					const b1008 = gSettings.ThBody.hasClass('body1008') ? height1008() : '';

					// If Body Tag Has body969 Class
					const b969 = gSettings.ThBody.hasClass('body969') ? height969() : '';
				}

				// Listen Link( Goes to Listen Screen ) 
				else if(tFind.indexOf('listenUrl') != -1) {

					// Hides Other Screen Blocks
					$('.dateCrtLead, .dupeLeadLabel, .taskSection, .LRefr_Btns.bigBtn, .rightBtnsPg').hide();

					// Aditional Down Header Shows
					$('.downRightHeader').show();

					// If Body Tag Has body1008 Class
					const b1008 = gSettings.ThBody.hasClass('body1008') ? height1008() : '';

					// If Body Tag Has body969 Class
					const b969 = gSettings.ThBody.hasClass('body969') ? height969() : '';
				}

				// Add Policy Link( Goes to AddPolicy Screen )
				else if(tFind.indexOf('addPoliBtn') != -1) {

					// Hides Aditional Blocks
					$('.dateCrtLead, .dupeLeadLabel, .rightBtnsPg').hide();

					// If Body Tag Has body1008 Class
					const b1008 = gSettings.ThBody.hasClass('body1008') ? height1008() : '';

					// If Body Tag Has body969 Class
					const b969 = gSettings.ThBody.hasClass('body969') ? height969() : '';
				}

				// Get Quotes Btn( Click Event )
				else if(tFind.indexOf('QutBtn') != -1) {

					// Hides Aditional Blocks 
					$('.dateCrtLead, .dupeLeadLabel, .rightBtnsPg').hide();

					// If Body Tag Has body1008 Class
					const b1008 = gSettings.ThBody.hasClass('body1008') ? height1008() : '';

					// If Body Tag Has body969 Class
					const b969 = gSettings.ThBody.hasClass('body969') ? height969() : '';
				}

			});
		}

		// Runs Global Click Event
		d.globalCl();

		// Right Task Section Border ( height: 31px )
		let rightTask = $(gSettings.tags.spanTag, { class: 'borderTask' }).appendTo('.taskSection');


		$.fn.GlobalTemp = function(globalData) {

			// 
			$(gSettings.temps.cnf).add(gSettings.temps.ntSmsE).appendTo('.notes_Floor .mCSB_container');

			// 
			$(gSettings.temps.taEd).appendTo('.TasksTop_Fl .mCSB_container');


			let Thisnotes = '';
			for( let i in globalData.globalNotes ) {

				Thisnotes += '<div class="notesF_Item ' + globalData.globalNotes[i].backClass + '">' +
								'<span class="NoteIt width20">' + globalData.globalNotes[i].name + '</span>' +
								'<span class="NoteIt width54 ' + globalData.globalNotes[i].icoClass + '">' + globalData.globalNotes[i].note + '</span>' +
								'<span class="NoteIt paddLft">' + globalData.globalNotes[i].date + '</span>' +
							'</div>';
			}
			$(Thisnotes).appendTo('.notes_Floor .mCSB_container');

			//
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

			//
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
		}


		$("#notesFloor, #TasksTop_Fl, #callsFloor, #alertsFl").mCustomScrollbar({ theme:"dark-3", scrollInertia: 50 });


		// Loads Body Heights
		$.fn.heightFunc = function() {

			// Add This Class If Body is lower or Igual to 969px
			if(gSettings.ThBody.height() <= 969) {

				// Adding body969 Class To Body Tag
				gSettings.ThBody.addClass('body969')

				// Logic For Class body969
				height969()
			} 

			// Loads This Class if Body is Higher or Igual to 1008px
			else if(gSettings.ThBody.height() >= 1006) {

				// Adding body1008 Class to Body Tag
				gSettings.ThBody.addClass('body1008')

				// Logic For Class body1008
				height1008()
			}
		}

		// Runs Body Heights Function
		d.heightFunc();

		// Loads Grids On the Lead Screen( Customer Policies & Duplicate Leads )
		leadsStatement();

		// Run Search with Enter Key(KeyBoard)
		$.fn.runKey = function(eKey) {
			gSettings.window.on('keyup', function(event) {

				if(event.keyCode == eKey) { 

					$('.goSearch').click(); 
					$('.searchIco').hide();
				}

			});
		}

		// Runs The keyBoard Function For( Return Key )
		d.runKey(13);
	}

	// Runs Global & Settings Function
	d.GlobalRun(null);

});