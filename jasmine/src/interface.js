$(function() {

  var matt = new Matt();

  $('#random-phrase').click(function(){
    matt.selector();
    $('#message').text(matt.selector());
  });

  $('#love-matt').click(function(){
    matt.love();
    $('#love').text(matt.love());
    // $('#love').css("font-size", "102%");
  });

  function resizeText(multiplier) {
    if (document.body.style.fontSize === "") {
      document.body.style.fontSize = "1.0em";
    }
    document.body.style.fontSize = parseFloat(document.body.style.fontSize) + (multiplier * 0.2) + "em";
  }
});
