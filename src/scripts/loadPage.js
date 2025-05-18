document.addEventListener('DOMContentLoaded', function() {
  // Функция для загрузки страницы целиком
  function loadPageContent(url, container, updateHistory = true) {
    // Показываем индикатор загрузки
    const loader = document.createElement('div');
    loader.className = 'catalog__loader';
    loader.innerHTML = '<div class="spinner"></div><p>Загрузка элементов...</p>';
    container.innerHTML = '';
    container.appendChild(loader);

    // Добавляем параметр, чтобы избежать кеширования
    const nocacheUrl = url + (url.includes('?') ? '&' : '?') + 'nocache=' + new Date().getTime();

    // Загружаем данные через AJAX
    fetch(nocacheUrl)
      .then(response => response.text())
      .then(html => {
        // Создаем временный контейнер и добавляем в него полученный HTML
        const tempContainer = document.createElement('div');
        tempContainer.innerHTML = html;

        // Находим контейнер с элементами в полученном HTML
        const newContent = tempContainer.querySelector('#catalog-items-container');

        if (newContent) {
          // Заменяем содержимое текущего контейнера
          container.innerHTML = newContent.innerHTML;

          // Обновляем URL в истории браузера
          if (updateHistory) {
            history.pushState({}, '', url);
          }

          // Переинициализируем обработчики событий для пагинации
          initPaginationHandlers();
        } else {
          console.error('Не найден контейнер с элементами в ответе');
          window.location.reload();
        }
      })
      .catch(error => {
        console.error('Ошибка загрузки:', error);
        // В случае ошибки перезагружаем страницу
        window.location.reload();
      });
  }

  // Функция для загрузки дополнительных элементов ("Показать еще")
  function loadMoreItems(url, container) {
    // Показываем индикатор загрузки
    const paginationContainer = container.querySelector('.pagination');
    const loader = document.createElement('div');
    loader.className = 'catalog__loader';
    loader.innerHTML = '<div class="spinner"></div><p>Загрузка элементов...</p>';

    if (paginationContainer) {
      container.insertBefore(loader, paginationContainer);
    } else {
      container.appendChild(loader);
    }

    // Добавляем параметр, чтобы избежать кеширования
    const nocacheUrl = url + (url.includes('?') ? '&' : '?') + 'nocache=' + new Date().getTime();

    // Загружаем данные через AJAX
    fetch(nocacheUrl)
      .then(response => response.text())
      .then(html => {
        // Удаляем индикатор загрузки
        loader.remove();

        // Добавляем HTML ответа в скрытый временный контейнер
        const tempContainer = document.createElement('div');
        tempContainer.style.display = 'none';
        document.body.appendChild(tempContainer);
        tempContainer.innerHTML = html;

        // Получаем все новые элементы
        const newItems = tempContainer.querySelectorAll('.catalog__item, .promo');

        // Вставляем новые элементы перед пагинацией
        if (newItems.length > 0) {
          newItems.forEach(item => {
            if (paginationContainer) {
              container.insertBefore(item, paginationContainer);
            } else {
              container.appendChild(item);
            }
          });

          console.log('Добавлено новых элементов:', newItems.length);

          // Обновляем пагинацию
          const newPagination = tempContainer.querySelector('.pagination');
          if (newPagination && paginationContainer) {
            container.replaceChild(newPagination, paginationContainer);
          }

          // Переинициализируем обработчики
          initPaginationHandlers();
        } else {
          console.error('Не найдены новые элементы для добавления');

          // Если нет новых элементов, но мы знаем, что они должны быть,
          // перезагружаем страницу для сброса кеша
          if (url.includes('PAGEN_') && !url.includes('nocache=')) {
            window.location.reload();
          }
        }

        // Удаляем временный контейнер
        document.body.removeChild(tempContainer);
      })
      .catch(error => {
        // Удаляем индикатор загрузки в случае ошибки
        loader.remove();
        console.error('Ошибка загрузки дополнительных элементов:', error);

        // Показываем сообщение об ошибке
        const errorMsg = document.createElement('div');
        errorMsg.className = 'catalog__error';
        errorMsg.textContent = 'Произошла ошибка при загрузке данных. Попробуйте обновить страницу.';

        if (paginationContainer) {
          container.insertBefore(errorMsg, paginationContainer);
        } else {
          container.appendChild(errorMsg);
        }

        // Удаляем сообщение через 5 секунд
        setTimeout(() => {
          errorMsg.remove();
        }, 5000);
      });
  }

  // Функция для инициализации обработчиков событий пагинации
  function initPaginationHandlers() {
    // Находим контейнер с элементами
    const container = document.getElementById('catalog-items-container');
    if (!container) return;

    // Обработчик для кнопки "Показать еще"
    const moreButtons = document.querySelectorAll('.js-show-more');
    moreButtons.forEach(button => {
      button.addEventListener('click', function(e) {
        e.preventDefault();

        // Получаем URL для загрузки следующей страницы
        const url = this.getAttribute('data-url');
        if (!url) {
          console.error('Не указан URL для загрузки');
          return;
        }

        // Загружаем дополнительные элементы
        loadMoreItems(url, container);
      });
    });

    // Обработчик для ссылок пагинации
    const paginationLinks = document.querySelectorAll('.pagination-link');
    paginationLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();

        // Получаем URL для загрузки страницы
        const url = this.getAttribute('href');
        if (!url || url === 'javascript:void(0);') return;

        // Загружаем новую страницу через AJAX
        loadPageContent(url, container);

        // Прокручиваем страницу вверх к началу каталога
        const catalogSection = document.querySelector('.catalog');
        if (catalogSection) {
          catalogSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }

  // Обработчик событий для навигации по истории браузера (кнопки вперед/назад)
  window.addEventListener('popstate', function() {
    const container = document.getElementById('catalog-items-container');
    if (container) {
      loadPageContent(window.location.href, container, false);
    }
  });

  // Инициализируем обработчики пагинации при загрузке страницы
  initPaginationHandlers();
});