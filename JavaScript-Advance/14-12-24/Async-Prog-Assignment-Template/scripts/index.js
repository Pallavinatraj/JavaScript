
const movies = [
    { title: "The Dark Knight", year: 2008, image: "https://via.placeholder.com/600x300?text=The+Dark+Knight" },
    { title: "Inception", year: 2010, image: "https://via.placeholder.com/600x300?text=Inception" },
    { title: "Interstellar", year: 2014, image: "https://via.placeholder.com/600x300?text=Interstellar" },
    { title: "Tenet", year: 2020, image: "https://via.placeholder.com/600x300?text=Tenet" },
    { title: "The Matrix", year: 1999, image: "https://via.placeholder.com/600x300?text=The+Matrix" }
];

let currentSlideIndex = 0;


function renderSlideshow() {
    const slideshowDiv = document.getElementById("slideshow");


    const randomMovie = movies[Math.floor(Math.random() * movies.length)];
    slideshowDiv.innerHTML = `<img src="${randomMovie.image}" alt="${randomMovie.title}" />`;
}


function renderMovies(moviesList) {
    const moviesDiv = document.getElementById("movies");
    moviesDiv.innerHTML = "";

    moviesList.forEach(movie => {
        const movieDiv = document.createElement("div");
        movieDiv.classList.add("movie");
        movieDiv.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}">
            <h3>${movie.title}</h3>
            <p>Year: ${movie.year}</p>
        `;
        moviesDiv.appendChild(movieDiv);
    });
}


function sortMovies(criterion) {
    let sortedMovies = [];
    if (criterion === "title") {
        sortedMovies = [...movies].sort((a, b) => a.title.localeCompare(b.title));
    } else if (criterion === "year") {
        sortedMovies = [...movies].sort((a, b) => a.year - b.year);
    }
    renderMovies(sortedMovies);
}


setInterval(renderSlideshow, 3000);


renderMovies(movies);

