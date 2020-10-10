
// Load Document
let d = $(document);

// Click Event
let ck = 'click';


$(function() {

    "use strict";

    $.fn.teleLeads = function(optLeads) {

        let defaultProp = {

            hideElements: $('.screenData, .datepicker, .miniLeads-Btn, .miniTableView, .header-sales, .left-sales, .leadtasks, .reject_input, .retain_input, .add_rotation, .taskNotification, .backBlue, .backPurple, .backRed'),
            hideUserform: $('.screenData, .datepicker, .miniTableView, .header-sales, .left-sales, .leadtasks, .reject_input, .retain_input, .add_rotation, .taskNotification, .backBlue, .backPurple, .backRed'),

            showData: $('.showData'),
            emailData: $('.emailData'),
            gridBtn: $('.grid-button'),
            timeSelect: $('#time'),
            flagBtn: $('.flagBtn'),
            $alertColor: $('.alert_Call .leadAlertspan div'),
            $thisAlert: $('.leadId_info .alert_Call'),
            userDrop: $('.userDrop'),
            miniProductFloor: $('#miniProductAw-Floor'),
            flagTip: $('.flagTip'),
            flagbutton: $('.button_Flag'),
            userDrop: $('.right-sales .userDrop'),
            clockDrop: $('.right-sales .clockDrop'),
            clockTip: $('.clockTip'),
            clockbutton: $('.button_Clock'),
            source: $('.source'),
            sourceData: $('.sourceDta'),
            timelock: $('.15Time, .30Time, .60Time'),
            each15Tip: $('.each15'),
            each30Tip: $('.each30'),
            each45Tip: $('.each45'),
            each60Tip: $('.each60'),
            clock15Btn: $('.15Time'),
            clock30Btn: $('.30Time'),
            clock45Btn: $('.45Time'),
            clock60Btn: $('.60Time'),
            sendButton: $('.sendBtn'),
            sendTip: $('.sendMTip'),
            userButton: $('.userBtn'),
            selectUser: $('.selectUser'),
            transferBtn: $('.transferBtn'),
            transferTip: $('.transferTip'),
            rejectBtn: $('.rejectBtn'),
            rejectTip: $('.rejectTip'),
            retainBtn: $('.retainBtn'),
            retainTip: $('.retainTip'),
            deleteBtn: $('.deleteBtn'),
            deleteTip: $('.deleteTip'),
            titleTasks: $('.titleTasks'),
            topZpart1: $('.topZpart1')

        };

        let settings = $.extend( true, {}, defaultProp.optLeads );






    }
    d.teleLeads();

});












// $(function() {

//     miniLeadScreen = function() {

//         events = {

//             hideElem: function() { miniProductFloor.hide(); },
//             userButton: function() {
//                 userDrop.slideToggle(300);
//                 clockDrop.hide();
//                 $('#miniProductAw-Floor').hide();
//             },

//             hideUserform: function() { userDrop.hide(); },
//             emailDataEnter: function() { showData.show(); },
//             emailDataLeave: function() { showData.hide(); },
//             flagMouseenter: function() { flagTip.show(); },
//             flagmouseleave: function() { flagTip.hide(); },
//             clockMouseenter: function() { clockTip.show(); },
//             clockmouseleave: function() { clockTip.hide(); },
//             clockButton: function() {
//                 clockDrop.slideToggle(300);
//                 userDrop.hide();
//                 $('#miniProductAw-Floor').hide();
//             },

//             clock15enter: function() { each15Tip.show(); },
//             clock15leave: function() { each15Tip.hide(); },
//             clock30enter: function() { each30Tip.show(); },
//             clock30leave: function() { each30Tip.hide(); },
//             clock45enter: function() { each45Tip.show(); },
//             clock45leave: function() { each45Tip.hide(); },
//             clock60enter: function() { each60Tip.show(); },
//             clock60leave: function() { each60Tip.hide(); },
//             sendMouseenter: function() { sendTip.show(); },
//             sendmouseleave: function() { sendTip.hide(); },
//             userenter: function() { selectUser.show(); },
//             userleave: function() { selectUser.hide(); },
//             transferenter: function() { transferTip.show(); },
//             transferleave: function() { transferTip.hide(); },
//             rejectenter: function() { rejectTip.show(); },
//             rejectleave: function() { rejectTip.hide(); },
//             retainenter: function() { retainTip.show(); },
//             retainleave: function() { retainTip.hide(); },
//             deleteenter: function() { deleteTip.show(); },
//             deleteleave: function() { deleteTip.hide(); }
//         }

//         varib.loadVarib(); hideElements.on(clickEvent, events.hideElem); flagBtn.on(clickEvent, events.userButton); hideUserform.on(clickEvent, events.hideUserform); emailData.mouseenter(events.emailDataEnter);
//         emailData.mouseleave(events.emailDataLeave); flagbutton.mouseenter(events.flagMouseenter); flagbutton.mouseleave(events.flagmouseleave); clockbutton.mouseenter(events.clockMouseenter);
//         clockbutton.mouseleave(events.clockmouseleave);$('.clockBtn').on(clickEvent, events.clockButton);clock15Btn.mouseenter(events.clock15enter);clock15Btn.mouseleave(events.clock15leave);
//         clock30Btn.mouseenter(events.clock30enter);clock30Btn.mouseleave(events.clock30leave);clock45Btn.mouseenter(events.clock45enter); clock45Btn.mouseleave(events.clock45leave);
//         clock60Btn.mouseenter(events.clock60enter);clock60Btn.mouseleave(events.clock60leave);sendButton.mouseenter(events.sendMouseenter);sendButton.mouseleave(events.sendmouseleave); userButton.mouseenter(events.userenter);
//         userButton.mouseleave(events.userleave); transferBtn.mouseenter(events.transferenter);transferBtn.mouseleave(events.transferleave);rejectBtn.mouseenter(events.rejectenter);rejectBtn.mouseleave(events.rejectleave);
//         retainBtn.mouseenter(events.retainenter);retainBtn.mouseleave(events.retainleave);deleteBtn.mouseenter(events.deleteenter);deleteBtn.mouseleave(events.deleteleave);topZpart1.mouseenter(events.part1Enter);
//         topZpart1.mouseleave(events.part1Leave);
//     }

//     teleSales = function() {
		
//         tabsUrl = {

//             loadsTabsUrl: function() {
//                 gridBtn.removeClass('btnEnable');
//                 $(this).addClass('btnEnable');
//             }
//         }

//         events = {

//             loadEvents: function() { gridBtn.on(clickEvent, tabsUrl.loadsTabsUrl); },
//             sourceenter: function() { sourceData.show(); },
//             sourceleave: function() { sourceData.hide(); },
//             timeClock: function() {

//                 $('.clockDrop').hide();
//                 $('.time_Flash').fadeIn(200).delay(200).fadeOut(200);
//             },

//             tableClick: function() {

//                 $('.btnflagTask, .btnTopLeft').removeClass('btnFlagDesable');
//             }

//         }

//         loadAllevents = new events.loadEvents();
//         source.mouseenter(events.sourceenter);
//         source.mouseleave(events.sourceleave);
//         // timelock.on(clickEvent, events.timeClock);
//         $('.k-selectable').on(clickEvent, events.tableClick);
//     }

//     if(miniLeadScreen() == true || teleSales() == 1) { return true }

//     alertColor = {

//         loadAlertColors: function() {

//             if ($alertColor.hasClass('alert_notification_orange')) {

//                 $thisAlert.addClass('orangeAllert');

//             } else if ($alertColor.hasClass('alert_notification_red')) {

//                 $thisAlert.addClass('redAllert');

//             } else if ($alertColor.hasClass('alert_notification_green')) {

//                 $thisAlert.addClass('greenAllert');

//             } else if ($alertColor.hasClass('alert_notification_darkblue')) {

//                 $thisAlert.addClass('darkBlueAllert');

//             } else if ($alertColor.hasClass('alert_notification_violet')) {

//                 $thisAlert.addClass('violetAllert');

//             } else if ($alertColor.hasClass('alert_notification_test')) {

//                 $thisAlert.addClass('testAllert');

//             } else if ($alertColor.hasClass('alert_notification_purple')) {

//                 $thisAlert.addClass('purpleAlert');
//             }
//         }
//     }

//     if(alertColor.loadAlertColors() == 1) { return this; }

//     keyChart = {

//         keychartLoad: function() {

//             chartsData = '@keyframes first {from { transform: rotate(0deg);} to { transform: rotate(' + dataFirst + 'deg); }}';
//             chartsData += '@-webkit-keyframes first {from { -webkit-transform: rotate(0deg); } to {-webkit-transform: rotate(' + dataFirst + 'deg); }}';
//             chartsData += '@-moz-keyframes first {from {-moz-transform: rotate(0deg); }to { -moz-transform: rotate(' + dataFirst + 'deg); }}';

//             chartsData += '@keyframes second {from { transform: rotate(0deg); }to { transform: rotate(' + dataSecond + 'deg); }}';
//             chartsData += '@-webkit-keyframes second {from { -webkit-transform: rotate(0deg); }to { -webkit-transform: rotate(' + dataSecond + 'deg); }}';
//             chartsData += '@-moz-keyframes second {from { -moz-transform: rotate(0deg); }to { -moz-transform: rotate(' + dataSecond + 'deg); }}';

//             chartsData += '@keyframes third {from { transform: rotate(0deg); }to { transform: rotate(' + dataThird + 'deg); }}';
//             chartsData += '@-webkit-keyframes third {from { -webkit-transform: rotate(0deg); }to { -webkit-transform: rotate(' + dataThird + 'deg); }}';
//             chartsData += '@-moz-keyframes third {from { -moz-transform: rotate(0deg); }to { -moz-transform: rotate(' + dataThird + 'deg); }}';

//             $columnstyle = '<style type="text/css">' + chartsData + '</style>';
//             $($columnstyle).appendTo(document.head);

//         }
//     }

//     if(keyChart.keychartLoad() == 0 ) { return true }

//     $(".boardPop_Up_In").mCustomScrollbar({ theme:"minimal" });

// });