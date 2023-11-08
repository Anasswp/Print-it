const slides = [
    {
        "image": "slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
]


// Declaration des constantes //
const img = document.querySelector('#banner .banner-img');
const tagline = document.querySelector('#banner p');
const dotsContainer = document.querySelector('.dots');
const flecheGauche = document.querySelector('.arrow_left');
const flecheDroite = document.querySelector('.arrow_right');

let indexSlideActive = 0;

document.addEventListener("DOMContentLoaded", function () {

    // Ajout d'Event Listener et de console.log afin de vérifier le fonctionnement //
    flecheGauche.addEventListener('click', function () {
        // Création d'une boucle
        if (indexSlideActive === 0) {
            indexSlideActive = slides.length - 1;
        } else {
            // Ajout au défilement au clic //
            indexSlideActive--
        }
        updateCarousel(indexSlideActive)
    });

    flecheDroite.addEventListener('click', function () {
        // Création d'une boucle //
        if (indexSlideActive === slides.length - 1) {
            indexSlideActive = 0;
        } else {
            // Ajout du défilement au clic //
            indexSlideActive++
        }
        updateCarousel(indexSlideActive)
    });
});

// Initialisation du carrousel //
document.addEventListener("DOMContentLoaded", function () {
    updateCarousel(indexSlideActive);
    updateDots(indexSlideActive);
});

function updateCarousel(indexSlideActive) {
    // Mise à jour de l'image et du texte //
    const slide = slides[indexSlideActive];
    img.src = `assets/images/slideshow/${slide.image}`;
    tagline.innerHTML = slide.tagLine;

    // Mise à jour des dots //
    updateDots(indexSlideActive);
}

function updateDots(indexSlideActive) {
    // Réinitialisation des dots //
    dotsContainer.innerHTML = '';

    // Création des dots pour chaque image //
    slides.forEach((slide, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dotsContainer.appendChild(dot);
        if (index === indexSlideActive) {
            dot.classList.add('dot_selected');
        }   
    });
}