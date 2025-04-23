let url = "https://example.com?foo=1&bar=2";
let u = new URL(url);
let p = new URLSearchParams(u.search);
console.log(p);
