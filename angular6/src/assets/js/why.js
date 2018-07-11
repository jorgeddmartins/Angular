
$(function() {

	"use strict"


	$.ajax({

		type: 'GET',
		url: 'assets/js/why.json',

		success: function(data) { ItemWhy.loadItem(data); }

	});


	let ItemWhy = {

		loadItem: function(data) {

			let ItemsW = '';

			for( let i in data.ItemsW ) {

				ItemsW += '<div class="item">' +
								'<div class="slider-inner">' +
									'<div class="container">' +
										'<div class="row animated fadeInRight">' +
											'<div class="col-sm-2"><img src="' + data.ItemsW[i].imgIt + '" class="img-responsive"></div>' +
											'<div class="col-sm-10">' +
												'<div class="carousel-content">' +
													'<h2><span>' + data.ItemsW[i].hSpan + '</span> ' + data.ItemsW[i].HItem + '</h2>' +
													'<p>' + data.ItemsW[i].textIt + '</p>' +
												'</div>' +
											'</div>' +
										'</div>' +
									'</div>' +
								'</div>' +
						  '</div>';
			}

			$(ItemsW).appendTo('#whyItems');


			let itemVal = 0;
			$.fn.item = function() {

				return this.each(function() { $(this).addClass('Item_' + itemVal); itemVal++; });
			}

			$('.whyItem .item').item();

			let hrTemp = $('<hr/>');
			let ItemTm = $('.Item_0, .Item_1, .Item_2');

			$(ItemTm).after(hrTemp);

		}
	}

});