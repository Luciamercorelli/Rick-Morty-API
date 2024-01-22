import { InfoAPI, Episode, Character } from './interface';

const urlEpisodes = "https://rickandmortyapi.com/api/episode";
const urlCharacters = "https://rickandmortyapi.com/api/character";
const urlLocations = "https://rickandmortyapi.com/api/location";
const episodesList = document.getElementById("episode-list") as HTMLUListElement;
const nextBtn = document.getElementById("load-more") as HTMLButtonElement;

printTitle(urlEpisodes);

// PRINT EPISODES LIST FUNCTION //

async function printTitle(url: string) {
  const data = await fetch(url);
  const JSONdata: InfoAPI = await data.json();
  const episodes: Episode[] = JSONdata.results;

  episodes.forEach((episodeElement) => {
    episodesList.insertAdjacentHTML("beforeend",
      `<li class="episode-titles" id="episode${episodeElement.episode}" episodeUrl="${episodeElement.url}">${episodeElement.name}</li>`);
    const clickEpisode = document.getElementById(`episode${episodeElement.episode}`) as HTMLLIElement;
    clickEpisode.addEventListener("click", displayElementInfo);
  });

  if (JSONdata.info.next) {
    nextBtn.addEventListener(
      "click",() => {
        printTitle(JSONdata.info.next);
      },
      { once: true }
    );
  } else {
    nextBtn.remove();
  }
}

// DISPLAY EPISODES AND CHARACTERS INFO FUCTION //

async function displayElementInfo(click:MouseEvent) {
  const target = click.target as HTMLLIElement;
  const urlEpisode = target.getAttribute("episodeUrl")!;
  const data = await fetch(urlEpisode);
  const episodeInfo: Episode = await data.json();
  const displayEpisodeInfo = 
  `<div class="episode-info-box">
  <p class="episode-info">Title: "${episodeInfo.name}"</p>
  <p class="episode-info">Air date: ${episodeInfo.air_date}</p>
  <p class="episode-info">${episodeInfo.episode}</p>
  </div>`;
  
  const printEpisodeInfo = document.getElementById("content-area") as HTMLDivElement;  
  printEpisodeInfo.innerHTML =displayEpisodeInfo;  
  const characters = episodeInfo.characters
  characters.forEach(async urlCharacters => {
  const data = await fetch(urlCharacters);  
  const characterInfo: Character = await data.json(); 
    const displayCharacterInfo = 
  `<div class="character-images-box">
  <div class="character-card">
  <p class="character-info">Name: ${characterInfo.name}</p>
  <p class="character-info">Status: ${characterInfo.status}</p>
  <p class="character-info">Species: ${characterInfo.species}</p>
  <p class="character-info">Gender: ${characterInfo.gender}</p>
  <img class="character-image" src=${characterInfo.image}>
  </div>
  </div>`;
  printEpisodeInfo.insertAdjacentHTML("beforeend",displayCharacterInfo);
  });
}

