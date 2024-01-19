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
function printTitle(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield fetch(url);
        const JSONdata = yield data.json();
        const episodes = JSONdata.results;
        episodes.forEach((episodeElement) => {
            episodesList.insertAdjacentHTML("beforeend", `<li id="episode${episodeElement.episode}" episodeUrl="${episodeElement.url}">${episodeElement.name}</li>`);
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
//CLICK DISPLAY EPISODIO
function displayElementInfo(click) {
    return __awaiter(this, void 0, void 0, function* () {
        const target = click.target;
        const urlEpisode = target.getAttribute("episodeUrl");
        const data = yield fetch(urlEpisode);
        const episodeInfo = yield data.json();
        const displayEpisodeInfo = `<p>${episodeInfo.name}</p>
  <p>${episodeInfo.air_date}</p>
  <p>${episodeInfo.episode}</p>`;
        const printEpisodeInfo = document.getElementById("content-area");
        printEpisodeInfo.innerHTML = displayEpisodeInfo;
        const characters = episodeInfo.characters;
        characters.forEach((urlCharacters) => __awaiter(this, void 0, void 0, function* () {
            const data = yield fetch(urlCharacters);
            const characterInfo = yield data.json();
            const displayCharacterInfo = `<p>${characterInfo.name}</p>
  <p>${characterInfo.status}</p>
  <p>${characterInfo.species}</p>
  <p>${characterInfo.gender}</p>
  <img src=${characterInfo.image}>`;
            printEpisodeInfo.insertAdjacentHTML("beforeend", displayCharacterInfo);
        }));
    });
}
export {};
/* import { InfoAPI, Episode } from "./interface";
const urlEpisodes = "https://rickandmortyapi.com/api/episode";
const urlCharacters = "https://rickandmortyapi.com/api/character";
const urlLocations = "https://rickandmortyapi.com/api/location";

async function getEpisodes(): Promise<InfoAPI> {
  try {
    const apiEpisode = await fetch(urlEpisodes);
    const data: InfoAPI = await apiEpisode.json();
    const episodes: Episode[] = data.results;

    episodes.forEach((episode) => {
      console.log(episode);
      const container = document.getElementById(
        "episode-list"
      ) as HTMLUListElement;
      const liEpisode = document.createElement("li");
      liEpisode.classList.add("episode-list-item");
      liEpisode.textContent = episode.name;
      container.appendChild(liEpisode);
    });

    return data;
  } catch (error) {
    throw new Error("Fail");
  }
}

getEpisodes().then((dataResult) => {
  getNextEpisodes(dataResult);
});
.then((dataResults) => {

})

function getNextEpisodes(dataResults: InfoAPI): void {
  const loadMoreBtn = document.getElementById("load-more") as HTMLButtonElement;
  let checkEvent: boolean = true;
  loadMoreBtn.addEventListener("click", async () => {
    if (checkEvent) {
      checkEvent = false;
      return displayMoreEpisodes(dataResults);
    }
  });
}

async function displayMoreEpisodes (dataResults: InfoAPI):Promise<InfoAPI> {
  try {
   
      const response = await fetch(dataResults.info.next);
      const data: InfoAPI = await response.json();
      const episodes: Episode[] = data.results;


      episodes.forEach((episode) => {
        const container = document.getElementById(
          "episode-list"
        ) as HTMLUListElement;
        const liEpisode = document.createElement("li");
        liEpisode.classList.add("episode-list-item");
        liEpisode.textContent = episode.name;
        container.appendChild(liEpisode);
      });
      return data;
    }


  } catch (error) {
    throw new Error("Fail");
  }
} */
