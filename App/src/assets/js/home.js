
let $clickEvent = 'click';
let $thisDocument = $(document);

$(function() {

	"use strict"

	$.fn.extend({

		boxUser: function() {
			return this.on($clickEvent, '.box-usern', function() { 

				$('label', this).addClass('user-login-sc'); 
			});
		},
		inuserF: function() {
			return this.on('focus', '.in-user', function() { $('.user-login').addClass('user-login-sc');

				if($('#in-pass').val() == '') { $('.pass-login').removeClass('user-login-sc'); }
			});
		},
		inpassF: function() {
			return this.on('focus', '.in-pass', function() { $('.pass-login').addClass('user-login-sc');

				if($('#in-user').val() == '') { $('.user-login').removeClass('user-login-sc'); }
			});
		},
		goLeads: function() {
			return this.on($clickEvent, '.goInL', function() { $('.errorMsg').show();

				if($('#in-user').val() == 'jmartins' && $('#in-pass').val() == 'password') {

					// $(this).attr({ routerLink: '/leads', href: '/leads'});

			       	$('.errorMsg').hide();
                            
			    }
			});
		}

	});

	$thisDocument.boxUser()
	$thisDocument.inuserF()
	$thisDocument.inpassF()
	$thisDocument.goLeads();

	if ($('input#in-user').val().length == 0) {
	    $('.user-login').addClass('user-login-sc');
	}

	if ($('input#in-pass').val().length == 0) {
	    $('.pass-login').addClass('user-login-sc');
	}


	window.runLogin = {};

    $.randomQinex = {
        defaults: {

            loginqxpath: 'assets/img/slider/slide/', // Set the Folder images path

            qinexImages: ['r1.jpg', 'r2.jpg', 'r3.jpg', 'r4.jpg', 'r5.jpg', 'r6.jpg', 'r7.jpg', 'r8.jpg', 'r9.jpg', 'r10.jpg'] // Images to Run on the Background of the path folder
        }
    };
    
    $.fn.extend({
        loginQinex: function(data) {
            var dataconfig = $.extend({}, $.randomQinex.defaults, dataconfig);
            
            return this.each(function() {
                var imageNames = dataconfig.qinexImages,
                
                imageNamesSize = imageNames.length,
                
                quinexback = Math.floor(Math.random() * imageNamesSize),
                imagesbackQinex = imageNames[quinexback],
                qinexPath = dataconfig.loginqxpath + imagesbackQinex;
                
                $(this).attr({ src: qinexPath, alt: imagesbackQinex });
            }); 
        }
    });

    $('.overlay_back').append('<img/>');

	$('img').loginQinex();

});
