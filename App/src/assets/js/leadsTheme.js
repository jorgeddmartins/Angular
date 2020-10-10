let $eventClick = 'click';
let $eventDocument = $(document);

$(function() {

    "use strict";

    $.fn.bodyEvents = function() {
        return this.on($eventClick, '*', function(e) {

            let $This = $(this);
            let $thisTrue = true;

            switch ($thisTrue) {

                case ($This.hasClass('daysTime')):
                    e.stopPropagation();
                    $('.daysDrop').slideToggle(100);
                    $('.daysFl').toggleClass('rotate0');
                    $('div, nav, span, img').toggleClass('stopThis');
                    break;

                case ($This.hasClass('dropItem')):
                    $('.panel-input .daysTime').val($This.html());
                    $('.daysDrop').slideUp(100);
                    $('.daysFl').removeClass('rotate0');
                    break;

                case ($This.hasClass('stopThis')):
                    $('.Drop_Panel').slideUp(100);
                    $('div, nav, span, img').removeClass('stopThis');
                    $('.panel-input').removeClass('rotate0');
                    break;

                case ($This.hasClass('tabL')):
                    $('.tabL').removeClass('selected');
                    $This.addClass('selected');
                    break;

                case ($(this).hasClass('datepicker')):
                    $('.calendar').css({ left: '165px' });
                    break;

                // case ($(this).hasClass('datepicker2')):
                //     $('.calendar').css({ left: '478px' });
                //     break;

                case ($(this).hasClass('bodyCalendar')):
                    $('#calendar').hide();
                    $(this).hide();
                    $('.k-inputCalendar').removeClass('teamPicker_1').addClass('teamPicker');
                    $('.panel_1').css({ 'z-index': '0' });
                    break;
            }

        });
    }

    $eventDocument.bodyEvents();

    $('.panel-input .daysTime').val($('.daysDrop .selected').html());

    let panelVal = 0;
    let panelTeml = '<div class="panel-input"></div>';
    let inPanel1 = '<label></label>' +
			        '<span class="k-widget">' +
			        	'<input class="k-input" role="combobox" type="text" />' +
			        '</span>';

	let navigItems = '<span class="boxSystem_Arrow"></span>';
	let iconItem = $('<i/>').attr({ 'aria-hidden': 'true' });
	let btnT = $('<button/>').addClass('k-button');

    for (let i = 0; i < 7; i++) {

        $(panelTeml).appendTo('.TopLeads');
    }

    $.fn.panelInput = function() {
        return this.each(function() {

        	let elmThis = $(this);

            elmThis.addClass('panel_' + panelVal);
            panelVal++;

            if (elmThis.hasClass('panel_1') || elmThis.hasClass('panel_2')) {

                $(inPanel1).appendTo(this);
                $('.k-widget', this).addClass('k-widget-calendar');
            }

            if (elmThis.hasClass('panel_1')) {

                $('label', this).html('From');
                $('.k-input', this).attr({ id: 'datepicker', 'data-role': 'datepicker', name: 'DateFrom', placeholder: 'Select Date' })
                .addClass('k-inputCalendar teamPicker datepicker');
            }

            if (elmThis.hasClass('panel_2')) {

                $('label', this).html('To');
                $('.k-input', this).attr({ id: 'datepicker2', 'data-role': 'datepicker', name: 'DateFrom', placeholder: 'Select Date' });
                $('#calendar', this).remove();
            }

            if (elmThis.hasClass('panel_3')) {

            	$(inPanel1).appendTo(this);
            	$('label', this).remove();
                $('#calendar', this).remove();
            	$('.k-input', this).attr({ id: 'DateFrom', placeholder: 'Lead ID Search' });
            }

            if (elmThis.hasClass('panel_4') || elmThis.hasClass('panel_5')) {

            	$(navigItems).appendTo(this);
            }

            $(iconItem).appendTo('.boxSystem_Arrow');

            $('.panel_6, .panel_7').addClass('btnTop');
            $(btnT).appendTo('.btnTop');

        });
    }

    $('.panel-input').panelInput();

    $('.panel_3 .k-input').css({ 'padding-right': '7px' });

    $('.panel_4 i').addClass('fa fa-angle-left');
    $('.panel_5 i').addClass('fa fa-angle-right');

    $('.panel_6 .k-button').html('Get Leads');
    $('.panel_7 .k-button').html('Reset');


    let IconFull = $('<i/>').addClass('fas fa-angle-down').attr({ 'aria-hidden': 'true' }).appendTo('.top_Tr .th_full');
    $('.th_Null input').remove();


    $.fn.trans = function() {

        return this.each(function() {

           if($(this).val() == 'Transferred') { $(this).css({ color: '#27ae60'}); }  

        });
    }

    $('.tr_body .border-left input').trans();

    let calendarFloor = $('<div/>').attr({ id: 'calendar' }).css({ 'z-index': '10000000', top: '103%' }).appendTo('.TopLeads'); 


    let boDCalend = $('<div/>').addClass('bodyCalendar').css({

        position: 'absolute',
        width: '100%',
        height: '100%',
        left: '0',
        top: '0',
        background: 'rgba(0,0,0, .20)',
        'z-index': '1000000'

    }).appendTo('body');


    $('.bodyCalendar').hide();

    $("#GirBody_Fl").mCustomScrollbar({ theme:"minimal" });
    // $("#GirBody_Fl").mCustomScrollbar({ theme:"dark-3" });
    // $("#GirBody_Fl").mCustomScrollbar({ theme:"dark-thin" });


    $.getScript('assets/js/thisCalendar.js');

});