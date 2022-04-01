/* global $ */
$(function () {

  let navBar = '#left-navigation';
  $('.open-nav-mob').click(function () {
    console.log($(navBar).attr('active-nav'));
    if ($(navBar).attr('active-nav') === 'no') {
      $(navBar).animate({
        left: 0
      });
      $(navBar).attr('active-nav', 'yes')
      $('body, html').css('overflow', 'hidden')

    } else {
      $(navBar).animate({
        left: '-1000px'
      });
      $(navBar).attr('active-nav', 'no')
      $('body, html').css('overflow', 'auto')
    }

  })

  for (let i = 1; i <= 8; i++) {
    let time = i + 100,
        selector = '.l-' + i
    $(selector).animate({
      'width': $(selector).attr('data-width'),
    }, 1000 + time)
  }

  $('.owl-carousel').owlCarousel({
    loop: true,
    dots: false,
    nav: false,
    responsive : {
      0: { items: 1 },
      480: { items: 1 },
      768: { items: 1 }
    }
  });


  $('*[goto]').click(function () {
    window.location.href = $(this).attr('goto')
  })


  $(document).ready(function() {

    (function ($) {
      $('.tab ul.tabs li a').click(function (g) {
        var tab = $(this).closest('.tab'),
          index = $(this).closest('li').index();

        tab.find('ul.tabs > li').removeClass('current');
        $(this).closest('li').addClass('current');

        tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
        tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();

        g.preventDefault();
      } );
    })(jQuery);
    $('.tabs_item img').hover(function () {
      $(this).text('Projects');
    });
    (function ($) {
      $.fn.countTo = function (options) {
        options = options || {};

        return $(this).each(function () {
          // set options for current element
          var settings = $.extend({}, $.fn.countTo.defaults, {
            from:            $(this).data('from'),
            to:              $(this).data('to'),
            speed:           $(this).data('speed'),
            refreshInterval: $(this).data('refresh-interval'),
            decimals:        $(this).data('decimals')
          }, options);

          // how many times to update the value, and how much to increment the value on each update
          var loops = Math.ceil(settings.speed / settings.refreshInterval),
            increment = (settings.to - settings.from) / loops;

          // references & variables that will change with each update
          var self = this,
            $self = $(this),
            loopCount = 0,
            value = settings.from,
            data = $self.data('countTo') || {};

          $self.data('countTo', data);

          // if an existing interval can be found, clear it first
          if (data.interval) {
            clearInterval(data.interval);
          }
          data.interval = setInterval(updateTimer, settings.refreshInterval);

          // initialize the element with the starting value
          render(value);

          function updateTimer() {
            value += increment;
            loopCount++;

            render(value);

            if (typeof(settings.onUpdate) == 'function') {
              settings.onUpdate.call(self, value);
            }

            if (loopCount >= loops) {
              // remove the interval
              $self.removeData('countTo');
              clearInterval(data.interval);
              value = settings.to;

              if (typeof(settings.onComplete) == 'function') {
                settings.onComplete.call(self, value);
              }
            }
          }

          function render(value) {
            var formattedValue = settings.formatter.call(self, value, settings);
            $self.html(formattedValue);
          }
        });
      };

      $.fn.countTo.defaults = {
        from: 0,               // the number the element should start at
        to: 0,                 // the number the element should end at
        speed: 500,           // how long it should take to count between the target numbers
        refreshInterval: 100,  // how often the element should be updated
        decimals: 0,           // the number of decimal places to show
        formatter: formatter,  // handler for formatting the value before rendering
        onUpdate: null,        // callback method for every time the element is updated
        onComplete: null       // callback method for when the element finishes updating
      };

      function formatter(value, settings) {
        return value.toFixed(settings.decimals);
      }
    }(jQuery));

    jQuery(function ($) {
      // custom formatting example
      $('#count-number').data('countToOptions', {
        formatter: function (value, options) {
          return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
        }
      });

      // start all the timers
      $('.timer').each(count);

      function count(options) {
        var $this = $(this);
        options = $.extend({}, options || {}, $this.data('countToOptions') || {});
        $this.countTo(options);
      }
    });
    setTimeout(function(){
      $('body').addClass('loaded');
      $('h1').css('color','#222222');
    }, 3000);



  });



  $('*[open-model]').click(function() {
    let ope = $(this).attr('open-model');
    console.log(ope)
    $(ope + ' .overlay').css('opacity', '1');
    $(ope).css('animation', 'scaleIn .39s forwards')
  })
  $('*[close-model]').click(function() {
    let close = $(this).attr('close-model');
    $(close + ' .overlay').css('opacity', '0');
    $(close).css('animation', 'scaleOut .39s forwards')
  })

})


$('.el').particleground({
  density: 5000,
  proximity: 100,
  parallex: true,
  maxSpeedX: .3,
  dotColor: '#777',
  lineColor: '#777'
});


let titleHeading = new Typed('.title-first', {
  strings: ['Hi,'],
  smartBackspace:true,
  typeSpeed: 30,
  fadeOut: true,
  showCursor: false,
  onComplete: () => {
    let titleName = new Typed('.title-name', {
      strings: ["I'm <span>Abdulrahman Saber</span>,"],
      smartBackspace:true,
      typeSpeed: 30,
      fadeOut: true,
      showCursor: false,
      onComplete: () => {
        let titleJob = new Typed('.title-job', {
          strings: ['Full Stack Web Developer.'],
          smartBackspace: true,
          typeSpeed: 30,
          fadeOut: true,
          showCursor: false,

        });
      }
    });
  }
});


