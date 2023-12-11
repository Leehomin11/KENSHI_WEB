$(function () {
  $(document).on("scroll", function () {
    if ($(window).scrollTop() == 0 || $(window).scrollTop() <= 30) {
      $("#header").removeClass("active");
      $("#header").addClass("deactive");
    }
  });
});
$(function () {
  $(document).on("scroll", function () {
    if ($(window).scrollTop() > 35) {
      $("#header").removeClass("deactive");
      $("#header").addClass("active");
    }
  });
});
$(function () {
  $(document).on("scroll", function () {
    if ($(window).scrollTop() >= 1650) {
      $("#header").removeClass("active");
      $("#header").addClass("deactive");
    }
  });
});
