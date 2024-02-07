let header = document.getElementById("header")
let menu = document.querySelector("#menu-icon")
let oderList = document.querySelector(".oder-list")

menu.onclick = () => {
    menu.classList.toggle("fa-times")
    oderList.classList.toggle('active')
}
window.onscroll = () => {
    menu.classList.remove("fa-times")
    oderList.classList.remove('active')
}
var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// swiper

var swiper = new Swiper(".coming-container", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
        },
        568: {
            slidesPerView: 3,
        },
        786: {
            slidesPerView: 4,
        },
        968: {
            slidesPerView: 5,
        },
    }
});

swiper.el.addEventListener("mouseenter", function () {
    swiper.autoplay.stop();
});

swiper.el.addEventListener("mouseleave", function () {
    swiper.autoplay.start();
});