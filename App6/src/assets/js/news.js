
let d = $(document);


$(function() {

	"use strict";


    $.fn.runNews = function(options) {

        let defaults = $.extend({

            tickerVal: 2,

            AddTicker: '<li><span class="newsSlider" id="newsSmarter">News 6</span></li>'

        }, options);

        let settings = $.extend( true, {}, defaults, options);

        function newTrun(options) { this.runN(); }

        $.extend( newTrun.prototype, {
            runN: function() { 

                $.fn.addTicker = function() {
            		return this.on('click', '.addTicker', function() {

            			let NewTicker = '<div class="AddNewsBlock Ticker">' + 
                    						'<span class="tickerTitle addTitle">' + settings.tickerVal +'</span>' +
                    						'<div class="contentNews">' +
                    							'<label class="labelNews">News Content</label>' +
                    							'<textarea class="editNews"></textarea>' +
                    							'<label class="labelNews">Url</label>' +
                    							'<input type="text" name="urlnews" class="urlNews" />' +
                    							'<div class="actionsNews">' +
                    								'<label class="container-check hide-Check"><input type="checkbox"><span class="checkmark"></span></label>' +
                    								'<span class="labelCheck">Hide</span>' +
                    								'<label class="container-check important-Check"><input type="checkbox"><span class="checkmark"></span></label>' +
                    								'<span class="labelCheck">Important</span>' +
                    								'<button class="actTickerBtn actTickerBtnSave">Save</button>' +
                    								'<button class="actTickerBtn actTickerBtnRemove">Remove</button>' +
                    							'</div>' +
                    						'</div>' +
                                            '<div class="RemoveConfirm">' +
                                                '<span class="textConfirm">Are you sure you wish to continue?</span>' +
                                                '<div class="btns_Fl">' +
                                                    '<button class="SendSms_Btn confirmBtn" style="margin-right: 10px;">Confirm</button>' +
                                                    '<button class="CancelSendSms">Cancel</button>' +
                                                '</div>' +
                                            '</div>' +
                    					'</div>';

            			$(NewTicker).appendTo('#dragItemNews');
            			settings.tickerVal++;

            		});
                }
            	d.addTicker();

            	$("#tickerManger").mCustomScrollbar({ theme:"dark-3", scrollInertia: 50 });

            	$('#dragItemNews').sortable({
                    start : function(event, ui) {
                        var start_pos = ui.item.index();
                        ui.item.data('start_pos', start_pos);
                    },
                    update : function(event, ui) {

            			var index = ui.item.index();
                        var start_pos = ui.item.data('start_pos');
                        
            			$('#dragItemNews .AddNewsBlock:nth-child(' + (index + 1) + ') .addTitle').html(index);

                        if (start_pos < index) {

                            for(var i = index; i > 0; i--) {

                                $('#dragItemNews .AddNewsBlock:nth-child(' + i + ') .addTitle').html(i - 1);
                            }

                        } else {

                            for(var i = index + 2; i <= $("#dragItemNews .AddNewsBlock .addTitle").length; i++) {

                                $('#dragItemNews .AddNewsBlock:nth-child(' + i + ') .addTitle').html(i - 1);
                            }
                        }
                    }
            		// axis : 'y',
            		// axis : 'x'
                });


                $.fn.extend({

                	TickerOver: function() {
                		return this.on('mouseover', '.Ticker', function() {

                			$('.Ticker').removeClass('RemoveTicker');
                			$(this).addClass('RemoveTicker');
                		});
                	},
                	TickerRemove: function() {
                		return this.on('click', '.RemoveTicker .actTickerBtnRemove', function() {

                            $('.RemoveTicker .RemoveConfirm').show();
                		});
                	},
                    CancelSendSms: function() {
                        return this.on('click', '.RemoveConfirm .CancelSendSms', function() {

                            $('.RemoveTicker .RemoveConfirm').hide();
                        });
                    },
                    confirmBtn: function() {
                        return this.on('click', '.RemoveConfirm .confirmBtn', function() {

                            $('.RemoveTicker').remove();
                        });
                    }

                });
                $(document).TickerOver().TickerRemove().CancelSendSms().confirmBtn();


                $.fn.AddNewsTicker = function() {
                	return this.on('click', '.actTickerBtnSave', function() {

                		$(settings.AddTicker).appendTo('.slider-list');
                	});
                }
                d.AddNewsTicker();
            }

        });

        let thisNews = new newTrun();
    }

    d.runNews();
});