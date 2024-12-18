function getData() {
    let cityName = document.getElementById("city").value;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=9e4af94803691f0e3a63bc80e05e243b`;
    fetch(url)
        .then(function (res) {
            return res.json();
        })
        .then(function (res) {
            append(res);
        })
}


//  src="https://maps.google.com/maps?q=hassan&t=&z=13&ie=UTF8&iwloc=&output=embed"
function append(data) {
    let url = `https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
    let container = document.getElementById("container");
    container.innerHTML = null;

    let h2 = document.createElement("h2");
    h2.innerText = data.name;

    let temp = document.createElement("p");
    temp.innerText = `Temp: ${data.main.temp}`;

    let max_temp = document.createElement("p");
    max_temp.innerText = `Max_Temp: ${data.main.temp_max}`;


    let min_temp = document.createElement("p");
    min_temp.innerText = `Min_Temp: ${data.main.temp_min}`;

    container.append(h2, temp, max_temp, min_temp);
    let iframe = document.getElementById("gmap_canvas");
    iframe.src = url;
}

function getLocation() {
    navigator.geolocation.getCurrentPosition(success);
    function success(pos) {
        const crd = pos.coords;

        console.log("Your current position is:");
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
        console.log(`More or less ${crd.accuracy} meters.`);
        getLocationFromUrl(crd.latitude, crd.longitude);
    }
}
getLocation();


function getLocationFromUrl(lat, lon) {
    let cityName = document.getElementById("city").value;
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=9e4af94803691f0e3a63bc80e05e243b`;
    fetch(url)
        .then(function (res) {
            return res.json();
        })
        .then(function (res) {
            append(res);
        })
}


