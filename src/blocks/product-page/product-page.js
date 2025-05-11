// Слайдер на странице товара и табы
const productPage = document.querySelector(".product-page");

if (productPage) {
  createProductProfileSlider (productPage);

  // Работа табов
  const detailsTabs = productPage.querySelectorAll(".product-page__details-tabs .product-page__details-tabs-item");
  const detailsItems = productPage.querySelectorAll(".product-page__details-item");

  detailsTabs.forEach(detailsTab => {
    const dataTabDetails = detailsTab.dataset.details;
    detailsTab.addEventListener("click", () => {
      detailsItems.forEach(detailsItem => {
        const dataItemDetails = detailsItem.dataset.details;
        detailsItem.classList.toggle("hidden", dataTabDetails !== dataItemDetails);
      });
    });
  });


  // Раскрытие только одного "details" в блоке "Документация"
  const docDetails = productPage.querySelectorAll(".product-page__details-doc .product-page__details-doc-item");
  docDetails.forEach(detailsItem => {
    detailsItem.addEventListener("click", function () {
      docDetails.forEach(d => d !== this ? d.removeAttribute("open") : "null");
    });
  });

}


function createProductProfileSlider (productPage) {
  const swiperMain = productPage.querySelector('.swiper-main');
  const swiperThumbs = productPage.querySelector('.swiper-thumbs');

  let swiper__thumbs = new Swiper(swiperThumbs, {
    spaceBetween: 8,
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