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
  var dialogs = document.querySelectorAll("dialog");
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
  var productSwiper = products.querySelector(".products__slider");
  var swiperInstance = productSwiper === null || productSwiper === void 0 ? void 0 : productSwiper.swiper;
  var productSlides = products.querySelectorAll(".products__item");
  var productsTabs = products.querySelectorAll(".products__tabs-list .products__tabs-item");
  productsTabs.forEach(function (productsTab) {
    productsTab.addEventListener("click", function () {
      var dataTabCat = productsTab.dataset.category;
      productsTabs.forEach(function (tab) {
        return tab.classList.toggle("active", tab === productsTab);
      });
      productSlides.forEach(function (productSlide) {
        var dataSlideCat = productSlide.dataset.category;
        var isActiveSlide = dataTabCat !== dataSlideCat && dataTabCat !== "all";
        productSlide.classList.toggle("hidden", isActiveSlide);
      });
      swiperInstance === null || swiperInstance === void 0 || swiperInstance.update();
    });
  });
}
"use strict";

var forms = document.querySelectorAll("form.form");
if (forms) {
  forms.forEach(function (form) {
    var formUploadError = form.querySelector(".form__upload-zone .form__field-error");
    var formUploadLabel = form.querySelector(".form__upload-label");
    var formUploadLabelDefaultText = formUploadLabel.textContent;
    var resetBtn = form.querySelector(".form__upload-reset");
    var fileInput = form.querySelector(".form__upload-input");
    var acceptFileInput = fileInput.accept;
    function resetFormUploadError() {
      formUploadError.classList.add("active");
      fileInput.value = "";
      setTimeout(function () {
        return formUploadError.classList.remove("active");
      }, 5000);
    }
    function fileLoaded(file) {
      if (!file) return;
      // Валидация размера файла
      var maxSizeFile = 1024 * 1024 * 35; // 35МБ
      if (file.size > maxSizeFile) {
        formUploadError.textContent = "Размер файла превышает 35МБ";
        resetFormUploadError();
        return;
      }

      // Валидация типа файла
      var fileName = file.name;
      var fileExtension = "." + fileName.slice((fileName.lastIndexOf(".") - 1 >>> 0) + 2); // Расширение файла
      if (!acceptFileInput.includes(fileExtension)) {
        formUploadError.textContent = "Неверный формат файла";
        resetFormUploadError();
        return;
      }
      formUploadLabel.innerHTML = "\u0424\u0430\u0439\u043B <span>".concat(file.name, "</span> \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D");
      resetBtn.classList.add("active");
      console.log("\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D \u0444\u0430\u0439\u043B: ".concat(fileInput.value));
    }
    ;
    fileInput.addEventListener("change", function (e) {
      return fileLoaded(fileInput.files[0]);
    });

    // Drag and Drop
    ["dragover", "drop"].forEach(function (event) {
      document.addEventListener(event, function (evt) {
        evt.preventDefault();
        return false;
      });
    });
    var dropZone = form.querySelector(".form__upload-file");
    dropZone.addEventListener("dragenter", function (e) {
      e.preventDefault();
      dropZone.classList.add("active");
    });
    dropZone.addEventListener("dragleave", function () {
      dropZone.classList.remove("active");
    });
    dropZone.addEventListener("drop", function (e) {
      fileInput.files = e.dataTransfer.files;
      fileLoaded(fileInput.files[0]);
      dropZone.classList.remove("active");
    });
    resetBtn.addEventListener("click", function () {
      fileInput.value = "";
      formUploadLabel.textContent = formUploadLabelDefaultText;
      resetBtn.classList.remove("active");
    });
    form.addEventListener("submit", function () {
      form.reset();
      formUploadLabel.textContent = formUploadLabelDefaultText;
    });
  });
}

// Добавление маски для номера телефона
var maskTel = new Inputmask("+7 (999) 999-99-99");
maskTel.mask("[type='tel']");
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