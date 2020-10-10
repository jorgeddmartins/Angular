!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.pasteImage=e()}}(function(){return function e(t,n,i){function r(o,a){if(!n[o]){if(!t[o]){var c="function"==typeof require&&require;if(!a&&c)return c(o,!0);if(s)return s(o,!0);var p=new Error("Cannot find module '"+o+"'");throw p.code="MODULE_NOT_FOUND",p}var h=n[o]={exports:{}};t[o][0].call(h.exports,function(e){var n=t[o][1][e];return r(n?n:e)},h,h.exports,e,t,n,i)}return n[o].exports}for(var s="function"==typeof require&&require,o=0;o<i.length;o++)r(i[o]);return r}({1:[function(e,t){"use strict";t.exports=e("./scripts")},{"./scripts":4}],2:[function(e,t){function n(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function i(e){return"function"==typeof e}function r(e){return"number"==typeof e}function s(e){return"object"==typeof e&&null!==e}function o(e){return void 0===e}t.exports=n,n.EventEmitter=n,n.prototype._events=void 0,n.prototype._maxListeners=void 0,n.defaultMaxListeners=10,n.prototype.setMaxListeners=function(e){if(!r(e)||0>e||isNaN(e))throw TypeError("n must be a positive number");return this._maxListeners=e,this},n.prototype.emit=function(e){var t,n,r,a,c,p;if(this._events||(this._events={}),"error"===e&&(!this._events.error||s(this._events.error)&&!this._events.error.length)){if(t=arguments[1],t instanceof Error)throw t;var h=new Error('Uncaught, unspecified "error" event. ('+t+")");throw h.context=t,h}if(n=this._events[e],o(n))return!1;if(i(n))switch(arguments.length){case 1:n.call(this);break;case 2:n.call(this,arguments[1]);break;case 3:n.call(this,arguments[1],arguments[2]);break;default:a=Array.prototype.slice.call(arguments,1),n.apply(this,a)}else if(s(n))for(a=Array.prototype.slice.call(arguments,1),p=n.slice(),r=p.length,c=0;r>c;c++)p[c].apply(this,a);return!0},n.prototype.addListener=function(e,t){var r;if(!i(t))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",e,i(t.listener)?t.listener:t),this._events[e]?s(this._events[e])?this._events[e].push(t):this._events[e]=[this._events[e],t]:this._events[e]=t,s(this._events[e])&&!this._events[e].warned&&(r=o(this._maxListeners)?n.defaultMaxListeners:this._maxListeners,r&&r>0&&this._events[e].length>r&&(this._events[e].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[e].length),"function"==typeof console.trace&&console.trace())),this},n.prototype.on=n.prototype.addListener,n.prototype.once=function(e,t){function n(){this.removeListener(e,n),r||(r=!0,t.apply(this,arguments))}if(!i(t))throw TypeError("listener must be a function");var r=!1;return n.listener=t,this.on(e,n),this},n.prototype.removeListener=function(e,t){var n,r,o,a;if(!i(t))throw TypeError("listener must be a function");if(!this._events||!this._events[e])return this;if(n=this._events[e],o=n.length,r=-1,n===t||i(n.listener)&&n.listener===t)delete this._events[e],this._events.removeListener&&this.emit("removeListener",e,t);else if(s(n)){for(a=o;a-->0;)if(n[a]===t||n[a].listener&&n[a].listener===t){r=a;break}if(0>r)return this;1===n.length?(n.length=0,delete this._events[e]):n.splice(r,1),this._events.removeListener&&this.emit("removeListener",e,t)}return this},n.prototype.removeAllListeners=function(e){var t,n;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[e]&&delete this._events[e],this;if(0===arguments.length){for(t in this._events)"removeListener"!==t&&this.removeAllListeners(t);return this.removeAllListeners("removeListener"),this._events={},this}if(n=this._events[e],i(n))this.removeListener(e,n);else if(n)for(;n.length;)this.removeListener(e,n[n.length-1]);return delete this._events[e],this},n.prototype.listeners=function(e){var t;return t=this._events&&this._events[e]?i(this._events[e])?[this._events[e]]:this._events[e].slice():[]},n.prototype.listenerCount=function(e){if(this._events){var t=this._events[e];if(i(t))return 1;if(t)return t.length}return 0},n.listenerCount=function(e,t){return e.listenerCount(t)}},{}],3:[function(e,t){t.exports="function"==typeof Object.create?function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}:function(e,t){e.super_=t;var n=function(){};n.prototype=t.prototype,e.prototype=new n,e.prototype.constructor=e}},{}],4:[function(e,t){"use strict";var n=e("inherits"),i=e("events"),r=function(){this._initialized=!1,this._wrapEmitterFns()};n(r,i.EventEmitter),r.prototype._wrapEmitterFns=function(){var e=this,t=["on","once"];t.forEach(function(t){r.prototype[t]=function(){return e._initialized||e._init(),i.EventEmitter.prototype[t].apply(e,arguments)}})},r.prototype._clipboardSupported=function(){return window.Clipboard},r.prototype._pasteCatcherFocus=function(){this._pasteCatcher.focus()},r.prototype._listenForClick=function(){var e=this;document.addEventListener("click",function(){e._pasteCatcherFocus()})},r.prototype._createPasteCatcherIfNeeded=function(){this._clipboardSupported()||(this._pasteCatcher=document.createElement("div"),this._pasteCatcher.setAttribute("contenteditable",""),this._pasteCatcher.style.opacity=0,this._pasteCatcher.style.position="absolute",document.body.appendChild(this._pasteCatcher),this._pasteCatcher.focus(),this._listenForClick())},r.prototype._listenForPaste=function(){var e=this;window.addEventListener("paste",function(t){e._pasteHandler(t)})},r.prototype._init=function(){this._createPasteCatcherIfNeeded(),this._listenForPaste(),this._initialized=!0},r.prototype._checkInputOnNextTick=function(){var e=this;setTimeout(function(){e._checkInput()},1)},r.prototype._pasteHandler=function(e){if(this.emit("pasting-image",e),e.clipboardData&&e.clipboardData.items){for(var t=e.clipboardData.items,n=0;n<t.length;n++)if(-1!==t[n].type.indexOf("image")){var i=t[n].getAsFile(),r=this._getURLObj(),s=r.createObjectURL(i);this._createImage(s)}}else this._checkInputOnNextTick()},r.prototype._getURLObj=function(){return window.URL||window.webkitURL},r.prototype._checkInput=function(){var e=this._pasteCatcher.childNodes[0];this._pasteCatcher.innerHTML="",e&&"IMG"===e.tagName&&this._createImage(e.src)},r.prototype._createImage=function(e){var t=this,n=new Image;n.onload=function(){t.emit("paste-image",n)},n.src=e},t.exports=new r},{events:2,inherits:3}]},{},[1])(1)});

let d = $(document);
let ck = 'click';

let img = null;

let closeCl = '.fa-close';
let thisTags = $('div, header, nav, html');

$(function() {

	"use strict";

	$.fn.globalUser = function() {
		return this.on(ck, '*', function(e) {

			let TElem = $(this);

			switch(true) {

				case (TElem.hasClass('reportbugIcon')):
					$('.bugReport').fadeIn(300);
					break;

				case (TElem.hasClass('closebugReport')):
					$('.bugReport').fadeOut(300);
					break;

                case (TElem.hasClass('fa-close')):
                    $('.bugReport').fadeOut(300);
                    break;

                case (TElem.hasClass('PriorityNow')):

                    e.stopPropagation();

                    $('.PriorityDrop', this).slideDown(100).addClass('open');
                    TElem.removeClass('PriorityNow').addClass('PriorityNowUp');
                    thisTags.addClass('closeSelect');
                    break;

                case (TElem.hasClass('PriorityNowUp')):
                    $('.PriorityDrop', this).slideUp(100).removeClass('open');
                    TElem.removeClass('PriorityNowUp').addClass('PriorityNow');
                    thisTags.removeClass('closeSelect');
                    break;

                case (TElem.hasClass('optionPri')):
                    $('.optionPri').removeClass('select');
                    TElem.addClass('select');
                    $('#PrioritySelc').val(TElem.html());
                    break;

                case (TElem.hasClass('optionType')):
                    $('.optionType').removeClass('select');
                    TElem.addClass('select');
                    $('#typeSelc').val(TElem.html());
                    break;

                case (TElem.hasClass('closeSelect')):
                    $('.PriorityDrop').slideUp(100);
                    $('.priority_Select').addClass('PriorityNow').removeClass('PriorityNowUp')
                    break;
			}

		});
	}

	d.globalUser();


    $.fn.extend({

        closeShow: function() {
            return this.on('mouseover', closeCl, function() { $('.closeTip').show(); });
        },
        closeHide: function() {
            return this.on('mouseleave', closeCl, function() { $('.closeTip').hide(); });
        },
        PrioritySelc: function() {
            return this.on(ck, '.PrioritySelc', function() {
                $('.typeSelc_Fl').slideUp(100).removeClass('open');
                $('.typeSelc').removeClass('PriorityNowUp').addClass('PriorityNow');
            });
        },
        typeSelc: function() {
            return this.on(ck, '.typeSelc', function() {
                $('.PrioritySelc_Fl').slideUp(100).removeClass('open');
                $('.PrioritySelc').removeClass('PriorityNowUp').addClass('PriorityNow');
            });
        },
        PriorityDrop: function() {
            return this.on('mouseover', '.PriorityDrop', function() { thisTags.removeClass('closeSelect'); });
        },
        PriorityDropLeave: function() {
            return this.on('mouseleave', '.PriorityDrop', function() { thisTags.addClass('closeSelect'); });
        }

    });

    d.closeShow().closeHide().PrioritySelc().typeSelc().PriorityDrop().PriorityDropLeave();


	pasteImage.on('pasting-image', function() { console.log('pasting image...'); });
    pasteImage.on('paste-image', function(image) {
        
        if(img) { $('.loadImage').html(img); }
        img = image;

        $('.loadImage').html(image);
        console.log('image pasted');

    });
	
	$.fn.extend({
		
		loadImageImg: function() {
            return this.on(ck, '.loadImage img', function() {

                $(this).remove();
                $('.toolLoadI').hide();
            });
        },
		loadImageImgOver: function() {
            return this.on('mouseenter', '.loadImage img', function() { $('.toolLoadI').show(); });
        },
        loadImageImgLeave: function() {
            return this.on('mouseleave', '.loadImage img', function() { $('.toolLoadI').hide(); });
        },
		files: function() {
            return this.on('change', '.btn-file :file', function() {
                let input = $(this),
                numFiles = input.get(0).files ? input.get(0).files.length : 1,
                label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
                input.trigger('fileselect', [numFiles, label]);
            });
        },
		btnFile: function() {
            return this.on('fileselect', '.btn-file :file', function(event, numFiles, label) {

                let input = $(this).parents('.input-group').find(':text'),
                log = numFiles > 1 ? numFiles + ' files selected' : label;
                
                if(input.length) { input.val(log);
				
                } else { if(log) $('.grabFiles').html(log); }
				
            });
        }
		
	});
	
	d.loadImageImg().loadImageImgOver().loadImageImgLeave().files().btnFile();

});