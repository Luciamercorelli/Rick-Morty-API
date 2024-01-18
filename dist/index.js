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
function getEpisodes() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const apiEpisode = yield fetch(urlEpisodes);
            const data = yield apiEpisode.json();
            const episodes = data.results;
            episodes.forEach((episode) => {
                console.log(episode);
                const container = document.getElementById("episode-list");
                const liEpisode = document.createElement("li");
                liEpisode.classList.add("episode-list-item");
                liEpisode.textContent = episode.name;
                container.appendChild(liEpisode);
            });
            return data;
        }
        catch (error) {
            throw new Error("Fail");
        }
    });
}
getEpisodes().then((dataResult) => {
    getNextEpisodes(dataResult);
});
function getNextEpisodes(dataResults) {
    const loadMoreBtn = document.getElementById("load-more");
    let checkEvent = true;
    loadMoreBtn.addEventListener("click", () => __awaiter(this, void 0, void 0, function* () {
        if (checkEvent) {
            checkEvent = false;
            displayMoreEpisodes(dataResults);
        }
    }));
}
function displayMoreEpisodes(dataResults) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (dataResults.info.next) {
                const response = yield fetch(dataResults.info.next);
                const data = yield response.json();
                const episodes = data.results;
                episodes.forEach((episode) => {
                    const container = document.getElementById("episode-list");
                    const liEpisode = document.createElement("li");
                    liEpisode.classList.add("episode-list-item");
                    liEpisode.textContent = episode.name;
                    container.appendChild(liEpisode);
                });
                return data;
            }
        }
        catch (error) {
            throw new Error("Fail");
        }
    });
}
export {};
