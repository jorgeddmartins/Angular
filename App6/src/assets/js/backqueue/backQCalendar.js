
// Document Element
let d = $(document);

// Click Event
let ck = 'click';


$(function() {

	"use strict";

	$.fn.CalSett = function(options) {

		// Plugin Name
		let pluginName = 'BackQueueP';

		let defaults = $.extend({

			// Calendar Template
			calenTemp: '<div class="calPlt"><div class="calen_Fl"></div></div>',

			// SearchPicker Input
			serPi: 'SearchPicker',

			// Calendar Track
			clTp: 'calPlt',

			// Calendar Itself
			clDw: 'calen_Fl',

			// Values
			value: {

				// Each Function Value
				sVal: 0
			},

			// Width To The Big Calendar
			BigWidth: true,

			// Width To The Small Calendar
			SmallWidth: true

		}, options );

		let settings = $.extend( true, {}, defaults, options );

		function BackQCalendar(options) {

			// Defaults Propreties
			this._defaults = defaults;

			// Name of The Plugin
			this._name = pluginName;

			// Loads Global Prototype
			this.global();

			// Runs SearchPicker Each Function
			$('.' + settings.serPi).EachSearch();

			// Loads Global Event Prototype
			this.gEvent();

			// Runs Global Click Event
			d.ClcGl(150);

			// Runs Id Drop Down Click Event
			d.DropCl();
		}

		$.extend( BackQCalendar.prototype, {

			// Global Prototype Function
			global: function() {

				$(settings.calenTemp).appendTo('.SearchBar_Top');

				$.fn.EachSearch = function() {

					return this.each(function() { $(this).attr({ id: 'Sp_' + settings.value.sVal}); settings.value.sVal++; });
				}
			},

			// Global Event Prototype Function
			gEvent: function() {

				$.fn.ClcGl = function(speed) {
					return this.on(ck, '*', function() {

						let id = $(this).attr('id');

						let gclass = $(this)[0].className;

						if(id == 'datePickerFromPack') {

							$('.' + settings.clTp).show();
							$('.' + settings.clDw ).animate({ left: 0, width: '' + defaults.BigWidth + 'px'}, speed);
						}

						else if(id == 'datePickerToPack') {

							$('.' + settings.clTp).show();
							$('.' + settings.clDw ).animate({ left: '264px', width: '' + defaults.SmallWidth + 'px'}, speed);
						}

					});
				}

				$.fn.DropCl = function() { return this.on(ck, '#SearchDrop_Id', function() { $('.calPlt').hide(); }); }
			}

		});

		// Runs Main Function
		let InGlobal = new BackQCalendar();

	}

	d.CalSett();

});


