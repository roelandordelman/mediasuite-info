//Add a class (active) to the element with class anchor when getting to the top of the page.
// TODO: update url along with the class
$(window).on('scroll', function () {
  $('.anchor').each(function (x, el) {
    var elementID = $(el).parent().parent().attr('id'),
      eTop = $('#' + elementID).offset().top,
      elementById = 'a[href="#' + elementID + '"';

    if (eTop - $(window).scrollTop() < 10) {
      $('.toc').find('.active').removeClass('active');
      $(elementById).addClass('active');
    }
  });
});
