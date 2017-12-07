//Add a class (active) to the element with class anchor when getting to the top of the page.
// Also the hash url changes when the user stops scrolling.
$(window).on('scroll', function () {
  $('.anchor').each(function (x, el) {
    var elementID = $(el).parent().parent().attr('id'),
      eTop = $('#' + elementID).offset().top,
      elementById = 'a[href="#' + elementID + '"';

    if (eTop - $(window).scrollTop() < 10) {
      var parser = document.createElement('a');
      parser.href = location.href;
      $('.toc').find('.active').removeClass('active');
      $(elementById).addClass('active');
        if(elementID !== window.location.hash.substr(1)) {
          // window.history.pushState("", "", '#' +elementID);
          // return;
          clearTimeout( $.data( this, "scrollCheck" ) );
          $.data( this, "scrollCheck", setTimeout(function() {
             console.log( 'stopped' );
            window.history.pushState("", "", '#' +elementID);
          }, 250) );

        }

    }
  });
});