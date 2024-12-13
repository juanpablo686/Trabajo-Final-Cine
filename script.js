
function moveCarousel(carouselId) {
    const carousel = document.getElementById(carouselId);
    const items = carousel.querySelector('.carousel-items');
    let currentPosition = 0;
    const itemWidth = items.querySelector('img').offsetWidth + 15; 

    setInterval(() => {
        currentPosition -= itemWidth; 
        if (Math.abs(currentPosition) >= items.scrollWidth) {
            currentPosition = 0; 
        }
        items.style.transform = `translateX(${currentPosition}px)`;
    }, 3000); 
}


document.addEventListener("DOMContentLoaded", () => {
    moveCarousel("carousel1");
    moveCarousel("carousel2");
});
