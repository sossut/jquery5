$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").click(function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollLeft: $(hash).offset().left
        }, 800, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });

  $(window).on('mousemove', function(e) {
      if (e.pageY < 100) {
          $('nav').fadeIn();
          $('nav').css('visibility', 'visible');
      } else {
        $('nav').fadeOut();
      }
  })