function payment(s) {
    let id = setTimeout(function () {
        let img = document.getElementById("image");
        img.src = s;
    }, 5000);
}
payment("https://mmrinfotech.in/img/submited.gif");