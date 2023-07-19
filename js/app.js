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