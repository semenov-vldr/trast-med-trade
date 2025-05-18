const promotion = document.querySelector(".promotion");
if (promotion) {

  const widthTablet = window.matchMedia("(max-width: 1280px)");
  const promotionItems = promotion.querySelectorAll(".promotion__item");

  if (widthTablet.matches && promotionItems) {
    promotionItems.forEach(promotionItem => {
      const promotionItemContent = promotionItem.querySelector(".promotion__item-content");
      const promotionImg = promotionItem.querySelector(".promotion__item-img");
      const promotionDesc = promotionItem.querySelector(".promotion__item-desc");
      if (promotionItemContent && promotionImg && promotionDesc) {
        promotionItemContent.insertBefore(promotionImg, promotionDesc);
      }
    });
  }
}