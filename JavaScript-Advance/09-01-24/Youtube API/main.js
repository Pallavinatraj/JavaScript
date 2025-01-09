const API_KEY = 'AIzaSyDX0SACCB-ex9uwa18oNJ8DVIs5-qxS5oo';

let q = "";

let search = async () => {
    let query = document.getElementById('query').value.trim();
    if (query === "") {
        alert("Please enter a search term.");
        return;
    }
    let data = await getData(query);
    q = query;
    append(data);
}

let getData = async (query) => {
    let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=${API_KEY}`;
    let res = await fetch(url);
    let data = await res.json();
    return data.items;
}

let append = (data) => {
    let container = document.getElementById("container");
    container.innerHTML = '';

    if (data.length === 0) {
        container.innerHTML = '<p>No videos found.</p>';
        return;
    }

    data.forEach((el) => {
        let img = document.createElement("img");
        img.src = el.snippet.thumbnails.medium.url;

        let h3 = document.createElement("h3");
        h3.innerText = el.snippet.title;

        let div = document.createElement("div");
        div.onclick = () => {
            saveVideo(el);
        };
        div.setAttribute("class", "video");

        div.append(img, h3);
        container.append(div);
    });
};

let saveVideo = (data) => {
    localStorage.setItem("video", JSON.stringify(data));
    window.location.href = "playVideo.html";
}

let filter = async () => {
    let data = await getData(q);
    data = data.filter((el) => {
        return el.snippet.channelId === "UClVbhSLxwws-KSsPKz135bw";
    });
    append(data);
}
