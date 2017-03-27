﻿(function () {
    var poll = new function () {
        var self = this;
        var submit = function (e) {
            var form = this.related_form;
            var isAnyValueSelected = false;
            $(form).find('input[name="Answers"]').each(function () {
                if (!this.checked) return;
                isAnyValueSelected = true;
                return false;
            });
            if (isAnyValueSelected) {
                var leftPosition = (screen.width) ? (screen.width - 300) / 2 : 100;
                var topPosition = (screen.height) ? (screen.height - 250) / 2 : 100;
                var settings = 'width=300,height=250,top=' + topPosition + ',left=' + leftPosition + ',scrollbars=0,location=0,directories=0,status=1,menubar=0,toolbar=0,resizable=0';
                var opened = window.open('', '_blank', settings, false);
                var redirectUrlOnCloseField = $(form).find('#RedirectUrlOnClose');
                if (redirectUrlOnCloseField.length > 0
                    && redirectUrlOnCloseField.val() != '')
                {
                    var timer = setInterval(function () {
                        if (opened.closed) {
                            clearInterval(timer);
                            window.location.assign(redirectUrlOnCloseField.val());
                        }
                    }, 500);
                }
                $.ajax({
                    async: false,
                    type: "POST",
                    url: form.action,
                    data: $(form).serialize(),
                    success: function (data) {
                        opened.document.write('<!DOCTYPE HTML><html><head><title>Голосование</title><link rel="Shortcut Icon" href="http://www.kommersant.ru/favicon.ico" /></head><body style="margin: 0px;" bgcolor="#e6f0f5">' + data + '</body></html>');
                    },
                    dataType: 'html'
                });
            }
            e.preventDefault();
        };
        var parseContainerOnConfirm = function (container, data, clickMethod) {
            $(container).empty();
            $(container).append(data);
            var form = container.find('form')[0];
            if (!form)
                return;
            $(container).find(".poll_submit").each(function () {
                this.related_form = form;
                this.related_container = container;
                $(this).click(clickMethod);
            });
        };
        var confirm = function (e) {
            e.preventDefault();
            var form = this.related_form;
            var container = this.related_container;
            $.post(form.action, $(form).serialize(), function (data) {
                parseContainerOnConfirm(container, data, confirm);
            });
        };
        var specifiedSubmit = function (e) {
            e.preventDefault();
            var form = this.related_form;
            var container = this.related_container;
            var isAnyValueSelected = false;
            $(form).find('input[name="Answers"]').each(function () {
                if (!this.checked) return;
                isAnyValueSelected = true;
                return false;
            });
            if (!isAnyValueSelected)
                return;
            $.post(form.action, $(form).serialize(), function (data) {
                parseContainerOnConfirm(container, data, confirm);
            });
        };
        var bindSubmit = function (container, form) {
            $(container).find(".poll_submit").each(function () {
                this.related_form = form;
                this.related_container = container;
                if ($(container).hasClass('poll_specified'))
                    $(this).click(specifiedSubmit);
                else
                    $(this).click(submit);
            });
        };
        var pastePixel = function (container) {
            var input = $(container).find('.pixel_container input[name="pixel"]')[0];
            if (!input || input.value == '' || input.value == ' ')
                return;
            if (typeof (pr) == 'undefined') {
                var pr = Math.floor(Math.random() * 1000000);
            }
            if (navigator.userAgent.indexOf('IE') != -1)
                $(input).parent().append('<div width="0px" height="0px" style="z-index:12345678; position:absolute; visibility: hidden;"><img src="' + input.value + '&amp;prrrr=' + pr + '" border="0" width="0" height="0" alt="" /></div>');
            else
                $(input).parent().append('<div width="0px" height="0px" style="z-index:12345678; position:absolute; visibility: hidden;"><iframe src="' + input.value + '&amp;prrrr=' + pr + '" frameBorder="0" width="0" height="0" marginWidth="0" marginHeight="0" scrolling="no" style="border: 0px; margin: 0px; padding: 0px;"></iframe></div>');
        };
        var pasteAdv = function (container) {
            var replacer = function replacer(str, p1, offset, s) {
                return Math.floor(Math.random() * 1000000);
            };
            var inputAdvImg = $(container).find('.adv_container input[name="advImg"]')[0];
            var inputAdvLink = $(container).find('.adv_container input[name="advLink"]')[0];
            if (!inputAdvImg || inputAdvImg.value == '' || inputAdvImg.value == ' ' || !inputAdvLink || inputAdvLink.value == '' || inputAdvLink.value == ' ')
                return;
            if (typeof (pr) == 'undefined') {
                var pr = Math.floor(Math.random() * 1000000);
            }
            $(inputAdvImg).parent().addClass('adv3-150pxx30px').append('<a href="' + inputAdvLink.value.replace(/\[random\]/gi, replacer) + '" target="_blank"><img src="' + inputAdvImg.value.replace(/\[random\]/gi, replacer) + '" alt="Реклама" style="width: 150px; height: 30px;"></a>');
        };
        this.parseContainer = function (container) {
            var form = container.find('form')[0];
            if (!form)
                return;
            bindSubmit(container, form);
            pastePixel(container);
            pasteAdv(container);
        };
    };

    $(function () {
        $(".poll.lazyloading").each(function () {
            var container = $(this);
            var inputs = container.children('input[type=hidden]');
            if (!inputs.length) return;
            var input = inputs[Math.floor(Math.random() * inputs.length)];
            var currentDate = new Date();
            container.load(input.value + '?nocache=' + currentDate.getTime(), function () {
                $('a', container).each(function () {
                    var href = $(this).attr('href');
                    href = href.replace(/\[random\]/gi, function (str, p1, offset, s) {
                        return Math.floor(Math.random() * 1000000);
                    });
                    $(this).attr('href', href);
                });
                poll.parseContainer(container);
            });
        });
        $(".document_vote").each(function () {
            var container = $(this);
            poll.parseContainer(container);
        });
    });
})();
/*
if(window.location.pathname == "/doc/1757269" || window.location.pathname == "/gallery/2359494" || window.location.pathname == "/doc/1412590") {
   window.location = "/error";
}
*/
if (window.location.pathname == "/doc/1757269" || window.location.pathname == "/doc/1412590") {
    window.location = "/error";
}