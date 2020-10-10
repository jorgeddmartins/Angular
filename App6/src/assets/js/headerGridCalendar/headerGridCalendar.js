
let doc = $(document);
let ck = 'click';
let drag = 'drag';
let d = new Date();

let content = 'January February March April May June July August September October November December'.split(' ');

// let weekDayName = 'SUN MON TUES WED THURS FRI'.split(' ');

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
    let $table = $('table');
    let $week = getCalendarRow();
    let $day;
    let i = 1;

    for (; i <= totalDays; i++) {
        $day = $week.find('td').eq(currentDay);
        $day.text(i);
       
        const CurrentDat = i === currentDate ? $day.addClass('today') : '';

        currentDay = ++currentDay % 7;

        if (currentDay === 0 && (i + 1 <= totalDays)) {
            $week = getCalendarRow();
            currentRow++;
        }
    }
}

// Clear generated calendar
function clearCalendar() {
    let $trs = $('tr').not(':eq(0)');
    $trs.remove();
    $('.month-year').empty();
}

// Generates table row used when rendering Calendar
function getCalendarRow() {
    let $table = $('table');
    let $tr = $('<tr/>');
    for (let i = 0, len = 7; i < len; i++) {
        $tr.append($('<td/>').addClass('dyItem').css({ border: '1px solid #fff'}));
        $('.dyItem:nth-child(7)').addClass('Day-Saturday');
    }
    $table.append($tr);
    return $tr;
}

// Calendar Header
function HeadGCalendar() {
    let month = d.getUTCMonth();
    let day = d.getUTCDay();
    let year = d.getUTCFullYear();
    let date = d.getUTCDate();
    let totalDaysOfMonth = daysOfMonth[month];
    let counter = 1;

    let $h3 = $('<span>').addClass('TopHContent');

    let $mbx = $('<span>').addClass('ThisMonthTop');
    let ybx = $('<span>').addClass('ThisYearTop')

    // $h3.text(content[month] + ' ' + year);

    $mbx.html(content[month] + ' ');
    ybx.html(year);

    $h3.appendTo('.month-year');
    $mbx.add(ybx).appendTo('.TopHContent');


    let dateToHighlight = 0;

    if (d.getUTCMonth() === month && d.getUTCFullYear() === year) {
        dateToHighlight = date;
    }

    if (month === 1) {
        if ((year % 100 !== 0) && (year % 4 === 0) || (year % 400 === 0)) {
            totalDaysOfMonth = 29;
        }
    }

    renderCalendar(getCalendarStart(day, date), totalDaysOfMonth, dateToHighlight);
};

function navigationHandler(dir) {
    d.setUTCMonth(d.getUTCMonth() + dir);
    clearCalendar();
    HeadGCalendar();
}

// Last and Next Months Items
function EmptyItem(EmpElm) {

	let HeadGr = $('.HeaderGridCalend');

	$('.dyItem').each(function() {
		const dyEmpty = $(this).html() == '' ? $(this).addClass('empty') : '';
	});

	$('.Day-Saturday').each(function() {
		const DaySat = $(this).html().indexOf('30') >= 0 || $(this).html().indexOf('29') >= 0 ? HeadGr.addClass('day30') : HeadGr.removeClass('day30');
	});
}

$(function() {

	"use strict";


	let CalenBasic = $('<div/>', { class: 'HeaderGCalen'}).appendTo('body')
			.append($('<div/>', { class: 'CloseCalend'}))
			.append($('<div/>', { class: 'HeaderGridCalend'}));


	let HeaderUrl = 'assets/js/headerGridCalendar/headerGridCalendar.json';

	$.fn.RunHeadercalendar = function() {
		let NullHeader = function(e) {

			const NulNumber = e < 10 ? e = '0' + e : e = '' + e; return e;
		}

		let getHeaderDate = new Date();
		let getTime = ' ' + '/' + ' ' + NullHeader(getHeaderDate.getMonth()) + ' ' + '/' + ' ' + getHeaderDate.getFullYear();
		let getMonth = getHeaderDate.getMonth();
		let getYear = getHeaderDate.getFullYear();
		let getDay = NullHeader(getHeaderDate.getDate());
	    let nowMinute = NullHeader(getHeaderDate.getMinutes());
	    let nowHour = NullHeader(getHeaderDate.getHours());

	    let ThisDate = getDay + ' / ' + getMonth + ' / ' + getYear;

	    $.ajax({

	    	type: 'GET',
	    	url: HeaderUrl,

	    	success: function(headerGDta) { doc.DtGlb(headerGDta) }
	    });

	    /* Animated DIV */ let slideHeadGrid = $('<div/>', { class: 'SlideCalenGrid CalendDownN' }).appendTo('.HeaderGridCalend');

	    /* Days Floor */ let DySlide = $('<div/>', { class: 'DaySlideHead' }).appendTo('.SlideCalenGrid');

	    /* Months Floor */ let MthSlide = $('<div/>', { class: 'MonthSlideHead' }).appendTo('.SlideCalenGrid');

	    /* Years Floor */ let YeSlide = $('<div/>', { class: 'YearSlideHead' }).appendTo('.SlideCalenGrid'); 


	    let MDateCt = $('.TopHContent');

	    const GetJan = getMonth == 0 ? MDateCt.html(getDay + '/' + 'January' + '/' + getYear) : '';

		const GetFeb = getMonth == 1 ? MDateCt.html(getDay + '/' + 'February' + '/' + getYear) : '';

		const GetMar = getMonth == 2 ? MDateCt.html(getDay + '/' + 'March' + '/' + getYear) : '';

		const GetApr = getMonth == 3 ? MDateCt.html(getDay + '/' + 'April' + '/' + getYear) : '';

		const GetMay = getMonth == 4 ? MDateCt.html(getDay + '/' + 'May' + '/' + getYear) : '';

		const GetJun = getMonth == 5 ? MDateCt.html(getDay + '/' + 'June' + '/' + getYear) : '';

		const GetJul = getMonth == 6 ? MDateCt.html(getDay + '/' + 'July' + '/' + getYear) : '';

		const GetAug = getMonth == 7 ? MDateCt.html(getDay + '/' + 'August' + '/' + getYear) : '';

		const GetSep = getMonth == 8 ? MDateCt.html(getDay + '/' + 'September' + '/' + getYear) : '';

		const GetOct = getMonth == 9 ? MDateCt.html(getDay + '/' + 'October' + '/' + getYear) : '';

		const GetNov = getMonth == 10 ? MDateCt.html(getDay + '/' + 'November' + '/' + getYear) : '';

		const GetDec = getMonth == 11 ? MDateCt.html(getDay + '/' + 'December' + '/' + getYear) : '';


	    $.fn.DtGlb = function(headerGDta) {

	    	let MthDta = '';
	    	for( let m in headerGDta.MthData ) {

	    		MthDta += '<span class="mthItem ItemM_' + headerGDta.MthData[m].data + '" data-month="' + headerGDta.MthData[m].data + '">' + headerGDta.MthData[m].value + '</span>';
	    	}
	    	$(MthDta).appendTo('.MonthSlideHead');


	    	let YeaDta = '';
	    	for( let y in headerGDta.YearData ) {

	    		YeaDta += '<span class="yeItem" data-year="' + headerGDta.YearData[y].value + '">' + headerGDta.YearData[y].value + '</span>';
	    	}
	    	$(YeaDta).appendTo('.YearSlideHead');


	    	let DynMitem = '.ItemM_';

	    	const MonJanSelect = getMonth == 0 ? $(DynMitem + 0).addClass('today') : $(DynMitem + 0).removeClass('today');

	    	const MonFabSelect = getMonth == 1 ? $(DynMitem + 1).addClass('today') : $(DynMitem + 1).removeClass('today');

	    	const MonMarSelect = getMonth == 2 ? $(DynMitem + 2).addClass('today') : $(DynMitem + 2).removeClass('today');

	    	EmptyItem()
	    	doc.on(ck, '.next-month, .prev-month', function() { EmptyItem() });

	    }

	    /* Head of Calendar */ let headOfCalend = '<i class="prev-month haveDate fa fa-chevron-left fa-3x"></i>' + 
	    										  '<i class="next-month haveDate fa fa-chevron-right fa-3x"></i>' +
	    										  // '<i class="lookMonth fa fa-caret-down fa-3x" aria-hidden="true"></i>' +
	    										  // '<i class="lookYear fa fa-caret-down fa-3x" aria-hidden="true"></i>' +
	    										  '<div class="month-year text-center TopHeadC"></div>'; 

	    						$('.SlideCalenGrid').before(headOfCalend);

	    /* Table Content */ let TableCont = '<table class="table table-bordered">' +
	    										'<tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>' +
	    									'</table>'; 

	    					$(TableCont).appendTo('.DaySlideHead');

	    $.fn.HeaderGlobal = function() {
	     	return this.on(ck, '*', function() {

	     		let ThisID = $(this).attr('id');
	     		let ThisClass = $(this);

	     		const dateFirst = ThisID == 'dateFirst' ? $('.HeaderGCalen').fadeIn(200) && $('.headerFirst').css({ 'z-index': 1 }) && $('.headerSecond').removeAttr('style') && $('.HeaderGridCalend').removeClass('leftCalend') : '';
	     		const dateSecond = ThisID == 'dateSecond' ? $('.HeaderGCalen').fadeIn(200) && $('.headerSecond').css({ 'z-index': 1 }) && $('.headerFirst').removeAttr('style') && $('.HeaderGridCalend').addClass('leftCalend') : '';

	     		// Lead Pot Date Inputs
	     		if(ThisID == 'potFirst') {

	     			$('.HeaderGCalen').fadeIn(200) 
	     			$('.headerFirst').css({ 'z-index': 1 }) 
	     			$('.headerSecond').removeAttr('style') 
	     			$('.HeaderGridCalend').addClass('potFirst').removeClass('potSecond')

	     		} else if(ThisID == 'potSecond') {

	     			$('.HeaderGCalen').fadeIn(200) 
	     			$('.headerSecond').css({ 'z-index': 1 }) 
	     			$('.headerFirst').removeAttr('style') 
	     			$('.HeaderGridCalend').addClass('potSecond').removeClass('potFirst')
	     		}

	     		// Pre Cancellation Policies
	     		if(ThisID == 'canFirst') {
	     			$('.HeaderGCalen').fadeIn(200) 
	     			$('.headerFirst').css({ 'z-index': 1 }) 
	     			$('.headerSecond, .headerThird').removeAttr('style') 
	     			$('.HeaderGridCalend').addClass('canFirst').removeClass('canSecond canThird')

	     		} else if(ThisID == 'canSecond') {

	     			$('.HeaderGCalen').fadeIn(200) 
	     			$('.headerSecond').css({ 'z-index': 1 }) 
	     			$('.headerFirst, .headerThird').removeAttr('style') 
	     			$('.HeaderGridCalend').addClass('canSecond').removeClass('canFirst canThird')

	     		} else if(ThisID == 'canThird') {
					$('.HeaderGCalen').fadeIn(200) 
	     			$('.headerThird').css({ 'z-index': 1 }) 
	     			$('.headerFirst, .headerSecond').removeAttr('style') 
	     			$('.HeaderGridCalend').addClass('canThird').removeClass('canFirst canSecond')
	     		}


	     		// On Risk Policies
	     		if(ThisID == 'onFirst') {
	     			$('.HeaderGCalen').fadeIn(200) 
	     			$('.headerFirst').css({ 'z-index': 1 }) 
	     			$('.HeaderGridCalend').addClass('onFirst')
	     		}


	     		// Tasks
	     		if(ThisID == 'taskFirst') {

	     			$('.HeaderGCalen').fadeIn(200) 
	     			$('.taskFirst').css({ 'z-index': 1 }) 
	     			$('.taskSecond, .taskThird').removeAttr('style') 
	     			$('.HeaderGridCalend').addClass('tkFirst').removeClass('tkSecond tkThird')

	     		} else if(ThisID == 'taskSecond') {

					$('.HeaderGCalen').fadeIn(200) 
	     			$('.taskSecond').css({ 'z-index': 1 }) 
	     			$('.taskFirst, .taskThird').removeAttr('style') 
	     			$('.HeaderGridCalend').addClass('tkSecond').removeClass('tkFirst tkThird')

	     		} else if(ThisID == 'taskThird') {

					$('.HeaderGCalen').fadeIn(200) 
	     			$('.taskThird').css({ 'z-index': 1 }) 
	     			$('.taskFirst, .taskSecond').removeAttr('style') 
	     			$('.HeaderGridCalend').addClass('tkThird').removeClass('tkFirst tkSecond')
	     		}


	     		const CloseCalend = ThisClass.hasClass('CloseCalend') ? $('.HeaderGCalen').fadeOut(200) : '';

	     		const PrevMonth = ThisClass.hasClass('prev-month') ? navigationHandler(-1) : '';
	     		const NextMonth = ThisClass.hasClass('next-month') ? navigationHandler(1) : '';

	     		if(ThisClass.hasClass('lookMonth')) {

	     			$('.SlideCalenGrid').removeClass('CalendDownN YearTopN').addClass('MonthTopN') 
	     			$(this).hide()
	     			$('.lookYear').show()

	     			$('.HeaderGridCalend').css({ 'max-height': '248px' })

	     		} else if(ThisClass.hasClass('haveDate')) {

	     			$('.SlideCalenGrid').removeClass('MonthTopN YearTopN').addClass('CalendDownN')
	     			$('.lookMonth, .lookYear').show()

	     			$('.HeaderGridCalend').removeAttr('style')

	     		} else if(ThisClass.hasClass('lookYear')) {

	     			$('.SlideCalenGrid').removeClass('MonthTopN CalendDownN').addClass('YearTopN')
	     			$(this).hide()
	     			$('.lookMonth').show()

	     			$('.HeaderGridCalend').css({ 'max-height': '609px' })
	     		}

	     		let TMo = $('.ThisMonthTop');
				let TYo = $('.ThisYearTop');

				// let DtfId = '#dateFirst';

				let DtfId = '.ThisFocus';

	     		// Click On Days
	     		if(ThisClass.hasClass('dyItem')) {

					$('.dyItem').removeClass('selectThis')
					ThisClass.addClass('selectThis')

					let emlHtml = $(this).html();

					const DayJan = TMo.html().trim().match('January') ? $(DtfId).val(NullHeader(emlHtml) + '/' + 'Jan' + '/' + TYo.html()) : '';

					const DayFab = TMo.html().trim().match('February') ? $(DtfId).val(NullHeader(emlHtml) + '/' + 'Fab' + '/' + TYo.html()) : '';

					const DayMar = TMo.html().trim().match('March') ? $(DtfId).val(NullHeader(emlHtml) + '/' + 'Mar' + '/' + TYo.html()) : '';

					const DayApr = TMo.html().trim().match('April') ? $(DtfId).val(NullHeader(emlHtml) + '/' + 'Apr' + '/' + TYo.html()) : '';

					const DayMay = TMo.html().trim().match('May') ? $(DtfId).val(NullHeader(emlHtml) + '/' + 'May' + '/' + TYo.html()) : '';

					const DayJun = TMo.html().trim().match('June') ? $(DtfId).val(NullHeader(emlHtml) + '/' + 'Jun' + '/' + TYo.html()) : '';

					const DayJul = TMo.html().trim().match('July') ? $(DtfId).val(NullHeader(emlHtml) + '/' + 'Jul' + '/' + TYo.html()) : '';

					const DayAug = TMo.html().trim().match('August') ? $(DtfId).val(NullHeader(emlHtml) + '/' + 'Aug' + '/' + TYo.html()) : '';

					const DaySep = TMo.html().trim().match('September') ? $(DtfId).val(NullHeader(emlHtml) + '/' + 'Sep' + '/' + TYo.html()) : '';

					const DayOct = TMo.html().trim().match('October') ? $(DtfId).val(NullHeader(emlHtml) + '/' + 'Oct' + '/' + TYo.html()) : '';

					const DayNov = TMo.html().trim().match('November') ? $(DtfId).val(NullHeader(emlHtml) + '/' + 'Nov' + '/' + TYo.html()) : '';

					const DayDec = TMo.html().trim().match('December') ? $(DtfId).val(NullHeader(emlHtml) + '/' + 'Dec' + '/' + TYo.html()) : '';


					if($('.mthItem').hasClass('selectMth')) {

						$(DtfId).val(NullHeader(emlHtml) + '/' + $('.selectMth').html() + '/' + TYo.html())

					} else if($('.yeItem').hasClass('selectYear')) {

						$(DtfId).val(NullHeader(emlHtml) + '/' + TMo.html() + '/' + $('.selectYear').html())

						const DayJanY = TMo.html().trim().match('January') ? $(DtfId).val(NullHeader(emlHtml) + '/' + 'Jan' + '/' + $('.selectYear').html()) : '';

						const DayFabY = TMo.html().trim().match('February') ? $(DtfId).val(NullHeader(emlHtml) + '/' + 'Fab' + '/' + $('.selectYear').html()) : '';

						const DayMarY = TMo.html().trim().match('March') ? $(DtfId).val(NullHeader(emlHtml) + '/' + 'Mar' + '/' + $('.selectYear').html()) : '';

						const DayAprY = TMo.html().trim().match('April') ? $(DtfId).val(NullHeader(emlHtml) + '/' + 'Apr' + '/' + $('.selectYear').html()) : '';

						const DayMayY = TMo.html().trim().match('May') ? $(DtfId).val(NullHeader(emlHtml) + '/' + 'May' + '/' + $('.selectYear').html()) : '';

						const DayJunY = TMo.html().trim().match('Jun') ? $(DtfId).val(NullHeader(emlHtml) + '/' + 'Jun' + '/' + $('.selectYear').html()) : '';

						const DayJulY = TMo.html().trim().match('Jul') ? $(DtfId).val(NullHeader(emlHtml) + '/' + 'Jul' + '/' + $('.selectYear').html()) : '';

						const DayAugY = TMo.html().trim().match('Aug') ? $(DtfId).val(NullHeader(emlHtml) + '/' + 'Aug' + '/' + $('.selectYear').html()) : '';

						const DaySepY = TMo.html().trim().match('Sep') ? $(DtfId).val(NullHeader(emlHtml) + '/' + 'Sep' + '/' + $('.selectYear').html()) : '';

						const DayOctY = TMo.html().trim().match('Oct') ? $(DtfId).val(NullHeader(emlHtml) + '/' + 'Oct' + '/' + $('.selectYear').html()) : '';

						const DayNovY = TMo.html().trim().match('Nov') ? $(DtfId).val(NullHeader(emlHtml) + '/' + 'Nov' + '/' + $('.selectYear').html()) : '';

						const DayDecY = TMo.html().trim().match('Dec') ? $(DtfId).val(NullHeader(emlHtml) + '/' + 'Dec' + '/' + $('.selectYear').html()) : '';

					} 

					const YearSelectN = $('.mthItem').hasClass('selectMth') && $('.yeItem').hasClass('selectYear') ? $(DtfId).val(NullHeader(emlHtml) + '/' + $('.selectMth').html() + '/' + $('.selectYear').html()) : '';

	     		} 

				if($(this).hasClass('mthItem')) {

					$('.mthItem').removeClass('selectMth');
					ThisClass.addClass('selectMth');

					let emlHtml = $(this).html();

					// $(DtfId).val(NullHeader($('.selectThis').html()) + '/' + $(this).html() + '/' + TYo.html())

					$(DtfId).val(getDay + '/' + $(this).html() + '/' + getYear)

					const monthDay = $('.dyItem').hasClass('selectThis') ? $(DtfId).val(NullHeader($('.selectThis').html()) + '/' + emlHtml + '/' + getYear) : '';

					const monthYear = $('.yeItem').hasClass('selectYear') ? $(DtfId).val(NullHeader($('.selectThis').html()) + '/' + emlHtml + '/' + getYear) : '';

					const monthDY = $('.dyItem').hasClass('selectThis') && $('.yeItem').hasClass('selectYear') ? $(DtfId).val(NullHeader($('.selectThis').html()) + '/' + emlHtml + '/' + $('.selectYear').html()) : '';

				}

				if($(this).hasClass('yeItem')) {

					$('.yeItem').removeClass('selectYear');
					ThisClass.addClass('selectYear');

					let emlHtml = $(this).html();

					$(DtfId).val(getDay + '/' + getMonth + '/' + $(this).html())

					const Jan0 = getMonth == 0 ? $(DtfId).val(getDay + '/' + 'Jan' + '/' + emlHtml) : '';

					const Feb1 = getMonth == 1 ? $(DtfId).val(getDay + '/' + 'Feb' + '/' + emlHtml) : '';

					const Mar2 = getMonth == 2 ? $(DtfId).val(getDay + '/' + 'Mar' + '/' + emlHtml) : '';

					const Apr3 = getMonth == 3 ? $(DtfId).val(getDay + '/' + 'Apr' + '/' + emlHtml) : '';

					const May4 = getMonth == 4 ? $(DtfId).val(getDay + '/' + 'May' + '/' + emlHtml) : '';

					const Jun5 = getMonth == 5 ? $(DtfId).val(getDay + '/' + 'Jun' + '/' + emlHtml) : '';

					const Jul6 = getMonth == 6 ? $(DtfId).val(getDay + '/' + 'Jul' + '/' + emlHtml) : '';

					const Aug7 = getMonth == 7 ? $(DtfId).val(getDay + '/' + 'Aug' + '/' + emlHtml) : '';

					const Sep8 = getMonth == 8 ? $(DtfId).val(getDay + '/' + 'Sep' + '/' + emlHtml) : '';

					const Oct9 = getMonth == 9 ? $(DtfId).val(getDay + '/' + 'Oct' + '/' + emlHtml) : '';

					const Nov10 = getMonth == 10 ? $(DtfId).val(getDay + '/' + 'Nov' + '/' + emlHtml) : '';

					const Dec11 = getMonth == 11 ? $(DtfId).val(getDay + '/' + 'Dec' + '/' + emlHtml) : '';

				}

	     	});
	    }
	    doc.HeaderGlobal();


	    $.fn.ThisFocusDate = function() {
	    	return this.on(ck, '.ThisFocusDate', function() {

	    		$('.GridInpWith').removeClass('ThisFocus');
	    		$(this).addClass('ThisFocus');

	    	});
	    }
	    doc.ThisFocusDate();

	    $('.allpoliciesTemp .HeaderGridCalend').addClass('DragPolicies');

	 	// $('.HeaderGridCalend').draggable();
	

	   	HeadGCalendar();
	
	}
	doc.RunHeadercalendar();

	let topBar = $('<div/>', { class: 'topBar' }).appendTo('.HeaderGridCalend');
	let BottBar = $('<div/>', { class: 'BottBar' }).appendTo('.HeaderGridCalend');
 
});


// $(function () {
//     $(':text').bind('keydown', function (event) { //on keydown for all textboxes

//             if (event.keyCode == 13) //if this is enter key

//                event.prventDefault();
//         }
//     });
// });