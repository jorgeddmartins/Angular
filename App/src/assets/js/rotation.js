
// Document Element
let d = $(document);

// Click Event
let ck = 'click';


$(function() {

	"use strict";

	// Main Function
	$.fn.rotationFunc = function(rotOpt) {

		let defaultRot = {

			// All Values
			value: {

				// Speed Value For Accordion
				slideSpeed: 250,

				// Speed Value For Table Body Tabs
				slideExtra: 150
			},

			// Accordion Propreties
			accordion: {

				// Accordion Handler
				accordTogg: 'accordion-toggle',

				// Accordion Drop Down
				accordCont: 'accordion-content'
			},

			// Main Accordion Link
			accorCl: 'accor-link',

			// Data Injection
			data: {

				// Data Json Injection
				url: 'assets/js/rotation.json'
			},

			// Html Tags
			tags: {

				// Div Tag
				divTag: '<div>',

				//Span Tag
				spanTag: '<span>',

				// Icon Tag
				icotag: '<i>',

				// A Tag
				aTag: '<a>',

				// Input Tag
				inpTag: '<input>'
			},

			// Static Icon
			staticI: $('<span>', { class: 'static-ico-sm' }),

			// Log History Icon
			iLhist: $('<i>', { class: 'icon icon-shield iconCol' }),

			// Product Icon
			iPdut: $('<i>', { class: 'icon icon-database' }),

			// Product Title
			prodT: 'ProdTitle h4',

			// Days Selected Class
			daySel: 'PTbSele',

			// Products Element To Clone
			proCl: '.backDeleveFocus i, .backDeleveFocus a'

		};

		// Delivery Rotation Settings
		let rotSettings = $.extend( true, {}, defaultRot, rotOpt);

		// Log History Search Top Bar Injection
		let searchTemp = $(rotSettings.tags.spanTag, { class: 'Search_Fl', id: 'search_Fl' })
			.append($(rotSettings.tags.inpTag, { type: 'text', class: 'form-control auto-search', placeholder: 'Search for Logs...' })).appendTo('#LogHistory');

		// Ajax Call For Rotation Data
		$.ajax({

			type: 'GET',
			url: rotSettings.data.url,
			datatype: 'json',

			success: function(rdata) { d.RotDataInj(rdata) }
		});

		// Data Injection
		$.fn.RotDataInj = function(rdata) {

			// Product Data Injection
			let DataProd = '';
			for( let p in rdata.rotProd ) {

				// Product Data Template
				DataProd += '<li class="DeliverLi ' + rdata.rotProd[p].select + '">' + // Addidng Product Class

								// Adding Product Icon
								'<i class="' + rdata.rotProd[p].icon + '"></i>' +

								// Adding Product Name
								'<a>' + rdata.rotProd[p].name + '</a>' +
							'</li>';
			}

			// Runs Product Data
			$(DataProd).appendTo('.deliveryIn');

			// Log History Data Injection
			let DataLog = '';
			for( let l in rdata.rotLog ) {

				// Log History Data Template 
				DataLog += '<div class="form-article full-width margin-r-null">' +

								// Adding Date
								'<span class="label">' + rdata.rotLog[l].date + '</span>' +

								// Adding Log Value
								'<p class="objType">' + rdata.rotLog[l].value + '</p>' +
						   '</div>';
			}

			// Runs Log History Data
			$('#search_Fl').after(DataLog);

			// Clone Product Name From Accor
			$(rotSettings.proCl).clone().appendTo('.' + rotSettings.prodT);

			// Replacing <a> For The Product Name
			$('.' + rotSettings.prodT).html(function() { return $(this).html().replace(rotSettings.tags.aTag, '') });
		}

		// Appending Icon To Log History
		$(rotSettings.iLhist).appendTo('.accor_' + 0)

		// Appending Icon To Product
		$(rotSettings.iPdut).appendTo('.accor_' + 1)

		// Appending The Static Icon To The Accordion
		$(rotSettings.staticI).appendTo('.' + rotSettings.accordion.accordTogg)

		// Global Click Event Function
		$.fn.rotGlobalEvent = function() {

			return this.on(ck, '*', function() {

				// Check For a Class Name
				let ClassN = $(this)[0].className;

				// Accordion Toggle
				if(ClassN.indexOf(rotSettings.accordion.accordTogg) != -1) {

					// Expand or collapse this panel
		    		$(this).next().slideToggle(rotSettings.value.slideSpeed);

		    		// Hide other panels
		    		$('.'+ rotSettings.accordion.accordCont).not($(this).next()).slideUp(rotSettings.value.slideSpeed);
		    	} 

		    	// Adding & Removing Green Border
		    	if(ClassN.indexOf(rotSettings.accorCl) != -1) {

		    		// Removes Green Border From All Elements
		    		$('.' + rotSettings.accorCl).removeClass('borderGreen');

		    		// Adds Green Border For the Actual Element
		    		$(this).addClass('borderGreen');

		    		// Remove Icon COlor Class From all Icon Elements
		    		$('.accor-link .icon').removeClass('iconCol')

		    		// Add Icon Color In The Actual Element
		    		$('.icon', this).addClass('iconCol')
		    	}

		    	// Addidng Product Li Select Class
		    	else if(ClassN.indexOf('DeliverLi') != -1) {

		    		// All Product Li Elements remove Class
		    		$('.DeliverLi').removeClass('backDeleveFocus');

		    		// Actual Product Li Element Add Class
		    		$(this).addClass('backDeleveFocus')
		    	}

		    	// Change Select Class Tabs Logic
		    	if(ClassN.indexOf('PTb') != -1) {

		    		// All Tab Elements Remove Select Class
		    		$('.PTb').removeClass(rotSettings.daySel)

		    		// Actual Element Add Select Class
		    		$(this).addClass(rotSettings.daySel)
		    	}

		    	// Table Body Toggle
		    	if(ClassN.indexOf('bodyTab') != -1) {

		    		// Expand The Extra Table Body
		    		$(this).next().slideToggle(rotSettings.value.slideExtra)

		    		// Icon Toggle Class 
		    		$('.dropTh', this).toggleClass('dropTh45')
		    	}

			});
		}

		// Runs Global Click Event
		d.rotGlobalEvent();

		// Each Product Injection Event
		$.fn.DeliverLi =function() {
			return this.on(ck, '.DeliverLi', function() {

				// Copy This Html
				$('.' + rotSettings.prodT).html($(this).html());

				// Replacing <a> For The Product Name
				$('.' + rotSettings.prodT).html(function() { return $(this).html().replace(rotSettings.tags.aTag, '') });

			});
		}

		// Runs Each Product Injection Event
		d.DeliverLi();

		// Days to Display According The WeekDay( For Tabs )
	    let days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

	    // Looks For a newDate
		let day = new Date();

		// Looks For WeekDays
		let x = day.getDay();

		// Injecting Sunday WeekDay Class
		const sun = days[x] == 'SUN' ? $('.sun').addClass(rotSettings.daySel) : '';

		// Injecting Monday WeekDay Class
		const mon = days[x] == 'MON' ? $('.mon').addClass(rotSettings.daySel) : '';

		// Injecting Tuesday WeekDay Class
		const tue = days[x] == 'TUE' ? $('.tue').addClass(rotSettings.daySel) : '';

		// Injecting Wednesday WeekDay Class
		const wed = days[x] == 'WED' ? $('.wed').addClass(rotSettings.daySel) : '';

		// Injecting Thursday WeekDay Class
		const thu = days[x] == 'THU' ? $('.thu').addClass(rotSettings.daySel) : '';

		// Injecting Friday WeekDay Class
		const fri = days[x] == 'FRI' ? $('.fri').addClass(rotSettings.daySel) : '';

		// Injecting Saturday WeekDay Class
		const sat = days[x] == 'SAT' ? $('.sat').addClass(rotSettings.daySel) : '';

	
		// Simple Element Drag
		//$('.rightAditional').draggable();

		// Jquery Scroll Bars(Right Bar)
		$('#deliveryFloor, #LogHistory').mCustomScrollbar({ theme: "minimal", scrollInertia: 50 }); 

	}

	// Runs The Main Rotation function
	d.rotationFunc();

});