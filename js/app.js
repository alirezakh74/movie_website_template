// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     direction: 'vertical',
//     loop: true,

//     // If we need pagination
//     pagination: {
//         el: '.swiper-pagination',
//     },

//     // Navigation arrows
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },

//     // And if we need scrollbar
//     scrollbar: {
//         el: '.swiper-scrollbar',
//     },
// });

const swiper = new Swiper(".swiper", {
    // mousewheel: {
    //     invert: true,
    // },
    keyboard: true,
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 1300,
    autoplay:
    {
        enabled: true,
        delay: 2000,
    },
    loop: true,
    preloadImages: false,
    lazy: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    /*
    if down scrollbar be active and in html 
    the element to it doesnot exit
    or be commented
    autoplay is not working
    */

    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },
});

// swiper.autoplay.start();

// var swiper = new Swiper('.swiper', {
//     speed: 1000,
//     direction: 'horizontal',
//     navigation:
//     {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
//     pagination:
//     {
//         el: '.swiper-pagination',
//     },
//     zoom: true,
//     keyboard:
//     {
//         enabled: true,
//         onlyInViewport: false,
//     },
//     mousewheel:
//     {
//         invert: true,
//     },
//     autoplay:
//     {
//         delay: 2000,
//     },
//     loop: true,
// });

$('.owl-carousel').owlCarousel({
    rtl:true,
    dots: false,
    loop:true,
    margin:10,
    width:100,
    nav:true,
    lazyLoad: true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true,
            loop:false
        },
        100:{
            items:1,
            nav:true,
            loop:false
        },
        200:{
            items:2,
            nav:true,
            loop:false
        },
        400:{
            items:2,
            nav:true,
            loop:false
        },
        600:{
            items:2,
            nav:true,
            loop:false
        },
        1000:{
            items:8,
            nav:true,
            loop:false
        }
    }
});