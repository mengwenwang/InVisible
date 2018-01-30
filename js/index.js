
 if ($('#identifier').val() === 'work') {
     $('nav').addClass('inverseNav')
     $('#logo').attr('src', '../img/logo-black.png')
 }
 $('.owl-carousel').owlCarousel({
    loop:true,
    margin: 0,
    nav:false,
    items: 1,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
})