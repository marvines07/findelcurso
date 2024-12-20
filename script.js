alert("Bienvenido a la mejor heladería");
//seleción de elementos
const carouselImages = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel-images img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const neonText = document.getElementById('neon-text');
const colors = [
    '0 0 5px #00ffff, 0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 40px #00e0e0, 0 0 80px #00b8b8',
    '0 0 5px #ff00ff, 0 0 10px #ff00ff, 0 0 20px #ff00ff, 0 0 40px # e000e0, 0 0 80px #b800b8',
    '0 0 5px #ffff00, 0 0 10px #ffff00, 0 0 20px #ffff00, 0 0 40px #e0e000, 0 0 80px #b8b800'];
let colorIndex = 0;
function changeGlow(){
    neonText.style.textShadow = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
}
setInterval(changeGlow, 500);
//variables
let currentIndex = 0;
const imageWhidth = images[0].clientWidth;

//funcion para mover el carrusel

function updateCarousel(){
    const offset= -currentIndex * imageWhidth;
    carouselImages.style.transform = `translateX(${offset}px)`};

//event listeners
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
});
prevButton.addEventListener('click',() => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel();
});
