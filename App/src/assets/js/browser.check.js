
// Document Element
let d = $(document);

$(function() {

	"use strict";


	$.fn.LoadWdefault = function(browserOpt) {

		// Plugin's Name
		let PluginName = 'CheckBrowser';

		// Checking For Navigators( Desktop / Mobile )
		let ua = navigator.userAgent;

		// Browser Default Propreties
		let browDefault = {

			// Window Load
			window: $(window),

			// Checking For Browsers
			browser: {
				
				// Chrome Browser
				chromeB: 'Chrome',
				
				// FireFox Browser
				firefoxB: 'Firefox',
				
				// Safari Browser
				safariB: 'Safari',
				
				// Opera Chrome 
				operaB: 'Opera',
				
				// I.E. Browser
				ieB: 'MSIE'
			},
			
			// Checking For Browser Classes
			browserCl: {
				
				// opera Browser Class
				opera: 'Opera',
				
				// Chrome Browser Class
				chrome: 'Chrome',
				
				// Safari Browser Class
				safari: 'Safari',
				
				// FierFox Browser class
				firefox: 'FireFox',
				
				// I.E. Browser Class
				ie: 'Ie'
			},
			
			// Checking For Devices 
			device: {
				
				// Check For an Iphone Device
				iphone: ua.match(/Phone/),
				
				// Check For an Ipad Device
		      	ipad: ua.match(/iPad/),
				
				// Check For an Ipod Device 
		      	ipod: ua.match(/iPod/),
				
				// Check For a BlackBerry Device
		      	blackberry: ua.match(/BlackBerry|BB|PlayBook/),
				
				// Check For an Android Device
		      	android: ua.match(/Android/),
				
				// Check For a Windows Device
				windows: ua.match(/iemobile/),
				
				// Check For a Desktop Device
				desktop: window.innerWidth > 900
		    },

		    // Adding Tags
		    tags: {

		    	// Html Tag
		    	htmlTag: 'html',

		    	// Bodu Tag
		    	bodyTag: 'body'
		    }
		};

		// BrowserCheck Settings
		let settingsBrow = $.extend( true, {}, browDefault, browserOpt );

		// Runs the App
		function RunBrow() { 

			// Runs Check Function
			this.RunCheck(); 

			// Runs Plugin Name
			this.name = PluginName;
		}

		// Runs Plugin Prototype
		$.extend( RunBrow.prototype, {

			RunCheck: function() {

				// Loads Browser Check
				settingsBrow.window.ready(function() { 

					// Runs Browser Check Function
					browserCheck(); 

					// Runs Device Check Function
					mobileCheck(); 
				});

				// Browser Check Function
				function browserCheck() { 
					
					// Check For Opera Browser
				    if((navigator.userAgent.indexOf(settingsBrow.browser.operaB) 

				    	|| navigator.userAgent.indexOf('OPR')) != -1 ) { $(settingsBrow.tags.htmlTag).addClass(settingsBrow.browserCl.opera); } 
					
					// Check For Chrome Browser
					else if(navigator.userAgent.indexOf(settingsBrow.browser.chromeB) != -1 ) { $(settingsBrow.tags.htmlTag).addClass(settingsBrow.browserCl.chrome); } 
					
					// Check For Safari Browser
					else if(navigator.userAgent.indexOf(settingsBrow.browser.safariB) != -1) { $(settingsBrow.tags.htmlTag).addClass(settingsBrow.browserCl.safari); } 
					
					// Check For FireFox Browser
					else if(navigator.userAgent.indexOf(settingsBrow.browser.firefoxB) != -1 ) { $(settingsBrow.tags.htmlTag).addClass(settingsBrow.browserCl.firefox); } 
					
					// Check For I.E. Browser
					else if((navigator.userAgent.indexOf(settingsBrow.browser.ieB) != -1 ) 

						|| (!!document.documentMode == true )) { $(settingsBrow.tags.htmlTag).addClass(settingsBrow.browserCl.ie);
				    
				    // Check For Unknown Browsers
				    }  else { alert('You are running an Unknown Browser'); }
				}

				// Device Check Function
				function mobileCheck() {
					
					// Check For Android Device
				    if (settingsBrow.device.android) { $(settingsBrow.tags.htmlTag).addClass('Android'); } 
					
					// Check For Iphone Device
					else if (settingsBrow.device.iphone) { $(settingsBrow.tags.htmlTag).addClass('Iphone'); } 
					
					// Check For Ipad Device
					else if (settingsBrow.device.ipad) { $(settingsBrow.tags.htmlTag).addClass('Ipad'); } 
					
					// Check For Ipod Device
					else if (settingsBrow.device.ipod) { $(settingsBrow.tags.htmlTag).addClass('Ipod'); } 
					
					// Check For BlackBerry Device
					else if (settingsBrow.device.blackberry) { $(settingsBrow.tags.htmlTag).addClass('BlackBerry'); } 
					
					// Check For DeskTop Device
					else { $(settingsBrow.tags.htmlTag).addClass('Desktop'); }
				}

				// let isMobile = window.orientation > -1;
				// alert(isMobile ? 'Mobile' : 'Not mobile');

				let getBrowserWidth = function() {

					if(window.innerWidth < 768) {

						// Extra Small Device / SmartPhones Portrait
						// $('.square').css({ background: 'red'});
						// $('.square span, .square p').css({ color: '#fff'});
						
					} else if(window.innerWidth < 991) {

						// Small Device / SmartPhones LandScape & Ipad Portrait
						// $('.square').css({ background: 'yellow'});
						// $('.square span, .square p').css({ color: '#000'});

					} else if(window.innerWidth < 1199) {

						// Medium Device / Ipad LandScape
						// $('.square').css({ background: 'green'});
						// $('.square span, .square p').css({ color: '#fff'});

					} else {

						// Large Device / DeskTop
						// $('.square').css({ background: '#0080ff'});
						// $('.square span, .square p').css({ color: '#fff'});
					}
				};
				getBrowserWidth();
				
				$(window).on('resize',function() { getBrowserWidth(); });

				// Check If Touch Devices
				window.onload = function() {
		      
					function isTouchDevice() {

						return true == ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch);
					}

					if (isTouchDevice() === true) { console.log('Touch Device')

					} else { console.log('Not a Touch Device') }
				}

				// Checks Window Resolution
				let WinResol = function() {

					let h = $(window).height();
					let	w = $(window).width();
					$('html').addClass('h_' + h);
					$('html').addClass('w_' + w);
				};

				$(document).ready(WinResol); 

				$(window).resize(WinResol);
			}

		});

		let RunBrowN =  new RunBrow();
	
	}

	d.LoadWdefault();

});