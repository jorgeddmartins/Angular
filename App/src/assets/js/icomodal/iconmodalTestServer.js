$(function() {
    "use strict";
    
    $.fn.RunIconM = function(a) {
        function b(a) {
            $(".icoM, .icoFA").removeClass("icoMRotate"), $(".sub-icomenu, .sub-famenu").hide(), $(".labraryDrop").slideUp(100), $(".library-floor").removeClass("rotate90"), $("#iconsFloor-innav .mCSB_container").css({
                top: 0
            }), $(".library-floor .dropTextFonts").html(a.html())
        }
        let c = $.extend(!0, {}, {
            data: {
                urlJson: "/assets/js/icomodal/icomodal.json"
            },
            icoFloorL: "#iconsFloor-innav .mCSB_container",
            main: {
                fawesome4: "fontawesomeFl",
                fawesome5: "fontawesomeFl5",
                fawesomePro: "fontawesomePro",
                fbootstrap: "bootstrapFontFl",
                ffoundation: "foundationFontFl",
                ficomFree: "icomoonFontFl",
                ficomPack: "icomoonpackFl"
            },
            clStcl: "closesettings",
            tlTipcl: "coseTooltip",
            mIcoDCl: "pro-imagesettings"
        }, a);
        
        
        function runIcons() { this.runIcom(); }
        
        $.extend( runIcons.prototype, {
            
            runIcom: function() {
        
                $(".labraryDrop").hide(), $.ajax({
                    type: "GET",
                    url: c.data.urlJson,
                    success: function(a) {
                        d.icoModalData(a)
                    }
                }), 
                
                $.fn.icoModalData = function(a) {
                    let b = "";
                    for (let c in a.libraryData) b += "<li><span class=\"" + a.libraryData[c].mainClass + "\">" + a.libraryData[c].data + "</span></li>";
                    $(b).appendTo(".mainIcoMenu");

                    let e = "";
                    for (let b in a.fontaweData) e += "<li><span class=\"" + a.fontaweData[b].mainClass + "\">" + a.fontaweData[b].data + "</span></li>";
                    $(e).appendTo(".sub-famenu");

                    let f = "";
                    for (let b in a.icoMoonData) f += "<li><span class=\"" + a.icoMoonData[b].mainClass + "\">" + a.icoMoonData[b].data + "</span></li>";
                    $(f).appendTo(".sub-icomenu");

                    let g = "<div class=\"fontawesomeFl cDM\">";
                    for (let b in a.fontawesome) g += "<span data-id=\"fa " + a.fontawesome[b].dataid + "\" class=\"ico-stage\"><i class=\"fa " + a.fontawesome[b].dataid + "\" aria-hidden=\"true\"><em>" + a.fontawesome[b].icoName + "</em></i></span>";
                    g += "</div>", $(g).appendTo(c.icoFloorL);

                    let h = "<div class=\"fontawesomeFl5 cDM\">";
                    for (let b in a.fontawesome5) h += "<span data-id=\"" + a.fontawesome5[b].dataid + "\" class=\"ico-stage\"><i class=\"" + a.fontawesome5[b].dataid + "\" aria-hidden=\"true\"><em>" + a.fontawesome5[b].icoName + "</em></i></span>";
                    h += "</div>", $(h).appendTo(c.icoFloorL);

                    let p = '<div class="fontawesomePro cDM">';
                    for( let i in a.fontawesomePro ) {
                       p += '<span data-id="' + a.fontawesomePro[i].dataid + '" class="ico-stage"><i class="' + a.fontawesomePro[i].dataid + '" aria-hidden="true"><em>' + a.fontawesomePro[i].icoName + '</em></i></span>';
                    }
                    p += '</div>', $(p).appendTo(c.icoFloorL);

                    let j = "<div class=\"bootstrapFontFl cDM\">";
                    for (let b in a.bootstrapFont) j += "<span data-id=\"glyphicon " + a.bootstrapFont[b].dataid + "\" class=\"ico-stage\"><i class=\"glyphicon " + a.bootstrapFont[b].dataid + "\"><em>" + a.bootstrapFont[b].icoName + "</em></i></span>";
                    j += "</div>", $(j).appendTo(c.icoFloorL);

                    let k = "<div class=\"foundationFontFl cDM\">";
                    for (let b in a.foundationFont) k += "<span data-id=\"fd " + a.foundationFont[b].dataid + "\" class=\"ico-stage\"><i class=\"fd " + a.foundationFont[b].dataid + "\"><em>" + a.foundationFont[b].icoName + "</em></i></span>";
                    k += "</div>", $(k).appendTo(c.icoFloorL);

                    let l = "<div class=\"icomoonFontFl cDM\">";
                    for (let b in a.icomoonFreeFont) l += "<span data-id=\"lnr " + a.icomoonFreeFont[b].dataid + "\" class=\"ico-stage\"><i class=\"lnr " + a.icomoonFreeFont[b].dataid + "\"><em>" + a.icomoonFreeFont[b].icoName + "</em></i></span>";
                    l += "</div>", $(l).appendTo(c.icoFloorL);

                    let m = "<div class=\"icomoonpackFl cDM\">";
                    for (let b in a.icomoonpack) m += "<span data-id=\"icon " + a.icomoonpack[b].dataid + "\" class=\"ico-stage\"><i class=\"icon " + a.icomoonpack[b].dataid + "\"><em>" + a.icomoonpack[b].icoName + "</em></i></span>";
                    m += "</div>", $(m).appendTo(c.icoFloorL)
                }, 
                
                $.fn.OpenIconM = function() {
                    return this.on(ck, ".library-floor", function(a) {
                        a.stopPropagation(), $(".labraryDrop").slideToggle(100), $(this).toggleClass("rotate90")
                    })
                }, 
                
                d.OpenIconM(), $.fn.icoMSlide = function() {
                    return this.on(ck, ".icoM", function() {
                        $(this).toggleClass("icoMRotate"), $(".sub-icomenu").slideToggle(200)
                    })
                },
                
                d.icoMSlide(), $.fn.icoFASlide = function() {
                    return this.on(ck, ".icoFA", function() {
                        $(this).toggleClass("icoMRotate"), $(".sub-famenu").slideToggle(200)
                    })
                }, 
                
                d.icoFASlide(), $.fn.GlobCk = function() {
                    return this.on(ck, "*", function() {
                        let a = $(this)[0].className;
                        
                        if (-1 != a.indexOf("saveChangesMenu")) {
                            var b = $(".selectedid").data("id");
                            if (null != b) {
                                var e = $("#menuGrid").data().kendoGrid,
                                    f = e.select(),
                                    g = e.dataItem(f);
                                g.set("ImagePath", b), setTimeout(function() {
                                    $("#menuGrid").data("kendoGrid").dataSource.sync()
                                })
                            }
                            $(this).addClass("saveNotallowed"), $("." + c.mIcoDCl).fadeOut(100)
                        } 
                        
                        else -1 == a.indexOf("ico-stage") ? -1 != a.indexOf(c.clStcl) && $("." + c.mIcoDCl).fadeOut(100) : ($(".ico-stage").removeClass("focusColor"), $(this).addClass("focusColor"), $(".iconActive-floor .ico-stage").remove(), $(this).clone().appendTo(".iconActive-floor").removeClass("focusColor").addClass("selectedId"), $(".saveChangesMenu").removeClass("saveNotallowed"))
                    })
                }, 

                d.GlobCk(), d.on(ck, ".drop", function() {
                    let a = $(this)[0].className;

                    b($(this)), -1 != a.indexOf("opt-awesome") 
                    && ($("." + c.main.fawesome5).add("." + c.main.fbootstrap).add("." + c.main.ffoundation).add("." + c.main.ficomFree).add("." + c.main.ficomPack).add("." + c.main.fawesomePro).hide(), $("." + c.main.fawesome4).show()), 

                    -1 != a.indexOf("opt-awesome5") 
                    && ($("." + c.main.fawesome4).add("." + c.main.fbootstrap).add("." + c.main.ffoundation).add("." + c.main.ficomFree).add("." + c.main.ficomPack).add("." + c.main.fawesomePro).hide(), $("." + c.main.fawesome5).show()), 

                    -1 != a.indexOf("opt-awesomePro")
                    && ($("." + c.main.fawesome4).add("." + c.main.fbootstrap).add("." + c.main.ffoundation).add("." + c.main.ficomFree).add("." + c.main.ficomPack).hide().add("." + c.main.fawesome5), $("." + c.main.fawesomePro).show()), 

                    -1 != a.indexOf("opt-other") 
                    && ($("." + c.main.fawesome4).add("." + c.main.fawesome5).add("." + c.main.ffoundation).add("." + c.main.ficomFree).add("." + c.main.ficomPack).add("." + c.main.fawesomePro).hide(), $("." + c.main.fbootstrap).show()), 

                    -1 != a.indexOf("opt-found") 
                    && ($("." + c.main.fawesome4).add("." + c.main.fawesome5).add("." + c.main.fbootstrap).add("." + c.main.ficomFree).add("." + c.main.ficomPack).add("." + c.main.fawesomePro).hide(), $("." + c.main.ffoundation).show()), 

                    -1 != a.indexOf("opt-icomoom") 
                    && ($("." + c.main.fawesome4).add("." + c.main.fawesome5).add("." + c.main.fbootstrap).add("." + c.main.ffoundation).add("." + c.main.ficomPack).add("." + c.main.fawesomePro).hide(), $("." + c.main.ficomFree).show()), 

                    -1 != a.indexOf("opt-icomoonessential") 
                    && ($("." + c.main.fawesome4).add("." + c.main.fawesome5).add("." + c.main.fbootstrap).add("." + c.main.ffoundation).add("." + c.main.ficomFree).add("." + c.main.fawesomePro).hide(), $("." + c.main.ficomPack).show())
                }), 
                
                $.fn.closeOver = function() {
                    return this.on("mouseover", "." + c.clStcl, function() {
                        $("." + c.tlTipcl).show()
                    })
                }, 
                
                d.closeOver(), $.fn.closeLeave = function() {
                    return this.on("mouseleave", "." + c.clStcl, function() {
                        $("." + c.tlTipcl).hide()
                    })
                }, 
                
                d.closeLeave(), $.fn.searchitem = function(a) {
                    let b = $(a).val();
                    return this.each(function() {
                        -1 < $(this).text().search(new RegExp(b, "i")) ? $(this).show() : $(this).hide()
                    })
                }, 
                
                $("#iconsFloor-innav .ico-stage").searchitem(), $(".auto-search").on("keyup", function() {
                    $("#iconsFloor-innav .ico-stage").searchitem(this)
                }), 
                
                $("#iconsFloor-innav").mCustomScrollbar({
                    theme: "minimal",
                    scrollInertia: 70
                })
            }
        
        });
        
        let runIconsM = new runIcons();
        
    }, d.RunIconM()
});










//$(function () { "use strict"; $.fn.RunIconM = function (a) { function b(a) { $(".icoM, .icoFA").removeClass("icoMRotate"), $(".sub-icomenu, .sub-famenu").hide(), $(".labraryDrop").slideUp(100), $(".library-floor").removeClass("rotate90"), $("#iconsFloor-innav .mCSB_container").css({ top: 0 }), $(".library-floor .dropTextFonts").html(a.html()) } let c = $.extend(!0, {}, { data: { urlJson: "/assets/js/icomodal/icomodal.json" }, icoFloorL: "#iconsFloor-innav .mCSB_container", main: { fawesome4: "fontawesomeFl", fawesome5: "fontawesomeFl5", fbootstrap: "bootstrapFontFl", ffoundation: "foundationFontFl", ficomFree: "icomoonFontFl", ficomPack: "icomoonpackFl" }, clStcl: "closesettings", tlTipcl: "coseTooltip", mIcoDCl: "pro-imagesettings" }, a); $(".labraryDrop").hide(), $.ajax({ type: "GET", url: c.data.urlJson, success: function (a) { d.icoModalData(a) } }), $.fn.icoModalData = function (a) { let b = ""; for (let c in a.libraryData) b += "<li><span class=\"" + a.libraryData[c].mainClass + "\">" + a.libraryData[c].data + "</span></li>"; $(b).appendTo(".mainIcoMenu"); let e = ""; for (let b in a.fontaweData) e += "<li><span class=\"" + a.fontaweData[b].mainClass + "\">" + a.fontaweData[b].data + "</span></li>"; $(e).appendTo(".sub-famenu"); let f = ""; for (let b in a.icoMoonData) f += "<li><span class=\"" + a.icoMoonData[b].mainClass + "\">" + a.icoMoonData[b].data + "</span></li>"; $(f).appendTo(".sub-icomenu"); let g = "<div class=\"fontawesomeFl cDM\">"; for (let b in a.fontawesome) g += "<span data-id=\"fa " + a.fontawesome[b].dataid + "\" class=\"ico-stage\"><i class=\"fa " + a.fontawesome[b].dataid + "\" aria-hidden=\"true\"><em>" + a.fontawesome[b].icoName + "</em></i></span>"; g += "</div>", $(g).appendTo(c.icoFloorL); let h = "<div class=\"fontawesomeFl5 cDM\">"; for (let b in a.fontawesome5) h += "<span data-id=\"" + a.fontawesome5[b].dataid + "\" class=\"ico-stage\"><i class=\"" + a.fontawesome5[b].dataid + "\" aria-hidden=\"true\"><em>" + a.fontawesome5[b].icoName + "</em></i></span>"; h += "</div>", $(h).appendTo(c.icoFloorL); let j = "<div class=\"bootstrapFontFl cDM\">"; for (let b in a.bootstrapFont) j += "<span data-id=\"glyphicon " + a.bootstrapFont[b].dataid + "\" class=\"ico-stage\"><i class=\"glyphicon " + a.bootstrapFont[b].dataid + "\"><em>" + a.bootstrapFont[b].icoName + "</em></i></span>"; j += "</div>", $(j).appendTo(c.icoFloorL); let k = "<div class=\"foundationFontFl cDM\">"; for (let b in a.foundationFont) k += "<span data-id=\"fd " + a.foundationFont[b].dataid + "\" class=\"ico-stage\"><i class=\"fd " + a.foundationFont[b].dataid + "\"><em>" + a.foundationFont[b].icoName + "</em></i></span>"; k += "</div>", $(k).appendTo(c.icoFloorL); let l = "<div class=\"icomoonFontFl cDM\">"; for (let b in a.icomoonFreeFont) l += "<span data-id=\"lnr " + a.icomoonFreeFont[b].dataid + "\" class=\"ico-stage\"><i class=\"lnr " + a.icomoonFreeFont[b].dataid + "\"><em>" + a.icomoonFreeFont[b].icoName + "</em></i></span>"; l += "</div>", $(l).appendTo(c.icoFloorL); let m = "<div class=\"icomoonpackFl cDM\">"; for (let b in a.icomoonpack) m += "<span data-id=\"icon " + a.icomoonpack[b].dataid + "\" class=\"ico-stage\"><i class=\"icon " + a.icomoonpack[b].dataid + "\"><em>" + a.icomoonpack[b].icoName + "</em></i></span>"; m += "</div>", $(m).appendTo(c.icoFloorL) }, $.fn.OpenIconM = function () { return this.on(ck, ".library-floor", function (a) { a.stopPropagation(), $(".labraryDrop").slideToggle(100), $(this).toggleClass("rotate90") }) }, d.OpenIconM(), $.fn.icoMSlide = function () { return this.on(ck, ".icoM", function () { $(this).toggleClass("icoMRotate"), $(".sub-icomenu").slideToggle(200) }) }, d.icoMSlide(), $.fn.icoFASlide = function () { return this.on(ck, ".icoFA", function () { $(this).toggleClass("icoMRotate"), $(".sub-famenu").slideToggle(200) }) }, d.icoFASlide(), $.fn.GlobCk = function () { return this.on(ck, "*", function () { let a = $(this)[0].className; if (-1 != a.indexOf("saveChangesMenu")) { var b = $(".selectedid").data("id"); if (null != b) { var e = $("#menuGrid").data().kendoGrid, f = e.select(), g = e.dataItem(f); g.set("ImagePath", b), setTimeout(function () { $("#menuGrid").data("kendoGrid").dataSource.sync() }) } $(this).addClass("saveNotallowed"), $("." + c.mIcoDCl).fadeOut(100) } else -1 == a.indexOf("ico-stage") ? -1 != a.indexOf(c.clStcl) && $("." + c.mIcoDCl).fadeOut(100) : ($(".ico-stage").removeClass("focusColor"), $(this).addClass("focusColor"), $(".iconActive-floor .ico-stage").remove(), $(this).clone().appendTo(".iconActive-floor").removeClass("focusColor").addClass("selectedId"), $(".saveChangesMenu").removeClass("saveNotallowed")) }) }, d.GlobCk(), d.on(ck, ".drop", function () { let a = $(this)[0].className; b($(this)), -1 != a.indexOf("opt-awesome") && ($("." + c.main.fawesome5).add("." + c.main.fbootstrap).add("." + c.main.ffoundation).add("." + c.main.ficomFree).add("." + c.main.ficomPack).hide(), $("." + c.main.fawesome4).show()), -1 != a.indexOf("opt-awesome5") && ($("." + c.main.fawesome4).add("." + c.main.fbootstrap).add("." + c.main.ffoundation).add("." + c.main.ficomFree).add("." + c.main.ficomPack).hide(), $("." + c.main.fawesome5).show()), -1 != a.indexOf("opt-other") && ($("." + c.main.fawesome4).add("." + c.main.fawesome5).add("." + c.main.ffoundation).add("." + c.main.ficomFree).add("." + c.main.ficomPack).hide(), $("." + c.main.fbootstrap).show()), -1 != a.indexOf("opt-found") && ($("." + c.main.fawesome4).add("." + c.main.fawesome5).add("." + c.main.fbootstrap).add("." + c.main.ficomFree).add("." + c.main.ficomPack).hide(), $("." + c.main.ffoundation).show()), -1 != a.indexOf("opt-icomoom") && ($("." + c.main.fawesome4).add("." + c.main.fawesome5).add("." + c.main.fbootstrap).add("." + c.main.ffoundation).add("." + c.main.ficomPack).hide(), $("." + c.main.ficomFree).show()), -1 != a.indexOf("opt-icomoonessential") && ($("." + c.main.fawesome4).add("." + c.main.fawesome5).add("." + c.main.fbootstrap).add("." + c.main.ffoundation).add("." + c.main.ficomFree).hide(), $("." + c.main.ficomPack).show()) }), $.fn.closeOver = function () { return this.on("mouseover", "." + c.clStcl, function () { $("." + c.tlTipcl).show() }) }, d.closeOver(), $.fn.closeLeave = function () { return this.on("mouseleave", "." + c.clStcl, function () { $("." + c.tlTipcl).hide() }) }, d.closeLeave(), $.fn.searchitem = function (a) { let b = $(a).val(); return this.each(function () { -1 < $(this).text().search(new RegExp(b, "i")) ? $(this).show() : $(this).hide() }) }, $("#iconsFloor-innav .ico-stage").searchitem(), $(".auto-search").on("keyup", function () { $("#iconsFloor-innav .ico-stage").searchitem(this) }), $("#iconsFloor-innav").mCustomScrollbar({ theme: "minimal", scrollInertia: 70 }) }, d.RunIconM() });