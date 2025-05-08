// Слайдер с миниатюрами
const productPage = document.querySelector(".product-page");

if (productPage) {
  createProductProfileSlider (productPage);
}


function createProductProfileSlider (productPage) {

  const swiperMain = productPage.querySelector('.swiper-main');
  const swiperThumbs = productPage.querySelector('.swiper-thumbs');

  let swiper__thumbs = new Swiper(swiperThumbs, {
    spaceBetween: 28,
    slidesPerView: "auto",
    freeMode: true,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    watchOverflow: true,
    initialSlide: 0,
    direction: "vertical",
  });

  let swiper__main = new Swiper(swiperMain, {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    loop: true,
    slidesPerView: 1,
    centeredSlides: true,
    initialSlide: 0,
    thumbs: {
      swiper: swiper__thumbs,
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    }
  });
};