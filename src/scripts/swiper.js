// const swiper = new Swiper(".swiper", {
    // Optional parameters
    //   direction: 'vertical',
    //   loop: true,
    //   // If we need pagination
    //   pagination: {
    //     el: '.swiper-pagination',
    //   },
    //   // Navigation arrows
    //   navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    //   },
    //   // And if we need scrollbar
    //   scrollbar: {
    //     el: '.swiper-scrollbar',
    //   },
// });

const sellersSwiper = new Swiper(".sellers-swiper", {
    slidesPerView: 1,
    // slidesPerGroup:4,
    spaceBetween:30,
    navigation: {
        nextEl: ".sellers .swiper-custom-angle-next",
        prevEl: ".sellers .swiper-custom-angle-prev",
    },
    breakpoints: {
        // when window width is >= 320px
        640: {
            //   width: 640,
            slidesPerView: 2,
        },
        // when window width is >= 768px
        768: {
            //   width: 768,
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 4,
        },
      }
});
const categoriesSwiper = new Swiper(".categories-swiper", {
    slidesPerView: 1,
    // slidesPerGroup:4,
    navigation: {
        nextEl: ".categories .swiper-custom-angle-next",
        prevEl: ".categories .swiper-custom-angle-prev",
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
        },
        1280: {
            slidesPerView: 3,
        },
    },
    spaceBetween: 60,
});

const accessoriesSwiper = new Swiper(".accessories-swiper", {
    slidesPerView: 1,
    // slidesPerGroup:4,
    spaceBetween:30,
    navigation: {
        nextEl: ".accessories .swiper-custom-angle-next",
        prevEl: ".accessories .swiper-custom-angle-prev",
    },
    breakpoints: {
        // when window width is >= 320px
        640: {
            //   width: 640,
            slidesPerView: 2,
        },
        // when window width is >= 768px
        768: {
            //   width: 768,
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 4,
        },
      }
});

const gamesSwiper = new Swiper(".games-swiper", {
    slidesPerView: 1,
    // slidesPerGroup:4,
    spaceBetween:30,
    navigation: {
        nextEl: ".games .swiper-custom-angle-next",
        prevEl: ".games .swiper-custom-angle-prev",
    },
    breakpoints: {
        // when window width is >= 320px
        640: {
            //   width: 640,
            slidesPerView: 2,
        },
        // when window width is >= 768px
        768: {
            //   width: 768,
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 4,
        },
      }
});