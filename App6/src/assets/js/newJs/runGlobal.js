
$(function() {

	"use strict";


	function runGl() { this.rGlobal(); }

	// Global Prototype To run
	$.extend( runGl.prototype, {

		// Global Prototype Function
		rGlobal: function() {

			$('.SmarterSection').smarterGlobal({});
		}

	});

	// Rund Main Function
	let rnG = runGl();


});