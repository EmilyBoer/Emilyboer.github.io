$(window).scroll(function() {
    if ($(this).scrollTop() > 200){ // Set position from top to add class
        $('.navbar').addClass("background");
        $('.nav-transition').addClass("scroll-margin");
       
       
    } else {
        $('.navbar').removeClass("background");
        $('.nav-transition').removeClass("scroll-margin");

    }
});



