let ck = 'click';
let d = $(document);

let nestVal = 0;

$(function() {

    "use strict";

    let UrlSett = 'assets/js/navSettings/settings.json';

    $.ajax({

        type: 'GET',
        url: UrlSett,

        success: function(settingsdata) { d.NavSettingsData(settingsdata) }

    });

    $.fn.NavSettingsData = function(settingsdata) {

        let tItem = '<ol class="dd-list">';
        for (let i in settingsdata.items) {

            tItem += '<div class="no-nest">' +
                        '<li class="dd-item root-level">' +
                            '<span class="new-top-item dd-handle">' + settingsdata.items[i].title + '</span>' +
                            '<span class="new-top-item-second dd-handle">' + settingsdata.items[i].subtitle + '</span>' +
                            '<div class="switch_prod">' +
                                '<label class="switch">' +
                                    '<input type="checkbox" />' +
                                    '<div class="slider round"></div>' +
                                '</label>' +
                            '</div>' +
                        '</li>' +
                    '</div>';
        }

        tItem += '</ol>';
        $(tItem).appendTo('#nestable');

        $('.no-nest').each(function() { $(this).attr({ id: 'nest_' + nestVal });
            nestVal++ });

        let thisDrop = '';
        for (let i in settingsdata.thisDrop) {

            thisDrop += '<li><span class="thisDrop ' + settingsdata.thisDrop[i].selectClass + '">' + settingsdata.thisDrop[i].name + '</span></li>';
        }
        $(thisDrop).appendTo('.adMinSelect_Drop');

        let tbodies = '';
        for( let i in settingsdata.SettingsGridBody ) {

            tbodies += '<div class="TrBody">' +
                            '<span class="TdBody tSettWidth"><input type="text" class="EditInput" value="' + settingsdata.SettingsGridBody[i].name + '" /></span>' +
                            '<span class="TdBody tSettWidth"><input type="text" class="EditInput" value="' + settingsdata.SettingsGridBody[i].descrp + '" /></span>' +
                            '<span class="TdBody tSettWidth"><input type="text" class="EditInput" value="' + settingsdata.SettingsGridBody[i].url + '" /></span>' +
                            '<span class="TdBody tSettWidth"><input type="text" class="EditInput" value="' + settingsdata.SettingsGridBody[i].disable + '" /></span>' +
                       '</div>';
        }

        $(tbodies).appendTo('.SettingsGrid .StBody .mCSB_container');

        $('.TrBody:odd').css({ background: '#f9f9f9' });
        $('#SettingsBody').css({ 'max-height': '70vh', border: '1px solid #eee', 'border-top': 0 });

        let addTbodies = '<div class="TrBody">' +
                            '<span class="TdBody tSettWidth"><input type="text" class="EditInput" value="1" /></span>' +
                            '<span class="TdBody tSettWidth"><input type="text" class="EditInput" value="2" /></span>' +
                            '<span class="TdBody tSettWidth"><input type="text" class="EditInput" value="3" /></span>' +
                            '<span class="TdBody tSettWidth"><input type="text" class="EditInput" value="false" /></span>' +
                         '</div>';

        d.on(ck, '.addMenu', function() {

            $('#addRecord .addTrIn').after(addTbodies)
            $('.SettingsGrid .TrBody').each( function() {

                let TaskoddElem2 = ($(this).is(':odd')) ? $(this).css({ background: '#f9f9f9' }) : '';
                let TaskevenElem2 = ($(this).is(':even')) ? $(this).css({ background: '#fff' }) : '';

            });
        });
    }

    let updateOutput = function(e) {

        let list = e.length ? e : $(e.target),
            output = list.data('output');

        if (window.JSON) {
            output.val(window.JSON.stringify(list.nestable('serialize'))); //, null, 2));

        } else { output.val('Your Browser does not support JavaScript'); }
    };

    $('#nestable').nestable({ group: 1 }).on('change', updateOutput);
    $('#nestable2').nestable({ group: 1 }).on('change', updateOutput);
    updateOutput($('#nestable').data('output', $('#nestable-output')));
    updateOutput($('#nestable2').data('output', $('#nestable2-output')));

    $.fn.SettingsCk = function() {
        return this.on(ck, '*', function() {

            let TIds = $(this).attr('id');

            const gridAdd = ($(this).hasClass('grid-add')) ? $('.grid-add').removeClass('btnDisable') && $(this).addClass('btnDisable') && $('.addMenu').toggleClass('dispN') : '';

            const MenuSetitngsBtn = (TIds == 'menuSetitngsBtn') ? $('.menusettings').hide() && $('.mainMenu').show() : '';

            const MainMenuBtn = (TIds == 'mainMenuBtn') ? $('.menusettings').show() && $('.mainMenu').hide() : '';

            const UpdateNavSettings = ($(this).hasClass('update-nav-settings')) ? $('.update-nav-settings').removeClass('notallowed-nav') && $(this).addClass('notallowed-nav') : '';

            const Setpermitions = ($(this).hasClass('setpermitions')) ? $('.column-45').hide() && $('.adMinSelect, #nestable2 .switch_prod').fadeIn(300) : '';

            const UpdateNav = ($(this).hasClass('updatenav')) ? $('.column-45').show() &&
                $('.adMinSelect, .adMinSelect_Drop, #nestable2 .switch_prod').fadeOut(100) && $('.adMinSelect').removeClass('adMinRotate0') : '';

            const AdMinSelect = ($(this).hasClass('adMinSelect')) ? $('.adMinSelect_Drop').slideToggle(100) && $(this).toggleClass('adMinRotate0') : '';

            const ThisDrop = ($(this).hasClass('thisDrop')) ? $('.adMinSelect .adMinInp').val($(this).html()) && $('.adMinSelect_Drop').slideUp(100) &&
                $('.adMinSelect').removeClass('adMinRotate0') && $('.thisDrop').removeClass('selectDrop') && $(this).addClass('selectDrop') : '';

        });
    }
    d.SettingsCk();

    $("#drag-menu-left, #drag-menu-right, #SettingsBody").mCustomScrollbar({ theme: "dark-3", scrollInertia: 50 });
    $('.adMinSelect .adMinInp').val($('.adMinSelect_Drop .select').html());

    let thisBGrid = '.mainMenuGrid .t-grid-body';

    $.fn.extend({

        addMenuBtn: function() {
            return this.on(ck, '.addMenu, .addMenuGA, .addMenuG', function() {

                $('.ItemModal').fadeIn(200);
            });
        },
        ItemModalback: function() {
            return this.on(ck, '.ItemModal_back', function() { $('.ItemModal').fadeOut(200); });
        },
        addItem: function() {
            return this.on(ck, '#add-todo-item', function(e) {
                e.preventDefault();
                addTodoItem();

                if ($(this).hasClass('addMenuTr')) {
                    $('.todo-list .tgb-13').addClass('tgb-white-color');
                    $('.todo-list .tgb-icogrey-color').removeClass('tgb-white-color');
                    $('.addMenuTr').removeClass('addMenuTr');
                    $(this).addClass('addMenuGATr');

                } else if ($(this).hasClass('addMenuGATr')) {
                    $('.todo-list .tgb-13').addClass('tgb-grey-color');
                    $('.todo-list .tgb-icogrey-color').removeClass('tgb-grey-color');
                    $('.addMenuGATr').removeClass('addMenuGATr');
                    $(this).addClass('addMenuTr');
                }
            });
        },
        TItem: function() {
            return this.on(ck, '.todo-item-delete', function(e) {
                let item = this;
                deleteTodoItem(e, item);
            });
        },
        newItem: function() {
            return this.on('keyup', '.new-Item', function() { $('.addItem_Fl').show(); }); },
        ItemF: function() {
            return this.on(ck, '.addItemTodo', function() {
                addItemY(this);
            });
        },
        yup: function() {
            return this.on('keyup', '.yup', function() { $('.yup2').html($(this).val()); }); },
        yupS: function() {
            return this.on('keyup', '.yupS', function() { $('.yup3').html($(this).val()); }); },

        addsubmit: function() {
            return this.on(ck, '.add-submit', function() {

                $('.tr').appendTo(thisBGrid);
                $('.tr .todo-item-done, .tr .todo-item-delete').remove();
                $('.tr .tgb-13').removeClass('TDItem_Fl tgbN');

                $('.ItemF').removeClass('yup');
                $('.new-top-item').removeClass('yup2');

                $('.li').appendTo('#nestable .dd-list');
                $('.ItemModal').fadeOut(200);
                $('.addItem_Fl').hide();
            });
        }

    });

    d.addMenuBtn()
        .ItemModalback();

    d.addItem();
    $('#todo-list').TItem();

    d.newItem()
        .ItemF()
        .yup()
        .yupS()
        .addsubmit();

    d.on(ck, '.todo-item-done', completeTodoItem);

});

function searchitem(element) {
    let value = $(element).val();

    $.fn.extend({
        nestableFun: function() {
            return this.each(function() {

                if ($(this).text().search(new RegExp(value, "i")) > -1) { $(this).show() } else { $(this).hide() }
            });
        }
    });
    $("#nestable li").nestableFun();
}

function addTodoItem() {

    let todoItem = $('#new-todo-item').val();
    let todoItem2 = $('#new-todo-item2').val();
    let todoItem3 = $('#new-todo-item3').val();

    let thisAddItem = '<div class="addItemTodo">' +
                            '<div class="tr">' +
                                '<input type="checkbox"' + ' name="todo-item-done"' + ' class="todo-item-done"' + ' value="' + todoItem + ' ' + todoItem2 + ' ' + todoItem3 + '" />' +
                                '<span class="tgb-13 TDItem_Fl"><input class="ItemF" name="field" type="text" value="' + todoItem + '" /></span>' +
                                '<span class="tgb-13 TDItem_Fl"><input class="ItemS" name="field" type="text" value="' + todoItem2 + '" /></span>' +
                                '<span class="tgb-13 TDItem_Fl"><input class="ItemT" name="field" type="text" value="' + todoItem3 + '" /></span>' +
                                '<span class="tgb-13 tgb-icogrey-color thisBorder tgbN"><i aria-hidden="true" class="fa fa-plus-circle"></i></span>' +
                                '<span class="tgb-13 tgbN">false</span>' +
                                '<span class="tgb-13 tgbN"></span>' +
                                '<span class="todo-item-delete"><i class="fas fa-times" aria-hidden="true"></i></span>' +
                            '</div>' +
                            '<div class="no-nest li">' +
                                '<li class="dd-item root-level">' +
                                '<input type="checkbox"' + ' name="todo-item-done"' + ' class="todo-item-done"' + ' value="' + todoItem + ' ' + todoItem2 + ' ' + todoItem3 + '" />' +
                                '<span class="new-top-item dd-handle TDItem_Fl">' + todoItem + '</span>' +
                                '<span class="new-top-item-second dd-handle TDItem_Fl">' + todoItem2 + '</span>' +
                                '<div class="switch_prod"><label class="switch"><input type="checkbox"><div class="slider round"></div></label></div>' +
                                '<span class="TDItem_Fl urlDD">' + todoItem3 + '</span>' +
                                '</li>' +
                            '</div>' +
                       '</div>';

    $(thisAddItem).appendTo('#todo-list');

    $('#new-todo-item, #new-todo-item2, #new-todo-item3').val('');
    $('.AddSomeItem').hide();
}

function deleteTodoItem(e, item) {
    e.preventDefault();
    $(item).parent().fadeOut('slow', function() { $(item).parent().remove(); });
}

function completeTodoItem() { $(this).parent().toggleClass('strike'); }

function addItemY(tYup) {
    $('.ItemF').removeClass('yup');
    $('.ItemF', tYup).addClass('yup');
    $('.new-top-item').removeClass('yup2');
    $('.new-top-item', tYup).addClass('yup2');

    $('.ItemS').removeClass('yupS');
    $('.ItemS', tYup).addClass('yupS');
    $('.new-top-item-second').removeClass('yup3');
    $('.new-top-item-second', tYup).addClass('yup3');
}