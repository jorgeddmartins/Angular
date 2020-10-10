
let TDoc = $(document);
let clickEvent = 'click';

let dobCalendarSlide = 'dobCalendar_Slide';
let calFl = 'cal_Fl';

let DaysTitle = 'Choose Your DOB Day';
let MonthsTitle = 'Choose Your DOB Month';
let YearsTitle = 'Choose Your DOB Year';

let monthVal;
let monthIdVal = monthVal = 0;

let yearDtVal;
let yearVal = yearDtVal = 1935;

let nowDate	= new Date();


;(function() {

	"use strict";


	$.ajax({

		type: 'GET',
		url: 'assets/js/dobCalendar.json',

		success: function(calendarData) { TDoc.DataCalandar(calendarData); $('.monthItem').monthItem(calendarData);}
	});


	let getThisDate = new Date();

	let addNull = function(i) { if(i < 10) { i = '0' + i; } return i; }
	let getTime = ' ' + '/' + ' ' + addNull(getThisDate.getMonth()) + ' ' + '/' + ' ' + getThisDate.getFullYear();
	let getMonth = getThisDate.getMonth();
	let getYear = getThisDate.getFullYear();
	let getDay = getThisDate.getDate();

	let mainCaldobTemp = $('<div>', { class: 'dob_Calendar calendarDOB1' }).appendTo('.calendarDOB');

	let mainCaldobTempIn = '<div class="' + dobCalendarSlide + '"></div>';
	$(mainCaldobTempIn).appendTo('.dob_Calendar');

	let caldboItemBox = '<div class="' + calFl + '"></div>';

	for( let i = 0; i < 3; i++) {

		$(caldboItemBox).appendTo('.dobCalendar_Slide');
	}
	$('.' + dobCalendarSlide + ' .' + calFl + ':nth-child(1)').addClass('days-dob-Cl');
	$('.' + dobCalendarSlide + ' .' + calFl + ':nth-child(2)').addClass('months-dob-Cl');
	$('.' + dobCalendarSlide + ' .' + calFl + ':nth-child(3)').addClass('years-dob-Cl');

	let calDTitle = '<span class="clDTitle"></span>';
	$(calDTitle).appendTo('.cal_Fl');

	$('.days-dob-Cl .clDTitle').html(DaysTitle);
	$('.months-dob-Cl .clDTitle').html(MonthsTitle);
	$('.years-dob-Cl .clDTitle').html(YearsTitle);


	let daySlider = $('<div>', { class: 'slideDay' }).css({ position: 'relative', float: 'left', width: '100%', background: '#fff', 'z-index': '100' }).appendTo('.days-dob-Cl');
	let monthSlider = $('<div>', { class: 'slideMonth' }).css({ position: 'relative', float: 'left', width: '100%', background: '#fff', 'z-index': '100' }).appendTo('.months-dob-Cl');
	let yearSlide = $('<div>', { class: 'slideYear' }).css({ position: 'relative', float: 'left', width: '700px', background: '#fff' }).appendTo('.years-dob-Cl');


	$.fn.DataCalandar = function(calendarData) {

		let itemDay = '';
		for( let i in calendarData.daysData ) {

			itemDay += '<span class="dayItem" data-date="' + calendarData.daysData[i].thisDay + '">' + calendarData.daysData[i].thisDay + '</span>';
		}

		$(itemDay).appendTo('.slideDay');

		let itemMonth = '';
		for( let m in calendarData.monthData ) {

			itemMonth += '<span class="monthItem">' + calendarData.monthData[m].thisMonth + '</span>';
		}

		$(itemMonth).appendTo('.slideMonth');

		let itemYear = '';
		for( let y in calendarData.yearData ) {

			itemYear += '<span class="yearItem" data-year="' + calendarData.yearData[y].thisYear + '">' + calendarData.yearData[y].thisYear + '</span>';
		}

		$(itemYear).appendTo('.slideYear');
	}


	$.fn.monthItem = function(calendarData) {
		return this.each(function() {

			let thisElm = $(this);
			let monthElm = '.month_';

			thisElm.addClass('month_' + monthVal).attr({ 'data-month': monthIdVal }); monthVal++; monthIdVal++;

			let thisMonth = thisElm.attr('data-month');

			switch(true) {

				case (thisMonth == 0 ):
					$(monthElm + 0).html('Jan');
					break;
				case (thisMonth == 1):
					$(monthElm + 1).html('Feb');
					break;
				case (thisMonth == 2):
					$(monthElm + 2).html('Mar');
					break;
				case (thisMonth == 3):
					$(monthElm + 3).html('Apr');
					break;
				case (thisMonth == 4):
					$(monthElm + 4).html('May');
					break;
				case (thisMonth == 5):
					$(monthElm + 5).html('Jun');
					break;
				case (thisMonth == 6):
					$(monthElm + 6).html('Jul');
					break;
				case (thisMonth == 7):
					$(monthElm + 7).html('Aug');
					break;
				case (thisMonth == 8):
					$(monthElm + 8).html('Sep');
					break;
				case (thisMonth == 9):
					$(monthElm + 9).html('Oct');
					break;
				case (thisMonth == 10):
					$(monthElm + 10).html('Nov');
					break;
				case (thisMonth == 11):
					$(monthElm + 11).html('Dec');
					break;
			}

		});
	}


	let slideToGo = $('<div>', { class: 'slideToGo'} ).appendTo('.cal_Fl');

	let slideToGoIn = '<span class="linkTo"></span><span class="linkTo"></span><span class="linkTo"></span><span class="linkTo"></span>';
	$(slideToGoIn).appendTo('.slideToGo');

	$('.days-dob-Cl .slideToGo .linkTo:nth-child(2)').html('Choose Month').addClass('daYMonth');
	$('.days-dob-Cl .slideToGo .linkTo:nth-child(3)').html('Choose Year').addClass('daYYear');

	$('.months-dob-Cl .slideToGo .linkTo:nth-child(2)').html('Choose Day').addClass('MonthDay');
	$('.months-dob-Cl .slideToGo .linkTo:nth-child(3)').html('Choose Year').addClass('MonthYear');

	$('.years-dob-Cl .slideToGo .linkTo:nth-child(1)').html('<').addClass('LessYear');
	$('.years-dob-Cl .slideToGo .linkTo:nth-child(2)').html('Choose Day').addClass('YearDay');
	$('.years-dob-Cl .slideToGo .linkTo:nth-child(3)').html('Choose Month').addClass('YearMonth');
	$('.years-dob-Cl .slideToGo .linkTo:nth-child(4)').html('+').addClass('PlusYear');

	let todayTime = $('<span>', { class: 'TodayTime' });
	$('.slideToGo').after(todayTime);

	let slideGo = $('.slideYear');
	let GoRight = $('.PlusYear');
	let GoLeft = $('.LessYear');
	let GoSpeed = 400;
	let limitRun = '295px';
	let limitStop = '-295';
	let limitStopL = '0';

	$('.LessYear').css({ 'pointer-events': 'none', color: '#fff'});

	$.fn.extend({

		runGoRight: function() {
			return this.on('click', '.PlusYear', function(e) {

				slideGo.animate({ left: '-=' + limitRun }, GoSpeed, function() {

					if (slideGo.position().left <= limitStop) {

	                    GoRight.addClass('stop');
	                    GoRight.css({ 'pointer-events': 'none', color: '#fff' });
	                }

	                GoLeft.removeClass('stop').removeAttr('style');

				});
			});
		},

		runGoLeft: function() {
			return this.on('click', '.LessYear', function(e) {

				slideGo.animate({ left: '+=' + limitRun }, GoSpeed, function() {

					if(slideGo.position().left >= limitStopL) {

						GoLeft.addClass('stop');
	                    GoLeft.css({ 'pointer-events': 'none', color: '#fff' });
					}

					GoRight.removeClass('stop').removeAttr('style');

				});
			});
		}
	});

	$(document).runGoRight().runGoLeft();

	//let ThValNull = function(event) { if( event < 10 ) { event = '0' + event } return event; }

	let ThValNull = function(event) {

		const thCon = ( event < 10 ) ? event = '0' + event : event = '' + event;
		return event;
	}

	$.fn.dobCalendar = function() {
		return this.on(clickEvent, '*', function() {

			switch(true) {

				case ($(this).hasClass('datepicker1_Fl')):
					$('.calendarDOB1, .dobC_Fl').fadeIn(300);
					$('.DOBcl').addClass('boxClZIn');

					let TDTime = $('.TodayTime');

					var getNowDay = ThValNull(nowDate.getDate());
					var getNowMonth = nowDate.getMonth();
					var nowYear	= nowDate.getFullYear();

					let thisDateNow = getNowDay + '/' + getNowMonth + '/' + nowYear;

					TDTime.html(thisDateNow);

					if(TDTime.html() == getNowDay + '/' + 0 + '/' + nowYear) {

						TDTime.html(getNowDay + ' ' + ' ' + 'January' + ' ' + ' ' + nowYear);
					}
					else if(TDTime.html() == getNowDay + '/' + 1 + '/' + nowYear) {

						TDTime.html(getNowDay + ' ' + ' ' + 'February' + ' ' + ' ' + nowYear);
					}
					else if(TDTime.html() == getNowDay + '/' + 2 + '/' + nowYear) {

						TDTime.html(getNowDay + ' ' + ' ' + 'March' + ' ' + ' ' + nowYear);
					}
					else if(TDTime.html() == getNowDay + '/' + 3 + '/' + nowYear) {

						TDTime.html(getNowDay + ' ' + ' ' + 'April' + ' ' + ' ' + nowYear);
					}
					else if(TDTime.html() == getNowDay + '/' + 4 + '/' + nowYear) {

						TDTime.html(getNowDay + ' ' + ' ' + 'May' + ' ' + ' ' + nowYear);
					}
					else if(TDTime.html() == getNowDay + '/' + 5 + '/' + nowYear) {

						TDTime.html(getNowDay + ' ' + ' ' + 'June' + ' ' + ' ' + nowYear);
					}
					else if(TDTime.html() == getNowDay + '/' + 6 + '/' + nowYear) {

						TDTime.html(getNowDay + ' ' + ' ' + 'July' + ' ' + ' ' + nowYear);
					}
					else if(TDTime.html() == getNowDay + '/' + 7 + '/' + nowYear) {

						TDTime.html(getNowDay + ' ' + ' ' + 'August' + ' ' + ' ' + nowYear);
					}
					else if(TDTime.html() == getNowDay + '/' + 8 + '/' + nowYear) {

						TDTime.html(getNowDay + ' ' + ' ' + 'September' + ' ' + ' ' + nowYear);
					}
					else if(TDTime.html() == getNowDay + '/' + 9 + '/' + nowYear) {

						TDTime.html(getNowDay + ' ' + ' ' + 'October' + ' ' + ' ' + nowYear);
					}
					else if(TDTime.html() == getNowDay + '/' + 10 + '/' + nowYear) {

						TDTime.html(getNowDay + ' ' + ' ' + 'November' + ' ' + ' ' +nowYear);
					}
					else if(TDTime.html() == getNowDay + '/' + 11 + '/' + nowYear) {

						TDTime.html(getNowDay + ' ' + ' ' + 'December' + ' ' + ' ' + nowYear);
					}
					break;

				case ($(this).hasClass('dobC_Fl')):
					$(this).fadeOut(300);
					$('.calendarDOB1').fadeOut(300);
					$('.DOBcl').removeClass('boxClZIn');
					break;
			}
		});
	}

	$('#dobDatepicker1Customer').css({ width: '82%', 'padding-right': '7px' });


	$.fn.globalCl = function() {

		return this.on(clickEvent, '*', function() {

			let thisdataDay = $('.dobDay');
			let thisdataMonth = $('.dobMonth');
			let thisdataYear = $('.dobYear');
			let slaSh =  '/';

			let nowDay = ((nowDate.getDate().toString().length) == 1) ? '0' + (nowDate.getDate()) : (nowDate.getDate());
			let getNowDay = nowDate.getDate();
			let nowMonth = ((nowDate.getMonth().toString().length) == 1) ? '0' + (nowDate.getMonth() + 1) : (nowDate.getMonth() + 1);
			let getNowMonth = nowDate.getMonth();
			let nowYear	= nowDate.getFullYear();
			let nowTime = ThValNull(nowDate.getHours()) + ":" + ThValNull(nowDate.getMinutes());
			let nowMinute = ThValNull(nowDate.getMinutes());
			let formatDate	= nowDay + "/" + nowMonth + "/" + nowYear + " " + nowTime;
			let formDateTimer = nowDay + "/" + nowMonth + "/" + nowYear;
			let halfDate = "/" + nowMonth + "/" + nowYear + " " + nowTime;
			let nowHour = ThValNull(nowDate.getHours());

			switch(true) {

				case ($(this).hasClass('daYMonth')):
					$('.dobCalendar_Slide').addClass('goDay300').removeClass('goDay600 goMonth600 goMonth300 goYear600 goYear300');
					break;

				case ($(this).hasClass('daYYear')):
					$('.dobCalendar_Slide').addClass('goDay600').removeClass('goDay300 goMonth300 goMonth600 goYear600 goYear300');
					break;

				case ($(this).hasClass('MonthDay')):
					$('.dobCalendar_Slide').addClass('goMonth300').removeClass('goMonth600 goDay600 goDay300 goYear600 goYear300');
					break;

				case ($(this).hasClass('MonthYear')):
					$('.dobCalendar_Slide').addClass('goMonth600').removeClass('goMonth300 goDay300 goDay600 goYear600 goYear300');
					break;

				case ($(this).hasClass('YearDay')):
					$('.dobCalendar_Slide').addClass('goYear300').removeClass('goMonth300 goMonth600 goDay300 goDay600 goYear600');
					break;

				case ($(this).hasClass('YearMonth')):
					$('.dobCalendar_Slide').addClass('goYear600').removeClass('goMonth300 goMonth600 goDay300 goDay600 goYear300');
					break;

				case ($(this).hasClass('dayItem')):
					if( thisdataDay.val() == '' && thisdataMonth.val() == '' && thisdataYear.val() == '' ) {

						$(this).addClass('selected');

						$('.dobDay').val(ThValNull($(this).html()) + slaSh);
						$('.dobMonth').val(getNowMonth + slaSh);
						$('.dobYear').val(nowYear);
						displayMonths();
					}
					else if( thisdataDay.val() !== '' && thisdataMonth.val() !== '' && thisdataYear.val() !== '') {
						$('.dobDay').val(ThValNull($(this).html()) + slaSh);
						$('.dayItem').removeClass('selected');
						$(this).addClass('selected');
					}
					break;

				case ($(this).hasClass('monthItem')):
					if( thisdataDay.val() == '' && thisdataMonth.val() == '' && thisdataYear.val() == '' ) {
						$('.dobDay').val(ThValNull(getNowDay) + slaSh);
						$('.dobMonth').val($(this).html() + slaSh);
						$('.dobYear').val(nowYear);

						$(this).addClass('selected');
					} 
					else if(thisdataDay.val() !== '' && thisdataMonth.val() !== '' && thisdataYear.val() !== '') {
						$('.dobMonth').val($(this).html() + slaSh);
						$('.monthItem').removeClass('selected');
						$(this).addClass('selected');
					}
					break;

				case ($(this).hasClass('yearItem')):
					if( thisdataDay.val() == '' && thisdataMonth.val() == '' && thisdataYear.val() == '' ) {
						$('.dobDay').val(ThValNull(getNowDay) + slaSh);
						$('.dobMonth').val(getNowMonth + '/');
						$('.dobYear').val($(this).html());

						$(this).addClass('selected');
						displayMonths();
					}
					else if(thisdataDay.val() !== '' && thisdataMonth.val() !== '' && thisdataYear.val() !== '') {
						$('.dobYear').val($(this).html());
						$('.yearItem').removeClass('selected');
						$(this).addClass('selected');
					}
					break;
			}
		});
	}

	TDoc.dobCalendar().globalCl();

	// $.fn.dobDatepicker1Customer = function() {

	// 	let thisdataDay = $('.dobDay');
	// 		let thisdataMonth = $('.dobMonth');
	// 		let thisdataYear = $('.dobYear');

	// 	return this.each(function() {

	// 		$(this).val(thisdataDay.val() + thisdataMonth.val() + thisdataYear.val());

	// 	});
	// }

	// $('.dobDatepicker1Customer').dobDatepicker1Customer();

	// $('form[name="test"]').submit(function(e) {
	//     e.preventDefault();
	//     var inputValue = $('input[name="foo"]').val();
	//     $('input[name="bar"]').val(inputValue).trigger('change');
	// });

	// $('input[name="bar"]').change(function() {
	//     var hiddenValue = $(this).val();
	//     $('#result').text('hidden input value is ' + hiddenValue);
	// });

})();

function displayMonths() {

	let thisdataMonth = $('.dobMonth');
	let getNowMonth = nowDate.getMonth();
	let slaSh =  '/';

	if( getNowMonth == 0 ) { thisdataMonth.val('Jan' + slaSh); }
	else if( getNowMonth == 1 ) { thisdataMonth.val('Feb' + slaSh); }
	else if( getNowMonth == 2 ) { thisdataMonth.val('Mar' + slaSh); }
	else if( getNowMonth == 3 ) { thisdataMonth.val('Apr' + slaSh); }
	else if( getNowMonth == 4 ) { thisdataMonth.val('May' + slaSh); }
	else if( getNowMonth == 5 ) { thisdataMonth.val('Jun' + slaSh); }
	else if( getNowMonth == 6 ) { thisdataMonth.val('Jul' + slaSh); }
	else if( getNowMonth == 7 ) { thisdataMonth.val('Aug' + slaSh); }
	else if( getNowMonth == 8 ) { thisdataMonth.val('Sep' + slaSh); }
	else if( getNowMonth == 9 ) { thisdataMonth.val('Oct' + slaSh); }
	else if( getNowMonth == 10 ) { thisdataMonth.val('Nov' + slaSh); }
	else if( getNowMonth == 11 ) { thisdataMonth.val('Dec' + slaSh); }
}