
// Click Event
let ck = 'click';

// Document Element
let d = $(document);

// Global Click
let g = '*';


$(function() {

    "use strict";

    $.fn.ToLeadScr = function(leadScreenopt) {

        let GetDefauls = {

            // Tool Tips Names
            toolTips: {

                // Reject ToolTip Main Class
                rejectTip: 'Reject',

                // Unreject TooTip Main Class
                unrejectTip: 'Unreject',

                // Retain ToolTip Main class
                retainTip: 'Retain',

                // Unretain ToolTip Main Class
                unretainTip: 'Unretain',

                // Delete ToolTip Main Class
                delateTip: 'Delete',

                // Transfer ToolTip Main Class
                transferTip: 'Transfer',

                // Stop Transfer ToolTip Main Class
                stoptransferTip: 'Stop Transfer'
            },

            // Tool Tips Classes
            tipClass: {

                // Reject ToolTip Class
                rejClass: 'reject-tooltip',

                // Unreject ToolTip Class
                urejClass: 'unreject-tooltip',

                // Retain ToolTip Class
                retClass: 'retain-tooltip',

                // Unretain ToolTip Class
                uretClass: 'unretain-tooltip',

                // Delete ToolTip Class
                delClass: 'delete-tooltip',

                // Transfer ToolTip Class
                trClass: 'transfer-tooltip',

                // Stop Transfer ToolTip Class
                STrClass: 'stp-transfer-tooltip'
            },

            // All Tags
            tempTags: {

                // Div Tag
                divTag: '<div>',

                // Span Tag
                spanTag: '<span>',

                // Body Tag
                bodyTag: 'body',

                // Icon Tag
                iconTag: '<i>',

                // Html Tag
                htmlTag: 'html'
            },

            // Data
            data: {

                // Json Data Url
                urlJson: 'assets/js/leadscreen.json'
            },

            // Modals
            AlertModal: 'BackAlertModal',
            InAlertMod: 'InAlertModal',
            animModalClass: 'topModal',
            urlSourceCl: 'url_mouseover_floor' 
        };

        // Lead Screen Settings(Override)
        let leadSettings = $.extend( {}, GetDefauls, leadScreenopt );

        // Ajax Call For Json Data
        $.ajax({

            type: 'GET',
            url: leadSettings.data.urlJson,
            datatype: 'json',

            success: function(lscreendata) { d.lScreenD(lscreendata) }
        });

        // Loading Tool Tip Button
        $('.tool_Btn').before($(leadSettings.tempTags.spanTag, { class: 'leadTip'}));

        // Global MouseOver Events
        $.fn.eventOver = function() {
            return this.on('mouseover', g, function() {
 
                // Looking For The Class To Be Clicked On
               let indexHas = $(this)[0].className;

                // Close Btn Over
                const closeBtnOver = indexHas.indexOf('closeBtn') != -1 ? $('.tool-close').css({ opacity: '1' }) && navOver() : '';

                // SaveClose Btn Over
                const saveCloseBtnOver = indexHas.indexOf('saveCloseBtn') != -1 ? $('.tool-saveclose').css({ opacity: '1' }) && navOver() : '';

                // Save Btn Over
                const savebtnOver = indexHas.indexOf('savebtn') != -1 ? $('.tool-save').css({ opacity: '1' }) && navOver() : '';

            });
        }

        // Global MouseOver Events
        $.fn.eventLeave = function() {
            return this.on('mouseleave', g, function() {

                // Looking For The Class To be Clicked On
                let indexHas = $(this)[0].className;

                // Close Btn Leave 
                const closeBtnLeave = indexHas.indexOf('closeBtn') != -1 ? $('.tool-close').css({ opacity: '0' }) && navLeave() : '';

                // SaveClose Btn Leave
                const saveCloseBtnLeave = indexHas.indexOf('saveCloseBtn') != -1 ? $('.tool-saveclose').css({ opacity: '0' }) && navLeave() : '';

                // Save Btn Leave
                const savebtnLeave = indexHas.indexOf('savebtn') != -1 ? $('.tool-save').css({ opacity: '0' }) && navLeave() : '';

            });
        }

        // Loading Json Data Function
        $.fn.lScreenD =  function(lscreendata) {

            // Loading Alert Modal Template
            let bAm = $(leadSettings.tempTags.divTag, { class: 'BackAlertModal' }).appendTo(leadSettings.tempTags.bodyTag)

                // Element to Close Pop Up Any Where
                .append($(leadSettings.tempTags.divTag, { class: 'closeAlert' }))

                // Pop Up Main Content
                .append($(leadSettings.tempTags.divTag, { class: 'InAlertModal' })

                    // Pop Up Title Goes Here
                    .append($(leadSettings.tempTags.spanTag, { class: 'duplLeTil' }).html('Duplicates Leads'))

                    // Table Content Goes Here
                    .append($(leadSettings.tempTags.divTag, { class: 'dupLForm', id: 'duplicateFormPop' }))

                    // Icon To Close Pop Up When Click on it
                    .append($(leadSettings.tempTags.iconTag, { class: 'fa fa-close clAlModal', 'aria-hidden': true })));

            // Loading Table Template
            let tLs = $('<table>', { class: 'lsTable', style: 'width: 100%; border-spacing: 2px;border-collapse: separate;' }).appendTo('.dupLForm')

                // Loading Table Header
                .append($('<thead>'))

                // Loading Table Body 
                .append($('<tbody>'));

            // Data Template For Header
            let thLs = '';
            for(let l in lscreendata.dupLeadsHead) {

                // Table Header Content
                thLs += '<div class="theadTr">' +
                            '<span class="cell cell-1">' + lscreendata.dupLeadsHead[l].lid + '</span>' +
                            '<span class="cell cell-2">' + lscreendata.dupLeadsHead[l].lpos+ '</span>' +
                            '<span class="cell cell-3">' + lscreendata.dupLeadsHead[l].lalert + '</span>' +
                            '<span class="cell cell-4">' + lscreendata.dupLeadsHead[l].lsubdate + '</span>' +
                            '<span class="cell cell-5">' + lscreendata.dupLeadsHead[l].ltransfOn + '</span>' +
                            '<span class="cell cell-6">' + lscreendata.dupLeadsHead[l].lfname + '</span>' +
                            '<span class="cell cell-7">' + lscreendata.dupLeadsHead[l].llname + '</span>' +
                            '<span class="cell cell-8">' + lscreendata.dupLeadsHead[l].llandline + '</span>' +
                            '<span class="cell cell-9">' + lscreendata.dupLeadsHead[l].lmobile + '</span>' + 
                            '<span class="cell cell-8">' + lscreendata.dupLeadsHead[l].lemail + '</span>' +
                            '<span class="cell cell-9">' + lscreendata.dupLeadsHead[l].lproduct + '</span>' +
                            '<span class="cell cell-8">' + lscreendata.dupLeadsHead[l].lsource + '</span>' +
                            '<span class="cell cell-9">' + lscreendata.dupLeadsHead[l].ltsummary + '</span>' +
                            '<span class="cell cell-8">' + lscreendata.dupLeadsHead[l].ltransto + '</span>' +
                            '<span class="cell cell-9">' + lscreendata.dupLeadsHead[l].lipAdress + '</span>' +
                            '<span class="cell cell-9">' + lscreendata.dupLeadsHead[l].lfeestutas + '</span>' + 
                        '</div>';
            }
            $(thLs).appendTo('.lsTable thead');

            // Data Template For Body
            let tbLs = '';
            for(let b in lscreendata.dupLeadsBody) {

                // Table Body Content
                tbLs += '<div class="tbodyTr">' +
                            '<span class="cell cell-1" title="' + lscreendata.dupLeadsBody[b].id + '">' + lscreendata.dupLeadsBody[b].id + '</span>' +
                            '<span class="cell cell-2" title="' + lscreendata.dupLeadsBody[b].position + '">' + lscreendata.dupLeadsBody[b].position + '</span>' +
                            '<span class="cell cell-3" title="' + lscreendata.dupLeadsBody[b].alert + '">' + lscreendata.dupLeadsBody[b].alert + '</span>' +
                            '<span class="cell cell-4" title="' + lscreendata.dupLeadsBody[b].submission + '">' + lscreendata.dupLeadsBody[b].submission + '</span>' +
                            '<span class="cell cell-5" title="' + lscreendata.dupLeadsBody[b].transferredOn + '">' + lscreendata.dupLeadsBody[b].transferredOn + '</span>' +
                            '<span class="cell cell-6" title="' + lscreendata.dupLeadsBody[b].fname + '">' + lscreendata.dupLeadsBody[b].fname + '</span>' +
                            '<span class="cell cell-7" title="' + lscreendata.dupLeadsBody[b].lname + '">' + lscreendata.dupLeadsBody[b].lname + '</span>' +
                            '<span class="cell cell-8" title="' + lscreendata.dupLeadsBody[b].landline + '">' + lscreendata.dupLeadsBody[b].landline + '</span>' +
                            '<span class="cell cell-9" title="' + lscreendata.dupLeadsBody[b].mobile + '">' + lscreendata.dupLeadsBody[b].mobile + '</span>' + 
                            '<span class="cell cell-10" title="' + lscreendata.dupLeadsBody[b].email + '">' + lscreendata.dupLeadsBody[b].email + '</span>' +
                            '<span class="cell cell-11" title="' + lscreendata.dupLeadsBody[b].product + '">' + lscreendata.dupLeadsBody[b].product + '</span>' +
                            '<span class="cell cell-12" title="' + lscreendata.dupLeadsBody[b].source + '">' + lscreendata.dupLeadsBody[b].source + '</span>' +
                            '<span class="cell cell-13" title="' + lscreendata.dupLeadsBody[b].tracking + '">' + lscreendata.dupLeadsBody[b].tracking + '</span>' +
                            '<span class="cell cell-14" title="' + lscreendata.dupLeadsBody[b].transferredTo + '">' + lscreendata.dupLeadsBody[b].transferredTo + '</span>' +
                            '<span class="cell cell-15" title="' + lscreendata.dupLeadsBody[b].ipaddress + '">' + lscreendata.dupLeadsBody[b].ipaddress + '</span>' +
                            '<span class="cell cell-16" title="' + lscreendata.dupLeadsBody[b].feedback + '">' + lscreendata.dupLeadsBody[b].feedback + '</span>' +
                        '</div>';
            }
            $(tbLs).appendTo('.lsTable tbody');

        }

        // Global Click Events
    	$.fn.bEvents = function() {
    		return this.on(ck, g, function() {

                // Looking For The Class To Be Clicked On
                let fclass = $(this)[0].className; 

                // Btn To Close Lead Screen
                const closeBtn = fclass.indexOf('closeBtn') != -1 ? navLeave() : '';

                // Slide Up / Slide Down Panels
                // const fQuareTo = fclass.indexOf('f-square') != -1 ? $(this).toggleClass('closePanel') : '';

                // To Display Alert Modal
                if(fclass.indexOf('alertmodal') != -1) {

                    // Alert Modal Fades In (Opens)
                    $('.' + leadSettings.AlertModal).fadeIn(100);

                    // Alert Modal Adds Animation class
                    $('.' + leadSettings.InAlertMod).addClass(leadSettings.animModalClass);
                } 

                // To Close Alert Modal
                else if(fclass.indexOf('closeAlert') != -1) {

                    // Alert Modal Fades Out (Closes)
                    $('.' + leadSettings.AlertModal).fadeOut(100);

                    // Alert Modal Removes Animation Class
                    $('.' + leadSettings.InAlertMod).removeClass(leadSettings.animModalClass); 
                } 

                // Close Alert Modal
                const cAlertM = fclass.indexOf('clAlModal') != -1 ? $('.' + leadSettings.AlertModal).fadeOut(100) : '';

                // Opens Url Source
                if(fclass.indexOf('OpSource') != -1) {

                    // Removes Open Class & Adds Close Class
                    $(this).removeClass('OpSource').addClass('ClSource');

                    // Url Source shows
                    $('.' + leadSettings.urlSourceCl).show();

                    // Html Tag Adds Close Class
                    $(leadSettings.tempTags.htmlTag).addClass('ClUrlS');
                }

                // Closes Url Source
                else if(fclass.indexOf('ClSource') != -1) {

                    // Removes Close Class & Adds Open Class
                    $(this).removeClass('ClSource').addClass('OpSource');

                    // Url Source Hides
                    $('.' + leadSettings.urlSourceCl).hide();

                    // Html Tag Removes Close Class 
                    $(leadSettings.tempTags.htmlTag).removeClass('ClUrlS');
                }

    		});
    	}

        // Runs Event Functions
        d.eventOver().eventLeave().bEvents();

        // Closes Url Source Drop Down When Click any where in the Document
        $.fn.closeHtml = function() {
            return this.on(ck, '.ClUrlS', function() {

                // Url Source Block Hides
                $('.' + leadSettings.urlSourceCl).hide();

                // Html Tag Removes Close Class 
                $(leadSettings.tempTags.htmlTag).removeClass('ClUrlS');

                // Source Id Removes Close Class & Adds Open Class
                $('#url_source').removeClass('ClSource').addClass('OpSource');
            });
        }

        // Runs Close Html Function
        d.closeHtml();

        // MouseOver On Url Source Block to remove Close Class from Html Tag
        $.fn.UrlSOver = function() {
            return this.on('mouseover', '.' + leadSettings.urlSourceCl, function() {

                // Html Tag Removes Close Class
                $(leadSettings.tempTags.htmlTag).removeClass('ClUrlS');
            });
        }

        // Runs Over Url Source Function
        d.UrlSOver();

        // MouseLeave the Url Source Block to add Close Class to Html Tag
        $.fn.UrlSLeave = function() {
            return this.on('mouseleave', '.' + leadSettings.urlSourceCl, function() {

                // Html Tag Adds Close Class
                $(leadSettings.tempTags.htmlTag).addClass('ClUrlS');
            });
        }

        // Runs Leave Url Source Function
        d.UrlSLeave();



        function navOver() { 
            $('.top-nav').addClass('zindex-0');
            $('.top-nav-down').addClass('zindex-3000'); 
        }

        function navLeave() { 
            $('.top-nav').removeClass('zindex-0');
            $('.top-nav-down').removeClass('zindex-3000'); 
        }



        // Check Mouse Click Event Function
        $.fn.NumberClick = function() {

            // Ontouchstart in The Document
            const supportsTouch = true; 
            let isUsingTouch = false;

            // Clicks Counter Element(span)
            const span = document.querySelector('.TCount');
            
            // Element To Touch
            const div = document.querySelector('.to-transfer');
            
            // Start Number of Clicks Value
            let mousemovesFired = 0;

            // Touchstart & Pointerdown
            const touchHandler = () => {
                isUsingTouch = true;
                div.addEventListener('mousemove', mousemoveHandler);
            };

            // Closure to Store Previous Time as Internal State
            const mousemoveHandler = (() => {
                let time;

                return () => {
                    const now = performance.now();

                    span.innerHTML = ++mousemovesFired;

                    if(now - time < 20) {
                        isUsingTouch = false;
                        div.removeEventListener('mousemove', mousemoveHandler);
                    }

                    time = now;
                };
              
            })();

            // Add Listeners
            if(supportsTouch) {
                
                div.addEventListener('touchstart', touchHandler);
            } 
            
            else if (navigator.maxTouchPoints || navigator.msMaxTouchPoints) {
                
                div.addEventListener('pointerdown', touchHandler);
            }

            d.on(ck, '.to-transfer', function() {

                $('.TCount').each(function() {

                    // Increments The Number of Clicks( For Desktop )
                    const deskTopCl = window.innerWidth > 800 ? $(this).html(+ this.textContent + 1) : '';

                    // 1st Click Action
                    if($(this).html() == 1) {

                        console.log('This is the Click No. ' + $(this).html());
                    }

                    // 2nd Click Action
                    else if($(this).html() == 2) {

                        console.log('This is the Click No. ' + $(this).html());
                    }

                });

            });
        }

        //d.NumberClick();


        let score = parseInt($('.TCount').html());

        $.fn.changeCk = function() {
            return this.on(ck, '.to-transfer', function() {

                score += 1;
                $('.TCount').html(score);

                $('.TCount').each(function() {

                    if($(this).html() == 2) {

                        console.log('This is the Click No. ' + $(this).html() + ' (I am still a Genius)');
                    }

                });

            });
        }
        d.changeCk();
    }
    d.ToLeadScr();

});