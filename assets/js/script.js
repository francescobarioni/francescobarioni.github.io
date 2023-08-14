// Smooth scrolling for navbar links
$('.nav-link').on('click', function(e) {
    if (this.hash !== '') {
      e.preventDefault();
      const hash = this.hash;
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top
        },
        800 // Adjust scrolling speed here
      );
    }
});
  