
//$(function() {

	// Update Header Clock
	function updateClock () {
	 	let currentTime = new Date();
	  	let currentHours = currentTime.getHours();
	  	let currentMinutes = currentTime.getMinutes();
	  	let currentSeconds = currentTime.getSeconds();

	  	currentHours = ( currentHours < 10 ? "0" : "" ) + currentHours;
	  	currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
	  	currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;

	  	let timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";
	  	currentHours = ( currentHours > 24 ) ? currentHours - 24 : currentHours;
	  	currentHours = ( currentHours == 0 ) ? 24 : currentHours;
	  	//let currentTimeString = currentHours + ":" + currentMinutes + ':' + currentSeconds;
	  	let currentTimeString = currentHours + ":" + currentMinutes;
	  	
	   	$(".LocalDateTime .hours").html(currentTimeString);	  
	}

	// pdate Screen Heights
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

		//$('.notes_Floor').css({ height: '61.5vh' });

		$('.policyTemp .costumerRight, .policydetailTemp .costumerRight').css({ height: '83.6vh' });
		$('.policyTemp .costumerLeft:nth-child(3)').css({ height: '33.9vh' });
		$('.costumerDetails .costumerBoard .bottomForm .boxInp textarea').css({ height: '7.5vh' });
		$('.PoliciesLead_Fl').css({ height: '27.9vh' });
		$('.columnState_Fl').css({ height: '51.8vh' }).addClass('colum1008');
		// $('.calls_Floor').css({ height: '84vh' });
	}

	// Grid Leads For The Lead Screen
	function leadsStatement() {

		let maxGheight = 17.8; // 21.2
		let maxGHeight18 = 15; // 18.5
		let minGheight = 5;
		let topHGrid = $('.topHomeGrid');
		let bottHGrid = $('.bottomHomeGrid');

		if($('.topHomeGrid span').html() == 'POLICIES GRID LAYOUT' && $('.bottomHomeGrid span').html() != 'DUPLICATES GRID LAYOUT') {

			topHGrid.css({ height: minGheight + 'vh'});

			const bodyEnough = ($('body').hasClass('body1008')) ? bottHGrid.css({ height: maxGheight + 'vh' }) : bottHGrid.css({ height: maxGHeight18 + 'vh' });

			$('.bottomHomeGrid').removeClass('bothUp') 
			
		} else if($('.bottomHomeGrid span').html() == 'DUPLICATES GRID LAYOUT' && $('.topHomeGrid span').html() != 'POLICIES GRID LAYOUT') {

			const bodyEnoughBott = ($('body').hasClass('body1008')) ? topHGrid.css({ height: maxGheight + 'vh' }) : topHGrid.css({ height: maxGHeight18 + 'vh' });
			
			bottHGrid.css({ height: minGheight + 'vh' });
			$('.bottomHomeGrid').removeClass('bothUp') 
			
		} else { 

			topHGrid.add(bottHGrid).removeAttr('style')
			$('.bottomHomeGrid').addClass('bothUp') 
		}
	}

	// Screens Go 100% When there's no Task Section in the Right
	function SmarterWith() {
		$('.taskSection').hide();
		$('.downRightHeader').show();
		$('.SmarterSection').addClass('SmarterSectionWith');
		$('.rightBtnsPg').hide();

		if($('body').hasClass('body1008')) { height1008();

		} else if($('body').hasClass('body969')) { height969(); }
	}

//});