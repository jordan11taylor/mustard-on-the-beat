$( document ).ready(function() {
  $("#playButton").click(function() {
    $('#dripper').addClass('drip');

    var delay=1500;
    setTimeout(function() {
      $('#dripper').removeClass('drip');
    }, delay);
  });
});
