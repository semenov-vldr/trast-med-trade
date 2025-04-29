const forms = document.querySelectorAll("form.form");
if (forms) {

    forms.forEach(form => {

        const fileInput = form.querySelector(".form__upload-input");
        fileInput.addEventListener("change", () => {

            const file = fileInput.files[0];
            console.log(file.name)
            const maxSizeFile = 1024 * 1024 * 35; // 35МБ
            const formUploadError = fileInput.querySelector(".form__upload-error");
            const formUploadLabel = form.querySelector(".form__upload-label");
            const message = "Неверный формат файла";
            if (file.size > maxSizeFile) {
                formUploadError.textContent = message;
                this.value="";
            }
            formUploadLabel.textContent = `Файл ${file.name} загружен`;
        });

        const dropZone = form.querySelector(".form__upload-file");
        dropZone.addEventListener("dragover", (e) => {
            e.preventDefault();
            dropZone.classList.toggle("active", true);
        });

        dropZone.addEventListener("drop", (e) => {
            e.preventDefault();
            dropZone.classList.toggle("active", false); // добавить стили css
            fileInput.files = e.dataTransfer.files;
        });

    });


    let maskTel = new Inputmask("+7 (999) 999-99-99");
    maskTel.mask("[type='tel']");

} 