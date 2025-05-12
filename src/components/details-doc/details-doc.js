// Раскрытие только одного "details" в блоке "Документация"
const docDetails = document.querySelectorAll(".details-doc");
if (docDetails) {
  docDetails.forEach(detailsItem => {
    detailsItem.addEventListener("click", function () {
      docDetails.forEach(d => d !== this ? d.removeAttribute("open") : "null");
    });
  });
}
