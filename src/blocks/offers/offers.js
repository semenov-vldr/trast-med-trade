const offers = document.querySelector(".offers");
if (offers) {

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