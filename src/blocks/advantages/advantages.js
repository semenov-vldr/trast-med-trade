const advantages = document.querySelector(".advantages");
if (advantages) {

  const swiper = advantages.querySelector(".advantages__slider");

  new Swiper(swiper, {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    // Откл функционала, если слайдов меньше, чем нужно
    watchOverflow: true,

    // Отступ между слайдами
    spaceBetween: 16,

    // Стартовый слайд
    initialSlide: 0,

    // Ширина экрана
    breakpoints: {
      320: {
        slidesPerView: 1.2,
      },
      480: {
        slidesPerView: 1.5,
      },
      768: {
        slidesPerView: 2.2,
      },

      980: {
        slidesPerView: 3,
      },
    }

  });

}