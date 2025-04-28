const products = document.querySelector(".products");
if (products) {

  const productsTabs = products.querySelectorAll(".products__tabs-list .products__tabs-item");
  productsTabs.forEach(productsTab => {
    productsTab.addEventListener("click", () => {
      productsTabs.forEach(tab => tab.classList.toggle("active", tab === productsTab));
    });
  });



  const swiper = products.querySelector(".products__slider");

  new Swiper(swiper, {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    navigation: {
      nextEl: '.products__nav .swiper-button-next',
      prevEl: '.products__nav .swiper-button-prev',
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