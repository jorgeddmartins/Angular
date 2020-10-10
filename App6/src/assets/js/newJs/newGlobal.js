
// Document Element
let d = $(document);

// Click Event
let ck = 'click';

$(function() {

	"use strict";

	$.fn.smarterGlobal = function(options) {

		let pluginName = 'smarterGlobal';

		let scdefaults = $.extend({

			// Window Load
			window: $(window),

			// Global Document
			alD: $('*'),

			// Body Document
			bo: $('body'),

			// Data Templates
			data: {

				// Json Data Injection
				url: 'assets/js/newJs/global.json',

				// Fake Data Injection
				fImg: 'assets/img/fake.png'
			},

			// Fake Temnplate
			fTemp: $('<div/>', { class: 'fake_Box' }),

			// Image Template
			imTemp: $('<img/>'),

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
			showL: 'Show Less -'

		}, options);

		// Runs Defaults Settings
		let settings = $.extend( true, {}, scdefaults, options );

		function runGlobal(options) {

			// Plugin Name
			this._name = pluginName;

			// Defaults
			this._default = scdefaults;

			// Runs Main Prototypw Function
			this.sData();
		}

		$.extend( runGlobal.prototype, {

			// Data Prototype Function
			sData: function() {

				// Fake Header Elements Appends before This Element
				$('.topHeaderRight_Floor').before(settings.fTemp);

				// Fake Image To Append
				$(settings.imTemp).appendTo('.fake_Box');

				// Adds Attribute To The Fake Image
				$('.fake_Box img').attr({ src: setitngs.data.fImg });

				// Show More Text Injection On Top Tasks
				let btnShowM = $(gSettings.tags.spanTag, { class: 'toShow openShow' }).html(gSettings.shoM).appendTo('.topTasks .topNav');

				// Show More Text Injection On Calls Tasks
				let btnShowMD = $(gSettings.tags.spanTag, { class: 'bottomShow goTTop' }).html(gSettings.shoM).appendTo('.bottomTasks .topNav');

				// Ajax Call
				$.ajax({

					type: 'GET',
					url: settings.data.url,

					success: function(data) { }
				});
			}

		});

		let rgl = new runGlobal();
	}

	d.smarterGlobal();

});