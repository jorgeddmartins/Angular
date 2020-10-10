
// Document Element
let doc = $(document);

// Click Event
let ck = 'click';

// Drag Event
let drag = 'drag';

// New Date Event
let ddt = new Date();

// Months Content
let content = 'January February March April May June July August September October November December'.split(' ');

// Days Content
let daysOfMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function getCalendarStart(dayOfWeek, currentDate) {
    let date = currentDate - 1;
    let startOffset = (date % 7) - dayOfWeek;

    if (startOffset > 0) { startOffset -= 7; }
    return Math.abs(startOffset);
}

// Render Calendar
function renderCalendar(startDay, totalDays, currentDate) {
    let currentRow = 1;
    let currentDay = startDay;
    let $table = $('.GridClendar .table');
    let $week = getCalendarRow();
    let month = ddt.getUTCMonth();
    let $day;
    let i = 1;

    for(; i <= totalDays; i++) {

    	$('.GridClendar .table td').addClass('CalenTd');

        $day = $week.find('.CalenTd').eq(currentDay);
        $day.text(i);
       
        const CurrentDat = i === currentDate ? $day.addClass('today') : '';

        currentDay = ++currentDay % 7;

        if (currentDay === 0 && (i + 1 <= totalDays)) {

            $week = getCalendarRow();
            currentRow++;
        } 
        
        $.fn.checkMonth = function() {

        	return this.on(ck, '.next-month, .prev-month', function() {

        		if(ddt.getUTCMonth() != month) { $('.dyItem').removeClass('today'); } 
        	});
        }
        doc.checkMonth();

    }
}

// Clear generated calendar
function clearCalendar() {
    let $trs = $('.GridClendar .table tr').not(':eq(0)');
    $trs.remove();
    $('.month-year').empty();
}

// Generates table row used when rendering Calendar
function getCalendarRow() {
    let $table = $('.GridClendar .table');
    let $tr = $('<tr/>');
    for (let i = 0, len = 7; i < len; i++) {
        $tr.append($('<td/>').addClass('dyItem').css({ border: '1px solid #fff'}));
        $('td.dyItem:nth-child(7)').addClass('Day-Saturday');
        $('td.dyItem:nth-child(1)').addClass('Day-Sunday');
    }
    $table.append($tr);
    return $tr;
}

// Calendar Header
function HeadGCalendar() {
    let month = ddt.getUTCMonth();
    let day = ddt.getUTCDay();
    let year = ddt.getUTCFullYear();
    let date = ddt.getUTCDate();
    let totalDaysOfMonth = daysOfMonth[month];
    let counter = 1;

    // Top Calendar main Content
    let $h3 = $('<div/>', { class: 'TopHContent' });

    // Top Month Content
    let $mbx = $('<span/>', { class: 'ThisMonthTop' });

    // Top Year Content
    let ybx = $('<span/>', { class: 'ThisYearTop' });

    $mbx.html(content[month] + '').attr({ 'data-month': content[month]});
    ybx.html(year).attr({ 'data-year': year});

    $h3.appendTo('.month-year');
    $mbx.add(ybx).appendTo('.TopHContent');

    let Tsp = '<span>';

    let ThisMonthTopFloor = $('<div/>', { class: 'ThisMonthTopfloor'}).appendTo($h3)
    	.append($(Tsp, { class: 'dropMth janDrop'}).html('January'))
		.append($(Tsp, { class: 'dropMth fabDrop'}).html('February'))
		.append($(Tsp, { class: 'dropMth marchDrop'}).html('March'))
		.append($(Tsp, { class: 'dropMth aprilDrop'}).html('April'))
		.append($(Tsp, { class: 'dropMth mayDrop'}).html('May'))
		.append($(Tsp, { class: 'dropMth juneDrop'}).html('June'))
		.append($(Tsp, { class: 'dropMth julyDrop'}).html('July'))
		.append($(Tsp, { class: 'dropMth augDrop'}).html('August'))
		.append($(Tsp, { class: 'dropMth sepDrop'}).html('September'))
		.append($(Tsp, { class: 'dropMth octDrop'}).html('October'))
		.append($(Tsp, { class: 'dropMth novDrop'}).html('November'))
		.append($(Tsp, { class: 'dropMth decDrop'}).html('December'));

    let ThisYearTopFloor = $('<div/>', { class: 'ThisYearTopfloor', id: 'ThisYearTopfloor', style: 'max-height: 304px' }).appendTo($h3);
    
    let dateToHighlight = 0;

    if (ddt.getUTCMonth() === month && ddt.getUTCFullYear() === year) { dateToHighlight = date; }


    if (month === 1) {

        if ((year % 100 !== 0) && (year % 4 === 0) || (year % 400 === 0)) { totalDaysOfMonth = 29; }
    }
    renderCalendar(getCalendarStart(day, date), totalDaysOfMonth, dateToHighlight);
};

function navigationHandler(dir) {
    ddt.setUTCMonth(ddt.getUTCMonth() + dir);
    clearCalendar();
    HeadGCalendar();
}

// Last and Next Months Items
function EmptyItem(EmpElm) {

	let HeadGr = $('.GridClendar');

	$('.dyItem').each(function() {
		
		const dyEmpty = $(this).html() == '' ? $(this).addClass('empty') : '';
		const removeDataDate = $(this).hasClass('empty') ? $(this).removeAttr('data-date') : '';
	});

	$('.Day-Saturday').each(function() {

		const DaySat = $(this).html().indexOf('30') >= 0 || $(this).html().indexOf('29') >= 0 ? HeadGr.addClass('day30') : HeadGr.removeClass('day30');
	});
}

function actMonths() {
	let Tmt = $('.ThisMonthTop');
	let dm = $('.dateMonth');

	const MatchJan = Tmt.html().match('January') ? dm.html('Jan') : '';
	const MatchFab = Tmt.html().match('February') ? dm.html('Feb') : '';
	const MatchMar = Tmt.html().match('March') ? dm.html('Mar') : '';
	const MatchApr = Tmt.html().match('April') ? dm.html('Apr') : '';
	const MatchMay = Tmt.html().match('May') ? dm.html('May') : '';
	const MatchJune = Tmt.html().match('June') ? dm.html('Jun') : '';
	const MatchJuly = Tmt.html().match('July') ? dm.html('Jul') : '';
	const MatchAug = Tmt.html().match('August') ? dm.html('Aug') : '';
	const MatchSep = Tmt.html().match('September') ? dm.html('Sep') : '';
	const MatchOct = Tmt.html().match('October') ? dm.html('Oct') : '';
	const MatchNov = Tmt.html().match('November') ? dm.html('Nov') : '';
	const MatchDec = Tmt.html().match('December') ? dm.html('Dec') : '';
}


$(function() {

	"use strict";

	// Propreties Main Function
	$.fn.GridDefaultCalendar = function(CalendarOPtions) {

		let nbigCal = 3;

		let nsmallCal = 2;

		let STip = 'Save';

		let DefaultOptions = {

			// Dynamical Values
			value: {

				GridCVal: 0,

				// teleCTop: 454.140625
				teleCTop: 217.140625
			},

			// Element Tags
			tags: {

				// Div Tag
				divTag: '<div>',

				// Span Tag
				spanTag: '<span>',

				// Html Element
				goHtml: $('html'),

				// Body Tag
				bodyTag: 'body',

				// Input Element
				inputTag: '<input>',

				// Th Element
				thTag: '<th>',

				// Icon Tag
				icontag: '<i>',

				// Table Tag
				tableTag: '<table>',

				// Tr Tag
				trTag: '<tr>'
			},

			// All Propreties
			calenDrop: 'DatePickerDrop',

			avaiformHidden: 'AvailableFromidden',

			dObHidden: 'PdOb',

			zcalndClass: 'z_Calendar',

			TeleCalenGr: '.GridClendar',

			CalGrid: '.CGrid_',

			AvailableCal: 'Input',

			hiidenId: '#hiddenId',

			YTop: '.ThisYearTop'
		};

		// Propreties Setitngs / Propreties Override
		let settingsCal = $.extend( true, {

			// Running Calendar True / False
			runCalendar: true,

			// Years Limit
			yearLimit: 9,

			// Hours Title
			HTitle: 'Hours',

			// Hours Sub Title
			HSTitle: 'h: am / h: pm',

			// Minutes Title
			MTitle: 'Minutes',

			// Minutes Sub title
			MSTitle: ':min',

			// Close Button ToolTip
			closeBt: '<span class="closeC fa">' + '<span class="closeC_Tip">' + STip + '</span>' + '</span>'


		}, DefaultOptions, CalendarOPtions );


		function RunCalen() { if(settingsCal.runCalendar == true ) { this.calendarType(); } }

		$.extend( RunCalen.prototype, {

			calendarType: function() {

				// Calendar Hour Elements Injection
				let GridClendar = $(settingsCal.tags.divTag, { class: 'GridClendar' }).appendTo('.telSHourPicker')
						.append($(settingsCal.tags.divTag, { class: 'TeleGridDays', id: 'Ts1' }))
						.append($(settingsCal.tags.divTag, { class: 'TeleGridHour', id: 'Ts2' }))
						.append($(settingsCal.tags.divTag, { class: 'TeleGridSecd', id: 'Ts3' }))

				// Dynamical Classes for TeleGridCalendar
				$.fn.TeleCalMult = function(dataGrid) {
					return this.each(function() {

						$(this).addClass(dataGrid + settingsCal.value.GridCVal);
						settingsCal.value.GridCVal++;
					});
				}
				$(settingsCal.TeleCalenGr).TeleCalMult('CGrid_');

				// Main TeleSales Function
				$.fn.RunTeleGridcalendar = function() {

					let NullHeader = function(e) { const NulNumber = e < 10 ? e = '0' + e : e = '' + e; return e; }

					let getHeaderDate = new Date();
					let getTime = ' ' + '/' + ' ' + NullHeader(getHeaderDate.getMonth()) + ' ' + '/' + ' ' + getHeaderDate.getFullYear();
					let getMonth = getHeaderDate.getMonth();

					let getMonthM = getHeaderDate.getMonth() - 1;

					let getYear = getHeaderDate.getFullYear();
					let getDay = NullHeader(getHeaderDate.getDate());
				    let nowMinute = NullHeader(getHeaderDate.getMinutes());
				    let nowHour = NullHeader(getHeaderDate.getHours());

				    let ThisDate = getDay + '/' + getMonth + '/' + getYear;

					// Closes Calendar when click outside
					$.fn.cLca = function() {
						return this.on(ck, '.closeCalend', function() {

							$(settingsCal.TeleCalenGr).hide();
							settingsCal.tags.goHtml.removeClass('closeCalend');
							$('.ThisMonthTopfloor, .ThisYearTopfloor').hide();
							$('.telSHourPicker .fa-calendar, .inputPicker_mini_top .fa-calendar').removeAttr('style'); 
						});
					}
					doc.cLca();

					// Removing Class 'closeCalend' on mouseover
					$.fn.calenOver = function() {
						return this.on('mouseover', settingsCal.TeleCalenGr, function() {

							settingsCal.tags.goHtml.removeClass('closeCalend');
						});
					}
					doc.calenOver()

					// Adding Class 'closeCalend' on mouseleave
					$.fn.calenLeave = function() {
						return this.on('mouseleave', settingsCal.TeleCalenGr, function() {

							settingsCal.tags.goHtml.addClass('closeCalend')
						});
					}
					doc.calenLeave();

					// Append Calendar Navigation
					let CalenNavigation = $(settingsCal.tags.divTag, { class: 'TpNav' }).appendTo('.TeleGridDays')
						.append($(settingsCal.tags.icontag, { class: 'prev-month haveDate fad fa-chevron-left fa-3x' }))
						.append($(settingsCal.tags.icontag, { class: 'next-month haveDate fad fa-chevron-right fa-3x' }))
						.append($(settingsCal.tags.divTag, { class: 'month-year TopHeadC' }));

					// AppendTo Calendar Table
					let CalTable = $(settingsCal.tags.divTag, { class: 'CalenFloor'}).appendTo('.TeleGridDays')
						.append($('<table>', { class: 'table table-bordered' })
							.append($('<tr>')
								.append($(settingsCal.tags.thTag).html('Sun'))
								.append($(settingsCal.tags.thTag).html('Mon'))
								.append($(settingsCal.tags.thTag).html('Tue'))
								.append($(settingsCal.tags.thTag).html('Wed'))
								.append($(settingsCal.tags.thTag).html('Thu'))
								.append($(settingsCal.tags.thTag).html('Fri'))
								.append($(settingsCal.tags.thTag).html('Sat'))
							)
						);

					// Prev Month Arrow Style
				    $('.prev-month').css({ left: '3px', right: 'auto', width: '14.3px', top: '5px', cursor: 'pointer', color: '#0A9A7A', 'font-size': '20px' });

				    // Next Month Arrow Style
				    $('.next-month').css({ top: '5px',  width: '14.3px', right: '3px', left: 'auto', cursor: 'pointer', color: '#0A9A7A', 'font-size': '20px' });

				    // Table Margin Style
				    $('.table').css({ 'margin-bottom': '0'});

				    // Global Check Click For Prev & next Months(Top Arrows)
				    $.fn.GridGlTele = function() {
				    	return this.on(ck, '*', function() {

				    		let fClass = $(this)[0].className;

				    		// Runs Previous Month
				    		const prevMonth = fClass.indexOf('prev-month') != -1 ? navigationHandler(-1) : '';

				    		// Runs Next Month
				    		const nextMonth = fClass.indexOf('next-month') != -1 ? navigationHandler(1) : '';
				    	});
				    }
				    doc.GridGlTele();

				    let dateHourPick = '.valTh';
				    let datesUp = '/' + getYear + ' ' + nowHour + ':' + nowMinute;

				    $(dateHourPick).val(getDay + '/' + getMonth + datesUp);

				    // Janaury Month Injection
				    const JanFull = getMonth == 0  ? $(dateHourPick).val(getDay + '/' + '01' + datesUp) : '';

				    // February Month Injection
				    const FabFull = getMonth == 1  ? $(dateHourPick).val(getDay + '/' + '02' + datesUp) : '';

				    // March Month Injection
				    const MarFull = getMonth == 2  ? $(dateHourPick).val(getDay + '/' + '03' + datesUp) : '';

				    // April Month Injection
				    const AprFull = getMonth == 3  ? $(dateHourPick).val(getDay + '/' + '04' + datesUp) : '';

				    // May Month Injection
				    const MayFull = getMonth == 4  ? $(dateHourPick).val(getDay + '/' + '05' + datesUp) : '';

				    // June Month Injection
				    const JunFull = getMonth == 5  ? $(dateHourPick).val(getDay + '/' + '06' + datesUp) : '';

				    // July Month Injection
				    const JulFull = getMonth == 6  ? $(dateHourPick).val(getDay + '/' + '07' + datesUp) : '';

				    // August Month Injection
				    const AugFull = getMonth == 7  ? $(dateHourPick).val(getDay + '/' + '08' + datesUp) : '';

				    // September Month Injection
				    const SepFull = getMonth == 8  ? $(dateHourPick).val(getDay + '/' + '09' + datesUp) : '';

				    // October Month Injection
				    const OctFull = getMonth == 9  ? $(dateHourPick).val(getDay + '/' + '10' + datesUp) : '';

				    // November Month Injection
				    const NovFull = getMonth == 10 ? $(dateHourPick).val(getDay + '/' + '11' + datesUp) : '';

				    // December Month Injection
				    const DecFull = getMonth == 11 ? $(dateHourPick).val(getDay + '/' + '12' + datesUp) : '';

					// Promise Ajax Call
				    $.ajax({
				    	type: 'GET',
				    	cache: false,
				    	url: 'assets/js/GridTeleSalesCalendar/GridCalendar.json',
				    	datatype: 'json',

				    	success: function(gridtelecalendata) { doc.GlCalendar(gridtelecalendata) }
				    });

					// Data Injection Calendar
				    $.fn.GlCalendar = function(gridtelecalendata) {

				    	let hourSet = '';
				    	for( let i in gridtelecalendata.GirdHour ) {

				    		hourSet += '<span class="hourItem" data-hour="' + gridtelecalendata.GirdHour[i].hourSet + '">' + gridtelecalendata.GirdHour[i].hourSet + '</span>';
				    	}
				    	$(hourSet).appendTo('.TeleGridHour');

				    	$('.hourItem:first-of-type').addClass('FHour');

				    	let HourTitle = $(settingsCal.tags.divTag, { class: 'HourTitle' })
				    		.append( $(settingsCal.tags.spanTag, { class: 'hourTitle_p' }).html(settingsCal.HTitle))
				    		.append( $(settingsCal.tags.spanTag, { class: 'hour_pBtt'}).html(settingsCal.HSTitle));

				    	$('.FHour').before(HourTitle);

				    	// Years Drop Down Injection
				    	let bitrhYear = '';
						for( let i in gridtelecalendata.birthYears) {

							bitrhYear += '<span class="dropYrM BirThYears yr-' + gridtelecalendata.birthYears[i].year + '" id="yr-' + gridtelecalendata.birthYears[i].year + '">' + gridtelecalendata.birthYears[i].year + '</span>';
						}

						let baseYear = '';
						for( let i in gridtelecalendata.baseYears) {

							baseYear += '<span class="dropYrM BaseYears yr-' + gridtelecalendata.baseYears[i].year + '" id="yr-' + gridtelecalendata.baseYears[i].year + '">' + gridtelecalendata.baseYears[i].year + '</span>';
						}

						$(bitrhYear).add(baseYear).appendTo('.ThisYearTopfloor .mCSB_container');

				    }
					HeadGCalendar();

					/***********************************************************/
					/***********************************************************/
					/********************* Start All Calendars *****************/
					/***********************************************************/
					/***********************************************************/
					// Start TeleSales Calendars
					$.fn.OpenCalendGl = function() {
						return this.on(ck, '*', function() {
							
							// This Attribute ID
							let id = $(this).attr('id');

							// This Attribute Name
							let name = $(this).attr('name');

							if(id == settingsCal.AvailableCal) {

								// Calendar Runs Top & Left width Default width On Click Event
								const Input1 = name == 'AvailableFrom' ? datetimeHour('105%', '-1px') : '';

								// Calendar Runs Top, Left & Width On Click Event
								const Input2 = name == 'DateOfBirth' ? simpleDatePicker('-8%', '138%', '308px', $(this)) : '';

								// Calendar Runs Top, Left & Width On Click Event
								const Input3 = name == 'PartnerDateOfBirth' ? simpleDatePicker('478%', '138%', '308px', $(this)) : '';
							}

						});
					}
					doc.OpenCalendGl();

					// Dragging Calendar DateTimePicker Global Function
					function datetimeHour(tops, lefts) {

						$('.GridClendar').show().css({ top: tops, left: lefts });
						$('.TeleGridSecd').hide();
						$('.TeleGridHour').css({ 'margin-right': 0 });
						$('.prev-month').css({ left: '3px' });
						$('.next-month').css({ right: '3px' });
						$('html').addClass('closeCalend');
						$('.GridClendar').removeClass('minCalendTop minCalendBottom').addClass('smallCalend');
						$('.inputPicker_mini_top .fa-calendar').css({ color: '#0A9A7A' }); 
						$('.telSHourPicker .fa-calendar').removeAttr('style'); 
						$('.TeleGridDays').removeAttr('style');
						$('.TeleGridHour').css({ 'margin-right': 0, display: 'block' });

						$('.dyItem').removeClass('addDayValue getday');
					
						$('.hourItem').removeClass('addHourValue');
						
						$('.SBThDay').css({ background: '#0080ff', color: '#fff', 'font-size': '10px', 'padding-top': '5px', 'padding-left': '5px', 'text-align': 'left', position: 'relative'});
						
						$('.MTThDay').css({ background: '', color: '', 'font-size': '', 'padding-top': '', 'padding-left': '', 'text-align': '', position: ''});
							
						$('.MBThDay').css({ background: '', color: '', 'font-size': '', 'padding-top': '', 'padding-left': '', 'text-align': '', position: ''});

						$('.MBThHour').css({ background: '#0080ff', color: '#fff', 'font-size': '10px', 'padding-top': '5px', 'padding-left': '5px', 'text-align': 'left', position: 'relative'});

						$('.BirThYears').hide();

						$('.BaseYears').show();
					}

					// Dragging Simple Calendar Global Functions
					function simpleDatePicker(tops, lefts, width, th) {
						
						let name = th.attr('name');

						$('.GridClendar').show().css({ top: tops, left: lefts });
						$('.TeleGridHour, .TeleGridSecd').hide();
						$('.TeleGridDays').css({ 'margin-right': 0 });
						$('.prev-month').css({ left: '12px' });
						$('.next-month').css({ right: '28px' });
						$('.TeleGridDays').css({ width: width});
						$('html').addClass('closeCalend');
	
						// Runs Top Small Calendar
						if(name == 'DateOfBirth') {

							$('.GridClendar').addClass('minCalendTop').removeClass('smallCalend minCalendBottom');

							$('.SBThDay').css({ background: '', color: '', 'font-size': '', 'padding-top': '', 'padding-left': '', 'text-align': '', position: '' });
						
							$('.MTThDay').css({ background: '#0080ff', color: '#fff', 'font-size': '10px', 'padding-top': '5px', 'padding-left': '5px', 'text-align': 'left', position: 'relative' });
								
							$('.MBThDay').css({ background: '', color: '', 'font-size': '', 'padding-top': '', 'padding-left': '', 'text-align': '', position: '' });
						}

						// Runs Bottom Small Calendar
						else if(name == 'PartnerDateOfBirth') {

							$('.GridClendar').addClass('minCalendBottom').removeClass('smallCalend minCalendTop');

							$('.SBThDay').css({ background: '', color: '', 'font-size': '', 'padding-top': '', 'padding-left': '', 'text-align': '', position: '' });
						
							$('.MTThDay').css({ background: '', color: '', 'font-size': '', 'padding-top': '', 'padding-left': '', 'text-align': '', position: '' });
								
							$('.MBThDay').css({ background: '#0080ff', color: '#fff', 'font-size': '10px', 'padding-top': '5px', 'padding-left': '5px', 'text-align': 'left', position: 'relative' });
						}

						$('.inputPicker_mini_top .fa-calendar').css({ color: '#0A9A7A' }); 
						$('.telSHourPicker .fa-calendar').removeAttr('style'); 

						$('.dyItem').removeClass('addDayValue getday');

						$('.BirThYears').show();

						$('.BaseYears').hide();
					}

					$.fn.datePickerCl = function() {
						return this.on(ck, 'input', function() {

							$('input').removeClass('valTh');
							$(this).addClass('valTh');
						});
					}
					doc.datePickerCl();

					$.fn.MInput = function() {
						return this.on('mouseover', 'input', function() {

							$('.datepicker').removeAttr('id');
							$(this).attr({ id: settingsCal.AvailableCal});
						});
					}
					doc.MInput();
					// End TeleSales Calendar
					/***********************************************************/
					/***********************************************************/
					/********************* End All Calendars *******************/
					/***********************************************************/
					/***********************************************************/
					
					// Days Click Event 
					$.fn.dyItemAction = function() {
				    	return this.on(ck, '.smallCalend .dyItem', function() {

				    		$(dateHourPick).val(NullHeader($(this).html()) + '/' + $('.ThisMonthTop').html() + '/' + $('.ThisYearTop').html() + ' ' + nowHour + ':' + nowMinute);

				    		if($('.hourItem').hasClass('addHourValue')) {

				    			$(dateHourPick).val(NullHeader($(this).html()) + '/' + $('.ThisMonthTop').html() + '/' + $('.ThisYearTop').html() + ' ' + $('.addHourValue').html());
				    		} 

				    		dayToggle($(this));

				    		$('.smallCalend .dyItem').removeClass('SBThDay').css({ background: '', color: '', 'font-size': '', 'padding-top': '', 'padding-left': '', 'text-align': '', position: ''});
							
							$(this).addClass('SBThDay').css({ background: '#0080ff', color: '#fff', 'font-size': '10px', 'padding-top': '5px', 'padding-left': '5px', 'text-align': 'left', position: 'relative'});

				    	});
				    }
				    doc.dyItemAction();

				    $.fn.dyItemActionTop = function() {
				    	return this.on(ck, '.minCalendTop .dyItem', function() {

				    		$(dateHourPick).val(NullHeader($(this).html()) + '/' + $('.ThisMonthTop').html() + '/' + $('.ThisYearTop').html());

				    		dayToggle($(this));

				    		$('.minCalendTop .dyItem').removeClass('MTThDay').css({ background: '', color: '', 'font-size': '', 'padding-top': '', 'padding-left': '', 'text-align': '', position: ''});
							
							$(this).addClass('MTThDay').css({ background: '#0080ff', color: '#fff', 'font-size': '10px', 'padding-top': '5px', 'padding-left': '5px', 'text-align': 'left', position: 'relative'});
				    	});
				    }
				    doc.dyItemActionTop();

				    $.fn.dyItemActionBottom = function() {
				    	return this.on(ck, '.minCalendBottom .dyItem', function() {

				    		$(dateHourPick).val(NullHeader($(this).html()) + '/' + $('.ThisMonthTop').html() + '/' + $('.ThisYearTop').html());

				    		dayToggle($(this));

				    		$('.minCalendBottom .dyItem').removeClass('MBThDay').css({ background: '', color: '', 'font-size': '', 'padding-top': '', 'padding-left': '', 'text-align': '', position: ''});
							
							$(this).addClass('MBThDay').css({ background: '#0080ff', color: '#fff', 'font-size': '10px', 'padding-top': '5px', 'padding-left': '5px', 'text-align': 'left', position: 'relative'});
				    	});
				    }
				    doc.dyItemActionBottom();


				    function dayToggle(th) {

				    	MonthTransf();
			    		actMonths();

			    		$('.dyItem').removeClass('addDayValue getday');
			    		th.addClass('addDayValue getday');
				    }

				    // Months Click Event
				    $.fn.hourItemAction = function(hItm) {
				    	return this.on(ck, '.smallCalend .hourItem', function() {

				    		$(hItm).removeClass('addHourValue');
				    		$(this).addClass('addHourValue');

				    		if(!$('.dyItem').hasClass('getday') && $('.secondItem').hasClass('addMinuteValue')) {

				    			$(dateHourPick).val(getDay + '/' + $('.ThisMonthTop').html() + '/' + $('.ThisYearTop').html() + ' ' + $(this).html().slice(0, -2) + $('.addMinuteValue').html());

				    		} else if($('.dyItem').hasClass('getday') && !$('.secondItem').hasClass('addMinuteValue')) {

								$(dateHourPick).val(NullHeader($('.getday').html()) + '/' + $('.ThisMonthTop').html() + '/' + $('.ThisYearTop').html() + ' ' + $(this).html());

				    		} else if(!$('.dyItem').hasClass('getday') && !$('.secondItem').hasClass('addMinuteValue')) {

				    			$(dateHourPick).val(getDay + '/' + $('.ThisMonthTop').html() + '/' + $('.ThisYearTop').html() + ' ' + $(this).html());

				    		} else if($('.dyItem').hasClass('getday') && $('.secondItem').hasClass('addMinuteValue')) {

								$(dateHourPick).val(NullHeader($('.getday').html()) + '/' + $('.ThisMonthTop').html() + '/' + $('.ThisYearTop').html() + ' ' + $(this).html().slice(0, -2) + $('.addMinuteValue').html());
				    		}
				    		MonthTransf();

				    		$('.smallCalend .hourItem').removeClass('MBThHour').css({ background: '', color: '', 'font-size': '', 'padding-top': '', 'padding-left': '', 'text-align': '', position: ''});
							
							$(this).addClass('MBThHour').css({ background: '#0080ff', color: '#fff', 'font-size': '10px', 'padding-top': '5px', 'padding-left': '5px', 'text-align': 'left', position: 'relative'});

				    	});
				    }
				    doc.hourItemAction('.hourItem');

					EmptyItem();
					doc.on(ck, '.next-month, .prev-month', function() { 

						EmptyItem(); 

						$('.dyItem').each(function() { 

							if($(this).html() != '') { $(this).attr({ 'data-date': $(this).html() }) } else { $(this).removeAttr('data-date') }
						});

					});

				}
				doc.RunTeleGridcalendar();




				$.fn.MthYearDrop = function() {
					return this.on(ck, '*', function(e) {

						e.stopPropagation();

						let Macth = $('.ThisMonthTop').html();

						let Mbh = 'MonthBehind';
						let aMt = 'aHeadMonth';

						let clas = $(this)[0].className;

						let id = $(this).attr('id');

						if(clas.indexOf('ThisMonthTop') != -1 ) {

							$('.ThisMonthTopfloor').slideToggle(100);
							$('.ThisYearTopfloor').hide();
						}

						else if(clas.indexOf('ThisYearTop') != -1 ) {

							$('.ThisYearTopfloor').slideToggle(100);
							$('.ThisMonthTopfloor').hide();
						}


						switch(Macth) {
							
							// Month of January
							case 'January':
								$('.decDrop').addClass(Mbh);
								$('.fabDrop').addClass(aMt);
								$('.janDrop').addClass('desabledM');

								// January Click Event For Month of March
								const marDj = clas.indexOf('marchDrop') != -1 ? overCalendar(2) : '';

								// January Click Event For Month of April
								const aprDj = clas.indexOf('aprilDrop') != -1 ? overCalendar(3) : '';

								// January Click Event For Month of May
								const mayDj = clas.indexOf('mayDrop') != -1 ? overCalendar(4) : '';

								// January Click Event For Month of June
								const juDj = clas.indexOf('juneDrop') != -1 ? overCalendar(5) : '';

								// January Click Event For Month of July
								const julDj = clas.indexOf('julyDrop') != -1 ? overCalendar(6) : '';

								// January Click Event For Month of August
								const augDj = clas.indexOf('augDrop') != -1 ? overCalendar(7) : '';

								// January Click Event For Month of September
								const sepDj = clas.indexOf('sepDrop') != -1 ? overCalendar(8) : '';

								// January Click Event For Month of October
								const octDj = clas.indexOf('octDrop') != -1 ? overCalendar(9) : '';

								// January Click Event For Month of November
								const novDj = clas.indexOf('novDrop') != -1 ? overCalendar(10) : '';
								break;

							// Month of February
							case 'February':
								$('.janDrop').addClass(Mbh);
								$('.marchDrop').addClass(aMt);
								$('.fabDrop').addClass('desabledM');

								// February Click Event For Month of April
								const aprDf = clas.indexOf('aprilDrop') != -1 ? overCalendar(2) : '';

								// February Click Event For Month of May
								const mayDf = clas.indexOf('mayDrop') != -1 ? overCalendar(3) : '';

								// February Click Event For Month of June
								const junDf = clas.indexOf('juneDrop') != -1 ? overCalendar(4) : '';

								// February Click Event For Month of July
								const julDf = clas.indexOf('julyDrop') != -1 ? overCalendar(5) : '';

								// February Click Event For Month of August
								const augDf = clas.indexOf('augDrop') != -1 ? overCalendar(6) : '';

								// February Click Event For Month of September
								const sepDf = clas.indexOf('sepDrop') != -1 ? overCalendar(7) : '';

								// February Click Event For Month of October
								const octDf = clas.indexOf('octDrop') != -1 ? overCalendar(8) : '';

								// February Click Event For Month of November
								const novDf = clas.indexOf('novDrop') != -1 ? overCalendar(9) : '';

								// February Click Event For Month of December
								const decDf = clas.indexOf('decDrop') != -1 ? overCalendar(10) : '';
								break;

							// Month of March
							case 'March':
								$('.fabDrop').addClass(Mbh);
								$('.aprilDrop').addClass(aMt);
								$('.marchDrop').addClass('desabledM');

								// March Click Event For Month of January
								const janDma = clas.indexOf('janDrop') != -1 ? overCalendar(-2) : '';

								// March Click Event For Month of May
								const mayDma = clas.indexOf('mayDrop') != -1 ? overCalendar(2) : '';

								// March Click Event For Month of June
								const juneDma = clas.indexOf('juneDrop') != -1 ? overCalendar(3) : '';

								// March Click Event For Month of July
								const julDma = clas.indexOf('julyDrop') != -1 ? overCalendar(4) : '';

								// March Click Event For Month of August
								const augDma = clas.indexOf('augDrop') != -1 ? overCalendar(5) : '';

								// March Click Event For Month of September
								const sepDma = clas.indexOf('sepDrop') != -1 ? overCalendar(6) : '';

								// March Click Event For Month of October
								const octDma = clas.indexOf('octDrop') != -1 ? overCalendar(7) : '';

								// March Click Event For Month of November
								const novDma = clas.indexOf('novDrop') != -1 ? overCalendar(8) : '';

								// March Click Event For Month of December
								const decDma = clas.indexOf('decDrop') != -1 ? overCalendar(9) : '';
								break;

							// Month of April
							case 'April':
								$('.marchDrop').addClass(Mbh);
								$('.mayDrop').addClass(aMt);
								$('.aprilDrop').addClass('desabledM');

								// April Click Event For Month of June
								const junDa = clas.indexOf('juneDrop') != -1 ? overCalendar(2) : '';

								// April Click Event For Month of July
								const julDa = clas.indexOf('julyDrop') != -1 ? overCalendar(3) : '';

								// April Click Event For Month of August
								const augDa = clas.indexOf('augDrop') != -1 ? overCalendar(4) : '';

								// April Click Event For Month of September
								const sepDa = clas.indexOf('sepDrop') != -1 ? overCalendar(5) : '';

								// April Click Event For Month of October
								const octDa = clas.indexOf('octDrop') != -1 ? overCalendar(6) : '';

								// April Click Event For Month of November
								const novDa = clas.indexOf('novDrop') != -1 ? overCalendar(7) : '';

								// April Click Event For Month of December
								const decDa = clas.indexOf('decDrop') != -1 ? overCalendar(8) : '';

								// April Click Event For Month of January
								const janDa = clas.indexOf('janDrop') != -1 ? overCalendar(-3) : '';

								// April Click Event For Month of February
								const fabDa = clas.indexOf('fabDrop') != -1 ? overCalendar(-2) : '';
								break;

							// Month of May
							case 'May':
								$('.aprilDrop').addClass(Mbh);
								$('.juneDrop').addClass(aMt);
								$('.mayDrop').addClass('desabledM');

								// May Click Event For Month of July
								const julDmy = clas.indexOf('julyDrop') != -1 ? overCalendar(2) : '';

								// May Click Event For Month of August
								const augDmy = clas.indexOf('augDrop') != -1 ? overCalendar(3) : '';

								// May Click Event For Month of September
								const sepDmy = clas.indexOf('sepDrop') != -1 ? overCalendar(4) : '';

								// May Click Event For Month of October
								const octDmy = clas.indexOf('octDrop') != -1 ? overCalendar(5) : '';

								// May Click Event For Month of November
								const novDmy = clas.indexOf('novDrop') != -1 ? overCalendar(6) : '';

								// May Click Event For Month of December
								const decDmy = clas.indexOf('decDrop') != -1 ? overCalendar(7) : '';

								// May Click Event For Month of January
								const janDmy = clas.indexOf('janDrop') != -1 ? overCalendar(-4) : '';

								// May Click Event For Month of February
								const fabDmy = clas.indexOf('fabDrop') != -1 ? overCalendar(-3) : '';

								// May Click Event For Month of March
								const marDmy = clas.indexOf('marchDrop') != -1 ? overCalendar(-2) : '';
								break;

							// Month of June
							case 'June':
								$('.mayDrop').addClass(Mbh);
								$('.julyDrop').addClass(aMt);
								$('.juneDrop').addClass('desabledM');

								// June Click Event For Month of August
								const augDju = clas.indexOf('augDrop') != -1 ? overCalendar(2) : '';

								// June Click Event For Month of September
								const sepDju = clas.indexOf('sepDrop') != -1 ? overCalendar(3) : '';

								// June Click Event For Month of October
								const octDju = clas.indexOf('octDrop') != -1 ? overCalendar(4) : '';

								// June Click Event For Month of November
								const novDju = clas.indexOf('novDrop') != -1 ? overCalendar(5) : '';

								// June Click Event For Month of December
								const decDju = clas.indexOf('decDrop') != -1 ? overCalendar(6) : '';

								// June Click Event For Month of January
								const janDju = clas.indexOf('janDrop') != -1 ? overCalendar(-5) : '';

								// June Click Event For Month of February
								const fabDju = clas.indexOf('fabDrop') != -1 ? overCalendar(-4) : '';

								// June Click Event For Month of March
								const marDju = clas.indexOf('marchDrop') != -1 ? overCalendar(-3) : '';

								// June Click Event For Month of April
								const aprDju = clas.indexOf('aprilDrop') != -1 ? overCalendar(-2) : '';
								break;

							// Month of July
							case 'July':
								$('.juneDrop').addClass(Mbh);
								$('.augDrop').addClass(aMt);
								$('.julyDrop').addClass('desabledM');

								// July Click Event For Month of September
								const sepDjl = clas.indexOf('sepDrop') != -1 ? overCalendar(2) : '';

								// July Click Event For Month of October
								const octDjl = clas.indexOf('octDrop') != -1 ? overCalendar(3) : '';

								// July Click Event For Month of November
								const novDjl = clas.indexOf('novDrop') != -1 ? overCalendar(4) : '';

								// July Click Event For Month of December
								const decDjl = clas.indexOf('decDrop') != -1 ? overCalendar(5) : '';

								// July Click Event For Month of January
								const janDjl = clas.indexOf('janDrop') != -1 ? overCalendar(-6) : '';

								// July Click Event For Month of February
								const fabDjl = clas.indexOf('fabDrop') != -1 ? overCalendar(-5) : '';

								// July Click Event For Month of March
								const marDjl = clas.indexOf('marchDrop') != -1 ? overCalendar(-4) : '';

								// July Click Event For Month of April
								const aprDjl = clas.indexOf('aprilDrop') != -1 ? overCalendar(-3) : '';

								// July Click Event For Month of May
								const mayDjl = clas.indexOf('mayDrop') != -1 ? overCalendar(-2) : '';
								break;

							// Month of August
							case 'August':
								$('.julyDrop').addClass(Mbh);
								$('.sepDrop').addClass(aMt);
								$('.augDrop').addClass('desabledM');

								// August Click Event For Month of October
								const octDau = clas.indexOf('octDrop') != -1 ? overCalendar(2) : '';

								// August Click Event For Month of November
								const novDau = clas.indexOf('novDrop') != -1 ? overCalendar(3) : '';

								// August Click Event For Month of December
								const decDau = clas.indexOf('decDrop') != -1 ? overCalendar(4) : '';

								// August Click Event For Month of January
								const janDau = clas.indexOf('janDrop') != -1 ? overCalendar(-7) : '';

								// August Click Event For Month of February
								const fabDau = clas.indexOf('fabDrop') != -1 ? overCalendar(-6) : '';

								// August Click Event For Month of March
								const marDau = clas.indexOf('marchDrop') != -1 ? overCalendar(-5) : '';

								// August Click Event For Month of April
								const aprDau = clas.indexOf('aprilDrop') != -1 ? overCalendar(-4) : '';

								// August Click Event For Month of May
								const mayDau = clas.indexOf('mayDrop') != -1 ? overCalendar(-3) : '';

								// August Click Event For Month of June
								const junDau = clas.indexOf('juneDrop') != -1 ? overCalendar(-2) : '';

								break;

							// Month of September
							case 'September':
								$('.augDrop').addClass(Mbh);
								$('.octDrop').addClass(aMt);
								$('.sepDrop').addClass('desabledM');

								// September Click Event For Month of November
								const novDset = clas.indexOf('novDrop') != -1 ? overCalendar(2) : '';

								// September Click Event For Month of December
								const decDset = clas.indexOf('decDrop') != -1 ? overCalendar(3) : '';

								// September Click Event For Month of January
								const janDset = clas.indexOf('janDrop') != -1 ? overCalendar(-8) : '';

								// September Click Event For Month of February
								const fabDset = clas.indexOf('fabDrop') != -1 ? overCalendar(-7) : '';

								// September Click Event For Month of March
								const marDset = clas.indexOf('marchDrop') != -1 ? overCalendar(-6) : '';

								// September Click Event For Month of April
								const aprDset = clas.indexOf('aprilDrop') != -1 ? overCalendar(-5) : '';

								// September Click Event For Month of May
								const mayDset = clas.indexOf('mayDrop') != -1 ? overCalendar(-4) : '';

								// September Click Event For Month of June
								const junDset = clas.indexOf('juneDrop') != -1 ? overCalendar(-3) : '';

								// September Click Event For Month of July
								const julDset = clas.indexOf('julyDrop') != -1 ? overCalendar(-2) : '';

								break;

							// Month of October
							case 'October':
								$('.sepDrop').addClass(Mbh);
								$('.novDrop').addClass(aMt);
								$('.octDrop').addClass('desabledM');

								// October Click Event For Month of December
								const decDoct = clas.indexOf('decDrop') != -1 ? overCalendar(2) : '';

								// October Click Event For Month of January
								const janDoct = clas.indexOf('janDrop') != -1 ? overCalendar(-9) : '';

								// October Click Event For Month of February
								const fabDcoct = clas.indexOf('fabDrop') != -1 ? overCalendar(-8) : '';

								// October Click Event For Month of March
								const marDoct = clas.indexOf('marchDrop') != -1 ? overCalendar(-7) : '';

								// October Click Event For Month of April
								const aprDoct = clas.indexOf('aprilDrop') != -1 ? overCalendar(-6) : '';

								// October Click Event For Month of May
								const mayDoct = clas.indexOf('mayDrop') != -1 ? overCalendar(-5) : '';

								// October Click Event For Month of June
								const junDoct = clas.indexOf('juneDrop') != -1 ? overCalendar(-4) : '';

								// October Click Event For Month of July
								const julDoct = clas.indexOf('julyDrop') != -1 ? overCalendar(-3) : '';

								// October Click Event For Month of August
								const augDoct = clas.indexOf('augDrop') != -1 ? overCalendar(-2) : '';

								break;

							// Month of November
							case 'November':
								$('.octDrop').addClass(Mbh);
								$('.decDrop').addClass(aMt);
								$('.novDrop').addClass('desabledM');

								// November Click Event For Month of January
								const janDnov = clas.indexOf('janDrop') != -1 ? overCalendar(-10) : '';

								// November Click Event For Month of February
								const fabDnov = clas.indexOf('fabDrop') != -1 ? overCalendar(-9) : '';

								// November Click Event For Month of March
								const marDnov = clas.indexOf('marchDrop') != -1 ? overCalendar(-8) : '';

								// November Click Event For Month of April
								const aprDnov = clas.indexOf('aprilDrop') != -1 ? overCalendar(-7) : '';

								// November Click Event For Month of May
								const mayDnov = clas.indexOf('mayDrop') != -1 ? overCalendar(-6) : '';

								// November Click Event For Month of June
								const junDnov = clas.indexOf('juneDrop') != -1 ? overCalendar(-5) : '';

								// November Click Event For Month of July
								const julDnov = clas.indexOf('julyDrop') != -1 ? overCalendar(-4) : '';

								// November Click Event For Month of August
								const augDnov = clas.indexOf('augDrop') != -1 ? overCalendar(-3) : '';

								// November Click Event For Month of September
								const sepDnov = clas.indexOf('sepDrop') != -1 ? overCalendar(-2) : '';

								break;

							// Month of December
							case 'December':
								$('.novDrop').addClass(Mbh);
								$('.janDrop').addClass(aMt);
								$('.decDrop').addClass('desabledM');

								// December Click Event For Month of February
								const fabDdec = clas.indexOf('fabDrop')	!= -1 ? overCalendar(-10) : '';	

								// December Click Event For Month of March
								const marDdec = clas.indexOf('marchDrop') != -1 ? overCalendar(-9) : '';					

								// December Click Event For Month of April
								const aprDdec = clas.indexOf('aprilDrop') != -1 ? overCalendar(-8) : '';

								// December Click Event For Month of May
								const mayDdec = clas.indexOf('mayDrop') != -1 ? overCalendar(-7) : '';

								// December Click Event For Month of June
								const junDdec = clas.indexOf('juneDrop') != -1 ? overCalendar(-6) : '';

								// December Click Event For Month of July
								const julDdec = clas.indexOf('julyDrop') != -1 ? overCalendar(-5) : '';

								// December Click Event For Month of August
								const augDdec = clas.indexOf('augDrop') != -1 ? overCalendar(-4) : '';

								// December Click Event For Month of September
								const sepDdec = clas.indexOf('sepDrop') != -1 ? overCalendar(-3) : '';

								// December Click Event For Month of October
								const octDdec = clas.indexOf('octDrop') != -1 ? overCalendar(-2) : '';

								break;
						}

						// Goes To a Month Ahead
						if(clas.indexOf('aHeadMonth') != -1) { overCalendar(1) } 
						
						// Goes To a Month Behind	
						if(clas.indexOf('MonthBehind') != -1) { overCalendar(-1) }

						// Year 2000 On Change
				    	if(id == 'yr-2000') {

				    		// Calendar 2010 Injection When Year 2000 Clicked
				    		const y2000 = $(settingsCal.YTop).html().match(2010) ? runYears(-10 * 12, $(this)) : '';

				    		// Calendar 2020 Injection When Year 2000 Clicked
				    		const y2000A = $(settingsCal.YTop).html().match(2020) ? runYears(-20 * 12, $(this)) : '';

				    		// Calendar 2030 Injection When Year 2000 Clicked
				    		const y2000B = $(settingsCal.YTop).html().match(2030) ? runYears(-30 * 12, $(this)) : '';

				    		// Calendar 2040 Injection When Year 2000 Clicked
				    		const y2000C = $(settingsCal.YTop).html().match(2040) ? runYears(-40 * 12, $(this)) : '';

				    		// Calendar 2050 Injection When Year 2000 Clicked
				    		const y2000D = $(settingsCal.YTop).html().match(2050) ? runYears(-50 * 12, $(this)) : '';

				    		// Calendar 2060 Injection When Year 2000 Clicked
				    		const y2000E = $(settingsCal.YTop).html().match(2060) ? runYears(-60 * 12, $(this)) : '';

				    		// Calendar 2070 Injection When Year 2000 Clicked
				    		const y2000F = $(settingsCal.YTop).html().match(2070) ? runYears(-70 * 12, $(this)) : '';
				    	}

				    	// Year 2010 On Change
				    	if(id == 'yr-2010') {

				    		// Calendar 2000 Injection When Year 2010 Clicked
				    		const y2010 = $(settingsCal.YTop).html().match(2000) ? runYears(10 * 12, $(this)) : '';

				    		// Calendar 2020 Injection When Year 2010 Clicked
							const y2010A = $(settingsCal.YTop).html().match(2020) ? runYears(-10 * 12, $(this)) : '';

							// Calendar 2030 Injection When Year 2010 Clicked
							const y2010B = $(settingsCal.YTop).html().match(2030) ? runYears(-20 * 12, $(this)) : '';

							// Calendar 2040 Injection When Year 2010 Clicked
				   			const y2010C = $(settingsCal.YTop).html().match(2040) ? runYears(-30 * 12, $(this)) : '';

				   			// Calendar 2050 Injection When Year 2010 Clicked
				    		const y2010D = $(settingsCal.YTop).html().match(2050) ? runYears(-40 * 12, $(this)) : '';

				    		// Calendar 2060 Injection When Year 2010 Clicked
				    		const y2010E = $(settingsCal.YTop).html().match(2060) ? runYears(-50 * 12, $(this)) : '';

				    		// Calendar 2070 Injection When Year 2010 Clicked
				    		const y2010F = $(settingsCal.YTop).html().match(2070) ? runYears(-60 * 12, $(this)) : '';
				    	}

				    	// Year 2020 On Change
				    	if(id == 'yr-2020') { 

				    		// Calendar 2000 Injection When Year 2020 Clicked
				    		const y2020 = $(settingsCal.YTop).html().match(2000) ? runYears(20 * 12, $(this)) : '';

				    		// Calendar 2010 Injection When Year 2020 Clicked
				    		const y2020A = $(settingsCal.YTop).html().match(2010) ? runYears(10 * 12, $(this)) : '';

				    		// Calendar 2030 Injection When Year 2020 Clicked
				    		const y2020B = $(settingsCal.YTop).html().match(2030) ? runYears(-10 * 12, $(this)) : '';

				    		// Calendar 2040 Injection When Year 2020 Clicked
				    		const y2020C = $(settingsCal.YTop).html().match(2040) ? runYears(-20 * 12, $(this)) : '';

				    		// Calendar 2050 Injection When Year 2020 Clicked
				    		const y2020D = $(settingsCal.YTop).html().match(2050) ? runYears(-30 * 12, $(this)) : '';

				    		// Calendar 2060 Injection When Year 2020 Clicked
				    		const y2020E = $(settingsCal.YTop).html().match(2060) ? runYears(-40 * 12, $(this)) : '';

				    		// Calendar 2070 Injection When Year 2020 Clicked
				    		const y2020F = $(settingsCal.YTop).html().match(2070) ? runYears(-50 * 12, $(this)) : '';
				    	}

				    	// Year 2030 On Change
				    	if(id == 'yr-2030') {

				    		// Calendar 2000 Injection When Year 2030 Clicked
				    		const y2030 = $(settingsCal.YTop).html().match(2000) ? runYears(30 * 12, $(this)) : '';

				    		// Calendar 2010 Injection When Year 2030 Clicked
							const y2030A = $(settingsCal.YTop).html().match(2010) ? runYears(20 * 12, $(this)) : '';

							// Calendar 2020 Injection When Year 2030 Clicked
				    		const y2030B = $(settingsCal.YTop).html().match(2020) ? runYears(10 * 12, $(this)) : '';

				    		// Calendar 2040 Injection When Year 2030 Clicked
				    		const y2030C = $(settingsCal.YTop).html().match(2040) ? runYears(-10 * 12, $(this)) : '';

				    		// Calendar 2050 Injection When Year 2030 Clicked
				    		const y2030D = $(settingsCal.YTop).html().match(2050) ? runYears(-20 * 12, $(this)) : '';

				    		// Calendar 2060 Injection When Year 2030 Clicked
				    		const y2030E = $(settingsCal.YTop).html().match(2060) ? runYears(-30 * 12, $(this)) : '';

				    		// Calendar 2070 Injection When Year 2030 Clicked
				    		const y2030F = $(settingsCal.YTop).html().match(2070) ? runYears(-40 * 12, $(this)) : '';
				    	}

				    	// Year 2040 On Change
				    	if(id == 'yr-2040') {

				    		// Calendar 2000 Injection When Year 2040 Clicked
				    		const y2040 = $(settingsCal.YTop).html().match(2000) ? runYears(40 * 12, $(this)) : '';

				    		// Calendar 2010 Injection When Year 2040 Clicked
							const y2040A = $(settingsCal.YTop).html().match(2010) ? runYears(30 * 12, $(this)) : '';

							// Calendar 2020 Injection When Year 2040 Clicked
				    		const y2040B = $(settingsCal.YTop).html().match(2020) ? runYears(20 * 12, $(this)) : '';

				    		// Calendar 2030 Injection When Year 2040 Clicked
				    		const y2040C = $(settingsCal.YTop).html().match(2030) ? runYears(10 * 12, $(this)) : '';

				    		// Calendar 2050 Injection When Year 2040 Clicked
				    		const y2040D = $(settingsCal.YTop).html().match(2050) ? runYears(-10 * 12, $(this)) : '';

				    		// Calendar 2060 Injection When Year 2040 Clicked
				    		const y2040E = $(settingsCal.YTop).html().match(2060) ? runYears(-20 * 12, $(this)) : '';

				    		// Calendar 2070 Injection When Year 2040 Clicked
				    		const y2040F = $(settingsCal.YTop).html().match(2070) ? runYears(-30 * 12, $(this)) : '';
				    	}

				    	// Year 2050 On Change
				    	if(id == 'yr-2050') {

				    		// Calendar 2000 Injection When Year 2050 Clicked
				    		const y2050 = $(settingsCal.YTop).html().match(2000) ? runYears(50 * 12, $(this)) : '';

				    		// Calendar 2010 Injection When Year 2050 Clicked
							const y2050A = $(settingsCal.YTop).html().match(2010) ? runYears(40 * 12, $(this)) : '';

							// Calendar 2020 Injection When Year 2050 Clicked
				    		const y2050B = $(settingsCal.YTop).html().match(2020) ? runYears(30 * 12, $(this)) : '';

				    		// Calendar 2030 Injection When Year 2050 Clicked
				    		const y2050C = $(settingsCal.YTop).html().match(2030) ? runYears(20 * 12, $(this)) : '';

				    		// Calendar 2040 Injection When Year 2050 Clicked
				    		const y2050D = $(settingsCal.YTop).html().match(2040) ? runYears(10 * 12, $(this)) : '';

				    		// Calendar 2060 Injection When Year 2050 Clicked
				    		const y2050E = $(settingsCal.YTop).html().match(2060) ? runYears(-10 * 12, $(this)) : '';

				    		// Calendar 2070 Injection When Year 2050 Clicked
				    		const y2050F = $(settingsCal.YTop).html().match(2070) ? runYears(-20 * 12, $(this)) : '';
				    	}

				    	// Year 2060 On Change
				    	if(id == 'yr-2060') {

				    		// Calendar 2000 Injection When Year 2060 Clicked
				    		const y2060 = $(settingsCal.YTop).html().match(2000) ? runYears(60 * 12, $(this)) : '';

				    		// Calendar 2010 Injection When Year 2060 Clicked
							const y2060A = $(settingsCal.YTop).html().match(2010) ? runYears(50 * 12, $(this)) : '';

							// Calendar 2020 Injection When Year 2060 Clicked
				    		const y2060B = $(settingsCal.YTop).html().match(2020) ? runYears(40 * 12, $(this)) : '';

				    		// Calendar 2030 Injection When Year 2060 Clicked
				    		const y2060C = $(settingsCal.YTop).html().match(2030) ? runYears(30 * 12, $(this)) : '';

				    		// Calendar 2040 Injection When Year 2060 Clicked
				    		const y2060D = $(settingsCal.YTop).html().match(2040) ? runYears(20 * 12, $(this)) : '';

				    		// Calendar 2050 Injection When Year 2060 Clicked
				    		const y2060E = $(settingsCal.YTop).html().match(2050) ? runYears(10 * 12, $(this)) : '';

				    		// Calendar 2070 Injection When Year 2060 Clicked
				    		const y2060F = $(settingsCal.YTop).html().match(2070) ? runYears(-10 * 12, $(this)) : '';
				    	}

				    	// Year 2070 On Change
				    	if(id == 'yr-2070') {

				    		// Calendar 2000 Injection When Year 2070 Clicked
				    		const y2070 = $(settingsCal.YTop).html().match(2000) ? runYears(70 * 12, $(this)) : '';

				    		// Calendar 2010 Injection When Year 2070 Clicked
							const y2070A = $(settingsCal.YTop).html().match(2010) ? runYears(60 * 12, $(this)) : '';

							// Calendar 2020 Injection When Year 2070 Clicked
				    		const y2070B = $(settingsCal.YTop).html().match(2020) ? runYears(50 * 12, $(this)) : '';

				    		// Calendar 2030 Injection When Year 2070 Clicked
				    		const y2070C = $(settingsCal.YTop).html().match(2030) ? runYears(40 * 12, $(this)) : '';

				    		// Calendar 2040 Injection When Year 2070 Clicked
				    		const y2070D = $(settingsCal.YTop).html().match(2040) ? runYears(30 * 12, $(this)) : '';

				    		// Calendar 2050 Injection When Year 2070 Clicked
				    		const y2070E = $(settingsCal.YTop).html().match(2050) ? runYears(20 * 12, $(this)) : '';

				    		// Calendar 2060 Injection When Year 2070 Clicked
				    		const y2070F = $(settingsCal.YTop).html().match(2060) ? runYears(10 * 12, $(this)) : '';
				    	}

					});
				}
				doc.MthYearDrop();


				// Close Button Injection
				$('.GridClendar .TeleGridDays').before(settingsCal.closeBt);

				// Calendar Hides on HTML Click 
				doc.on(ck, '.closeC', function() { $(settingsCal.TeleCalenGr).hide(); });

				// Save Button ToolTip MouseOver
				doc.on('mouseover', '.closeC', function() { $('.closeC_Tip').css({ display: 'flex' }); });

				// Save Button ToolTip MouseLeave
				doc.on('mouseleave', '.closeC', function() { $('.closeC_Tip').hide(); });

				$("#ThisYearTopfloor").mCustomScrollbar({ theme: "minimal", scrollInertia: 200 });

				$('.mCSB_dragger_bar').css({ background: '#ccc' });
			}

		});

		let RunCalenTop = new RunCalen();

	}
	doc.GridDefaultCalendar();

});

function MonthTransf() {

	// let dateHourPick = '#datetimepicker3';
	let dateHourPick = '.valTh';

	$(dateHourPick).val(function() { 
		return $(this).val()
			.replace('January', '01')
			.replace('February', '02')
			.replace('March', '03')
			.replace('April', '04')
			.replace('May', '05')
			.replace('June', '06')
			.replace('July', '07')
			.replace('August', '08')
			.replace('September', '09')
			.replace('October', '10')
			.replace('November', '11')
			.replace('December', '12');
	});
}

function MonthDrop() {

	$('.dyItem').each(function() { 

		if($(this).html() != '') { $(this).attr({ 'data-date': $(this).html() }) } else { $(this).removeAttr('data-date')}
	});
}

function overCalendar(loop) {
	navigationHandler(loop) // Runs Month Ahead or Behind
	EmptyItem(); 
	//MonthDrop();
	CallAjax();
}

function runYears(num, tText) {

	navigationHandler(num);
	EmptyItem();

	CallAjax();

	$('.ThisYearTop').html(tText.html());
}


function AddPlusYear(year, toYear, nItems) {

	$('.dropYrM').nextAll('.dropYr').detach();

	let TMFYearVal = year;
	let TMFYearId = TMFYearVal;

	for( let y = 0; y < 11; y++ ) { $('.yr-' + toYear).after('<span class="dropYr Y' + toYear + '"></span>') }

	$('.dropYr').each(function() {

		$(this).html(TMFYearVal).attr({ id: 'Yr_' + TMFYearId }); 
		TMFYearVal++; TMFYearId++;

		$('.dropYr:nth-child(n+' + nItems + ')').remove();

		MatchYear('selctedDY', $('.ThisYearTop'));
	});
}

function MatchYear(thisYSel, TopYt) {

	let sYc = thisYSel;
	let TopY = TopYt;

	// Year 2019
	const Y2019 = TopY.html().match('2019') ? $('#Yr_2019').addClass(sYc) : '';

	// // Year 2020
	// const Y2020 = TopY.html().match('2020') ? $('#Yr_2020').addClass(sYc) : '';

	// Year 2021
	const Y2021 = TopY.html().match('2021') ? $('#Yr_2021').addClass(sYc) : '';
}


function CallAjax() {
	$.ajax({

    	type: 'GET',
    	url: 'assets/js/GridTeleSalesCalendar/GridCalendar.json',
    	async: false,

    	success: function(calendata) { 

			let baseYear2 = '';
			for( let i in calendata.baseYears) {

				baseYear2 += '<span class="dropYrM BaseYears yr-' + calendata.baseYears[i].year + '" id="yr-' + calendata.baseYears[i].year + '">' + calendata.baseYears[i].year + '</span>';
			}

			$(baseYear2).appendTo('.ThisYearTopfloor');
    	}
    });
}