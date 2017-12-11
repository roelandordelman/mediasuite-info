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
        }
    });
});