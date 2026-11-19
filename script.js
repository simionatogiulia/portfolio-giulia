
const progetti = [

    // 1. DIETRO LA MONTAGNA
    [
        "film1.jpg",
        "film1-2.jpg",
        "film1-3.jpg",
        "film1-4.jpg"
    ],

    // 2. GAIA
    [
        "film2.jpg",
        "film2-2.jpg",
        "film2-3.jpg",
        "film2-4.jpg"
    ],

    // 3. MA+NI
    [
        "film3.jpg",
        "film3-2.jpg",
        "film3-3.jpg",
        "film3-4.jpg",
        "film3-5.jpg",
        "film3-6.jpg"
    ],

    // 4. LA FUSCIUTA
    [
        "film4.jpg",
        "film4-2.jpg",
        "film4-3.jpg",
        "film4-4.jpg",
        "film4-5.jpg",
        "film4-6.jpg"
    ],

    // 5. GUARDAMI
    [
        "film5.jpg",
        "film5-2.jpg",
        "film5-3.jpg",
        "film5-4.jpg",
        "film5-5.jpg"
    ],

    // 6. ULTIME COSE
    [
        "film6.jpg",
        "film6-2.jpg",
        "film6-3.jpg",
        "film6-4.jpg"
    ],

    // 7. AZZURRO
    [
        "film7.jpg",
        "film7-2.jpg",
        "film7-3.jpg",
        "film7-4.jpg",
        "film7-5.jpg",
        "film7-6.jpg"
    ]

];


document.querySelectorAll(".project").forEach((progetto, indice) => {

    const immagine = progetto.querySelector("img");
    const immagini = progetti[indice];

    if (!immagini || immagini.length < 2) return;

    let posizione = 0;
    let intervallo;

    progetto.addEventListener("mouseenter", () => {

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

});
