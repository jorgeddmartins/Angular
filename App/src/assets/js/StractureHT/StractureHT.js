
// Document Element
let d = $(document);

// Click Event
let ck = 'click';

$(function() {

	"use strict";

	// Propreties Main Function
	$.fn.StructureHt = function(accord, OptionsHT) {

		let HtDefault = {

			// Whole Screen True/False
			ScreenLoad: true,

			// False Template To Display
			falseTemp: $('<span>', { class: 'closeScreen' }).html('This Screen is closed!'),

			// Board 0 To Show True/False
			Square0: true,

			// Board 1 To Show True/False
			Square1: true,

			// Board 2 To Show True/False
			Square2: true,

			// Board 3 To Show True/False
			Square3: true,

			// Accordion To Show True/False
			accorTemp: true,

			// All Values
			value: {

				// Null Value(0)
				null: 0, 

				// Speed Slide Value
				slideSpeed: 200,

				// Link Value
				linkVal: 0,

				// Template Value
				glFlTemp: 2,

				// Drop Down value
				dropDateVal: 0,

				// Drop Down Speed Value
				speedDrop: 100
			},

			// Aditional Classes
			ScreenMClass: 'main-info',

			// Value 1
			ScreenCVal: 1,

			addId: 0,

			BootStrapfullW: 'col-md-12',

			// Load Templates
			template: {

				// F-Square Template
				tSquareT: '<div class="col-md-12 f-square"></div>',

				// F-Quare Class
				mTemp: 'f-square'
			},

			cleanDoc: 'DocClean',

			// Div Tag
			divTag: '<div>', 

			// Span Tag
			spanTag: '<span>',

			// Square Class
			squareCl: 'Square',

			// Drop Down For Date Picker
			datePick: 'DatePickerDrop',

			// Square Clean
			remoDCl: 'DocClean Square',

			// Form Tag
			formTag: 'form',

			// Html Tag
			htmlTag: 'html',

			// Accordion Propreties
			accordion: {

				// Adding Accordion Id
				acordionId: accord,

				// Clone Accordion Class
				acordCloneCl: 'AccordSide',

				//
				cleanAcord: '#accordion .accor-link, #accordion .accordion-content',

				// Accordion Handler
				accordTogg: 'accordion-toggle',

				// Accordion Drop Down
				accordCont: 'accordion-content',

				//
				contAccordion: 'ContAccor'
			},

			// Accordion Handlers
			handlers: {

				prodAnswer: 'ProductAnswers',

				logHist: 'LogHistory',

				leadComm: 'LeadComments',

				merchSal: 'MerchantSales',

				leadPl: 'LeadPL',

				callRecor: 'CallRecording'
			},

			SqId: 'Square_'
		};

		// Stracture Settings
		let htSettings = $.extend( true, {}, HtDefault, OptionsHT);


		function startLead() { this.goLead(); }

		$.extend( startLead.prototype, {

			goLead: function() {

				// Main Screen Loads if it's true
				if(htSettings.ScreenLoad == true) {

					// Creating The Main Structure Class nfor The Lead View
					for( let i = 0; i < htSettings.ScreenCVal; i++) {

						let ScreenM = $(htSettings.divTag, { class: htSettings.BootStrapfullW + ' ' + htSettings.ScreenMClass}).appendTo('.leadScreenView');
					}
					$('.' + htSettings.ScreenMClass).each(function() { $(this).addClass('main_' + htSettings.addId); htSettings.addId++ });

					// Erros Alerts
				    let ErrorTemp = $(htSettings.divTag, { class: 'ErrorAlert'}).append($(htSettings.spanTag, { class: 'ErrorIn'}));

					// Adding 'f-square' Temp In Global (Drag Template)
					for( let i = 0; i < htSettings.value.glFlTemp; i++ ) { $(htSettings.template.tSquareT).appendTo('.global-flat') }

					// Cloning Elements to the Main Structure
					$('.global-flat').clone().appendTo('.main-info');

					// Removing Cleaning Class
					$('.main-info .global-flat').removeClass(htSettings.cleanDoc);

					// Logic clone
					$('.' + htSettings.template.mTemp).each(function() { $(this).attr({id: 'Square_' + htSettings.value.null}); htSettings.value.null++; });

					// Max-heights For Drop Downs
					$('.RejectionDrop').css({ 'max-height': '316px', overflow: 'auto'});

					// Cloning to the Square0
					const Square00 = (htSettings.Square0 == true) ? $('.' + htSettings.squareCl + 0).clone().appendTo('#' + htSettings.SqId + 0) : '';

					// Cloning to the Square1
					const Square01 = (htSettings.Square1 == true) ? $('.' + htSettings.squareCl + 1).clone().appendTo('#' + htSettings.SqId + 1) : '';

					// Cloning to the Square2
					const Square02 = (htSettings.Square2 == true) ? $('.' + htSettings.squareCl + 2).clone().appendTo('#' + htSettings.SqId + 2) : '';

					// Cloning to the Square3
					const Square03 = (htSettings.Square3 == true) ? $('.' + htSettings.squareCl + 3).clone().appendTo('#' + htSettings.SqId + 3) : '';

					// Clean Id 0 Doc
					$('#Square_0 div').removeClass(htSettings.remoDCl + 0);

					// Clean Id 1 Doc
					$('#Square_1 div').removeClass(htSettings.remoDCl + 1);

					// Clean Id 2 Doc
					$('#Square_2 div').removeClass(htSettings.remoDCl + 2);

					// Clean Id 3 Doc
					$('#Square_3 div').removeClass(htSettings.remoDCl + 3);

					// Accordion Injection
					if(htSettings.accorTemp == true) {

						let acordSide = $(htSettings.divTag, { id: htSettings.accordion.acordionId }).appendTo('.rightAditional')
					}

					// Building Accordion
					$('.' + htSettings.accordion.acordCloneCl).clone().appendTo('#' + htSettings.accordion.acordionId);

					// Cleans Unessary Calsses
					$(htSettings.accordion.cleanAcord).removeClass(htSettings.accordion.acordCloneCl)

					// Appending Content Accordion 1
					$('.' + htSettings.accordion.contAccordion + 1).clone().appendTo('#' + htSettings.handlers.prodAnswer);

					// Appending Content Accordion 2
					$('.' + htSettings.accordion.contAccordion + 2).clone().appendTo('#' + htSettings.handlers.logHist);

					// Appending Content Accordion 3
					$('.' + htSettings.accordion.contAccordion + 3).clone().appendTo('#' + htSettings.handlers.merchSal);

					// Appending Content Accordion 4
					$('.' + htSettings.accordion.contAccordion + 4).clone().appendTo('#' + htSettings.handlers.leadComm);

					// Appending Content Accordion 5
					$('.' + htSettings.accordion.contAccordion + 5).clone().appendTo('#' + htSettings.handlers.leadPl);

					// Appending Content Accordion 6
					$('.' + htSettings.accordion.contAccordion + 6).clone().appendTo('#' + htSettings.handlers.callRecor);

					// Cleaning the main Doc
					$('.' + htSettings.cleanDoc).remove();

					// Adding Dynamical Class on Accor-link Element
					$('.accor-link').each(function() { $(this).addClass('accor_' + htSettings.value.linkVal);
						htSettings.value.linkVal++;
					});

					// Simple Drag Elements
					//$('.ErrorIn').draggable();

					// Drag & Drop Sortable
					// $('.' + htSettings.template.mTemp).sortable({
					// $(htSettings.formTag).sortable({

					// 	// Start Dragging
				 //        start: function(event, ui) {
				 //            let start_pos = ui.item.index();
				 //            ui.item.data('start_pos', start_pos);
				 //        },

				 //        // Updating Dragging
				 //        update: function(event, ui) {

					// 		let index = ui.item.index();
				 //            let start_pos = ui.item.data('start_pos');
				 //        }
				 //    });

					// Removing Attributes From hr's
				    $('hr').removeAttr('class');

				    // Removing Elements After The Form
				    $(htSettings.formTag).nextAll('.Etr, hr').remove();

				    // Adding Extra Templates in Square2(Board 2)
				    let validGreen = $(htSettings.spanTag, { class: 'validatefield phoneValidationGreen' }).html('[ Valid ]');
				    $('.increase-mob .label, .MobField .label').after(validGreen);

				    // Adding Calendar Icon 
				    let calenIcon = $(htSettings.spanTag, { class: 'btn-conv-active back-calendar fad' });
				    $('.AvailableFrom, .DateOfBirth, .PartnerDateOfBirth').after(calenIcon);

				    // Add a '0' when a number is less then 10 Function
				    let NullHeader = function(e) { const NulNumber = e < 10 ? e = '0' + e : e = '' + e; return e; }

				    // Checking Drop Downs Odd Elements
				    $('.k-Item:odd').css({ background: '#f9f9f9' });


				    $.fn.ToggleAccor = function() {

					    // Global Click Events
					    return this.on(ck, '*', function(event) {

					    	// Check for an Id
					    	let id = $(this).attr('id');

					    	// Check for a Class Name
					    	let ClassN = $(this)[0].className; 

					    	// Acordion Toggle
					    	if(ClassN.indexOf(htSettings.accordion.accordTogg) != -1) {

					    		// Expand or collapse this panel
					    		$(this).next().slideToggle(200);

					    		// Hide other panels
					    		$('.'+ htSettings.accordion.accordCont).not( $(this).next() ).slideUp(200);
					    	} 

					    	// Displaying Data to the Rejection Value
					    	else if(ClassN.indexOf('reeDrop') != -1) {

						    	$('#RejectionRe').val($(this).html());
						    	$('.k-Item').removeClass('inputSelect');
						    	$(this).addClass('inputSelect');
						    	$('.RejectionDrop').slideUp(htSettings.value.speedDrop);

						    	$(htSettings.htmlTag).removeClass('clDropRe');
					    	}

					    	// Displaying Data to the Transfer to Merchant
					    	else if(ClassN.indexOf('traDrop') != -1) {

					    		$('#TransferMer').val($(this).html())
					    		$('.k-Item').removeClass('inputSelect');
						    	$(this).addClass('inputSelect');
					    		$('.transferDrop').slideUp(htSettings.value.speedDrop)
					    		$(htSettings.htmlTag).removeClass('clDropTra');
					    	}

					    	// Rejection DropDown
					    	else if(id == 'RejectionRe') { 
					    		event.stopPropagation();
					    		$('.RejectionDrop').slideToggle(htSettings.value.speedDrop)
					    		$('.transferDrop').slideUp(htSettings.value.speedDrop)

					    		$(htSettings.htmlTag).toggleClass('clDropRe').removeClass('clDropTra');
					    	}

					    	// Transfer To Merchant DropDown
					    	else if(id == 'TransferMer') { 
					    		event.stopPropagation();
					    		$('.transferDrop').slideToggle(htSettings.value.speedDrop) 
								$('.RejectionDrop').slideUp(htSettings.value.speedDrop)

								$(htSettings.htmlTag).toggleClass('clDropTra').removeClass('clDropRe');
					    	}

					    	else if(ClassN.indexOf('clDropRe') != -1) {

					    		$(htSettings.htmlTag).removeClass('clDropRe');
					    		$('.RejectionDrop').slideUp(htSettings.value.speedDrop)
					    	}

					    	else if(ClassN.indexOf('clDropTra') != -1) {

								$(htSettings.htmlTag).removeClass('clDropTra');
								$('.transferDrop').slideUp(htSettings.value.speedDrop)
					    	}

					    });

					}
					d.ToggleAccor();

				} else {

					$('.DocClean, .rightAditional').detach();

					$('.leadScreenView').html(htSettings.falseTemp)
				}

			}

		});


		let startLeadOk = new startLead();

	}
	d.StructureHt('accordion');

});