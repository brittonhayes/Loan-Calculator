var kkeys = [],
  konami = "38,38,40,40,37,39,37,39,66,65";

$(document).keydown(function (e) {

  kkeys.push(e.keyCode);

  if (kkeys.toString().indexOf(konami) >= 0) {

    $(document).unbind('keydown', arguments.callee);

    // do something awesome
    $("body").toggleClass("konami"),
    $("body").css({ background: "#4AF626" }),
      $("#hero").toggleClass("bg-terminal"),
      $("#hero").toggleClass("bg-purple"),
      $(".card").toggleClass("bg-terminal"),
      $("#calculate").toggleClass("btn-primary").toggleClass("bg-terminal"),
      $(".results").toggleClass("konami");
  }

});