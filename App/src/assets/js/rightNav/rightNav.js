
// All Document
let d = $(document);

// Click Event
let ck = 'click';

$(function() {

	"use strict";

	// Propreties Main Function
	$.fn.RightNavData = function(rightNavOption) {

		let pluginName = 'RightNav';

		let rnd = $.extend({

			// html Tags
			tags: {

				// Html Tag
				htmlTag: 'html',

				// Span Tag
				spanTag: '<span>', 

				// Icon Tag
				iconTag: '<i>',

				// Body Tag
				byTag: 'body' 
			},

			// Elements to add
			clRight: 'close_Rightnav',

			// RrightNav Element
			rightNav: '.right-nav',

			// Data Json
			data: {

				// Right Nav TeleSales Data
				rightUrlSales: 'assets/js/teleSalesRightNav/TSalesRight.json',

				// Right Nav All Data
				rightUrlAll: 'assets/js/rightNav/rightNav.json',

				// All Merchant Products Injection
				tdt: $('<div>', { class: 'ProdItem ToDetach' }),

				// Input CheckBox Switch
				swt: '<div class="switch_prod"><label class="switch"><div class="slider round"></div></label></div>'
			},

			// Injection Products
			products: {

				// Life Product
				l: 'life',

				// Funeral Insurance Product
				fl: 'funeralins',

				// Funeral Plan Product
				fp: 'funeralP',

				// Mortgages Product
				m: 'mortgages',	

				// Isa Products
				i: 'isa',

				// Health Products
				h: 'health',

				// Willis Products
				w: 'wills',

				// Fifty Life Products
				ftl: 'fiftylife',

				// BusinessPMI Products 
				bpmi: 'businesspmi',

				// Arc Product
				ar: 'ARC',

				// Sc Product
				sc: 'SC',

				// Pl Product
				pl: 'PL',

				// Re Product
				re: 'RE',

				// Uh Product
				uh: 'UH',

				// Scpq Product
				scpq: 'SCPQ',

				// Nfspq Product
				nfspq: 'NFSPQ',

				// Nfs Product
				nfs: 'NFS',

				// Plpq Product
				plpq: 'PLPQ',

				// Rar Product
				rar: 'RAR',

				// HolPQ Product
				holpq: 'HOLPQ',

				// Hch Product
				hch: 'HCH',

				// Mch Product
				mch: 'MCH',

				// Ukh Product
				ukh: 'UKH',

				// Man Product
				man: 'MAN',

				// Hol Product
				hol: 'HOL',

				// Trm product
				trm: 'TRM',

				// Coo Product
				coo: 'COO',

				// Ymd Product
				ymd: 'YMD',

				// Fri Product
				fri: 'FRI',

				// FriPQ Product
				fripq: 'FRIPQ',

				// Win Product
				win: 'WIN',

				// Trer Product
				trer: 'TRER',

				// Fsr Product
				fsr: 'FSR',

				// Gld product
				gld: 'GLD',

				// GldPQ Product
				gldpq: 'GLDPQ',

				// Sto Product
				sto: 'STO',

				// Avad Product
				avad: 'AVAD',

				// AvaPQ Product
				avapq: 'AVAPQ',

				// Ava Product
				ava: 'AVA',

				// Pfp Product
				pfp: 'PFP',

				// Sfs product
				sfs: 'SFS',

				// Rox Product
				rox: 'ROX',

				// RoxPq Product
				roxpq: 'ROXPQ',

				// Tsf Product
				tsf: 'TSF'
			},

			// Class To Detach The Elements List
			dt: 'ToDetach',

			// Input Checkbox Unchecked
			uncheckInp: '<input type="checkbox" />',

			// Input CheckBox Checked
			checkInp: '<input type="checkbox" checked="checked" />',

			// Input[type="ckeckbox"] Slider Switch
			sld: 'slider',

			// TeleSales Right Nav Screen Class
			tnScreen: 'telRnavScreen',

			// Merchants Right Nav Screen Class
			mScreen: 'merchantScreen',

			// TeleSales RightNav & Merchants RightNav ToggleClass
			toggRCl: 'teleSrightNav',

			// Charts Modal Class
			mCharts: 'modalCharts',

			// Total Calls Modal Class
			toCallsM: 'totalCalls-Modal',

			// Unique Calls Modal Class
			uniqCallsM: 'uniqueCall-Modal',

			// Total Calls Class
			toCalls: 'totalCalls',

			// Modal Chart To Open TotalCalls
			mchartOpen: 'modalCharts-Open',

			// Modal Chart To Open UniqueCalls
			mchartOpenN: 'modalCharts-Open-Now'

		}, rightNavOption);

		// Settings Reset
		let ravSettings = $.extend( true, {}, rnd, rightNavOption );

		// Main Right Nav Function
		function RightN(rightNavOption) {

			// LoadsPlugin Name
			this._name = pluginName;

			// Runs Default Propreties
			this._defaults = rnd;

			// Runs dataRight function Prototype
			this.dataRight();
		}

		// Plugin Prototype
		$.extend( RightN.prototype, {

			// Function To Load Data Json
			dataRight: function() {

				// Right Nav Ajax Call
				$.ajax({
					type: 'GET',
					url: ravSettings.data.rightUrlSales,
					datatype: 'json',

					// Success Funtion
					success: function(rightNData) { d.RightNavDt(rightNData) }
				});

				// Runs Data Injection Function Prototype
				this.drInject();
			},

			// Function For Data Injection
			drInject: function() {

				// Right Nav Data injection Function For TeleSales
				$.fn.RightNavDt = function(rightNData) {

					// Calls Report Data Injection
					let callReport = '';
					for( let r in rightNData.callsReport ) {

						// Calls Data Template
						callReport += '<div class="infoSquare '+ rightNData.callsReport[r].topclass + '">' +
											'<span class="dtaSquare">' + rightNData.callsReport[r].dataval + '</span>' +
											'<span class="titleSquare">' + rightNData.callsReport[r].dataname + '</span>' +
									  '</div>';
					}

					// Calls Data Injection In InforCharts Element 
					$(callReport).appendTo('#infoCharts');
				} 

				// Right Nav Button Animation
				let rBtnModal = $(ravSettings.tags.spanTag, { id: 'button-nav-right', class: 'button-nav-right', style: 'cursor: pointer' })

						// Button Icon
						.append($(ravSettings.tags.iconTag, { class: 'icon icon-cog', 'aria-hidden': true }));

				// Button Injection		
				$(ravSettings.rightNav).before(rBtnModal);

				// Global Click Function
				$.fn.rightNav = function() { 
					return this.on(ck, '*', function() {

						// To Check to find a Class
						let findClass = $(this)[0].className;

						// Open & close Right nav Click Event
						if(findClass.indexOf('button-nav-right') != -1) {

							// Button To Open Right Nav Toggles Animation Class
							$(this).toggleClass('moveRight');

							// Right Nav Element Toggles Animation Class 
							$(ravSettings.rightNav).toggleClass('margin-right-bar');

							// Left Nav Closes when Right Nav Opens
							$('.left-nav').removeClass('goLNav');

							// If Click Event Happens Any Where in the Document, Right Nav Closes
							$(ravSettings.tags.htmlTag).toggleClass('close_Rightnav');

							// Reports Tab adds Enable Class When Right Nav Button is Clicked 
							$('.reportsTab').addClass('tabEnable');

							// Body Toggles TeleSales Screen Class
							if($(ravSettings.tags.byTag).hasClass('bodyTaleSales')) {

								// TeleSales Right Nav Screen Removes Class 
								$('.' + ravSettings.tnScreen).removeClass(ravSettings.toggRCl);

								// Merchants Right Nav Screen Adds Class
								$('.' + ravSettings.mScreen).addClass(ravSettings.toggRCl);

							} else {

								// TeleSales Right Nav Screen Adds Class
								$('.' + ravSettings.tnScreen).addClass(ravSettings.toggRCl);

								// Merchants Right Nav Screen Removes Class
								$('.' + ravSettings.mScreen).removeClass(ravSettings.toggRCl);
							}
						}

						// Hiding Block when clicking on UserTab
						const usersTab = findClass.indexOf('usersTab') != -1 ? $('.teleSalessmallInfo').hide() : '';

						// Hiding Block when clicking on Reports Tab
						const reportsTab = findClass.indexOf('reportsTab') != -1 ? $('.teleSalessmallInfo').show() : '';

						// Open TotalCalls PopUp
						if(findClass.indexOf('tCallsIn') != -1) {

							// The Modal Charts Element Toggles Class "modalCharts-Open"
							$('.' + ravSettings.mCharts).addClass(ravSettings.mchartOpen).removeClass(ravSettings.mchartOpenN);

							// Total Calls Modal Toggles Animation Class
							$('.' + ravSettings.toCallsM).addClass('callsNow').removeClass('uniqueNow');

							// Unique Calls Modal Removes Animation Class
							$('.' + ravSettings.uniqCallsM).removeClass('uniqueNow');
						}

						// Open UniqueCalls PopUp
						if(findClass.indexOf('uniCallsIn') != -1) {

							// The Modal Charts Element Toggles Class "modalCharts-Open"
							$('.' + ravSettings.mCharts).addClass(ravSettings.mchartOpenN).removeClass(ravSettings.mchartOpen);

							// Unique Calls Modal Toggles Animation Class
							$('.' + ravSettings.uniqCallsM).addClass('uniqueNow').removeClass('callsNow');

							// Total Calls Removes Unique Calls Animation Class
							$('.' + ravSettings.toCallsM).removeClass('callsNow');
						}

						if(findClass.indexOf('clseTCalls') != -1) {

							// Total Calls Modal Removes Animation Class
							$('.' + ravSettings.toCallsM).removeClass('callsNow');

							// ModalCharts Removes Animation Class
							$('.' + ravSettings.mCharts).removeClass(ravSettings.mchartOpen);
						}

						else if(findClass.indexOf('clseUCalls') != -1) {

							// Unique Calls Modal Removes Animation Class
							$('.' + ravSettings.uniqCallsM).removeClass('uniqueNow');

							// ModalCharts Removes Animation Class
							$('.' + ravSettings.mCharts).removeClass(ravSettings.mchartOpenN);
						}

					});
				}
				d.rightNav();

				// Right Nav Tabs
				$.fn.tabReportUser = function() {
					return this.on(ck, '.tabReportUser', function() {

						$('.tabReportUser').removeClass('tabEnable');
						$(this).addClass('tabEnable');
					});
				}
				d.tabReportUser();

				// To close Right Nav when clicking Anywhere on the Screen
				$.fn.CloseRNav = function() {
					return this.on(ck, '.' + ravSettings.clRight, function() {

						$(ravSettings.rightNav).removeClass('margin-right-bar')
						$('.button-nav-right').removeClass('moveRight')
						$(ravSettings.tags.htmlTag).removeClass(ravSettings.clRight);
					});
				}
				d.CloseRNav();

				// Close Right Nav Mouseover
				d.on('mouseover', ravSettings.rightNav, function() { $(ravSettings.tags.htmlTag).removeClass(ravSettings.clRight); });

				// Close Right nav Mouseleave
				d.on('mouseleave', ravSettings.rightNav, function() { $(ravSettings.tags.htmlTag).addClass(ravSettings.clRight); });

				// Right Nav All Data
				$.ajax({

					type: 'GET',
					url: ravSettings.data.rightUrlAll,
					datatype: 'json',

					// Success Function
					success: function(rightAllD) { d.RightAllNav(rightAllD) } 
				});

				// Merchant Products Elements Injection
				ravSettings.data.tdt.appendTo('.merchantInfo .ProductsLoop, .productInfo .ProductsLoop');

				// Right Nav Injection Function For Merchants & Products
				$.fn.RightAllNav = function(rightAllD) {

					// Main Merchant Template Injection
					let prodItem = '';
					for( let a in rightAllD.merchant1Data ) {

						// Main Merchant Element
						prodItem += '<div class="ProdItem ' + rightAllD.merchant1Data[a].name + '"><span class="prod-name">' + rightAllD.merchant1Data[a].name + '</span></div>';
					}

					// Main Template Injection in ProductsLoop Element 
					$(prodItem).appendTo('.merchantInfo .ProductsLoop');

					// Main Merchant Inside Template
					let producIn = "";
					for( let p in rightAllD.mproduct ) {

						// Main Merchant Inside Block Options
						producIn += '<div class="prod-commands ' + rightAllD.mproduct[p].topClass + '">' +
										'<div class="rights-blk">' + '<span class="right_title">' + rightAllD.mproduct[p].name + '</span>' + '</div>' +
									'</div>';
					}

					// Main Merchant Inside Template Injection in ProdItem Element
					$(producIn).appendTo('.merchantInfo .' + ravSettings.dt);

					// Input Switch Injection
					$(rnd.data.swt).appendTo('.merchantInfo .prod-commands .rights-blk');

					// Life Product Injection
					$('.' + ravSettings.products.l).clone().appendTo('.Arc, .Nfs, .NfsPQ, .Pl, .PlPQ');

					// FuneralInsurance Product Injection
					$('.' + ravSettings.products.fl).clone().appendTo('.Arc, .Gld, .GldPQ');

					// FuneralPlan Product Injection
					$('.' + ravSettings.products.fp).clone().appendTo('.Ava, .Avad, .AvaPQ');

					// Mortgages Product Injection
					$('.' + ravSettings.products.m).clone().appendTo('.Coo, .Fri, .FriPQ');

					// Isa Product Injection 
					$('.' + ravSettings.products.i).clone().appendTo('.Fsr');

					// Health Product Injection
					$('.' + ravSettings.products.h).clone().appendTo('.Hol, .HolPQ, .Hch');

					// Wills Product Injection
					$('.' + ravSettings.products.w).clone().appendTo('.Nex');

					// FiftyLife Product Injection
					$('.' + ravSettings.products.ftl).clone().appendTo('.Pfp, .Gld, .GldPQ, .Nfs, .NfsPQ');

					// BusinessPMI Product Injection
					$('.' + ravSettings.products.bpmi).clone().appendTo('.Hol');

					// Arc Life Product adds Input CheckBox Unchecked
					$('.Arc').find('.' + rnd.products.l + ' .' + rnd.sld + '').before(rnd.uncheckInp);

					// Arc FuneralInsurance Product adds Input CheckBox Checked
					$('.Arc').find('.' + rnd.products.fl + ' .' + rnd.sld + '').before(rnd.checkInp);

					// Ava FuneralPlan Product adds Input CheckBox Checked
					$('.Ava').find('.' + rnd.products.fp + ' .' + rnd.sld + '').before(rnd.checkInp);

					// Avad FuneralPlan adds Input CheckBox Unchecked
					$('.Avad').find('.' + rnd.products.fp + ' .' + rnd.sld + '').before(rnd.uncheckInp);

					// AvaPQ FuneralPlan adds Input CheckBox Checked
					$('.AvaPQ').find('.' + rnd.products.fp + ' .' + rnd.sld + '').before(rnd.checkInp);

					// Coo Mortgages Product adds Input CheckBox Unchecked
					$('.Coo').find('.' + rnd.products.m + ' .' + rnd.sld + '').before(rnd.uncheckInp);

					// Fri Mortgages Product adds Input CheckBox Unchecked
					$('.Fri').find('.' + rnd.products.m + ' .' + rnd.sld + '').before(rnd.uncheckInp);

					// FriPQ Mortgages Product adds Input CheckBox Checked
					$('.FriPQ').find('.' + rnd.products.m + ' .' + rnd.sld + '').before(rnd.checkInp);

					// Fsr Isa product adds Input CheckBox Checked
					$('.Fsr').find('.' + rnd.products.i + ' .' + rnd.sld + '').before(rnd.checkInp);

					// Hol Health Product adds Input CheckBox Checked
					$('.Hol').find('.' + rnd.products.h + ' .' + rnd.sld + '').before(rnd.checkInp);

					// Hol BusinessPMI Product adds Input CheckBox Checked
					$('.Hol').find('.' + rnd.products.bpmi + ' .' + rnd.sld + '').before(rnd.checkInp);

					// HolPQ Health Product adds Input Checkbox Unchecked
					$('.HolPQ').find('.' + rnd.products.h + ' .' + rnd.sld + '').before(rnd.uncheckInp);

					// Hch Health Product adds Input CheckBox Checked
					$('.Hch').find('.' + rnd.products.h + ' .' + rnd.sld + '').before(rnd.checkInp);

					// Nfs Life Product adds Input CheckBox Unchecked
					$('.Nfs').find('.' + rnd.products.l + ' .' + rnd.sld + '').before(rnd.uncheckInp);

					// Nfs FiftyLife Product adds Input CheckBox Checked
					$('.Nfs').find('.' + rnd.products.ftl + ' .' + rnd.sld + '').before(rnd.checkInp);

					// NfsPQ Life Product adds Input CheckBox Unchecked
					$('.NfsPQ').find('.' + rnd.products.l + ' .' + rnd.sld + '').before(rnd.uncheckInp);

					// NfsPQ FiftyLife Product adds Input CheckBox Unchecked
					$('.NfsPQ').find('.' + rnd.products.ftl + ' .' + rnd.sld + '').before(rnd.uncheckInp);

					// Nex Wills product adds Input CheckBox Checked
					$('.Nex').find('.' + rnd.products.w + ' .' + rnd.sld + '').before(rnd.checkInp);

					// Pfp FiftyLife Product adds Input CheckBox Unchecked
					$('.Pfp').find('.' + rnd.products.ftl + ' .' + rnd.sld + '').before(rnd.uncheckInp);

					// Pl Life Product adds Input CheckBox Checked
					$('.Pl').find('.' + rnd.products.l + ' .' + rnd.sld + '').before(rnd.checkInp);

					// PlPQ Life Product adds Input CheckBox Checked
					$('.PlPQ').find('.' + rnd.products.l + ' .' + rnd.sld + '').before(rnd.checkInp);

					// Gld FuneralInsurance Product adds Input checkBox Checked
					$('.Gld').find('.' + rnd.products.fl + ' .' + rnd.sld + '').before(rnd.checkInp);

					// Gld FiftyLife Product adds Input CheckBox Checked
					$('.Gld').find('.' + rnd.products.ftl + ' .' + rnd.sld + '').before(rnd.checkInp);

					// GldPQ FuneralInsurance Product adds Input Checkbox Checked
					$('.GldPQ').find('.' + rnd.products.fl + ' .' + rnd.sld + '').before(rnd.checkInp);

					// GldPQ FiftyLife Product adds Input CheckBox Checked
					$('.GldPQ').find('.' + rnd.products.ftl + ' .' + rnd.sld + '').before(rnd.checkInp);

					// Products Injection
					let pItm = '';
					for( let i in rightAllD.productData ) {

						// Main Products Element Injection
						pItm += '<div class="ProdItem ' + rightAllD.productData[i].name + '"><span class="prod-name">' + rightAllD.productData[i].name + '</span></div>';
					}

					$(pItm).appendTo('.productInfo .ProductsLoop');

					let pItmIn = '';
					for( let p in rightAllD.pproduct ) {

						// Mian Products Inside Block Options
						pItmIn += '<div class="prod-commands ' + rightAllD.pproduct[p].name + '">' +
										'<div class="rights-blk">' + '<span class="right_title">' + rightAllD.pproduct[p].name + '</span>' + '</div>' +
								  '</div>';
					}

					// Main Product List Elements Injection
					$(pItmIn).appendTo('.productInfo .' + ravSettings.dt);

					// Input Switch Injection
					$(rnd.data.swt).appendTo('.productInfo .prod-commands .rights-blk');

					// Arc Product Injection
					$('.' + rnd.products.ar).clone().appendTo('.Life, .FuneralInsurance');

					// Sc Product Injection
					$('.' + rnd.products.sc).clone().appendTo('.Life');

					// Pl Product Injection 
					$('.' + rnd.products.pl).clone().appendTo('.Life');

					// Re Product Injection
					$('.' + rnd.products.re).clone().appendTo('.Life');

					// Uh Product Injection
					$('.' + rnd.products.uh).clone().appendTo('.Life, .Health');

					// ScPQ Product Injection
					$('.' + rnd.products.scpq).clone().appendTo('.Life');

					// NfsPQ Product Injection
					$('.' + rnd.products.nfspq).clone().appendTo('.Life, .FiftyLife');

					// Nfs Product Injection
					$('.' + rnd.products.nfs).clone().appendTo('.Life, .FiftyLife');

					// PlPQ Product Injection
					$('.' + rnd.products.plpq).clone().appendTo('.Life');

					// Rar Product Injection
					$('.' + rnd.products.rar).clone().appendTo('.Life');

					// HolPQ Product Injection
					$('.' + rnd.products.holpq).clone().appendTo('.Health');

					// Hch Product Injection
					$('.' + rnd.products.hch).clone().appendTo('.Health');

					// Mch Product Injection
					$('.' + rnd.products.mch).clone().appendTo('.Health');

					// Ukh Product Injection
					$('.' + rnd.products.ukh).clone().appendTo('.Health');

					// Man Product Injection
					$('.' + rnd.products.man).clone().appendTo('.Health, .BusinessPMI, .Keyman');

					// Hol Product Injection
					$('.' + rnd.products.hol).clone().appendTo('.Health, .BusinessPMI');

					// Trm Product Injection
					$('.' + rnd.products.trm).clone().appendTo('.Mortgages, .Equity');

					// Coo Product Injection 
					$('.' + rnd.products.coo).clone().appendTo('.Mortgages');

					// Ymd Product Injection
					$('.' + rnd.products.ymd).clone().appendTo('.Mortgages');

					// Fri Product Injection
					$('.' + rnd.products.fri).clone().appendTo('.Mortgages');

					// FriPQ Product Injection
					$('.' + rnd.products.fripq).clone().appendTo('.Mortgages');

					// Win Product Injection
					$('.' + rnd.products.win).clone().appendTo('.Mortgages');

					// Trer Product Injection
					$('.' + rnd.products.trer).clone().appendTo('.Equity');

					// Fsr Product Injection
					$('.' + rnd.products.fsr).clone().appendTo('.Isa');

					// Gld Product Injection
					$('.' + rnd.products.gld).clone().appendTo('.FuneralInsurance, .FiftyLife');

					// GldPQ Product Injection
					$('.' + rnd.products.gldpq).clone().appendTo('.FuneralInsurance, .FiftyLife');

					// Sto Product Injection
					$('.' + rnd.products.sto).clone().appendTo('.Keyman');

					// Avad product Injection
					$('.' + rnd.products.avad).clone().appendTo('.FuneralPlan');

					// AvaPQ Product Injection
					$('.' + rnd.products.avapq).clone().appendTo('.FuneralPlan');

					// Ava Product Injection
					$('.' + rnd.products.ava).clone().appendTo('.FuneralPlan');

					// Pfp Product Injection
					$('.' + rnd.products.pfp).clone().appendTo('.FiftyLife');

					// Sfs product Injection
					$('.' + rnd.products.sfs).clone().appendTo('.FiftyLife');

					// Rox Product Injection
					$('.' + rnd.products.rox).clone().appendTo('.Ip');

					// RoxPQ Product Injection
					$('.' + rnd.products.roxpq).clone().appendTo('.Ip');

					// Tsf Product Injection
					$('.' + rnd.products.tsf).clone().appendTo('.MerchantCashAdvance');

					// Arc For LIfe Product adds Input CheckBox Unchecked
					$('.Life').find('.' + rnd.products.ar + ' .' + rnd.sld + '').before(rnd.uncheckInp);

					// Sc For Life Product adds Input CheckBox Checked
					$('.Life').find('.' + rnd.products.sc + ' .' + rnd.sld + '').before(rnd.checkInp);

					// Pl For Life Product adds Input CheckBox Checked 
					$('.Life').find('.' + rnd.products.pl + ' .' + rnd.sld + '').before(rnd.checkInp);

					// Re For Life Product adds Input CheckBox Checked
					$('.Life').find('.' + rnd.products.re + ' .' + rnd.sld + '').before(rnd.checkInp);

					// Uh For Life Product adds Input CheckBox Unchecked
					$('.Life').find('.' + rnd.products.uh + ' .' + rnd.sld + '').before(rnd.uncheckInp);

					// ScPQ For Life Product adds Input CheckBox Checked
					$('.Life').find('.' + rnd.products.scpq + ' .' + rnd.sld + '').before(rnd.checkInp);

					// NfsPQ For Life Product adds Input CheckBox Unchecked
					$('.Life').find('.' + rnd.products.nfspq + ' .' + rnd.sld + '').before(rnd.uncheckInp);

					// Nfs For Life Product adds Input CheckBox Unchecked
					$('.Life').find('.' + rnd.products.nfs + ' .' + rnd.sld + '').before(rnd.uncheckInp);

					// PlPQ For Life Product adds Input CheckBox Checked
					$('.Life').find('.' + rnd.products.plpq + ' .' + rnd.sld + '').before(rnd.checkInp);

					// Rar For Life Product adds Input CheckBox Unchecked
					$('.Life').find('.' + rnd.products.rar + ' .' + rnd.sld + '').before(rnd.uncheckInp);

					// HolPQ For Health Product adds Input CheckBox Unchecked
					$('.Health').find('.' + rnd.products.holpq + ' .' + rnd.sld + '').before(rnd.uncheckInp);

					// Uh For Health Product adds Input CheckBox Unchecked
					$('.Health').find('.' + rnd.products.uh + ' .' + rnd.sld + '').before(rnd.uncheckInp);

					// Hch For Health Product adds Input CheckBox Checked
					$('.Health').find('.' + rnd.products.hch + ' .' + rnd.sld + '').before(rnd.checkInp);

					// Mch For Health Product adds Input CheckBox Checked
					$('.Health').find('.' + rnd.products.mch + ' .' + rnd.sld + '').before(rnd.checkInp);

					// Ukh For Health Product adds Input CheckBox Unchecked
					$('.Health').find('.' + rnd.products.ukh + ' .' + rnd.sld + '').before(rnd.uncheckInp);

					// Man For Health Product adds Input CheckBox Checked
					$('.Health').find('.' + rnd.products.man + ' .' + rnd.sld + '').before(rnd.checkInp);

					// Hol For Health Product adds Input CheckBox Checked
					$('.Health').find('.' + rnd.products.hol + ' .' + rnd.sld + '').before(rnd.checkInp);

					// Trm For Mortgages Product adds Input CheckBox Unchecked
					$('.Mortgages').find('.' + rnd.products.trm + ' .' + rnd.sld + '').before(rnd.uncheckInp);

					// Coo For Mortgages Product adds Input Checkbox Unchecked
					$('.Mortgages').find('.' + rnd.products.coo + ' .' + rnd.sld + '').before(rnd.uncheckInp);

					// Ymd For Mortgages Product adds Input CheckBox Checked
					$('.Mortgages').find('.' + rnd.products.ymd + ' .' + rnd.sld + '').before(rnd.checkInp);

					// Fri for Mortgages Product adds Input CheckBox Unchecked
					$('.Mortgages').find('.' + rnd.products.fri + ' .' + rnd.sld + '').before(rnd.uncheckInp);

					// FriPQ For Mortgages Product adds Input CheckBox checked
					$('.Mortgages').find('.' + rnd.products.fripq + ' .' + rnd.sld + '').before(rnd.checkInp);

					// Win For Mortgages Product adds Input CheckBox Checked
					$('.Mortgages').find('.' + rnd.products.win + ' .' + rnd.sld + '').before(rnd.checkInp);

					// Trm For Equity Product adds Input CheckBox Unchecked
					$('.Equity').find('.' + rnd.products.trm + ' .' + rnd.sld + '').before(rnd.uncheckInp);

					// Trer For Equity Product adds Input CheckBox Checked
					$('.Equity').find('.' + rnd.products.trer + ' .' + rnd.sld + '').before(rnd.checkInp);

					// Sld For BusinessPMI Product adds Input CheckBox Checked 
					$('.BusinessPMI').find('.' + rnd.products.man + ' .' + rnd.sld + '').before(rnd.checkInp);

					// Hol For BusinessPMI Product adds Input ChackBox Checked
					$('.BusinessPMI').find('.' + rnd.products.hol + ' .' + rnd.sld + '').before(rnd.checkInp);

					// Sld For Isa Product adds Input CheckBox Checked
					$('.Isa').find('.' + rnd.products.fsr + ' .' + rnd.sld + '').before(rnd.checkInp);

					// Arc For FuneralInsurance Product adds Input CheckBox Checked
					$('.FuneralInsurance').find('.' + rnd.products.ar + ' .' + rnd.sld + '').before(rnd.checkInp);

					// Gld For FuneralInsurance Product adds Input CheckBox Checked
					$('.FuneralInsurance').find('.' + rnd.products.gld + ' .' + rnd.sld + '').before(rnd.checkInp);

					// GldPQ For FuneralInsurance Product adds Input CheckBox Checked
					$('.FuneralInsurance').find('.' + rnd.products.gldpq + ' .' + rnd.sld + '').before(rnd.checkInp);

					// Man For Keyman Product adds Input CheckBox Unchecked
					$('.Keyman').find('.' + rnd.products.man + ' .' + rnd.sld + '').before(rnd.uncheckInp);

					// Sto For Keyman Product adds Input CheckBox Checked
					$('.Keyman').find('.' + rnd.products.sto + ' .' + rnd.sld + '').before(rnd.checkInp);

					// Avad For FuneralPlan Product adds Input CheckBox Unchecked
					$('.FuneralPlan').find('.' + rnd.products.avad + ' .' + rnd.sld + '').before(rnd.uncheckInp);

					// AvaPQ For FuneralPlan Product adds Input CheckBox Checked
					$('.FuneralPlan').find('.' + rnd.products.avapq + ' .' + rnd.sld + '').before(rnd.checkInp);

					// Ava For FuneralPlan Product adds Input CheckBox Checked
					$('.FuneralPlan').find('.' + rnd.products.ava + ' .' + rnd.sld + '').before(rnd.checkInp);

					// NfsPQ For FiftyLife Product adds Input CheckBox Unchecked
					$('.FiftyLife').find('.' + rnd.products.nfspq + ' .' + rnd.sld + '').before(rnd.uncheckInp);

					// Nfs For FiftyLife Product adds Input CheckBox Checked
					$('.FiftyLife').find('.' + rnd.products.nfs + ' .' + rnd.sld + '').before(rnd.checkInp);

					// Pfp For FiftyLife Product adds Input CheckBox Unchecked
					$('.FiftyLife').find('.' + rnd.products.pfp + ' .' + rnd.sld + '').before(rnd.uncheckInp);

					// Gld For FiftyLife Product adds Input ChackBox Checked
					$('.FiftyLife').find('.' + rnd.products.gld + ' .' + rnd.sld + '').before(rnd.checkInp);

					// GldPQ For FiftyLife Product adds Input CheckBox Checked
					$('.FiftyLife').find('.' + rnd.products.gldpq + ' .' + rnd.sld + '').before(rnd.checkInp);

					// Sfs For FiftyLife Product adds Input CheckBox Checked
					$('.FiftyLife').find('.' + rnd.products.sfs + ' .' + rnd.sld + '').before(rnd.checkInp);

					// Rox For Ip Product adds Input CheckBox Checked
					$('.Ip').find('.' + rnd.products.rox + ' .' + rnd.sld + '').before(rnd.checkInp);

					// RoxPQ For Ip Product adds Input CheckBox Checked
					$('.Ip').find('.' + rnd.products.roxpq + ' .' + rnd.sld + '').before(rnd.checkInp);

					// Tsf For MerchantCashAdvance Product adds Input CheckBox Checked
					$('.MerchantCashAdvance').find('.' + rnd.products.tsf + ' .' + rnd.sld + '').before(rnd.checkInp);


					// Removing List of Products
					$('.' + ravSettings.dt).detach();

				}
			}

		});


		let rNv = new RightN();

	}

	// Run Propreties Function(Mian Function)
	d.RightNavData();

});








// $(window).keydown(function(event){
//         if(event.keyCode == 13) {
//           event.preventDefault();
//             return false;
//         }
//     });
    
//     document.addEventListener("keyup", function(event) {
//     if ($(".inputsright").is(":focus")) {
//         $(this).on('keypress', function (event) {
//             if(event.keyCode == 13) {
//                 event.preventDefault();
//                 $(this).next('input').focus();
//                 event.preventDefault();
//                 return false;
//             }
//         });
//     }
//     });
  
//     function enterClick() {
//         document.addEventListener("keyup", function(event) {
//             if (event.keyCode === 13) {
//                 event.preventDefault();
//                 $(".advanceStepButton").click();
//             }
//         });
//     }


// $('#postcode').on('keyup', function(e) {
//         if (e.keyCode == 13) {
//             alert("yup");
//             // add your code here
//         }
//     });


// var input = document.getElementById('postcode');
// input.addEventListener('keyup', function(event) {
//     if (event.keyCode === 13) {
//         event.preventDefault();
//         //$('.advanceStepButton').click();
//         alert("yup");
//     }
// });


// $(document).ready(function() {
    
//     var input = document.getElementById('postcode');
//     input.on('keydown', function(event) {
//         if (event.keyCode === 13) {
//             //event.preventDefault();
//             //$('.advanceStepButton').click();
//             alert("yup");
//         }
//     });
    
// });



// $(function () {
    
//     $.fn.extend({
//         runKey: function (i, x) {
// 		var $showthis = $("input#postcode");
//             $showthis.on('keyup', function (event) {
//                 if (event.keyCode == 13) {
//                     //$('.advanceStepButton').click();
//                     alert("yup");
//                 }
//             });
//         }
//     });
//     $(document).runKey();
    
// });