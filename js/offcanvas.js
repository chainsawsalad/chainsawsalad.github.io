$(document).ready(function() {
  $('[data-toggle=offcanvas]').click(function() {
    $('.row-offcanvas').toggleClass('active');
  });
});

//scroll with the fixed header in mind when using the project navigator
$('#project-nav a').click(function(event) {
    event.preventDefault();

    var hash = $(this).attr('href'),
      $body = $('body');

    if(hash != window.location.hash) {
      window.location.hash = hash;
    }

    $body.scrollTop(
      $(hash).offset().top - $body.attr('data-offset') + 1
    );

});