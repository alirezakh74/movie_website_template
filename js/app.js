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
    // autoplay: true,
    // autoplayTimeout:1000,
    // autoplayHoverPause:false,
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
            loop:true
        },
        200:{
            items:2,
            nav:true,
            loop:true,
            lazyLoadEager: 1,
        },
        400:{
            items:2,
            nav:true,
            loop:true,
            lazyLoadEager: 2,
        },
        600:{
            items:2,
            nav:true,
            loop:true,
            lazyLoadEager: 2,
        },
        1000:{
            items:8,
            nav:true,
            loop:true,
            lazyLoadEager: 2,
        }
    }
});


// show navbar menu on mobile
let menuIcon = document.querySelector(".list-menu-icon");
let menus = document.querySelector(".navbar-menus");

let line1 = document.querySelector(".line-1");
let line2 = document.querySelector(".line-2");
let line3 = document.querySelector(".line-3");

menuIcon.addEventListener("click", () => {

    if(menus.style.transform == "translateX(100%)" || menus.style.transform == "")
    {
        menus.style.transform = "translateX(0%)"; // show menu
        document.getElementsByTagName("body")[0].style.height = "100%";
        document.getElementsByTagName("body")[0].style.overflow = "hidden";

        line2.style.width = "0%";
        line1.style.transform = "translate(0, 11px) rotate(-45deg)";
        line3.style.transform = "translate(0, -11px) rotate(45deg)";
    }
    else if(menus.style.transform == "translateX(0%)")
    {
        menus.style.transform = "translateX(100%)"; // hide menu
        document.getElementsByTagName("body")[0].style.height = "auto";
        document.getElementsByTagName("body")[0].style.overflow = "scroll";

        line2.style.width = "100%";
        line1.style.transform = "translate(0, 0) rotate(0deg)";
        line3.style.transform = "translate(0, 0) rotate(0deg)";
    }

    // if(menus.style.display == "none" || menus.style.display == "")
    // {
    //     // menus.style.display = "block";
    //     // menus.style.right = "0%";
    //     // menus.style.animationName = "move_to_screen";
    //     menus.style.transform = "translateX(0%)";
    //     // deactivate scroll
    //     document.getElementsByTagName("body")[0].style.height = "100%";
    //     document.getElementsByTagName("body")[0].style.overflow = "hidden";
    // }
    // else /* if(menus.style.display == "block")*/{
    //     // menus.style.display = "none";
    //     // menus.style.right = "100%";
    //     // menus.style.animationName = "remove_from_screen";
    //     menus.style.transform = "translateX(100%)";
    //     document.getElementsByTagName("body")[0].style.height = "auto";
    //     document.getElementsByTagName("body")[0].style.overflow = "scroll";
    // }
}); 


window.addEventListener("resize", (event) => {
    // console.log(document.body.clientWidth + ' wide by ' + document.body.clientHeight +' high');
    if(document.body.clientWidth > 800)
    {
        menus.style.transform = "translateX(0%)";
    }
    else{
        menus.style.transform = "translateX(100%)";
        line2.style.width = "100%";
        line1.style.transform = "translate(0, 0) rotate(0deg)";
        line3.style.transform = "translate(0, 0) rotate(0deg)";
    }
})


