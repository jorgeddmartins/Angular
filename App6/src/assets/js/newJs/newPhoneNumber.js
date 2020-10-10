
// Document Element
let d = $(document);

// Click Event
let ck = 'click;';


$(function() {

	"use strict";

	$.fn.getPhoneNumbers = function(options) {

		let defaults = $.extend({

			temp: {

				ldliPh: 'lp',

				wPh: 'wrp',

				mobPh: 'mbp',

				PlandPh:  'plp',

				PwoPh: 'pwrp',

				PmobPh: 'pmbp'
			},

			StCl: 'StopCall',

			value: {

				SetDel: 5000,

				digNum: 1
			}

		}, options);

		let settings = $.extend( true, {}, defaults, options);

		function phoneN(options) { 

			this.goPhone(); 

			d.GlobalCkCall();

			d.InputIdFocus();
		}

		$.extend( phoneN.prototype, {

			goPhone: function() {

				$.fn.loadCalls = function() {
					return this.each(function() {

						let todoCall = $(this).parent().siblings('input').val();

						const phoneCond = todoCall == "" ? $(this).addClass(settings.StCl) : $(this).removeClass(settings.StCl);
					});
				}
				$('.phoneAdt').loadCalls();

				$.fn.GlobalCkCall = function() {
					return this.on(ck, '*', function() {

						const Dl = $(this).hasClass('phoneAdt') ? $(this).addClass('delayClass') && setTimeout(function() { $('.phoneAdt').removeClass('delayClass') }, settings.value.SetDel) : '';

						if($(this).hasClass('lp')) {

							$('.' + settings.temp.ldliPh).addClass(settings.StCl);

							setTimeout(function() { $('.' + settings.temp.ldliPh).removeClass(settings.StCl) }, settings.value.SetDel);

						} else if($(this).hasClass('wrp')) {

							$('.' + settings.temp.wPh).addClass(settings.StCl);

							setTimeout(function() { $('.' + settings.temp.wPh).removeClass(settings.StCl) }, settings.value.SetDel);

						} else if($(this).hasClass('mbp')) {

							$('.' + settings.temp.mobPh).addClass(settings.StCl);

							setTimeout(function() { $('.' + settings.temp.mobPh).removeClass(settings.StCl) }, settings.value.SetDel);

						} else if($(this).hasClass('plp')) {

							$('.' + settings.temp.PlandPh).addClass(settings.StCl);

							setTimeout(function() { $('.' + settings.temp.PlandPh).removeClass(settings.StCl) }, settings.value.SetDel);

						} else if($(this).hasClass('pwrp')) {

							$('.' + settings.temp.PwoPh).addClass(settings.StCl);

							setTimeout(function() { $('.' + settings.temp.PwoPh).removeClass(settings.StCl) }, settings.value.SetDel);

						} else if($(this).hasClass('pmbp')) {

							$('.' + settings.temp.PmobPh).addClass(settings.StCl);

							setTimeout(function() { $('.' + settings.temp.PmobPh).removeClass(settings.StCl) }, settings.value.SetDel);
						}
						 
					});	
				}

				$.fn.InputIdFocus = function() {
					return $('.phone_Box').on('input', '*', function() {

						let Id = $(this).attr('id');
						let thValLen = $(this).val().length;

						let	valCond = thValLen >= settings.value.digNum;

						if(Id == 'LandlinePhone') {

							const landLine = valCond ? $('.' + settings.temp.ldliPh).removeClass(settings.StCl) : $('.' + settings.temp.ldliPh).addClass(settings.StCl);
						} 

						else if(Id == 'PartnerLandlinePhone') {

							const PlandLine = valCond ? $('.' + settings.temp.PlandPh).removeClass(settings.StCl) : $('.' + settings.temp.PlandPh).addClass(settings.StCl);		
						}

						if(Id == 'WorkPhone') {

							const workLine = valCond ? $('.' + settings.temp.wPh).removeClass(settings.StCl) : $('.' + settings.temp.wPh).addClass(settings.StCl);
						} 

						else if(Id == 'PartnerWorkPhone') {

							const PworkLine = valCond ? $('.' + settings.temp.PwoPh).removeClass(settings.StCl) : $('.' + settings.temp.PwoPh).addClass(settings.StCl);
						}

						if(Id == 'MobilePhone') {

							const mobileLine = valCond ? $('.' + settings.temp.mobPh).removeClass(settings.StCl) : $('.' + settings.temp.mobPh).addClass(settings.StCl);
						} 

						else if(Id == 'PartnerMobilePhone') {

							const PmobileLine = valCond ? $('.' + settings.temp.PmobPh).removeClass(settings.StCl) : $('.' + settings.temp.PmobPh).addClass(settings.StCl);
						}

					});
				}
			}
		});


		let phn = new phoneN();
	}

	d.getPhoneNumbers();

});