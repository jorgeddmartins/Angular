
$(function() {

	"use strict";

	$.fn.routingN = function(rOptions) {

		let rSettings = $.extend({

			rWindow: window.location.pathname,

			hrefp: window.location.href,

			url: 'http://localhost:4207'

		}, rOptions);


		function routingS() { 

			this.runRoute(); 

			this.navSetup();
		}

		$.extend( routingS.prototype, {

			runRoute: function() {

				if(rSettings.hrefp === rSettings.url + '/#/leads') {
						
					$('nav.left-nav').removeClass('deepNav');
				}
			},

			navSetup: function() {

				$("li.Reporting.li-Lead").before($('<div>', { class: "separate-nav li_Reporting" })
					.append($('<span>', {class: "separ-title" }).html("Reporting"))); 

				$("li.li-Merchant.Settings").before($('<div>', { class: "separate-nav li_Merchant" })
					.append($('<span>', { class: "separ-title" }).html("Settings"))); 

				$("li.li-Log").before($('<div>', { class: "separate-nav li_Log" })
					.append($('<span>', { class: "separ-title" }).html("Logout"))); 

				$(".new-left-nav-item").addClass("linkUrl"); 

				$(".new-drop-qx").addClass("subMenu"); 
				

				let n = function (e, a) {
					this.el = e || {}, this.multiple = a || !1, this.el.find(".linkUrl").on('click', {
						el: this.el,
						multiple: this.multiple
					}, this.dropdown)
				};
				n.prototype.dropdown = function (e) {
					let a = e.data.el,
						t = $(this),
						n = t.next();
					n.slideToggle(200), 
					t.parent().toggleClass("open");
					e.data.multiple || a.find(".subMenu").not(n).slideUp(200).parent().removeClass("open")
				};
				new n($("#leftNav-Accordion"), !1);

				$(".new-sub-url").addClass("SublinkUrl"); 

				$(".new-drop-sub").addClass("SubsubMenu"); 

				(l = function (e, a) {
					this.el = e || {}, this.multiple = a || !1, this.el.find(".SublinkUrl").on('click', {
						el: this.el,
						multiple: this.multiple
					}, this.dropdown)
				}).prototype.dropdown = function (e) {
					let a = e.data.el,
						t = $(this),
						n = t.next();
					n.slideToggle(200), t.parent().toggleClass("Subopen"), 
					e.data.multiple || a.find(".SubsubMenu").not(n).slideUp(200).parent().removeClass("Subopen")
				};

				var l = new l($("#leftNav-SubAccordion"), !1);

				$("#leftNav-Accordion").mCustomScrollbar({
					theme: "minimal",
					scrollInertia: 700
				});
			}

		});

		let routingSett = new routingS();
	}

	$(document).routingN();


	//$('#open-id_15').appendTo('#id-15');


});