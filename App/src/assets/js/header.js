
// Click Event
let ck = 'click';

// Document Element
let d = $(document);

$(function() {

	"use strict"


	$.fn.DataHeader = function(optDtata) {

		let defaulHeader = {

			// Avatar Modal Element
			AvatarModal: $('.avatar-modal'),

			// Html Tags
			tags: {

				// Div Tag
				divTag: '<div>',

				// Span Tag
				spanTag: '<span>',

				// Icon Tag
				iconTag: '<i>',

				// Html Tag
				htmlTag: 'html'
			},

			// Left Nav Class
			leftN: 'left-nav',

			// Close Left Nav Class
			cnavlClass: 'CloseNavLeft'
		};

		// Header Extend Settings
		let setitngsHeader = $.extend( true, {}, defaulHeader, optDtata);

		// Avatar Modal Hides
	    setitngsHeader.AvatarModal.hide();

	    $('.dropLi').addClass('ItemDrop');
	    $('.dropLiSub').addClass('ItemDropSub');

	 	let touchFloor = $(setitngsHeader.tags.divTag, { class: 'new-left-nav-item newleft-nav-back' });
		$('.new-drop-qx').before(touchFloor);


				
	    let nlit = '<span class="new-top-item"></span>' +
	    				  '<span class="new-top-item-second"></span>' +
	    				  '<span class="new-right-ico-floor"><i class="mainIco"></i></span>';

	    $(nlit).appendTo('.dropLi .new-left-nav-item');



		$('.new-drop-qx').addClass('subMenu');

		let faArrow = $(setitngsHeader.tags.iconTag, { class: 'fa fa-chevron-down' });
		$('.ItemDrop .new-left-nav-item .new-right-ico-floor').before(faArrow);

		let newSubleftItem = '<span class="new-sub-url">' +
								'<span class="new-sub-urlTxt"></span>' +
								'<span class="new-right-ico-floor angleM">' +
									'<i class="mainSubIco"></i>' +
								'</span>' +
							 '</span>';

		$('.SubsubMenu').before(newSubleftItem);

		let SubfaAngle = $(setitngsHeader.tags.iconTag, { class: 'fa fa-angle-down' });
		$('.dropLiSub .angleM').before(SubfaAngle);


		$.fn.liItemDrop = function() {
			return this.each(function() {

				let findCl = $(this)[0].className;

				// Reporting Nav
				if(findCl.indexOf('LReporting') != -1) {

					ItemDropNav(this, 'Lead Reporting', 'Capture & Distribution Reports', 'fa fa-bar-chart-o');

				} else if(findCl.indexOf('QReporting') != -1) {

					ItemDropNav(this, 'Quality Reporting', 'Asses lead quality performance', 'fa fa-check-square');

				} else if(findCl.indexOf('FReporting') != -1) {

					ItemDropNav(this, 'Financial Reporting', 'Profitability Reporting', 'fa fa-gbp');

				} else if(findCl.indexOf('AReporting') != -1) {

					ItemDropNav(this, 'Accounts Reporting', 'Financial Reports for Accounts', 'fa fa-calculator');

				} else if(findCl.indexOf('TSReporting') != -1) {

					ItemDropNav(this, 'Tele Sales Reporting', 'Call outcomes', 'fa fa-tty');

				} else if(findCl.indexOf('PTReporting') != -1) {

					ItemDropNav(this, 'Product Types Reporting', 'Product type specific reporting', 'fa fa-product-hunt');
				}

				// Settings Nav
				if(findCl.indexOf('Msettings') != -1) {

					ItemDropNav(this, 'Merchant Settings', 'Delivery, Cost, Company Etc...', 'fa fa-asl-interpreting');

				} else if(findCl.indexOf('SRsettings') != -1) {

					ItemDropNav(this, 'Source Settings', 'Platforms, Tags, Cost, Etc...', 'fa fa-cog');

				} else if(findCl.indexOf('Fsettings') != -1) {

					ItemDropNav(this, 'Financial Settings', 'Global, Merchants, Products, Affili...', 'fa fa-sliders');

				} else if(findCl.indexOf('SYsettings') != -1) {

					ItemDropNav(this, 'System Settings', 'Users, Products, Restrictions, Logs', 'fa fa-cogs');
				}

				// Sub Items
				if(findCl.indexOf('MerchantFeedbackFl') != -1) {

					SubDropItems(this, 'Merchant Feedbacks', 'fa fa-wechat');

				} else if(findCl.indexOf('AffiliatesSettingsFl') != -1) {

					SubDropItems(this, 'Affiliates', 'fa fa-users');

				} else if(findCl.indexOf('SearchSettingsFl') != -1) {

					SubDropItems(this, 'Search', 'fa fa-search-plus');

				} else if(findCl.indexOf('NativeSettingsFl') != -1) {

					SubDropItems(this, 'Native', 'fa fa-newspaper-o');

				} else if(findCl.indexOf('SocialSettingsFl') != -1) {

					SubDropItems(this, 'Social', 'fa fa-facebook-official');

				} else if(findCl.indexOf('EmailSettingsFl') != -1) {

					SubDropItems(this, 'Email', 'fa fa-envelope-open');

				} else if(findCl.indexOf('BlackListSettingsFl') != -1) {

					SubDropItems(this, 'Capture Restrictions & Blacklists', 'fa fa-minus-circle');

				} else if(findCl.indexOf('UsersSettingsFl') != -1) {

					SubDropItems(this, 'Users', 'fa fa-users');

				} else if(findCl.indexOf('MenuSettingsFl') != -1) {

					SubDropItems(this, 'Menu', 'fa fa-list-ul');
				}

			});
		}

		$('.ItemDrop, .ItemDropSub').liItemDrop();

		$('.new-left-nav-item').addClass('linkUrl');
		$('.new-drop-qx').addClass('subMenu');

		let Accordion = function(el, multiple) {
			this.el = el || {};
			this.multiple = multiple || false;
			let links = this.el.find('.linkUrl');
			links.on(ck, {el: this.el, multiple: this.multiple}, this.dropdown)
		}
		Accordion.prototype.dropdown = function(e) {
			let $el = e.data.el;
			let th = $(this),
			$next = th.next();
			$next.slideToggle(200);
			th.parent().toggleClass('open');
			$('.SubsubMenu').slideUp(200);
			$('.dropLiSub').removeClass('dropOpenSub').addClass('ItemDropSub');
			$('.fa-angle-down').removeClass('upRotate');
			if (!e.data.multiple) {
				$el.find('.subMenu').not($next).slideUp().parent().removeClass('open');
			};
		}

		$('.avatar').addClass('openAvatar');	

		$.fn.headerT = function() {
			return this.on(ck, '*', function(e) {

				let findCl = $(this)[0].className;

				switch(true) {

					// Open Avatar Drop Down
					case findCl.indexOf('openAvatar') != -1:
					 	setitngsHeader.AvatarModal.show();
					 	$(this).removeClass('openAvatar').addClass('closeAvatar');
					 	break;

					 // Close Avatar Drop Down
					 case findCl.indexOf('closeAvatar') != -1:
					 	setitngsHeader.AvatarModal.hide();
					 	$(this).removeClass('closeAvatar').addClass('openAvatar');
					 	break;

					// Sub Menu Open
					case findCl.indexOf('ItemDropSub') != -1:
						$('.dropLiSub').removeClass('dropOpenSub').addClass('ItemDropSub');
						$(this).addClass('dropOpenSub').removeClass('ItemDropSub');
						$('.SubsubMenu').slideUp(200);
						$('.SubsubMenu', this).slideDown(200);
						$('.fa-angle-down').removeClass('upRotate');
						$('.fa-angle-down', this).addClass('upRotate');
						break;

					// Sub Menu Close
					case findCl.indexOf('dropOpenSub') != -1:
						$(this).addClass('ItemDropSub').removeClass('dropOpenSub');
						$('.SubsubMenu', this).slideUp(200);
						$('.fa-angle-down', this).removeClass('upRotate');
						break;

					// Open Settings Screen
					case findCl.indexOf('settings-role') != -1:
						$('.closeAvatar').click();
						$('.top-nav, .box_lg').removeAttr('style')
						$('body').removeClass('bodyTaleSales')
						break;

					// Open TeleSales Left Nav
					case findCl.indexOf('TeleSMenu') != -1:
						e.stopPropagation();
						$('.bodyTaleSales .left-nav').toggleClass('goLNav');
						$('.button-nav-right').removeClass('moveRight');
						$('.right-nav').removeClass('margin-right-bar');
						$('html').toggleClass('CloseNavLeft');
						break;	

					// To Click Anywhere to close Left Nav
					case findCl.indexOf('CloseNavLeft') != -1:
						$('.left-nav').removeClass('goLNav');
						$('html').removeClass('CloseNavLeft');
						break;
				}
			});
		}

		let accordion = new Accordion($('#leftNav-Accordion'), false);
		d.headerT();

	    $("#leftNav-Accordion").mCustomScrollbar({ theme:"minimal", scrollInertia:700 });


		d.on('mouseover', '.' + setitngsHeader.leftN, function() {

			$(setitngsHeader.tags.htmlTag).removeClass(setitngsHeader.cnavlClass);
		});

		d.on('mouseleave', '.' + setitngsHeader.leftN, function() {

			$(setitngsHeader.tags.htmlTag).addClass(setitngsHeader.cnavlClass);
		});
	}
	d.DataHeader();

});


function ItemDropNav(thisNav, TitleNav, SubtitleNav, IconNav) {

	$('.new-top-item', thisNav).html(TitleNav);
	$('.new-top-item-second', thisNav).html(SubtitleNav);
	$('.new-right-ico-floor .mainIco', thisNav).addClass(IconNav);
}

function SubDropItems(subThisNav, subTitleNav, subIconNav) {

	$('.new-sub-url .new-sub-urlTxt', subThisNav).html(subTitleNav);
	$('.mainSubIco', subThisNav).addClass(subIconNav);
}




// $("div").data("test", { 
//     first: "Geeks", 
//     last: "Geeks !" 
// }); 
// $("span:first").text($("div").data("test").first); 
// $("span:last").text($("div").data("test").last); 



// Nav Mobile

// $.fn.mobNavbox = function() {
// 	return this.on(ck, '*', function() {
		
// 		var classT = $(this)[0].className; 
		
// 		var id = $(this).attr('id');
		
// 		if(classT.indexOf('mob-nav-box') != -1) {
			
// 			$(".left-nav").toggleClass("movnav-w");
// 			$(".right-nav").removeClass("movrightnav-w");
			
// 			$("html").toggleClass("closeMnav").removeClass("closeMnavR");
// 		}
		
// 		else if(id == 'nav-right-mov') {
			
// 			$(".right-nav").toggleClass("movrightnav-w");
// 			$(".left-nav").removeClass("movnav-w");
			
// 			$("html").toggleClass("closeMnavR").removeClass("closeMnav");
// 		}

// 	});
// }
// d.mobNavbox();

// $.fn.closemnav = function() {
// 	return this.on(ck, '.closeMnav', function() {
		
// 		$(".left-nav").removeClass("movnav-w");
// 		$("html").removeClass('closeMnav');
// 	});
// } 
// d.closemnav();

// $.fn.closemnavr = function() {
// 	return this.on(ck, '.closeMnavR', function() {
		
// 		$(".right-nav").removeClass("movrightnav-w");
// 		$("html").removeClass('closeMnavR');
// 	});
// }
// d.closemnavr();

// d.on('mouseover', '.movrightnav-w', function() {
	
// 	$("html").removeClass('closeMnavR');
// });

// d.on('mouseleave', '.movrightnav-w', function() {
	
// 	$("html").addClass('closeMnavR');
// });

// d.on('mouseover', '.movnav-w', function() {
	
// 	$("html").removeClass('closeMnav');
// });

// d.on('mouseleave', '.movnav-w', function() {
	
// 	$("html").addClass('closeMnav');
// });