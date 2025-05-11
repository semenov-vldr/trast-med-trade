"use strict";

function addWindowsClass() {
  if (navigator.userAgent.indexOf('Windows') > -1) {
    document.documentElement.classList.add('windows');
  }
}
document.addEventListener('DOMContentLoaded', addWindowsClass);
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
//initializeSwiper("partners");
"use strict";

var images = document.querySelectorAll("img");
if (images) {
  images.forEach(function (img) {
    return img.setAttribute("loading", "lazy");
  });
}
"use strict";

// Добавить/убрать активность табов
var blocksTabs = document.querySelectorAll(".tabs__list");
if (blocksTabs) {
  blocksTabs.forEach(function (blockTabs) {
    var tabs = blockTabs.querySelectorAll(".tabs__item");
    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        tabs.forEach(function (t) {
          return t.classList.toggle("active", t === tab);
        });
      });
    });
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

var catalog = document.querySelector(".catalog");
if (catalog) {
  var mobileWidthMediaQuery = window.matchMedia('(max-width: 1280px)');
  var filter = catalog.querySelector(".filter");
  var filterHeading = filter.querySelector(".filter__heading");
  if (mobileWidthMediaQuery.matches) {
    filterHeading.addEventListener("click", function () {
      filterHeading.classList.toggle("active");
      toggleBlockScrollBody();
    });
  }
}
"use strict";

var rangeSliderInit = function rangeSliderInit(_ref) {
  var rangeSliderID = _ref.rangeSliderID,
    inputMinID = _ref.inputMinID,
    inputMaxID = _ref.inputMaxID,
    step = _ref.step;
  var resetButton = document.querySelector(".filter .filter__reset");
  var range = document.getElementById(rangeSliderID); // Ищем слайдер
  var inputMin = document.getElementById(inputMinID); // Ищем input с меньшим значнием
  var inputMax = document.getElementById(inputMaxID); // Ищем input с большим значнием

  if (!range || !inputMin || !inputMax) return; // если этих элементов нет, прекращаем выполнение функции, чтобы не было ошибок

  var inputs = [inputMin, inputMax]; // создаем массив из меньшего и большего значения

  var minValue = +inputMin.dataset.min;
  var maxValue = +inputMax.dataset.max;
  noUiSlider.create(range, {
    // инициализируем слайдер
    start: [minValue, maxValue],
    // устанавливаем начальные значения
    connect: true,
    // указываем что нужно показывать выбранный диапазон
    range: {
      // устанавливаем минимальное и максимальное значения
      'min': minValue,
      'max': maxValue
    },
    step: step // шаг изменения значений
  });

  // при изменений положения элементов управления слайдера изменяем соответствующие значения
  range.noUiSlider.on('update', function (values, handle) {
    inputs[handle].value = parseInt(values[handle]);
  });

  // при изменении меньшего значения в input - меняем положение соответствующего элемента управления
  inputMin.addEventListener('change', function () {
    range.noUiSlider.set([this.value, null]);
  });

  // при изменении большего значения в input - меняем положение соответствующего элемента управления
  inputMax.addEventListener('change', function () {
    range.noUiSlider.set([null, this.value]);
  });

  // Обработчик кнопки "Сбросить"
  if (resetButton) {
    resetButton.addEventListener("click", function () {
      range.noUiSlider.reset();
    });
  }
};
var settingsRangePrice = {
  rangeSliderID: "range-price",
  inputMinID: "price-min",
  inputMaxID: "price-max",
  step: 1000
};
window.addEventListener('DOMContentLoaded', function () {
  return rangeSliderInit(settingsRangePrice);
});
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
      if (offersSlideContent && offerImg && offerDesc) {
        offersSlideContent.insertBefore(offerImg, offerDesc);
      }
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

// Слайдер на странице товара и табы
var productPage = document.querySelector(".product-page");
if (productPage) {
  createProductProfileSlider(productPage);

  // Работа табов
  var detailsTabs = productPage.querySelectorAll(".product-page__details-tabs .product-page__details-tabs-item");
  var detailsItems = productPage.querySelectorAll(".product-page__details-item");
  detailsTabs.forEach(function (detailsTab) {
    var dataTabDetails = detailsTab.dataset.details;
    detailsTab.addEventListener("click", function () {
      detailsItems.forEach(function (detailsItem) {
        var dataItemDetails = detailsItem.dataset.details;
        detailsItem.classList.toggle("hidden", dataTabDetails !== dataItemDetails);
      });
    });
  });

  // Раскрытие только одного "details" в блоке "Документация"
  var docDetails = productPage.querySelectorAll(".product-page__details-doc .product-page__details-doc-item");
  docDetails.forEach(function (detailsItem) {
    detailsItem.addEventListener("click", function () {
      var _this = this;
      docDetails.forEach(function (d) {
        return d !== _this ? d.removeAttribute("open") : "null";
      });
    });
  });
}
function createProductProfileSlider(productPage) {
  var swiperMain = productPage.querySelector('.swiper-main');
  var swiperThumbs = productPage.querySelector('.swiper-thumbs');
  var swiper__thumbs = new Swiper(swiperThumbs, {
    spaceBetween: 8,
    slidesPerView: "auto",
    freeMode: true,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    watchOverflow: true,
    initialSlide: 0,
    direction: "vertical"
  });
  var swiper__main = new Swiper(swiperMain, {
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    loop: true,
    slidesPerView: 1,
    centeredSlides: true,
    initialSlide: 0,
    thumbs: {
      swiper: swiper__thumbs
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    }
  });
}
;
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
    form.addEventListener("submit", function (e) {
      e.preventDefault();
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