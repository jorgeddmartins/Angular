
// Document Element
let d = $(document);


$(function() {

	"use strict";


	$.fn.taskZoom = function(zoomOpt) {

		let zoomdatails = $.extend({

			// Modal Zoom
			zoommodal: 'taskZoomModal',

			// Modal zoom ToolTips
			toolzoom: 'expandToolTip',

			// Task Zoom Over Classes
			overClass: '.expandIcon, .compressIcon'

		}, zoomOpt);

		// Task Zoom Settings
		let zoomsettings = $.extend( true, {}, zoomdatails, zoomOpt);


		// Expandes Task Section( Zoom In )
		$.fn.expand = function() {
			return this.on('click', '.expandIcon', function() {
				$('.expandIcon').addClass('fa-compress compressIcon').removeClass('fa-expand expandIcon');
				$('.' + zoomsettings.zoommodal).fadeIn(100);
				$('.' + zoomsettings.toolzoom).html('Zoom Out');
				$('.tabAll').addClass('selectedHtb');

				$('.taskSection').hide();
				$('.taskZoom .taskSection').show();
			});
		};
		d.expand();

		// Compress Task Section( Zoom Out ) 
		$.fn.compress = function() {
			return this.on('click', '.compressIcon', function() {
				$('.compressIcon').addClass('fa-expand expandIcon').removeClass('fa-compress compressIcon');
				$('.' + zoomsettings.zoommodal).fadeOut(100);
				$('.' + zoomsettings.toolzoom).html('Zoom In');
				$('.tabAll').addClass('selectedHtb');

				$('.taskSection').show();
			});
		};
		d.compress();

		// Tool Tip MouseOver
		$.fn.zoomOver = function() {
			return this.on('mouseover', zoomsettings.overClass, function() {

				$('.' + zoomsettings.toolzoom).show();
			});
		}
		d.zoomOver();

		// Tool Tip MouseLeave
		$.fn.zoomLeave = function() {
			return this.on('mouseleave', zoomsettings.overClass, function() {

				$('.' + zoomsettings.toolzoom).hide();
			});
		}
		d.zoomLeave();
	}

	d.taskZoom();

});