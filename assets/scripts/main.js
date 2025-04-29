"use strict";

// Отправка данных формы в Телеграм
var TOKEN = "6388509099:AAFIQyVlZ4MapEiXhH2vQJh8CyZFgFoJ_mA";
var CHAT_ID = "-1002008090284";
var URL_API = "https://api.telegram.org/bot".concat(TOKEN, "/sendMessage");
var forms = document.querySelectorAll("form.form");
if (forms) {
  forms.forEach(function (form) {
    return form.addEventListener("submit", sendMessageTelegram);
  });
}
function sendMessageTelegram(evt) {
  evt.preventDefault();
  var typeConnection = this.querySelector(".form__connection-fieldset input[type='radio']:checked");
  var successFormMessage = this.querySelector('.form__message--success');
  var errorFormMessage = this.querySelector('.form__message--error');
  function formSuccess() {
    successFormMessage.classList.add('js-message-active');
  }
  function formError() {
    errorFormMessage.classList.add('js-message-active');
  }
  var message = "<b>\u0417\u0430\u044F\u0432\u043A\u0430 \u0441 \u0441\u0430\u0439\u0442\u0430 ***:</b>\n";
  message += "<b>\u0418\u043C\u044F:</b> ".concat(this.name.value, "\n");
  message += "<b>\u0422\u0435\u043B\u0435\u0444\u043E\u043D:</b> ".concat(this.phone.value, "\n");
  message += "<b>\u0421\u043F\u043E\u0441\u043E\u0431 \u0441\u0432\u044F\u0437\u0438:</b> ".concat(typeConnection.value, "\n");
  axios.post(URL_API, {
    chat_id: CHAT_ID,
    parse_mode: "html",
    text: message
  }).then(function () {
    console.log("Заявка отправлена");
    //formSuccess();
  })["catch"](function (err) {
    console.warn(err);
    //formError();
  })["finally"](function () {
    console.log("Конец");
  });
  this.reset();
}
;
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

var images = document.querySelectorAll("img");
if (images) {
  images.forEach(function (img) {
    return img.setAttribute("loading", "lazy");
  });
}
"use strict";

var phoneInputs = document.querySelectorAll('input[data-tel-input]');
var getInputNumbersValue = function getInputNumbersValue(input) {
  return input.value.replace(/\D/g, "");
};
var onPhoneInput = function onPhoneInput(evt) {
  var input = evt.target;
  var inputNumbersValue = getInputNumbersValue(input);
  var formattedInputValue = "";
  var selectionStart = input.selectionStart;
  if (!inputNumbersValue) input.value = "";
  if (input.value.length !== selectionStart) {
    if (evt.data && /\D/g.test(evt.data)) {
      input.value = formattedInputValue;
    }
    return;
  }
  if (["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1) {
    // Российские номера
    if (inputNumbersValue[0] === "9") inputNumbersValue = "7" + inputNumbersValue;
    var firstSymbols = inputNumbersValue[0] === "8" ? "8" : "+7";
    formattedInputValue = firstSymbols + " ";
    if (inputNumbersValue[0] === "8") {
      //phoneInputs[0].setAttribute("pattern", ".{17,}");
      console.log(phoneInputs[0].getAttribute("pattern"));
    }
    if (inputNumbersValue.length > 1) {
      formattedInputValue += "(" + inputNumbersValue.slice(1, 4);
    }
    if (inputNumbersValue.length >= 5) {
      formattedInputValue += ") " + inputNumbersValue.slice(4, 7);
    }
    if (inputNumbersValue.length >= 8) {
      formattedInputValue += "-" + inputNumbersValue.slice(7, 9);
    }
    if (inputNumbersValue.length >= 10) {
      formattedInputValue += "-" + inputNumbersValue.slice(9, 11);
    }

    // Не российские номера
  } else formattedInputValue = "+" + inputNumbersValue;
  input.value = formattedInputValue;
};

// Стирание первого символа
var onPhoneKeyDown = function onPhoneKeyDown(evt) {
  var input = evt.target;
  if (evt.keyCode === 8 && getInputNumbersValue(input).length === 1) {
    input.value = "";
  }
};

// Вставка цифр в любое место
var onPhonePaste = function onPhonePaste(evt) {
  var pasted = evt.clipboardData || window.clipboardData;
  var input = evt.target;
  var inputNumbersValue = getInputNumbersValue(input);
  if (pasted) {
    var pastedText = pasted.getData("Text");
    if (/\D/g.test(pastedText)) {
      input.value = inputNumbersValue;
    }
  }
};
phoneInputs.forEach(function (input) {
  input.addEventListener('input', onPhoneInput);
  input.addEventListener("keydown", onPhoneKeyDown);
  input.addEventListener("paste", onPhonePaste);
});
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

var directions = document.querySelector(".directions");
if (directions) {
  new Swiper('.directions__slider', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.directions__nav .swiper-button-next',
      prevEl: '.directions__nav .swiper-button-prev'
    },
    // Откл функционала, если слайдов меньше, чем нужно
    watchOverflow: true,
    slidesPerView: "auto",
    //centeredSlides: true,

    // Отступ между слайдами
    spaceBetween: 16,
    //loop: true,

    // Стартовый слайд
    initialSlide: 0,
    // Ширина экрана
    breakpoints: {
      320: {
        //slidesPerView: 1.2,
      },
      480: {
        //slidesPerView: 1.5,
      },
      768: {
        //slidesPerView: 2.2,
      },
      1280: {
        //slidesPerView: 3.2,
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
  });
}
"use strict";

var offers = document.querySelector(".offers");
if (offers) {
  var swiper = offers.querySelector(".offers__slider");
  new Swiper(swiper, {
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.offers__nav .swiper-button-next',
      prevEl: '.offers__nav .swiper-button-prev'
    },
    // Откл функционала, если слайдов меньше, чем нужно
    watchOverflow: true,
    slidesPerView: "auto",
    //centeredSlides: true,

    // Отступ между слайдами
    spaceBetween: 16,
    //loop: true,

    // Стартовый слайд
    initialSlide: 0,
    // Ширина экрана
    breakpoints: {
      320: {
        //slidesPerView: 1.2,
      },
      480: {
        //slidesPerView: 1.5,
      },
      768: {
        //slidesPerView: 2.2,
      },
      1280: {
        //slidesPerView: 3.2,
      }
    }
  });
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
    if (mediaQuery) {
      partnersSwiper.destroy(true, true);
    } else {
      partnersSwiper.init();
    }
  };
  var swiper = partners.querySelector(".partners__slider");
  var partnersSwiper = new Swiper(swiper, {
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    // Откл функционала, если слайдов меньше, чем нужно
    watchOverflow: true,
    slidesPerView: "auto",
    // Отступ между слайдами
    spaceBetween: 16,
    // Стартовый слайд
    initialSlide: 0
  });
  checkScreen();
  //window.addEventListener("resize", checkScreen);
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
  var swiper = products.querySelector(".products__slider");
  new Swiper(swiper, {
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.products__nav .swiper-button-next',
      prevEl: '.products__nav .swiper-button-prev'
    },
    // Откл функционала, если слайдов меньше, чем нужно
    watchOverflow: true,
    slidesPerView: "auto",
    //centeredSlides: true,

    // Отступ между слайдами
    spaceBetween: 16,
    //loop: true,

    // Стартовый слайд
    initialSlide: 0,
    // Ширина экрана
    breakpoints: {
      320: {
        //slidesPerView: 1.2,
      },
      480: {
        //slidesPerView: 1.5,
      },
      768: {
        //slidesPerView: 2.2,
      },
      1280: {
        //slidesPerView: 3.2,
      }
    }
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