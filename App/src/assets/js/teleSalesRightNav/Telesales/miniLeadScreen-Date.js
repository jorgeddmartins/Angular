
$(function() {

	showTip = '.showDtaNotes-'; addNotes = '.notes-'; nullVall = 0; oneVal = 1; twoVal = 2; threeVal = 3; fourVal = 4;
	$thisDocument = $(document); $mouseEnter = 'mouseenter'; $mouseLeave = 'mouseleave'; dateTime2 = $('#datetimepicker2'); dateTime3 = $('#datetimepicker3');
	dateTime0 = $('#datetimepicker-0'); dateTime1 = $('#datetimepicker-1'); dateTime02 = $('#datetimepicker-2'); dateTime03 = $('#datetimepicker-3'); dateTime04 = $('#datetimepicker-4');

	$.fn.extend({

		dateTime: function() {

			dateTime2.add(dateTime3).add(dateTime0).add(dateTime1).add(dateTime02).add(dateTime03).add(dateTime04).datetimepicker({
				format: 'd/m/Y H:i',
		        dayOfWeekStart: 0,
		        lang:'en',
		        startDate: '00',
		        minDate: new Date()
		    });
		    dateTime2.add(dateTime3).add(dateTime0).add(dateTime1).add(dateTime02).add(dateTime03).add(dateTime04).datetimepicker({ 
		    	onGenerate:function( ct ){ jQuery(this).find('.xdsoft_timepicker').show(); }, 
		    });
		    dateTime2.add(dateTime3).datetimepicker({
			  	onChangeDateTime:function(dp,$input) { 

			  		$('.btnAddTask').removeClass('DisableElement disabledButton'); $('.selectTask_F .backGreen').removeClass('disabledButton');
			  	}
			});


			$("#productListFloor").mCustomScrollbar({ theme: "minimal" });
		},
		notes0Over: function() { return this.on($mouseEnter, addNotes + nullVall, function() { $(showTip + nullVall).show(); }); },
		notes0Leave: function() { return this.on($mouseLeave, addNotes + nullVall, function() { $(showTip + nullVall).hide(); }); },
		notes1Over: function() { return this.on($mouseEnter, addNotes + oneVal, function() { $(showTip + oneVal).show(); }); },
		notes1Leave: function() { return this.on($mouseLeave, addNotes + oneVal, function() { $(showTip + oneVal).hide(); }); },
		notes2Over: function() { return this.on($mouseEnter, addNotes + twoVal, function() { $(showTip + twoVal).show(); }); },
		notes2Leave: function() { return this.on($mouseLeave, addNotes + twoVal, function() { $(showTip + twoVal).hide(); }); },
		notes3Over: function() { return this.on($mouseEnter, addNotes + threeVal, function() { $(showTip + threeVal).show(); }); },
		notes3Leave: function() { return this.on($mouseLeave, addNotes + threeVal, function() { $(showTip + threeVal).hide(); }); },
		notes4Over: function() { return this.on($mouseEnter, addNotes + fourVal, function() { $(showTip + fourVal).show(); }); },
		notes4Leave: function() { return this.on($mouseLeave, addNotes + fourVal, function() { $(showTip + fourVal).hide(); }); },
		closeBtnTask: function() { return this.on('click', '.closeBtnTask', function() { $('.userDrop ').hide(); }); }

	});

	loadFunc = { thisToLoad: function() {

		$thisDocument.dateTime(); $thisDocument.notes0Over(); $thisDocument.notes0Leave(); $thisDocument.notes1Over(); $thisDocument.notes1Leave();
		$thisDocument.notes2Over(); $thisDocument.notes2Leave(); $thisDocument.notes3Over(); $thisDocument.notes3Leave(); $thisDocument.notes4Over();
		$thisDocument.notes4Leave(); $thisDocument.closeBtnTask();
	}}

	loadFunc.thisToLoad();



    alerts = $('.leftMini .k-state-selected td div');
	alertCall = $('.alert_Call');
	notification = 'alert_notification_';
	alertColor = 'alert_';

 	if(alerts.hasClass('' + notification + 'red')) {
        alertCall.addClass('' + alertColor + 'Red');

    } else if(alerts.hasClass('' + notification + 'purple')) {
        alertCall.addClass('' + alertColor + 'Purple');

    } else if(alerts.hasClass('' + notification + 'orange')) {
        alertCall.addClass('' + alertColor + 'Orange');
    
    } else if(alerts.hasClass('' + notification + 'green')) {
        alertCall.addClass('' + alertColor + 'Green');

    } else if(alerts.hasClass('' + notification + 'violet')) {
        alertCall.addClass('' + alertColor + 'Violet');
    
    } else if(alerts.hasClass('' + notification + 'darkblue')) {
        alertCall.addClass('' + alertColor + 'Darkblue');
    }



});
