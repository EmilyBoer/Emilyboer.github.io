// $(document).ready(function() {

//     $('.inner-image').hover(function() {

//         $('ul').show(1000);

//     }, function() {

//         $('ul').hide(1000);
//     });

//     });

// $(document).ready( function() {

//     $('#skill-group-container-four, #skill-group-container-three, #skill-group-container-two, #skill-group-container').hover( function() {
//         $(this).find('.skill-group').addClass("fade-in")
//         $(this).find('.inner-image').addClass("hover-fade");
//     }, function() {
//         $(this).find('.skill-group').removeClass("fade-in")
//         $(this).find('.inner-image').removeClass("hover-fade");
//          console.log(this);
//     });

$(window).on("load", function() {
  $("#loading").fadeOut(500);
});

$(document).ready(function() {
  $(
    "#skill-group-container-four, #skill-group-container-three, #skill-group-container-two, #skill-group-container"
  ).hover(
    function() {
      $(this)
        .find(".skill-group")
        .addClass("fade-in-title-skills");
      $(this)
        .find(".button-group")
        .addClass("fade-in-button");
      $(this)
        .find(".inner-image")
        .addClass("hover-fade");
    },
    function() {
      $(this)
        .find(".skill-group")
        .removeClass("fade-in-title-skills");
      $(this)
        .find(".button-group")
        .removeClass("fade-in-button");
      $(this)
        .find(".inner-image")
        .removeClass("hover-fade");
      console.log(this);
    }
  );

  // $('').hover( function() {
  //     $(this).find('.skill-group').addClass("fade-in")
  //     $(this).find('.inner-image').addClass("hover-fade");
  // }, function() {
  //     $(this).find('.skill-group').removeClass("fade-in")
  //     $(this).find('.inner-image').removeClass("hover-fade");
  //      console.log(this);
  // });

  $(".menu-btn a, .menu li a").click(function() {
    $(".overlay").fadeToggle("slow", "linear");
    $("span.top-bar").toggleClass("btn-open-two");
    $("span.bottom-bar").toggleClass("btn-open-one");
    $("div.index-title-bundle").toggleClass("index-title-bundle-fade");
  });

  $(".click-to-view-text").click(function() {
    $(".breakout-overlay").fadeIn("slow", "linear");
    $(".menu-btn-breakout").fadeToggle("slow", "linear");
    $("span.top-bar-breakout").toggleClass("btn-open-two-breakout");
    $("span.bottom-bar-breakout").toggleClass("btn-open-one-breakout");
    $(".menu-btn").fadeOut("slow", "linear");
    $(".menu-btn-breakout").fadeIn("slow", "linear");
    $(".nav-bundle-fade").css("background-color", "rgba(0, 0, 0, 0");
  });

  $(".menu").click(function() {
    $(".breakout-overlay").fadeOut("slow", "linear");
    $(".menu-btn").fadeIn("slow", "linear");
    $(".nav-bundle-fade").css("background-color", "rgba(0, 0, 0, .1");
  });

  $("#myModal")
    .on("show", function() {
      $("body").addClass("modal-open");
    })
    .on("hidden", function() {
      $("body").removeClass("modal-open");
    });

  function arrayMe(string) {
    // For all matching elements
    $(string).each(function() {
      // Get contents of string
      var myStr = $(this).html();

      // Split myStr into an array of characters
      myStr = myStr.split("");

      // Build an html string of characters wrapped in  tags with classes
      var myContents = "";
      for (var i = 0, len = myStr.length; i < len; i++) {
        myContents +=
          '<span class="single-char char-' + i + '">' + myStr[i] + "</span>";
      }

      // Replace original string with constructed html string
      $(this).html(myContents);
    });
  }

  // Calling arrayMe on page load, on class Emily bio
  $("document").ready(function() {
    var myStringType = $(".name");
    arrayMe(myStringType);
  });

  AOS.init({
    duration: 600,
    easing: "ease-out-back",
  });

  // })

  // AOS.init({
  //   offset: 200,
  //   duration: 600,
  //   easing: 'ease-in-sine',
  //   delay: 100,
  // });
});
