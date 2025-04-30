const products = document.querySelector(".products");
if (products) {

  const productSwiper = products.querySelector(".products__slider");
  const swiperInstance = productSwiper?.swiper;
  const productSlides = products.querySelectorAll(".products__item");
  const productsTabs = products.querySelectorAll(".products__tabs-list .products__tabs-item");

  productsTabs.forEach(productsTab => {
    productsTab.addEventListener("click", () => {
      const dataTabCat = productsTab.dataset.category;

      productsTabs.forEach(tab => tab.classList.toggle("active", tab === productsTab));

      productSlides.forEach(productSlide => {
        const dataSlideCat = productSlide.dataset.category;
        const isActiveSlide = dataTabCat !== dataSlideCat && dataTabCat !== "all";
        productSlide.classList.toggle("hidden", isActiveSlide);
      });
      swiperInstance?.update();
    });
  });

}