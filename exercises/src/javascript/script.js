function ExercisesController() {
    this.reference = document.querySelector(".js-exercises-container");
    this.emptyState = document.querySelector(".js-empty-state");
    this.list = document.querySelector(".js-list");
    this.table = document.querySelector(".js-table");

    const _this = this;

    async function init() {
        const exerciseList = await getData('exercises');
        if (!exerciseList) {
            _this.emptyState.hidden = false;
            _this.list.hidden = true;
            return;
        }

        _this.emptyState.hidden = true;
        _this.list.hidden = false;

        buildExerciseList(exerciseList);
    };

    function buildExerciseList(exerciseList) {
        for (const [index, exercise] of Object.entries(exerciseList)) {
            buildExercise(index, exercise);
        }
    };

    function buildExercise(index, exercise) {
        const row = document.createElement("tr");

        addRowData(row, exercise["id"]);
        addRowData(row, exercise["name"]);
        addRowData(row, exercise["description"]);

        _this.table.appendChild(row);
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
