document.addEventListener('DOMContentLoaded', function() {
    console.log("Portfolio website loaded.");
});

// Slideshow 
let slideIndex = 0;
const slides = document.querySelectorAll(".slides");

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].classList.add("active");
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

document.addEventListener("DOMContentLoaded", showSlides);
