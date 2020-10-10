
// Document Element
let d = $(document);

// Click Event
let ck = 'click';


$(function() {

	"use strict";

	$.fn.SettingsFlash = function(opSettings) {

		// Plugin Name
		let pluginName = 'FlashInfo';

		// All Propreties
		let getOptions = $.extend({

			// Flash Actions
			actionTr: 'to-transfer',
			actionCp: 'linkurl',
			mainfCl: '.flashblk',
			mainTCl: '.flashText',

			// Gettings Classes
			getTopClass: {

				// Class For Transfered
				topCT: 'transferback',

				// Class For Copied
				topCC: 'copiedback'
			},

			// HTML Tags
			tags: {

				// Span Tag
				spanTag: '<span>',

				// Div Tag
				divTag: '<div>',

				// Body Element
				bodyTag: 'body'
			},

			// Titles For Flashes
			getTitle: {

				// Text For Transfered Flash
				titleTransfer: 'Transfered!',

				// Text For Copied Flash
				titleCopied: 'Copied!'
			},

			// Speed delay value
			speedDlay: 200,

			// Fade speed Value
			fadeSpeed: 100

		}, opSettings);

		// Get Flash Settings
		let settings = $.extend( {}, getOptions, opSettings );

		function flashInfo(opSettings) {

			this._name = pluginName;

			this._defaults = getOptions;

			// Runs The Main Prototype
			this.protoInfo();

			// Runs Global MouseOver Function
			d.oppsOv();

			// Runs Flash Function
			d.oppsCk('.transferback', '.copiedback');
		}

		$.extend( flashInfo.prototype, {

			protoInfo: function() {

				// Flash popUp Injection
				let flashblkTemp = $(settings.tags.divTag, { class: 'flashblk' }).appendTo(settings.tags.bodyTag).append($(settings.tags.spanTag, { class: 'flashText' }));

				// Glovbal MouseOver Event Function
				$.fn.oppsOv = function() {
					return this.on('mouseover', '*', function() {

						// Check For a Class
						let cl = $(this)[0].className;

						// Action To Transfer Flash
						if(cl.indexOf(settings.actionTr) != -1) {

							// Flash Back Modal Removes Copy Flash Class & Adds Transfer Flash Class
							$(settings.mainfCl).removeClass(settings.getTopClass.topCC).addClass(settings.getTopClass.topCT);

							// Flash Back Modal Adds Title For Transfer Flash
							$(settings.mainTCl).html(settings.getTitle.titleTransfer);
						} 

						// Action To Copy Flash
						else if(cl.indexOf(settings.actionCp) != -1) {

							// Flash Back Modal Removes Transfer Flash Class & Adds Copy Flash Class
							$(settings.mainfCl).removeClass(settings.getTopClass.topCT).addClass(settings.getTopClass.topCC);

							// Flash Back Modal Adds Title For Copy Flash
							$(settings.mainTCl).html(settings.getTitle.titleCopied);

							// Copy The Url to ClipBoard
							copyToClipboard('#url_source');
						}

					});
				}
				
				// Flashed Function( Global Click Event Function )
				$.fn.oppsCk = function(trAnf, cOp) {
					return this.on(ck, '*', function() {

						// Check For a Class
						let cl = $(this)[0].className;

						// Flash To Transfer
						//const toTransfer = hClass.indexOf(settings.actionTr) != -1 ? $(trAnf).fadeIn(settings.fadeSpeed).delay(settings.speedDlay).fadeOut(settings.fadeSpeed) : '';

						// Flash To Copy Block Content
						const linkurl = cl.indexOf(settings.actionCp) != -1 ? $(cOp).fadeIn(settings.fadeSpeed).delay(settings.speedDlay).fadeOut(settings.fadeSpeed) : '';

						// Copy The Url & Open The Landing Page in other Browser Tab
						const urlCOpen = cl.indexOf('urlSCopyOpen') != -1 ? $(this).attr({ href: $('#url_source').html() }) : '';

					});
				}

				// Copy to ClipBoard
				function copyToClipboard(element) {

		            let $temp = $("<input>");

		            $("body").append($temp);

		            $temp.val($(element).text()).select();

		            document.execCommand("copy");
		            
		            $temp.remove();
		        }

			}

		});


		let flIf = new flashInfo();

	}

	// Runs Propreties Function(Runs Main Function)
	d.SettingsFlash();

});