async function main() {
    let movieName = document.querySelector("#querry").value;
    let data = await getData(movieName);
    poster(data);
}


function getData(movieName) {
    const url = `https://www.omdbapi.com/?apikey=f4300b1a&s=${movieName}`;
    return fetch(url)
        .then(res => res.json())
        .then(data => data.Search);
}


function poster(data) {
    if (!data) {
        return;
    }

    let container = document.querySelector("#movies");
    container.innerHTML = null;

    data.forEach(element => {
        let img = document.createElement("img");
        img.src = element.Poster;

        let p = document.createElement("p");
        p.innerText = element.Title;

        let box = document.createElement("div");
        box.append(img, p);
        container.append(box);

    });
}


//debounce Function 
let id;
function debounce(func, delay) {
    if (id) {
        clearTimeout(id);
    }
    id = setTimeout(function () {
        func();
    }, delay);
}