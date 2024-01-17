import { Episodes } from "./interface/episodes";
import { Characters } from "./interface/characters";
import { Locations } from "./interface/locations";

const urlEpisodes = "https://rickandmortyapi.com/api/episode";

async function getEpisodes() {
  try {
    const response = await fetch(urlEpisodes);
  } catch (error) {}
}

/* const episodeContainer = document.getElementById(
  "listContainer"
) as HTMLUListElement;

const urlRM = "https://rickandmortyapi.com/api/episode";

fetch(urlRM)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const nameEpisode: Episodes[] = data.results;
    nameEpisode.forEach((episode: Episodes) => {
      console.log(episode.name);
      const titleEpisode = episode.name;
      episodeContainer.innerHTML += (
        <li class="episodeList-item">
          <h4 class="text">${titleEpisode}</h4>
        </li>
      );
    });
  });
 */
