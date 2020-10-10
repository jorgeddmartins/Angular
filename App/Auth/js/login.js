//var _0xad73 = ["\x75\x73\x65\x72\x2D\x6C\x6F\x67\x69\x6E\x2D\x73\x63", "\x61\x64\x64\x43\x6C\x61\x73\x73", "\x2E\x75\x73\x65\x72\x2D\x6C\x6F\x67\x69\x6E", "\x63\x6C\x69\x63\x6B", "\x2E\x69\x6E\x2D\x75\x73\x65\x72", "\x72\x65\x6D\x6F\x76\x65\x43\x6C\x61\x73\x73", "\x23\x75\x2D\x6C\x6F\x67\x69\x6E", "\x2E\x70\x61\x73\x73\x2D\x6C\x6F\x67\x69\x6E", "\x2E\x69\x6E\x2D\x70\x61\x73\x73", "\x23\x70\x2D\x6C\x6F\x67\x69\x6E", "\x66\x6F\x63\x75\x73", "\x66\x63\x2D\x73\x75\x62\x6D\x69\x74\x2D\x6F\x70", "\x2E\x66\x63\x2D\x73\x75\x62\x6D\x69\x74", "\x6D\x6F\x75\x73\x65\x6F\x75\x74", "\x6D\x6F\x75\x73\x65\x6F\x76\x65\x72", "\x2E\x6C\x67\x2D\x62\x74\x6E\x2D\x62\x78", "\x69\x6E\x70\x75\x74", "\x2E\x75\x73\x65\x72\x2D\x6C\x6F\x67\x69\x6E\x2C\x20\x2E\x70\x61\x73\x73\x2D\x6C\x6F\x67\x69\x6E", "\x6F\x6E", "\x2E\x69\x6E\x2D\x75\x73\x65\x72\x2C\x20\x2E\x69\x6E\x2D\x70\x61\x73\x73"]; $(function () { var _0xd26cx1 = 400; var _0xd26cx2 = 200; $(_0xad73[4])[_0xad73[3]](function () { $(_0xad73[2])[_0xad73[1]](_0xad73[0]) }); $(_0xad73[6])[_0xad73[3]](function () { $(_0xad73[2])[_0xad73[5]](_0xad73[0]) }); $(_0xad73[8])[_0xad73[3]](function () { $(_0xad73[7])[_0xad73[1]](_0xad73[0]) }); $(_0xad73[9])[_0xad73[3]](function () { $(_0xad73[7])[_0xad73[5]](_0xad73[0]) }); $(_0xad73[8])[_0xad73[10]](function () { $(_0xad73[7])[_0xad73[1]](_0xad73[0]) }); $(_0xad73[4])[_0xad73[10]](function () { $(_0xad73[6])[_0xad73[1]](_0xad73[0]) }); $(_0xad73[15])[_0xad73[14]](function () { $(_0xad73[12])[_0xad73[1]](_0xad73[11]) })[_0xad73[13]](function () { $(_0xad73[12])[_0xad73[5]](_0xad73[11]) }); $(_0xad73[19])[_0xad73[18]](_0xad73[16], function () { $(_0xad73[17])[_0xad73[1]](_0xad73[0]) }) })

let d = $(document);

$(function() {

    "use strict";

    $.fn.LoginApp = function(options) {

        let defaults = $.extend({}, options);

        function lApp(options) { 

            this.runLogin(); 

            d.logApp();

            d.lgFocus();
        }

        $.extend( lApp.prototype, {

            runLogin: function() {

                $.fn.logApp = function() {
                    return this.on('click', '*', function() {

                        let cl = $(this)[0].className;
                        

                        // let id = $(this).attr('id');

                        // if(cl.indexOf('in-user') != -1) { 

                        //     $('.user-login').addClass('user-login-sc'); 
                        // }

                        // else if(id == 'u-login') { 

                        //     $('.user-login').removeClass('user-login-sc'); 
                        // }

                        // else if(cl.indexOf('in-pass') != -1) { 

                        //     $('.pass-login').addClass('user-login-sc'); 
                        // }

                        // else if(id == 'p-login') { 

                        //     $('.pass-login').removeClass('user-login-sc'); 
                        // }


                        if(cl.indexOf('lg-btn-bx') != -1) {

                            //action="http://localhost:4207"

                            //alert('That is it')
                            if($('#username').val() != 'jmartins' && $('#password').val() != 'password') {

                                $('.topMsg').show();

                                $(this).css({ opacity: '0.3', 'pointer-events': 'none'});

                            } else {

                                $('.topMsg').hide();

                                $(this).removeAttr('style');
                            }
                        }

                    });
                }

                $.fn.lgFocus = function() {
                    return this.on('focus', '*', function() {

                        if(cl.indexOf('in-pass') != -1) {

                            $('.pass-login').addClass('user-login-sc')
                        }

                        else if(cl.indexOf('in-user') != -1) {

                            $('#u-login').addClass('user-login-sc')
                        }
                    });
                }

                $('.lg-btn-bx').on('mouseover', function() { $('.fc-submit').addClass('fc-submit-op');

                }).on('mouseout', function() { $('.fc-submit').removeClass('fc-submit-op'); });


                $('.in-user, .in-pass').on('input', function() {

                    $('.user-login, .pass-login').addClass('user-login-sc');
                });

            }

        });

        let rlg = new lApp();


         $.ajax({

            type: 'GET',
            url: 'js/loginApp.json',

            success: function(data) { d.DataImages(data) }

        });

        $.fn.DataImages = function(data) {

            let dtImg = '<div id="imgselection">';

            for( let i in data.imagesData ) {

                dtImg += '<img src="' + data.imagesData[i].image + '"/>';
            }

            dtImg += '</div>';

            $(dtImg).appendTo('body');

            let images = Array();
            let indexImages = Array();

            $("#imgselection img").each(function(index) {

                images.push($(this).attr('src'));
                indexImages.push(index);
                $(this).hide();

            });

            let selectedImage = images[Math.floor(Math.random() * images.length)];

            $('.overlay_back').append('<img src="' + selectedImage + '" >')

            $('#imgselection').detach();
        }

    }

    d.LoginApp();



    /*let images = Array();
    let indexImages = Array();

    $("#imgselection img").each(function(index) {
        images.push($(this).attr('src'));
        indexImages.push(index);
        $(this).hide();
    });

    let selectedImage = images[Math.floor(Math.random() * images.length)];

    $('.overlay_back').append('<img src="' + selectedImage + '" >')*/

  // // OR Show one image
  //  var selectedIndexImage = indexImages[Math.floor(Math.random() * indexImages.length)];
  //  $('#imgselection img').eq(selectedIndexImage).show();


});