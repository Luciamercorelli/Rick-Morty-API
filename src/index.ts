import { InfoAPI, Episode } from "./interface";
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

function getNextEpisodes(dataResults: InfoAPI): void {
  const loadMoreBtn = document.getElementById("load-more") as HTMLButtonElement;
  let checkEvent: boolean = true;
  loadMoreBtn.addEventListener("click", async () => {
    if (checkEvent) {
      checkEvent = false;
      displayMoreEpisodes(dataResults);
    }
  });
}

async function displayMoreEpisodes(dataResults: InfoAPI) {
  try {
    if (dataResults.info.next) {
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
}
