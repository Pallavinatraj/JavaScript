import navbar from "../component/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

import { getData, append } from "../component/fetch.js";

const url = `https://fakestoreapi.com/products/category/jewelery`;
let container = document.getElementById("container");

getData(url).then((res) => {
    append(res, container);
});


getData();
