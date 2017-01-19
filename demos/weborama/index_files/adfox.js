function AdFoxScript(AF_n, AF_id, AF_src, AF_async) {
	var AF_doc;
	if (AF_n < 10) {
		try {
			if (document.all && !window.opera) {
				AF_doc = window.frames["AdFox_iframe_" + AF_id].document;
			} else if (document.getElementById) {
				AF_doc = document.getElementById("AdFox_iframe_" + AF_id).contentDocument;
			}
		} catch (e) {}
		if (AF_doc && AF_doc.readyState == "complete") {
			var s = document.createElement("script");
			AF_doc.write('<html><head></head><body marginwidth="0" marginheight="0"></body></html>');
			if (typeof window.chrome != "undefined" || navigator.userAgent.indexOf("iPhone") >= 0 || navigator.userAgent.indexOf("iPad") >= 0 || navigator.userAgent.indexOf("iPod") >= 0) {
				AF_doc.location.hash = "AdFox_fix";
			}
			s.src = AF_src;
			if (AF_doc.getElementsByTagName("head")[0]) {
				AF_doc.getElementsByTagName("head")[0].appendChild(s);
			} else {
				AF_doc.appendChild(s);
			}
		} else {
			setTimeout('AdFoxScript(' + (++AF_n) + ',' + AF_id + ', "' + AF_src + '")', 100);
		}
	}
}

function AdFox() {
	var instance;
	if (!adfox) instance = this;
	else return adfox;
	/*
	*@SETTINGS
	*/
	this.phoneWidth = 479;			// Макс. ширина экрана телефона
	this.tabletWidth = 979;			// Макс. высота экрана телефона
	//this.maxSiteWidth = 1170;		// максимальная ширина сайта
	this.pc = "display";			// имя для мониторв
	this.pad = "tablet";			// имя для планшетов
	this.phone = "phone";			// имя для телефонов
	/*
	*@END SETTINGS
	*/
	this.rnd = function () {
		return Math.floor(Math.random() * 1000000);
	};
	this.pr = this.rnd();
	this.ref = escape(document.referrer);
	this.dl = escape(document.location);
	this.banners = [];
	this.state = "";
	this.prev = "";
	this.screen = function () {
		var win = window,
				d = document,
				e = d.documentElement,
				g = d.getElementsByTagName("body")[0],
				w = win.innerWidth || e.clientWidth || g.clientWidth;
		if (w > this.tabletWidth) {
			return this.pc;
		} else if ((w < this.tabletWidth || w == this.tabletWidth) && w > this.phoneWidth) {
			return this.pad;
		} else if (w < this.phoneWidth || w == this.phoneWidth) {
			return this.phone;
		}
		return "";
	};
	this.removeBanner = function (e) {
		for (var i = 0; i < adfox.banners.length; i++) {
			if (adfox.banners[i] == e) {
				adfox.banners[i].ph.innerHTML = "";
			}
		}
	};

	this.update = function (state, forceClasses, forceScroll) {
		adfox.prev = adfox.state;
		adfox.state = state;
		var i;
		var j;
		var b;
		var visible;
		var found;
		if (adfox.state != adfox.prev || forceClasses || forceScroll) {
			for (i = 0; i < adfox.banners.length; i++) {
				b = adfox.banners[i];
				visible = true;
				if (typeof b.displayed !== "boolean") {
					b.displayed = false;
				}
				if (typeof b.visible !== "boolean") {
					b.visible = false;
				}
				if (b.settings === "none") {
					continue;
				}
				if (adfox.parse(state, b.settings)) {
					continue;
				}
				if (forceClasses) {
					found = false;
					for (j = 0; j < forceClasses.length; j++) {
						if ($(b.ph).closest("." + forceClasses[j]).length > 0) {
							found = true;
							break;
						}
					}
					if (!found) {
						continue;
					}
				}
				if ($(b.ph).closest("div").hasClass("hiddenBanner")) {
					continue;
				}
				if (!b.visible && adfox.parse("scroll", b.settings)) {
					visible = adfox.checkVisible(b.ph);
				}
				if ((!b.displayed || forceClasses) && visible) {
					b.showBanner();
					b.displayed = true;
				}
			}
		}
	};
	this.parse = function (srch, str) {
		return (str.toLowerCase().indexOf(srch.toLowerCase()) != -1);
	};
	this.checkVisible = function (object) {
		var s = adfox.getScroll();
		var c = adfox.getWinSize();
		var p = adfox.getPosition(object);
		return (
			typeof object === "object" &&
			!(typeof jQuery.expr[":"]["really-hidden"] === "function" && $(object).is(":really-hidden")) &&
			s.top + c.h >= p.top &&
			s.left + c.w >= p.left &&
			s.top + c.h < p.top + c.h &&
			s.left + c.w < p.left + c.w
		);
	};
	this.getWinSize = function () {
		var win = window,
			d = document,
			e = d.documentElement,
			g = d.getElementsByTagName("body")[0],
			size = {};
		size.w = win.innerWidth || e.clientWidth || g.clientWidth;
		size.h = win.innerHeight || e.clientHeight || g.clientHeight;
		return size;
	};
	this.getScroll = function () {
		if (typeof pageYOffset !== "undefined") {
			return {"top": pageYOffset, "left": pageXOffset};
		} else {
			var b = document.body,
				d = document.documentElement;
			d = (d.clientHeight) ? d : b;
			return {"top": d.scrollTop, "left": d.scrollLeft};
		}
	};
	this.getPosition = function (object) {
		var pos = {top: 0, left: 0};
		while (object) {
			pos.top += object.offsetTop;
			pos.left += object.offsetLeft;
			object = object.offsetParent;
		}
		return pos;
	};
}

var adfox = new AdFox();

function AdFoxBanner(link, settings) {
	this.pr1;
	this.ph
	this.date;
	this.iframe;
	this.settings = (settings) ? settings : "none";
	this.link = link;
	this.w = "";
	this.h = "";

	this.createBanner = function () {
		this.pr1 = adfox.rnd();
		adfox.banners.push(this);
		if (this.ph == "" || this.ph == null && document.readyState != "complete") {
			document.write('<div id="AdFox_banner_' + this.pr1 + '"><\/div>');
			document.write('<div style="visibility:hidden; position:absolute;"><iframe id="AdFox_iframe_' + this.pr1 + '" width=1 height=1 marginwidth=0 marginheight=0 scrolling=no frameborder=0><\/iframe><\/div>');
		}
		this.link = this.link.replace(/&amp;/g, "&");
		this.ph = document.getElementById("AdFox_banner_" + this.pr1);
		this.iframe = document.getElementById("AdFox_iframe_" + this.pr1);
	};

	this.showBanner = function () {
		this.date = new Date();
		var secParams = puidParams + "&pr=" + adfox.pr + "&pt=b&pd=" + this.date.getDate() + "&pw=" + this.date.getDay() + "&pv=" + this.date.getHours() + "&prr=" + adfox.ref + "&dl=" + adfox.dl + "&pr1=" + this.pr1 + "&phid=AdFox_banner_" + this.pr1;

		var link = this.link + secParams;
		var pr1 = this.pr1;
		var settings = this.settings;

		var timer = function () {
			AdFoxScript(1, pr1, link);
		}
		if (this.ph != null) {
			setTimeout(timer, 100);
		}
	};
}

$(function () {
	$(window).on("resize", function (event) {
		adfox.update(adfox.screen());
	});
	$(window).on("scroll", function (event) {
		adfox.update(adfox.screen(), null, true);
	});
	adfox.update(adfox.screen());
	window.setInterval(function () {adfox.update(adfox.screen(), null, true)}, 1000);
});


// adfox.asyn.code.ver3.js
function AdFox_SetLayerVis(spritename,state){
document.getElementById(spritename).style.visibility=state;
}

function AdFox_Open(AF_id){
AdFox_SetLayerVis('AdFox_DivBaseFlash_'+AF_id, "hidden");
AdFox_SetLayerVis('AdFox_DivOverFlash_'+AF_id, "visible");
}

function AdFox_Close(AF_id){
AdFox_SetLayerVis('AdFox_DivOverFlash_'+AF_id, "hidden");
AdFox_SetLayerVis('AdFox_DivBaseFlash_'+AF_id, "visible");
}

function AdFox_getCodeScript(AF_n,AF_id,AF_src){
var AF_doc;
if(AF_n<10){
	try{
		if(document.all && !window.opera){
			AF_doc = window.frames['AdFox_iframe_'+AF_id].document;
			}else if(document.getElementById){
					AF_doc = document.getElementById('AdFox_iframe_'+AF_id).contentDocument;
					}
		}catch(e){}
	if(AF_doc){
	AF_doc.write('<scr'+'ipt type="text/javascript" src="'+AF_src+'"><\/scr'+'ipt>');
	}else{
		setTimeout('AdFox_getCodeScript('+(++AF_n)+','+AF_id+',"'+AF_src+'");', 100);
		}
		}
}

function adfoxSdvigContent(banID, flashWidth, flashHeight){
	var obj = document.getElementById('adfoxBanner'+banID).style;
	if (flashWidth == '100%') obj.width = flashWidth;
		else obj.width = flashWidth + "px";
	if (flashHeight == '100%') obj.height = flashHeight;
		else obj.height = flashHeight + "px";
}

function adfoxVisibilityFlash(banName, flashWidth, flashHeight){
		var obj = document.getElementById(banName).style;
	if (flashWidth == '100%') obj.width = flashWidth;
		else obj.width = flashWidth + "px";
	if (flashHeight == '100%') obj.height = flashHeight;
		else obj.height = flashHeight + "px";
}

function adfoxStart(banID, FirShowFlNum, constVisFlashFir, sdvigContent, flash1Width, flash1Height, flash2Width, flash2Height){
	if (FirShowFlNum == 1) adfoxVisibilityFlash('adfoxFlash1'+banID, flash1Width, flash1Height);
		else if (FirShowFlNum == 2) {
			adfoxVisibilityFlash('adfoxFlash2'+banID, flash2Width, flash2Height);
			if (constVisFlashFir == 'yes') adfoxVisibilityFlash('adfoxFlash1'+banID, flash1Width, flash1Height);
			if (sdvigContent == 'yes') adfoxSdvigContent(banID, flash2Width, flash2Height);
				else adfoxSdvigContent(banID, flash1Width, flash1Height);
	}
}

function adfoxOpen(banID, constVisFlashFir, sdvigContent, flash2Width, flash2Height){
	var aEventOpenClose = new Image();
	var obj = document.getElementById("aEventOpen"+banID);
	if (obj) aEventOpenClose.src =  obj.title+'&rand='+Math.random()*1000000+'&prb='+Math.random()*1000000;
	adfoxVisibilityFlash('adfoxFlash2'+banID, flash2Width, flash2Height);
	if (constVisFlashFir != 'yes') adfoxVisibilityFlash('adfoxFlash1'+banID, 1, 1);
	if (sdvigContent == 'yes') adfoxSdvigContent(banID, flash2Width, flash2Height);
}


function adfoxClose(banID, constVisFlashFir, sdvigContent, flash1Width, flash1Height){
	var aEventOpenClose = new Image();
	var obj = document.getElementById("aEventClose"+banID);
	if (obj) aEventOpenClose.src =  obj.title+'&rand='+Math.random()*1000000+'&prb='+Math.random()*1000000;
	adfoxVisibilityFlash('adfoxFlash2'+banID, 1, 1);
	if (constVisFlashFir != 'yes') adfoxVisibilityFlash('adfoxFlash1'+banID, flash1Width, flash1Height);
	if (sdvigContent == 'yes') adfoxSdvigContent(banID, flash1Width, flash1Height);
}


// adfox.asyn.code.scroll.js
function AdFox_getWindowSize() {
var winWidth,winHeight;
	if( typeof( window.innerWidth ) == 'number' ) {
		//Non-IE
		winWidth = window.innerWidth;
		winHeight = window.innerHeight;
	} else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
		//IE 6+ in 'standards compliant mode'
		winWidth = document.documentElement.clientWidth;
		winHeight = document.documentElement.clientHeight;
	} else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
		//IE 4 compatible
		winWidth = document.body.clientWidth;
		winHeight = document.body.clientHeight;
	}
	return {"width":winWidth, "height":winHeight};
}

function AdFox_getElementPosition(elemId){
	var elem;

	if (document.getElementById) {
		elem = document.getElementById(elemId);
	}
	else if (document.layers) {
		elem = document.elemId;
	}
	else if (document.all) {
		elem = document.all.elemId;
	}
	var w = elem.offsetWidth;
	var h = elem.offsetHeight;
	var l = 0;
	var t = 0;

	while (elem)
	{
		l += elem.offsetLeft;
		t += elem.offsetTop;
		elem = elem.offsetParent;
	}

	return {"left":l, "top":t, "width":w, "height":h};
}

function AdFox_getBodyScrollTop(){
	return self.pageYOffset || (document.documentElement && document.documentElement.scrollTop) || (document.body && document.body.scrollTop);
}

function AdFox_getBodyScrollLeft(){
	return self.pageXOffset || (document.documentElement && document.documentElement.scrollLeft) || (document.body && document.body.scrollLeft);
}

function AdFox_Scroll(elemId,elemSrc){
var winPos = AdFox_getWindowSize();
var winWidth = winPos.width;
var winHeight = winPos.height;
var scrollY = AdFox_getBodyScrollTop();
var scrollX =  AdFox_getBodyScrollLeft();
var divId = 'AdFox_banner_'+elemId;
var ltwhPos = AdFox_getElementPosition(divId);
var lPos = ltwhPos.left;
var tPos = ltwhPos.top;

if(scrollY+winHeight+5 >= tPos && scrollX+winWidth+5 >= lPos){
	AdFox_getCodeScript(1,elemId,elemSrc);
	}else{
		setTimeout('AdFox_Scroll('+elemId+',"'+elemSrc+'");',100);
	}
}
