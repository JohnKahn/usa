// Slash Graphic Movement
(function() {
  var slash = $('.slash-graphic-slash');
  var image = $('.slash-graphic-image');
  var c = 40;

  var mouse = {
    x: 0,
    y: 0,
  };

  var windowSize = {
    width: 600,
    height: 400,
  };

  var offset = {
    x: 0,
    y: 0,
  };

  function getWindowSize() {
    windowSize.width = Math.max($(window).innerWidth(), 600);
    windowSize.height = Math.max($(window).innerHeight(), 400);
  }

  function updateSlash() {
    var a = mouse.x / windowSize.width * 2 - 1;
    var b = mouse.y / windowSize.height * 2 - 1;
    c = a * 10;
    var d = b * 10;
    offset.x = offset.x * 0.93 + c * (1 - 0.93) + Math.random() * 1e-3;
    offset.y = offset.y * 0.93 + d * (1 - 0.93) + Math.random() * 1e-3;

    slash.css('transform', 'translate(' + offset.x + 'px,' + offset.y + 'px)');
    image.css(
      'transform',
      'translate(' + offset.x * 0.32 + 'px,' + offset.y * 0.32 + 'px)'
    );
  }

  if (slash && image) {
    setInterval(updateSlash, 1000 / c);

    getWindowSize();
    $(window).resize(getWindowSize);

    $(document).on('mousemove', function(e) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });
  }
})();

// Fade-Up Stuff on Page Load
(function() {
  $.Velocity.RegisterEffect('transition.USAIn', {
    defaultDuration: 600,
    calls: [
      [
        {
          opacity: [1, 0],
          rotateX: [0, -14],
          translateZ: [0, 100],
          translateY: [0, 10],
          scale: [1, 0.98],
        },
      ],
    ],
    reset: {
      opacity: 1,
      rotateX: 0,
      translateZ: 0,
      translateY: 0,
      scale: 1,
    },
  });

  $(window).on('load', function() {
    $('.stagger-children > *').addClass('stagger');
    $('.stagger')
      .filter(function() {
        this.getBoundingClientRect().bottom < 0 ||
          this.getBoundingClientRect().top >
            (window.innerHeight || document.documentElement.clientHeight);
      })
      .removeClass('stagger');
    $('.stagger').velocity('transition.USAIn', {
      stagger: 40,
      duration: 1000,
      delay: 0,
      drag: true,
    });
  });
})();

// Theme Color Event
var themeColor = '#212121';
var hoverColor = '#999999';
var hoverBg = 'rgba(158, 158, 158, 0.2)';
function updateThemeClasses() {
  $('.theme-textColor').css('color', themeColor);
  $('.theme-fill').css('fill', themeColor);
  $('.button--themed').css('background-color', themeColor);
}
function hexToRGB(hex, alpha) {
  var r, g, b;
  if (hex.length === 7) {
    r = parseInt(hex.slice(1, 3), 16);
    g = parseInt(hex.slice(3, 5), 16);
    b = parseInt(hex.slice(5, 7), 16);
  } else {
    r = parseInt(hex.slice(1, 2) + hex.slice(1, 2), 16);
    g = parseInt(hex.slice(2, 3) + hex.slice(2, 3), 16);
    b = parseInt(hex.slice(3, 4) + hex.slice(3, 4), 16);
  }

  if (alpha) {
    return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')';
  } else {
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
  }
}
(function() {
  $('.theme-colorHover').on('mouseenter', function() {
    $(this).css('color', themeColor);
  });

  $('.theme-colorHover').on('mouseleave', function() {
    $(this).css('color', hoverColor);
  });

  $('.theme-bgHover').on('mouseenter', function() {
    $(this).css('background-color', hexToRGB(themeColor, '0.5'));
  });

  $('.theme-bgHover').on('mouseleave', function() {
    $(this).css('background-color', hoverBg);
  });
})();
