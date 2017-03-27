/*
 * jQuery MD5 Plugin 1.2.1
 * https://github.com/blueimp/jQuery-MD5
 *
 * Copyright 2010, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://creativecommons.org/licenses/MIT/
 *
 * Based on
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */
!function($){"use strict";function n(n,t){var r=(65535&n)+(65535&t),u=(n>>16)+(t>>16)+(r>>16);return u<<16|65535&r}function t(n,t){return n<<t|n>>>32-t}function r(r,u,e,o,c,f){return n(t(n(n(u,r),n(o,f)),c),e)}function u(n,t,u,e,o,c,f){return r(t&u|~t&e,n,t,o,c,f)}function e(n,t,u,e,o,c,f){return r(t&e|u&~e,n,t,o,c,f)}function o(n,t,u,e,o,c,f){return r(t^u^e,n,t,o,c,f)}function c(n,t,u,e,o,c,f){return r(u^(t|~e),n,t,o,c,f)}function f(t,r){t[r>>5]|=128<<r%32,t[(r+64>>>9<<4)+14]=r;var f,i,h,a,g,l=1732584193,d=-271733879,v=-1732584194,C=271733878;for(f=0;f<t.length;f+=16)i=l,h=d,a=v,g=C,l=u(l,d,v,C,t[f],7,-680876936),C=u(C,l,d,v,t[f+1],12,-389564586),v=u(v,C,l,d,t[f+2],17,606105819),d=u(d,v,C,l,t[f+3],22,-1044525330),l=u(l,d,v,C,t[f+4],7,-176418897),C=u(C,l,d,v,t[f+5],12,1200080426),v=u(v,C,l,d,t[f+6],17,-1473231341),d=u(d,v,C,l,t[f+7],22,-45705983),l=u(l,d,v,C,t[f+8],7,1770035416),C=u(C,l,d,v,t[f+9],12,-1958414417),v=u(v,C,l,d,t[f+10],17,-42063),d=u(d,v,C,l,t[f+11],22,-1990404162),l=u(l,d,v,C,t[f+12],7,1804603682),C=u(C,l,d,v,t[f+13],12,-40341101),v=u(v,C,l,d,t[f+14],17,-1502002290),d=u(d,v,C,l,t[f+15],22,1236535329),l=e(l,d,v,C,t[f+1],5,-165796510),C=e(C,l,d,v,t[f+6],9,-1069501632),v=e(v,C,l,d,t[f+11],14,643717713),d=e(d,v,C,l,t[f],20,-373897302),l=e(l,d,v,C,t[f+5],5,-701558691),C=e(C,l,d,v,t[f+10],9,38016083),v=e(v,C,l,d,t[f+15],14,-660478335),d=e(d,v,C,l,t[f+4],20,-405537848),l=e(l,d,v,C,t[f+9],5,568446438),C=e(C,l,d,v,t[f+14],9,-1019803690),v=e(v,C,l,d,t[f+3],14,-187363961),d=e(d,v,C,l,t[f+8],20,1163531501),l=e(l,d,v,C,t[f+13],5,-1444681467),C=e(C,l,d,v,t[f+2],9,-51403784),v=e(v,C,l,d,t[f+7],14,1735328473),d=e(d,v,C,l,t[f+12],20,-1926607734),l=o(l,d,v,C,t[f+5],4,-378558),C=o(C,l,d,v,t[f+8],11,-2022574463),v=o(v,C,l,d,t[f+11],16,1839030562),d=o(d,v,C,l,t[f+14],23,-35309556),l=o(l,d,v,C,t[f+1],4,-1530992060),C=o(C,l,d,v,t[f+4],11,1272893353),v=o(v,C,l,d,t[f+7],16,-155497632),d=o(d,v,C,l,t[f+10],23,-1094730640),l=o(l,d,v,C,t[f+13],4,681279174),C=o(C,l,d,v,t[f],11,-358537222),v=o(v,C,l,d,t[f+3],16,-722521979),d=o(d,v,C,l,t[f+6],23,76029189),l=o(l,d,v,C,t[f+9],4,-640364487),C=o(C,l,d,v,t[f+12],11,-421815835),v=o(v,C,l,d,t[f+15],16,530742520),d=o(d,v,C,l,t[f+2],23,-995338651),l=c(l,d,v,C,t[f],6,-198630844),C=c(C,l,d,v,t[f+7],10,1126891415),v=c(v,C,l,d,t[f+14],15,-1416354905),d=c(d,v,C,l,t[f+5],21,-57434055),l=c(l,d,v,C,t[f+12],6,1700485571),C=c(C,l,d,v,t[f+3],10,-1894986606),v=c(v,C,l,d,t[f+10],15,-1051523),d=c(d,v,C,l,t[f+1],21,-2054922799),l=c(l,d,v,C,t[f+8],6,1873313359),C=c(C,l,d,v,t[f+15],10,-30611744),v=c(v,C,l,d,t[f+6],15,-1560198380),d=c(d,v,C,l,t[f+13],21,1309151649),l=c(l,d,v,C,t[f+4],6,-145523070),C=c(C,l,d,v,t[f+11],10,-1120210379),v=c(v,C,l,d,t[f+2],15,718787259),d=c(d,v,C,l,t[f+9],21,-343485551),l=n(l,i),d=n(d,h),v=n(v,a),C=n(C,g);return[l,d,v,C]}function i(n){var t,r="";for(t=0;t<32*n.length;t+=8)r+=String.fromCharCode(n[t>>5]>>>t%32&255);return r}function h(n){var t,r=[];for(r[(n.length>>2)-1]=void 0,t=0;t<r.length;t+=1)r[t]=0;for(t=0;t<8*n.length;t+=8)r[t>>5]|=(255&n.charCodeAt(t/8))<<t%32;return r}function a(n){return i(f(h(n),8*n.length))}function g(n,t){var r,u,e=h(n),o=[],c=[];for(o[15]=c[15]=void 0,e.length>16&&(e=f(e,8*n.length)),r=0;16>r;r+=1)o[r]=909522486^e[r],c[r]=1549556828^e[r];return u=f(o.concat(h(t)),512+8*t.length),i(f(c.concat(u),640))}function l(n){var t,r,u="0123456789abcdef",e="";for(r=0;r<n.length;r+=1)t=n.charCodeAt(r),e+=u.charAt(t>>>4&15)+u.charAt(15&t);return e}function d(n){return unescape(encodeURIComponent(n))}function v(n){return a(d(n))}function C(n){return l(v(n))}function s(n,t){return g(d(n),d(t))}function A(n,t){return l(s(n,t))}$.md5=function(n,t,r){return t?r?s(t,n):A(t,n):r?v(n):C(n)}}("function"==typeof jQuery?jQuery:this);

/*!
 * Zoom 1.7.14
 * license: MIT
 * http://www.jacklmoore.com/zoom
 */
(function($){var defaults={url:false,callback:false,target:false,duration:120,on:"mouseover",touch:true,onZoomIn:false,onZoomOut:false,magnify:1};$.zoom=function(target,source,img,magnify){var targetHeight,targetWidth,sourceHeight,sourceWidth,xRatio,yRatio,offset,$target=$(target),position=$target.css("position"),$source=$(source);$target.css("position",/(absolute|fixed)/.test(position)?position:"relative");$target.css("overflow","hidden");img.style.width=img.style.height="";$(img).addClass("zoomImg").css({position:"absolute",top:0,left:0,opacity:0,width:img.width*magnify,height:img.height*magnify,border:"none",maxWidth:"none",maxHeight:"none"}).appendTo(target);return{init:function(){targetWidth=$target.outerWidth();targetHeight=$target.outerHeight();if(source===$target[0]){sourceWidth=targetWidth;sourceHeight=targetHeight}else{sourceWidth=$source.outerWidth();sourceHeight=$source.outerHeight()}xRatio=(img.width-targetWidth)/sourceWidth;yRatio=(img.height-targetHeight)/sourceHeight;offset=$source.offset()},move:function(e){var left=e.pageX-offset.left,top=e.pageY-offset.top;top=Math.max(Math.min(top,sourceHeight),0);left=Math.max(Math.min(left,sourceWidth),0);img.style.left=left*-xRatio+"px";img.style.top=top*-yRatio+"px"}}};$.fn.zoom=function(options){return this.each(function(){var settings=$.extend({},defaults,options||{}),target=settings.target||this,source=this,$source=$(source),$target=$(target),img=document.createElement("img"),$img=$(img),mousemove="mousemove.zoom",clicked=false,touched=false,$urlElement;if(!settings.url){$urlElement=$source.find("img");if($urlElement[0]){settings.url=$urlElement.data("src")||$urlElement.attr("src")}if(!settings.url){return}}(function(){var position=$target.css("position");var overflow=$target.css("overflow");$source.one("zoom.destroy",function(){$source.off(".zoom");$target.css("position",position);$target.css("overflow",overflow);$img.remove()})})();img.onload=function(){var zoom=$.zoom(target,source,img,settings.magnify);function start(e){zoom.init();zoom.move(e);$img.stop().fadeTo($.support.opacity?settings.duration:0,1,$.isFunction(settings.onZoomIn)?settings.onZoomIn.call(img):false)}function stop(){$img.stop().fadeTo(settings.duration,0,$.isFunction(settings.onZoomOut)?settings.onZoomOut.call(img):false)}if(settings.on==="grab"){$source.on("mousedown.zoom",function(e){if(e.which===1){$(document).one("mouseup.zoom",function(){stop();$(document).off(mousemove,zoom.move)});start(e);$(document).on(mousemove,zoom.move);e.preventDefault()}})}else if(settings.on==="click"){$source.on("click.zoom",function(e){if(clicked){return}else{clicked=true;start(e);$(document).on(mousemove,zoom.move);$(document).one("click.zoom",function(){stop();clicked=false;$(document).off(mousemove,zoom.move)});return false}})}else if(settings.on==="toggle"){$source.on("click.zoom",function(e){if(clicked){stop()}else{start(e)}clicked=!clicked})}else if(settings.on==="mouseover"){zoom.init();$source.on("mouseenter.zoom",start).on("mouseleave.zoom",stop).on(mousemove,zoom.move)}if(settings.touch){$source.on("touchstart.zoom",function(e){e.preventDefault();if(touched){touched=false;stop()}else{touched=true;start(e.originalEvent.touches[0]||e.originalEvent.changedTouches[0])}}).on("touchmove.zoom",function(e){e.preventDefault();zoom.move(e.originalEvent.touches[0]||e.originalEvent.changedTouches[0])})}if($.isFunction(settings.callback)){settings.callback.call(img)}};img.src=settings.url})};$.fn.zoom.defaults=defaults})(window.jQuery);

/*!
 * FitVids 1.1
 *
 * Copyright 2013, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
 * Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
 * Released under the WTFPL license - http://sam.zoy.org/wtfpl/
 *
 */
(function($){"use strict";$.fn.fitVids=function(options){var settings={customSelector:null};if(!document.getElementById('fit-vids-style')){var head=document.head||document.getElementsByTagName('head')[0];var css='.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}';var div=document.createElement('div');div.innerHTML='<p>x</p><style id="fit-vids-style">'+css+'</style>';head.appendChild(div.childNodes[1])}if(options){$.extend(settings,options)}return this.each(function(){var selectors=["iframe[src*='player.vimeo.com']","iframe[src*='youtube.com']","iframe[src*='youtube-nocookie.com']","iframe[src*='kickstarter.com'][src*='video.html']","object","embed"];if(settings.customSelector){selectors.push(settings.customSelector)}var $allVideos=$(this).find(selectors.join(','));$allVideos=$allVideos.not("object object");$allVideos.each(function(){var $this=$(this);if(this.tagName.toLowerCase()==='embed'&&$this.parent('object').length||$this.parent('.fluid-width-video-wrapper').length){return}var height=(this.tagName.toLowerCase()==='object'||($this.attr('height')&&!isNaN(parseInt($this.attr('height'),10))))?parseInt($this.attr('height'),10):$this.height(),width=!isNaN(parseInt($this.attr('width'),10))?parseInt($this.attr('width'),10):$this.width(),aspectRatio=height/width;if(!$this.attr('id')){var videoID='fitvid'+Math.floor(Math.random()*999999);$this.attr('id',videoID)}$this.wrap('<div class="fluid-width-video-wrapper"></div>').parent('.fluid-width-video-wrapper').css('padding-top',(aspectRatio*100)+"%");$this.removeAttr('height').removeAttr('width')})})}})(window.jQuery||window.Zepto);

/*!
 * scrollTo 2.1.2
 *
 * Copyright (c) 2007-2015 Ariel Flesler - aflesler<a>gmail<d>com | http://flesler.blogspot.com
 * Licensed under MIT
 * @author Ariel Flesler
 * @version 2.1.2
 *
 */
(function(f){"use strict";"function"===typeof define&&define.amd?define(["jquery"],f):"undefined"!==typeof module&&module.exports?module.exports=f(require("jquery")):f(jQuery)})(function($){"use strict";function n(a){return!a.nodeName||-1!==$.inArray(a.nodeName.toLowerCase(),["iframe","#document","html","body"])}function h(a){return $.isFunction(a)||$.isPlainObject(a)?a:{top:a,left:a}}var p=$.scrollTo=function(a,d,b){return $(window).scrollTo(a,d,b)};p.defaults={axis:"xy",duration:0,limit:!0};$.fn.scrollTo=function(a,d,b){"object"=== typeof d&&(b=d,d=0);"function"===typeof b&&(b={onAfter:b});"max"===a&&(a=9E9);b=$.extend({},p.defaults,b);d=d||b.duration;var u=b.queue&&1<b.axis.length;u&&(d/=2);b.offset=h(b.offset);b.over=h(b.over);return this.each(function(){function k(a){var k=$.extend({},b,{queue:!0,duration:d,complete:a&&function(){a.call(q,e,b)}});r.animate(f,k)}if(null!==a){var l=n(this),q=l?this.contentWindow||window:this,r=$(q),e=a,f={},t;switch(typeof e){case "number":case "string":if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(e)){e= h(e);break}e=l?$(e):$(e,q);case "object":if(e.length===0)return;if(e.is||e.style)t=(e=$(e)).offset()}var v=$.isFunction(b.offset)&&b.offset(q,e)||b.offset;$.each(b.axis.split(""),function(a,c){var d="x"===c?"Left":"Top",m=d.toLowerCase(),g="scroll"+d,h=r[g](),n=p.max(q,c);t?(f[g]=t[m]+(l?0:h-r.offset()[m]),b.margin&&(f[g]-=parseInt(e.css("margin"+d),10)||0,f[g]-=parseInt(e.css("border"+d+"Width"),10)||0),f[g]+=v[m]||0,b.over[m]&&(f[g]+=e["x"===c?"width":"height"]()*b.over[m])):(d=e[m],f[g]=d.slice&& "%"===d.slice(-1)?parseFloat(d)/100*n:d);b.limit&&/^\d+$/.test(f[g])&&(f[g]=0>=f[g]?0:Math.min(f[g],n));!a&&1<b.axis.length&&(h===f[g]?f={}:u&&(k(b.onAfterFirst),f={}))});k(b.onAfter)}})};p.max=function(a,d){var b="x"===d?"Width":"Height",h="scroll"+b;if(!n(a))return a[h]-$(a)[b.toLowerCase()]();var b="client"+b,k=a.ownerDocument||a.document,l=k.documentElement,k=k.body;return Math.max(l[h],k[h])-Math.min(l[b],k[b])};$.Tween.propHooks.scrollLeft=$.Tween.propHooks.scrollTop={get:function(a){return $(a.elem)[a.prop]()}, set:function(a){var d=this.get(a);if(a.options.interrupt&&a._last&&a._last!==d)return $(a.elem).stop();var b=Math.round(a.now);d!==b&&($(a.elem)[a.prop](b),a._last=this.get(a))}};return p});

/*!
 * jQuery.cachedScript
 */
jQuery.extend({cachedScript:function(e,r){return r=jQuery.extend({dataType:"script",cache:!0,url:e},r),jQuery.ajax(r)}});

/*!
 * kommersant 175
 *
 * © 2016 АО «Коммерсантъ»
 * All rights reserved
 */
var kommersant={serverDateOffset:0,user:{iHost:"https://i.kommersant.ru",userSources:{1:"fb",2:"vk",3:"lj",4:"gp",5:"tw",6:"ok",7:"oi"},isAuthorized:null,callbacksAuthorized:[],updateAuthorized:function(){var e;for(e=0;e<user.callbacksAuthorized.length;e+=1)user.callbacksAuthorized[e]()}},inArray:function(e,t){if("object"!=typeof t||"undefined"==typeof t.length)return!1;for(var n=0;n<t.length;n++)if(t[n]===e)return!0;return!1},formatNumber:function(e,t,n,o){if(typeof e!==gStrNumber||isNaN(e))return e;if(typeof t===gStrNumber&&t>=0){t=Math.floor(t);var a=Math.pow(10,t);e=Math.round(e*a)/a}var i=e.toString(),r=i.split(".",2),s=r[0].replace(/^-/,"−"),c=r[1],l="",d=0;if(Math.abs(e)>=1e4)for(var f=s.length-1;f>=0;f-=1)l=s[f]+l,d++,3===d&&f>0&&(d=0,l=("string"==typeof o?o:" ")+l);else l=s;return"undefined"!=typeof r[1]&&(l+=("string"==typeof n?n:",")+c),l},formatDate:function(e){return("0"+e.getDate()).slice(-2)+"."+("0"+(e.getMonth()+1)).slice(-2)+"."+("0"+e.getFullYear()).slice(-2)},formatTime:function(e){return e.getHours()+":"+("0"+e.getMinutes()).slice(-2)},getDomain:function(){return window.location.hostname.split(".").splice(-2).join(".")},getServerDate:function(){var e=new Date;return e.setUTCMilliseconds(e.getUTCMilliseconds()+kommersant.serverDateOffset),e},parseServerDate:function(e){return new Date(parseInt(e.slice(6),10))},setServerDateOffset:function(e){kommersant.serverDateOffset=kommersant.parseServerDate(e)-new Date},getCookie:function(e){return"string"!=typeof e||""===e?"":(document.cookie.match(new RegExp(e+"=([^;]*)"))||["",""])[1]},setCookie:function(e,t,n){if("string"==typeof e&&""!==e){var o=e+"="+t;if("object"==typeof n){"object"==typeof n.expires&&(n.expires=n.expires.toUTCString());for(var a in n)o=o+"; "+a+"="+n[a]}document.cookie=o}},deleteCookie:function(e,t){t.expires=new Date(0),kommersant.setCookie(e,"",t)},windowOpen:function(e,t,n,o){var a=void 0!=window.screenLeft?window.screenLeft:screen.left,i=void 0!=window.screenTop?window.screenTop:screen.top,r=window.innerWidth?window.innerWidth:document.documentElement.clientWidth?document.documentElement.clientWidth:screen.width,s=window.innerHeight?window.innerHeight:document.documentElement.clientHeight?document.documentElement.clientHeight:screen.height,c=r/2-n/2+a,l=s/2-o/2+i,d=window.open(e,t,"scrollbars=yes, width="+n+", height="+o+", top="+l+", left="+c);return window.focus&&d.focus(),d}},gStorage;try{if(sessionStorage.sessionStorageTest=!0,!sessionStorage.sessionStorageTest)throw"Storage error";delete sessionStorage.sessionStorageTest,gStorage=sessionStorage}catch(err){gStorage={}}if("function"!=typeof AdFoxBanner)var AdFoxBanner=function(){this.createBanner=function(){}};if("function"!=typeof AdFox_getCodeScript)var AdFox_getCodeScript=function(){};"object"!=typeof jQuery.browser&&(jQuery.browser={}),"string"!=typeof gStorage.hisrc&&(gStorage.hisrc="");var canonical=[],kommersantInit=function(){},getDocsId=function(){return"number"==typeof docsId?docsId:parseInt((window.location.pathname.match(/^\/(doc|gallery)\/(\d+)/)||["","","0"])[2],10)},hisrcCached=function(e){return-1!=gStorage.hisrc.indexOf($.md5(e))},lowsrc=function(){$(".lowsrc").each(function(){var e=$(this),t=this.src.replace(/_?(\[\d*\])?\.jpg$/i,".jpg");if(hisrcCached(t))t!=this.src&&(this.src=t);else{var n=e.data("lowsrc")||t.replace(/_t(218|219|220)([_.])/,"_t221$2").replace(/_t222([_.])/,"_t223$1");n!=t&&(this.src=n,e.data("hisrc",t),e.hasClass("lowsrc-deferred")||e.addClass("hisrc"))}e.removeClass("lowsrc lowsrc-deferred")})},writeIMG=function(e,t,n){var o=e.replace(/_?(\[\d*\])?\.jpg$/i,".jpg");hisrcCached(o)?document.write(n):document.write(t)};jQuery.extend(jQuery.expr[":"],{"really-hidden":function(e){var t=jQuery(e),n=function(e){return 0===e.length||e.get(0)===document.body?!1:"none"===e.css("display")||0==e.css("opacity")||n(e.parent())};return"hidden"===t.css("visibility")||n(jQuery(e))}}),function($){$(function(){var e=$(window),t=$(document.documentElement),n=$(document),o=$(document.body),a="undefined"!=typeof window.onmousemove?e:n,i=$(),r=function(){0!=i.length?i.addClass("darkbox-active"):(i=$('<div class="darkbox darkbox-active hide1 hide2"></div>'),i.appendTo(o))},s=function(){i.removeClass("darkbox-active")},c=function(e){if(hisrcCached(e))return!1;var t=gStorage.hisrc;"string"!=typeof t&&(t=""),t+=(""==t?"":" ")+$.md5(e);try{gStorage.hisrc=t}catch(n){}},l=function(e,t){var n=$(e),o=n.data(t)||"";""!=o&&(e.src=o,c(o)),n.removeData(t),n.removeClass("hisrc")},d=function(e,t){var n="data-",o="-src",a="-srcset",i=$(e),r=i.data(t+a)||"",s=i.data(t+o)||"";""!=r&&(e.srcset=r),""!=s&&(e.src=s),i.removeData([t+a,t+o]),i.removeAttr(n+t+a+" "+n+t+o)},f=function(e){$(".hisrc:visible",e).add("img[data-hisrc]:visible",e).each(function(){l(this,"hisrc")})};kommersantInit=function(){$(".slider-rates").not(".slider-ready").slider({isVertical:!0,isDraggable:!1,isLooped:!0,isAutoSlide:!0,isTransform3d:!1,margin:0,autoSlideInterval:3e3,easing:"linear"}),$(".slider-announce").not(".slider-ready").each(function(){var e,t=$(this),n=t.find(".slider-item"),o="";if(n.length>1){for(e=0;e<n.length;e++)o+='<li class="b-gallery-nav_lineup_item slider-nav-item"><a class="slider-link" href="#"></a></li>';t.find(".b-gallery-nav_lineup").html(o)}else t.find(".b-gallery-nav_lineup").remove();t.slider({isLooped:!0,isAutoSlide:!0,margin:20,autoSlideInterval:5e3})}),$(".slider-specials").not(".slider-ready").each(function(){var e,t=$(this),n=t.find(".slider-item"),o="";if(n.length>1){for(e=0;e<n.length;e++)o+='<li class="b-gallery-nav_lineup_item slider-nav-item"><a class="slider-link" href="#"></a></li>';t.find(".b-gallery-nav_lineup").html(o)}else t.find(".b-gallery-nav_lineup").remove();t.slider({isKeyboard:!0,isLooped:!0,isAutoSlide:!0,autoSlideInterval:5e3,margin:30})}),$(".slider-custom").not(".slider-ready").each(function(){var t,n=$(this),o=n.find(".slider-item"),a=!0,i=[],r=0,s="undefined"!=typeof n.data("slider-custom-hash"),c=function(e,t){var n="#id="+t;window.location.hash!=n&&window.location.replace(n)},l=function(e,t){var n=function(e){var t=i[e];"undefined"!=typeof t&&(d(t,"slider"),delete i[e])};n(e),n(e+1),n(e-1),n(e+2)},f={isKeyboard:!0,margin:30,onReady:function(e,o){r=e,l(e,o),t=window.setTimeout(function(){n.addClass("slider-hover")},500)},onComplete:function(t,n){t!=r&&(s&&c(t,n),l(t,n),r=t,window.setTimeout(function(){e.trigger("scroll")},100))},onClick:function(e,o){window.clearTimeout(t),a=!a,a?n.addClass("slider-hover"):n.removeClass("slider-hover")}};"undefined"!=typeof n.data("slider-start")?f.start=parseInt(n.data("slider-start"),10)||1:s&&(f.start=window.location.hash.slice(4)||1),"undefined"!=typeof n.data("slider-margin")&&(f.margin=parseInt(n.data("slider-margin"),10)||0),"undefined"!=typeof n.data("slider-align")&&(f.align=parseFloat(n.data("slider-align")),isNaN(f.align)&&(f.align=.5)),"undefined"!=typeof n.data("slider-duration")&&(f.durationItem=parseInt(n.data("slider-duration"),10)||0),"undefined"!=typeof n.data("slider-nokeys")&&(f.isKeyboard=!1),"undefined"!=typeof n.data("slider-vertical")&&(f.isVertical=!0),"undefined"!=typeof n.data("slider-loop")&&(f.isLooped=!0),"undefined"!=typeof n.data("slider-auto")&&(f.isAutoSlide=!0),"undefined"!=typeof n.data("slider-auto-delay")&&(f.autoSlideInterval=parseInt(n.data("slider-auto-delay"),10)||0),"undefined"!=typeof n.data("slider-nodrag")&&(f.isDraggable=!1),"undefined"!=typeof n.data("slider-notransform")&&(f.isTransform=!1),"undefined"!=typeof n.data("slider-fit")&&(f.isFit=!0),o.each(function(e){$(this).find(".photo").find("img").first().each(function(){var t=$(this),n=t.data("slider-src")||"";""!=n&&(i[e]=this)})}),n.slider(f)}),$(".slider-doc-text").not(".slider-ready").slider({margin:30,align:0}),$(".slider-gallery").not(".slider-ready").each(function(){var e,t,n=$(this),o=n.find(".slider-item"),a=!0,i=[],r=0,s="",c=function(e,t){var n="#id="+t;window.location.hash!=n&&window.location.replace(n)},d=function(e,t){var n=function(e){var t=i[e];"undefined"!=typeof t&&(l(t,"hisrc"),l(t,"slider-hisrc"),delete i[e])};n(e),n(e+1),n(e-1)};if(o.length>1){for(t=0;t<o.length;t++)s+='<li class="b-gallery-nav_lineup_item slider-nav-item"><a class="slider-link" href="#"></a></li>';n.find(".b-gallery-nav_lineup").html(s)}else n.find(".b-gallery-nav_lineup").remove(),n.find(".b-gallery-nav_visual").addClass("hide3");o.each(function(e){$(this).find(".photo").find("img").first().each(function(){var t=$(this),n=t.data("hisrc")||t.data("slider-hisrc")||"";""!=n&&hisrcCached(n)?l(this,"slider-hisrc"):i[e]=this})}),n.slider({isKeyboard:!0,start:window.location.hash.slice(4)||1,margin:30,onReady:function(t,o){picsId=o,r=t,d(t,o),e=window.setTimeout(function(){n.addClass("slider-hover")},500)},onChange:function(e,t){picsId=t},onComplete:function(e,t){if(e!=r){c(e,t),d(e,t);try{countersUpdate()}catch(n){}try{adfox.update(adfox.screen(),["adv","adv3-6_240pxx400px"])}catch(n){}r=e}},onClick:function(t,o){window.clearTimeout(e),a=!a,a?n.addClass("slider-hover"):n.removeClass("slider-hover")}}),o.find(".b-gallery__item-original").on("click",function(e){e.stopPropagation()})}),"function"==typeof $.fn.zoom&&$(".zoom").each(function(){var e=$(this),t={},n=e.data("zoom-src");"string"==typeof n&&n.length>0&&(t.url=n),e.zoom(t),e.removeClass("zoom")}),"function"==typeof $.fn.fitVids&&($(".b-article").add(".b-abandoned").add(".b-forums").fitVids({customSelector:"iframe.fitvids, iframe[src*='//maps.'], iframe[src*='google.com/maps/'], iframe[src*='//instagram.com']"}),$(".col-small > .gbox").fitVids(),$(".fitvids").fitVids())},function(){var e=function(e){kommersant.inArray(e,canonical)||canonical.push(e)},t=window.location.protocol+"//",n=kommersant.getDomain()+window.location.pathname+window.location.search;canonical.push(t+n),canonical.push(t+"www."+n);var o=$("link");o.each(function(){"canonical"===this.rel&&(-1===this.href.indexOf("//www.")?(e(this.href),e(this.href.split("//").join("//www."))):(e(this.href.split("//www.").join("//")),e(this.href)))})}(),function(){var t="";e.on("resize",function(e){var n=window.getComputedStyle?window.getComputedStyle(document.body,":after").getPropertyValue("content"):"";'"'!==n[0]&&"'"!==n[0]||(n=n.slice(1,-1)),n!==t&&($(this).trigger({type:"customMediaChange",lastMedia:t,newMedia:n}),t=n)})}(),function(){var t=$(".hisrc:visible").add("img[data-hisrc]:visible"),n=t.length,o=0,a=0,i=!1,r=function(){var t,n=67,o=function(){f()};e.on("resize",function(e){window.clearTimeout(t),t=window.setTimeout(o,n)})};lowsrc(),t.each(function(){var e=$(this);hisrcCached(e.data("hisrc")||"")?(l(this,"hisrc"),o++):e.one("load",function(e){i||(a++,o+a>=n&&(i=!0,f(),r()))})}),n>o?e.one("load",function(e){i||(i=!0,f(),r())}):(i=!0,r())}(),function(){var t,n=67,o=function(){$(".resize").filter(":really-hidden").each(function(){var e=$(this),t=$(e.data("resize-places")||"").filter(":not(:really-hidden)").first();e.appendTo(t)})};e.on("resize",function(e){window.clearTimeout(t),t=window.setTimeout(o,n)})}(),function(){$(".copy").each(function(){var e=$(this),t=e.data("copy-id"),n=e.data("copy-target")||"",o="undefined"!=typeof e.data("copy-ismove");""!=n&&(o||(e=e.clone(!0,!0)),"undefined"!=typeof t&&e.prop("id",t),e.appendTo(n))})}(),function(){var t="lazyload",n="lazyload-unload",o="lazyload-wrapper",a="lazyload-content",i="lazyload-loaded",r="lazyload-url",s="lazyload-screens-before",c="lazyload-screens-after",l="lazyload-unload",d=$("."+t);if(0!==d.length){var f=function(){kommersantInit(),e.resize()};d.wrap('<div class="'+o+'"></div>'),e.on("resize scroll",function(d){var u=e.scrollTop(),h=e.scrollLeft(),m=e.width(),p=e.height();$("."+o).each(function(){var e=$(this),o=e.find("."+t);if(1===o.length){var d=o.data(s)||0,v=o.data(c)||0,g=e.offset(),y=u>=g.top-p*(d+1)&&u<=g.top+e.outerHeight()+p*v,w=h>=g.left-m&&h<=g.left+e.outerWidth(),k=y&&w&&!e.is(":really-hidden"),C=e.hasClass(i);if(k!==C)if(k){var b="script"===(o.prop("tagName")||"").toLowerCase(),_=o.hasClass(n),S=o.data(r);_&&e.data(l,!0),e.css({height:""}),e.addClass(i);var x=$('<div class="'+a+'"></div>');if(x.appendTo(e),"string"==typeof S&&S.length>0)_||o.remove(),x.load(S,f);else{var D=o.html();D=D.replace(/{{(.*)}}/g,"$1"),b&&(D=D.replace(/^\s*<!--/,"").replace(/-->\s*$/,"")),_||o.remove(),x.html(D),f()}}else"undefined"!=typeof e.data(l)&&(e.css({height:e.outerHeight()}),e.find("."+a).remove(),e.removeClass(i),f())}})})}}(),function(){n.on("click",".changeclass",function(e){var t,n,o=$(this),a=o.data("changeclass");if("undefined"==typeof o.data("changeclass-nopreventdefault")&&(e.stopPropagation(),e.preventDefault()),"object"==typeof a)for(t in a)if("object"==typeof a[t])for(n in a[t])switch(n){case"addClass":$(t).addClass(a[t][n]);break;case"removeClass":$(t).removeClass(a[t][n]);break;case"toggleClass":$(t).toggleClass(a[t][n])}})}(),function(){var t="click",a="keydown",i="modal",r="generated",s=i,c=s+"_close",l=s+"_trigger",d="."+s,f="."+c,u="."+l,h=i+"-selector",m=i+"-template",p=function(e){27!=e.keyCode||e.ctrlKey||e.altKey||e.shiftKey||e.metaKey||g()},v=function(){e.triggerHandler("resize")},g=function(){var e=!1;$(d).each(function(){e=!0;var t=$(this);"undefined"!=typeof t.data(r)?t.remove():t.removeClass(s)}),e&&(o.css({overflow:""}),n.off(a,p),v())};document.querySelector&&document.querySelector(u)&&(n.on(t,u,function(e){e.stopPropagation(),e.preventDefault();var t=!1,i=$(this),c=i.data(h)||"",l=i.data(m)||"";if(""!==c){var d=$(c);d.length>0&&(t=!0,d.addClass(s))}if(""!==l){var f=$(l).first().html();if(f){t=!0;var u=$(f);u.data(r,1),u.addClass(s),u.appendTo(document.body),kommersantInit()}}t&&(o.css({overflow:"hidden"}),n.on(a,p),v())}),n.on(t,f,function(e){e.stopPropagation(),e.preventDefault(),g()}))}(),function(){n.on("click",".more-trigger",function(e){e.stopPropagation(),e.preventDefault();var t=$(this),n=t.closest(".more"),o=n.find(".more-hidden"),a=n.find(".more-trigger"),i=!n.hasClass("more-expanded");a.each(function(){var e=$(this);i===e.hasClass("more-trigger-hide")?e.show():e.hide()}),o.stop(!0),i?(o.slideDown(),n.addClass("more-expanded")):(o.slideUp(),n.removeClass("more-expanded"))})}(),function(){var e=function(){var e=$(this);e.closest(".fakeelement").find(".fakeelement-select-fake").html($(this.options[this.selectedIndex]).html())};o.on("change",".fakeelement-select",e),$(".fakeelement-select").each(e)}(),function(){var e="IsNonMobileViewport",t={domain:"."+kommersant.getDomain(),path:"/",expires:new Date};t.expires.setUTCFullYear(t.expires.getUTCFullYear()+1),kommersant.getCookie(e)&&$(".fullversion").removeClass("hide"),$(".fullversion-link-on").on("click",function(n){kommersant.setCookie(e,1,t),n.ctrlKey||n.altKey||n.shiftKey||(n.stopPropagation(),n.preventDefault(),window.location.reload())}),$(".fullversion-link-off").on("click",function(n){kommersant.deleteCookie(e,t),n.ctrlKey||n.altKey||n.shiftKey||(n.stopPropagation(),n.preventDefault(),window.location.reload())})}(),function(){var e="",t=function(t){var n,o,a,r;"string"==typeof t&&t!=e||(t=""),e.length>0&&(n=$("#navsection-tab-"+e),o=$("#navsection-menu-"+e),n.removeClass("b-main_navsection__tab_current"),o.hide(),i("")),t.length>0&&(a=$("#navsection-tab-"+t),a.addClass("b-main_navsection__tab_current"),r=$("#navsection-menu-"+t),r.show()),e=t};$(".navsection-toggle").on("click",function(e){var n=$(this),o=n.data("navsection")||"";e.stopPropagation(),e.preventDefault(),t(o)});var o="",i=function(e){var t,n;"string"==typeof e&&e!=o||(e=""),o.length>0&&(t=$("#navsection-sub-menu-"+o),t.hide()),e.length>0&&(n=$("#navsection-sub-menu-"+e),n.show()),o=e};$(".navsection-sub-toggle").on("click",function(e){var t=$(this),n=t.data("navsection")||"";e.stopPropagation(),e.preventDefault(),i(n)});var c,l,d=$(".navmenu"),u=$("#navmenu-rubrics"),h=$(".navmenu-toggle"),m=$("#navmenu-template-loading").html(),p=!1,v=300,g=300,y=500,w="",k=function(e){27==e.keyCode&&C()},C=function(e,t,o,i){var c;if(p=!1,"string"!=typeof e&&(e=""),e!=w){if("string"!=typeof t&&(t=""),"string"!=typeof o&&(o=""),e.length>0&&(c=$("#navmenu-"+e),0==c.length&&(""==o?e="":(u.append(m.replace(/{{type}}/g,t).replace(/{{id}}/g,e)),c=$("#navmenu-"+e),$.get(o,function(t){var n=c.is(".navmenu-active");if(c.replaceWith(t),c=$("#navmenu-"+e),n){c.addClass("navmenu-active"),f(c);try{adfox.update(adfox.screen(),null,!0)}catch(o){}}})))),w.length>0?($("#navmenu-"+w).removeClass("navmenu-active"),$(".navmenu-toggle-active").removeClass("navmenu-toggle-active")):e.length>0&&(a.on("mousedown",C),n.on("keydown",k)),e.length>0){if($(".navmenu-toggle-current").addClass("navmenu-toggle-active"),i&&r(),c.length>0){c.addClass("navmenu-active"),f(c);try{adfox.update(adfox.screen(),null,!0)}catch(l){}}}else a.off("mousedown",C),n.off("keydown",k),s(),$(".navmenu-toggle-active").removeClass("navmenu-toggle-active");w=e}};h.on("mouseenter mouseleave click",function(e){var t=$(this),n=t.data("navmenu-id")||"",o=t.data("navmenu-type")||"",a=t.data("navmenu-url")||"",i="undefined"!=typeof t.data("navmenu-darkbox");switch(window.clearTimeout(c),e.type){case"mouseenter":if(""!=n&&n!=w){var r=function(){C(n,o,a,i),p=!0,window.clearTimeout(l),l=window.setTimeout(function(){p=!1},y)};$(".navmenu-toggle-current").removeClass("navmenu-toggle-current"),t.addClass("navmenu-toggle-current"),0==$(".navmenu-toggle-active").length?c=window.setTimeout(r,v):r()}break;case"mouseleave":c=window.setTimeout(function(){C()},g);break;case"click":window.clearTimeout(c);var s=t.attr("href");"string"==typeof s&&"#"!=s||(e.stopPropagation(),e.preventDefault(),""!=n&&n!=w||p?($(".navmenu-toggle-current").removeClass("navmenu-toggle-current"),t.addClass("navmenu-toggle-current"),C(n,o,a,i)):C())}}),h.on("mousedown",function(e){window.clearTimeout(c),e.stopPropagation()}),d.on("mouseenter",".navmenu-item",function(e){window.clearTimeout(c)}),d.on("mouseleave",".navmenu-item",function(e){window.clearTimeout(c),c=window.setTimeout(function(){C()},1)}),d.on("mousedown",".navmenu-item",function(e){e.stopPropagation()})}(),function(){var e,t=function(e){return e=parseInt(e,10)||0,e>=1e6?""+Math.floor(e/1e6)+"M":e>=1e4?""+Math.floor(e/1e3)+"K":""+e};$(".socials-link").on("click",function(e){e.ctrlKey||e.altKey||e.shiftKey||(e.stopPropagation(),e.preventDefault(),kommersant.windowOpen(this.href,"socials",800,450))});var n=0,o=$(".socials-value-vk");if(o.length>0)for(o.removeClass("hide"),"object"!=typeof VK&&(VK={}),"object"!=typeof VK.Share&&(VK.Share={}),VK.Share.count=function(e,a){n+=parseInt(a,10)||0,o.html(t(n))},e=0;e<canonical.length;e++)$.getJSON("https://vk.com/share.php?act=count&index=1&format=json&url="+encodeURIComponent(canonical[e])+"&callback=?");var a=0,i=$(".socials-value-tw");if(i.length>0){i.removeClass("hide");var r=function(e){"object"==typeof e&&"undefined"!=typeof e.count&&(a+=parseInt(e.count,10)||0),i.html(t(a))};for(e=0;e<canonical.length;e++)$.getJSON("http://cdn.api.twitter.com/1/urls/count.json?url="+encodeURIComponent(canonical[e])+"&callback=?",r)}var s=0,c=$(".socials-value-fb");if(c.length>0){c.removeClass("hide");var l=function(e){"object"==typeof e&&"object"==typeof e[0]&&"undefined"!=typeof e[0].share_count&&(s=parseInt(e[0].share_count,10)||0),c.html(t(s))};$.getJSON("http://api.facebook.com/restserver.php?method=links.getStats&format=json&urls="+encodeURIComponent(canonical[0])+"&callback=?",l)}var d=0,f=$(".socials-value-ok");if(f.length>0)for(f.removeClass("hide"),"object"!=typeof ODKL&&(ODKL={}),ODKL.updateCount=ODKL.updateCountOC=ODKL.updateCountForVoted=function(e,n){d+=parseInt(n,10)||0,f.html(t(d))},e=0;e<canonical.length;e++)$.getJSON("http://www.odnoklassniki.ru/dk?st.cmd=extLike&uid=odklcnt0&ref="+encodeURIComponent(canonical[e])+"&callback=?")}(),function(){var e=$("#navsearch"),t=$("#navsearch-form"),n=$("#navsearch-query"),o="b-search-active",a=function(){e.hasClass(o)||(e.addClass(o),n.select())},i=function(){e.hasClass(o)&&(e.removeClass(o),n.blur())};return 1!==e.length||1!==t.length||1!==n.length?!1:(t.on("submit",function(t){return e.hasClass(o)?""===n.val()?(i(),!1):void 0:(n.focus(),!1)}),n.on("focus",function(e){a()}),n.on("blur",function(e){""===n.val()&&i()}),n.on("keydown",function(e){27==e.keyCode&&i()}),void $("#frmSearch").on("submit",function(e){return"object"!=typeof this.search_query||""===this.search_query.value?!1:void 0}))}(),$(".b-main-search").each(function(){var e="details",t=".b-main-search-source__item",n=".b-main-search-source__trigger",o=".b-main-search-source__separate",a="> label > input",i=$(this),r=i.find(t),s=i.find(n),c=i.find(o),l=r.find(a+"[type=checkbox]"),d=function(t,n){var o,i=!0,r=250;"object"!=typeof t&&(t=$(this),i=!1);var s=t.data(e)||"";if(""!=s){var c=$("#"+s);c.length>0&&("boolean"!=typeof n&&(n=t.find(a).prop("checked")),i?(o=c.queue("fx"),c.queue("fx",o.slice(0,1)),o.length<=2&&(n?c.slideDown(r):c.slideUp(r))):n?c.show():c.hide())}};r.each(d),i.on("click",t+" "+a,function(e){var i,r,s,f,u;"radio"==this.type?$(this.form[this.name]).each(function(){d($(this).closest(t),this.checked)}):(i=$(this).closest(t),u=this.checked,d(i,u),f=i.find(a),f.prop("checked")&&(i.is(o)?l.not(f).prop("checked",!1):c.find(a).prop("checked",!1)),i.is(n)?i.siblings(t).each(function(){var e=$(this),t=e.find(a);t.prop("checked",u),d(e,u)}):(r=i.siblings(n),r.length>0&&(u?(s=r.siblings(t),f=s.find(a+":not(:checked)"),0==f.length&&(f=r.find(a),f.prop("checked",u))):(f=r.find(a),f.prop("checked",u)))))}),s.each(function(){var e=$(this);e.find(a).prop("checked",0==e.siblings(t).find(a+":not(:checked)").length)})}),function(){var e="fm_player",t="fm_player__controls",n="fm_player__bitrate__item",o="fm_player__bitrate__item--selected",a="fmPlayerBitrate",i=kommersant.getCookie(a);""!==i?$("."+e).each(function(){var e=$(this),a=e.find("."+t),r=e.find("."+n);r.each(function(){var e=$(this);return e.text()===i?void(e.hasClass(o)||(r.removeClass(o),e.addClass(o),a.prop("src",this.href))):void 0})}):$("."+e).each(function(){var e=$(this),a=e.find("."+t),i=e.find("."+n),r=a.attr("src");i.each(function(){var e=$(this);return this.href===r?void e.addClass(o):void 0})}),$("."+n).on("click",function(n){n.stopPropagation(),n.preventDefault();var i=$(this),r=i.closest("."+e),s=r.find("."+t);if(!i.hasClass(o)){var c=new Date;c.setUTCDate(c.getUTCDate()+7),kommersant.setCookie(a,i.text(),{expires:c}),r.find("."+o).removeClass(o),i.addClass(o),s.prop("autoplay",!0),s.prop("src",this.href)}})}(),t.removeClass("no-js"),""==t.attr("class")&&t.removeAttr("class"),kommersantInit(),e.resize()})}(jQuery);
