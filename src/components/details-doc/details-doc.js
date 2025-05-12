// Раскрытие только одного "details" в блоке "Документация"
const docDetails = productPage.querySelectorAll(".product-page__details-doc .product-page__details-doc-item");
docDetails.forEach(detailsItem => {
  detailsItem.addEventListener("click", function () {
    docDetails.forEach(d => d !== this ? d.removeAttribute("open") : "null");
  });
});