
const immagini = [
    "doc1.jpg",
    "doc1-2.jpg",
    "doc1-3.jpg",
    "doc1-4.jpg"
];

const progetto = document.querySelector(".project");
const immagine = progetto.querySelector("img");

let posizione = 0;
let intervallo;

progetto.addEventListener("mouseenter", () => {

    clearInterval(intervallo);

    intervallo = setInterval(() => {

        posizione = (posizione + 1) % immagini.length;

        immagine.src = "images/" + immagini[posizione];

    }, 900);

});

progetto.addEventListener("mouseleave", () => {

    clearInterval(intervallo);

    posizione = 0;

    immagine.src = "images/" + immagini[0];

});

