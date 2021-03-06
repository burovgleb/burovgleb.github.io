﻿/**
* jQuery Cookie plugin
*
* Copyright (c) 2010 Klaus Hartl (stilbuero.de)
* Dual licensed under the MIT and GPL licenses:
* http://www.opensource.org/licenses/mit-license.php
* http://www.gnu.org/licenses/gpl.html
*
*/

/**
* Create a cookie with the given key and value and other optional parameters.
*
* @example $.cookie('the_cookie', 'the_value');
* @desc Set the value of a cookie.
* @example $.cookie('the_cookie', 'the_value', { expires: 7, path: '/', domain: 'jquery.com', secure: true });
* @desc Create a cookie with all available options.
* @example $.cookie('the_cookie', 'the_value');
* @desc Create a session cookie.
* @example $.cookie('the_cookie', null);
* @desc Delete a cookie by passing null as value. Keep in mind that you have to use the same path and domain
* used when the cookie was set.
*
* @param String key The key of the cookie.
* @param String value The value of the cookie.
* @param Object options An object literal containing key/value pairs to provide optional cookie attributes.
* @option Number|Date expires Either an integer specifying the expiration date from now on in days or a Date object.
* If a negative value is specified (e.g. a date in the past), the cookie will be deleted.
* If set to null or omitted, the cookie will be a session cookie and will not be retained
* when the the browser exits.
* @option String path The value of the path atribute of the cookie (default: path of page that created the cookie).
* @option String domain The value of the domain attribute of the cookie (default: domain of page that created the cookie).
* @option Boolean secure If true, the secure attribute of the cookie will be set and the cookie transmission will
* require a secure protocol (like HTTPS).
* @type undefined
*
* @name $.cookie
* @cat Plugins/Cookie
* @author Klaus Hartl/klaus.hartl@stilbuero.de
*/

/**
* Get the value of a cookie with the given key.
*
* @example $.cookie('the_cookie');
* @desc Get the value of a cookie.
*
* @param String key The key of the cookie.
* @return The value of the cookie.
* @type String
*
* @name $.cookie
* @cat Plugins/Cookie
* @author Klaus Hartl/klaus.hartl@stilbuero.de
*/
jQuery.cookie = function (key, value, options) {

    // key and at least value given, set cookie...
    if (arguments.length > 1 && String(value) !== "[object Object]") {
        options = jQuery.extend({}, options);

        if (value === null || value === undefined) {
            options.expires = -1;
        }

        if (typeof options.expires === 'number') {
            var days = options.expires, t = options.expires = new Date();
            t.setDate(t.getDate() + days);
        }

        value = String(value);

        return (document.cookie = [
            encodeURIComponent(key), '=',
            options.raw ? value : encodeURIComponent(value),
            options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
            options.path ? '; path=' + options.path : '',
            options.domain ? '; domain=' + options.domain : '',
            options.secure ? '; secure' : ''
        ].join(''));
    }

    // key and possibly options given, get cookie...
    options = value || {};
    var result, decode = options.raw ? function (s) { return s; } : decodeURIComponent;
    return (result = new RegExp('(?:^|; )' + encodeURIComponent(key) + '=([^;]*)').exec(document.cookie)) ? decode(result[1]) : null;
};

/*!
* jQuery pinable Plugin v1.2
* http://buildmypinnedsite.com
*
* Copyright 2011, Microsoft
* Licensed under MS-PL.
*
* Date: Thursday June 16 2011 14:54:29 -04
* Legal Notice: Any code provided on this site is "sample code" subject to the MSDN Terms of Use (http://msdn.microsoft.com/en-us/cc300389.aspx). Using this code means you agree to it.
*/
(function ($) {

	var settings = {
		closeTitle : 'Закрыть', // default close title
		cookieLength : 1, // in days
		cookieName  : 'iePinning_kommersant_ru', // appending domain to keep unique
		debug : false, // debug mode; forces the banner to show
		discStyle : 'toast', // discoverability style; options are toast, topHat and pushUp
		dragAlt : 'Перетащите!', // default drag icon alt text
		logoPath : '/content/pics/for_ie9_kommlogo32.png', // Path to image to use for logo. 32px x 32px suggested.
		message : 'Перетащите в панель задач Windows, чтобы использовать специальные возможности IE9', // default message
		slideDuration : 'fast', // change the speed the banner animates in; options are same as jQuery slideToggle options
		useCookie : true, // check for a cookie.
        isWindows7 : false
	},
		discStyles = {
			toast: '<div class="toast" id="pinning-discoverability"><div class="pinning-content"><div class="pinning-main-text">Перетащите </div><img src="{{logoPath}}" alt="{{dragAlt}}" class="msPinSite" /><div class="pinning-main-text">в панель задач Windows, чтобы использовать <a href="javascript:void(0)" onclick="MainPhoto_NewWindow(\'/gboxtexts/ie9.html\',\'ie9h\',\'650\',\'650\',\'no\',\'center\');return false;"><b><u>специальные возможности</u></b></a> Internet Explorer 9</div><a href="#close" class="pinning-hide" title="{{closeTitle}}">close</a></div></div></div>',
			//toastDownload: '<div class="toast" id="pinning-discoverability"><div class="pinning-content"><img src="{{logoPath}}" style="cursor:default;" /><div class="pinning-main-text">{{message}}</div><a href="#close" class="pinning-hide" title="{{closeTitle}}">close</a></div></div></div>',
            toastDownload: '<div class="toast" id="pinning-discoverability"><div class="pinning-content"><div class="pinning-main-text">{{message}}</div><a href="#close" class="pinning-hide" title="{{closeTitle}}">close</a></div></div></div>',
			pushUp: '<div class="push-up" id="pinning-discoverability"><div class="pinning-content"><div class="pinning-bg"><img src="{{logoPath}}" class="msPinSite" alt="{{dragAlt}}" /></div><div class="pinning-desc">{{message}}</div></div><a href="#close" class="pinning-hide" title="{{closeTitle}}">close</a></div>',
			topHat: '<div class="top-hat" id="pinning-discoverability"><div class="pinning-alignment"><div class="pinning-content"><img src="{{logoPath}}" class="msPinSite" alt="{{dragAlt}}" /><span class="pinning-desc">{{message}}</span><a href="#close" class="pinning-hide" title="{{closeTitle}}">close</a></div></div></div>'
		};

	function hideBanner(event) {
		event.preventDefault();

		settings.banner.slideToggle(settings.slideDuration);

		// set cookie
		if (settings.useCookie) {
			$.cookie(settings.cookieName, settings.cookieValue, { expires: settings.cookieLength });
		}

	}

	function shouldDisplay() {

		if (settings.debug) {
			return true; // debug mode
		}

		try {
			if (!window.external.msIsSiteMode()) { // not in pinned mode, but it's available
				if (settings.useCookie) {
                    
                    // check pinned cookie
                    if($.cookie('iePinning_pinned_kommersant_ru')=='pinned')
                        return false;
                    
					// check cookie
					if ($.cookie(settings.cookieName) !== settings.cookieValue) {
						return true; // no cookie
					} else {
						return false; // cookie; don't show
					}
				} else {
					return true; // not using cookies; just display
				}
			} else {
				// we are in pinned mode
				return false;
			}
		} catch (ex) { // browsers does not support pinning; don't show
			return false;
            /*if(settings.isWindows7)
            {
                if ($.cookie(settings.cookieName) !== settings.cookieValue) {
                    settings.message='Установите браузер <a href="http://www.microsoft.com/ru-ru/windows/internet-explorer/onlinekrasota/highlights/seamless-with-windows-7.aspx" target="_blank">Internet Explorer 9</a>, чтобы закрепить kommersant.ru в панели задач Windows и использовать <a href="javascript:void(0)" onclick="MainPhoto_NewWindow(\'/ie9/ie9.html\',\'ie9h\',\'650\',\'650\',\'no\',\'center\');return false;">специальные возможности</a> Internet Explorer 9';
                    settings.discStyle='toastDownload';
					return true; // no cookie
				} else {
					return false; // cookie; don't show
				}
            }
            return false;*/
        }
	}

    function showBanner() {
		if (shouldDisplay()) { // Inject HTML

			if (discStyles.hasOwnProperty(settings.discStyle)) {

				var html = eval('discStyles.' + settings.discStyle),
				html = html.replace('{{message}}', settings.message),
				html = html.replace('{{dragAlt}}', settings.dragAlt),
				html = html.replace('{{closeTitle}}', settings.closeTitle),
				html = html.replace('{{logoPath}}', settings.logoPath);

				settings.banner = $(html);

				settings.element.append(settings.banner);

				settings.banner.slideToggle(settings.slideDuration).find('.pinning-hide').bind('click', hideBanner);

			} else {
				$.error("Cannot find discoverability style.");
			}

		}
    }

	var methods = {
		init: function (callerSettings) {
			settings = $.extend(settings, callerSettings);
			settings.element = this;
			settings.cookieValue = 'hidden';
			settings.banner = undefined;

			showBanner();

		},
		destroy: function () {
			settings.element.find('.pinning-hide').unbind('click');
			settings.element = undefined;
			settings.banner.remove();
			settings.banner = undefined;
		}
	};

	$.fn.pinable = function (method) {
		if (methods[method]) {
			return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
		} else if (typeof method === 'object' || !method) {
			return methods.init.apply(this, arguments);
		} else {
			$.error('Method ' + method + ' does not exist on jQuery.tooltip');
		}
	}

})(jQuery);


jQuery(document).ready(function () {


    var isWindows7OrVista = (function () { var ua = window.navigator.userAgent.toLowerCase(); return (ua.indexOf("windows nt 7") > -1 || ua.indexOf("windows nt 6.1") > -1) || ua.indexOf("windows nt 6") > -1 } ());
    //var isIE9=(function(){if(window.navigator.userAgent.indexOf("MSIE 9.")>-1){return true}else{return false}}());
    var isIE9 = (ie === 9);// jQuery.browser.msie && jQuery.browser.version.indexOf('9.') > -1;

    //if (WebSiteID==2) {
    jQuery('body').pinable({ discStyle: 'toast', useCookie: true, isWindows7: isWindows7OrVista });
    //}

    //if (isWindows7OrVista && !isIE9)
    //alert("!!!");
    //if (isWindows7OrVista && isIE9) {
    try {
        if (window.external.msIsSiteMode()) {
            $.cookie('iePinning_pinned_kommersant_ru', 'pinned', { expires: 100 });
            window.external.msSiteModeClearIconOverlay();
            getJumpList();
            window.setInterval(function () {
                getJumpList();
            }, 60000);
        }
    }
    catch (ex) { }
    // }

});


var ie = (function () {

    var undef,
        v = 3,
        div = document.createElement('div'),
        all = div.getElementsByTagName('i');

    while (
        div.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i><![endif]-->',
        all[0]
    );

    return v > 4 ? v : undef;

} ());

var LastJumpListID = -1;
    function getJumpList() {
        $.ajax({
            url: '/common/GetJumpList',
            type: 'POST',
            success: function (d) {
                window.external.msSiteModeClearJumpList();
                window.external.msSiteModeCreateJumpList("Не пропустите");
                for (var i = 0; i < d.length; i++) {
                    var title = d[i].Title;
                    var href = d[i].Link;
                    var icon = d[i].Icon;
                    window.external.msSiteModeAddJumpListItem(d[i].Title, d[i].Link, d[i].Icon, d[i].Target);
                };
                window.external.msSiteModeShowJumpList();
                if (LastJumpListID >= 0 && d.length > 0 && LastJumpListID != d[d.length - 1].ID) {
                    //window.external.msSiteModeActivate();
                    window.external.msSiteModeSetIconOverlay("/content/pics/ico_update.ico", "");
                }
                if (d.length > 0)
                    LastJumpListID = d[d.length - 1].ID;
                else
                    LastJumpListID = 0;
            }
        });
    }