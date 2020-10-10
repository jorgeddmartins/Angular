
// Document Element
let d = $(document);

$(function() {

	"use strict";

	// Auto Complete Search
	$.fn.autoThisSearch = function() {
		return this.on('keyup', '.auto-search', function() {

			const valThis = this.value;
  			const length  = this.value.length;

  			$.fn.extend({
  				thisLogs: function() {
  					return this.each(function() {

  						const text  = $(this).text();
				    	const textL = text.toLowerCase();
				    	const position = textL.indexOf(valThis.toLowerCase());

					    if(position !== -1) {

					      	const matches = text.substring(position, (valThis.length + position));
					      	const regex = new RegExp(matches, 'ig');
					      	const highlighted = text.replace(regex, `<span class="mHighl">${matches}</span>`);

					      	$(this).html(highlighted).show();

					    } else {

					    	$(this).text(text)
					    	$(this).hide() 
					    }

  					});
  				}
  			});

  			$('#LogHistory .objType').thisLogs();

  			// if(!this.value) { $('.mHighl').remove(); }
  			const rVal = !this.value ? $('.mHighl').remove() : '';
		});
	}

	d.autoThisSearch();

});