$(document).ready(function() {

  var $navButton = $('.cmn-toggle-switch');
  var $navList = $('.navigation__list');
  var $navLink = $('.navigation__list a');
  var navListOpen = 'navigation__list--open';

  function isNavButtonActive(){
    $navButton.hasClass("active") === true ? $navButton.removeClass("active") : $navButton.addClass("active");
  }

  $navButton.on('click', function(event) {
    event.preventDefault();
    $navList.toggleClass(navListOpen);
    isNavButtonActive();
  });

  $navLink.on("click", function() {
    if ($navList.hasClass(navListOpen)) {
      isNavButtonActive();
    }

    $navList.removeClass(navListOpen);
  });

});