
$(function() {

	"use strict";

	$.ajax({

		type: 'GET',
		url: 'assets/js/newstemp.json',

		success: function(dataNews) { newsSlide.slideLoads(dataNews); }
	});


	let newsSlide = {

		slideLoads: function(dataNews) {

			let smarterSlide = '';
			for( var i in dataNews.snews ) {

				smarterSlide += '<li>' +
									'<span class="newsSlider" id="newsSmarter">' + dataNews.snews[i].msg + '</span>' + 
								'</li>';
			}

			$(smarterSlide).appendTo('.slider-list');

			let slides = $('.slider-list li');
			setInterval(function() {

			    let current = slides.filter('.current'),
			        next = current.next();

			    if (!next.length) { next = slides.first(); }
			    
			    slides.removeClass('off');
			    current.removeClass('current').addClass('off');
			    next.removeClass('off').addClass('current');

			}, 5000);
		}
	}

});