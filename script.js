$(document).on("scroll", function() {
    var pageTopVal = $(document).scrollTop();
    var pageBottomVal = pageTopVal + $(window).height();
    var logos = $(".logo");
  
    for (var i = 0; i < logos.length; i++) {
  
      if ($(logos[i]).position().top < pageBottomVal) {
        $(logos[i]).addClass("visible");
      } else {
        $(logos[i]).removeClass("visible");
      }
    }
  });