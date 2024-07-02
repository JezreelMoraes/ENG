function ExercisesController() {
    this.reference = document.querySelector(".js-exercises-container");
    this.emptyState = this.reference.querySelector(".js-empty-state");
    this.list = this.reference.querySelector(".js-list");
    this.listCount = this.reference.querySelector(".js-list-count");
    this.tableBody = this.reference.querySelector(".js-table-body");

    const _this = this;

    async function init() {
        const exerciseList = await getData('exercises');

        if (!exerciseList.length) {
            show(_this.emptyState);
            hide(_this.list);
            return;
        }

        hide(_this.emptyState);
        show(_this.list);

        buildExerciseList(exerciseList);
        _this.listCount.textContent = exerciseList.length.toString()
    };

    function buildExerciseList(exerciseList) {
        for (const [index, exercise] of Object.entries(exerciseList)) {
            buildExercise(index, exercise);
        }
    };

    function buildExercise(index, exercise) {
        const row = document.createElement("tr");

        addRowData(row, exercise["name"]);
        addRowData(row, exercise["description"]);

        _this.tableBody.appendChild(row);
    };

    function addRowData(row, data) {
        const tableData = document.createElement("td");
        const content = document.createTextNode(data);

        tableData.appendChild(content);
        row.appendChild(tableData);
    }

    init();
};

document.addEventListener("DOMContentLoaded", function () {
    let exercisesController = new ExercisesController();
});
