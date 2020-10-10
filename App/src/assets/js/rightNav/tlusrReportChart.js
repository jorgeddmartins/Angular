
// Document Element
let d = $(document);

// Click Event
let ck = 'click';


$(function() {

	"use strict";


	$.fn.UserChart = function(usrChopt) {

		let usrDef = $.extend({

			// Main Slide Element
			chartBar: 'chart-bar-slide',

			// Left Slide Button
			goLeft: 'goleft',

			// Right Slide Button
			goRight: 'goright',

			// Class to Hide Slide Buttons
			glslHidd: 'goslideHidden',

			// Main Chart Bar Class
			chtB: 'chart-Bar-T',

			// Main Chart Bar Class Prefix
			mt: 'mT-',

			// User ToolTip Chart Path
			bTsr: '.barT-main .barTipVal strong',

			// Data Files
			data: {

				// Json Data Injection
				url: 'assets/js/rightNav/tlusrReportChart.json'
			},

			value: {
				
				// Slide Speed
				speed: 300,
				
				// Slide Limit To Run
				lmRun: 0,

				// Slide Limit px
				tilLm: '-458',

				// px To Run Left
				lmSp: '229px',

				// Value Null Main Bar Out
				tvl: 0,

				// Value Null Main Bar In
				mtb: 0
			}

		}, usrChopt);

		// Settings Extend
		let usrStt = $.extend( true, {}, usrDef, usrChopt );

		function tReport(usrChopt) {

			// Loads Default Propreties
			this._defaults = usrDef;

			// Runs AjaxCall Prototype Function
			this.ajaxReport();
		}

		$.extend( tReport.prototype, {

			// Prototype Function To Load AjaxCall 
			ajaxReport: function() {

				$.ajax({

					type: 'GET',
					url: usrStt.data.url,
					datatype: 'json',

					success: function(data) { d.TeleUsData(data); }
				});

				// Runs Charts Data Prototype Function
				this.dataReport();

				// runs Global Events Prototype Function
				this.eventReport();
			},

			// Prototype Function To Load Charts Data
			dataReport: function() {

				$.fn.TeleUsData = function(data) { 

					let tusrBar = '';

					for( let t in data.userReport ) {

						tusrBar += '<div class="chart-Bar-T">' +

										// All Transferred Bar Data Injection
										'<div class="barT-main">' +
											'<span class="barD barDone" style="height: ' + data.userReport[t].data[0].dataAllTransferred + 'px">' +
												'<span class="barTipVal tipone">All Transferred: <strong>' + data.userReport[t].data[0].dataAllTransferred + '</strong></span>' +
											'</span>'+
										'</div>' +

										// Rejected Bar Data Injection
										'<div class="barT-main">' +
											'<span class="barD barDthree" style="height: ' + data.userReport[t].data[1].dataRejected + 'px">' +
												'<span class="barTipVal tipthree">Rejected: <strong>' + data.userReport[t].data[1].dataRejected + '</strong></span>' +
											'</span>'+
										'</div>' +

										// Delected Bar Data Injection
										'<div class="barT-main">' +
											'<span class="barD barDfour" style="height: ' + data.userReport[t].data[2].dataDeleted + 'px">' +
												'<span class="barTipVal tipfour">Deleted: <strong>' + data.userReport[t].data[2].dataDeleted + '</strong></span>' +
											'</span>'+
										'</div>' +

										// Retained Bar Data Injection
										'<div class="barT-main">' +
											'<span class="barD barDfive" style="height: ' + data.userReport[t].data[3].dataRetained + 'px">' +
												'<span class="barTipVal tipfive">Retained: <strong>' + data.userReport[t].data[3].dataRetained + '</strong></span>' +
											'</span>'+
										'</div>' +

										// PQ Transferred Bar Data Injection
										'<div class="barT-main">' +
											'<span class="barD barDsix" style="height: ' + data.userReport[t].data[4].dataPQTransferred + 'px">' +
												'<span class="barTipVal tipsix">PQ Transferred: <strong>' + data.userReport[t].data[4].dataPQTransferred + '</strong></span>' +
											'</span>'+
										'</div>' +

										// Transferred Not PQHK Bar Data Injection
										'<div class="barT-main">' +
											'<span class="barD barDseven" style="height: ' + data.userReport[t].data[5].dataTransferredNot + 'px">' +
												'<span class="barTipVal tipseven">Transferred Not PQHK: <strong>' + data.userReport[t].data[5].dataTransferredNot + '</strong></span>' +
											'</span>'+
										'</div>' +

										// User Data Name Injection
										'<span class="setDateUser">' + data.userReport[t].name + '</span>' +

									'</div>';
					}

					// User Data Injection
					$(tusrBar).appendTo('.chart-bar-slide');

					// If Statement To Run Slider Buttons User Slider
					if($('.' + usrStt.chtB).length > 5) {

						// Runs User Slide Function
						d.runSlideBar();

						// User Slider Buttons Show
						$('.' + usrStt.goLeft).add('.' + usrStt.goRight).show();

					} else {

						// User Slider Buttons Hide
						$('.' + usrStt.goLeft).add('.' + usrStt.goRight).hide();
					}

					// Dynamical Ids For Each 'chart-Bar-T' Element(Block) 
					$.fn.tbar = function() {
						return this.each(function() {

							$(this).attr({ id: 'tbr_' + usrStt.value.tvl});
							usrStt.value.tvl++;

						});
					}
					$('.' + usrStt.chtB).tbar();

					// Dynamical Classes For Each 'barT-main' Element
					$.fn.mainBarT = function() {
						return this.each(function() {

							$(this).addClass('mT-' + usrStt.value.mtb);
							usrStt.value.mtb++

						});
					}
					$('.barT-main').mainBarT();

					// If Statement For Each Chart Bar 
					if($('#tbr_0 ' + usrStt.bTsr).html() == 0) {

						//$('.' + usrStt.mt + 0).css({ background: '#eee'});
					}
				}
			},

			// Prototype Function To Global Events
			eventReport: function() {

				// User Slider Buttons(Left/Right) Function
				$.fn.runSlideBar = function() {
					return this.on(ck, '*', function() {
						
						let anClass = $(this)[0].className;
						
						// User Slider Left Button Click Event
						if(anClass.indexOf(usrStt.goLeft) != -1) {

							// Left Button Animation
							$('.' + usrStt.chartBar).animate({ left: '-=' + usrStt.value.lmSp }, usrStt.value.speed, function() {
								
								if($('.' + usrStt.chartBar).position().left <= usrStt.value.tilLm) {
									
									// Left Button Adds Desable Class
									$('.' + usrStt.goLeft).addClass(usrStt.glslHidd);
								}
								
								// Right Button Removes Desable Class
								$('.' + usrStt.goRight).removeClass(usrStt.glslHidd);
							});
						}
						
						// User Slider Right Button Click Event 
						if(anClass.indexOf(usrStt.goRight) != -1) {

							// Right Button Animation
							$('.' + usrStt.chartBar).animate({ left: '+=' + usrStt.value.lmSp }, usrStt.value.speed, function() {
								
								if($('.' + usrStt.chartBar).position().left >= usrStt.value.lmRun) {
									
									// Right Button Adds Desable Class
									$('.' + usrStt.goRight).addClass(usrStt.glslHidd);
								}
								
								// Left Button Removes desable Class
								$('.' + usrStt.goLeft).removeClass(usrStt.glslHidd);
							});
						}
					});
				}
			}

		});

		let tR = new tReport();
	}


	// Runs User Chart Function
	d.UserChart();

});