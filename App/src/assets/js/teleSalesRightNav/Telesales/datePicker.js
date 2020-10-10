
$(function() {

	$('#datetimepicker3').datetimepicker(
        {
			format: 'd/m/Y H:i',
            inline: false,
            onSelectDate: function (currentDateTime) {
                if (currentDateTime != null) {
                   GeTelesalesQuota(currentDateTime);

                }
            }
        }
    );
    $('#calendarIcon').click(function () { $('#datetimepicker3').datetimepicker('show'); });

	
	$clickEvent = 'click';
	$mouseEnterEvent = 'mouseenter';
	$mouseLeaveEvent = 'mouseleave';
	$dateTimepopUp = $('.dateTimepopUp');
	xdSoftpicker = '.xdsoft_datetimepicker';
	$popUpfirst = '.xdsoft_popUpfirst';
	$popUpsecond = '.xdsoft_popUpsecond';
	dayofweek = '.xdsoft_day_of_week';
	thisDocument = $(document);
	firstweek00 = 0;
	firstweek0 = 1;
	firstweek1 = 2;
	firstweek2 = 3;
	firstweek3 = 4;
	firstweek4 = 5;
	firstweek5 = 6;
	
	
	$.fn.extend({
	    datetimepicker2: function() {
	        return this.on($clickEvent, '#datetimepicker2', function() {
	            $('' + xdSoftpicker + ' .xdsoft_calendar').removeClass('xdsoft_popUpfirst');
	            $dateTimepopUp.addClass('displThisN');
	        });
	    },
	    datetimepicker3: function() {
	        return this.on($clickEvent, '#datetimepicker3', function() {
	            $('' + xdSoftpicker + ' .xdsoft_calendar').addClass('xdsoft_popUpfirst');
	            $dateTimepopUp.removeClass('displThisN').hide();
	        });
	    },
	    firstRow: function() {
	        return this.on($mouseEnterEvent, '' + xdSoftpicker + ' ' + $popUpfirst + ' tr:nth-child(' + firstweek0 + ')', function() {
	            $dateTimepopUp.addClass('topTrFirst');
	        });
	    },
	    firstRowLeave: function() {
	        return this.on($mouseLeaveEvent, '' + xdSoftpicker + ' ' + $popUpfirst + ' tr:nth-child(' + firstweek0 + ')', function() {
	            $dateTimepopUp.removeClass('topTrFirst');
	        });
	    },
	    secondRow: function() {
	        return this.on($mouseEnterEvent, '' + xdSoftpicker + ' ' + $popUpfirst + ' tr:nth-child(' + firstweek1 + ')', function() {
	            $dateTimepopUp.addClass('topTrSecond');
	        });
	    },
	    secondRowLeave: function() {
	        return this.on($mouseLeaveEvent, '' + xdSoftpicker + ' ' + $popUpfirst + ' tr:nth-child(' + firstweek1 + ')', function() {
	            $dateTimepopUp.removeClass('topTrSecond');
	        });
	    },
	    thirdRow: function() {
	        return this.on($mouseEnterEvent, '' + xdSoftpicker + ' ' + $popUpfirst + ' tr:nth-child(' + firstweek2 + ')', function() {
	            $dateTimepopUp.addClass('topTrThird');
	        });
	    },
	    thirdRowLeave: function() {
	        return this.on($mouseLeaveEvent, '' + xdSoftpicker + ' ' + $popUpfirst + ' tr:nth-child(' + firstweek2 + ')', function() {
	            $dateTimepopUp.removeClass('topTrThird');
	        });
	    },
	    fourthRow: function() {
	        return this.on($mouseEnterEvent, '' + xdSoftpicker + ' ' + $popUpfirst + ' tr:nth-child(' + firstweek3 + ')', function() {
	            $dateTimepopUp.addClass('topTrFourth');
	        });
	    },
	    fourthLeave: function() {
	        return this.on($mouseLeaveEvent, '' + xdSoftpicker + ' ' + $popUpfirst + ' tr:nth-child(' + firstweek3 + ')', function() {
	            $dateTimepopUp.removeClass('topTrFourth');
	        });
	    },
	    fifthRow: function() {
	        return this.on($mouseEnterEvent, '' + xdSoftpicker + ' ' + $popUpfirst + ' tr:nth-child(' + firstweek4 + ')', function() {
	            $dateTimepopUp.addClass('topTrFifth');
	        });
	    },
	    fifthLeave: function() {
	        return this.on($mouseLeaveEvent, '' + xdSoftpicker + ' ' + $popUpfirst + ' tr:nth-child(' + firstweek4 + ')', function() {
	            $dateTimepopUp.removeClass('topTrFifth');
	        });
	    },
	    sixthRow: function() {
	        return this.on($mouseEnterEvent, '' + xdSoftpicker + ' .xdsoft_popUpfirst tr:nth-child(' + firstweek5 + ')', function() {
	            $dateTimepopUp.addClass('topTrSixth');
	        });
	    },
	    sixthLeave: function() {
	        return this.on($mouseLeaveEvent, '' + xdSoftpicker + ' .xdsoft_popUpfirst tr:nth-child(' + firstweek5 + ')', function() {
	            $dateTimepopUp.removeClass('topTrSixth');
	        });
	    },
	    dateTimeoverfirst0: function() {
	        return this.on($mouseEnterEvent, '' + $popUpfirst + ' td.xdsoft_day_of_week' + firstweek00 + '', function() {
	            $dateTimepopUp.addClass('fisrtTop0');
	        });
	    },
	    dateTimeleavefirst0: function() {
	        return this.on($mouseLeaveEvent, '' + $popUpfirst + ' td.xdsoft_day_of_week' + firstweek00 + '', function() {
	            $dateTimepopUp.hide().removeClass('fisrtTop0');
	            $('.rotationLimit, .manuallyQueueLimit').removeClass('Limit');
	        });
	    },
	    dateTimeoverfirst1: function() {
	        return this.on($mouseEnterEvent, '' + $popUpfirst + ' td.xdsoft_day_of_week' + firstweek0 + '', function() {
	            $dateTimepopUp.addClass('firstTop1');
	        });
	    },
	    dateTimeleavefirst1: function() {
	        return this.on($mouseLeaveEvent, '' + $popUpfirst + ' td.xdsoft_day_of_week' + firstweek0 + '', function() {
	            $dateTimepopUp.hide().removeClass('firstTop1');
	            $('.rotationLimit, .manuallyQueueLimit').removeClass('Limit');
	        });
	    },
	    dateTimeoverfirst2: function() {
	        return this.on($mouseEnterEvent, '' + $popUpfirst + ' td.xdsoft_day_of_week' + firstweek1 + '', function() {
	            $dateTimepopUp.addClass('firstTop2');
	        });
	    },
	    dateTimeleavefirst2: function() {
	        return this.on($mouseLeaveEvent, '' + $popUpfirst + ' td.xdsoft_day_of_week' + firstweek1 + '', function() {
	            $dateTimepopUp.hide().removeClass('firstTop2');
	            $('.rotationLimit, .manuallyQueueLimit').removeClass('Limit');
	        });
	    },
	    dateTimeoverfirst3: function() {
	        return this.on($mouseEnterEvent, '' + $popUpfirst + ' td.xdsoft_day_of_week' + firstweek2 + '', function() {
	            $dateTimepopUp.addClass('firstTop3');
	        });
	    },
	    dateTimeleavefirst3: function() {
	        return this.on($mouseLeaveEvent, '' + $popUpfirst + ' td.xdsoft_day_of_week' + firstweek2 + '', function() {
	            $dateTimepopUp.hide().removeClass('firstTop3');
	            $('.rotationLimit, .manuallyQueueLimit').removeClass('Limit');
	        });
	    },
	    dateTimeoverfirst4: function() {
	        return this.on($mouseEnterEvent, '' + $popUpfirst + ' td.xdsoft_day_of_week' + firstweek3 + '', function() {
	            $dateTimepopUp.addClass('firstTop4');
	        });
	    },
	    dateTimeleavefirst4: function() {
	        return this.on($mouseLeaveEvent, '' + $popUpfirst + ' td.xdsoft_day_of_week' + firstweek3 + '', function() {
	            $dateTimepopUp.hide().removeClass('firstTop4');
	            $('.rotationLimit, .manuallyQueueLimit').removeClass('Limit');
	        });
	    },
	    dateTimeoverfirst5: function() {
	        return this.on($mouseEnterEvent, '' + $popUpfirst + ' td.xdsoft_day_of_week' + firstweek4 + '', function() {
	            $dateTimepopUp.addClass('firstTop5');
	        });
	    },
	    dateTimeleavefirst5: function() {
	        return this.on($mouseLeaveEvent, '' + $popUpfirst + ' td.xdsoft_day_of_week' + firstweek4 + '', function() {
	            $dateTimepopUp.hide().removeClass('firstTop5');
	            $('.rotationLimit, .manuallyQueueLimit').removeClass('Limit');
	        });
	    },
	    dateTimeoverfirst6: function() {
	        return this.on($mouseEnterEvent, '' + $popUpfirst + ' td.xdsoft_day_of_week' + firstweek5 + '', function() {
	            $dateTimepopUp.addClass('firstTop6');
	        });
	    },
	    dateTimeleavefirst6: function() {
	        return this.on($mouseLeaveEvent, '' + $popUpfirst + ' td.xdsoft_day_of_week' + firstweek5 + '', function() {
	            $dateTimepopUp.hide().removeClass('firstTop6');
	            $('.rotationLimit, .manuallyQueueLimit').removeClass('Limit');
	        });
	    }
	});


	loadElements={elementsRun:function(){thisDocument.datetimepicker2().datetimepicker3().firstRow().firstRowLeave().secondRow().secondRowLeave().thirdRow().thirdRowLeave().fourthRow().fourthLeave().fifthRow().fifthLeave().sixthRow().sixthLeave().dateTimeoverfirst0().dateTimeleavefirst0().dateTimeoverfirst1().dateTimeleavefirst1().dateTimeoverfirst2().dateTimeleavefirst2().dateTimeoverfirst3().dateTimeleavefirst3().dateTimeoverfirst4().dateTimeleavefirst4().dateTimeoverfirst5().dateTimeleavefirst5().dateTimeoverfirst6().dateTimeleavefirst6();}}
	
	keyPlugin={keychartLoad:function(){pluginData='.dateTimepopUp{position:absolute;background:#f9f9f9;width:40%;max-width:180px;padding:10px;border:4px solid #ddd;z-index:2000;display:none}.dateTimepopUp:after{position:absolute;content:"";vertical-align:middle;width:0;height:0;border-left:7px solid transparent;border-right:7px solid transparent;bottom:-10px;left:0;right:0;margin-left:auto;margin-right:auto;border-bottom:7px solid #ddd;transform:rotate(180deg);-webkit-transform:rotate(180deg);-moz-transform:rotate(180deg);-o-transform:rotate(180deg);transition:0.3s;-webkit-transition:0.3s;-moz-transition:0.3s;-o-transition:0.3s}.topTrFirst{bottom:330px}.topTrSecond{bottom:296px}.topTrThird{bottom:264px}.topTrFourth{bottom:230px}.topTrFifth{bottom:199px}.topTrSixth{bottom:-47px}.fisrtTop0{left:-362px}.firstTop1{left:-319px}.firstTop2{left:-275px}.firstTop3{left:-234px}.firstTop4{left:-191px}.firstTop5{left:-149px}.firstTop6{left:-105px}.dateTimepopUp .Limit{color:#C00}.dateTimepopUp .dateMonth, .dateTimepopUp .dateDay, .dateTimepopUp .dateYear{padding:2px;padding-top:0;padding-bottom:0}.dateTimepopUp span{float:left;font-size:13px;color:#999;position:relative}.dateTimepopUp .rotationLimit, .dateTimepopUp .manuallyQueueLimit{font-weight:bold;color:#1A8755}.dateTimepopUp span:nth-child(4){padding-left:5px;padding-right:5px;margin-left:5px;margin-right:8px}.dateTimepopUp span:nth-child(4):before{content:":";position:absolute;left:-1px;top:-1px;font-weight:100;color:#000}.dateTimepopUp span:nth-child(4):after{content:"/";position:absolute;right:-4px;top:-1px;font-weight:100;color:#000}.dateTimepopUp .productId{padding-left:7px}';$columnstyle='<style type="text/css">'+pluginData+'</style>';$($columnstyle).appendTo(document.head);}} 
	loadElements.elementsRun(); //keyPlugin.keychartLoad();



    dateTimepopUpTemp = '<span id="dateDay" class="dateDay">' + '</span>' + '<span id="dateMonth" class="dateMonth">' + '</span>';
    dateTimepopUpTemp += '<span id="dateYear" class="dateYear">' + '</span>' + '<span id="manuallyQueueLimit" class="manuallyQueueLimit">' + '</span>' + '<span id="rotationLimit" class="rotationLimit">' + '</span>';

    $(dateTimepopUpTemp).appendTo('.dateTimepopUp');

	minuteDatePicker = '<div class="minutePicker" alt="" title="">' + '</div>';
	$(minuteDatePicker).appendTo('.xdsoft_datetimepicker');

	minutePlatTemp = '<div class="minutePlat">' + '<span class="minuteItem_Plat">' + '</span>' + '</div>' + '<div class="minute_floor displThis">' + '</div>';
	$(minutePlatTemp).appendTo('.inputPicker_mini_second');

	minuteItem = '<span class="minuteItem" alt="" title="">' + '</span>';
	minutePicker = $('.minutePicker'); minuteFloor = $('.minute_floor'); thisDocument = $(document); clickEvent = 'click'; mouseenter = 'mouseenter';
	$xdClass = '.xdsoft_:even:last-child'; thisIsSelected = 'selected';

	nowDate	= new Date();
	nowDay = ((nowDate.getDate().toString().length) == 1) ? '0' + (nowDate.getDate()) : (nowDate.getDate());
	nowMonth = ((nowDate.getMonth().toString().length) == 1) ? '0' + (nowDate.getMonth() + 1) : (nowDate.getMonth() + 1);
	nowYear	= nowDate.getFullYear();
	nowTime = nowDate.getHours() + ":" + nowDate.getMinutes();
	nowMinute = nowDate.getMinutes();
	formatDate	= nowDay + "/" + nowMonth + "/" + nowYear + " " + nowTime;

	THminute = '.thisMinute_'; minuteFloor.hide();
	thisDatetimepicker = $('#datetimepicker3');


	// Start Minute picker
	xdsoftVal = minuteNow = ItemsIn = 0;
	Items = 12;

	for(i = 0; i < Items; i++ ) { $(minuteItem).appendTo('.minute_floor'); }

	$('.minuteItem').each(function() { 
		$(this).addClass('thisMinute' + '_' + minuteNow); minuteNow++ 
		$(this).html(ItemsIn * 5); ItemsIn++ 
	});
	// Ends Minute Picker


	$.fn.extend({

		MPicker: function() {
			return this.on(clickEvent, '.datetimepicker3', function(event) {
				$(this).removeClass('datetimepicker3').addClass('datepickerMinute');
				minutePicker.show();
				$(minuteFloor).addClass('displThisB');
				$('.xdsoft_').removeClass('displThisB');
				event.stopPropagation();
			});
		},

		datepickerMinute: function() {
			return this.on(clickEvent, '.datepickerMinute', function() {
				$(this).removeClass('datepickerMinute').addClass('datetimepicker3');
				minuteFloor.hide();
			});
		},

		minuteItem: function() {
			return this.on(clickEvent, '.minuteItem', function() { 
				$('.xdsoft_datetimepicker').removeClass('displThisB').hide(); 
				$('.minutePlat .minuteItem_Plat').remove();
				$(minuteFloor).removeClass('displThisB');

				if( thisDatetimepicker.val() == "" ) {
					thisDatetimepicker.val(formatDate + $(this).html()); 

				} else { 

					thisDatetimepicker.val(thisDatetimepicker.val().slice(0, - 2) + $(this).html()); 
				}

				$('.minuteItem').removeClass(thisIsSelected); $(this).addClass(thisIsSelected);

			});
		},

		closeEvent: function() { 
			return this.on(clickEvent, function() { 
				minuteFloor.hide().removeClass('displThisB'); minutePicker.hide(); 
				$('.xdsoft_datetimepicker').removeClass('displThisB');
				thisDatetimepicker.removeClass('datepickerMinute').addClass('datetimepicker3'); 
			}); 
		},
		xdsoftTime: function() { 
			return this.on(mouseenter, '.xdsoft_:last-child .xdsoft_time', function() {

				$('.xdsoft_:last-child').addClass('displThisB'); 
			}); 
		}
	});

	thisDocument.MPicker().datepickerMinute().minuteItem().closeEvent().xdsoftTime();

	if(nowMinute == 58 || nowMinute == 59 || nowMinute == 0 || nowMinute == 1 || nowMinute == 2 ) { $(THminute + 0).addClass(thisIsSelected); 

	} else if(nowMinute == 3 || nowMinute == 4 || nowMinute == 5 || nowMinute == 6 || nowMinute == 7 ) { $(THminute + 1).addClass(thisIsSelected);

	} else if(nowMinute == 8 || nowMinute == 9 ||  nowMinute == 10 ||  nowMinute == 11 ||  nowMinute == 12) { $(THminute + 2).addClass(thisIsSelected);

	} else if(nowMinute == 13 || nowMinute == 14 || nowMinute == 15 || nowMinute == 16 || nowMinute == 17) { $(THminute + 3).addClass(thisIsSelected);

	} else if(nowMinute == 18 || nowMinute == 19 || nowMinute == 20 || nowMinute == 21 || nowMinute == 22) { $(THminute + 4).addClass(thisIsSelected);

	} else if(nowMinute == 23 || nowMinute == 24 || nowMinute == 25 || nowMinute == 26 || nowMinute == 27) { $(THminute + 5).addClass(thisIsSelected);

	} else if(nowMinute == 28 || nowMinute == 29 || nowMinute == 30 || nowMinute == 31 || nowMinute == 32) { $(THminute + 6).addClass(thisIsSelected);

	} else if(nowMinute == 33 || nowMinute == 34 || nowMinute == 35 || nowMinute == 36 || nowMinute == 37) { $(THminute + 7).addClass(thisIsSelected);

	} else if(nowMinute == 38 || nowMinute == 39 || nowMinute == 40 || nowMinute == 41 || nowMinute == 42) { $(THminute + 8).addClass(thisIsSelected);

	} else if(nowMinute == 43 || nowMinute == 44 || nowMinute == 45 || nowMinute == 46 || nowMinute == 47) { $(THminute + 9).addClass(thisIsSelected);

	} else if(nowMinute == 48 || nowMinute == 49 || nowMinute == 50 || nowMinute == 51 || nowMinute == 52) { $(THminute + 10).addClass(thisIsSelected);

	} else if(nowMinute == 53 || nowMinute == 54 || nowMinute == 55 || nowMinute == 56 || nowMinute == 57) { $(THminute + 11).addClass(thisIsSelected); }

	if($(THminute + 0).html() == 0) { $(THminute + 0).html('00'); } 
	if($(THminute + 1).html() == 5) { $(THminute + 1).html('05'); } 

});
