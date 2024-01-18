import { InfoAPI, Episode } from "./interface";
const urlEpisodes = "https://rickandmortyapi.com/api/episode";
const urlCharacters = "https://rickandmortyapi.com/api/character";
const urlLocations = "https://rickandmortyapi.com/api/location";

async function getEpisodes() {
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
      liEpisode.textContent = `Episode ${episode.id}`;
      container.appendChild(liEpisode);
    });

    return data;
  } catch (error) {
    console.log(error);
  }
}

getEpisodes().then((dataResult) => {
  getNextEpisodes(dataResult);
});

async function getNextEpisodes(dataResults: InfoAPI | undefined) {
  const loadMoreBtn = document.getElementById("load-more") as HTMLButtonElement;
  loadMoreBtn.addEventListener("click", () => {
    const loadNextPage = await fetch(dataResults?.info.next);
  });
}
