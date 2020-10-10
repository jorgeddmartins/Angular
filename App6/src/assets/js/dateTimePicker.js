
let TDoc = $(document);
let clickEvent = 'click';

let SelectBoxDate = '.Select_Box_Date';
let closeElement = $('div, header, section, nav');

let yearValItem = 1920;
let yearValAttr = yearValItem;
let YearClass = 'DtYear';

;(function() {

	"use strict"


    $.ajax({

        type: 'GET',
        url: 'assets/js/dateTimePicker.json',

        success: function(getTime) { TDoc.TimeHours(getTime); TDoc.CalendarPicker(getTime); }
    });

	let getThisZero = function(event) { 

       const getThFunc = ( event < 10 ) ? event = '0' + event : event = '' + event;
       return event;
    }

	let getThisDate = new Date();
	let getTime = ' ' + '/' + ' ' + getThisZero(getThisDate.getMonth()) + ' ' + '/' + ' ' + getThisDate.getFullYear();
	let getMonth = getThisDate.getMonth();
	let getYear = getThisDate.getFullYear();
	let getDay = getThisDate.getDate();
    let nowMinute = getThisZero(getThisDate.getMinutes());
    let nowHour = getThisZero(getThisDate.getHours());

    let thisDateNow = getDay + '/' + getMonth + '/' + getYear;
    let ThistodayTime = 'TodayTime';

	let DatePickerCalendar = $('<div/>', { class: 'DatePickerCalendar'}).appendTo(SelectBoxDate)
                                .append( 
                                    $('<div/>', { class: 'DteTimePicker_Slider' })
                                        .append(
                                            $('<div/>', { class: 'cal_Fl days-Cl'})

                                                .append($('<span/>', { class: 'clDTitle' }).html('Choose a Day'))
                                                .append($('<div/>', { class: 'slideDayDatePicker' }))

                                                .append($('<div/>', { class: 'slideToGo' })
                                                    .append($('<span/>', { class: 'linkTo daYMonth' }).html('Choose Month'))
                                                    .append($('<span/>', { class: 'linkTo daYYear' }).html('Choose Year'))
                                                )
                                                .append($('<span/>', { class: ThistodayTime }).html(thisDateNow))
                                        )
                                        .append(
                                            $('<div/>', { class: 'cal_Fl months-Cl'})

                                                .append($('<span/>', { class: 'clDTitle' }).html('Choose a Month'))
                                                .append($('<div/>', { class: 'slideMonthDatePicker' }))

                                                .append($('<div/>', { class: 'slideToGo' })
                                                    .append($('<span/>', { class: 'linkTo MonthDay' }).html('Choose Day'))
                                                    .append($('<span/>', { class: 'linkTo MonthYear' }).html('Choose Year'))
                                                )
                                                .append($('<span/>', { class: ThistodayTime }).html(thisDateNow))
                                        )
                                        .append(
                                            $('<div/>', { class: 'cal_Fl years-Cl'})

                                                .append($('<span/>', { class: 'clDTitle' }).html('Choose an Year'))
                                                .append($('<div/>', { class: 'slideYearDatePicker'}))

                                                .append($('<div/>', { class: 'slideToGo' })
                                                    .append($('<span/>', { class: 'linkTo YearLe', style: 'pointer-events: none; color: rgb(255, 255, 255);' }).html('<'))
                                                    .append($('<span/>', { class: 'linkTo YearDay', style: 'margin: 0' }).html('Choose Day'))
                                                    .append($('<span/>', { class: 'linkTo YearMonth', style: 'margin: 0' }).html('Choose Month'))
                                                    .append($('<span/>', { class: 'linkTo YearPl' }).html('+'))
                                                )
                                                .append($('<span/>', { class: ThistodayTime }).html(thisDateNow))
                                        )
                                );


	let TimePickerCalendar = $('<div/>', { class: 'TimePickerCalendar' }).appendTo(SelectBoxDate).append($('<div/>', { class: 'slideTimeDatePicker' }));

    GetDateTime(); 

	$.fn.TimeHours = function(getTime) {

		let timeOpt = '';
		for( let i in getTime.timeHours ) { 

            timeOpt += '<span class="timeOpt">' + getTime.timeHours[i].hour + '</span>'; 
        }
		$(timeOpt).appendTo('.TimePickerCalendar .slideTimeDatePicker');
	}

    $.fn.CalendarPicker = function(getTime) {

        let dayItem = '';
        for( let d in getTime.daysData ) {

            dayItem += '<span class="DtDay" data-date="' + getTime.daysData[d].thisDay + '">' + getTime.daysData[d].thisDay + '</span>';
        }
        $(dayItem).appendTo('.days-Cl .slideDayDatePicker');

        let monthItem = '';
        for( let m in getTime.monthData ) {

            monthItem += '<span class="DtMonth" data-month="' + getTime.monthData[m].datamonth + '">' + getTime.monthData[m].thisMonth + '</span>';
        }
        $(monthItem).appendTo('.months-Cl .slideMonthDatePicker');


        return this.on(clickEvent, '*', function() {

            let thisElm = $(this);
            let TrueVal = true;
            let htmlTh = getThisZero(thisElm.html());
            let dateTimeDay = '#dateTDay';
            let dateTimeMonth = '#dateTMOnth';
            let dateTimeYear = '#dateTYear';
            let dateTimeHour = '#dateTHour';

            let dateValOut = $(dateTimeDay).val() == '' && $(dateTimeMonth).val() == '' && $(dateTimeYear).val() == '' && $(dateTimeHour).val() == '';
            let MonthVal = getMonth == 0 || getMonth == 1 || getMonth == 2 || getMonth == 3 || getMonth == 4 || getMonth == 5 || getMonth == 6 || getMonth == 7 || getMonth == 8 || getMonth == 9 || getMonth == 10 || getMonth == 11;

            switch(TrueVal) {
                case (thisElm.hasClass('DtDay')): // Day Case

                    $('.DtDay').removeClass('selctedItem');
                    $(this).addClass('selctedItem');

                    if(dateValOut) { 
                        if(MonthVal) { $(dateTimeDay).val(htmlTh + '/'); $(dateTimeYear).val(getYear); $(dateTimeHour).val(nowHour + ':' + nowMinute); }
                        GetRMonth();
                    } else { $(dateTimeDay).val(htmlTh + '/'); }
                    break;

                case (thisElm.hasClass('DtMonth')): // Month Case

                    $('.DtMonth').removeClass('selctedItem');
                    $(this).addClass('selctedItem');

                    if(dateValOut) { 
                        if(MonthVal) { 
                            $(dateTimeDay).val(getThisZero(getDay) + '/'); 
                            $(dateTimeMonth).val($(this).html() + '/'); 
                            $(dateTimeYear).val(getYear); 
                            $(dateTimeHour).val(nowHour + ':' + nowMinute); }

                    } else { $(dateTimeMonth).val($(this).html() + '/'); }
                    break;
 
                case (thisElm.hasClass('DtYear')): // Year Case

                    $('.DtYear').removeClass('selctedItem');
                    $(this).addClass('selctedItem');

                    if(dateValOut) { 
                        if(MonthVal) { $(dateTimeDay).val(getThisZero(getDay) + '/'); $(dateTimeYear).val($(this).html()); $(dateTimeHour).val(nowHour + ':' + nowMinute); }
                        GetRMonth();
                    } else { $(dateTimeYear).val($(this).html() + ' ' + ' ' + nowHour + ':' + nowMinute); } 
                    break;

                case (thisElm.hasClass('timeOpt')): // Time Case

                    if(dateValOut) { 
                        if(MonthVal) { $(dateTimeDay).val(getThisZero(getDay) + '/'); $(dateTimeYear).val(getYear + '/'); $(dateTimeHour).val($(this).html()); }
                        GetRMonth();
                    } else { $(dateTimeHour).val($(this).html()); }
                    break;
            }

        });
    }

    let yearItem = '<span class="' + YearClass + '"></span>';
    for( let y = 0; y < 181; y++ ) { $(yearItem).appendTo('.slideYearDatePicker'); }

    $.fn.yearData = function() {
        return this.each(function() {

            $(this).html(yearValItem).attr({ 'data-year': yearValAttr }); 
            yearValItem++; 
            yearValAttr++;
        });
    }
    $('.' + YearClass).yearData();

    let DteTimeSlider = $('.DteTimePicker_Slider');

	$.fn.extend({
		datePickerElm: function() {
    		return this.on(clickEvent, '.datePickerElm', function(e) {
    			e.stopPropagation();

    			$('.DatePickerCalendar').slideToggle(100);
    			$('.TimePickerCalendar').slideUp(100);

    			closeElement.toggleClass('closeDatePicker');

    			if(!closeElement.hasClass('closeDatePicker')) { closeElement.addClass('closeDatePicker'); }
    		});
    	},
    	timePickerElm: function() {
    		return this.on(clickEvent, '.timePickerElm', function(event) {
    			event.stopPropagation();

    			$('.TimePickerCalendar').slideToggle(100);
    			$('.DatePickerCalendar').slideUp(100);

    			closeElement.toggleClass('closeDatePicker');

    			if(!closeElement.hasClass('closeDatePicker')) { closeElement.addClass('closeDatePicker'); }
    		});
    	},
    	closeDatePicker: function() {
    		return this.on(clickEvent, '.closeDatePicker', function() {

    			$('.DatePickerCalendar, .TimePickerCalendar').slideUp(100);

    			closeElement.removeClass('closeDatePicker');
    		});
    	},
    	DatePickerCalendar: function() {
    		return this.on('mouseover', '.DatePickerCalendar, .TimePickerCalendar', function() {

				closeElement.removeClass('closeDatePicker');
    		});
    	},
    	DatePickerCalendarLeave: function() {
    		return this.on('mouseleave', '.DatePickerCalendar, .TimePickerCalendar', function() {

				closeElement.addClass('closeDatePicker');
    		});
    	}
	});
	TDoc.datePickerElm().timePickerElm().closeDatePicker().DatePickerCalendar().DatePickerCalendarLeave();


    $.fn.ChooseAnimation = function() {
        return this.on(clickEvent, '*', function() {

            const dayMonth = ($(this).hasClass('daYMonth')) 
                            ? DteTimeSlider.removeClass('goMonth259 goYear518 goYear0 goMonth518 goYear259').addClass('goDay259') 
                            : DteTimeSlider.hasClass('goDay259');

            const monthDay = ($(this).hasClass('MonthDay')) 
                            ? DteTimeSlider.removeClass('goDay259 goYear518 goYear0 goMonth518 goYear259').addClass('goMonth259') 
                            : DteTimeSlider.hasClass('goMonth259');

            const dayYear = ($(this).hasClass('daYYear'))
                            ? DteTimeSlider.removeClass('goDay259 goMonth259 goYear0 goMonth518 goYear259').addClass('goYear518') 
                            : DteTimeSlider.hasClass('goYear518');

            const monthYear = ($(this).hasClass('MonthYear'))
                            ? DteTimeSlider.removeClass('goDay259 goMonth259 goYear0 goMonth518 goYear259').addClass('goYear518') 
                            : DteTimeSlider.hasClass('goYear518');

            const yearDay = ($(this).hasClass('YearDay'))
                            ? DteTimeSlider.removeClass('goDay259 goMonth259 goYear518 goMonth518 goYear259').addClass('goYear0') 
                            : DteTimeSlider.hasClass('goYear0');

            const yearMonth = ($(this).hasClass('YearMonth'))
                            ? DteTimeSlider.removeClass('goDay259 goMonth259 goYear518 goMonth518 goYear0').addClass('goYear259') 
                            : DteTimeSlider.hasClass('goYear259');
        });
    }
    $(document).ChooseAnimation();


    let slideGo = $('.slideYearDatePicker');
    let GoRight = $('.YearPl');
    let GoLeft = $('.YearLe');
    let GoSpeed = 400;
    let limitRun = '259px';
    let limitStop = '-1554';
    let limitStopL = '0';
    let whiteColor = '#fff';

    $.fn.runTimeYears = function() {
        return this.on(clickEvent, '*', function() {

            let ThTrue = true;

            switch(ThTrue) {

                case $(this).hasClass('YearPl'):
                    slideGo.animate({ left: '-=' + limitRun }, GoSpeed, function() {

                        const RightTimeLimit = (slideGo.position().left <= limitStop) ? GoRight.addClass('stop') && GoRight.css({ 'pointer-events': 'none', color: whiteColor }) : '';
                        GoLeft.removeClass('stop').removeAttr('style');
                    });
                    break;

                case $(this).hasClass('YearLe'):
                    slideGo.animate({ left: '+=' + limitRun }, GoSpeed, function() {

                        const LeftTimeLimit = (slideGo.position().left >= limitStopL) ? GoLeft.addClass('stop') && GoLeft.css({ 'pointer-events': 'none', color: whiteColor }) : '';
                        GoRight.removeClass('stop').removeAttr('style');
                    });
                    break;
            }

        });
    }
    $(document).runTimeYears();


    let taskAppendTemp = '<div class="notesF_Item">' + 
                            '<span class="NoteIt width20">Jorge Martins</span>' + 
                            '<span class="NoteIt width45"></span>' + 
                            '<span class="NoteIt width17-5 paddLft" style="padding-left: 0; padding-right: 0;"></span>' +
                            '<span class="NoteIt paddLft">' + thisDateNow + '</span>' +
                         '</div>';

    let dateDayId = '.addTemplate #dateTDay';
    let dateMonthId = '.addTemplate #dateTMOnth';
    let dateYearId = '.addTemplate #dateTYear';
    let dateTimeId = '.addTemplate #dateTHour';

    $.fn.AppendTasks = function() {
        return this.on('click', '.createTask', function() {

            $('.taskTopNote_Floor .loadItemEdit').after(taskAppendTemp);
            $('.taskTopNote_Floor .notesF_Item:nth-child(2)').addClass('first');
            $('.taskTopNote_Floor .notesF_Item:nth-child(n + 3)').removeClass('first');

            $('.first .width45').html($('.addTemplate .SmsArea').val());
            $('.first .width17-5').html($(dateDayId).val() + $(dateMonthId).val() + $(dateYearId).val() + ' ' + $(dateTimeId).val());

            $('.addTemplate .SmsArea').val('');

            $('.TasksTop_Fl .notesF_Item').each( function() {

                let TaskoddElem = ($(this).is(':odd')) ? $(this).css({ background: '#eee' }) : '';
                let TaskevenElem = ($(this).is(':even')) ? $(this).css({ background: whiteColor }) : '';

            });

            $('.taskNote_Fl').fadeOut(200);
            $(dateDayId).add(dateMonthId).add(dateYearId).add(dateTimeId).val('');
        });
    }
    $(document).AppendTasks();



    function GetDateTime() {
        let slash = '/';
        switch(true) {
            case (getMonth == 0) : $('.' + ThistodayTime).html(getThisZero(getDay) + ' ' + slash + ' ' + 'January' + ' ' + slash + ' ' + getYear); 
                break;
            case (getMonth == 1) : $('.' + ThistodayTime).html(getThisZero(getDay) + ' ' + slash + ' ' + 'February' + ' ' + slash + ' ' + getYear);
                break;
            case (getMonth == 2) : $('.' + ThistodayTime).html(getThisZero(getDay) + ' ' + slash + ' ' + 'March' + ' ' + slash + ' ' + getYear);
                break;
            case (getMonth == 3) : $('.' + ThistodayTime).html(getThisZero(getDay) + ' ' + slash + ' ' + 'April' + ' ' + slash + ' ' + getYear);
                break;
            case (getMonth == 4) : $('.' + ThistodayTime).html(getThisZero(getDay) + ' ' + slash + ' ' + 'May' + ' ' + slash + ' ' + getYear);
                break;
            case (getMonth == 5) : $('.' + ThistodayTime).html(getThisZero(getDay) + ' ' + slash + ' ' + 'June' + ' ' + slash + ' ' + getYear);
                break;
            case (getMonth == 6) : $('.' + ThistodayTime).html(getThisZero(getDay) + ' ' + slash + ' ' + 'July' + ' ' + slash + ' ' + getYear);
                break;
            case (getMonth == 7) : $('.' + ThistodayTime).html(getThisZero(getDay) + ' ' + slash + ' ' + 'August' + ' ' + slash + ' ' + getYear);
                break;
            case (getMonth == 8) : $('.' + ThistodayTime).html(getThisZero(getDay) + ' ' + slash + ' ' + 'September' + ' ' + slash + ' ' + getYear);
                break;
            case (getMonth == 9) : $('.' + ThistodayTime).html(getThisZero(getDay) + ' ' + slash + ' ' + 'October' + ' ' + slash + ' ' + getYear);
                break;
            case (getMonth == 10) : $('.' + ThistodayTime).html(getThisZero(getDay) + ' ' + slash + ' ' + 'November' + ' ' + slash + ' ' + getYear);
                break;
            case (getMonth == 11) : $('.' + ThistodayTime).html(getThisZero(getDay) + ' ' + slash + ' ' + 'December' + ' ' + slash + ' ' + getYear);
                break;
        }
    }

    function GetRMonth() {
        let dateTimeMonth = '#dateTMOnth';
        let slash = '/';

        if(getMonth == 0) { $(dateTimeMonth).val('Jan' + slash);  
        } else if(getMonth == 1) { $(dateTimeMonth).val('Feb' + slash); 
        } else if(getMonth == 2) { $(dateTimeMonth).val('Mar' + slash);
        } else if(getMonth == 3) { $(dateTimeMonth).val('Apr' + slash);
        } else if(getMonth == 4) { $(dateTimeMonth).val('May' + slash);
        } else if(getMonth == 5) { $(dateTimeMonth).val('Jun' + slash);
        } else if(getMonth == 6) { $(dateTimeMonth).val('Jul' + slash);
        } else if(getMonth == 7) { $(dateTimeMonth).val('Aug' + slash);
        } else if(getMonth == 8) { $(dateTimeMonth).val('Sep' + slash);
        } else if(getMonth == 9) { $(dateTimeMonth).val('Oct' + slash);
        } else if(getMonth == 10) { $(dateTimeMonth).val('Nov' + slash);
        } else if(getMonth == 11) { $(dateTimeMonth).val('Dec' + slash); }
    }

})();
