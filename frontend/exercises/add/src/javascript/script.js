function ExerciseAddController() {
    this.reference = document.querySelector(".js-exercise-add-container");

    const _this = this;

    function init() {
        bindInputFile();
    };

    function bindInputFile() {
        const inputFileWrapper = _this.reference.querySelector(".js-input-file-wrapper");
        const inputFile = inputFileWrapper.querySelector(".js-input-file");

        inputFile.addEventListener("change", (event) => {
            const file = inputFile.files[0];

            if (!file) {
                inputFileWrapper.style.backgroundImage = "none";
                inputFileWrapper.classList.remove("filled");
            } else {
                var tempPath = URL.createObjectURL(file);
                inputFileWrapper.style.backgroundImage = `url(${tempPath})`;
                inputFileWrapper.classList.add("filled");
            }
        });
    }

    init();
};

document.addEventListener("DOMContentLoaded", function () {
    let exerciseAddController = new ExerciseAddController();
});
