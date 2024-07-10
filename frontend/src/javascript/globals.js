function DataUtils() {
    this.getData = async function (filename) {
        return fetch(`/src/data/${filename}.json`)
            .then((response) => response.json())
            .then((json) => json);
    };
}

function ElementUtils() {
    this.hide = function (element) {
        element.classList.add("hide");
    };

    this.show = function (element) {
        element.classList.remove("hide");
    };
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

    init().then(() => {
        new NavbarController()
    });
};

function NavbarController() {
    this.reference = document.querySelector(".js-navbar");
    const _this = this;

    function init() {
        if (!_this.reference) return;
        const pagename = window.location.pathname.split("/")[1];

        const targetButton = _this.reference.querySelector(`.button.${pagename}`);
        if (!targetButton) return;

        targetButton.classList.add("active");
    };

    init();
};

new LoadTemplatesController();

const dataUtils = new DataUtils();
const elementUtils = new ElementUtils();
