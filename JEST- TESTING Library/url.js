
function searchParams(url, param) {
    let u = new URL(url);
    let p = new URLSearchParams(u.search);
    let f = p.get(param);
    return f;
}

export default searchParams;