$( document ).ready(function() {
  $("#playButton").click(function() {
    $('#dripper').addClass('drip');

    var delay=1400;
    setTimeout(function() {
      $('#dripper').removeClass('drip');
    }, delay);
  });
});
