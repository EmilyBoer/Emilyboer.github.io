$(window).scroll(function() {
    if ($(this).scrollTop() > 200){ // Set position from top to add class
        $('.navbar').addClass("background");
        $('.nav-transition').addClass("scroll-margin");
       
       
    } else {
        $('.navbar').removeClass("background");
        $('.nav-transition').removeClass("scroll-margin");

    }
});

$(document).ready(function(){

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
     nav: true,
     navText: ["<img src='chevron-left.png'>","<img src='chevron-right.png'>"],
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:1,
            nav:true,
            loop:true
        }
    }
})

});