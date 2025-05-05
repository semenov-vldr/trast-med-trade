const partners = document.querySelector(".partners");
if (partners) {
  const swiper = partners.querySelector(".partners__slider");
  let partnersSwiper = new Swiper(swiper, {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    watchOverflow: true,
    slidesPerView: "auto",
    spaceBetween: 16,
    initialSlide: 0,
  });

  function checkScreen() {
    const mediaQuery = window.matchMedia("(min-width: 1280px)").matches;
    mediaQuery ? partnersSwiper.destroy(true, true) : partnersSwiper.init();
  }
  checkScreen();
}