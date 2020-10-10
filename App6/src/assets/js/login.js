

let d = $(document);
let ck = 'click';

let ThisUsername = 'jmartins';
let ThisPassword = 'Hello';

let PathProtocol = 'http://';
let PathHost = 'localhost:4232/#/Login';


let labPass = $('.labelPass');
let labUser = $('.labelUser');

$(function() {

	"use strict";

	$.fn.loginScreen = function() {

		try {

			$.fn.extend({
				loginClk: function() {
					return this.on('mouseover', '.Box_InputLogin', function() {

						$('.Box_InputLogin').removeClass('labelUp');
						$(this).addClass('labelUp');

						$('.LoginInput').removeClass('InpUp');
						$('.LoginInput', this).addClass('InpUp');

						$('html').addClass('PlaceLabels');
					});
				},

				// Start Click Events
				labelUp: function() {
					return this.on(ck, '.labelUp', function(e) {

						e.stopPropagation();

						if($('.UserInp').val() != '' && $('.PassInp').val() == '') {

							$('.labelPass').removeAttr('style');
							$('label', this).css({ top: '0', 'font-size': '10px', color: '#777' });

						} else if($('.PassInp').val() != '' && $('.UserInp').val() == '') {

							$('.labelUser').removeAttr('style');
							$('label', this).css({ top: '0', 'font-size': '10px', color: '#777' });

						} else if($('.PassInp').val() != '' && $('.UserInp').val() != '') {

							$('.Box_InputLogin label').css({ top: '0', 'font-size': '10px', color: '#777' });

						} else {

							$('label').removeAttr('style');
							$('label', this).css({ top: '0', 'font-size': '10px', color: '#777' });
						}

					});
				},
				PlaceLabels: function() {
					return this.on(ck, '.PlaceLabels', function() {

						if($('.UserInp').val() != '' && $('.PassInp').val() == '') {

							$('.labelPass').removeAttr('style');
							$('.labelUser').css({ top: '0', 'font-size': '10px', color: '#777' });
							$('html').removeClass('PlaceLabels');

						} else if($('.PassInp').val() != '' && $('.UserInp').val() == '') {

							$('.labelUser').removeAttr('style');
							$('.labelPass').css({ top: '0', 'font-size': '10px', color: '#777' });
							$('html').removeClass('PlaceLabels');

						} else if($('.PassInp').val() != '' && $('.UserInp').val() != '') {

							$('.Box_InputLogin label').css({ top: '0', 'font-size': '10px', color: '#777' });
							$('html').removeClass('PlaceLabels');

						} else {

							$('.Box_InputLogin label').removeAttr('style');
							$('html').removeClass('PlaceLabels');
						}

					});
				},
				SubBtn: function() {
					return this.on(ck, '.SubBtn', function() {

						if($('.UserInp').val() == ThisUsername && $('.PassInp').val() == ThisPassword) {

							$('#loginPage').hide();
							$('.errorMsg').hide();

							// window.location.href = PathProtocol + PathHost + '#/Home';


						} else if($('.UserInp').val() != ThisUsername && $('.PassInp').val() == ThisPassword) {

							$('.userErrorMsg').show();
							$('.passErrorMsg').hide();

						} else if($('.UserInp').val() == ThisUsername && $('.PassInp').val() != ThisPassword) {

							$('.passErrorMsg').show();
							$('.userErrorMsg').hide();
						}

						else { $('.errorMsg').show(); }

					});
				},
				// End Click Events

				keyEnter: function() {
					let userInp = $('.UserInp'); let passInp = $('.PassInp');

					userInp.add(passInp).on('keyup', function(e) { if(e.keyCode == 13) { $('.SubBtn').click(); } });
				}

			});

			d.loginClk()
			.labelUp()
			.PlaceLabels()
			.SubBtn()
			.keyEnter();


			$.fn.KeyUpPass = function() {
				return this.on('keyup', '.PassInp', function() {

					if($('.UserInp').val() == '') {
						labPass.css({ top: '0', 'font-size': '10px', color: '#777' });
						labUser.removeAttr('style');

					} else if($('.UserInp').val() != '') {

						labPass.add(labUser).css({ top: '0', 'font-size': '10px', color: '#777' });
					}
					
				});
			}
			d.KeyUpPass();

			$.fn.KeyUpUser = function() {
				return this.on('keyup', '.UserInp', function() {

					if($('.PassInp').val() == '') {
						labUser.css({ top: '0', 'font-size': '10px', color: '#777' });
						labPass.removeAttr('style');

					} else if($('.PassInp').val() != '') {

						labPass.add(labUser).css({ top: '0', 'font-size': '10px', color: '#777' });
					}
					
				});
			}
			d.KeyUpUser();
		}

		catch(loginError) { 

			$('.ModalErrorPot').show();
			$('.ErrorPotContent').html('Login Screen has an Error' + ' ' + loginError.stack);
		}
	}

	d.loginScreen();

});