const header = document.querySelector("header.header");
if (header) {

  const headerNavProd = header.querySelector(".header__nav-prod");
  const headerNavProdList = header.querySelector(".header__nav-prod-list");
  const dialogs = document.querySelectorAll("dialog");


  headerNavProd.addEventListener("click", () => {
    headerNavProd.classList.toggle("active");
    headerNavProdList.classList.toggle("active");
  });

  document.addEventListener("click", (e) => {
    if (!headerNavProdList.contains(e.target) && !headerNavProd.contains(e.target)) {
      headerNavProd.classList.remove("active");
      headerNavProdList.classList.remove("active");
    }
  });

  const burgerMenu = header.querySelector(".header__burger");
  burgerMenu.addEventListener("click", () => {
    burgerMenu.classList.toggle("active");
    toggleBlockScrollBody();
  });

  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    header.classList.toggle("js-scroll", scrollPosition > 0);
  });

}