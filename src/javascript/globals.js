async function getData(filename) {
    return fetch(`/src/data/${filename}.json`)
        .then((response) => response.json())
        .then((json) => json);
}
