var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const urlEpisodes = "https://rickandmortyapi.com/api/episode";
const urlCharacters = "https://rickandmortyapi.com/api/character";
const urlLocations = "https://rickandmortyapi.com/api/location";
const episodesList = document.getElementById("episode-list");
const nextBtn = document.getElementById("load-more");
printTitle(urlEpisodes);
// PRINT EPISODES LIST FUNCTION //
function printTitle(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield fetch(url);
        const JSONdata = yield data.json();
        const episodes = JSONdata.results;
        episodes.forEach((episodeElement) => {
            episodesList.insertAdjacentHTML("beforeend", `<li class="episode-titles" id="episode${episodeElement.episode}" episodeUrl="${episodeElement.url}">${episodeElement.name}</li>`);
            const clickEpisode = document.getElementById(`episode${episodeElement.episode}`);
            clickEpisode.addEventListener("click", displayElementInfo);
        });
        if (JSONdata.info.next) {
            nextBtn.addEventListener("click", () => {
                printTitle(JSONdata.info.next);
            }, { once: true });
        }
        else {
            nextBtn.remove();
        }
    });
}
// DISPLAY EPISODES AND CHARACTERS INFO FUCTION //
function displayElementInfo(click) {
    return __awaiter(this, void 0, void 0, function* () {
        const target = click.target;
        const urlEpisode = target.getAttribute("episodeUrl");
        const data = yield fetch(urlEpisode);
        const episodeInfo = yield data.json();
        const displayEpisodeInfo = `<div class="episode-info-box">
  <p class="episode-info">Title: "${episodeInfo.name}"</p>
  <p class="episode-info">Air date: ${episodeInfo.air_date}</p>
  <p class="episode-info">${episodeInfo.episode}</p>
  </div>`;
        const printEpisodeInfo = document.getElementById("content-area");
        printEpisodeInfo.innerHTML = displayEpisodeInfo;
        const characters = episodeInfo.characters;
        characters.forEach((urlCharacters) => __awaiter(this, void 0, void 0, function* () {
            const data = yield fetch(urlCharacters);
            const characterInfo = yield data.json();
            const displayCharacterInfo = `<div class="character-images-box">
  <div class="character-card">
  <p class="character-info">Name: ${characterInfo.name}</p>
  <p class="character-info">Status: ${characterInfo.status}</p>
  <p class="character-info">Species: ${characterInfo.species}</p>
  <p class="character-info">Gender: ${characterInfo.gender}</p>
  <img class="character-image" src=${characterInfo.image}>
  </div>
  </div>`;
            printEpisodeInfo.insertAdjacentHTML("beforeend", displayCharacterInfo);
        }));
    });
}
export {};
