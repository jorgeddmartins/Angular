
// Document Element
let dc = $(document);

// $(function() {

// 	$.fn.allKendo = function(options) {
		
// 		let pluginName = "KendoOpt";
		
// 		let dafaultRt = $.extend({}, options);
		
// 		let settings = $.extend( true, {}, dafaultRt, options );

// 		function kGrid() {
			
// 			this._name = pluginName;
			
// 			// Runs the Grid Logic Prototype Function
// 			this.gridLogic(); 
// 		}

// 		$.extend( kGrid.prototype, {
			
// 			gridLogic: function() {
// 				// Runs Search Bar Prototype Function
// 				this.searchRouting();
				
// 				// Runs All Mouse Events Prototype Function
// 				this.mouseEvents();
// 			},
			
// 			// Search Bar Routing
// 			searchRouting: function() {
				
// 				// Title For Capture Total 
// 				if(dafaultRt.routing.WinLocation === '/Reports/CaptureTotals' 
// 					|| dafaultRt.routing.WinLocation === '/reports/capturetotals') {
						
// 					dafaultRt.routing.sTitle.html( $('#id-16 a').html() + ':' );
// 					$('html').addClass('CaptureTotals');
// 					$('.CaptureTotals title').text($('#id-16 a').text());
// 				}
// 			},
			
// 			mouseEvents: function() {}
// 		});

		
// 		if(settings.runApp == true) { let kgr = new kGrid(); }
// 	}

// 	dc.allKendo();
	
// });

// Overriding Propreties
$(function() {
	
	// Browser.Check Propreties Function
	$.fn.LoadWdefault = function(browserOpt) {

		// Plugin Name
		let pluginName = 'BrowserCheckUp';

		// Checkings For Navigators Mobile & Desktop 
		let ua = navigator.userAgent;

		let browDefault = $.extend({
			
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
		      	blackberry: ua.match(/BlackBerry/),
				
				// Check For an Android Device
		      	android: ua.match(/Android/),
				
				// Check For a Windows Device
				windows: ua.match(/iemobile/),
				
				// Check For a Desktop Device
				desktop: window.innerWidth > 1000
		    }
			
		}, browserOpt);
		
		// Browser Settings
		let settingsBrow = $.extend( true, {}, browDefault, browserOpt );

		// Main Prototype Function
		function BrowserCheck(browserOpt) {

			// Override Default Propreties
			this.settings = $.extend( {}, browDefault, browserOpt);

			// Plugin Name
			this.name = pluginName;

			// Loads GlobalBrowser Prototype.
			this.GlobalBrowser();
			
			// Media Queries Injection
			this.mediaResize();
		}

		// Plugin Prototype
		$.extend( BrowserCheck.prototype, {
			
			GlobalBrowser: function() {
				
				settingsBrow.window.ready(function() { mobileCheck(); browserCheck(); });

				// Device Check Function
				function mobileCheck() {
					
					// Check For Android Device
				    if (settingsBrow.device.android){ $('html').addClass('Android'); } 
					
					// Check For Iphone Device
					else if (settingsBrow.device.iphone){ $('html').addClass('Iphone'); } 
					
					// Check For Ipad Device
					else if (settingsBrow.device.ipad){ $('html').addClass('Ipad'); } 
					
					// Check For Ipod Device
					else if (settingsBrow.device.ipod){ $('html').addClass('Ipod'); } 
					
					// Check For BlackBerry Device
					else if (settingsBrow.device.blackberry){ $('html').addClass('BlackBerry'); } 
					
					// Check For DeskTop Device
					else { $('html').addClass('Desktop'); }
				}
				
				// Browser Check Function
				function browserCheck() { 
					
					// Check For Opera Browser
				    if((navigator.userAgent.indexOf(settingsBrow.browser.operaB) 
						
						|| navigator.userAgent.indexOf('OPR')) != -1 ) { $('html').addClass(settingsBrow.browserCl.opera); } 
					
					// Check For Chrome Browser
					else if(navigator.userAgent.indexOf(settingsBrow.browser.chromeB) != -1 ) { $('html').addClass(settingsBrow.browserCl.chrome); } 
					
					// Check For Safari Browser
					else if(navigator.userAgent.indexOf(settingsBrow.browser.safariB) != -1) { $('html').addClass(settingsBrow.browserCl.safari); } 
					
					// Check For FireFox Browser
					else if(navigator.userAgent.indexOf(settingsBrow.browser.firefoxB) != -1 ) { $('html').addClass(settingsBrow.browserCl.firefox); } 
					
					// Check For I.E. Browser
					else if((navigator.userAgent.indexOf(settingsBrow.browser.ieB) != -1 ) 
						
						|| (!!document.documentMode == true )) { $('html').addClass(settingsBrow.browserCl.ie);
				    
				    }  else { alert('You are running an Unknown Browser') }
				}
			},
			
			mediaResize: function() {
				
				// @Media Queries( Height ) Function
				let getBrowserWidth = function() {
					
					if(window.innerHeight == 1008) {}
				};
				getBrowserWidth();
				
				// Runs Function on Screen Resize
				$(window).on('resize',function() { getBrowserWidth() });
				
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

		// Runs Main Function
		let TBrowserCheck = new BrowserCheck();
	}

	// Runs Browser.Check Propreties Function
	dc.LoadWdefault();

	// To get any element in an iframe
	// $('.k-editable-area iframe').load(function(){
			
	// 	$('.k-editable-area iframe').contents().find('body').addClass('goNow');
	// });
	
});