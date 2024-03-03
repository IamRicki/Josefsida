
 /* jQuery Pre loader
  -----------------------------------------------*/
$(window).load(function(){
    $('.preloader').fadeOut(1000); // set duration in brackets    
});

 /* Scroll ska snapa till nästa sektion
  ----------------------------------------------- */

  $(document).ready(function() {
    var lastScrollTop = 0; // track the last scroll position
    var isScrolling = false; // flag to indicate if scrolling is in progress
    var debounceTimer;

    $(window).scroll(function() {
        if (debounceTimer) {
            clearTimeout(debounceTimer); // Clear the timer so it doesn't end
        }

        debounceTimer = setTimeout(function() { // Set a new timer
            var st = $(window).scrollTop();
            var homeHeight = $('#home').height();

            // Determine scroll direction
            if (st > lastScrollTop) {
                // Scrolling down
                if (st < homeHeight && !isScrolling) {
                    // If we're in the home section and not already scrolling, snap to the next section
                    isScrolling = true; // prevent further scrolling actions while we animate
                    $('html, body').animate({ scrollTop: homeHeight }, 500, function() {
                        isScrolling = false; // reset scrolling flag after animation
                    });
                }
            } else {
                // Scrolling up
                if (st > 0 && st < homeHeight && !isScrolling) {
                    // If we're below the home section top and not already scrolling, snap back to the top
                    isScrolling = true; // prevent further scrolling actions while we animate
                    $('html, body').animate({ scrollTop: 0 }, 500, function() {
                        isScrolling = false; // reset scrolling flag after animation
                    });
                }
            }
            lastScrollTop = st <= 0 ? 0 : st; // Update lastScrollTop, but never to less than 0
        }, 50); // Delay handling scroll event to avoid too many calls
    });
});



$(document).ready(function() {


   /* Back top
  -----------------------------------------------*/
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
        $('.go-top').fadeIn(200);
        } else {
          $('.go-top').fadeOut(200);
        }
        });   
        // Animate the scroll to top
      $('.go-top').click(function(event) {
        event.preventDefault();
      $('html, body').animate({scrollTop: 0}, 300);
      })
      

  /* wow
  -------------------------------*/
  new WOW({ mobile: false }).init();

  });

  $(document).ready(function() {
    // Smidig rullning när en länk med klassen 'smoothScroll' klickas på
    $('.smoothScroll').on('click', function(event) {
        if (this.hash !== '') {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    });
});
