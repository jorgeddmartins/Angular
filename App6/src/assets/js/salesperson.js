
let d = $(document);
let ck = 'click';

$(function() {

	"use strict";

	let SalesUrl = 'assets/js/salesperson.json';

	$.ajax({

		type: 'GET',
		url: SalesUrl,
		dataType: "json",

		success: function(salesPData) { d.SalesPer(salesPData) }

	});

	$.fn.SalesPer = function(salesPData) {
		let salesBodyTr = '';
		for( let s in salesPData.salesPerson ) {

			salesBodyTr += '<div class="TrBody">' +
								'<span class="TdBody salesGWith">' + salesPData.salesPerson[s].fname + '</span>' +
								'<span class="TdBody salesGWith">' + salesPData.salesPerson[s].lname + '</span>' +
								'<span class="TdBody salesGWith">' + salesPData.salesPerson[s].type + '</span>' +
								'<span class="TdBody salesGWith">' + salesPData.salesPerson[s].leadcount + '</span>' +
								'<span class="TdBody salesGWith">' + salesPData.salesPerson[s].total + '</span>' +
						   '</div>';
		}
		$(salesBodyTr).appendTo('#StBodySalePerson');

		$('#StBodySalePerson .TrBody:odd').css({ background: '#f9f9f9' });
		$("#StBodySalePerson").mCustomScrollbar({ theme:"dark-3", scrollInertia: 50 });
	}

	$.fn.currentNum = function() {
		return this.on(ck, '.currentP', function() {

			$('.currentP').removeClass('SelectedFoot');
			$(this).addClass('SelectedFoot');
		});
	}
	d.currentNum();

});


// Search Element
function saleSearch(element) {
    let value = $(element).val();

    $.fn.SalesCall = function() {
	    return this.each(function() {
	    	let ElmTh = $(this);
	    	const ThisCall = ElmTh.text().search(new RegExp(value, "i")) > -1 ? ElmTh.show() : ElmTh.hide();
        });
    }
    $("#StBodySalePerson .TrBody").SalesCall();
}