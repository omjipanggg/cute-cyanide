$(document).ready(function() {
  $(window).scroll(function() {
    $('.block').each(function() {
      var image = $(this);
      var scrollNow = $(window).scrollTop();
      var speed = image.data('speed');
      image.css({
        top: (scrollNow * speed),
      });
    });
  });
});

