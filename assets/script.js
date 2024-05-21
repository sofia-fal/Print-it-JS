const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const arrowLeft = document.querySelector(".arrow_left")
const arrowRight = document.querySelector(".arrow_right")
const totalSlides = slides.length
const bannerImg = document.querySelector(".banner-img");
const bannerText = document.querySelector("#banner p");
const dotsContainer = document.querySelector(".dots");
let currentSlide = 0;

updateDots();
updateBanner();

arrowLeft.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateDots()
	updateBanner();
});

arrowRight.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateDots()
	updateBanner();
});

function updateDots() {
    dotsContainer.innerHTML = "";
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        if (i === currentSlide) {
            dot.classList.add("dot_selected");
        }
        dotsContainer.appendChild(dot);
    }
}

function updateBanner() {
    bannerImg.src = "./assets/images/slideshow/" + slides[currentSlide].image;
    bannerText.innerHTML = slides[currentSlide].tagLine;
}