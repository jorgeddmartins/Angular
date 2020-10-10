
let $TDoc = $(document);
let EventClick = 'click';

$(function() {

	"use strict";

	let warningTaskTemp = $('<span/>', { class: 'warningNote' });

	$('.task_TextArea, .task_InpSelect').after(warningTaskTemp);

	let warningVal = 0;

	$('.warningNote').each(function() {

		$(this).addClass('warn_' + warningVal); warningVal++;
	});

	$('.warn_0').html('Please, select a Valid Task type');
	$('.warn_1').html('Please, enter a Valid Task');

	let addNull = function(i) { if(i < 10) { i = '0' + i; } return i; }

	let currentdate = new Date(); 
	let dayWeek = currentdate.getDay() + " ";
    let datetime = addNull(currentdate.getDate()) + "/" + addNull(currentdate.getMonth() + 1)  + "/" + currentdate.getFullYear();

	let addSmsTemp = '<div class="notesF_Item addThSms ThSmsEdit">' +
						'<span class="NoteIt authorFl width20">Author</span>' +
						'<span class="NoteIt smsNote_html width54 icoSms"></span>' +
						'<span class="NoteIt date_Fl paddLft"></span>' +
						'<span class="saveNote"></span>' +
					 '</div>';

	// let addTaskTemp = '<div class="notesF_Item topTask">' +
	// 						'<span class="NoteIt width20 topTaskName">Jorge Martins</span>' +
	// 						'<span class="NoteIt width45 topTaskDesc">Description</span>' +
	// 						'<span class="NoteIt width17-5 paddLft topTaskdateDue">dd/mm/yyyy</span>' +
	// 						'<span class="NoteIt paddLft topTaskCreateDate">dd/mm/yyyy</span>' +
	// 						'<span class="saveNote"></span>' +
	// 				  '</div>';
	$.fn.extend({

    	boxSmsNote: function() {
    		return this.on(EventClick, '*', function() {

    			let ThisElem = $(this);

    			switch(true) {

    				case (ThisElem.hasClass('confirmBtn')):
                    
    					$('.smsNote_Fl').fadeOut(300);
		    			$(addSmsTemp).appendTo('.noteSms_Floor');
		    			$('.ThSmsEdit .authorFl').html($('.authorInp').val());
		    			$('.smsNote_html').html($('.SmsArea').val());
		    			$('.addNoteSms').addClass('notAllowedNote');
		    			$('.notesF_Item:odd').addClass('noteWhite').removeClass('noteGrey');
    					$('.notesF_Item:even').addClass('noteGrey').removeClass('noteWhite');

    					break;

    				case (ThisElem.hasClass('addTask_Btn')):

    					let taskOpt = $('.task_Inp');

    					const taskArea = ($('.task_TextArea').val().length >= 3 && taskOpt.val() !== '') ?
                            $('.taskTopNote_Floor .loadItemEdit').after(addTaskTemp) &&
                            $('.taskNote_Fl').fadeOut(300) &&
                            $('.topTask .topTaskDesc').html($('.task_TextArea').val()) &&
                            $('.topTask .topTaskCreateDate').html(datetime) &&
                            $('.notesF_Item:odd').addClass('noteWhite').removeClass('noteGrey') &&
                            $('.notesF_Item:even').addClass('noteGrey').removeClass('noteWhite') : $('.warningNote').show();

                        const WarnZeroN = (taskOpt.val() !== '') ? $('.warn_0').hide() : '';

                        const WarnOneN = ($('.task_TextArea').val().length >= 3) ? $('.warn_1').hide() : '';
    					break;
    			}
    		});
    	}
    });
    $TDoc.boxSmsNote();

    $('.task_Inp').on('change', function() { const warnZero = ($(this).val() !== '') ? $('.warn_0').hide() : ''; });

    $.fn.extend({
    	taskArea: function() {
    		return this.on('input', '.task_TextArea', function() {

                const warnOne = ($('.task_TextArea').val().length >= 3) ? $('.warn_1').hide() : '';
    		});
    	}
    });
    $TDoc.taskArea();


    let SmsAddTempArea = '.addTemplate .SmsArea';
    let SendSms = $('.SendSms_Btn');
    let disabledClass = 'disabled';

    // Sms Templates
    let contactTemp = "Dear Contact1, We've been trying to contact you with regards to your #provider# life insurance policy. Please call on  to discuss this further. Alternatively, simply reply to this text to advise of the most convenient time to call. Kind Regards, Jabran Faisal, admin@smartercover.com.Mr";
    let InformalTemp = "Hello Informal1, its from Smarter Cover regarding your Life Insurance. Are you happy with the outstanding payments being made on your date or would you like me to arrange something else for you? You can reply to this message or call me on #usercontactnumber#. Kind Regards, #username#, #scemail#";

    $.fn.SmsCustomer = function() {
    	return this.on('mouseover', '.SmsCustomer', function() {

    		$('.SmsCustomer').removeClass('addTemplate');
    		$(this).addClass('addTemplate');
    	});
    }
    $TDoc.SmsCustomer();

    $.fn.smsIn = function() {
        return this.on(EventClick, '*', function() {

            const contactAddTemp = ($(this).hasClass('contact')) ? $(SmsAddTempArea).val(contactTemp) && SendSms.removeClass(disabledClass) : '';

            const informalAddTemp = ($(this).hasClass('informal')) ? $(SmsAddTempArea).val(InformalTemp) && SendSms.removeClass(disabledClass) : '';

            const pleaseSelectAddTemp = ($(this).hasClass('pleaseSelect')) ? $(SmsAddTempArea).val('') && SendSms.addClass(disabledClass) : '';

        });
    }
    $TDoc.smsIn();

    $(document).on('input', '.SmsArea', function() { 

        const inptArea = ($.trim($(this).val()).length >= 3) ? SendSms.removeClass(disabledClass) : SendSms.addClass(disabledClass);
    });

});