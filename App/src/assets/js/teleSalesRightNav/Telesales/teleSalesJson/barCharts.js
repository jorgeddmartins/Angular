
$(function() {

	teleReport = {

		loadReport: function() {
		    var uId = -1;
			$.ajax({
				type: "GET",
				url: "/teleSalesLeads/getTeleSaleJsonReport",
				data: {userId: uId},
                success: function(data) {

                	// User 1
                	output = '';

                	for ( i in data.userlist ) {
                	    output += '<div class="chart-Bar-T">';
						output += '<div class="barT-main">';
						output += '<span class="barD barDone" style="height: '+ data.userlist[i].data[0].dataval  +'px">';
						output += '<span class="barTipVal tipone">' + data.userlist[i].data[0].toolname + ': <strong>' + data.userlist[i].data[0].dataval  +'</strong></span>';
						output += '</span>';
						output += '</div>';

						output += '<div class="barT-main">';
						output += '<span class="barD barDtwo" style="height: '+ data.userlist[i].data[1].dataval  +'px">';
						output += '<span class="barTipVal tiptwo">' + data.userlist[i].data[1].toolname + ': <strong>' + data.userlist[i].data[1].dataval  +'</strong></span>';
						output += '</span>';
						output += '</div>';

						output += '<div class="barT-main">';
						output += '<span class="barD barDthree" style="height: '+ data.userlist[i].data[2].dataval  +'px">';
						output += '<span class="barTipVal tipthree">' + data.userlist[i].data[2].toolname + ': <strong>' + data.userlist[i].data[2].dataval  +'</strong></span>';
						output += '</span>';
						output += '</div>';

						output += '<div class="barT-main">';
						output += '<span class="barD barDfour" style="height: '+ data.userlist[i].data[3].dataval  +'px">';
						output += '<span class="barTipVal tipfour">' + data.userlist[i].data[3].toolname + ': <strong>' + data.userlist[i].data[3].dataval  +'</strong></span>';
						output += '</span>';
						output += '</div>';

						output += '<div class="barT-main">';
						output += '<span class="barD barDfive" style="height: '+ data.userlist[i].data[4].dataval  +'px">';
						output += '<span class="barTipVal tipfive">' + data.userlist[i].data[4].toolname + ': <strong>' + data.userlist[i].data[4].dataval  +'</strong></span>';
						output += '</span>';
						output += '</div>';

						output += '<div class="barT-main">';
						output += '<span class="barD barDsix" style="height: '+ data.userlist[i].data[5].dataval  +'px">';
						output += '<span class="barTipVal tipsix">' + data.userlist[i].data[5].toolname + ': <strong>' + data.userlist[i].data[5].dataval  +'</strong></span>';
						output += '</span>';
						output += '</div>';

						output += '<div class="barT-main">';
						output += '<span class="barD barDseven" style="height: '+ data.userlist[i].data[6].dataval  +'px">';
						output += '<span class="barTipVal tipseven">' + data.userlist[i].data[6].toolname + ': <strong>' + data.userlist[i].data[6].dataval  +'</strong></span>';
						output += '</span>';
						output += '</div>';
						output += '<span class="setDateUser">' + data.userlist[i].name + '</span>';
						output += '</div>';
					}
					
					$(output).appendTo('#chart-bar-slide');


//					// Title
					outputtitle = '<h3>Users Report</h3>';
					outputtitle += '<div class="infoBars">';
					outputtitle += '<span class="infoBars-subtitle allColor">1. ' + data.userlist[i].data[0].toolname + '</span>';
					outputtitle += '<span class="infoBars-subtitle hotColor">2. ' + data.userlist[i].data[1].toolname + '</span>';
					outputtitle += '<span class="infoBars-subtitle pqColor">3. ' + data.userlist[i].data[2].toolname + '</span>';
					outputtitle += '<span class="infoBars-subtitle notColor">4. ' + data.userlist[i].data[3].toolname + '</span>';
					outputtitle += '<span class="infoBars-subtitle rejectedColor">5. ' + data.userlist[i].data[4].toolname + '</span>';
					outputtitle += '<span class="infoBars-subtitle delectedColor">6. ' + data.userlist[i].data[5].toolname + '</span>';
					outputtitle += '<span class="infoBars-subtitle retainedColor">7. ' + data.userlist[i].data[6].toolname + '</span>';
					outputtitle += '</div>';

					$(outputtitle).appendTo('#titlebar');

					// Load Elements
					barOne = $('.barDone'); barOneTip = $('.barDone .tipone');
					barTwo = $('.barDtwo'); barTwoTip = $('.barDtwo .tiptwo');
					barThree = $('.barDthree'); barThreeTip = $('.barDthree .tipthree');
					barFour = $('.barDfour'); barFourTip = $('.barDfour .tipfour');
					barFive = $('.barDfive'); barFiveTip = $('.barDfive .tipfive');
					barSix = $('.barDsix'); barSixTip = $('.barDsix .tipsix');
					barSeven = $('.barDseven'); barSevenTip = $('.barDseven .tipseven');
					allColor = $('.allColor'); hotColor = $('.hotColor'); pqColor = $('.pqColor'); notColor = $('.notColor'); rejectedColor = $('.rejectedColor'); delectedColor = $('.delectedColor');
					retainedColor = $('.retainedColor');

					barAnim = {

						allColorenter: function() {barOne.addClass('barBott');barOneTip.addClass('overTool');},
						hotColorenter: function() {barTwo.addClass('barBott');barTwoTip.addClass('overTool');},
						pqColorenter: function() {barThree.addClass('barBott');barThreeTip.addClass('overTool');},
						notColorenter: function() {barFour.addClass('barBott');barFourTip.addClass('overTool');},
						rejectedColorenter: function() {barFive.addClass('barBott');barFiveTip.addClass('overTool');},
						delectedColorenter: function() {barSix.addClass('barBott');barSixTip.addClass('overTool');},
						retainedColorenter:function() {barSeven.addClass('barBott');barSevenTip.addClass('overTool');},
						allBarsleave: function() {barOne.add(barTwo).add(barThree).add(barFour).add(barFive).add(barSix).add(barSeven).removeClass('barBott'); barOneTip.add(barTwoTip).add(barThreeTip).add(barFourTip).add(barFiveTip).add(barSixTip).add(barSevenTip).removeClass('overTool');}
					}

					barElements = {

						loadBarElements: function() {

							allColor.mouseenter(barAnim.allColorenter); hotColor.mouseenter(barAnim.hotColorenter); pqColor.mouseenter(barAnim.pqColorenter); notColor.mouseenter(barAnim.notColorenter); 
							rejectedColor.mouseenter(barAnim.rejectedColorenter); delectedColor.mouseenter(barAnim.delectedColorenter); retainedColor.mouseenter(barAnim.retainedColorenter);
							allColor.add(hotColor).add(pqColor).add(notColor).add(rejectedColor).add(delectedColor).add(retainedColor).mouseleave(barAnim.allBarsleave);
						}
					}

					barElemeentsLoaded = new barElements.loadBarElements();

		   		}

	   		});

		}

	}


	teleReport.loadReport();

	// Run Slide
	$chartBar = $('.chart-bar-slide'); $clickEvent = 'click';
	goLeft = $('.goleft'); goRight = $('.goright');

	$speed = 600;
	$limitRun = 0;
	// $tilesLimit = '-458';
	$tilesLimit = '-458';
	$limitSpace = '229px';

	slideBar = {

		runSlideBarleft: function(e) {

			 $chartBar.animate({ left: '-=' + $limitSpace}, $speed, function() {

			 	if($chartBar.position().left <= $tilesLimit) {

		        	goLeft.addClass('goslideHidden');
		        }

			 });

			 goRight.removeClass('goslideHidden');
		},

		runSlideBarright: function(e) {

			$chartBar.animate({left: '+=' + $limitSpace}, $speed, function() {

		        if($chartBar.position().left >= $limitRun) {

		        	goRight.addClass('goslideHidden');
		        }

		        goLeft.removeClass('goslideHidden');

			});

		}

	}

	goLeft.on($clickEvent, slideBar.runSlideBarleft); goRight.on($clickEvent, slideBar.runSlideBarright);

});