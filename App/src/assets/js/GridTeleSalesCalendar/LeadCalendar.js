// Months Content
let content = 'January February March April May June July August September October November December'.split(' ');

// let weekDayName = 'SUN MON TUES WED THURS FRI'.split(' ');

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
    let $table = $('.TeleSalesGridCalendar .table');
    let $week = getCalendarRow();
    let month = ddt.getUTCMonth();
    let $day;
    let i = 1;

    for(; i <= totalDays; i++) {

    	$('.TeleSalesGridCalendar .table td').addClass('CalenTd');

        $day = $week.find('.CalenTd').eq(currentDay);
        $day.text(i);
       
        const CurrentDat = i === currentDate ? $day.addClass('today') : '';

        currentDay = ++currentDay % 7;

        if (currentDay === 0 && (i + 1 <= totalDays)) {
            $week = getCalendarRow();
            currentRow++;
        } 

        doc.on(ck, '.next-month, .prev-month', function() {

	    	if(ddt.getUTCMonth() != month) { $('.dyItem').removeClass('today'); } 
	    });


        // if(totalDays > currentDay) {

        // 	$('.today').prevAll('.dyItem').addClass('PrevDays');

        // 	$('.today').siblings().closest('tr').addClass('CurrentRow');

        // 	$('.CurrentRow').prevAll().addClass('all');

        // 	$('.all .dyItem').addClass('PrevDays');
        // }
    }
}

// Clear generated calendar
function clearCalendar() {
    let $trs = $('.table tr').not(':eq(0)');
    $trs.remove();
    $('.month-year').empty();
}

// Generates table row used when rendering Calendar
function getCalendarRow() {
    let $table = $('.TeleSalesGridCalendar .table');
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

    let ThisYearTopFloor = $('<div/>', { class: 'ThisYearTopfloor'}).appendTo($h3);
    
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

	let HeadGr = $('.TeleSalesGridCalendar');

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

function trPopUps() {

	// Trs Classes
	$('.table tr:eq(1)').addClass('trS');
	$('.table tr:eq(2)').addClass('trT');
	$('.table tr:eq(3)').addClass('trF');
	$('.table tr:eq(4)').addClass('trFi');
	$('.table tr:eq(5)').addClass('trSt');
	$('.table tr:eq(6)').addClass('trSev');

	// Tds Classes
	$('.table tr td:nth-child(1)').addClass('tdF');
	$('.table tr td:nth-child(2)').addClass('tdS');
	$('.table tr td:nth-child(3)').addClass('tdT');
	$('.table tr td:nth-child(4)').addClass('tdFt');
	$('.table tr td:nth-child(5)').addClass('tdFi');
	$('.table tr td:nth-child(6)').addClass('tdSix');
	$('.table tr td:nth-child(7)').addClass('tdSev');	
}