"use strict";
let allEpisodes = [];
let url = "https://rickandmortyapi.com/api/episode";
function loadEpisodes(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
        console.log(data);
        allEpisodes = data.results;
    });
}
const episodeList = document.getElementById("episode-list");
const listElements = allEpisodes.map((item) => {
    episodeList === null || episodeList === void 0 ? void 0 : episodeList.append(`<li><a> ${item.name} </a></li>`);
});
console.log("Hola");
