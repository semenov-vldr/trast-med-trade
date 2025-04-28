const directions = document.querySelector(".directions");
if (directions) {

  new Swiper('.directions__slider', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    navigation: {
      nextEl: '.directions__nav .swiper-button-next',
      prevEl: '.directions__nav .swiper-button-prev',
    },

    // Откл функционала, если слайдов меньше, чем нужно
    watchOverflow: true,

    slidesPerView: "auto",

    //centeredSlides: true,

    // Отступ между слайдами
    spaceBetween: 16,

    //loop: true,

    // Стартовый слайд
    initialSlide: 0,

    // Ширина экрана
    breakpoints: {
      320: {
        //slidesPerView: 1.2,
      },
      480: {
        //slidesPerView: 1.5,
      },
      768: {
        //slidesPerView: 2.2,
      },

      1280: {
        //slidesPerView: 3.2,
      },
    }

  });

}