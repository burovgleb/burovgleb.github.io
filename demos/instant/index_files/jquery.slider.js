/*!
 * Bez v1.0.11
 * http://github.com/rdallasgray/bez
 *
 * A plugin to convert CSS3 cubic-bezier co-ordinates to jQuery-compatible easing functions
 *
 * With thanks to Nikolay Nemshilov for clarification on the cubic-bezier maths
 * See http://st-on-it.blogspot.com/2011/05/calculating-cubic-bezier-function.html
 *
 * Copyright 2011 Robert Dallas Gray. All rights reserved.
 * Provided under the FreeBSD license: https://github.com/rdallasgray/bez/blob/master/LICENSE.txt
 */
jQuery.extend({bez:function(coOrdArray){var encodedFuncName="bez_"+jQuery.makeArray(arguments).join("_").replace(/\./g,"p");if(typeof jQuery.easing[encodedFuncName]!=="function"){var polyBez=function(p1,p2){var A=[null,null],B=[null,null],C=[null,null],bezCoOrd=function(t,ax){C[ax]=3*p1[ax],B[ax]=3*(p2[ax]-p1[ax])-C[ax],A[ax]=1-C[ax]-B[ax];return t*(C[ax]+t*(B[ax]+t*A[ax]))},xDeriv=function(t){return C[0]+t*(2*B[0]+3*A[0]*t)},xForT=function(t){var x=t,i=0,z;while(++i<14){z=bezCoOrd(x,0)-t;if(Math.abs(z)<.001)break;x-=z/xDeriv(x)}return x};return function(t){return bezCoOrd(xForT(t),1)}};jQuery.easing[encodedFuncName]=function(x,t,b,c,d){return c*polyBez([coOrdArray[0],coOrdArray[1]],[coOrdArray[2],coOrdArray[3]])(t/d)+b}}return encodedFuncName}});;

/*!
 * slider jQuery Plugin v1.6.0
 *
 * by Anton Zhukov
 * toxa@toxa.ru
 *
 * USAGE:
 * $(selector).slider({options});
 * $(selector).slider("goTo", id);
 */
!function($){"use strict";var e="slider",t="mouse",n=!1,o=!1,i=$(window),a=$(document),r="undefined"!=typeof window.onmousemove?i:a,s=function(){var e=-1!=navigator.userAgent.indexOf("iPhone"),t=-1!=navigator.userAgent.indexOf("iPad"),n=navigator.userAgent.match(/CPU OS (\d+)/);n=t&&n&&"string"==typeof n[1]?parseInt(n[1].replace(/_/g,"."),10)||0:"0","object"!=typeof $.browser&&($.browser={}),$.extend($.browser,{iphone:e,ipad:t,ipadVersion:n});var o,i,a=document.createElement("div");document.body.insertBefore(a,null);var r={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};for(var s in r)if("undefined"!=typeof a.style[s]){a.style[s]="translateX(1px)",o=window.getComputedStyle(a).getPropertyValue(r[s]),a.style[s]="",a.style[s]="translateZ(1px)",i=window.getComputedStyle(a).getPropertyValue(r[s]);break}document.body.removeChild(a),$.extend($.support,{transform:"undefined"!=typeof o&&o.length>0&&"none"!==o,transform3d:"undefined"!=typeof i&&i.length>0&&"none"!==i})},l={isVertical:!1,isDraggable:!0,isElastic:!0,isLooped:!1,isKeyboard:!1,isAutoSlide:!1,isAutoSlideRestart:!0,isTransform:!0,isTransform3d:!0,isFit:!1,start:1,margin:0,align:.5,durationDragMin:250,durationDragMax:250,durationItem:250,autoSlideInterval:5e3,easing:"function"==typeof $.bez?$.bez([0,0,.25,1]):"swing",mouseThreshold:8,touchThreshold:0,speedThreshold:.3,elasticPercent:.15,fade:1,customDraw:null,onReady:function(e,t){},onLeave:function(e,t){},onChange:function(e,t){},onStep:function(e){},onComplete:function(e,t){},onClick:function(e,t){},onMostlyVisible:function(e,t){},onMostlyInvisible:function(e,t){}},f=function(e){return"object"==typeof e&&"string"==typeof e.type&&0==e.type.indexOf(t)},d=function(e){return f(e)&&1!=e.which},u=function(e){return o||(n=!f(e),o=!0),n};$.fn[e]=function(o){if("string"==typeof o){var c=Array.prototype.slice.call(arguments,1);return this.each(function(){var t=$(this).data(e+"-methods");"undefined"!=typeof t&&"function"==typeof t[o]&&$(this).is("."+e+"-ready")&&t[o].apply(this,c)})}return"object"==typeof o?(o=$.extend({},l,o),"boolean"!=typeof o.isVertical&&(o.isVertical=l.isVertical),"boolean"!=typeof o.isDraggable&&(o.isDraggable=l.isDraggable),"boolean"!=typeof o.isElastic&&(o.isElastic=l.isElastic),"boolean"!=typeof o.isLooped&&(o.isLooped=l.isLooped),"boolean"!=typeof o.isKeyboard&&(o.isKeyboard=l.isKeyboard),"boolean"!=typeof o.isAutoSlide&&(o.isAutoSlide=l.isAutoSlide),"boolean"!=typeof o.isAutoSlideRestart&&(o.isAutoSlideRestart=l.isAutoSlideRestart),"boolean"!=typeof o.isFit&&(o.isFit=l.isFit),o.start="number"==typeof o.start?parseInt(o.start,10):"string"==typeof o.start&&o.start.length>0?o.start:l.start,o.margin="number"==typeof o.margin?parseInt(o.margin,10):l.margin,o.align="number"==typeof o.align&&o.align>=0&&o.align<=1?o.align:l.align,o.durationDragMin="number"==typeof o.durationDragMin?parseInt(o.durationDragMin,10):l.durationDragMin,o.durationDragMax="number"==typeof o.durationDragMax?parseInt(o.durationDragMax,10):l.durationDragMax,o.durationItem="number"==typeof o.durationItem?parseInt(o.durationItem,10):l.durationItem,o.autoSlideInterval="number"==typeof o.autoSlideInterval?parseInt(o.autoSlideInterval,10):l.autoSlideInterval,o.easing="string"==typeof o.easing?o.easing:l.easing,o.mouseThreshold="number"==typeof o.mouseThreshold?parseInt(o.mouseThreshold,10):l.mouseThreshold,o.touchThreshold=0,o.speedThreshold="number"==typeof o.speedThreshold?o.speedThreshold:l.speedThreshold,o.elasticPercent="number"==typeof o.elasticPercent?o.elasticPercent:l.elasticPercent,o.fade="number"==typeof o.fade?o.fade:l.fade,"function"!=typeof o.customDraw&&(o.customDraw=l.customDraw),"function"!=typeof o.onReady&&(o.onReady=l.onReady),"function"!=typeof o.onLeave&&(o.onLeave=l.onLeave),"function"!=typeof o.onChange&&(o.onChange=l.onChange),"function"!=typeof o.onStep&&(o.onStep=l.onStep),"function"!=typeof o.onComplete&&(o.onComplete=l.onComplete),"function"!=typeof o.onClick&&(o.onClick=l.onClick),"function"!=typeof o.onMostlyVisible&&(o.onMostlyVisible=l.onMostlyVisible),"function"!=typeof o.onMostlyInvisible&&(o.onMostlyInvisible=l.onMostlyInvisible)):o=$.extend({},l),s(),this.each(function(){var s,l,c,p,h,g,m=$(this),y=m.find("."+e),v=m.find("."+e+"-canvas").not(y.find("."+e+"-canvas")),b=m.find("."+e+"-item").not(y.find("."+e+"-item")),C=m.find("."+e+"-prev").not(y.find("."+e+"-prev")),x=m.find("."+e+"-next").not(y.find("."+e+"-next")),T=m.find("."+e+"-nav").not(y.find("."+e+"-nav")),M=m.find("."+e+"-nav-repeat").not(y.find("."+e+"-nav-repeat")),k=$({offset:0}),w=0,D=0,I=[],S=0,E=0,X={},Y=o.isLooped,V=!1,A=!1,z=!1,P=!1,L=!1,R=!1,K=!1,O=!1,j=!1,F=!1,H=!1,W=0,q=0,B=0,Q=0,U=function(e,t){return o.isElastic?e/3*t/(e/3+t):0},Z=function(e,t){return o.isVertical?t:e},_=function(){var t=0;if(I=[],w=Z(v.outerWidth(),v.outerHeight()),b.each(function(){var n,i=$(this);if("none"!=i.css("display")){var a=Z(i.outerWidth(),i.outerHeight());n=i.data(e+"-id"),"number"==typeof n&&(n=n.toString()),"undefined"==typeof n&&(n=""),I.push({id:n,isVisible:!0,size:a,offset:t,element:this}),t+=a+o.margin}}),D=t,s=0,l=I.length-1,o.isFit&&!Y){for(;l>0&&D-o.margin-I[l-1].offset<=w-(w-I[l-1].size)*o.align;)l-=1;for(;l>s&&I[s+1].offset<=(w-I[s+1].size)*o.align;)s+=1}},G=function(e){var t,n,o=-1;if("string"==typeof e)for(t=0;t<I.length;t++)if(I[t].id==e){o=t;break}return-1==o&&(o=(parseInt(e,10)||1)-1,n=I.length,o>=n&&(o=n-1),0>o&&(o=0)),o},J=function(){var t=i.scrollTop(),n=i.scrollLeft(),a=i.width(),r=i.height(),s=v.outerWidth(),l=v.outerHeight(),f=v.offset(),d=f.top,u=f.left,c=d+l/2,p=u+s/2,h=t+r>=d&&d+l>=t,g=n+a>=u&&u+s>=n,y=t+r>=c&&c>=t,b=n+a>=p&&p>=n,C=h&&g,x=y&&b;if(C!=K&&(C?(m.addClass(e+"-visible"),o.isTransform&&o.isTransform3d&&$.support.transform3d&&m.addClass(e+"-3d"),ye()):(m.removeClass(e+"-visible"),ve(),o.isTransform&&o.isTransform3d&&$.support.transform3d&&m.removeClass(e+"-3d")),fe()),x!=O){var T=ne();x?(m.addClass(e+"-mostly"),o.onMostlyVisible.call(this,T,I[T].id.length>0?I[T].id:T+1)):(m.removeClass(e+"-mostly"),o.onMostlyInvisible.call(this,T,I[T].id.length>0?I[T].id:T+1))}K=C,O=x},N=function(){k.stop(!0),_(),ee(),E=ie(),fe(),P=!1,ye()},ee=function(){return Y||(S>l&&(S=l),s>S&&(S=s)),S},te=function(){if(Y){var e=I.length;return Math.floor(S/e)}return 0},ne=function(){if(Y){var e=I.length;return(S%e+e)%e}return S},oe=function(e){var t=I.length;return te()*t+e},ie=function(){var e=te(),t=ne(),n=-(D*e),i=-I[t].offset,a=(w-I[t].size)*o.align;return n+i+a},ae=function(){var e,t,n,i,a,r,s,l,f=[{},{}],d=S;if(r=B/h,s=Math.abs(r)>=o.speedThreshold,s&&L&&Q*B>0)0>B?d++:d--;else{for(e=0;e<I.length;e++)for(i=I[e].offset+E+(I[e].size-w)*o.align,a=(i%D-D)%D,n=0;2>n;n++){for(t=0;2>t;t++)(0==t&&0>a&&("undefined"==typeof f[t].index||a>f[t].distance)||1==t&&a>0&&("undefined"==typeof f[t].index||a<f[t].distance))&&(f[t].index=(Math.floor(-i/D)+n)*I.length+e,f[t].distance=a);a+=D}l=f[0].distance+f[1].distance,d=s&&r>0||!s&&l>0?f[0].index:f[1].index}return Q=B,d},re=function(){var t=ne();T.each(function(){$(this).find("."+e+"-nav-item-current").removeClass(e+"-nav-item-current"),$(this).find("."+e+"-nav-item").eq(t).addClass(e+"-nav-item-current")}),Y||(S==s?C.addClass(e+"-inactive"):C.removeClass(e+"-inactive"),S==l?x.addClass(e+"-inactive"):x.removeClass(e+"-inactive"))},se=function(t,n,i){var a=S,r=ne();S=t,ee();var s=ne();S!=a&&($(I[r].element).removeClass(e+"-item-current"),$(I[s].element).addClass(e+"-item-current"),n||re(),P||o.onLeave.call(I[r].element,r,I[r].id.length>0?I[r].id:r+1),o.onChange.call(I[s].element,s,I[s].id.length>0?I[s].id:s+1)),(S!=a||n||i&&o.isElastic)&&(de(n,i),i&&!n?ve():ye())},le=function(e){var t=0;e=parseInt(e,10)||0,0!=e?(o.isElastic&&!Y&&(0>e&&(S==s&&E>=ie()||s==l)&&(t=-1),e>0&&(S==l&&E<=ie()||s==l)&&(t=1)),se(S+e,!1,t)):o.isElastic&&P&&!Y&&S==s&&E>=ie()||S==l&&E<=ie()?se(S,!0,!0):ye()},fe=function(){var e,t,n,i,a,r,f,d,u,c,p;for(a=E,Y||(n=(w-I[s].size)*o.align-I[s].offset,i=(w-I[l].size)*o.align-I[l].offset,E>n&&(a=n+U(E-n,w)),i>E&&(a=i+U(E-i,-w))),e=0;e<I.length;e++){for(u={},c={},p=o.fade,r=I[e].offset+a,f=r,"function"==typeof o.customDraw&&(c=o.customDraw(e,r,I[e].size,D),"object"!=typeof c&&(c={}),"number"==typeof c.finalOffset&&(f=c.finalOffset),"number"==typeof c.fade&&c.fade<1&&c.fade>=0&&(p=c.fade)),Y&&(f=(f%D-D)%D),d=!1,t=0;!d&&(Y?2:1)>t;t++)d=w>=f&&f+I[e].size>=0,d||(f+=D);(I[e].isVisible||d)&&(d||(f=w+1),o.isTransform&&$.support.transform?o.isTransform3d&&$.support.transform3d&&K?u.transform="translate3d("+Z(f+"px, 0px, 0px","0px, "+f+"px, 0px")+")":u.transform="translate("+Z(f+"px, 0px","0px, "+f+"px")+")":u[Z("left","top")]=f,d&&("number"==typeof c.opacity?u.opacity=c.opacity:1>p?u.opacity=Math.max(0,1-Math.abs((f-(w-I[e].size)*o.align)/(w-(w-I[e].size)*(.5-Math.abs(o.align-.5)))))*(1-p)+p:u.opacity=1),u.opacity>=1&&(u.opacity=""),$.browser.ipad&&(u.visibility=d?"":"hidden"),$(I[e].element).css(u)),I[e].isVisible=d}o.onStep.call(this,E)},de=function(e,t){var n,i,a;o.isElastic?a=w*o.elasticPercent:(a=0,t=0),k.stop(!0),i=t&&!e?0>t?ie()+a:ie()-a:ie(),i!=E&&(P=!0,L=e,t?n=Math.round(o.durationItem/2):e?(n=Math.abs(Math.round((i-E)/(B/h)*2)),n>o.durationDragMax&&(n=o.durationDragMax),n<o.durationDragMin&&(n=o.durationDragMin)):n=o.durationItem,k.prop({offset:E}),k.animate({offset:i},{duration:n,easing:o.easing,step:function(e,t){E=e,fe()},complete:function(){(e||!t)&&(P=!1),L=!1;var n=ne();e&&re(),o.onComplete.call(I[n].element,n,I[n].id.length>0?I[n].id:n+1)}}))},ue=function(){var e=new Date;h=e-p,p=e},ce=function(e){var t,n={};if(u(e)&&!$.isEmptyObject(X)){for(t=0;t<e.originalEvent.touches.length;t++)touch=e.originalEvent.touches.item(t),touch&&X[touch.identifier]&&(n[touch.identifier]=!0);for(t in X)"undefined"==typeof n[t]&&delete X[t];$.isEmptyObject(X)&&ge(e)}},pe=function(e){var n;if(u(e)!=f(e)&&!d(e)){if(ue(),u(e))for(n=0;n<e.originalEvent.changedTouches.length;n++){var o=e.originalEvent.changedTouches.item(n);o&&(X[o.identifier]={startX:o.pageX,startY:o.pageY,lastX:o.pageX,lastY:o.pageY})}else X[t]={startX:e.pageX,startY:e.pageY,lastX:e.pageX,lastY:e.pageY};V||(V=!0,A=!1,z=!1,q=0,B=0,k.stop(!0),u(e)?(v.on("touchmove",he),v.on("touchend touchcancel",ge)):(r.on("mousemove",he),r.on("mouseup",ge)),i.on("blur",ge),ve())}},he=function(e){var n,i,a,r=o.isVertical?1:0,s=[0,0],l=[0,0],f=[0,0],c=[0,0];if(d(e))return void ge(e);if(V){if(ue(),!A){if(u(e)){for(n=0;n<e.originalEvent.changedTouches.length;n++)if(a=e.originalEvent.changedTouches.item(n),a&&X[a.identifier])for(s[0]=a.pageX-X[a.identifier].startX,s[1]=a.pageY-X[a.identifier].startY,i=0;2>i;i++)s[i]>0&&s[i]>f[i]&&(f[i]=s[i]),s[i]<0&&s[i]<c[i]&&(c[i]=s[i]);for(i=0;2>i;i++)s[i]=f[i]+c[i]}else s[0]=e.pageX-X[t].startX,s[1]=e.pageY-X[t].startY;for(i=0;2>i;i++)l[i]=Math.abs(s[i]);if(Math.max(l[0],l[1])>=(u(e)?o.touchThreshold:o.mouseThreshold)){A=!0,z=l[0]<l[1]==o.isVertical;for(n in X)X[n].lastX=X[n].startX,X[n].lastY=X[n].startY}}if((!u(e)||z&&1==e.originalEvent.touches.length)&&e.preventDefault(),z){if(u(e)){for(n=0;n<e.originalEvent.changedTouches.length;n++)if(a=e.originalEvent.changedTouches.item(n),a&&X[a.identifier]){for(s[0]=a.pageX-X[a.identifier].lastX,s[1]=a.pageY-X[a.identifier].lastY,i=0;2>i;i++)s[i]>0&&s[i]>f[i]&&(f[i]=s[i]),s[i]<0&&s[i]<c[i]&&(c[i]=s[i]);X[a.identifier].lastX=a.pageX,X[a.identifier].lastY=a.pageY}for(i=0;2>i;i++)s[i]=f[i]+c[i]}else s[0]=e.pageX-X[t].lastX,s[1]=e.pageY-X[t].lastY,X[t].lastX=e.pageX,X[t].lastY=e.pageY;if(k.stop(!0,!0),k.prop({offset:E}),E+=s[r],B=s[r],q+=B,!P){var p=ne();o.onLeave.call(I[p].element,p,I[p].id.length>0?I[p].id:p+1),P=!0}fe()}}},ge=function(e){var n;if(V){if(u(e)&&"blur"!=e.type)for(n=0;n<e.originalEvent.changedTouches.length;n++){var o=e.originalEvent.changedTouches.item(n);o&&delete X[o.identifier]}else delete X[t];$.isEmptyObject(X)&&(V=!1,A=!1,z=!1,u(e)?(v.off("touchmove",he),v.off("touchend touchcancel",ge)):(r.off("mousemove",he),r.off("mouseup",ge)),i.off("blur",ge),P&&(e.preventDefault(),se(ae(),!0)),ye()),ce(e)}},me=function(e){if(!V&&!P){var t=ne();return o.onClick.call(I[t].element,t,I[t].id.length>0?I[t].id:t+1)}e.stopPropagation(),e.preventDefault()},ye=function(){o.isAutoSlide&&(ve(),V||F||H||(R=!0,(o.isAutoSlideRestart||"undefined"==typeof g)&&(g=window.setInterval(function(){R&&se(S+1)},o.autoSlideInterval))))},ve=function(){o.isAutoSlide&&(R=!1,o.isAutoSlideRestart&&window.clearInterval(g))},be={goTo:function(e){se(G(e))}};m.data(e+"-methods",be),_(),0!=I.length&&(2*w>D&&(Y=!1),S=G(o.start),ee(),c=ne(),$(I[c].element).addClass(e+"-item-current"),E=ie(),"ontouchstart"in window&&m.addClass(e+"-touchable"),J(),M.each(function(){var e,t=$(this),n="",o=t.html();for(e=0;e<I.length;e++)n+=o;t.html(n)}),re(),fe(),m.addClass(e+"-ready"),o.onReady.call(this,c,I[c].id.length>0?I[c].id:c+1),m.on("dragstart",!1),i.one("load",function(e){J(),N()}),i.on("resize",function(e){J(),N()}),i.on("scroll",function(e){J()}),o.isAutoSlide&&(m.on("mouseover",function(e){u(e)||(F=!0,ve(e))}),m.on("mouseleave",function(e){u(e)||(F=!1,ye(e))})),o.isDraggable&&(m.addClass(e+"-draggable"),v.on("touchstart mousedown",pe),v.on("click",me)),C.on("touchstart mousedown","."+e+"-link",function(e){d(e)||(e.stopPropagation(),e.preventDefault(),u(e)!=f(e)&&(le(-1),re()))}),C.on("touchend touchcancel mouseup mouseleave","."+e+"-link",function(e){e.preventDefault(),n!=f(e)&&(u(e)&&e.originalEvent.targetTouches.length>0||"mouseleave"==e.type&&"undefined"!=typeof X[t]||le(0))}),C.on("click dblclick","."+e+"-link",!1),x.on("touchstart mousedown","."+e+"-link",function(e){d(e)||(e.stopPropagation(),e.preventDefault(),u(e)!=f(e)&&(le(1),re()))}),x.on("touchend touchcancel mouseup mouseleave","."+e+"-link",function(e){e.preventDefault(),n!=f(e)&&(u(e)&&e.originalEvent.targetTouches.length>0||"mouseleave"==e.type&&"undefined"!=typeof X[t]||le(0))}),x.on("click dblclick","."+e+"-link",!1),T.each(function(){$(this).find("."+e+"-nav-item").each(function(t){$(this).find("."+e+"-link").prop("href","#id="+(I[t]&&I[t].id.length>0?I[t].id:t+1)).data("index",t)})}),T.on("click","."+e+"-link",function(e){e.ctrlKey||e.altKey||e.shiftKey||(e.stopPropagation(),e.preventDefault(),se(oe(parseInt($(this).data("index"),10)||0)),re())}),o.isKeyboard&&(a.on("keydown keyup",function(e){var t=37,n=38,o=39,i=40;j||e.altKey||e.shiftKey||("keydown"==e.type?(e.keyCode==Z(t,n)&&(Y||S!=s||e.keyCode!=W)&&O&&(H=!0,le(-1),re(),W=e.keyCode),e.keyCode==Z(o,i)&&(Y||S!=l||e.keyCode!=W)&&O&&(H=!0,le(1),re(),W=e.keyCode)):e.keyCode!=W||e.keyCode!=Z(t,n)&&e.keyCode!=Z(o,i)||!O||(H=!1,le(0),W=0))}),a.on("focus","input, textarea, select",function(e){j=!0}),a.on("blur","input, textarea, select",function(e){j=!1})))})}}(jQuery);
