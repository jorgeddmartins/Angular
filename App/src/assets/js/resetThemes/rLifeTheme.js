
var runScroll = false; // if true the page will have a JQuery Scroll

;(function() {

	"use strict"

	var $edoc = $thisDocument;
	var inDiv = $('<div/>')

	$.fn.extend({

		UmTheme: function(headerTh) {

			var headerTh = headerTh; 

			$('.Content_In, nav').remove();

			$('._In_' + nullVal + '').addClass('UmbTheme').attr({

				id: 'BlockTheme',
				role: 'Theme'

			});

			$('.r-Header').addClass(headerTh);

			$(thisDiv).appendTo('.' + headerTh + '').addClass('container');
			$(inDiv).appendTo('.container').addClass('logoBox');

			$('.secTemp_' + nullVal + '').addClass('heroTheme');


			if(runScroll == false) { $('.UmbTheme').removeAttr('id');

			} else if(runScroll == true) { $('body').css({

					overflow: 'hidden'

				});
			}
		}

	});

	$edoc.UmTheme('ThemeHeader');


})();
