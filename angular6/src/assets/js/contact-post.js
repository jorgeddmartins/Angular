let $eventClick = 'click';
let $ThDocument = $(document);

$(function() {

	"use strict"

	var name = $('#contname').val();
	var email = $('#contemail').val();
	var tel = $('#contphone').val();
	var sub = $('#contsubj').val();
	var msg = $('#contmessage').val();
	var emailRegExp = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	var telRegExp = /^[0-9 ]+$/; 

	$.fn.contactSubmit = function() {

		return this.on($eventClick, '#contactSubmit', function() {

			switch(true) {

				case $('#contname').val() == '' && $('#contemail').val() == '' && $('#contphone').val() == '' && $('#contmessage').val() == '':
						$('#contresult').html('Please fill in all * fields.').css('padding-bottom','20px'); formStatus();
						break;

				case $('#contname').val() === '':
						$('#contresult').html('Please fill in your Name.').css('padding-bottom','20px'); formStatus();
					 	break;

				case $('#contname').val().length <= 3:
						$('#contresult').html('Name must be longer than 3 characters.').css('padding-bottom','20px'); formStatus();
						break;

				case $('#contemail').val() == '':
						$('#contresult').html('Please fill in your Email.').css('padding-bottom','20px'); formStatus();
						break;

				case !emailRegExp.test($('#contemail').val()):
						$("#contresult").html('Please enter a valid Email.').css('padding-bottom','20px'); formStatus();
						break;

				case $('#contphone').val() == '':
						$('#contresult').html('Please fill in your Contact Number.').css('padding-bottom','20px'); formStatus();
						break;

				case !telRegExp.test($('#contphone').val()):
						$("#contresult").html("Please enter a valid Contact Number.").css('padding-bottom','20px'); formStatus();
						break;

				case $('#contphone').val().length <= 5:
						$('#contresult').html('Contact Number must be more than 5 Numbers.').css('padding-bottom','20px'); formStatus();
						break;

				case $('#contmessage').val() == '':
						$('#contresult').html("Please fill in your Message.").css('padding-bottom','20px'); formStatus();
						break;

				default:
					var params = jQuery.param({
						subject: sub,
						name: name,
						email: email,
						tel : tel,
						message : msg
					});
					var result = encodeURIComponent(params);

					setTimeout(function() { 
						$.ajax({
							url: "https://www.cvcapt.com/EmailQueryString.aspx?request_type=e141i12l4nd&message=" + result,
						   	type: 'POST',
						   	data: result, 
						   	success: function(data){
							  //alert(result);
							  	var name = $('#contname').val();
							  	$('#contresult').css('display','none');
							  	$('#contsuccess').html("Thank you " + name + ". Your message has been sent.").css('padding','20px');
						   }
						});
						var form = document.getElementById('contactForm');
						// form.reset();
						return false;	
					}, 100); //setTimeout End
			}

		});
	}

	$ThDocument.contactSubmit();

	function formStatus() { $('.form_status').css({ display: 'none' }); }

});