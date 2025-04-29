const products = document.querySelector(".products");
if (products) {

  const productsTabs = products.querySelectorAll(".products__tabs-list .products__tabs-item");
  productsTabs.forEach(productsTab => {
    productsTab.addEventListener("click", () => {
      productsTabs.forEach(tab => tab.classList.toggle("active", tab === productsTab));
    });
  });

}