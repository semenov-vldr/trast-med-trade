function initializeSwiper(containerClass) {
    const container = document.querySelector(`.${containerClass}`);
    if (!container) {
      console.warn(`Container with class "${containerClass}" not found.`);
      return;
    }
  
    const swiperElement = container.querySelector(`.${containerClass}__slider`);
    if (!swiperElement) {
      console.warn(`Swiper element not found within container "${containerClass}".`);
      return;
    }
  
    const swiperInstance = new Swiper(swiperElement, {
      pagination: {
        el: `.${containerClass} .swiper-pagination`,
        clickable: true,
      },
  
      navigation: {
        nextEl: `.${containerClass}__nav .swiper-button-next`,
        prevEl: `.${containerClass}__nav .swiper-button-prev`,
      },
  
      watchOverflow: true,
      slidesPerView: "auto",
      spaceBetween: 16,
      initialSlide: 0,
    });
  }
  
  // Инициализация слайдеров для всех блоков
  initializeSwiper("offers");
  initializeSwiper("directions");
  initializeSwiper("products");