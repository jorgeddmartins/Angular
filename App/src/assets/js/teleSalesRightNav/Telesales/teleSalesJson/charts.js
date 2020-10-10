$(function() {

//     rightNav = {

//         jsonCall: function() {

//             totalCallsModal = $('.totalCalls-Modal');
//             uniqueCallModal = $('.uniqueCall-Modal');
//             modalCharts = $('.modalCharts');

//             $.ajax({
//                 type: "GET",
//                 url: "/telesalesleads/getTeleSaleJsonReport",
// //               data: {userId : userId },
//                 success: function(data) {

//                     hotkeysVal = 0; reportVal = 1;
//                     datesArray = []; transArray = []; deleArray = []; rejectArray = []; retaiArray = []; transpqArray = []; trxArray = [];
//                     totalCallsDates = []; totalCallsData = []; uniqueCallDates = []; uniqueCallData = [];

//                     for (i = 0; i < data.Last7DaysUserReport.length; i++) {
//                         console.log("date " + i + " :" + data.Last7DaysUserReport[i].ReportDate);
//                         transArray[i] = data.Last7DaysUserReport[i].TodaysTransferred;
//                         deleArray[i] = data.Last7DaysUserReport[i].TodaysDeleted;
//                         rejectArray[i] = data.Last7DaysUserReport[i].TodaysRejected;
//                         retaiArray[i] = data.Last7DaysUserReport[i].TodaysRetained;
//                         transpqArray[i] = data.Last7DaysUserReport[i].TodaysTransPQ;
//                         trxArray[i] = data.Last7DaysUserReport[i].TodaysTransNotHQPQ;
//                         totalCallsData[i] = data.Last7DaysUserReport[i].CallCount;
//                         uniqueCallData[i] = data.Last7DaysUserReport[i].UniqueCalls;
//                         datesArray[i] = data.Last7DaysUserReport[i].ReportDate;
//                     }

//                     totalCallsDates = datesArray;
//                     uniqueCallDates = datesArray;

//                     if (ajaxCallFunc.callReport(data) == 1 || ajaxCallFunc.TeleSaleUsersReport(data) == 0 || ajaxCallFunc.hightchart(datesArray, transArray, deleArray, rejectArray, retaiArray, transpqArray, trxArray, totalCallsDates, totalCallsData, uniqueCallDates, uniqueCallData) == 1 || ajaxCallFunc.thisUsers(data) == 1) { return this }
//                     $('.rightSpiner').hide(300);
//                 }

//             });
//         }
//     }


    // Run Slide
    $chartBar = $('.chart-bar-slide'); $clickEvent = 'click';
    goLeft = $('.goleft'); goRight = $('.goright');

    $speed = 600;
    $limitRun = 0;
    $tilesLimit = '-458';
    $limitSpace = '229px';

    var loadUReport = function(uId) {
        $('.infoCharts .infoSquare, .userReport .ReportSmallBtn, .userReport .highcharts-container, .userChartTitle, .infoBars-subtitle, .chart-Bar-T').remove();
        refreshNav.callThisData(uId);
        $('.rightSpiner').show();
       // alert(1);
    }

    slideBar = {

        runSlideBarleft: function (e) {

            $chartBar.animate({ left: '-=' + $limitSpace }, $speed, function() {

                if ($chartBar.position().left <= $tilesLimit) {

                    goLeft.addClass('goslideHidden');
                }

            });

            goRight.removeClass('goslideHidden');
        },

        runSlideBarright: function (e) {

            $chartBar.animate({ left: '+=' + $limitSpace }, $speed, function() {

                if ($chartBar.position().left >= $limitRun) {

                    goRight.addClass('goslideHidden');
                }

                goLeft.removeClass('goslideHidden');

            });
        }
    }


    // if (rightNav.jsonCall() == 1) {

    //     return this;

    // } else if (goLeft.on($clickEvent, slideBar.runSlideBarleft) == 0 || goRight.on($clickEvent, slideBar.runSlideBarright) == 1) { return true; }

    if (goLeft.on($clickEvent, slideBar.runSlideBarleft) == 0 || goRight.on($clickEvent, slideBar.runSlideBarright) == 1) { return true; }

    // Data Functions

    ajaxCallFunc = {

        callReport: function(data) {

            if(reportVal == 1) {

                outputCalls = '';

                for (i in data.callsReport) {

                    outputCalls += '<div class="infoSquare">';
                    outputCalls += '<i class="' + data.callsReport[i].icon + '" aria-hidden="true"></i>';
                    outputCalls += '<span class="dtaSquare">' + data.callsReport[i].dataval + '</span>';
                    outputCalls += '<span class="titleSquare">' + data.callsReport[i].dataname + '</span>';
                    outputCalls += '</div>';
                }

                $(outputCalls).appendTo('#infoCharts');

                clickEvent = 'click';
                $('#infoCharts .infoSquare:nth-child(1)').addClass('totalCalls');
                $('#infoCharts .infoSquare:nth-child(2)').addClass('uniqueCall');
                $('#infoCharts .infoSquare:nth-child(3)').addClass('firstCall');
                $('#infoCharts .infoSquare:nth-child(4)').addClass('lastCall');
                $('#infoCharts .infoSquare:nth-child(5)').addClass('cpmin');

                chartsModal = {

                    modaltotalCalls: function() {
                        totalCallsModal.toggleClass('callsNow');
                        modalCharts.toggleClass('modalCharts-Open');
                        uniqueCallModal.removeClass('uniqueNow');
                        modalCharts.removeClass('modalCharts-Open-Now');
                        $(this).toggleClass('opacity07');
                        $('.uniqueCall').removeClass('opacity07');
                    },

                    modaluniqueCall: function() {
                        uniqueCallModal.toggleClass('uniqueNow');
                        modalCharts.toggleClass('modalCharts-Open-Now');
                        totalCallsModal.removeClass('callsNow');
                        modalCharts.removeClass('modalCharts-Open');
                        $(this).toggleClass('opacity07');
                        $('.totalCalls').removeClass('opacity07');
                    },

                    modalall: function() {
                        uniqueCallModal.removeClass('uniqueNow');
                        modalCharts.removeClass('modalCharts-Open-Now');
                        totalCallsModal.removeClass('callsNow');
                        modalCharts.removeClass('modalCharts-Open');
                        $('.totalCalls, .uniqueCall').removeClass('opacity07');
                    },

                    chartUser: function() {

                        modalCharts.removeClass('modalCharts-Open-Now modalCharts-Open');
                        $('.totalCalls-Modal').removeClass('callsNow');
                        $('.uniqueCall-Modal').removeClass('uniqueNow');
                    }
                }

                $('.totalCalls').on(clickEvent, chartsModal.modaltotalCalls);
                $('.uniqueCall').on(clickEvent, chartsModal.modaluniqueCall);
                $('.firstCall, .lastCall, .cpmin').on(clickEvent, chartsModal.modalall);
                $('.chartUser').on(clickEvent, chartsModal.chartUser);
            }
        },

        TeleSaleUsersReport: function(data) {

            if(reportVal == 1) {

                outputReport = '';

                for (i in data.TeleSaleUsersReport) {

                    outputReport += '<div class="chart-Bar-T">';
                    outputReport += '<div class="barT-main">';
                    outputReport += '<span class="barD barDone" style="height: ' + data.TeleSaleUsersReport[i].report[0].dataval + '%">';
                    outputReport += '<span class="barTipVal tipone">' + data.TeleSaleUsersReport[i].report[0].dataname + ': <strong>' + data.TeleSaleUsersReport[i].report[0].dataval + '</strong></span>';
                    outputReport += '</span>';
                    outputReport += '</div>';

                    outputReport += '<div class="barT-main hotkeysBar">';
                    outputReport += '<span class="barD barDtwo" style="height: ' + data.TeleSaleUsersReport[i].report[1].dataval + '%">';
                    outputReport += '<span class="barTipVal tiptwo">' + data.TeleSaleUsersReport[i].report[1].dataname + ': <strong>' + data.TeleSaleUsersReport[i].report[1].dataval + '</strong></span>';
                    outputReport += '</span>';
                    outputReport += '</div>';

                    outputReport += '<div class="barT-main">';
                    outputReport += '<span class="barD barDthree" style="height: ' + data.TeleSaleUsersReport[i].report[2].dataval + '%">';
                    outputReport += '<span class="barTipVal tipthree">' + data.TeleSaleUsersReport[i].report[2].dataname + ': <strong>' + data.TeleSaleUsersReport[i].report[2].dataval + '</strong></span>';
                    outputReport += '</span>';
                    outputReport += '</div>';

                    outputReport += '<div class="barT-main">';
                    outputReport += '<span class="barD barDfour" style="height: ' + data.TeleSaleUsersReport[i].report[3].dataval + '%">';
                    outputReport += '<span class="barTipVal tipfour">' + data.TeleSaleUsersReport[i].report[3].dataname + ': <strong>' + data.TeleSaleUsersReport[i].report[3].dataval + '</strong></span>';
                    outputReport += '</span>';
                    outputReport += '</div>';

                    outputReport += '<div class="barT-main">';
                    outputReport += '<span class="barD barDfive" style="height: ' + data.TeleSaleUsersReport[i].report[4].dataval + '%">';
                    outputReport += '<span class="barTipVal tipfive">' + data.TeleSaleUsersReport[i].report[4].dataname + ': <strong>' + data.TeleSaleUsersReport[i].report[4].dataval + '</strong></span>';
                    outputReport += '</span>';
                    outputReport += '</div>';

                    outputReport += '<div class="barT-main">';
                    outputReport += '<span class="barD barDsix" style="height: ' + data.TeleSaleUsersReport[i].report[5].dataval + '%">';
                    outputReport += '<span class="barTipVal tipsix">' + data.TeleSaleUsersReport[i].report[5].dataname + ': <strong>' + data.TeleSaleUsersReport[i].report[5].dataval + '</strong></span>';
                    outputReport += '</span>';
                    outputReport += '</div>';

                    outputReport += '<div class="barT-main">';
                    outputReport += '<span class="barD barDseven" style="height: ' + data.TeleSaleUsersReport[i].report[6].dataval + '%">';
                    outputReport += '<span class="barTipVal tipseven">' + data.TeleSaleUsersReport[i].report[6].dataname + ': <strong>' + data.TeleSaleUsersReport[i].report[6].dataval + '</strong></span>';
                    outputReport += '</span>';
                    outputReport += '</div>';
                    outputReport += '<span class="setDateUser">' + data.TeleSaleUsersReport[i].name + '</span>';
                    outputReport += '</div>';
                }

                $(outputReport).appendTo('#chart-bar-slide');


                // Title
                outputtitle = '<h3 class="userChartTitle"></h3>';
                outputtitle += '<div class="infoBars">';
                outputtitle += '<span class="infoBars-subtitle allColor">1. ' + data.TeleSaleUsersReport[i].report[0].dataname + '</span>';
                outputtitle += '<span class="infoBars-subtitle hotColor hotkeysBar">2. ' + data.TeleSaleUsersReport[i].report[1].dataname + '</span>';
                outputtitle += '<span class="infoBars-subtitle pqColor">2. ' + data.TeleSaleUsersReport[i].report[2].dataname + '</span>';
                outputtitle += '<span class="infoBars-subtitle notColor">3. ' + data.TeleSaleUsersReport[i].report[3].dataname + '</span>';
                outputtitle += '<span class="infoBars-subtitle rejectedColor">4. ' + data.TeleSaleUsersReport[i].report[4].dataname + '</span>';
                outputtitle += '<span class="infoBars-subtitle delectedColor">5. ' + data.TeleSaleUsersReport[i].report[5].dataname + '</span>';
                outputtitle += '<span class="infoBars-subtitle retainedColor">6. ' + data.TeleSaleUsersReport[i].report[6].dataname + '</span>';
                outputtitle += '</div>';

                $(outputtitle).appendTo('#titlebar');

                if (hotkeysVal == 0) { $('.hotkeysBar').hide(); $('.barT-main').css('width', '16.5%'); $('.barTipVal').css('left', '31px');} else if (hotkeysVal == 1) { $('.hotkeysBar').show(); }


                // Load Elements
                $('.userChartTitle').text('TeleSale User Report');

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

                    allColorenter: function() { barOne.addClass('barBott'); barOneTip.addClass('overTool'); },
                    hotColorenter: function() { barTwo.addClass('barBott'); barTwoTip.addClass('overTool'); },
                    pqColorenter: function() { barThree.addClass('barBott'); barThreeTip.addClass('overTool'); },
                    notColorenter: function() { barFour.addClass('barBott'); barFourTip.addClass('overTool'); },
                    rejectedColorenter: function() { barFive.addClass('barBott'); barFiveTip.addClass('overTool'); },
                    delectedColorenter: function() { barSix.addClass('barBott'); barSixTip.addClass('overTool'); },
                    retainedColorenter: function() { barSeven.addClass('barBott'); barSevenTip.addClass('overTool'); },
                    allBarsleave: function() { barOne.add(barTwo).add(barThree).add(barFour).add(barFive).add(barSix).add(barSeven).removeClass('barBott'); barOneTip.add(barTwoTip).add(barThreeTip).add(barFourTip).add(barFiveTip).add(barSixTip).add(barSevenTip).removeClass('overTool'); }
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
        },

        hightchart: function(dateArray, transArray, deleArray, rejectArray, retaiArray, transpqArray, trxArray, totalCallsDates, totalCallsData, uniqueCallDates, uniqueCallData) {

            if(reportVal == 1) {

                Highcharts.chart('chartUserReport', {
                    chart: {
                        type: 'spline'
                    },
                    title: {
                        text: 'USER REPORT'
                    },
                    xAxis: {
                        categories: dateArray
                    },
                    tooltip: {
                        crosshairs: true,
                        shared: true
                    },
                    plotOptions: {
                        spline: {
                            marker: {
                                radius: 4,
                                lineColor: '#f5f5f5',
                                lineWidth: 1
                            }
                        }
                    },
                    series: [
                        {
                            name: 'Transferred',
                            marker: {
                                symbol: 'square'
                            },
                            data: transArray

                        },
                        {
                            name: 'Delected',
                            marker: {
                                symbol: 'square'
                            },
                            data: deleArray
                        },
                        {
                            name: 'Rejected',
                            marker: {
                                symbol: 'square'
                            },
                            data: rejectArray
                        },
                        {
                            name: 'Retained',
                            marker: {
                                symbol: 'square'
                            },
                            data: retaiArray
                        },
                        {
                            name: 'Trans PQ',
                            marker: {
                                symbol: 'square'
                            },
                            data: transpqArray
                        },
                        {
                            name: 'TRX NOTPQHQ',
                            marker: {
                                symbol: 'square'
                            },
                            data: trxArray
                        }

                    ]

                });

                Highcharts.chart('totalCalls-Modal', {
                    chart: {
                        type: 'spline'
                    },
                    title: {
                        text: ''
                    },
                    xAxis: {
                        categories: totalCallsDates
                    },
                    tooltip: {
                        crosshairs: true,
                        shared: true
                    },
                    plotOptions: {
                        spline: {
                            marker: {
                                radius: 4,
                                lineColor: '#f5f5f5',
                                lineWidth: 1
                            }
                        }
                    },
                    series: [
                        {
                            name: 'Week Total Calls',
                            marker: {
                                symbol: 'square'
                            },
                            data: totalCallsData

                        }

                    ]

                });

                Highcharts.chart('uniqueCall-Modal', {
                    chart: {
                        type: 'spline'
                    },
                    title: {
                        text: ''
                    },
                    xAxis: {
                        categories: uniqueCallDates
                    },
                    tooltip: {
                        crosshairs: true,
                        shared: true
                    },
                    plotOptions: {
                        spline: {
                            marker: {
                                radius: 4,
                                lineColor: '#f5f5f5',
                                lineWidth: 1
                            }
                        }
                    },
                    series: [
                        {
                            name: 'Week Unique Calls',
                            marker: {
                                symbol: 'square'
                            },
                            data: uniqueCallData

                        }

                    ]

                });
            }
        },

        thisUsers: function(data) {

          
            if(reportVal == 1) {

                if (data.SelectedUserId == -1)
                    loadUser = '<a href="#" class="ReportSmallBtn ReportSmallBtnEbable" onclick="relodUserReport()">All</a>';
                else
                    loadUser = '<a href="#" class="ReportSmallBtn" onclick="relodUserReport()">All</a>';

                for (i in data.TeleSaleUserList) {
                    if (data.SelectedUserId == data.TeleSaleUserList[i].Id)
                        loadUser += '<a href="#" class="ReportSmallBtn ReportSmallBtnEbable" id="' + data.TeleSaleUserList[i].Id + '" onclick="relodUserReport(' + data.TeleSaleUserList[i].Id + ')" >' + data.TeleSaleUserList[i].Name + '</a>';
                    else
                        loadUser += '<a href="#" class="ReportSmallBtn" id="' + data.TeleSaleUserList[i].Id + '" onclick="relodUserReport(' + data.TeleSaleUserList[i].Id + ')" >' + data.TeleSaleUserList[i].Name + '</a>';

                }

                $(loadUser).appendTo('.UserReportBtns');

            }
            
        }
    }

});