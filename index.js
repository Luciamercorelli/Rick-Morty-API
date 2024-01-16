"use strict";

let EpisodesUrl = "https://rickandmortyapi.com/api/episode";

function loadEpisodes() {
    fetch(EpisodesUrl)
        .then((response) => response.json())
        .then(data => {
        console.log(data);
        }}