// const collection = require("./collection");
import collection from "./collection.js";
console.log(collection);

function displayCollection(films) {
  const sectionFilms = document.getElementById("films-collection");
  const filmCards = films.map(filmCard).join("");
  sectionFilms.innerHTML = filmCards;
}

const filmCard = (film) => {
  const genre = film.genre.map((genre) => `<span>${genre}</span>`).join("");
  return `<div class="card">
          <img src="${film.image}" alt="film-image" />
          <div class="text-content">
            <div>
                <div class="genre">${genre}</div>
                <h2>${film.name}</h2>
                <h3>${film.director}</h3>
                <p class="date">${film.releaseDate}</p>
                <p class="cast">${film.cast}</p>
            </div>
            <div>
               <p class="description">${film.description}</p>
               <a href="${film.trailer}" target="_blank"><i class="fa-brands fa-youtube"></i></a>
            </div>
          </div>
        </div>`;
};

displayCollection(collection);
