$('.handle, li').on('click', function() {
  $('nav ul').toggleClass('showing');
});

$(".smooth-link").on('click', function(event) {
  if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
        scrollTop: $(hash).offset().top - 115
    }, 800, 'swing', function(){
      window.location.hash = hash;
    });
  }
});