const offers = document.querySelector(".offers");
if (offers) {

  const swiper = offers.querySelector(".offers__slider");

  new Swiper(swiper, {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    navigation: {
      nextEl: '.offers__nav .swiper-button-next',
      prevEl: '.offers__nav .swiper-button-prev',
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


  const widthTablet = window.matchMedia("(max-width: 1280px)");
  const offersSlides = offers.querySelectorAll(".offers__item");

    if (widthTablet.matches && offersSlides) {
      offersSlides.forEach(offersSlide => {
        const offersSlideContent = offersSlide.querySelector(".offers__item-content");
        const offerImg = offersSlide.querySelector(".offers__item-img");
        const offerDesc = offersSlide.querySelector(".offers__item-desc");
        offersSlideContent.insertBefore(offerImg, offerDesc);
      });
    }

}