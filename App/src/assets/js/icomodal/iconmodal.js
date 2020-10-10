
// Document Element
let d = $(document);

// Click Event
let ck = 'click';

$(function() {

    "use strict"

    // Global & Settings Function
    $.fn.RunIconM = function(imOpt) {

        let imDefault = {

            // Data To Load All Icons
            data: {

                // Json Data( All Icons Inside )
                urlJson: 'assets/js/icomodal/icomodal.json'
            },

            // Element where loads All Icons( Main Icons Element )
            icoFloorL: '#iconsFloor-innav .mCSB_container',

            // Main Elements To Icons Load
            main: {

                // Font Awesome 4 Icons Load Class
                fawesome4: 'fontawesomeFl',

                // Font Awesome 5 Icons Load Class
                fawesome5: 'fontawesomeFl5',

                // Font Awesome Pro Icons Load Class
                fawesomePro: 'fontawesomePro',

                // BootStrap Fonts Icons Load Class
                fbootstrap: 'bootstrapFontFl',

                // Foundation Fonts Icons Class
                ffoundation: 'foundationFontFl',

                // IconMoon Free Icons Class
                ficomFree: 'icomoonFontFl',

                // PackIconMoon Icons Class
                ficomPack: 'icomoonpackFl'
            },

            // Close Button Class
            clStcl: 'closesettings',

            // Close Tool Tip Class
            tlTipcl: 'coseTooltip',

            // Icon Modal Main Class
            mIcoDCl: 'pro-imagesettings'
        };

        // Icons Modal Settings
        let imSettings = $.extend( true, {}, imDefault, imOpt );

        // Hides Icon Modal Drop Down
        $('.labraryDrop').hide(); 


        function runIcons() { this.iconsdataRun(); }

        $.extend( runIcons.prototype, {

            iconsdataRun: function() {

                // Ajax Call For Icon Modal
                $.ajax({

                    type: "GET",
                    url: imSettings.data.urlJson,

                    success: function(data) { d.icoModalData(data); } 

                });

                // Function To Load All Font Icons
                $.fn.icoModalData =  function(data) {

                    // Loading Main Link fonts
                    let libraryData = '';
                    for( let i in data.libraryData ) {

                        libraryData += '<li>' + '<span class="' + data.libraryData[i].mainClass + '">' + data.libraryData[i].data + '</span>' + '</li>';
                    }
                    $(libraryData).appendTo('.mainIcoMenu');

                    // Loading FontAwesome links
                    let fontAwData = '';
                    for( let i in data.fontaweData ) {

                        fontAwData += '<li>' + '<span class="' + data.fontaweData[i].mainClass + '">' + data.fontaweData[i].data + '</span>' + '</li>';
                    }
                    $(fontAwData).appendTo('.sub-famenu');

                    // Loading Ico Moon link Fonts
                    let icoMoonData = '';
                    for( let i in data.icoMoonData ) {

                        icoMoonData += '<li>' + '<span class="' + data.icoMoonData[i].mainClass + '">' + data.icoMoonData[i].data + '</span>' + '</li>';
                    }
                    $(icoMoonData).appendTo('.sub-icomenu');

                    // Loading FontAwesome V4 Icons
                    let fontawesome = '<div class="fontawesomeFl cDM">';
                    for( let i in data.fontawesome ) {

                        fontawesome += '<span data-id="fa ' + data.fontawesome[i].dataid + '" class="ico-stage"><i class="fa ' + data.fontawesome[i].dataid + '" aria-hidden="true"><em>' + data.fontawesome[i].icoName + '</em></i></span>';
                    }

                    fontawesome += '</div>';
                    $(fontawesome).appendTo(imSettings.icoFloorL);

                    // Loading FontAwesome V5 Icons
                    let fontawesome5 = '<div class="fontawesomeFl5 cDM">';
                    for( let i in data.fontawesome5 ) {

                        fontawesome5 += '<span data-id="' + data.fontawesome5[i].dataid + '" class="ico-stage"><i class="' + data.fontawesome5[i].dataid + '" aria-hidden="true"><em>' + data.fontawesome5[i].icoName + '</em></i></span>';
                    }
                    fontawesome5 += '</div>';
                    $(fontawesome5).appendTo(imSettings.icoFloorL);

                    // Loading FontAwesomePro Icons
                    let fontawesomePro = '<div class="fontawesomePro cDM">';
                    for( let i in data.fontawesomePro ) {

                        fontawesomePro += '<span data-id="' + data.fontawesomePro[i].dataid + '" class="ico-stage"><i class="' + data.fontawesomePro[i].dataid + '" aria-hidden="true"><em>' + data.fontawesomePro[i].icoName + '</em></i></span>';
                    }
                    fontawesomePro += '</div>';
                    $(fontawesomePro).appendTo(imSettings.icoFloorL);

                    // Loading BootStrap Icons
                    let bootstrapFont = '<div class="bootstrapFontFl cDM">';
                    for( let i in data.bootstrapFont ) {

                        bootstrapFont += '<span data-id="glyphicon ' + data.bootstrapFont[i].dataid + '" class="ico-stage"><i class="glyphicon ' + data.bootstrapFont[i].dataid + '"><em>' + data.bootstrapFont[i].icoName + '</em></i></span>';
                    }
                    bootstrapFont += '</div>';
                    $(bootstrapFont).appendTo(imSettings.icoFloorL);

                    // Loading Foundation Icons
                    let foundationFont = '<div class="foundationFontFl cDM">';
                    for( let i in data.foundationFont ) {

                        foundationFont += '<span data-id="fd ' + data.foundationFont[i].dataid + '" class="ico-stage"><i class="fd ' + data.foundationFont[i].dataid + '"><em>' + data.foundationFont[i].icoName + '</em></i></span>'; 
                    }
                    foundationFont += '</div>';
                    $(foundationFont).appendTo(imSettings.icoFloorL);

                    // Loading Free IconMoon Icons
                    let icomoonFree = '<div class="icomoonFontFl cDM">';
                    for( let i in data.icomoonFreeFont ) {

                        icomoonFree += '<span data-id="lnr ' + data.icomoonFreeFont[i].dataid + '" class="ico-stage"><i class="lnr ' + data.icomoonFreeFont[i].dataid + '"><em>' + data.icomoonFreeFont[i].icoName + '</em></i></span>';
                    }
                    icomoonFree += '</div>';
                    $(icomoonFree).appendTo(imSettings.icoFloorL);

                    // Loading Pack Icon Moon Icons
                    let icomoonpack = '<div class="icomoonpackFl cDM">';
                    for( let i in data.icomoonpack ) {

                      icomoonpack += '<span data-id="icon ' + data.icomoonpack[i].dataid + '" class="ico-stage"><i class="icon ' + data.icomoonpack[i].dataid + '"><em>' + data.icomoonpack[i].icoName+ '</em></i></span>';  
                    }
                    icomoonpack += '</div>';
                    $(icomoonpack).appendTo(imSettings.icoFloorL);
                }

                // Function To Open All Font Icons Drop Down
                $.fn.OpenIconM = function() {
                    return this.on(ck, '.library-floor', function() { 

                        // Icons Drop Down Slides Down / Slides up
                        $('.labraryDrop').slideToggle(100);

                        // This Element Toggles Rotate Class 
                        $(this).toggleClass('rotate90'); 
                    }); 
                }
                d.OpenIconM();

                // Open IcoMoon Fonts DropDown Function
                $.fn.icoMSlide = function() {
                    return this.on(ck, '.icoM', function() {

                        // icoM Add & Remove icoRotate Class
                        $(this).toggleClass('icoMRotate');

                        // IcoMoon Drop Dowm Slides Down & Slides Up
                        $('.sub-icomenu').slideToggle(200);
                    });
                }
                d.icoMSlide();

                // Open FontAwesome DropDown
                $.fn.icoFASlide = function() {
                    return this.on(ck, '.icoFA', function() {

                        // icoFA Add & Remove icoRotate Class
                        $(this).toggleClass('icoMRotate');

                        // FontAwesome DropDown Slides Down & Slides Up
                        $('.sub-famenu').slideToggle(200);
                    });
                }
                d.icoFASlide();

                // Global Click Event Function
                $.fn.GlobCk = function() {
                    return this.on(ck, '*', function() {

                        let tclass = $(this)[0].className;

                        // Grid Click Event To Open Icon Modal
                        if(tclass.indexOf('thisBorder') != -1) {

                            // Icon Modal Fades In
                            $('.' + imSettings.mIcoDCl).fadeIn(100); 

                            // Grid Removes Class
                            $('.thisBorder').removeClass('TIcoSelected');

                            // This Grid Element Adds Class
                            $(this).addClass('TIcoSelected');
                        }

                        // Save Button Click Event
                        else if(tclass.indexOf('saveChangesMenu') != -1) {

                            // Grid Icon removes From the grid
                            $('.TIcoSelected i').remove();

                            // Icon Selected Clones to the Grid and Appends To The Grid
                            $('.selectedId i').clone().appendTo('.TIcoSelected');

                            // Icon Title Removes
                            $('.TIcoSelected i em').detach();

                            $(this).addClass('saveNotallowed');

                            // Icon Modal Fades Out
                            $('.' + imSettings.mIcoDCl).fadeOut(100); 

                            // Console Prints Icons Data Id
                            console.log($('.selectedId').data('id') + ' Added To The Grid');
                        }

                        // Icons Click Event
                        else if(tclass.indexOf('ico-stage') != -1) {

                            $('.ico-stage').removeClass('focusColor');
                            $(this).addClass('focusColor');
                            $('.iconActive-floor .ico-stage').remove();

                            $(this).clone().appendTo('.iconActive-floor').removeClass('focusColor').addClass('selectedId');

                            $('.saveChangesMenu, .openCPicker').removeClass('saveNotallowed');
                        }

                        // Close Modal Button Click Event
                        else if(tclass.indexOf(imSettings.clStcl) != -1) {

                            // Icon Modal Fades Out
                            $('.' + imSettings.mIcoDCl).fadeOut(100); 
                        }

                        else if(tclass.indexOf('drop') != -1) {

                            // Runs Function icoRemove( Global )
                            icoRemove(0);

                            // Library span adds This Html( Global )
                            $('.library-floor span').html($(this).html());

                            // FontAwesome4 Link Click Event 
                            if(tclass.indexOf('opt-awesome') != -1) {

                                // Hides FontAwesome5
                                $('.' + imSettings.main.fawesome5)

                                // Hides BootStrap Fonts
                                .add('.' + imSettings.main.fbootstrap)

                                // Hides Foundation Fonts
                                .add('.' + imSettings.main.ffoundation)

                                // Hides IconMoon Free Fonts
                                .add('.' + imSettings.main.ficomFree)

                                // Hides IconMoon Pack Fonts
                                .add('.' + imSettings.main.ficomPack)

                                // Hides FontAwesomePro
                                .add('.' + imSettings.main.fawesomePro).hide();

                                // Shows FontAwesome4
                                $('.' + imSettings.main.fawesome4).show();
                            }

                            // FontAwesome5 Link Click Event
                            if(tclass.indexOf('opt-awesome5') != -1) {

                                // Hides FontAwesome4
                                $('.' + imSettings.main.fawesome4)

                                // Hides BootStrap Fonts
                                .add('.' + imSettings.main.fbootstrap)

                                // Hides Foundation Fonts
                                .add('.' + imSettings.main.ffoundation)

                                // Hides IconMoon Free Fonts
                                .add('.' + imSettings.main.ficomFree)

                                // Hides IconMoon Pack fonts
                                .add('.' + imSettings.main.ficomPack)

                                // Hides FontAwesomePro
                                .add('.' + imSettings.main.fawesomePro).hide();

                                // Shows FontAwesome5
                                $('.' + imSettings.main.fawesome5).show();
                            }

                            // FontAwesomePro Link Click Event
                            if(tclass.indexOf('opt-awesomePro') != -1) {

                                // Hides FontAwesome4
                                $('.' + imSettings.main.fawesome4)

                                // Hides BootStrap Fonts
                                .add('.' + imSettings.main.fbootstrap)

                                // Hides Foundation Fonts
                                .add('.' + imSettings.main.ffoundation)

                                // Hides IconMoon Free Fonts
                                .add('.' + imSettings.main.ficomFree)

                                // Hides IconMoon Pack fonts
                                .add('.' + imSettings.main.ficomPack)

                                // Hides FontAwesome5
                                .add('.' + imSettings.main.fawesome5).hide();

                                // Shows FontAwesomePro
                                $('.' + imSettings.main.fawesomePro).show();
                            }

                            // BootStrap Link Click Event
                            if(tclass.indexOf('opt-other') != -1) {

                                // Hides FontAwesome4
                                $('.' + imSettings.main.fawesome4)

                                // Hides fontAwesome5
                                .add('.' + imSettings.main.fawesome5)   

                                // Hides Foundation Fonts
                                .add('.' + imSettings.main.ffoundation)

                                // Hides IconMooon Free Fonts
                                .add('.' + imSettings.main.ficomFree)

                                // Hides IconMoon Pack Fonts
                                .add('.' + imSettings.main.ficomPack)

                                // Hides FontAwesomePro
                                .add('.' + imSettings.main.fawesomePro).hide();

                                // Shows BootStrap Fonts
                                $('.' + imSettings.main.fbootstrap).show();
                            }

                            // Foundation Link Click Event
                            if(tclass.indexOf('opt-found') != -1) {

                                // Hides FontAwesome4
                                $('.' + imSettings.main.fawesome4)

                                // Hides FontAwesome5 
                                .add('.' + imSettings.main.fawesome5)

                                // Hides BootStrap Fonts
                                .add('.' + imSettings.main.fbootstrap)

                                // Hides IconMoon Free Fonts
                                .add('.' + imSettings.main.ficomFree)

                                // Hides IconMoon Pack Fonts
                                .add('.' + imSettings.main.ficomPack)

                                // Hides FontAwesomePro
                                .add('.' + imSettings.main.fawesomePro).hide();

                                // Shows Foundation Fonts
                                $('.' + imSettings.main.ffoundation).show();
                            }

                            // IconMoon Free Link Click Event
                            if(tclass.indexOf('opt-icomoom') != -1) {

                                // Hides FontAwesome4
                                $('.' + imSettings.main.fawesome4)

                                // Hides FontAwesome5
                                .add('.' + imSettings.main.fawesome5)

                                // Hides BootStrap Fonts
                                .add('.' + imSettings.main.fbootstrap)

                                // Hides Foundation Fonts
                                .add('.' + imSettings.main.ffoundation)

                                // Hides IconMoon Pack Fonts
                                .add('.' + imSettings.main.ficomPack)

                                .add('.' + imSettings.main.fawesomePro).hide();

                                // Shows IconMoon Free Fonts
                                $('.' + imSettings.main.ficomFree).show();
                            }

                            // IconMoon Pack Link Click Event
                            if(tclass.indexOf('opt-icomoonessential') != -1) {

                                // Hides FontAwesome4
                                $('.' + imSettings.main.fawesome4)

                                // Hides FontAwesome5
                                .add('.' + imSettings.main.fawesome5)

                                // Hides BootStrap Fonts
                                .add('.' + imSettings.main.fbootstrap)

                                // Hides Foundation Fonts
                                .add('.' + imSettings.main.ffoundation)

                                // Hides IconMoon Free Fonts
                                .add('.' + imSettings.main.ficomFree)

                                // Hides FontAwesomePro
                                .add('.' + imSettings.main.fawesomePro).hide();

                                // Shows IconMoon Pack Fonts
                                $('.' + imSettings.main.ficomPack).show();
                            }
                        }

                    });
                }
                d.GlobCk();

                // Close Button ToolTip MouseOver & MouseLeave
                $('.' + imSettings.clStcl).hover( 

                    // Close Button MouseOver
                    function() { 

                        // ToolTip Shows( MouseOver )
                        $('.' + imSettings.tlTipcl).stop().show();
                    }, 

                    // Close Button MouseLeave
                    function() { 

                        // ToolTip Hides( MouseLeave )
                        $('.' + imSettings.tlTipcl).stop().hide();
                });


                // Icon Search
                $.fn.searchitem = function(element) {

                    let value = $(element).val();

                    return this.each(function() {

                        let sIt = $(this).text().search(new RegExp(value, "i")) > -1 ? $(this).show() : $(this).hide();
                    });
                }
                $('#iconsFloor-innav .ico-stage').searchitem();

                // Input KeyUp for Auto Search
                $.fn.aSearch = function() {
                    return this.on('keyup', '.auto-search', function() {

                        // Search This Icon
                        $('#iconsFloor-innav .ico-stage').searchitem(this);
                    });
                }
                d.aSearch();

                // Adding JQuery CustomScrollBar In Icon Picker
                $('#iconsFloor-innav').mCustomScrollbar({ theme:"minimal", scrollInertia: 70 });

                // Rotate Drop Down Icon Function
                function icoRemove(nullBar) { 

                    // Removes icoMRotate For These Classes
                    $('.icoM, .icoFA').removeClass('icoMRotate');

                    // These Elements Hide 
                    $('.sub-icomenu, .sub-famenu').hide(); 

                    // Library Drop Down Slides Up
                    $('.labraryDrop').slideUp(100);

                    // Library Drop Down Removes Class rotate90
                    $('.library-floor').removeClass('rotate90');

                    // When a Library is changed the ScrollBar Scrolls up
                    $('#iconsFloor-innav .mCSB_container').css({ top: nullBar });
                }
            }

        });


        let runIconsM = new runIcons();

    }

    // Runs The Main Function
    d.RunIconM();

});