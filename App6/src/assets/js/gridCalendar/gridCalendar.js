
let d = $(document);
let ck = 'click';
let drag = 'drag';
let GridCalen = $("#GridCalen, #GridCalenPolicy");
let zIndexDrag = 'inpZx'; 

$(function() {

	"use strict";
	
	$.fn.RunCalend = function() {

		let getThisZero = function(event) { 
	       const getThFunc = event < 10 ? event = '0' + event : event = '' + event;
	       return event;
	    }

		let getThisDate = new Date();
		let getTime = ' ' + '/' + ' ' + getThisZero(getThisDate.getMonth()) + ' ' + '/' + ' ' + getThisDate.getFullYear();
		let getMonth = getThisDate.getMonth();
		let getYear = getThisDate.getFullYear();
		let getDay = getThisDate.getDate();
	    let nowMinute = getThisZero(getThisDate.getMinutes());
	    let nowHour = getThisZero(getThisDate.getHours());

	    let ThisDiv = '<div/>';
	    let calendPlat = '.CalendPlat';

	    let PathProtocol = 'http://';
		let PathHost = 'localhost:4232/';
		let WinLocation = window.location.href;

		let GridCalendUrl = 'assets/js/gridCalendar/gridCalendar.json';

	    const CalendPlat = $(ThisDiv, { class: 'CalendPlat' }).appendTo('.GridCalendar');
	    const DaysTemp = $(ThisDiv, { class: 'Days_B' })
	    		.appendTo(calendPlat).append( $(ThisDiv, { class: 'Slide_Day' }) );
	    const MonthsTemp = $('<div/>', { class: 'Months_B' })
	    		.appendTo(calendPlat).append( $(ThisDiv, { class: 'Slide_Month' }) );
	    const YearsTemp = $('<div/>', { class: 'Years_B' })
	    		.appendTo(calendPlat).append( $(ThisDiv, { class: 'Slide_Year' }) );
	    const TodayDate = $('<span/>', { class: 'TodaysDate' }).html(getThisZero(getDay) + ' / ' + getMonth + ' / ' + getYear).appendTo('.GridCalendar');

	    let calenPl = '.CalendPlat';
	    let calenPo = 'CalendPot';
	    let calenPoli = 'CalendPolicy';

	    $.fn.RoutingCalend = function() {
		    return this.on(ck, '*', function() {

		    	// LeadPot Screen
	        	const LeadPot = $(this).hasClass('Leadpot') ? $(calenPl).addClass(calenPo).removeClass(calenPoli) : '';

	        	// All Policies Screen
	        	const Allpolicies = $(this).hasClass('allpolicies') ? $(calenPl).removeClass(calenPo).addClass(calenPoli) : '';

	        	// My Leads
	        	const MyLeads = $(this).hasClass('myleads') ? $(calenPl).removeClass(calenPo).addClass(calenPoli) : '';

	        	// Pre Save Policies
	        	const Presave = $(this).hasClass('presavepolicies') ? $(calenPl).removeClass(calenPo).addClass(calenPoli) : '';

	        	// Pre Cancellation Policies
	        	const Precancellation = $(this).hasClass('precancellation') ? $(calenPl).removeClass(calenPo).addClass(calenPoli) : '';

	        	// On Risk Policies
	        	const OnRiskPolicies = $(this).hasClass('onriskpolicies') ? $(calenPl).removeClass(calenPo).addClass(calenPoli) : '';

	        	// Tasks
	        	const Tasks = $(this).hasClass('tasks') ? $(calenPl).removeClass(calenPo).addClass(calenPoli) : '';

		    });
		}
		d.RoutingCalend();

		// Render LeadPot Calendar
	    const LeadPotLocation = WinLocation === PathProtocol + PathHost + '#/leadpot' ? $(calenPl).addClass(calenPo).removeClass(calenPoli) : '';

	    // Render All Policies Calendar
		const AllpoliciesLocation = WinLocation === PathProtocol + PathHost + '#/allpolicies' ? $(calenPl).removeClass(calenPo).addClass(calenPoli) : '';

		// Render MyLeads Calendar
		const MyLeadsLocation = WinLocation === PathProtocol + PathHost + '#/myleads' ? $(calenPl).removeClass(calenPo).addClass(calenPoli) : '';

		// Render Pre Save Policies Calendar
		const PreSaveLocation = WinLocation === PathProtocol + PathHost + '#/presavepolicies' ? $(calenPl).removeClass(calenPo).addClass(calenPoli) : '';

		// Render Pre Save Policies Calendar
		const PreCancellationLocation = WinLocation === PathProtocol + PathHost + '#/precancellation' ? $(calenPl).removeClass(calenPo).addClass(calenPoli) : '';

		// Render On Risk Policies Calendar
		const OnRiskLocation = WinLocation === PathProtocol + PathHost + '#/onriskpolicies' ? $(calenPl).removeClass(calenPo).addClass(calenPoli) : '';

		// Render Tasks Calendar
		const TasksLocation = WinLocation === PathProtocol + PathHost + '#/tasks' ? $(calenPl).removeClass(calenPo).addClass(calenPoli) : '';



	 	let tdDate = $('.TodaysDate');

	    if(getMonth == 0) { tdDate.html(getThisZero(getDay) + ' / ' + 'January' + ' / ' + getYear);
	    } else if(getMonth == 1) { tdDate.html(getThisZero(getDay) + ' / ' + 'February' + ' / ' + getYear);
	    } else if(getMonth == 2) { tdDate.html(getThisZero(getDay) + ' / ' + 'March' + ' / ' + getYear);
	    } else if(getMonth == 3) { tdDate.html(getThisZero(getDay) + ' / ' + 'April' + ' / ' + getYear);
	    } else if(getMonth == 4) { tdDate.html(getThisZero(getDay) + ' / ' + 'May' + ' / ' + getYear);
	    } else if(getMonth == 5) { tdDate.html(getThisZero(getDay) + ' / ' + 'June' + ' / ' + getYear);
	    } else if(getMonth == 6) { tdDate.html(getThisZero(getDay) + ' / ' + 'July' + ' / ' + getYear);
	    } else if(getMonth == 7) { tdDate.html(getThisZero(getDay) + ' / ' + 'August' + ' / ' + getYear);
	    } else if(getMonth == 8) { tdDate.html(getThisZero(getDay) + ' / ' + 'September' + ' / ' + getYear);
	    } else if(getMonth == 9) { tdDate.html(getThisZero(getDay) + ' / ' + 'October' + ' / ' + getYear);
	    } else if(getMonth == 10) { tdDate.html(getThisZero(getDay) + ' / ' + 'November' + ' / ' + getYear);
	    } else if(getMonth == 11) { tdDate.html(getThisZero(getDay) + ' / ' + 'December' + ' / ' + getYear); }


	    $.ajax({

	    	type: 'GET',
	    	url: GridCalendUrl,

	    	success: function(calendarData) { d.calendarDt(calendarData) }
	    });

	    $.fn.calendarDt = function(calendarData) {

	    	let daysItems = '';
	    	for( let d in calendarData.gridDays ) {

	    		daysItems += '<span class="DayB_Item Day-' + calendarData.gridDays[d].dayitem + '" data-date="' + calendarData.gridDays[d].dayitem + '">' + calendarData.gridDays[d].dayitem + '</span>';
	    	}
	    	$(daysItems).appendTo('.Slide_Day');

	    	let monthsItems = '';
	    	for( let m in calendarData.gridMonths ) {

	    		monthsItems += '<span class="MonthB_Item Month-' + calendarData.gridMonths[m].datamonth + '" data-month="' + calendarData.gridMonths[m].datamonth + '">' + calendarData.gridMonths[m].monthitem + '</span>';
	    	}
	    	$(monthsItems).appendTo('.Slide_Month');

	    	let yearItems = '';
	    	for( let y in calendarData.gridYears ) {

	    		yearItems += '<span class="YearsB_Item Year-' + calendarData.gridYears[y].yearitem + '" data-year="'+ calendarData.gridYears[y].yearitem +'">'+ calendarData.gridYears[y].yearitem +'</span>';
	    	}
	    	$(yearItems).appendTo('.Slide_Year');


	    	let TDay = '.Day-';
	    	let TMonth = '.Month-';
	    	let TYear = '.Year-';
	    	let TDSelected = 'TDsDateselected';

	    	// Get ID Days
	    	const day1 = getDay == 1 ? $(TDay + 1).addClass(TDSelected) : $(TDay + 1).removeClass(TDSelected); // Day 1
	    	const day2 = getDay == 2 ? $(TDay + 2).addClass(TDSelected) : $(TDay + 2).removeClass(TDSelected); // day 2
	    	const day3 = getDay == 3 ? $(TDay + 3).addClass(TDSelected) : $(TDay + 3).removeClass(TDSelected); // Day 3
	    	const day4 = getDay == 4 ? $(TDay + 4).addClass(TDSelected) : $(TDay + 4).removeClass(TDSelected); // Day 4
	    	const day5 = getDay == 5 ? $(TDay + 5).addClass(TDSelected) : $(TDay + 5).removeClass(TDSelected); // Day 5
	    	const day6 = getDay == 6 ? $(TDay + 6).addClass(TDSelected) : $(TDay + 6).removeClass(TDSelected); // Day 6
	    	const day7 = getDay == 7 ? $(TDay + 7).addClass(TDSelected) : $(TDay + 7).removeClass(TDSelected); // Day 7
	    	const day8 = getDay == 8 ? $(TDay + 8).addClass(TDSelected) : $(TDay + 8).removeClass(TDSelected); // Day 8
	    	const day9 = getDay == 9 ? $(TDay + 9).addClass(TDSelected) : $(TDay + 9).removeClass(TDSelected); // Day 9
	    	const day10 = getDay == 10 ? $(TDay + 10).addClass(TDSelected) : $(TDay + 10).removeClass(TDSelected); // Day 10
	    	const day11 = getDay == 11 ? $(TDay + 11).addClass(TDSelected) : $(TDay + 11).removeClass(TDSelected); // Day 11
	    	const day12 = getDay == 12 ? $(TDay + 12).addClass(TDSelected) : $(TDay + 12).removeClass(TDSelected); // Day 12
			const day13 = getDay == 13 ? $(TDay + 13).addClass(TDSelected) : $(TDay + 13).removeClass(TDSelected); // Day 13
	    	const day14 = getDay == 14 ? $(TDay + 14).addClass(TDSelected) : $(TDay + 14).removeClass(TDSelected); // Day 14
	    	const day15 = getDay == 15 ? $(TDay + 15).addClass(TDSelected) : $(TDay + 15).removeClass(TDSelected); // Day 15
	    	const day16 = getDay == 16 ? $(TDay + 16).addClass(TDSelected) : $(TDay + 16).removeClass(TDSelected); // Day 16
	    	const day17 = getDay == 17 ? $(TDay + 17).addClass(TDSelected) : $(TDay + 17).removeClass(TDSelected); // Day 17
	    	const day18 = getDay == 18 ? $(TDay + 18).addClass(TDSelected) : $(TDay + 18).removeClass(TDSelected); // Day 18
	    	const day19 = getDay == 19 ? $(TDay + 19).addClass(TDSelected) : $(TDay + 19).removeClass(TDSelected); // Day 19
	    	const day20 = getDay == 20 ? $(TDay + 20).addClass(TDSelected) : $(TDay + 20).removeClass(TDSelected); // Day 20
	    	const day21 = getDay == 21 ? $(TDay + 21).addClass(TDSelected) : $(TDay + 21).removeClass(TDSelected); // Day 21
	    	const day22 = getDay == 22 ? $(TDay + 22).addClass(TDSelected) : $(TDay + 21).removeClass(TDSelected); // Day 22
	    	const day23 = getDay == 23 ? $(TDay + 23).addClass(TDSelected) : $(TDay + 23).removeClass(TDSelected); // Day 23
	    	const day24 = getDay == 24 ? $(TDay + 24).addClass(TDSelected) : $(TDay + 24).removeClass(TDSelected); // Day 24
	    	const day25 = getDay == 25 ? $(TDay + 25).addClass(TDSelected) : $(TDay + 25).removeClass(TDSelected); // Day 25
	    	const day26 = getDay == 26 ? $(TDay + 26).addClass(TDSelected) : $(TDay + 26).removeClass(TDSelected); // Day 26
	    	const day27 = getDay == 27 ? $(TDay + 27).addClass(TDSelected) : $(TDay + 27).removeClass(TDSelected); // Day 27
			const day28 = getDay == 28 ? $(TDay + 28).addClass(TDSelected) : $(TDay + 28).removeClass(TDSelected); // Day 28
	    	const day29 = getDay == 29 ? $(TDay + 29).addClass(TDSelected) : $(TDay + 29).removeClass(TDSelected); // Day 29
	    	const day30 = getDay == 30 ? $(TDay + 30).addClass(TDSelected) : $(TDay + 30).removeClass(TDSelected); // Day 30
	    	const day31 = getDay == 31 ? $(TDay + 31).addClass(TDSelected) : $(TDay + 31).removeClass(TDSelected); // Day 31

	    	// Get ID Months
	    	const month0 = getMonth == 0 ? $(TMonth + 0).addClass(TDSelected) : $(TMonth + 0).removeClass(TDSelected); // January
	    	const month1 = getMonth == 1 ? $(TMonth + 1).addClass(TDSelected) : $(TMonth + 1).removeClass(TDSelected); // February
	    	const month2 = getMonth == 2 ? $(TMonth + 2).addClass(TDSelected) : $(TMonth + 2).removeClass(TDSelected); // March
	    	const month3 = getMonth == 3 ? $(TMonth + 3).addClass(TDSelected) : $(TMonth + 3).removeClass(TDSelected); // April
	    	const month4 = getMonth == 4 ? $(TMonth + 4).addClass(TDSelected) : $(TMonth + 4).removeClass(TDSelected); // May
	    	const month5 = getMonth == 5 ? $(TMonth + 5).addClass(TDSelected) : $(TMonth + 5).removeClass(TDSelected); // June
	    	const month6 = getMonth == 6 ? $(TMonth + 6).addClass(TDSelected) : $(TMonth + 6).removeClass(TDSelected); // July
	    	const month7 = getMonth == 7 ? $(TMonth + 7).addClass(TDSelected) : $(TMonth + 7).removeClass(TDSelected); // August
	    	const month8 = getMonth == 8 ? $(TMonth + 8).addClass(TDSelected) : $(TMonth + 8).removeClass(TDSelected); // September
	    	const month9 = getMonth == 9 ? $(TMonth + 9).addClass(TDSelected) : $(TMonth + 9).removeClass(TDSelected); // October
	    	const month10 = getMonth == 10 ? $(TMonth + 10).addClass(TDSelected) : $(TMonth + 10).removeClass(TDSelected); // November
	    	const month11 = getMonth == 11 ? $(TMonth + 11).addClass(TDSelected) : $(TMonth + 11).removeClass(TDSelected); // December

	    	// Get ID Years
	    	const year2019 = getYear == 2019 ? $(TYear + 2019).addClass(TDSelected) : $(TYear + 2019).removeClass(TDSelected); // Year 2019
	    	const year2020 = getYear == 2020 ? $(TYear + 2020).addClass(TDSelected) : $(TYear + 2020).removeClass(TDSelected); // Year 2020
	    	const year2021 = getYear == 2021 ? $(TYear + 2021).addClass(TDSelected) : $(TYear + 2021).removeClass(TDSelected); // Year 2021
	    	const year2022 = getYear == 2022 ? $(TYear + 2022).addClass(TDSelected) : $(TYear + 2022).removeClass(TDSelected); // Year 2022
	    	const year2023 = getYear == 2023 ? $(TYear + 2023).addClass(TDSelected) : $(TYear + 2023).removeClass(TDSelected); // Year 2023
	    	const year2024 = getYear == 2024 ? $(TYear + 2024).addClass(TDSelected) : $(TYear + 2024).removeClass(TDSelected); // Year 2024
	    	const year2025 = getYear == 2025 ? $(TYear + 2025).addClass(TDSelected) : $(TYear + 2025).removeClass(TDSelected); // Year 2025
	    	const year2026 = getYear == 2026 ? $(TYear + 2026).addClass(TDSelected) : $(TYear + 2026).removeClass(TDSelected); // Year 2026
	    	const year2027 = getYear == 2027 ? $(TYear + 2027).addClass(TDSelected) : $(TYear + 2027).removeClass(TDSelected); // Year 2027
	    	const year2028 = getYear == 2028 ? $(TYear + 2028).addClass(TDSelected) : $(TYear + 2028).removeClass(TDSelected); // Year 2028
	    	const year2029 = getYear == 2029 ? $(TYear + 2029).addClass(TDSelected) : $(TYear + 2029).removeClass(TDSelected); // Year 2029
	    	const year2030 = getYear == 2030 ? $(TYear + 2030).addClass(TDSelected) : $(TYear + 2030).removeClass(TDSelected); // Year 2030
	    	const year2031 = getYear == 2031 ? $(TYear + 2031).addClass(TDSelected) : $(TYear + 2031).removeClass(TDSelected); // Year 2031
	    	const year2032 = getYear == 2032 ? $(TYear + 2032).addClass(TDSelected) : $(TYear + 2032).removeClass(TDSelected); // Year 2032
	    	const year2033 = getYear == 2033 ? $(TYear + 2033).addClass(TDSelected) : $(TYear + 2033).removeClass(TDSelected); // Year 2033
	    	const year2034 = getYear == 2034 ? $(TYear + 2034).addClass(TDSelected) : $(TYear + 2034).removeClass(TDSelected); // Year 2034
	    	const year2035 = getYear == 2035 ? $(TYear + 2035).addClass(TDSelected) : $(TYear + 2035).removeClass(TDSelected); // Year 2035
	    }


	    let linkSlide = $(ThisDiv, { class: 'SlideTGo' });
	    
	  	$('.calendDragTitle').after(linkSlide);
		let MoveMonth = $('<span/>', { class: 'DayToMonth ToGoM' }).html('Choose Month +').appendTo('.SlideTGo');
		let BackMonth = $('<span/>', { class: 'ToBack GoBNow' }).html('+ Choose Day').appendTo('.SlideTGo');

		// Start datePickerFrom Function
		$.fn.datePickerFrom = function() {
			return this.on(ck, '*', function() {

				try {

					let thisValItem = getThisZero($(this).html());
					let InpuZin = '.inpZx';
					let HtmlTh = $(this).html();

					let ThElm = $(this);

					const inputFrom = (ThElm.hasClass('datePickerFromPot')) ? 
						$('.GridCalendPot').fadeIn(100) &&
						$('.datePickerToPot').removeClass('inpZx') &&
						$('.GridCalendar').removeAttr('style') &&
						$('.calendDragTitle').html('Date From :') &&
						ThElm.addClass('inpZx') : '';

					const inputTo = (ThElm.hasClass('datePickerToPot')) ? 
						$('.GridCalendPot').fadeIn(100) &&
						$('.GridCalendar').css({ left: '429px'}) &&
						$('.calendDragTitle').html('Date To :') &&
						$('.datePickerFromPot').removeClass('inpZx') &&  
						ThElm.addClass('inpZx') : '';

					const closecalend = (ThElm.hasClass('CloseCalend')) ? 
						$('.GridCalendPot').fadeOut(100) : '';

					switch(true) {
						case (ThElm.hasClass('DayB_Item')): // Days Click Event

							$('.DayB_Item').removeClass('DaySelected');
							ThElm.addClass('DaySelected');

							if($(InpuZin).val() == '' || $(InpuZin).val() != '') {

								if(getMonth == 0) { $(InpuZin).val(thisValItem + '/' + 'Jan' + '/' + getYear);

								} else if(getMonth == 1) { $(InpuZin).val(thisValItem + '/' + 'Feb' + '/' + getYear);

								} else if(getMonth == 2) { $(InpuZin).val(thisValItem + '/' + 'Mar' + '/' + getYear);

								} else if(getMonth == 3) { $(InpuZin).val(thisValItem + '/' + 'Apr' + '/' + getYear);

								} else if(getMonth == 4) { $(InpuZin).val(thisValItem + '/' + 'May' + '/' + getYear);

								} else if(getMonth == 5) { $(InpuZin).val(thisValItem + '/' + 'Jun' + '/' + getYear);

								} else if(getMonth == 6) { $(InpuZin).val(thisValItem + '/' + 'Jul' + '/' + getYear);

								} else if(getMonth == 7) { $(InpuZin).val(thisValItem + '/' + 'Aug' + '/' + getYear);

								} else if(getMonth == 8) { $(InpuZin).val(thisValItem + '/' + 'Sep' + '/' + getYear);

								} else if(getMonth == 9) { $(InpuZin).val(thisValItem + '/' + 'Oct' + '/' + getYear);

								} else if(getMonth == 10) { $(InpuZin).val(thisValItem + '/' + 'Nov' + '/' + getYear);

								} else if(getMonth == 11) { $(InpuZin).val(thisValItem + '/' + 'Dec' + '/' + getYear); }
							} 
								
							const DayMonthItemState = ($(InpuZin).val() != '' && $('.MonthB_Item').hasClass('MonthSelected')) ?
								$(InpuZin).val(thisValItem + '/' + $('.MonthSelected').html() + '/' + getYear) : '';
							const DayMonthYearItemState = ($(InpuZin).val() != '' && $('.MonthB_Item').hasClass('MonthSelected') && $('.YearsB_Item').hasClass('YearSelected')) ?
								$(InpuZin).val(thisValItem + '/' + $('.MonthSelected').html() + '/' + $('.YearSelected').html()) : '';
							break;

						case (ThElm.hasClass('MonthB_Item')): // Months Click Event

							$('.MonthB_Item').removeClass('MonthSelected');
							ThElm.addClass('MonthSelected');

							const MonthItemState = ($(InpuZin).val() == '' || $(InpuZin).val() != '') ?
								$(InpuZin).val(getThisZero(getDay) + '/' + HtmlTh + '/' + getYear) : '';
							const MonthDayItemState = ($(InpuZin).val() != '' && $('.DayB_Item').hasClass('DaySelected')) ?
								$(InpuZin).val(getThisZero($('.DaySelected').html()) + '/' + HtmlTh + '/' + getYear) : '';
							const MonthYearItemState = ($(InpuZin).val() != '' && $('.YearsB_Item').hasClass('YearSelected')) ?
								$(InpuZin).val(getThisZero(getDay) + '/' + HtmlTh + '/' + $('.YearSelected').html()) : '';
							const MonthDayYearItemState = ($(InpuZin).val() != '' && $('.DayB_Item').hasClass('DaySelected') && $('.YearsB_Item').hasClass('YearSelected')) ?
								$(InpuZin).val(getThisZero($('.DaySelected').html()) + '/' + HtmlTh + '/' + $('.YearSelected').html()) : '';

							break;

						case (ThElm.hasClass('YearsB_Item')): // Years Click Event

							$('.YearsB_Item').removeClass('YearSelected');
							ThElm.addClass('YearSelected');

							if($(InpuZin).val() == '' || $(InpuZin).val() != '') {

								if(getMonth == 0) { $(InpuZin).val(getThisZero(getDay) + '/' + 'Jan' + '/' + HtmlTh);

								} else if(getMonth == 1) { $(InpuZin).val(getThisZero(getDay) + '/' + 'Feb' + '/' + HtmlTh);

								} else if(getMonth == 2) { $(InpuZin).val(getThisZero(getDay) + '/' + 'Mar' + '/' + HtmlTh);

								} else if(getMonth == 3) { $(InpuZin).val(getThisZero(getDay) + '/' + 'Apr' + '/' + HtmlTh);

								} else if(getMonth == 4) { $(InpuZin).val(getThisZero(getDay) + '/' + 'May' + '/' + HtmlTh);

								} else if(getMonth == 5) { $(InpuZin).val(getThisZero(getDay) + '/' + 'Jun' + '/' + HtmlTh);

								} else if(getMonth == 6) { $(InpuZin).val(getThisZero(getDay) + '/' + 'Jul' + '/' + HtmlTh);

								} else if(getMonth == 7) { $(InpuZin).val(getThisZero(getDay) + '/' + 'Aug' + '/' + HtmlTh);

								} else if(getMonth == 8) { $(InpuZin).val(getThisZero(getDay) + '/' + 'Sep' + '/' + HtmlTh);

								} else if(getMonth == 9) { $(InpuZin).val(getThisZero(getDay) + '/' + 'Oct' + '/' + HtmlTh);

								} else if(getMonth == 10) { $(InpuZin).val(getThisZero(getDay) + '/' + 'Nov' + '/' + HtmlTh);

								} else if(getMonth == 11) { $(InpuZin).val(getThisZero(getDay) + '/' + 'Dec' + '/' + HtmlTh); }
							}

							const YearMonthItemState = ($(InpuZin).val() != '' && $('.MonthB_Item').hasClass('MonthSelected')) ?
								$(InpuZin).val(getThisZero(getDay) + '/' + $('.MonthSelected').html() + '/' + HtmlTh) : ''; 

							const YearMonthDayItemState = ($(InpuZin).val() != '' && $('.MonthB_Item').hasClass('MonthSelected') && $('.DayB_Item').hasClass('DaySelected')) ?
								$(InpuZin).val(getThisZero($('.DaySelected').html()) + '/' + $('.MonthSelected').html() + '/' + HtmlTh) : '';
							break;
					}

					let CalPlat = $('.CalendPot, .CalendPolicy');
					let ToGoLabel = $('.DayToMonth');
					let toGo = '293px';
					let stopTGo = '-293px';
					let leftNull = 0;
					let ThisSpeed = 300;

					const DayMonthAnim = ($(this).hasClass('ToGoM')) ? 
						CalPlat.animate({ left: stopTGo }, ThisSpeed, function() {
							const gotoMonth = (CalPlat.position().left <= leftNull) ?
								ToGoLabel.html('Choose Year +').removeClass('ToGoM').addClass('ToGoY') && 
								$('.ToBack').show()
								: '';
						}) : '';

					const DayBackAnim = ($(this).hasClass('ToGoY')) ? 
						CalPlat.animate({ left: '-586px' }, ThisSpeed, function() {
							$('.ToBack').hide() && 
							ToGoLabel.html('Choose Month +').removeClass('ToGoY').addClass('ToGoBCM')
						}) : '';

					const MonthBackAnim = ($(this).hasClass('ToGoBCM')) ? 
						CalPlat.animate({ left: '-293px' }, ThisSpeed, function() {
							$('.ToBack').show() && 
							ToGoLabel.html('Choose Year +').removeClass('ToGoBCM').addClass('ToGoY')
						}) : '';

					const DayBack = ($(this).hasClass('GoBNow')) ? 
						CalPlat.animate({ left: leftNull }, ThisSpeed, function() {
							$('.ToBack').hide() && 
							ToGoLabel.html('Choose Month +').removeClass('ToGoY').addClass('ToGoM')
						}) : '';
				}

				catch(pickercalenderr) { alert('Grid Calendar Error' + ' ' + pickercalenderr + ' ' + 'You Got a' + ' ' + pickercalenderr.name) }
			});
		
		}
		d.datePickerFrom();
		// End datePickerFrom Function

		let IdTime = '#datePickerFromPot, #datePickerToPot';

		if(getMonth == 0) { $(IdTime).val(getThisZero(getDay) + '/' + 'Jan' + '/' + getYear); 
		} else if(getMonth == 1) { $(IdTime).val(getThisZero(getDay) + '/' + 'Feb' + '/' + getYear);
		} else if(getMonth == 2) { $(IdTime).val(getThisZero(getDay) + '/' + 'Mar' + '/' + getYear);
		} else if(getMonth == 3) { $(IdTime).val(getThisZero(getDay) + '/' + 'Apr' + '/' + getYear);
		} else if(getMonth == 4) { $(IdTime).val(getThisZero(getDay) + '/' + 'May' + '/' + getYear);
		} else if(getMonth == 5) { $(IdTime).val(getThisZero(getDay) + '/' + 'Jun' + '/' + getYear);
		} else if(getMonth == 6) { $(IdTime).val(getThisZero(getDay) + '/' + 'Jul' + '/' + getYear);
		} else if(getMonth == 7) { $(IdTime).val(getThisZero(getDay) + '/' + 'Aug' + '/' + getYear);
		} else if(getMonth == 8) { $(IdTime).val(getThisZero(getDay) + '/' + 'Sep' + '/' + getYear);
		} else if(getMonth == 9) { $(IdTime).val(getThisZero(getDay) + '/' + 'Oct' + '/' + getYear);
		} else if(getMonth == 10) { $(IdTime).val(getThisZero(getDay) + '/' + 'Nov' + '/' + getYear);
		} else if(getMonth == 11) { $(IdTime).val(getThisZero(getDay) + '/' + 'Dec' + '/' + getYear); }

		GridCalen.draggable();
		GridCalen.bind(drag, function(event, ui) {

			let halfWidth = $(window).width() / 3;
			let left = $(this).offset().left + 200;
			let windowWIdth = $(window).width() - 1090;

			const leftOne = (left < halfWidth) ?
				$('.calendDragTitle').html('Date From :') &&
				$('.GridCalendar').removeClass('opacitGridCalend').css({ height: 'auto' }) &&
				$('#datePickerFromPot, #datePickerFromPolicy').addClass(zIndexDrag) &&
				$('#datePickerToPot, #datePickerToPolicy').removeClass(zIndexDrag) : '';

			const leftTwo = (left > halfWidth && left <= windowWIdth) ?
				$('.calendDragTitle').html('Date To :') &&
				$('.GridCalendar').removeClass('opacitGridCalend').css({ height: 'auto' }) &&
				$('#datePickerFromPot, #datePickerFromPolicy').removeClass(zIndexDrag) &&
				$('#datePickerToPot, #datePickerToPolicy').addClass(zIndexDrag) : '';

			const leftOut = (left >= windowWIdth) ?
				$('.calendDragTitle').html('<< Move Left To Find Dates') &&
				$('.GridCalendar').addClass('opacitGridCalend').css({ height: '29px', overflow: 'hidden' }) &&
				$('#datePickerFromPot, #datePickerToPot, #datePickerFromPolicy, #datePickerToPolicy').removeClass(zIndexDrag) : '';
		});
	}
	d.RunCalend();
	
});