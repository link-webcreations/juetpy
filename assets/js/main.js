/*  ===== Main scripts =====================================================
    Author:
    Yves ANDOLFATTO
  =========================================================================== */
// NOTICE!! DO NOT USE ANY OF THIS JAVASCRIPT
// IT'S ALL JUST JUNK FOR OUR DOCS!
// ++++++++++++++++++++++++++++++++++++++++++

!function ($) {
  $(function(){

    // back to top
    setTimeout(function () {
      $('.top').affix({
        offset: {
          top: function () { return $window.width() <= 980 ? 290 : 210 }
        , bottom: 270
        }
      })
    }, 100)

    setTimeout(function () {
      $('.to-top').affix()
    }, 100)

  })
}(window.jQuery)
