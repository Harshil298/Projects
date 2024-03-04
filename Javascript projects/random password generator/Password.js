const txt = document.getElementById("text");
const copy = document.getElementsByClassName("copy");

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const special = "!@#$%^&*()_+?*-~";
const length = 12;

const allChr = upperCase + lowerCase + number + special;

function createPass() {
    let password = "";

    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += special[Math.floor(Math.random() * special.length)];

    while(length > password.length){
        password += allChr[Math.floor(Math.random() * allChr.length)];
    }

    txt.value = password;
}

function copyPass(){
    txt.select();
    document.execCommand("copy");
}