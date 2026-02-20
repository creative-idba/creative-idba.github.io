//SCROLL
$(document)
  .ready('.page-scroll')
  .on('click', 'li', function (e) {
    var destination = $(this).attr('href');
    // eslint-disable-next-line no-undef
    var elemenDestination = $(destination);

    $('html,body').animate(
      {
        scrollTop: elemenDestination.offset().top - 65,
      },
      800
    );
    e.preventDefault();
  });
