//Add a class (active) to the element with class anchor when getting to the top of the page.
// Also the hash url changes when the user stops scrolling.
$(window).on('scroll', function () {
    var anchorElements = $('.anchor');
    anchorElements.each(function (x, el) {

        var elementID = $(el).parent().parent().attr('id'),
            eTop = $('#' + elementID).offset().top,
            elementById = 'a[href="#' + elementID + '"';

        if (eTop - $(window).scrollTop() < 1) {
            var parser = document.createElement('a');
            parser.href = location.href;
            $('.toc').find('.active').removeClass('active');
            $(elementById).addClass('active');
            // changes the hash only when scrolling stops,
            // sort of, sets a timeout for that. No straight
            // way to get that event.
        }

        if (x === anchorElements.length - 1) {
            console.log('last');
            clearTimeout($.data(this, "scrollCheck"));
            $.data(this, "scrollCheck", setTimeout(function () {
                window.history.pushState("", "", '#' + $(el).parent().parent().attr('id'));
            }, 800));
        }
    });
});