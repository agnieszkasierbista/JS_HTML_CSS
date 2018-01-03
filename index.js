"use strict"

// let messageA;
// let messageB;

// messageA = "Lalala";
// messageB = "Hohoho!";

// alert(messageA);
// alert(messageB);

// let name = prompt("What is your name?");
// alert(name);

// let age = prompt("How old are you?", "");
// let accessAllowed = (age > 18) ? true : false; 
// alert(accessAllowed);

authorize();

const authBtn = document.getElementById("authorization");

authBtn.addEventListener('click', authorize);

function authorize() {

    const userName = prompt("Who are you?");

    if (userName == "Kowalski") {
        const password = prompt("Gimmie your pasword?");

        if (password == "love1") {
            alert("Wilkomen!");
        } else if (password == null) {
            alert("Canceled");
        } else {
            alert("Wrong password!");
        }

    } else if (userName == null) {
        alert("Canceled");
    } else {
        alert("I don't know you.");
    }

}





