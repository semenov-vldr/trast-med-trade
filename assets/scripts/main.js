"use strict";

var html = document.querySelector('html');
var classBlockScroll = "js-no-scroll";
function blockScrollBody() {
  if (!html.classList.contains(classBlockScroll)) {
    html.classList.add(classBlockScroll);
  }
}
;
function unblockScrollBody() {
  if (html.classList.contains(classBlockScroll)) {
    html.classList.remove(classBlockScroll);
  }
}
;
function toggleBlockScrollBody() {
  if (html.classList.contains(classBlockScroll)) {
    html.classList.remove(classBlockScroll);
  } else {
    html.classList.add(classBlockScroll);
  }
}
;
"use strict";
"use strict";

function initializeSwiper(containerClass) {
  var container = document.querySelector(".".concat(containerClass));
  if (!container) {
    console.warn("Container with class \"".concat(containerClass, "\" not found."));
    return;
  }
  var swiperElement = container.querySelector(".".concat(containerClass, "__slider"));
  if (!swiperElement) {
    console.warn("Swiper element not found within container \"".concat(containerClass, "\"."));
    return;
  }
  var swiperInstance = new Swiper(swiperElement, {
    pagination: {
      el: ".".concat(containerClass, " .swiper-pagination"),
      clickable: true
    },
    navigation: {
      nextEl: ".".concat(containerClass, "__nav .swiper-button-next"),
      prevEl: ".".concat(containerClass, "__nav .swiper-button-prev")
    },
    watchOverflow: true,
    slidesPerView: "auto",
    spaceBetween: 16,
    initialSlide: 0
  });
}

// Инициализация слайдеров для всех блоков
initializeSwiper("offers");
initializeSwiper("directions");
initializeSwiper("products");
"use strict";

var images = document.querySelectorAll("img");
if (images) {
  images.forEach(function (img) {
    return img.setAttribute("loading", "lazy");
  });
}
"use strict";

var advantages = document.querySelector(".advantages");
if (advantages) {
  var swiper = advantages.querySelector(".advantages__slider");
  new Swiper(swiper, {
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    // Откл функционала, если слайдов меньше, чем нужно
    watchOverflow: true,
    // Отступ между слайдами
    spaceBetween: 16,
    // Стартовый слайд
    initialSlide: 0,
    // Ширина экрана
    breakpoints: {
      320: {
        slidesPerView: 1.2
      },
      480: {
        slidesPerView: 1.5
      },
      768: {
        slidesPerView: 2.2
      },
      980: {
        slidesPerView: 3
      }
    }
  });
}
"use strict";

var header = document.querySelector("header.header");
if (header) {
  var headerNavProd = header.querySelector(".header__nav-prod");
  var headerNavProdList = header.querySelector(".header__nav-prod-list");
  headerNavProd.addEventListener("click", function () {
    headerNavProd.classList.toggle("active");
    headerNavProdList.classList.toggle("active");
  });
  document.addEventListener("click", function (e) {
    if (!headerNavProdList.contains(e.target) && !headerNavProd.contains(e.target)) {
      headerNavProd.classList.remove("active");
      headerNavProdList.classList.remove("active");
    }
  });
  var burgerMenu = header.querySelector(".header__burger");
  burgerMenu.addEventListener("click", function () {
    burgerMenu.classList.toggle("active");
    toggleBlockScrollBody();
  });
  window.addEventListener('scroll', function () {
    var scrollPosition = window.scrollY;
    header.classList.toggle("js-scroll", scrollPosition > 0);
  });
}
"use strict";

var offers = document.querySelector(".offers");
if (offers) {
  var widthTablet = window.matchMedia("(max-width: 1280px)");
  var offersSlides = offers.querySelectorAll(".offers__item");
  if (widthTablet.matches && offersSlides) {
    offersSlides.forEach(function (offersSlide) {
      var offersSlideContent = offersSlide.querySelector(".offers__item-content");
      var offerImg = offersSlide.querySelector(".offers__item-img");
      var offerDesc = offersSlide.querySelector(".offers__item-desc");
      offersSlideContent.insertBefore(offerImg, offerDesc);
    });
  }
}
"use strict";

var partners = document.querySelector(".partners");
if (partners) {
  var checkScreen = function checkScreen() {
    var mediaQuery = window.matchMedia("(min-width: 1280px)").matches;
    mediaQuery ? partnersSwiper.destroy(true, true) : partnersSwiper.init();
  };
  var swiper = partners.querySelector(".partners__slider");
  var partnersSwiper = new Swiper(swiper, {
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    watchOverflow: true,
    slidesPerView: "auto",
    spaceBetween: 16,
    initialSlide: 0
  });
  checkScreen();
}
"use strict";

var products = document.querySelector(".products");
if (products) {
  var productsTabs = products.querySelectorAll(".products__tabs-list .products__tabs-item");
  productsTabs.forEach(function (productsTab) {
    productsTab.addEventListener("click", function () {
      productsTabs.forEach(function (tab) {
        return tab.classList.toggle("active", tab === productsTab);
      });
    });
  });
}
"use strict";

var _this = void 0;
var forms = document.querySelectorAll("form.form");
if (forms) {
  forms.forEach(function (form) {
    var fileInput = form.querySelector(".form__upload-input");
    fileInput.addEventListener("change", function () {
      var file = fileInput.files[0];
      console.log(file.name);
      var maxSizeFile = 1024 * 1024 * 35; // 35МБ
      var formUploadError = fileInput.querySelector(".form__upload-error");
      var formUploadLabel = form.querySelector(".form__upload-label");
      var message = "Неверный формат файла";
      if (file.size > maxSizeFile) {
        formUploadError.textContent = message;
        _this.value = "";
      }
      formUploadLabel.textContent = "\u0424\u0430\u0439\u043B ".concat(file.name, " \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D");
    });
    var dropZone = form.querySelector(".form__upload-file");
    dropZone.addEventListener("dragover", function (e) {
      e.preventDefault();
      dropZone.classList.toggle("active", true);
    });
    dropZone.addEventListener("drop", function (e) {
      e.preventDefault();
      dropZone.classList.toggle("active", false); // добавить стили css
      fileInput.files = e.dataTransfer.files;
    });
  });
  var maskTel = new Inputmask("+7 (999) 999-99-99");
  maskTel.mask("[type='tel']");
}
"use strict";

function closeOnBackDropClick(_ref) {
  var currentTarget = _ref.currentTarget,
    target = _ref.target;
  var dialogElement = currentTarget;
  var isClickedOnBackDrop = target === dialogElement;
  if (isClickedOnBackDrop) dialogElement.close();
}
var dialogElements = document.querySelectorAll("dialog");
dialogElements.forEach(function (dialogElement) {
  dialogElement.addEventListener("click", closeOnBackDropClick);
});