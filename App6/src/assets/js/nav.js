
// Document Element
let d = $(document);

// Climck Event
let ck = 'click';


$(function() {

	"use strict";

	// Run Propreties Functions
	$.fn.runDataNav = function(optionsNav) {

		let defaultNav = {

			// Html Tags To Load
			tags: {

				// Div Tag
				divTag: '<div>',

				// Icon Tag
				iconTag: '<i>'
			},

			// Mouse Events
			mouse: {

				// Mouse Over Event
				mOver: 'mouseover',

				// Mouse Leave Event
				mLeave: 'mouseleave'
			},

			// rotate 0 Deg Class
			rot0Cl: 'dropRotate0',

			// Classes To Add or Remove Class Rotation 0 Deg
			aRrot0: '.navRoute, .userName',

			// Menu Drop Down Main Menu
			drT: 'dropTop',

			// Adding Class For the Extra Nav
			slNCl: 'slideNav',

			// Extra Nav Class
			extCl: 'extraNav'
		};

		// Main Menu Settings
		let settingsNav = $.extend(true, {}, defaultNav, optionsNav);

		// Global MouseOver Function
		$.fn.NavOver = function() {
			return this.on(settingsNav.mouse.mOver, '*', function() {

				// Check Over Class
				let cOver = $(this)[0].className;

				// Find Class For Over Effect
				if(cOver.indexOf('menuDrop') != -1) {

					// Main menu Drop Down Shows
					$('.' + settingsNav.drT, this).show(); 

					// Adding The Rotating Class
					$(settingsNav.aRrot0, this).addClass(settingsNav.rot0Cl);
				}

			});
		}
		d.NavOver();

		// Global MouseLeave function
		$.fn.DropLeave = function() {
			return this.on(settingsNav.mouse.mLeave, '*', function() {

				// Check Leave Class
				let fClass = $(this)[0].className;

				// Find Class For Leave Effect
				if(fClass.indexOf('menuDrop') != -1) {

					// Main Menu Drop Down Hides
					$('.' + settingsNav.drT).hide();

					// Removing Rotating Class 
					$(settingsNav.aRrot0).removeClass(settingsNav.rot0Cl);
				}

			});
		}
		d.DropLeave();

		// Nav Global Click Event 
		$.fn.GlobalNavEvent = function() {
			return this.on(ck, '*', function() {

				// Check For a Class
				let findClass = $(this)[0].className;

				// Click For a Mobile Nav
				if(findClass.indexOf('NavMob') != -1) {

					$('.slideNav').slideToggle(100);
					$('nav[role="navigation"]').toggleClass('navBorderBtt');

					$('div, section').toggleClass('closeMenu');
					$('.dropTop').removeClass('closeMenu');
				} 

				// Closes Mobile NavClicking AnyWhere on the Document
				else if(findClass.indexOf('closeMenu') != -1) {

					$('.slideNav').slideUp(100);
					$('div, section').removeClass('closeMenu');
					$('nav[role="navigation"]').removeClass('navBorderBtt');
				}
			});
		}
		d.GlobalNavEvent();

		$('.HeaderLeft .mainNav').addClass('slideNav');
		
		
		// Adding Extra Nav Items
		$.fn.ExtraNav = function(extraData, eMenuItem, aftDta, extClNav) {

			// Minimum Item in the Main Doc ( More than 15 Items )
			let nIt = extraData;

			// Icon For Extra Items
			let EndNav = $(settingsNav.tags.iconTag, { class: 'fa fa-ellipsis-v extraOver', 'aria-hidden': 'true'});

			// Appending Extra Items Doc 
			let extra = $(settingsNav.tags.divTag, { class: settingsNav.extCl });

			// Adding Extra Nav Class
			let ExrClassNav = extClNav;

			// Adding Extra Menu
			let ItemsNum = eMenuItem;

			// Logic for appending The Extra Nav
			const ItemsNumValoUt = ItemsNum > nIt ? EndNav.add(extra).appendTo('.' + settingsNav.slNCl) : EndNav.add(extra).remove();

			// All Extra Items
			let extItems = aftDta;

			// Add Extra Nav Items inside the New Doc
			extItems.clone().appendTo(ExrClassNav);

			// Remove New Items Added from the Main Doc ( Cleans the Main Nav Ul )
			extItems.remove();

			// Hover to Show Extra Items added
			$.fn.slideNavOver = function(showExtra) {
				return this.on(settingsNav.mouse.mOver, '.extraOver', function() {

					const ItemsNumVal = ItemsNum > nIt ? showExtra.show() : '';
				});
			}
			d.slideNavOver($(ExrClassNav));

			// Hide Extra Items Added
			$.fn.slideNavLeave = function(hideExtra) {
				return this.on(settingsNav.mouse.mLeave, '.' + settingsNav.slNCl, function() {

					hideExtra.hide()
				});
			}
			d.slideNavLeave($(ExrClassNav));
		}
		d.ExtraNav(16, $('.' + settingsNav.slNCl).find('li.menuDrop').length, $('.slideNav li.menuDrop:nth-child(+n17)'), '.' + settingsNav.extCl);

	}
	d.runDataNav();

});





// style="width: 135px;"

// style="width: 110px;"

// style="width: 155px;"

// style="width: 115px;"

// style="width: 130px;"

// style="width: 146px;"

// style="width: 180px;"

// style="width: 120px;"


// function hasClass(elem, className) {
//     return elem.className.split(' ').indexOf(className) > -1;
// }

// document.addEventListener('mouseover', function (e) {

//     if (hasClass(e.target, 'menuDrop')) {

//        $('.dropTop', this).show(); 
// 	   $('.navRoute, .userName', this).addClass('dropRotate0');

//     } 

// }, false);


// let import_js_imported = [];
// $.extend(true, {
//     import_js: function(script){
//         let found = false;
//         for (var i = 0; i < import_js_imported.length; i++)
//             if (import_js_imported[i] == script) {
//                 found = true;
//                 break;
//             }
        
//         if (found == false) {
//             $("head").append('<script type="text/javascript" src="' + script + '"></script>');
//             import_js_imported.push(script);
//         }
//     }
// });

//$.import_js('/Content/Assests/global/header/takelead/js/takelead.js');
//$.import_js('/Content/Assests/global/header/nav/js/Nav.js');