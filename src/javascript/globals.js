
async function getData(filename) {
    return fetch(`/src/data/${filename}.json`)
        .then((response) => response.json())
        .then((json) => json);
}

function LoadTemplatesController() {
    const parser = new DOMParser();

    async function loadTemplate(path) {
        return fetch(`/src/templates/${path}`)
            .then((response) => response.text())
            .then((html) => parser.parseFromString(html, "text/html").body.firstChild);
    }

    async function init() {
        let templateList = document.querySelectorAll(".js-template");

        for (const templatePlaceholder of templateList) {
            const templateSrc = templatePlaceholder.dataset["src"];
            const placeholderParent = templatePlaceholder.parentNode;
            const templateHtml = await loadTemplate(templateSrc)

            placeholderParent.insertBefore(templateHtml, templatePlaceholder);
            placeholderParent.removeChild(templatePlaceholder);
        }
    };

    init();
}

const loadTemplatesController = new LoadTemplatesController();
