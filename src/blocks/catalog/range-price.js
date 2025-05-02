const rangeSliderInit = ({ rangeSliderID, inputMinID, inputMaxID, step }) => {
  const range = document.getElementById(rangeSliderID); // Ищем слайдер
  const inputMin = document.getElementById(inputMinID); // Ищем input с меньшим значнием
  const inputMax = document.getElementById(inputMaxID); // Ищем input с большим значнием

  if (!range || !inputMin || !inputMax) return // если этих элементов нет, прекращаем выполнение функции, чтобы не было ошибок

  const inputs = [inputMin, inputMax]; // создаем массив из меньшего и большего значения

  const minValue= +inputMin.dataset.min;
  const maxValue = +inputMax.dataset.max;

  noUiSlider.create(range, { // инициализируем слайдер
      start: [minValue, maxValue], // устанавливаем начальные значения
      connect: true, // указываем что нужно показывать выбранный диапазон
      range: { // устанавливаем минимальное и максимальное значения
        'min': minValue,
        'max': maxValue
      },
      step: step, // шаг изменения значений
    }
  );

  range.noUiSlider.on('update', function (values, handle) { // при изменений положения элементов управления слайдера изменяем соответствующие значения
    inputs[handle].value = parseInt(values[handle]);
  });

  inputMin.addEventListener('change', function () { // при изменении меньшего значения в input - меняем положение соответствующего элемента управления
    range.noUiSlider.set([this.value, null]);
  });

  inputMax.addEventListener('change', function () { // при изменении большего значения в input - меняем положение соответствующего элемента управления
    range.noUiSlider.set([null, this.value]);
  });
};


const settingsRangePrice = {
  rangeSliderID: "range-price",
  inputMinID: "price-min",
  inputMaxID: "price-max",
  step: 1000,
};


window.addEventListener('DOMContentLoaded', () => rangeSliderInit(settingsRangePrice) );