$(window).scroll(function () {
  if ($(this).scrollTop() > 50) {
    $('#dynamic').addClass('bg-change');
  } else {
    $('#dynamic').removeClass('bg-change');
  }
});