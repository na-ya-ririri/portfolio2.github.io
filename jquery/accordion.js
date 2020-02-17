$(function() {

  $('.faqs__list--item').each(function() {
    $(this).on('click', function() {
      $(">.faqs__q", this).stop(true, false).toggleClass('open');
      $(">.faqs-a__wrapper", this).stop(true, false).slideToggle();
    });
  });

  // 連続クリックでの予期しない挙動を「.stop(true, false)」で制御
});