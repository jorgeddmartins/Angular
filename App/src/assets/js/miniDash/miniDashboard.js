
// Document Element
let d = $(document);

$(function() {

     "use strict";


    $.fn.miniDash = function(mdashOpt) {

        let defaultMDash = {

            // Single Values
            values: {

                // Value Null
                nullval: 0
            },

            // Animation Panel 1
            boPa1: $('.bdPanel-' + 1),

            // Animation Panel 2
            boPa2: $('.bdPanel-' + 2),

            // Animation Panel 3
            boPa3: $('.bdPanel-' + 3),

            // Animation Panel 4
            boPa4: $('.bdPanel-' + 4),

            // Main Body Panel
            borderPanel: $('.bodyPanel'),

            // Item Loads Data
            item: 'in-sourcePanel',

            // Data Url's
            data: {

                // Data From Json
                url: 'assets/js/miniDash/miniDashboard.json'
            }
            
        };

        // Mini DashBoard Settings
        let mSettings = $.extend( true, {}, defaultMDash, mdashOpt );

        // Ajax Call
        $.ajax({

            type: 'GET',
            url: mSettings.data.url,
            datatype: 'jason',

            success: function(mdata) { 

                d.miniDashdata(mdata) 
            }

        });

        // Loading Data Function
        $.fn.miniDashdata = function(mdata) {

            //debugger;

            // Data For First Panel
            let fpanel = '';
            for(let f in mdata.firstpanel) {

                fpanel += '<div class="' + mSettings.item + ' itemP-1">' +
                                '<ul>' +
                                    '<li>' + mdata.firstpanel[f].title + '</li>' +
                                    '<li class="dispVal">' + mdata.firstpanel[f].value + '</li>' +
                                '</ul>' +
                           '</div>';
            }

            // Appends Data For First Panel
            $(fpanel).appendTo('.bdPanel-1');

            // Data For Second Panel
            let spanel = '';
            for( let s in mdata.secondpanel) {

                spanel += '<div class="' + mSettings.item + ' itemP-2">' +
                               '<ul>' +
                                   '<li>' + mdata.secondpanel[s].title + '</li>' +
                                    '<li class="dispVal">' + mdata.secondpanel[s].value + '</li>' +
                               '</ul>' +
                           '</div>';
            }

            // Appends Data For Second Panel
            $(spanel).appendTo('.bdPanel-2');

            // Data For Third Panel
            let tpanel = '';
            for( let t in mdata.thirdpanel) {

                tpanel += '<div class="' + mSettings.item + ' itemP-3">' +
                                '<ul>' +
                                    '<li>' + mdata.secondpanel[t].title + '</li>' +
                                    '<li class="dispVal">' + mdata.thirdpanel[t].value + '</li>' +
                                '</ul>' +
                           '</div>';
            }

            // Appends Data For Third Panel
            $(tpanel).appendTo('.bdPanel-3');

            // Data For Fourth Panel
            let fhpanel = '';
            for( let h in mdata.fourthpanel) {

                fhpanel += '<div class="' + mSettings.item + ' itemP-4">' +
                                '<ul>' +
                                    '<li>' + mdata.fourthpanel[h].title + '</li>' +
                                    '<li class="dispVal">' + mdata.fourthpanel[h].value + '</li>' +
                                '</ul>' +
                           '</div>';
            }

            //Appends Data For Fourth Panel
            $(fhpanel).appendTo('.bdPanel-4');

            // Runs 5 Elements( First Panel )
            if(mSettings.boPa1.find('.' + mSettings.item ).length == 5 

                // Runs 5 Elements( Second Panel )
                || mSettings.boPa2.find('.' + mSettings.item ).length == 5

                // Runs 5 Elements( Third Panel )
                || mSettings.boPa3.find('.' + mSettings.item ).length == 5 

                // Runs 5 Elements( Fourth Panel )
                || mSettings.boPa4.find('.' + mSettings.item ).length == 5) {

                // Runs Function panelAnim5
                panelAnim5(); 

                // Body Panel Top For 5 Elemnts Inside
                mSettings.boPa1.add(mSettings.boPa2).add(mSettings.boPa3).add(mSettings.boPa4).css({ top: '-300%' })
            }

            // Last 14 Days Bars
            let souFlBar = '';
            let framePanelHeight = '';
            for( let s in mdata.sourceFlBar) {

                // Bars Data
                souFlBar += '<div class="sourceMainBar ' + mdata.sourceFlBar[s].barClass + '">' +
                                '<span class="sourceBar ' + mdata.sourceFlBar[s].barPos + ' ' + mdata.sourceFlBar[s].valColor + '">' +
                                    '<span class="sourcetip ' + mdata.sourceFlBar[s].tipClass + '">' + mdata.sourceFlBar[s].tipValue + '</span>' +
                                '</span>' +
                            '</div>';

                // Bars Height Data value
                framePanelHeight += '@keyframes ' + mdata.sourceFlBar[s].barPos + ' { 0% { height: 0} 100% { height: ' + mdata.sourceFlBar[s].heightVal + '%}}' +
                                    '@-webkit-keyframes ' + mdata.sourceFlBar[s].barPos + ' { 0% { height: 0} 100% { height: ' + mdata.sourceFlBar[s].heightVal + '%}}' +
                                    '@-moz-keyframes ' + mdata.sourceFlBar[s].barPos + ' { 0% { height: 0} 100% { height: ' + mdata.sourceFlBar[s].heightVal + '%}}';
            }

            $(souFlBar).appendTo('.sourceFlBar');

            // Adding KeyFrames to the header
            let sourcestyle = '<style type="text/css">' + framePanelHeight + '</style>';
            $(sourcestyle).appendTo(document.head);

            // Last 7 Days Bars
            let souFlBarSeven = '';
            let frameSevenHeight = '';
            let frameSevenDrHeight = '';
            for( let s in mdata.sourceFlBarSeven) {

                souFlBarSeven += '<div class="sourceMainSeven ' + mdata.sourceFlBarSeven[s].barClass + '">' +
                                    '<span class="sourceBarseven ' + mdata.sourceFlBarSeven[s].barPos + '">' +
                                        '<span class="sourcetip ' + mdata.sourceFlBarSeven[s].tipClass + '">' + mdata.sourceFlBarSeven[s].tipValue + '</span>' +
                                    '</span>' +
                                    '<span class="sevenBarin ' + mdata.sourceFlBarSeven[s].sBarClass + '">' +
                                        '<span class="sourcetip ' + mdata.sourceFlBarSeven[s].sBarTipClass + '">' + mdata.sourceFlBarSeven[s].stipValue + '</span>' +
                                    '</span>' +
                                '</div>';

                // Bars Height Data Value First Bar
                frameSevenHeight += '@keyframes ' + mdata.sourceFlBarSeven[s].barPos + ' { 0% { height: 0} 100% { height: ' + mdata.sourceFlBarSeven[s].fBarheightVal + '%}}' +
                                    '@-webkit-keyframes ' + mdata.sourceFlBarSeven[s].barPos + ' { 0% { height: 0} 100% { height: ' + mdata.sourceFlBarSeven[s].fBarheightVal + '%}}' +
                                    '@-moz-keyframes ' + mdata.sourceFlBarSeven[s].barPos + ' { 0% { height: 0} 100% { height: ' + mdata.sourceFlBarSeven[s].fBarheightVal + '%}}';

                // Bars Height Data Value Second Bar
                frameSevenDrHeight += '@keyframes ' + mdata.sourceFlBarSeven[s].sBarClass + ' { 0% { height: 0} 100% { height: ' + mdata.sourceFlBarSeven[s].sBarheightVal + '%}}' +
                                    '@-webkit-keyframes ' + mdata.sourceFlBarSeven[s].sBarClass + ' { 0% { height: 0} 100% { height: ' + mdata.sourceFlBarSeven[s].sBarheightVal + '%}}' +
                                    '@-moz-keyframes ' + mdata.sourceFlBarSeven[s].sBarClass + ' { 0% { height: 0} 100% { height: ' + mdata.sourceFlBarSeven[s].sBarheightVal + '%}}';
            }

            $(souFlBarSeven).appendTo('.sourceFlBarSeven');

            // Adding keyFrames to the Header 
            let Ssourcestyle = '<style type="text/css">' + frameSevenHeight + '' + frameSevenDrHeight + '</style>';
            $(Ssourcestyle).appendTo(document.head);


            // Stops Animation When Hover a Panel Element 
            d.on('mouseover', '.bodyPanel', function() { $(this).stop(true, false); });

        }

    }

    // Runs Main Function( Data Propreties )
    d.miniDash();

});