$(function() {
  var openBtn = $('.drawer-menu__btn--open');
  var drawerMenu = $('.drawer-menu');
  var drawerLink = $('.drawer-menu__link');
  var closeBtn = $('.drawer-menu__btn--close');
  var overlay = $('.overlay');

  function menuOpen() {
    drawerMenu.addClass('open'); //ドロワーメニューを表示
    overlay.fadeIn();
    closeBtn.fadeIn();
  }
  function menuClose() {
    drawerMenu.removeClass('open'); //ドロワーメニューを非表示
    overlay.fadeOut();
    closeBtn.fadeOut('fast');
  }

  openBtn.on('click', function() {
    menuOpen();
  });
  closeBtn.on('click', function() {
    menuClose();
  });

  //Closeボタン以外(背景)クリックでもドロワーメニューを非表示にさせる
  overlay.on('click', function() {
    menuClose();
  });

  //メニューをクリックしてもドロワーメニューを非表示に
  drawerLink.on('click', function() {
    menuClose('slow');
  });

});