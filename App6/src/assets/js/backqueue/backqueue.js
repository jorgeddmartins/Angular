
// Document Element
let d = $(document);

// Click Event
let ck = 'click';

$(function() {

	"use strict";

	$.fn.backQueueRun = function(bQopt) {

		let backQueueDefault = $.extend({

			// Elements To Be Removed
			toDetach: $('.backqueueTasks .topTasks, .backqueueTasks .bottomTasks, .backqueueTasks .borderTask'),

			// Data Injedtions
			data: {

				// Json Data
				urlJson: 'assets/js/backqueue/backqueue.json'
			},

			// All Tags
			tags: {

				// Html Tag
				htmlTag: 'html'
			},

			// Section Task Left Block Class
			backLeftCl: 'backQueueDetails-Left',

			// Section Task Right Block Class
			backRightCl: 'backQueueDetails-Right',

			// Left Block Expand Class
			expLeftBl: 'pliExpandLeft',

			// Left Block Back To Normal Class
			normLeftBl: 'pliNormalLeft',

			// Right Block Expand Class
			expRightBl: 'pliExpandRight',

			// Right Block Back To Normal Class
			normRightBl: 'pliNormalRight',

			// Main Top Search Id
			sDrId: 'SearchDrop_Id',

			// Main Close Top Search Id
			sDrIdCl: 'SearchDrop_IdCl',

			// Top Search Drop Down
			sDr: 'SearchDrop_Down',

			// Select Floor Class
			sdrop: 'SearchDrop',

			// BackQueue Main Class
			bcT: 'backQueueTemp',

			// Element Templates
			temp: {

				// Header Grid Bottom Temp
				GrHdT: '<span class="aRdTh"></span>',

				// Header Grid Bottom Input Temp
				GrHdInp: '<input type="text" class="aRin" />'
			},

			// Set Values
			value: {

				// Header Grid Bottom Each Function Val
				hVal: 0,

				// AddRecord Grid Each Function Val
				addRVal: 0
			},

			// Items To Detach On Header Grid Bottom
			idHAp: '#ar_0 .aRin, #ar_4 .aRin'

		}, bQopt);


		// Runs BackQueue Settings
		let bQsetitngs = $.extend( true, {

			lLink: $('<span>', { class: 'leadlink'}).html('Open Policy')

		}, backQueueDefault, bQopt);

		// BackQ Function To Run
		function BackQ(bQopt) {

			// Default Propreties
			this._defaults = backQueueDefault;

			// Runs BackQueueP Prototype
			this.BackQueueP();

			// Runs events Prototype
			this.events();

			// Runs glEvents Prototype with speed Value
			this.glEvents(100);

			// Grid Bottom Header Each Function
			$('.GrHdBott .aRdTh').GrBott();

			// AddRecord Grid Each function
			$('.tAmount').Amount();
		}

		// Extends Prototypes	
		$.extend( BackQ.prototype, {

			// First Prototype To Run
			BackQueueP: function() {

				// Removes Elements not Needed
				bQsetitngs.toDetach.detach();

				// Data Json Injection
				$.ajax({

					type: 'GET',
					url: bQsetitngs.data.urlJson,
					datatype: 'json',

					success: function(backdata) { d.BackData(backdata) }

				});

				// Back Queue Data Injection
				$.fn.BackData = function(backdata) {

					// Current Polidy Details Data Injection
					let leftBackQ = '';
					for( let l in backdata.backLefttable ) {

						// Current Policy Details Template
			    		leftBackQ += '<div class="DetaBoardTr" id="DetaTr_' + backdata.backLefttable[l].id + '">' +
		                                '<div class="tbl-hdr-row toplabD">' +
		                                    '<label class="tbl-hdr-col">' + backdata.backLefttable[l].thlab1 + '</label>' +
		                                    '<label class="tbl-hdr-col">' + backdata.backLefttable[l].thlab2 + '</label>' +
		                                    '<label class="tbl-hdr-col">' + backdata.backLefttable[l].thlab3 + '</label>' +
		                                    '<label class="tbl-hdr-col">' + backdata.backLefttable[l].thlab4 + '</label>' +
		                                '</div>' +
		                                '<div class="tbl-hdr-row">' +
		                                    '<span class="tbl-hdr-col">' + backdata.backLefttable[l].tdb1 + '</span>' +
		                                    '<span class="tbl-hdr-col">' + backdata.backLefttable[l].tdb2 + '</span>' +
		                                    '<span class="tbl-hdr-col">' + backdata.backLefttable[l].tdb3 + '</span>' +
		                                    '<span class="tbl-hdr-col">' + backdata.backLefttable[l].tdb4 + '</span>' +
		                                '</div>' +
		                    		'</div>';
					}

					// Board Left Data Injection
					$(leftBackQ).appendTo('.backQueueDetails-Left .PolicyDetaBoard');

					// BackQueue Body Grid
					let bGrd = '';
					for( let b in backdata.bodygrid ) {

						// BackQueue Body Grid Template
						bGrd += '<div class="BTr">' +
				                    '<span class="aRdTd"><i class="checkLead fa ' + backdata.bodygrid[b].data[0].td1 + '" aria-hidden="true"></i></span>' +
				                    '<span class="aRdTd">' + backdata.bodygrid[b].data[1].td2 + '</span>' +
				                    '<span class="aRdTd">' + backdata.bodygrid[b].data[2].td3 + '</span>' +
				                    '<span class="aRdTd">' + backdata.bodygrid[b].data[3].td4 + '</span>' +
				                    '<span class="aRdTd">' + backdata.bodygrid[b].data[4].td5 + '</span>' +
				                    '<span class="aRdTd">' + backdata.bodygrid[b].data[5].td6 + '</span>' +
				                    '<span class="aRdTd">' + backdata.bodygrid[b].data[6].td7 + '</span>' +
				                '</div>';
					}

					// Body Grid Data Injection
					$(bGrd).appendTo('.backQueueGr_In .GridBody');

					// Top AddRecord Grid
					let topAdd = '';
					for( let t in backdata.topAddRec) {

						// Top AddRecord Template
						topAdd += '<div class="addGtr">' +
                                        '<span class="aRdTh"><i class="checkLead fa fa-check-square-o" aria-hidden="true"></i></span>' +
                                        '<span class="aRdTh">' + backdata.topAddRec[t].data[0].add1 + '</span>' +
                                        '<span class="aRdTh amountTd">' + backdata.topAddRec[t].data[1].add2 + '</span>' +
                                        '<span class="aRdTh">' + backdata.topAddRec[t].data[2].add3 + '</span>' +
                                        '<span class="aRdTh">' + backdata.topAddRec[t].data[3].add4 + '</span>' +
                                        '<span class="aRdTh">' + backdata.topAddRec[t].data[4].add5 + '</span>' +
                                        '<span class="aRdTh">' + backdata.topAddRec[t].data[5].add6 + '</span>' +
                                        '<span class="aRdTh">' +
                                            '<i class="editBtn fa fa-pencil" aria-hidden="true"></i>' +
                                            '<i class="editBtn fa fa-close" aria-hidden="true"></i>' +
                                        '</span>' +
                                    '</div>';
					}

					// Top AddRecord Grid Injection
					$(topAdd).appendTo('#addRe_0 .addRecordGrid_Body');

					// Bottom AddRecord Grid
					let bottomAdd = '';
					for( let b in backdata.bottomAddRec) {

						// Bottom AddRecord Template
						bottomAdd += '<div class="addGtr">' +
                                        '<span class="aRdTh"><i class="checkLead fa fa-check-square-o" aria-hidden="true"></i></span>' +
                                        '<span class="aRdTh">' + backdata.bottomAddRec[b].data[0].add1 + '</span>' +
                                        '<span class="aRdTh amountTd">' + backdata.bottomAddRec[b].data[1].add2 + '</span>' +
                                        '<span class="aRdTh">' + backdata.bottomAddRec[b].data[2].add3 + '</span>' +
                                        '<span class="aRdTh">' + backdata.bottomAddRec[b].data[3].add4 + '</span>' +
                                        '<span class="aRdTh">' + backdata.bottomAddRec[b].data[4].add5 + '</span>' +
                                        '<span class="aRdTh">' + backdata.bottomAddRec[b].data[5].add6 + '</span>' +
                                        '<span class="aRdTh">' +
                                            '<i class="editBtn fa fa-pencil" aria-hidden="true"></i>' +
                                            '<i class="editBtn fa fa-close" aria-hidden="true"></i>' +
                                        '</span>' +
                                    '</div>';
					}

					// Top AddRecord Grid Injection
					$(bottomAdd).appendTo('#addRe_1 .addRecordGrid_Body');

					// Odd GridBody Elements Add Hexa : #f9f9f9 Background 
					$('.GridBody .BTr:odd').css({ background: '#f9f9f9' });

					// Scroll For BackQueue Grid
					$("#PackQgBd").mCustomScrollbar({ theme:"dark-3", scrollInertia: 50 });
				}
			},

			// Second Prototype To Run
			events: function() {

				// Animate Left Block( Displays From Left to Right )
				$.fn.bqLeft = function( maxWd, dlSpeed, aniSpeed ) {
					return this.on(ck, '.' + bQsetitngs.expLeftBl, function() {

						// Animates This Block 100%
						$('.' + bQsetitngs.backLeftCl ).delay(dlSpeed).animate({ width: maxWd }, aniSpeed);

						// Icon Expand Transform( From Expand to Normal )
						$(this).removeClass('' + bQsetitngs.expLeftBl + ' fa-arrows-h').addClass(''+ bQsetitngs.normLeftBl +' fa-long-arrow-left');

						// Right Block Slides To Right 51%
						$('.' + bQsetitngs.backRightCl).delay(dlSpeed).animate({ right: '-51%' }, aniSpeed);

					});
				}

				// Runs Left Expand Block Function
				d.bqLeft('100%', 50, 100);

				// Animates Left Block( Displays From Right to Left )
				$.fn.bqLeftNormal = function( midWid, stVal, dlSpeed, aniSpeed ) {
					return this.on(ck, '.' + bQsetitngs.normLeftBl, function() {

						// Aniamtes This Block 50% Back
						$('.' + bQsetitngs.backLeftCl).delay(dlSpeed).animate({ width: midWid }, aniSpeed);

						// Icon Normal Transform( From Normal to Expand )
						$(this).addClass('' + bQsetitngs.expLeftBl + ' fa-arrows-h').removeClass(''+ bQsetitngs.normLeftBl +' fa-long-arrow-left');

						// Right Block Slides 0px Back To Right 
						$('.' + bQsetitngs.backRightCl).delay(dlSpeed).animate({ right: stVal }, aniSpeed);

					});
				}

				// Runs Left Normal Block Function
				d.bqLeftNormal('50%', 0, 50, 100);

				// Animate Right Block( Displays From Right to Left )
				$.fn.bqRight = function( maxWd, stVal, dlSpeed ) {
					return this.on(ck, '.' + bQsetitngs.expRightBl, function() {

						// Animates This Block 100%
						$('.' + bQsetitngs.backRightCl).delay(dlSpeed).animate({ width: maxWd }, 100);

						// Adding Right Block Left Border color
						$('.' + bQsetitngs.backRightCl).css({ 'border-left': '1px solid #ddd', position: 'absolute', bottom: stVal });

						// Removes Class To Close Blocks & Adds Class Ton Open Blocks
						$(this).removeClass('' + bQsetitngs.expRightBl + ' fa-arrows-h').addClass('' + bQsetitngs.normRightBl + ' fa-long-arrow-right');

						// Right Block Main Child adds Width For 100% Main Block
						$('.detWSmall_Fl').css({ width: '81%' });

						// Logic to Open the update Letter Details Btn
						$('.UpdateLetter').css({ width: '150px', height: '108px', padding: '30px', 'padding-top': '47px', 'margin-top': '24px', 'margin-left': '5px' });

						// Hides Left Block when this Animates
						$('.' + bQsetitngs.backLeftCl).delay(dlSpeed).animate({ bottom: '-100%' }, 10);

					});
				}

				// Runs Right Expand Block Function
				d.bqRight('100%', 0, 50);

				// Animate Right Block( Displays From Left to Right )
				$.fn.bqRightNormal = function( stVal, dlSpeed ) {
					return this.on(ck, '.' + bQsetitngs.normRightBl, function() {

						// Animates This Block 50%
						$('.' + bQsetitngs.backRightCl).delay(dlSpeed).animate({ width: '50%' }, 100);

						// Removes the Left Border Style
						$('.' + bQsetitngs.backRightCl).removeAttr('style').css({ 'border-left': stVal });

						// Animates Ico For the Animation
						$(this).addClass('' + bQsetitngs.expRightBl + ' fa-arrows-h').removeClass('' + bQsetitngs.normRightBl + ' fa-long-arrow-right');

						// Right Block Main Child adds Width For 50% Main Block
						$('.detWSmall_Fl').css({ width: '100%' });

						// Logic to Close The Update Letter Details Btn 
						$('.UpdateLetter').css({ width: '100%', height: '50px', padding: '41px', 'margin-top': '1.5px', 'margin-left': 0 });

						// Shows Left Block When This Animates
						$('.' + bQsetitngs.backLeftCl).delay(dlSpeed).animate({ bottom: stVal }, 10);

					});
				}

				// Runs Right Block Back To Normal
				d.bqRightNormal(0, 50);

				// Removes The Expand Icon From Task Section
				$('.backQueueTemp .taskSection .expandIcon').remove();
			},

			// Third Prototype To Run
			glEvents: function(speed) {

				// Global Click Event Function
				$.fn.fGlobal = function() {
					return this.on(ck, '*', function(e) {

						// To Find Attribute Id
						let id = $(this).attr('id');

						// To Find Class Name
						let gclass = $(this)[0].className;

						// If This Id is == to SearchDrop_Id
						if(id == bQsetitngs.sDrId) {

							e.stopPropagation();

							// Search Drop Down Slides Down
							$('.' + bQsetitngs.sDr).slideDown(speed);

							// This Id Removes Attr Id & Adds Attribute Id 'SearchDrop_IdCl'
							$(this).removeAttr('id').attr({ id: bQsetitngs.sDrIdCl })

							// Html Tag Adds Close Class
							$(bQsetitngs.tags.htmlTag).addClass('cSDrop');

							// Search Drop Down Rotate Class
							$('.' + bQsetitngs.sdrop).addClass('SearchDropRot');
						}

						// If This Id is == to SearchDrop_IdCl
						else if(id == bQsetitngs.sDrIdCl) {

							// Search Drop Dowm Slides Up
							$('.' + bQsetitngs.sDr).slideUp(speed);

							// This Id Removes Attr Id & Adds Attribute Id 'SearchDrop_Id'
							$(this).removeAttr('id').attr({ id: bQsetitngs.sDrId })

							// Html Tag Removes Close Class
							$(bQsetitngs.tags.htmlTag).removeClass('cSDrop');

							// Search drop Down Rotate Class
							$('.' + bQsetitngs.sdrop).removeClass('SearchDropRot');
						}

						// If This has Class == Down_Item( Drop Down Item )
						else if(gclass.indexOf('Down_Item') != -1 ) {

							// Value Injection Inside Id 'SearchDrop_IdCl' 
							$('#' + bQsetitngs.sDrIdCl).val($(this).html());

							// Search Drop Down Slides Up
							$('.' + bQsetitngs.sDr).slideUp(speed);

							// Html Tag Removes 'cSDrop'
							$(bQsetitngs.tags.htmlTag).removeClass('cSDrop');

							// Id 'SearchDrop_IdCl' Removes Attr Id & Adds Attribute Id 'SearchDrop_Id'
							$('#' + bQsetitngs.sDrIdCl).removeAttr('id').attr({ id: bQsetitngs.sDrId });

							// Search Drop Down Rotate Class
							$('.' + bQsetitngs.sdrop).removeClass('SearchDropRot');
						}

						// If This has Class 'cSDrop'
						else if(gclass.indexOf('cSDrop') != -1) {

							// Search Drop Down Slides Up
							$('.' + bQsetitngs.sDr).slideUp(speed);

							// Html Tag Removes Class 'cSDrop'
							$(bQsetitngs.tags.htmlTag).removeClass('cSDrop');

							// Id 'SearchDrop_IdCl' Removes Attr Id & Adds Attribute Id 'SearchDrop_Id'
							$('#' + bQsetitngs.sDrIdCl).removeAttr('id').attr({ id: bQsetitngs.sDrId });

							// Search Drop Down Rotate Class
							$('.' + bQsetitngs.sdrop).removeClass('SearchDropRot');
						}

						// Adds Selected Class To the top Btns
						else if(gclass.indexOf('top_Btn') != -1) {

							// Removes Selected Class From All Top Buttons
							$('.top_Btn').removeClass('CurrentBtnSelected');

							// Adds Selected Class In The Clicked Element
							$(this).addClass('CurrentBtnSelected');
						}

					});
				}

				// Runs Global Click Event Function
				d.fGlobal();

				// Lead Link Injection
				$(bQsetitngs.lLink).appendTo('.backQueueTemp .taskSection .headerTabs');

				// Adding Grid Bottom Header For Each
				for( let h = 0; h < 7; h++ ) {

					$(backQueueDefault.temp.GrHdT).appendTo('.GrHdBott')
				}

				// Addings Id's Each Grid Bottom Function
				$.fn.GrBott = function() {
					return this.each(function() {

						$(this).attr({ id: 'ar_' + backQueueDefault.value.hVal }); backQueueDefault.value.hVal++;
					});
				}

				// Appending Grid Bottom Header Iputs
				$(backQueueDefault.temp.GrHdInp).appendTo('.GrHdBott .aRdTh');

				// Adding Id's Each AddRecord function
				$.fn.Amount = function() {
					return this.each(function() {

						$(this).attr({ id: 'addRe_' + backQueueDefault.value.addRVal }); backQueueDefault.value.addRVal++;

					});
				}
			}

		});

		let Bq = new BackQ();

		// Bottom Grid Header Elements To Remove 
		$(bQsetitngs.idHAp).detach();

		// Items To Add This Class
		$('#ar_3, #ar_6').addClass('IDate');
		

		// Propreties Options To The Calendar / Override
		$(bQsetitngs.bcT).CalSett({

			// Width To The Big Calendar
			BigWidth: '257',

			// Width To The Small Calendar
			SmallWidth: '241.78'

		});

	}

	// Runs BackQueue Main Function
	d.backQueueRun();

});