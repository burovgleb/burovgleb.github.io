﻿var doc = (function () {
    var doc = {};
    doc.init = function (initValues) {
        if (!initValues)
            return;
        if (initValues.id)
            doc.id = initValues.id;
    };
    return doc;
})();

var mainPhoto = {
    newWindow: function (mypage, myname, w, h, scroll, pos) {
        if (mypage.indexOf("dark-gallery.aspx") > 0) {
            var str_id = myname.replace("gallery", "");
            var id = parseInt(str_id);
            if (!isNaN(id)) {
                gallery(id);
                return false;
            }
        }

        if (mypage.indexOf("dark-gallery.aspx") > 0 || mypage.indexOf("gall_between.aspx") > 0) {
            w = 980;
            h = 655;
        }
        if (pos == "random") { LeftPosition = (screen.width) ? Math.floor(Math.random() * (screen.width - w)) : 100; TopPosition = (screen.height) ? Math.floor(Math.random() * ((screen.height - h) - 75)) : 100; }
        if (pos == "center") { LeftPosition = (screen.width) ? (screen.width - w) / 2 : 100; TopPosition = (screen.height) ? (screen.height - h) / 2 : 100; }
        else if ((pos != "center" && pos != "random") || pos == null) { LeftPosition = 0; TopPosition = 20 }
        settings = 'width=' + w + ',height=' + h + ',top=' + TopPosition + ',left=' + LeftPosition + ',scrollbars=' + scroll + ',location=yes,directories=no,status=yes,menubar=no,toolbar=no,resizable=no';
        var win1 = window.open(mypage, myname, settings);
        win1.focus();
    }
};

var pager = {
    urls: new Array(),
    goToPage: function (pageNumber) {
        if (pageNumber <= 0 || pageNumber > this.urls.length) {
            alert("Страница №" + pageNumber + " не существует.");
            return;
        }
        location.replace(this.urls[pageNumber - 1]);
    }
};

$(function () {
    /* Pager */
    $("#pageNumber").keypress(function (event) {
        var pagePattern = /\d/;
        if (!pagePattern.test(String.fromCharCode(event.keyCode)) && event.keyCode != 8 && event.keyCode != 13) {
            event.preventDefault();
        }
    });
    var pageNumberDefaultValue = "№";
    $("#pageNumber").val(pageNumberDefaultValue);
    $("#pageNumber").blur(function (event) {
        if ($("#pageNumber").val() == "")
            $("#pageNumber").val(pageNumberDefaultValue);
    });
    $("#pageNumber").click(function (event) {
        if ($("#pageNumber").val() == pageNumberDefaultValue)
            $("#pageNumber").val("");
    });
    $("#goToPage").click(function (event) {
        var pageNumber = $("#pageNumber").val();
        if (pageNumber != pageNumberDefaultValue)
            pager.goToPage(pageNumber);
        event.preventDefault();
    });
    /* */
});

var BodyForWo = "";
var WowindowWidth = "";
var WowindowHeight = "";
var WoNewWindow;
function windowOpener(windowWidth, windowHeight, windowName, windowUri, body, r) {
    //Открывает окно по центру экрана. r=1 - resize. windowOpener(800,600,'wwww','','textsss',1) 
    //Dryagin 5sep2005
    if (r == null) { r = 1; }
    var centerWidth = (window.screen.width - windowWidth) / 2;
    var centerHeight = (window.screen.height - windowHeight) / 2;
    newWindow = window.open(windowUri, windowName, 'fullscreen=0,toolbar=0,location=0,directories=0,status=0,menubar=0,resizable=' + r + ',scrollbars=1,width=' + windowWidth +
',height=' + windowHeight);


    //alert("aaa");
    //   newWindow.moveTo(centerWidth, centerHeight);
    //newWindow.blur();
    //newWindow.focus();
    WowindowWidth = centerWidth;
    WowindowHeight = centerHeight;
    WoNewWindow = newWindow;
    //setTimeout("newWindow.moveTo(WowindowWidth, WowindowHeight)",1);
    if (body != "") { BodyForWo = body; }
    //setTimeout("newWindow.document.write(BodyForWo)",1);}
    setTimeout("windowOpenerNewTable(WoNewWindow)", 100);
    //return newWindow.name;
}
function windowOpenerNewTable(win) {
    win.blur();
    win.focus();
    win.moveTo(WowindowWidth, WowindowHeight);
    if (BodyForWo != "") { win.document.write(BodyForWo); }
}
