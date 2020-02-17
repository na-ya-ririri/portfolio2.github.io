// -------スムーススクロール-------------------------------
// ドロワーメニュー
$('.drawer-menu__link').on('click',function() {
  var navHeight = 68;
  var id = $(this).attr('href');
  console.log(id)
  var position = $(id).offset().top - navHeight + 1;
  console.log(position)
  $('html, body').animate({
    'scrollTop':position
  }, 500); 
});
// news上にはみ出している分の調整
$('.t-minus-n').on('click',function() {
  var navHeight = 148;
  var id = $(this).attr('href');
  console.log(id)
  var position = $(id).offset().top - navHeight + 1;
  console.log(position)
  $('html, body').animate({
    'scrollTop':position
  }, 500); 
});
// comments上にはみ出している分の調整
$('.t-minus-c').on('click',function() {
  var navHeight = 128;
  var id = $(this).attr('href');
  console.log(id)
  var position = $(id).offset().top - navHeight + 1;
  console.log(position)
  $('html, body').animate({
    'scrollTop':position
  }, 500); 
});

// お問い合わせボタン
$('.top__contact-btn').on('click',function() {
  var navHeight = 68;
  var id = $(this).attr('href');
  console.log(id)
  var position = $(id).offset().top - navHeight + 1;
  console.log(position)
  $('html, body').animate({
    'scrollTop':position
  }, 500); 
});

// TOPリンクボタン
$('.footer__top-link').on('click',function() {
  var navHeight = 68;
  var id = $(this).attr('href');
  console.log(id)
  var position = $(id).offset().top - navHeight + 1;
  console.log(position)
  $('html, body').animate({
    'scrollTop':position
  }, 500); 
});
// -------スムーススクロール END---------------------------

// -------トップへ戻るリンクボタンをふわっと表示-----------
$(function() {
  var topFloat = $('.footer__top-link');

  $(window).on('scroll' ,function() {
    if($(this).scrollTop() > 300) {
      topFloat.fadeIn();
    } else {
      topFloat.fadeOut('fast');
    }
  });
});
// -------トップへ戻るリンクボタン END---------------------