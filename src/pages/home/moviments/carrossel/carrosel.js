const prevButton = document.querySelector("#prevent");
const nextButton = document.querySelector("#next");
const carousel = document.querySelector(".images_carouse");

prevButton.addEventListener("click", () => {
    carousel.scrollLeft -= carousel.offsetWidth;
});

nextButton.addEventListener("click", () => {
    carousel.scrollLeft += carousel.offsetWidth;
});
