
$(function() {

	"use strict";


    $.fn.TeleSales = function(LoadTeleSales) {

    	let settingsDe = $.extend({

    		datetime: '.dateTimepopUp',

    		aTr: '.xdsoft_popUpfirst tr:nth-child(1), .xdsoft_popUpfirst tr:nth-child(2), .xdsoft_popUpfirst tr:nth-child(3), .xdsoft_popUpfirst tr:nth-child(4), .xdsoft_popUpfirst tr:nth-child(5), .xdsoft_popUpfirst tr:nth-child(6)',

    		tr1: '.xdsoft_datetimepicker .xdsoft_popUpfirst tr:nth-child(1)',

  			tr2: '.xdsoft_datetimepicker .xdsoft_popUpfirst tr:nth-child(2)',

  			tr3: '.xdsoft_datetimepicker .xdsoft_popUpfirst tr:nth-child(3)',

  			tr4: '.xdsoft_datetimepicker .xdsoft_popUpfirst tr:nth-child(4)',

  			tr5: '.xdsoft_datetimepicker .xdsoft_popUpfirst tr:nth-child(5)',

  			tr6: '.xdsoft_datetimepicker .xdsoft_popUpfirst tr:nth-child(6)'


    	}, LoadTeleSales);

    	function runTeleSale() {

    		this.runTeleData();

   //  		$(document).firstRow();

			// $(document).secondRow();

			// $(document).thirdRow();

			$(document).RowHover();
    	};

  		$.extend( runTeleSale.prototype, {

  			runTeleData: function() {

  				$('#datetimepicker3').datetimepicker({
					format: 'd/m/Y H:i',
			        inline: false,
			        onSelectDate: function (currentDateTime) {
			            if (currentDateTime != null) {
			               GeTelesalesQuota(currentDateTime);
			            }
			        }
			    });
			    $('#calendarIcon').click(function() { $('#datetimepicker3').datetimepicker('show'); });

			    $.fn.clEvent = function() {

			    	return this.on('click', '*', function() {

			    		let id = $(this).attr('id');

			    		if(id == 'datetimepicker2') {

			    			$('.xdsoft_datetimepicker .xdsoft_calendar').removeClass('xdsoft_popUpfirst');
	            			$(settingsDe.datetime).addClass('displThisN');

			    		} else if(id == 'datetimepicker3') {

			    			$('.xdsoft_datetimepicker .xdsoft_calendar').addClass('xdsoft_popUpfirst');
	            			$(settingsDe.datetime).removeClass('displThisN').hide();
			    		}

			    	});
			    }
			    $(document).clEvent();

			    this.mouseEvent();
  			},

  			mouseEvent: function() {

  				$.fn.RowHover = function() {

  					return this.on('mouseover', settingsDe.aTr, function(e) {

  						if(settingsDe.tr1) 

					    	$(settingsDe.datetime).addClass('topTrFirst');

					    else if(settingsDe.tr2)

					    	$(settingsDe.datetime).addClass('topTrSecond');

					    else if(settingsDe.tr3) 

					    	$(settingsDe.datetime).addClass('topTrThird');

					    else if(settingsDe.tr4) 

					    	$(settingsDe.datetime).addClass('topTrFourth');

					    else if(settingsDe.tr5) 

					    	$(settingsDe.datetime).addClass('topTrFifth');

					    else if(settingsDe.tr6) 

					    	$(settingsDe.datetime).addClass('topTrSixth');


  					}).on('mouseleave', settingsDe.aTr, function(e) {

  						if(settingsDe.tr1)

							$(settingsDe.datetime).removeClass('topTrFirst');
						
						else if(settingsDe.tr2) 

							$(settingsDe.datetime).removeClass('topTrSecond');

						 else if(settingsDe.tr3) 

					    	$(settingsDe.datetime).removeClass('topTrThird');

					    else if(settingsDe.tr4) 

					    	$(settingsDe.datetime).removeClass('topTrFourth');

					    else if(settingsDe.tr5)

					    	$(settingsDe.datetime).removeClass('topTrFifth');

					    else if(settingsDe.tr6) 

					    	$(settingsDe.datetime).removeClass('topTrSixth');

  					});
  				}







				// $(settingsDe.tr1).add(settingsDe.tr2).mouseenter(function(e) {

				//     if(settingsDe.tr1) 

				//     	$(settingsDe.datetime).addClass('topTrFirst');

				//     else if(settingsDe.tr2)

				//     	$(settingsDe.datetime).addClass('topTrSecond');
				// });

				// $(settingsDe.tr1).add(settingsDe.tr2).mouseleave(function(e) {

				// 	if(settingsDe.tr1)

				// 		$(settingsDe.datetime).removeClass('topTrFirst');
					
				// 	else if(settingsDe.tr2) 

				// 		$(settingsDe.datetime).removeClass('topTrSecond');

				// });



  				// Calendar First Row Tr
  				// $.fn.firstRow = function() {
  				// 	return this.on('mouseover', '.xdsoft_datetimepicker .xdsoft_popUpfirst tr:nth-child(1)', function() {

  				// 		$(settingsDe.datetime).addClass('topTrFirst');

  				// 	}).on('mouseleave', '.xdsoft_datetimepicker .xdsoft_popUpfirst tr:nth-child(1)', function() {

  				// 		$(settingsDe.datetime).removeClass('topTrFirst');
  				// 	});
  				// }
  				
  				// // Calendar Second Row Tr
  				// $.fn.secondRow = function() {
  				// 	return this.on('mouseover', '.xdsoft_datetimepicker .xdsoft_popUpfirst tr:nth-child(2)', function() {

  				// 		$(settingsDe.datetime).addClass('topTrSecond');

  				// 	}).on('mouseleave', '.xdsoft_datetimepicker .xdsoft_popUpfirst tr:nth-child(2)', function() {

  				// 		$(settingsDe.datetime).removeClass('topTrSecond');
  				// 	});
  				// }

  				// // Calendar Third Row Tr
  				// $.fn.thirdRow = function() {
  				// 	return this.on('mouseover', '.xdsoft_datetimepicker .xdsoft_popUpfirst tr:nth-child(3)', function() {

  				// 		$(settingsDe.datetime).addClass('topTrThird');

  				// 	}).on('mouseleave', '.xdsoft_datetimepicker .xdsoft_popUpfirst tr:nth-child(3)', function() {

  				// 		$(settingsDe.datetime).removeClass('topTrThird');
  				// 	});
  				// }



  			}
  		});


    	let runTeleSaleNew = new runTeleSale();

    }
    $(document).TeleSales();

});














$(function() {

	$('#datetimepicker3').datetimepicker({
		format: 'd/m/Y H:i',
        inline: false,
        onSelectDate: function (currentDateTime) {

            if (currentDateTime != null) {

               GeTelesalesQuota(currentDateTime);
            }
        }
    });
    $('#calendarIcon').click(function() { $('#datetimepicker3').datetimepicker('show'); });


	$.fn.extend({

	    dateTimeoverfirst0: function() {
	        return this.on('mouseover', '.xdsoft_popUpfirst td.xdsoft_day_of_week0', function() {
	            $('.dateTimepopUp').addClass('fisrtTop0');
	        });
	    },
	    dateTimeleavefirst0: function() {
	        return this.on('mouseleave', '.xdsoft_popUpfirst td.xdsoft_day_of_week0', function() {
	            $('.dateTimepopUp').hide().removeClass('fisrtTop0');
	            $('.rotationLimit, .manuallyQueueLimit').removeClass('Limit');
	        });
	    },

	    dateTimeoverfirst1: function() {
	        return this.on('mouseover', '.xdsoft_popUpfirst td.xdsoft_day_of_week1', function() {
	            $('.dateTimepopUp').addClass('firstTop1');
	        });
	    },
	    dateTimeleavefirst1: function() {
	        return this.on('mouseleave', '.xdsoft_popUpfirst td.xdsoft_day_of_week1', function() {
	            $('.dateTimepopUp').hide().removeClass('firstTop1');
	            $('.rotationLimit, .manuallyQueueLimit').removeClass('Limit');
	        });
	    },

	    dateTimeoverfirst2: function() {
	        return this.on('mouseover', '.xdsoft_popUpfirst td.xdsoft_day_of_week2', function() {
	            $('.dateTimepopUp').addClass('firstTop2');
	        });
	    },
	    dateTimeleavefirst2: function() {
	        return this.on('mouseleave', '.xdsoft_popUpfirst td.xdsoft_day_of_week2', function() {
	            $('.dateTimepopUp').hide().removeClass('firstTop2');
	            $('.rotationLimit, .manuallyQueueLimit').removeClass('Limit');
	        });
	    },

	    dateTimeoverfirst3: function() {
	        return this.on('mouseover', '.xdsoft_popUpfirst td.xdsoft_day_of_week3', function() {
	            $('.dateTimepopUp').addClass('firstTop3');
	        });
	    },
	    dateTimeleavefirst3: function() {
	        return this.on('mouseleave', '.xdsoft_popUpfirst td.xdsoft_day_of_week3', function() {
	            $('.dateTimepopUp').hide().removeClass('firstTop3');
	            $('.rotationLimit, .manuallyQueueLimit').removeClass('Limit');
	        });
	    },

	    dateTimeoverfirst4: function() {
	        return this.on('mouseover', '.xdsoft_popUpfirst td.xdsoft_day_of_week4', function() {
	            $('.dateTimepopUp').addClass('firstTop4');
	        });
	    },
	    dateTimeleavefirst4: function() {
	        return this.on('mouseleave', '.xdsoft_popUpfirst td.xdsoft_day_of_week4', function() {
	           $('.dateTimepopUp').hide().removeClass('firstTop4');
	            $('.rotationLimit, .manuallyQueueLimit').removeClass('Limit');
	        });
	    },

	    dateTimeoverfirst5: function() {
	        return this.on('mouseover', '.xdsoft_popUpfirst td.xdsoft_day_of_week5', function() {
	            $('.dateTimepopUp').addClass('firstTop5');
	        });
	    },
	    dateTimeleavefirst5: function() {
	        return this.on('mouseleave', '.xdsoft_popUpfirst td.xdsoft_day_of_week5', function() {
	            $('.dateTimepopUp').hide().removeClass('firstTop5');
	            $('.rotationLimit, .manuallyQueueLimit').removeClass('Limit');
	        });
	    },

	    dateTimeoverfirst6: function() {
	        return this.on('mouseover', '.xdsoft_popUpfirst td.xdsoft_day_of_week6', function() {
	            $('.dateTimepopUp').addClass('firstTop6');
	        });
	    },
	    dateTimeleavefirst6: function() {
	        return this.on('mouseleave', '.xdsoft_popUpfirst td.xdsoft_day_of_week6', function() {
	            $('.dateTimepopUp').hide().removeClass('firstTop6');
	            $('.rotationLimit, .manuallyQueueLimit').removeClass('Limit');
	        });
	    }
	});

	loadElements = {
		elementsRun:function() {

			$(document).datetimepicker2()
				.datetimepicker3()
				.firstRow()
				.firstRowLeave()
				.secondRow()
				.secondRowLeave()
				.thirdRow()
				.thirdRowLeave()
				.fourthRow()
				.fourthLeave()
				.fifthRow()
				.fifthLeave()
				.sixthRow()
				.sixthLeave()
				.dateTimeoverfirst0()
				.dateTimeleavefirst0()
				.dateTimeoverfirst1()
				.dateTimeleavefirst1()
				.dateTimeoverfirst2()
				.dateTimeleavefirst2()
				.dateTimeoverfirst3()
				.dateTimeleavefirst3()
				.dateTimeoverfirst4()
				.dateTimeleavefirst4()
				.dateTimeoverfirst5()
				.dateTimeleavefirst5()
				.dateTimeoverfirst6()
				.dateTimeleavefirst6();
		}
	}
	
	keyPlugin = {
		keychartLoad:function() {

			pluginData = '.dateTimepopUp{position:absolute;background:#f9f9f9;width:40%;max-width:180px;padding:10px;border:4px solid #ddd;z-index:2000;display:none}.dateTimepopUp:after{position:absolute;content:"";vertical-align:middle;width:0;height:0;border-left:7px solid transparent;border-right:7px solid transparent;bottom:-10px;left:0;right:0;margin-left:auto;margin-right:auto;border-bottom:7px solid #ddd;transform:rotate(180deg);-webkit-transform:rotate(180deg);-moz-transform:rotate(180deg);-o-transform:rotate(180deg);transition:0.3s;-webkit-transition:0.3s;-moz-transition:0.3s;-o-transition:0.3s}.topTrFirst{bottom:330px}.topTrSecond{bottom:296px}.topTrThird{bottom:264px}.topTrFourth{bottom:230px}.topTrFifth{bottom:199px}.topTrSixth{bottom:-47px}.fisrtTop0{left:-362px}.firstTop1{left:-319px}.firstTop2{left:-275px}.firstTop3{left:-234px}.firstTop4{left:-191px}.firstTop5{left:-149px}.firstTop6{left:-105px}.dateTimepopUp .Limit{color:#C00}.dateTimepopUp .dateMonth, .dateTimepopUp .dateDay, .dateTimepopUp .dateYear{padding:2px;padding-top:0;padding-bottom:0}.dateTimepopUp span{float:left;font-size:13px;color:#999;position:relative}.dateTimepopUp .rotationLimit, .dateTimepopUp .manuallyQueueLimit{font-weight:bold;color:#1A8755}.dateTimepopUp span:nth-child(4){padding-left:5px;padding-right:5px;margin-left:5px;margin-right:8px}.dateTimepopUp span:nth-child(4):before{content:":";position:absolute;left:-1px;top:-1px;font-weight:100;color:#000}.dateTimepopUp span:nth-child(4):after{content:"/";position:absolute;right:-4px;top:-1px;font-weight:100;color:#000}.dateTimepopUp .productId{padding-left:7px}';
			
			$columnstyle='<style type="text/css">' + pluginData + '</style>';
			
			$($columnstyle).appendTo(document.head);
		}
	} 
	loadElements.elementsRun(); //keyPlugin.keychartLoad();


    // Begin Minute Plugin
    dateTimepopUpTemp = '<span id="dateDay" class="dateDay">' + '</span>' + '<span id="dateMonth" class="dateMonth">' + '</span>';
    dateTimepopUpTemp += '<span id="dateYear" class="dateYear">' + '</span>' + '<span id="manuallyQueueLimit" class="manuallyQueueLimit">' + '</span>' + '<span id="rotationLimit" class="rotationLimit">' + '</span>';

    $(dateTimepopUpTemp).appendTo('.dateTimepopUp');

	minuteDatePicker = '<div class="minutePicker" alt="" title="">' + '</div>';
	$(minuteDatePicker).appendTo('.xdsoft_datetimepicker');

	var mPicker = 0;
	var xsoftmPicker = 0;
	
	$('.TeleSalesHome .minutePicker').each(function() {
		
		$(this).addClass('mPck_' + mPicker); mPicker++;
	});
	
	$('.TeleSalesHome .xdsoft_datetimepicker').each(function() {
		
		$(this).addClass('xdsoftmPck_' + xsoftmPicker); xsoftmPicker++;
	});
	
	minutePlatTemp = '<div class="minutePlat">' + '<span class="minuteItem_Plat">' + '</span>' + '</div>' + '<div class="minute_floor displThis">' + '</div>';
	//$(minutePlatTemp).appendTo('.mPck_3');
	$(minutePlatTemp).appendTo('.inputPicker_mini_second');


	//$xdClass = '.xdsoft_:even:last-child'; 

	nowDate	= new Date();
	nowDay = ((nowDate.getDate().toString().length) == 1) ? '0' + (nowDate.getDate()) : (nowDate.getDate());
	nowMonth = ((nowDate.getMonth().toString().length) == 1) ? '0' + (nowDate.getMonth() + 1) : (nowDate.getMonth() + 1);
	nowYear	= nowDate.getFullYear();
	nowTime = nowDate.getHours() + ":" + nowDate.getMinutes();
	nowMinute = nowDate.getMinutes();
	formatDate	= nowDay + "/" + nowMonth + "/" + nowYear + " " + nowTime;

	$('.minute_floor').hide();

	// Start Minute picker
	xdsoftVal = minuteNow = ItemsIn = 0;
	Items = 12;

	minuteItem = '<span class="minuteItem" alt="" title="">' + '</span>';

	for(i = 0; i < Items; i++ ) { $(minuteItem).appendTo('.minute_floor'); }

	$('.minuteItem').each(function() { 
		$(this).addClass('thisMinute' + '_' + minuteNow); minuteNow++ 
		$(this).html(ItemsIn * 5); ItemsIn++ 
	});
	// Ends Minute Picker

	$.fn.extend({

		MPicker: function() {
			return this.on('click', '.datetimepicker3', function(e) {
				$(this).removeClass('datetimepicker3').addClass('datepickerMinute');
				$('.minutePicker').show();
				$('.minute_floor').addClass('displThisB');
				$('.xdsoft_').removeClass('displThisB');
				e.stopPropagation();
			});
		},

		datepickerMinute: function() {
			return this.on('click', '.datepickerMinute', function() {
				$(this).removeClass('datepickerMinute').addClass('datetimepicker3');
				$('.minute_floor').hide();
			});
		},

		minuteItem: function() {

			return this.on('click', '.minuteItem', function() { 
				$('.xdsoft_datetimepicker').removeClass('displThisB').hide(); 
				$('.minutePlat .minuteItem_Plat').remove();
				$('.minute_floor').removeClass('displThisB');

				if( $('#datetimepicker3').val() == "" ) {
					$('#datetimepicker3').val(formatDate + $(this).html()); 

				} else { 

					$('#datetimepicker3').val($('#datetimepicker3').val().slice(0, - 2) + $(this).html()); 
				}

				$('.minuteItem').removeClass('selected'); 
				$(this).addClass('selected');
			});
		},

		closeEvent: function() { 
			return this.on('click', function() { 
				$('.minute_floor').hide().removeClass('displThisB'); 
				$('.minutePicker').hide(); 
				$('.xdsoft_datetimepicker').removeClass('displThisB');
				$('#datetimepicker3').removeClass('datepickerMinute').addClass('datetimepicker3'); 
			}); 
		},

		xdsoftTime: function() { 
			return this.on('mouseover', '.xdsoft_:last-child .xdsoft_time', function() {

				$('.xdsoft_:last-child').addClass('displThisB'); 
			}); 
		}
	});

	$(document).MPicker().datepickerMinute().minuteItem().closeEvent().xdsoftTime();

	if(nowMinute == 58 || nowMinute == 59 || nowMinute == 0 || nowMinute == 1 || nowMinute == 2 ) { $('.thisMinute_' + 0).addClass('selected'); 

	} else if(nowMinute == 3 || nowMinute == 4 || nowMinute == 5 || nowMinute == 6 || nowMinute == 7 ) { $('.thisMinute_' + 1).addClass('selected');

	} else if(nowMinute == 8 || nowMinute == 9 ||  nowMinute == 10 ||  nowMinute == 11 ||  nowMinute == 12) { $('.thisMinute_'  + 2).addClass('selected');

	} else if(nowMinute == 13 || nowMinute == 14 || nowMinute == 15 || nowMinute == 16 || nowMinute == 17) { $('.thisMinute_' + 3).addClass('selected');

	} else if(nowMinute == 18 || nowMinute == 19 || nowMinute == 20 || nowMinute == 21 || nowMinute == 22) { $('.thisMinute_' + 4).addClass('selected');

	} else if(nowMinute == 23 || nowMinute == 24 || nowMinute == 25 || nowMinute == 26 || nowMinute == 27) { $('.thisMinute_' + 5).addClass('selected');

	} else if(nowMinute == 28 || nowMinute == 29 || nowMinute == 30 || nowMinute == 31 || nowMinute == 32) { $('.thisMinute_' + 6).addClass('selected');

	} else if(nowMinute == 33 || nowMinute == 34 || nowMinute == 35 || nowMinute == 36 || nowMinute == 37) { $('.thisMinute_' + 7).addClass('selected');

	} else if(nowMinute == 38 || nowMinute == 39 || nowMinute == 40 || nowMinute == 41 || nowMinute == 42) { $('.thisMinute_' + 8).addClass('selected');

	} else if(nowMinute == 43 || nowMinute == 44 || nowMinute == 45 || nowMinute == 46 || nowMinute == 47) { $('.thisMinute_' + 9).addClass('selected');

	} else if(nowMinute == 48 || nowMinute == 49 || nowMinute == 50 || nowMinute == 51 || nowMinute == 52) { $('.thisMinute_' + 10).addClass('selected');

	} else if(nowMinute == 53 || nowMinute == 54 || nowMinute == 55 || nowMinute == 56 || nowMinute == 57) { $('.thisMinute_' + 11).addClass('selected'); }

	if($('.thisMinute_' + 0).html() == 0) { $('.thisMinute_' + 0).html('00'); } 
	if($('.thisMinute_' + 1).html() == 5) { $('.thisMinute_' + 1).html('05'); } 
    // End Minute Plugin

});
