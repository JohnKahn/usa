(function() {
  var slick;
  
  // Register Slick
  (function() {
    $('.home-carousel').slick({
      arrows: false,
      dots: true,
      fade: true,
      speed: 500,
      responsive: [
        {
          breakpoint: 740,
          settings: {
            fade: false,
          },
        },
      ],
    });

    slick = $('.home-carousel').slick('getSlick');
  })();

  // Theme Color
  (function() {
    var slick = $('.home-carousel').slick('getSlick');
    themeColor = $(slick.$slides[slick.currentSlide]).attr('data-color');
    $('.theme-colorHover').css('color', hoverColor);
    updateThemeClasses();

    $('.home-carousel').on('beforeChange', function(e, s, c, next) {
      themeColor = $(slick.$slides[next]).attr('data-color');

      var nextId = $(slick.$slides[next]).attr('data-id');

      $('.slash-graphic-slide[data-id=' + nextId + ']').addClass('active');
      $('.slash-graphic-slide[data-id!=' + nextId + ']').removeClass('active');

      updateThemeClasses();
    });
  })();

  // Slash Graphic <-> Slick Integration
  (function() {
    $('.slash-graphic').on('click', function() {
      slick.slickNext();
    });
  })();
})();
