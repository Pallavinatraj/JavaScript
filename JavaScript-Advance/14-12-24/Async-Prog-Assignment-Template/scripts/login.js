let person = JSON.parse(localStorage.getItem("Person Details")) || [];

function loginButton() {

    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;

    let login = false;
    for (let a of person) {
        if (a.email === email && a.password === password) {
            alert("Login Successful");
            login = true;
            window.location.href = "index.html";
            break;
        }
    }
    if (!login) {
        alert("Invalid Credentials");
    }
}
