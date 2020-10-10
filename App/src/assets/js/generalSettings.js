$(function() {

    "use strict";

    $.fn.GeneralSett = function(options) {

        let pluginName = 'GenSetts';

        let defaults = $.extend({

            data: {

                url: 'assets/js/generalSettings.json'
            },

            clSquare: '<div class="in_Opt Right">' +
                            '<i class="icon icon-move moveTh"></i>' +
                            '<i class="fa fa-close ClOpt"></i>' +
                            '<i class="fas fa-chevron-left archiveIco"></i>' +
                            '<span class="GenCpk"></span>' +
                        '</div>',

            icoVal: '#globalpicker',
            
            tbsVal: '#tabspicker',

            secTle: '#secTtilespicker',
            
            navLVal: '#leftNavpicker',

            navlk: '#navHeading',

            navsublk: '#navSubHeading',

            icoPNt: '#f9f9f9',

            clpicker: '#leftNavpicker, #globalpicker, #secTtilespicker, #navHeading, #navSubHeading',

            editTemp: '<div class="EditTemp">' +
                            '<span class="RemEditBtn">X</span>' +
                            '<span class="AddEditBtn">+</span>' +
                        '</div>',

            templ: {

                prodClT: '<div class="fGlobalSett k-Search-Header-">' + 
                            '<input type="text" class="GsettT" placeholder="Create a Title" />' +
                            '<div class="EditTemp">' +
                                '<span class="RemEditBtn">X</span>' +
                                '<span class="AddEditBtn">+</span>' +
                            '</div>' +
                         '</div>',

                cPikBlk: '<div class="in_Opt Right">' +
                            '<i class="icon icon-move moveTh"></i>' +
                            '<i class="fa fa-close ClOpt"></i>' +
                            '<i class="fas fa-chevron-left archiveIco"></i>' +
                            '<span class="GenCpk"></span>' +
                         '</div>',
                //<span class="ClOpt">x</span>

                MtEdit: '<div class="blkOpt MainNav_">' +
                            '<span class="in_Opt Left">' +
                                '<input type="text" class="IcPtl ToAdd" placeholder="Create a Title" />' +
                                '<input type="text" class="IcPdes ToAddSub" placeholder="Create a Sub Title" />' +
                            '</span>' +
                            '<div class="in_Opt Right">' +
                                '<i class="icon icon-move moveTh"></i>' +
                                '<i class="fa fa-close ClOpt"></i>' +
                                '<i class="fas fa-chevron-left archiveIco"></i>' +
                                '<span class="GenCpk"></span>' +
                            '</div>' +
                        '</div>'
            },

            // Id Sortable Modal 1
            sortTb1: '#sortable1',

            // Id Sortable Modal 2
            sortTb2: '#sortable2',

            // Id Sortable Modal 3
            sortTb3: '#sortable3',

            popDragg: true

        }, options);

        // Runs Settings
        let settings = $.extend(true, {}, defaults, options);

        // Function To Run the Prototype
        function runSetts() {

            this._name = pluginName;

            this.dataR();

            $(document).selFiles();
        }

        // Runs Prototype
        $.extend(runSetts.prototype, {

            dataR: function() {

                $.ajax({

                    type: 'GET',
                    url: settings.data.url,

                    success: function(settData) { $(document).settData(settData) }
                });

                $.fn.settData = function(settData) {

                    // Color Picker Template For the Main Nav
                    let navSett = '';
                    for(let i in settData.mainnavCl) {

                        // First Template
                        navSett += '<div class="blkOpt MainNav_' + settData.mainnavCl[i].id + '">' +
                                        '<span class="in_Opt Left">' + 
                                            '<input type="text" class="IcPtl" value="' + ' ' + settData.mainnavCl[i].title + ':' + '" placeholder="Create Title" />' +
                                            '<input type="text" class="IcPdes" value="' + settData.mainnavCl[i].desc + '" placeholder="Create a Sub Title" />' +
                                        '</span>' +
                                    '</div>';
                    }
                    navSett += settings.editTemp;


                    $(navSett).appendTo('.k-Search-Header-' + 0);

                    // Color Picker Template For Global Items
                    let glSett = '';
                    for(let i in settData.globalCl) {

                        // First Template
                        glSett += '<div class="blkOpt GlobalEv_' + settData.globalCl[i].id + '">' +
                                        '<span class="in_Opt Left">' +
                                            '<input type="text" class="IcPtl" value="' + ' ' + settData.globalCl[i].title + ':' + '" placeholder="Create Title" />' +
                                            '<input type="text" class="IcPdes" value="' + settData.globalCl[i].desc + '" placeholder="Create a Sub Title" />' +
                                        '</span>' +
                                    '</div>';
                    }
                    glSett += settings.editTemp;

                    // Appends Template in the First Floor
                    $(glSett).appendTo('.k-Search-Header-' + 1);

                    // Color Picker Template For the ToolTips
                    let toolSett = '';
                    for(let i in settData.tipCl) {

                        // Second Template
                        toolSett += '<div class="blkOpt ToolEv_' + settData.tipCl[i].id + '">' +
                                        '<span class="in_Opt Left">' +
                                            '<input type="text" class="IcPtl" value="' + ' ' + settData.tipCl[i].title + ':' + '" placeholder="Create Title" />' +
                                            '<input type="text" class="IcPdes" value="' + settData.tipCl[i].desc + '" placeholder="Create a Sub Title" />' +
                                        '</span>' +
                                    '</div>';
                    }
                    toolSett += settings.editTemp;

                    // Appends Template in the Second Floor
                    $(toolSett).appendTo('.k-Search-Header-' + 2);

                    // Color Square Injection 
                    $(settings.clSquare).appendTo('.blkOpt');

                    /********** Adds Classes To Color Pickers **********/
                    // First Block For Color Pickers
                    $('.k-Search-Header-1 .GenCpk').addClass('ClPicker' + 1);

                    // Second Floor For Color Pickers
                    $('.k-Search-Header-2 .GenCpk').addClass('ClPicker' + 2);

                    // Third Floor For Color Pickers
                    // $('.k-Search-Header-3 .GenCpk').addClass('ClPicker' + 3);

                    // Fourth Floor For Color Pickers
                    // $('.k-Search-Header-4 .GenCpk').addClass('ClPicker' + 4);

                    // Global Icons Kendo ColorPicker
                    $('<input id="globalpicker" />').appendTo('.GlobalEv_1 .in_Opt.Right .GenCpk');

                    // Grid Tabs Kendo ColorPicker
                    $('<input id="secTtilespicker" />').appendTo('.MainNav_2 .in_Opt.Right .GenCpk');

                    // Left Nav Kendo ColorPicker
                    $('<input id="leftNavpicker" />').appendTo('.MainNav_1 .in_Opt.Right .GenCpk');

                    // Left Nav Heading Color
                    $('<input id="navHeading" />').appendTo('.MainNav_3 .in_Opt.Right .GenCpk');

                    // Left Nav Sub Heading Color
                    $('<input id="navSubHeading" />').appendTo('.MainNav_4 .in_Opt.Right .GenCpk');

                    // Save Button / Publish Button Click Event
                    $.fn.colorSettings = function() {
                        return this.on('click', '.sClo', function() {


                            $(this).html('Saved').css({ 'padding-left': '42px' }).append('<i class="fad fa-spinner-third fa-spin" aria-hidden="true"></i>');

                            setTimeout(function() { 

                                $('.sClo').html('Save and Publish').css({ 'padding-left': '' }); 

                            }, 1000);
                        

                            // Global Icons Color
                            if($(settings.icoVal).val() == settings.icoPNt) { $('#button-nav-right .icon').css({ color: '#0BAD86'}); 

                            } else { $('#button-nav-right .icon').css({ color: $(settings.icoVal).val() }); }

                            // Section Titles Colors
                            if($(settings.secTle).val() == settings.icoPNt) { $('.separate-nav .separ-title').css({ color: '#0BAD86'});
                            
                            } else { $('.separate-nav .separ-title').css({ color: $(settings.secTle).val()}); }

                            // Left Nav Colors
                            if($(settings.navLVal).val() == settings.icoPNt) {

                                $('.new-right-ico-floor').css({ color: '#999'});
                                $('#searchbar .panel-heading i').css({ color: '#0BAD86'});
                            }
                            else { $('.new-right-ico-floor, #searchbar .panel-heading i').css({ color: $(settings.navLVal).val()}); }

                            // Nav Left Heading Colors
                            if($(settings.navlk).val() == settings.icoPNt) { $('.new-top-item, .new-sub-url').css({ color: '#777'});
                            
                            } else { $('.new-top-item, .new-sub-url').css({ color: $(settings.navlk).val()}); }

                            // Nav Left Sub Heading Colors
                            if($(settings.navsublk).val() == settings.icoPNt) { $('.new-top-item-second').css({ color: '#999'});
                            
                            } else { $('.new-top-item-second').css({ color: $(settings.navsublk).val()}); }


                        });
                    }
                    $(document).colorSettings();

                    // Reset Button Click Event
                    $.fn.ResetClrs = function() {
                        return this.on('click', '.sReset', function() {
                            
                            $('.new-right-ico-floor').css({ color: '#999'});
                                
                            $('#searchbar .panel-heading i').css({ color: '#0BAD86'});
                            
                            $('#button-nav-right .icon').css({  color: '#0BAD86' });

                            $('.separate-nav .separ-title').css({ color: '#0BAD86'});

                            $('.new-top-item, .new-sub-url').css({ color: '#777'});

                            $('.new-top-item-second').css({ color: '#999'});
                            
                            $('.k-selected-color').css({ background: settings.icoPNt});
                            
                            $('#globalpicker, #secTtilespicker').val(settings.icoPNt);
                        });
                    }
                    $(document).ResetClrs();

                    $(settings.clpicker).kendoColorPicker({
                        value: settings.icoPNt,
                        buttons: false,
                        select: preview
                    });
                }

                // Runs Logic Function
                this.LogicR();

                // Runs Settings PopUp
                this.settingsPop();
            },

            LogicR: function() {

                // UpLoad Multiple Files
				$("#files").kendoUpload({

			        async: {
			            saveUrl: "save",
			            removeUrl: "remove",
			            autoUpload: false
			        },
			        multiple: true,

			        select: function(e) {
			            let fileInfo = e.files[0];
			            let wrapper = this.wrapper;

			            setTimeout(function() { addPreview(fileInfo, wrapper); });
			        }
			    });

			    $.fn.selFiles = function() {
			    	return this.on('click', '#files', function() {

			    		$('#fileUpload .k-upload .k-button.k-clear-selected').text('Clear All');
			    	});
			    }

			    $.fn.upLoadFOver = function() {
			    	return this.on('mouseover', '.image-preview', function() {

			    		$(this).css({ transform: 'scale(2.7)', '-webkit-transform': 'scale(2.7)', '-moz-transform': 'scale(2.7)', transition: '.3s', '-webkit-transition': '.3s', '-moz-transition': '.3s', 'z-index': '1000' });

			    	}).on('mouseleave', '.image-preview', function() { $('.image-preview').css({ transform: '', transition: '.3s', '-webkit-transition': '.3s', '-moz-transition': '.3s', 'z-index': ''});});
			    };
			    $(document).upLoadFOver();

                $.fn.CreateBlks = function() {
                    return this.on('click', '*', function() {

                        let TClass = $(this)[0].className;

                        // Product Block Injection
                        if(TClass.indexOf('AddProBlk') != -1) { $(settings.templ.prodClT).appendTo('.prodColumm'); }

                        // Shows Modal Settings
                        else if(TClass.indexOf('CrBlock') != -1) { $('.CreateBlk_Modal').show(); }

                        // Removes the whole Product Block
                        else if(TClass.indexOf('RemEditBtn') != -1) { $('.create').detach(); }

                        // Removes The Product Block Inside
                        else if(TClass.indexOf('ToRemove') != -1) { 

                            $('.TopTRemove').detach(); 

                            // if($('.GoArchive_Drop').find('.blkOpt').length == 1) {

                            //     $('.GoArchive_Drop .blkOpt').addClass('TheLast');
                            // } 
                        }

                        else if(TClass.indexOf('blkOpt') != -1) { 

                            if($('.GoArchive_Drop').find('.blkOpt').length == 1) {

                                $('.GoArchive_Drop .blkOpt').addClass('TheLast');
                            }
                        }

                        // Closes Settings Modal
                        else if(TClass.indexOf('iconClose') != -1) { 

                            $('.CreateBlk_Modal').hide(); 

                            $('.CBlk_FloorRight .blkOpt').detach();

                            $('.GoArchive_Drop').slideUp(100);
                        }
                    });
                }
                $(document).CreateBlks();


                $(document).on('click', '.TheLast', function() { 

                    $('.GoArchive_Drop').removeClass('DropClear'); 
                });


                $.fn.MouseElOver = function() {
                    return this.on('mouseover', '*', function() {

                        let MClass = $(this)[0].className;

                        if(MClass.indexOf('k-Search-Header-') != -1) {

                            $('.k-Search-Header-').removeClass('create')
                            $(this).addClass('create');

                            $('.k-Search-Header- .AddEditBtn').removeClass('CrBlock');
                            $('.AddEditBtn', this).addClass('CrBlock');
                        }

                        else if(MClass.indexOf('Right') != -1) {

                            $('.in_Opt.Right .ClOpt').removeClass('ToRemove');
                            $('.ClOpt', this).addClass('ToRemove');
                        }

                        else if(MClass.indexOf('blkOpt') != -1) {

                            $('.blkOpt').removeClass('TopTRemove');
                            $(this).addClass('TopTRemove');
                        }

                        else if(MClass.indexOf('closeC') != -1) { $('.closeC_Tip', this).show(); }

                    });
                }
                $(document).MouseElOver();

               // $(settings.editTemp).appendTo('.fGlobalSett');
            },

            settingsPop: function() {

                $(document).on('mouseleave', '.closeC', function() { $('.closeC_Tip').hide(); });

                $.fn.ModalClF = function() {
                    return this.on('click', '*', function() {

                        let Mclass = $(this)[0].className;

                        if(Mclass.indexOf('CrBlock') != -1) {

                            $('.CBlk_SubTitle').html( $('.create .GsettT').html() || $('.create .GsettT').val() );

                            $('.CBlk_Title h5').html( 'Modal ' + $('#searchbar h4').html() );

                            $('.create .blkOpt').clone().appendTo('.CBlk_FloorRight');
                        }

                        else if(Mclass.indexOf('AddTip') != -1) { 

                            $(settings.templ.MtEdit).appendTo('.CBlk_FloorLeft'); 
                            $('.GoArchive_Drop').slideUp(100);
                        }

                        else if(Mclass.indexOf('ToAdd') != -1) { $('.CBlk_FloorLeft .TopTRemove').addClass('ToApply'); }

                        else if(Mclass.indexOf('Apply_Btn') != -1) { 

                            $('.create .blkOpt').detach();

                            $('.CBlk_FloorRight .blkOpt').clone().insertBefore('.create .EditTemp'); 

                            $('.GoArchive_Drop').slideUp(100);
                        }

                        else if(Mclass.indexOf('ClearAll_Btn') != -1) { 

                            $('.CBlk_FloorRight .blkOpt').detach(); 
                            $('.GoArchive_Drop').slideUp(100);
                        }
                    });
                }
                $(document).ModalClF();

                $(document).on('click', '.GoArchive', function() { 

                    $('.GoArchive_Drop').slideToggle(100); 

                    if($('.GoArchive_Drop').find('.blkOpt').length == 0) { $('.GoArchive_Drop').removeClass('DropClear'); }
                });


                // Drag / Drop Blocks Inside Modal General Settings 
                $(settings.sortTb1)
                    .add(settings.sortTb2)
                    .add(settings.sortTb3)
                    .sortable({ 

                        connectWith: '.column'

                    })
                    .disableSelection();


                // Archive Elements Event
                $.fn.archiMove = function() {
                    return this.on('click', '.CBlk_FloorRight .TopTRemove .archiveIco', function() {

                        $('.CBlk_FloorRight .TopTRemove').appendTo('.GoArchive_Drop');

                        $('.GoArchive_Drop').addClass('DropClear');

                         if($('.GoArchive_Drop').find('.blkOpt').length >= 2) {

                            $('.GoArchive_Drop .blkOpt').removeClass('TheLast');
                        } 

                        else if($('.GoArchive_Drop').find('.blkOpt').length == 1) {

                            $('.GoArchive_Drop .blkOpt').addClass('TheLast');
                        }


                    });
                }
                $(document).archiMove();

                // Makes The Setitngs PopUp Draggable
                if(settings.popDragg == true) { $('.CBlk_Floor').draggable(); }

                $('.thisRgb').hide();

                $(document).on('click', '.sClo', function() {

                    $('.thisRgb').val(convertHex($('#globalpicker').val(), 50));

                    $('.OverLayBtn .oLayer').css({ background: $('.thisRgb').val() });

                });

                


            }

        });

        let gstt = new runSetts();
    }

    $(document).GeneralSett();

    //$("#files").kendoUpload();

});

// Kendo Color Picker
function preview(e) {

    $("#background").css("background-color", e.value);
}

function addPreview(file, wrapper) {

    let raw = file.rawFile;
    let reader = new FileReader();

    if (raw) {

        reader.onloadend = function() {

            let preview = $("<img class='image-preview'>").attr("src", this.result);

            wrapper.find(".k-file[data-uid='" + file.uid + "'] .k-file-extension-wrapper").replaceWith(preview);
        };

        reader.readAsDataURL(raw);
    }
}


function convertHex(hex, opacity) {

    hex = hex.replace('#','');

    r = parseInt(hex.substring(0,2), 16);
    g = parseInt(hex.substring(2,4), 16);
    b = parseInt(hex.substring(4,6), 16);

    result = 'rgba('+ r +', '+ g +', '+ b +', '+ opacity / 100 +')';

    return result;
}

// $('.thisRgb').val(convertHex('#CC0000', 50));

//$('.smallCalend .TeleGridSecd .secondItem').removeClass('addMinuteValue');


// function ahex_to_rba(ahex) {
//     //clean #
//     ahex = ahex.substring(1, ahex.length);
//     ahex = ahex.split('');

//     var r = ahex[0] + ahex[0],
//         g = ahex[1] + ahex[1],
//         b = ahex[2] + ahex[2],
//         a = ahex[3] + ahex[3];

//     if (ahex.length >= 6) {
//         r = ahex[0] + ahex[1];
//         g = ahex[2] + ahex[3];
//         b = ahex[4] + ahex[5];
//         a = ahex[6] + (ahex[7] ? ahex[7] : ahex[6]);
//     }

//     var int_r = parseInt(r, 16),
//         int_g = parseInt(g, 16),
//         int_b = parseInt(b, 16),
//         int_a = parseInt(a, 16);


//     int_a = int_a / 255;

//     if (int_a < 1 && int_a > 0) int_a = int_a.toFixed(2);

//     if (int_a || int_a === 0)

//         return 'rgba('+int_r+', '+int_g+', '+int_b+', '+0.5+')';

//        // return 'rgb('+int_r+', '+int_g+', '+int_b+')';
// }


// $(function() {

//     $('#go').click(function() {

//         $('p b').text(ahex_to_rba($('#hex').val()));

//     });

// });