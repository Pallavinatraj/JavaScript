let name = document.querySelector("#name");
let number = document.querySelector("#number");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let confirm = document.querySelector("#confirm");

let arrPerson = JSON.parse(localStorage.getItem("Person Details")) || [];

function signUpButton() {

    if (password.value !== confirm.value) {
        alert("password should be same");
        password.value = "";
        confirm.value = "";
    }

    if (!name.value || !number.value || !email.value || !password.value || !confirm.value) {
        alert("Please fill all fields.");
        return;
    }

    let person = {
        name: name.value,
        number: number.value,
        email: email.value,
        password: password.value,
    }
    arrPerson.push(person);
    localStorage.setItem("Person Details", JSON.stringify(arrPerson));

    name.value = "";
    number.value = "";
    email.value = "";
    password.value = "";
    confirm.value = "";

    alert("Signup successful!");


}