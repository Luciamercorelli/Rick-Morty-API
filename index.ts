type Episode = {
    name: String,
    air_date: String,
    episode: string,
}

type Episodes =  Episode[]



let allEpisodes:Episodes = []
let url = "https://rickandmortyapi.com/api/episode";

function loadEpisodes(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
        console.log(data);
        allEpisodes=data.results
        }}



        const episodeList = document.getElementById("episode-list")
 const listElements = allEpisodes.map((item) => {
    episodeList?.append(`<li><a> ${item.name} </a></li>`)
 })