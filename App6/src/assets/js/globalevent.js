
let d = $(document);
let ck = 'click';

$(function() {

	"use strict";

	let tShow = $('.toShow');
	let showLess = 'Show Less -';
	let showMore 'Show More +';

	$.fn.globalCl = function() {
		return this.on(ck, '*', function() {

			let ThEvent = $(this);


	}

	d.globalCl();

	leadsStatement();
});



function height969() {
	$('.bottomHomeGrid').removeAttr('style');
	$('.topHomeGrid').css({ height: '11vh' }).addClass('height969');
	$('.bottomHomeGrid').css({ height: '12.5vh' }).addClass('bheight969');

	$('.notes_Floor').css({ height: '61.5vh' });
	$('.columnState_Fl').css({ height: '50vh' }).addClass('colum969');
	$('.policyTemp .costumerRight, .policydetailTemp .costumerRight').css({ height: '81.6vh' });
	$('.policyTemp .costumerLeft:nth-child(3)').css({ height: '29.97vh' });
	$('.costumerDetails .costumerBoard .bottomForm .boxInp textarea').css({ height: '4vh' });
	$('.PoliciesLead_Fl').css({ height: '23.7vh' });
}

function height1008() {
	$('.topHomeGrid').css({ height: '13vh' }).removeClass('height969');
	$('.bottomHomeGrid').css({ height: '14.5vh '}).removeClass('bheight969');

	$('.notes_Floor').removeAttr('style');
	$('.policyTemp .costumerRight, .policydetailTemp .costumerRight').css({ height: '83.6vh' });
	$('.policyTemp .costumerLeft:nth-child(3)').css({ height: '33.9vh' });
	$('.costumerDetails .costumerBoard .bottomForm .boxInp textarea').css({ height: '7.5vh' });
	$('.PoliciesLead_Fl').css({ height: '27.9vh' });
	$('.columnState_Fl').css({ height: '51.8vh' }).addClass('colum1008');
}

function leadsStatement() {

	let maxGheight = 17.8; // 21.2
	let maxGHeight18 = 15; // 18.5
	let minGheight = 5;
	let topHGrid = $('.topHomeGrid');
	let bottHGrid = $('.bottomHomeGrid');

	if($('.topHomeGrid span').html() == 'POLICIES GRID LAYOUT' && $('.bottomHomeGrid span').html() != 'DUPLICATES GRID LAYOUT') {

		topHGrid.css({ height: minGheight + 'vh'});

		const bodyEnough = ($('body').hasClass('body1008')) ? bottHGrid.css({ height: maxGheight + 'vh' }) : bottHGrid.css({ height: maxGHeight18 + 'vh' });
		
		// if($('body').hasClass('body1008')) { 

		// 	bottHGrid.css({ height: maxGheight + 'vh' });
			
		// } else { bottHGrid.css({ height: maxGHeight18 + 'vh' }); }
		
	} else if($('.bottomHomeGrid span').html() == 'DUPLICATES GRID LAYOUT' && $('.topHomeGrid span').html() != 'POLICIES GRID LAYOUT') {

		const bodyEnoughBott = ($('body').hasClass('body1008')) ? topHGrid.css({ height: maxGheight + 'vh' }) : topHGrid.css({ height: maxGHeight18 + 'vh' });
		
		// if($('body').hasClass('body1008')) { 

		// 	topHGrid.css({ height: maxGheight + 'vh' });
			
		// } else { topHGrid.css({ height: maxGHeight18 + 'vh' }); }
		
		bottHGrid.css({ height: minGheight + 'vh' });
		
	} else { topHGrid.add(bottHGrid).removeAttr('style'); }
}