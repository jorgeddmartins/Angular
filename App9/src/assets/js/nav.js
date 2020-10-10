
$(function() {

	"use strict";

	$.fn.navSett = function(navOptions) {

		let settings = $.extend({

			leadrepItem: $('id'),

			qualrepItem: $('id'),

			finrepItem: $('id')

		}, navOptions);

		function runNav() { this.SubNav(); }

		$.extend( runNav.prototype, {

			SubNav: function() {

				$('.new-left-nav-item .new-right-ico-floor').before($('<i>', { class: 'fa fa-chevron-down' }));
				$('.leftNavAccordion li.li-Leads .fa-chevron-down').remove();

				// Lead Reporting Appending
				settings.leadrepItem.appendTo('#id-15');

				// Quality Reporting Appending
				settings.qualrepItem.appendTo('#id-20');

				// Financial Reporting Appending
				settings.finrepItem.appendTo('#id-24');
			}
		});

		let runNavN = new runNav();
	}

	$(document).navSett();

});