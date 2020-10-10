

;(function() {

	"use strict"


	$.ajax({

		type: 'GET',
		url: 'assets/js/resetThemes/document-DC.json',

		success: function(data) { runDta.thisFirst(data); }
	});


	$('.r-Section').remove();
	$('.Content_In').css({

		background: '#fff',
		height: '100vh'
	});

	$('._In_' + nullVal + '').addClass('doC_Theme');

	var $edoc = $thisDocument;


	var runDta = {

		thisFirst: function(data) {

			var pFirst = '';

			for( var i in data.documentFirst ) { 

				pFirst += '<p class="firstP">' + data.documentFirst[i].dataFisrt + '</p>' +
						  '<p class="secondP">' + data.documentFirst[i].dataSecond + '</p>' + 
						  '<p class="thirdP">' + data.documentFirst[i].dataThird + '</p>';

			}

			$('h1').after(pFirst);
		}
	}


	$.fn.extend({

		documentDC: function(doCT) {

			var tiTleDoc = doCT;
			// var firstP = fisP;

			$(tiTleDoc).css({

				'text-align': 'center',
				'text-transform': 'uppercase',
				'font-size': '30px'

			}).html('Document DC').appendTo('.doC_Theme .Content_In');
		}

	});



	$edoc.documentDC($('<h1/>'));

})();