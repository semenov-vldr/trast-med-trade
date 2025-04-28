const partners = document.querySelector(".partners");
if (partners) {

  const swiper = partners.querySelector(".partners__slider");

    let partnersSwiper = new Swiper(swiper, {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },

      // Откл функционала, если слайдов меньше, чем нужно
      watchOverflow: true,

      slidesPerView: "auto",

      // Отступ между слайдами
      spaceBetween: 16,

      // Стартовый слайд
      initialSlide: 0,
    });


    function checkScreen() {
      const mediaQuery = window.matchMedia("(min-width: 1280px)").matches;
      if (mediaQuery) {
        partnersSwiper.destroy(true, true);
      } else {
        partnersSwiper.init();
      }
    }

  checkScreen();
  //window.addEventListener("resize", checkScreen);
}