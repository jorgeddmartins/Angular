$(function() {

    refreshNav = {

        callThisData: function(uId) {

            totalCallsModal = $('.totalCalls-Modal');
            uniqueCallModal = $('.uniqueCall-Modal');
            modalCharts = $('.modalCharts');
         //   uId = -1;
            $.ajax({
                type: "GET",
                url: "/telesalesleads/GetTeleSaleJsonReport",
                data: { userId: uId },
                success: function(data) {

                    hotkeysVal = 0; reportVal = 1;
                    datesArray = []; transArray = []; deleArray = []; rejectArray = []; retaiArray = []; transpqArray = []; trxArray = [];
                    totalCallsDates = []; totalCallsData = []; uniqueCallDates = []; uniqueCallData = [];

                    for (i = 0; i < data.Last7DaysUserReport.length; i++) {
                        console.log("date " + i + " :" + data.Last7DaysUserReport[i].ReportDate);
                        transArray[i] = data.Last7DaysUserReport[i].TodaysTransferred;
                        deleArray[i] = data.Last7DaysUserReport[i].TodaysDeleted;
                        rejectArray[i] = data.Last7DaysUserReport[i].TodaysRejected;
                        retaiArray[i] = data.Last7DaysUserReport[i].TodaysRetained;
                        transpqArray[i] = data.Last7DaysUserReport[i].TodaysTransPQ;
                        trxArray[i] = data.Last7DaysUserReport[i].TodaysTransNotHQPQ;
                        totalCallsData[i] = data.Last7DaysUserReport[i].CallCount;
                        uniqueCallData[i] = data.Last7DaysUserReport[i].UniqueCalls;
                        datesArray[i] = data.Last7DaysUserReport[i].ReportDate;
                    }

                    totalCallsDates = datesArray;
                    uniqueCallDates = datesArray;

                    if (ajaxCallFunc.callReport(data) == 1 || ajaxCallFunc.TeleSaleUsersReport(data) == 0 || ajaxCallFunc.hightchart(datesArray, transArray, deleArray, rejectArray, retaiArray, transpqArray, trxArray, totalCallsDates, totalCallsData, uniqueCallDates, uniqueCallData) == 1 || ajaxCallFunc.thisUsers(data) == 1) { return this }
                    $('.rightSpiner').hide(300);
                }
            });
        }
    } 

    var rightNav = function() {

        var tabBtn = $('.tabReportUser');
        $('.teleSalesUsers').hide();

        var rightEvents = {
            loadsTabsBtn: function() {

                tabBtn.removeClass('tabEnable');
                $(this).addClass('tabEnable');
            },

            usersTab: function() {

                $('.teleSalessmallInfo').hide();
                $('.teleSalesUsers').show();
                $('.infoCharts .infoSquare, .userReport .ReportSmallBtn, .userReport .highcharts-container, .userChartTitle, .infoBars-subtitle, .chart-Bar-T').remove();
            },

            reportsTab: function() {

                $('.teleSalessmallInfo').show();
                $('.teleSalesUsers').hide();
                refreshNav.callThisData();
                $('.rightSpiner').show();
            },

            btnRight: function() {

                $('.infoCharts .infoSquare, .userReport .ReportSmallBtn, .userReport .highcharts-container, .userChartTitle, .infoBars-subtitle, .chart-Bar-T').remove();
                refreshNav.callThisData();
                $('.rightSpiner').show();
            },

            loadUserReport: function(uId) {

                $('.infoCharts .infoSquare, .userReport .ReportSmallBtn, .userReport .highcharts-container, .userChartTitle, .infoBars-subtitle, .chart-Bar-T').remove();
                refreshNav.callThisData(uId);
                $('.rightSpiner').show();
            }           
        }

        // Load all Elements
        var Elements = {
            loadElements: function() {

                tabBtn.on('click', rightEvents.loadsTabsBtn);
                $('.usersTab').on('click', rightEvents.usersTab);
                $('.reportsTab').on('click', rightEvents.reportsTab);
                $('.btn-telesales-right').on('click', rightEvents.btnRight);
              //  $(document).on('click', '#59', rightEvents.user59);
            }
        }
        Elements.loadElements();

        ReportBtn = {
            RunSingleReportBtn: function() {

                $('.ReportSmallBtn').removeClass('ReportSmallBtnEbable');
                $(this).addClass('ReportSmallBtnEbable');
            }
        }

        if($(document).on('click', '.ReportSmallBtn', ReportBtn.RunSingleReportBtn) == 1) { return this }
    }

    var rightNavLoad = new rightNav();

});