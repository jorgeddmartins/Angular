
let d = $(document);
let ck = 'click';

$(function() {

	"use strict";

	let saletypesUrl = 'assets/js/salespersontypes.json';

	$.ajax({

		type: 'GET',
		url: saletypesUrl,
		dataType: 'json',

		success: function(data) { d.salesPTY(data) }

	});

	$.fn.salesPTY = function(data) {

		let SpTYpes = '';
		for( let t in data.saletypesDta ) {

			SpTYpes += '<div class="TrBody">' +
							'<span class="TdBody salestypesGridWidth"><input type="text" class="EditInputtypes" value="' + data.saletypesDta[t].nameT + '" /></span>' +
							'<span class="TdBody salestypesGridWidth"><input type="text" class="EditInputtypes" value="' + data.saletypesDta[t].Llimit + '" /></span>' +
						'</div>';
		}

		$(SpTYpes).appendTo('#StBodySalePersonTypes');
		$('#StBodySalePersonTypes .TrBody:odd').css({ background: '#f9f9f9' });
	}

	$.fn.AddNewRecord = function() {
		return this.on(ck, '.addNRecBtn', function() {

			let AddNeGRecord = '<div class="TrBody">' +
									'<span class="TdBody salestypesGridWidth"><input type="text" class="EditInputtypes" /></span>' +
									'<span class="TdBody salestypesGridWidth"><input type="text" class="EditInputtypes" /></span>' +
								'</div>';

			$('.addNew').after(AddNeGRecord);

			$('#StBodySalePersonTypes .TrBody:odd').css({ background: '#f9f9f9' });
			$('#StBodySalePersonTypes .TrBody:even').css({ background: '#fff' });
		});
	}
	d.AddNewRecord();

});