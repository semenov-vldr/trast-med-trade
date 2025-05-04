const catalog = document.querySelector(".catalog");

if (catalog) {
  const mobileWidthMediaQuery = window.matchMedia('(max-width: 1280px)')
  const filter = catalog.querySelector(".filter");
  const filterHeading = filter.querySelector(".filter__heading");

  if (mobileWidthMediaQuery.matches) {
    filterHeading.addEventListener("click", () => {
      filterHeading.classList.toggle("active");
      toggleBlockScrollBody();
    });
  }

}