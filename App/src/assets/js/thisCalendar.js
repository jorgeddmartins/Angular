let adDay;
let adMonth;
let adYear;
let dDay;
let dMonth;
let dYear;
let instance;
let settings;
let thisDocument;
let nowDate = new Date();

let nullVal = 0;
let oneVal = 1;

;
(function() {

    "use strict";

    $('div').addClass('thisClose');
    $('.formCalendar, #calendar').removeClass('thisClose');

    let thisNowDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let thisNowMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    let TeamCalendar = function(options, object) {
        adDay = nowDate.getDate();
        adMonth = nowDate.getMonth();
        adYear = nowDate.getFullYear();
        dDay = adDay;
        dMonth = adMonth;
        dYear = adYear;
        instance = object;

        settings = $.extend({}, $.fn.TeamCalendar.defaults, options);

        function lpad(value, length, pad) {
            if (typeof pad == 'undefined') { pad = '0'; }
            var p;
            for (var i = 0; i < length; i++) { p += pad; }
            return (p + value).slice(-length);
        }

        let mouseOver = function() { $(this).addClass('c-nav-btn-over'); };
        let mouseLeave = function() { $(this).removeClass('c-nav-btn-over'); };
        let nextMonth = function() {
            if (dMonth < 11) { dMonth++; } else { dMonth = 0;
                dYear++; }
            runTCalendar(); };
        let previousMonth = function() {
            if (dMonth > 0) { dMonth--; } else { dMonth = 11;
                dYear--; }
            runTCalendar(); };

        function runTCalendar() {
            let dWeekDayOfMonthStart = new Date(dYear, dMonth, 1).getDay();
            let dLastDayOfMonth = new Date(dYear, dMonth + 1, 0).getDate();
            let dLastDayOfPreviousMonth = new Date(dYear, dMonth + 1, 0).getDate() - dWeekDayOfMonthStart + 1;

            let cBody = $('<div/>').addClass('c-grid');
            let cNext = $('<span/>').addClass('c-next c-grid-title c-pad-top');
            let cMonth = $('<div/>').addClass('c-month c-grid-title c-pad-top');
            let cPrevious = $('<span/>').addClass('c-previous c-grid-title c-pad-top');
            cMonth.html(settings.months[dMonth] + ' ' + dYear);

            cPrevious.on('mouseover', mouseOver).on('mouseleave', mouseLeave).on('click', previousMonth);
            cNext.on('mouseover', mouseOver).on('mouseleave', mouseLeave).on('click', nextMonth);

            cBody.append(cPrevious);

            cBody.append(cMonth);
            cBody.append(cNext);
            for (let i = 0; i < settings.weekDays.length; i++) {
                let cWeekDay = $('<span/>').addClass('c-week-day c-pad-top');
                cWeekDay.html(settings.weekDays[i]);
                cBody.append(cWeekDay);
            }
            let day = 1;
            let dayOfNextMonth = 1;
            for (let i = 0; i < 42; i++) {
                let cDay = $('<span/>');
                if (i < dWeekDayOfMonthStart) {
                    cDay.addClass('c-day-previous-month c-pad-top');
                    cDay.html(dLastDayOfPreviousMonth++);

                } else if (day <= dLastDayOfMonth) {
                    cDay.addClass('c-day c-pad-top').attr({ 'data-date': day, 'data-month': dMonth, 'data-year': dYear });

                    if (day == dDay && adMonth == dMonth && adYear == dYear) { cDay.addClass('today-select'); }
                    cDay.html(day++);

                } else { cDay.addClass('c-day-next-month c-pad-top');
                    cDay.html(dayOfNextMonth++); }
                cBody.append(cDay);
            }

            thisDocument = $(document);

            let addNull = function(i) {
                if (i < 10) { i = '0' + i; }
                return i; }

            let nowDay = ((nowDate.getDate().toString().length) == 1) ? '0' + (nowDate.getDate()) : (nowDate.getDate());
            let nowMonth = ((nowDate.getMonth().toString().length) == 1) ? '0' + (nowDate.getMonth() + 1) : (nowDate.getMonth() + 1);
            let nowYear = nowDate.getFullYear();
            let nowTime = addNull(nowDate.getHours()) + ":" + addNull(nowDate.getMinutes());
            let nowMinute = addNull(nowDate.getMinutes());
            let formatDate = nowDay + "/" + nowMonth + "/" + nowYear + " " + nowTime;
            let formDateTimer = nowDay + "/" + nowMonth + "/" + nowYear;
            let halfDate = "/" + nowMonth + "/" + nowYear + " " + nowTime;
            let nowHour = addNull(nowDate.getHours());

            let calendarDate = $('.teamPicker');
            let clickEvent = 'click';
            let mouseOverEvent = 'mouseover';
            let mouseLeaveEvent = 'mouseleave';


            // Extra Plugin
            $.fn.extend({

                gobalDay: function() {
                    return this.on('click', '*', function(e) {

                        switch (true) {

                            case ($(this).hasClass('c-day')):
                                $('.c-day').removeClass('thisSelect');
                                $(this).addClass('thisSelect');

                                let thisDate = $(this).attr('data-date');
                                let thisMonth = $(this).attr('data-month');
                                let thisYear = $(this).attr('data-year');

                                let janMonth = '01';
                                let febMonth = '02';
                                let marMonth = '03';
                                let aprMonth = '04';
                                let mayMonth = '05';
                                let junMonth = '06';
                                let julMonth = '07';
                                let augMonth = '08';
                                let sepMonth = '09';
                                let octMonth = '10';
                                let novMonth = '11';
                                let decMonth = '12';
                                let middleToken = '/';

                                if (thisMonth == 0) {
                                    calendarDate.val(thisDate + middleToken + janMonth + middleToken + thisYear);

                                    if (thisDate >= 1 && thisDate <= 9) { 
                                    	calendarDate.val(0 + thisDate + middleToken + janMonth + middleToken + thisYear); 
                                    }

                                } else if (thisMonth == 1) {
                                    calendarDate.val(thisDate + middleToken + febMonth + middleToken + thisYear);

                                    if (thisDate >= 1 && thisDate <= 9) { calendarDate.val(0 + thisDate + middleToken + febMonth + middleToken + thisYear); }

                                } else if (thisMonth == 2) {
                                    calendarDate.val(thisDate + middleToken + marMonth + middleToken + thisYear);

                                    if (thisDate >= 1 && thisDate <= 9) { calendarDate.val(0 + thisDate + middleToken + marMonth + middleToken + thisYear); }

                                } else if (thisMonth == 3) {
                                    calendarDate.val(thisDate + middleToken + aprMonth + middleToken + thisYear);

                                    if (thisDate >= 1 && thisDate <= 9) { calendarDate.val(0 + thisDate + middleToken + aprMonth + middleToken + thisYear); }

                                } else if (thisMonth == 4) {
                                    calendarDate.val(thisDate + middleToken + mayMonth + middleToken + thisYear);

                                    if (thisDate >= 1 && thisDate <= 9) { calendarDate.val(0 + thisDate + middleToken + mayMonth + middleToken + thisYear); }

                                } else if (thisMonth == 5) {
                                    calendarDate.val(thisDate + middleToken + junMonth + middleToken + thisYear);

                                    if (thisDate >= 1 && thisDate <= 9) { calendarDate.val(0 + thisDate + middleToken + junMonth + middleToken + thisYear); }

                                } else if (thisMonth == 6) {
                                    calendarDate.val(thisDate + middleToken + julMonth + middleToken + thisYear);

                                    if (thisDate >= 1 && thisDate <= 9) { calendarDate.val(0 + thisDate + middleToken + julMonth + middleToken + thisYear); }

                                } else if (thisMonth == 7) {
                                    calendarDate.val(thisDate + middleToken + augMonth + middleToken + thisYear);

                                    if (thisDate >= 1 && thisDate <= 9) { calendarDate.val(0 + thisDate + middleToken + augMonth + middleToken + thisYear); }

                                } else if (thisMonth == 8) {
                                    calendarDate.val(thisDate + middleToken + sepMonth + middleToken + thisYear);

                                    if (thisDate >= 1 && thisDate <= 9) { calendarDate.val(0 + thisDate + middleToken + sepMonth + middleToken + thisYear); }

                                } else if (thisMonth == 9) {
                                    calendarDate.val(thisDate + middleToken + octMonth + middleToken + thisYear);

                                    if (thisDate >= 1 && thisDate <= 9) { calendarDate.val(0 + thisDate + middleToken + octMonth + middleToken + thisYear); }

                                } else if (thisMonth == 10) {
                                    calendarDate.val(thisDate + middleToken + novMonth + middleToken + thisYear);

                                    if (thisDate >= 1 && thisDate <= 9) { calendarDate.val(0 + thisDate + middleToken + novMonth + middleToken + thisYear); }

                                } else if (thisMonth == 11) {
                                    calendarDate.val(thisDate + middleToken + decMonth + middleToken + thisYear);

                                    if (thisDate >= 1 && thisDate <= 9) { calendarDate.val(0 + thisDate + middleToken + decMonth + middleToken + thisYear); }
                                }

                                $('#calendar, .bodyCalendar').fadeOut(300);
                                $('.k-inputCalendar').removeClass('teamPicker_' + oneVal + '').addClass('teamPicker');
                                $('.panel_1').css({ 'z-index': '0' });
                                break;

                            case ($(this).hasClass('teamPicker_' + oneVal + '')):
                                $('#calendar, .bodyCalendar').fadeOut(300);
                                $('.k-inputCalendar').removeClass('teamPicker_' + oneVal + '').addClass('teamPicker');

                                break;
                        }

                    });
                },

                teamPicker: function() {

                	return this.on('click', '.teamPicker', function(e) {

                		    $('#calendar, .bodyCalendar').fadeIn(300);
                            $('.k-inputCalendar').removeClass('teamPicker').addClass('teamPicker_' + oneVal + '');
                            $('.boxSystem').removeClass('thisClose');
                            $('.panel_1').css({ 'z-index': '10000000' });
                            e.stopPropagation();

                	});
                }

            });

            $(instance).addClass('calendar');
            $(instance).html(cBody);
            thisDocument.gobalDay().teamPicker();
        }

        return runTCalendar();
    }

    $.fn.TeamCalendar = function(oInit) {

        return this.each(function() { return TeamCalendar(oInit, $(this)); }); 
    };

    $('#calendar').TeamCalendar({

        weekDays: thisNowDays,
        months: thisNowMonths

    });

}());