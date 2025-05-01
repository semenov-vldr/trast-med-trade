const forms = document.querySelectorAll("form.form");
if (forms) {

    forms.forEach(form => {

        const formUploadError = form.querySelector(".form__upload-zone .form__field-error");
        const formUploadLabel = form.querySelector(".form__upload-label");
        const formUploadLabelDefaultText = formUploadLabel.textContent;
        const resetBtn = form.querySelector(".form__upload-reset");

        const fileInput = form.querySelector(".form__upload-input");
        const acceptFileInput = fileInput.accept;

        function resetFormUploadError() {
            formUploadError.classList.add("active");
            fileInput.value="";
            setTimeout(() => formUploadError.classList.remove("active"), 5000);
        }

        function fileLoaded(file) {
            if (!file) return;
            // Валидация размера файла
            const maxSizeFile = 1024 * 1024 * 35; // 35МБ
            if (file.size > maxSizeFile) {
                formUploadError.textContent = "Размер файла превышает 35МБ";
                resetFormUploadError();
                return;
            }

            // Валидация типа файла
            const fileName = file.name;
            const fileExtension = "." + fileName.slice(((fileName.lastIndexOf(".") - 1) >>> 0) + 2); // Расширение файла
            if (!acceptFileInput.includes(fileExtension)) {
                formUploadError.textContent = "Неверный формат файла";
                resetFormUploadError();
                return;
            }
            formUploadLabel.innerHTML = `Файл <span>${file.name}</span> добавлен`;
            resetBtn.classList.add("active");
            console.log(`Добавлен файл: ${fileInput.value}`);
        };

        fileInput.addEventListener("change", (e) => fileLoaded(fileInput.files[0]));

        // Drag and Drop
        ["dragover", "drop"].forEach(function(event) {
            document.addEventListener(event, function(evt) {
                evt.preventDefault();
                return false;
            });
        });

        const dropZone = form.querySelector(".form__upload-file");
        dropZone.addEventListener("dragenter", (e) => {
            e.preventDefault();
            dropZone.classList.add("active");
        });

        dropZone.addEventListener("dragleave",  () => {
            dropZone.classList.remove("active");
        });

        dropZone.addEventListener("drop", (e) => {
            fileInput.files = e.dataTransfer.files;
            fileLoaded(fileInput.files[0]);
            dropZone.classList.remove("active");
        });

        resetBtn.addEventListener("click", () => {
            fileInput.value = "";
            formUploadLabel.textContent = formUploadLabelDefaultText;
            resetBtn.classList.remove("active");
        });

        form.addEventListener("submit", (e) => {
            e.preventDefault();
            form.reset();
            formUploadLabel.textContent = formUploadLabelDefaultText;
        });

    });
}


// Добавление маски для номера телефона
let maskTel = new Inputmask("+7 (999) 999-99-99");
maskTel.mask("[type='tel']");