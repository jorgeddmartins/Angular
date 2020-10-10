
let d = $(document);
let ck = 'click';

$(function() {

	"use strict";

	let mLeadsUrl = 'assets/js/myleads.json';

	$.ajax({

		type: 'GET',
		url: mLeadsUrl,

		success: function(myleadsData) { d.MyLeadsGrid(myleadsData) }

	});


	$.fn.MyLeadsGrid = function(myleadsData) {

		let myleadsHead = '';
		for( let m in myleadsData.myleadsHeader ) {

			myleadsHead += '<span class="ThHeader">' + myleadsData.myleadsHeader[m].name + '</span>';
		}
		$(myleadsHead).appendTo('.mypoliciesTemp .AllPolHeader')

		let myLeadsEd = '';
		for( let l in myleadsData.myLeadsEdit ) {

			myLeadsEd += '<span class="headerInpBox ' + myleadsData.myLeadsEdit[l].wClasstop + '" id="myLeads_' + myleadsData.myLeadsEdit[l].id + '"><input type="text" class="gridSearchIn ' + myleadsData.myLeadsEdit[l].wClass + '" id="' + myleadsData.myLeadsEdit[l].idEdit + '" /></span>';
		}
		$(myLeadsEd).appendTo('.mypoliciesTemp .HeaderSearch')
	}

});