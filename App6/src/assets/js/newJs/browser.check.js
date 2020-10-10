
// Document Element
let db = $(document);

$(function() {

	"use strict";

	$.fn.BrowserCh = function(browserOpt) {

		// Plugin Name
		let pluginName = 'BrowserCheckUp';

		// Checking For Navigators( Desktop / Mobile )
		let ua = navigator.userAgent;

		// Browser Default Propreties
		let browDefault = $.extend({

			// Window Load
			window: $(window),

			// Check for Browsers
			browser: {

				// Chrome Browser
				chromeB: 'Chrome',

				// Firefox Browser
				firefoxB: 'Firefox',

				// Safari Browser
				safariB: 'Safari',

				// Opera Browser
				operaB: 'Opera',

				// I.E. Browser
				ieB: 'MSIE'
			},

			// Check For Devices
			mobile: {

				// Check For an Iphone Device  
				iphone: ua.match(/Phone/),

				// Check For an Ipad Device
		      	ipad: ua.match(/iPad/),

		      	// Check For an Ipod Device
		      	ipod: ua.match(/iPod/),

		      	// Check For a BlackBerry Device
		      	blackberry: ua.match(/BlackBerry/),

		      	// Check For an Andriod Device
		      	android: ua.match(/Android/),

		      	// Check For an I.E. Device 
		      	windows: ua.match(/IEMobile/)
		    },

		    // Adding Tags
		    tags: {

		    	// Html Tag
		    	htmlTag: 'html',

		    	// Body Tag
		    	bodyTag: 'body'
		    }

		}, browserOpt);

		// BrowserCheck Settings
		let settingsBrow = $.extend( true, {}, browDefault, browserOpt);

		function BrowserCheck(browserOpt) {

			// Plugin Name
			this.name = pluginName;

			// Loads GlobalBrowser Prototype.
			this.GlobalBrowser();

			// Runs Both Functions On Load Window( Browser & Device Functions )
			settingsBrow.window.browserLoad();
		}

		$.extend( BrowserCheck.prototype, {

			GlobalBrowser: function() {

				// Loading Browser Propreties
				$.fn.browserLoad = function() {
					return this.on('load', function() { 

						// Checks What Browser's Running( Mobile & Desktop )
						browserCheck();

						// Checks What Device's Running( Iphone / Andriod / Ipad / Desktop )
						mobileCheck();
					});
				}

				// Browser Check Function
				function browserCheck() { 

					// Checks For Opera Browser
				    if((navigator.userAgent.indexOf(settingsBrow.browser.operaB) || navigator.userAgent.indexOf('OPR')) != -1 ) {

				    	// Add Opera Browser Class
				        $(settingsBrow.tags.htmlTag).addClass('Opera');

				        // Opera Console Info
				        console.log('You are running Opera Browser');
				    } 

				    // Checks For Chrome Browser
				    else if(navigator.userAgent.indexOf(settingsBrow.browser.chromeB) != -1 ) {

				    	// Add Chrome Browser Class
				    	$(settingsBrow.tags.htmlTag).addClass('Chrome');

				    	// Chrome Console Info
				        console.log('You are running Chrome Browser');
				    } 

				    // Checks For Safari Browser
				    else if(navigator.userAgent.indexOf(settingsBrow.browser.safariB) != -1) {

				    	// Add Safari Browser Class
				        $(settingsBrow.tags.htmlTag).addClass('Safari');

				        // Safari console Info
				        console.log('You are running Safari Browser');
				    } 

				    // Checks For FireFox Browser
				    else if(navigator.userAgent.indexOf(settingsBrow.browser.firefoxB) != -1 ) {

				    	// Add FireFox Browser Class
				        $(settingsBrow.tags.htmlTag).addClass('FireFox');

				        // FireFox console Info
				        console.log('You are running Firefox Browser');
				    } 

				    // Checks For I.E. Browser
				    else if((navigator.userAgent.indexOf(settingsBrow.browser.ieB) != -1 ) || (!!document.documentMode == true )) {

				    	// Add I.E. Browser Class
				      	$(settingsBrow.tags.htmlTag).addClass('Ie');

				      	// I.E. Console Info
				      	console.log('You are running I.E. Browser');
				    }  

				    // Checks For Unknown Browsers
				    else { alert('Unknown Browser') }
				}

				// Device Check Function
				function mobileCheck() {
					
					// Check For Android Device
				    if (settingsBrow.mobile.android) {

				    	// Console Android Device Info
				    	console.log('This is an Android Phone');

				    	// Add Android Class
				    	$(settingsBrow.tags.bodyTag).addClass('AndroidApp mobileApp');
				    }

				    // Check For Iphone Device
				    else if (settingsBrow.mobile.iphone) {

				    	// Console Iphone Device Info
				    	console.log('This is an Iphone');

				    	// Add Iphone Class
				    	$(settingsBrow.tags.bodyTag).addClass('IphoneApp mobileApp');
				    }

				    // Che ck For Ipad Device
				    else if (settingsBrow.mobile.ipad) {

				    	// Console Ipad Device Info
				    	console.log('This is an Ipad');

				    	// Add Ipad Class
				    	$(settingsBrow.tags.bodyTag).addClass('IpadApp');
				    }

				    // Check For Ipod Device
				    else if (settingsBrow.mobile.ipod) {

				    	// Console Ipod Device Info
				    	console.log('This is an Ipod');
				    }

				    // Check For BlackBerry Device
				    else if (settingsBrow.mobile.blackberry) {

				    	// Console BlackBerry Device Info
				    	console.log('This is a BlackBerry Phone');

				    	// Add BlackBerry Class
				    	$(settingsBrow.tags.bodyTag).addClass('BlackBerryApp mobileApp');
				    }

				    // Check For Windows Device ??
				    else if (settingsBrow.mobile.windows) {

				    	// Console 
				    	console.log('Windows');
				    }
				    else {

				       	console.log('You are running a DESKTOP Device');

				       	// Adds Desktop Class
				       	$(settingsBrow.tags.bodyTag).addClass('DesktopApp');
				    }
				}

				// Responsive Elements
				let getBrowserWidth = function() {

					// Extra Small Device / SmartPhones Portrait
					if(window.innerWidth < 768) {

						// Code For Extra Small Devices Goes Here
						
					// Small Device / SmartPhones LandScape & Ipad Portrait
					} else if(window.innerWidth < 991) {

						// Code For Small Devices Goes Here

					// Medium Device / Ipad LandScape
					} else if(window.innerWidth < 1199) {

						// Code For Medium Devices Goes Here

					} else {
						
						// Code For Large Devices / DeskTop, Goes Here
					}
				};

				settingsBrow.window.on('resize', function() { getBrowserWidth() });

				// Check If Touch Devices
				window.onload = function() {
		      
					function isTouchDevice() {

						return true == ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch);
					}
					if (isTouchDevice() === true) {
						
						// Logic for touch device here
						console.log('Touch Device');

					} else {
						
						// Logic for non touch device here
						console.log('Not a Touch Device');
					}
				}
			}
		});

		// Runs Main Function
		let TBrowserCheck = new BrowserCheck();
	}

	db.BrowserCh();

});