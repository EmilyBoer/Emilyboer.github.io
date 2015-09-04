$(window).scroll(function() {
    if ($(this).scrollTop() > 200){ // Set position from top to add class
        $('.navbar').addClass("background");
    } else {
        $('.navbar').removeClass("background");
    }
});

