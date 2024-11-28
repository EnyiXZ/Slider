const images = [
    { src: "img/foto1.jpg", caption: "Este es el titular de la imagen 1" },
    { src: "img/foto2.jpg", caption: "Este es el titular de la imagen 2" },
    { src: "img/foto3.jpg", caption: "Este es el titular de la imagen 3" },
    { src: "img/foto4.jpg", caption: "Este es el titular de la imagen 4" },
    { src: "img/foto5.jpg", caption: "Este es el titular de la imagen 5" },
    { src: "img/foto6.jpg", caption: "Este es el titular de la imagen 6" }
];

const marcador = [
    { src: "img/new-moon.png" },
    { src: "img/dry-clean.png" }
];

let currentIndex = 0;

const sliderContainer = document.getElementById("slider");
const markersContainer = document.getElementById("markers");

const imgElement = document.createElement("img");
const captionElement = document.createElement("div");
const prevButton = document.createElement("img");
const nextButton = document.createElement("img");

captionElement.classList.add("caption");
prevButton.classList.add("nav-button", "prev");
nextButton.classList.add("nav-button", "next");

prevButton.src = "./img/flecha-correcta-izq.png";
nextButton.src = "./img/flecha-correcta-der.png";

function updateSlider() {
    imgElement.src = images[currentIndex].src;
    captionElement.innerText = images[currentIndex].caption;
    updateMarkers();
}

const markers = images.map((_, index) => {
    const marker = document.createElement("img");
    marker.classList.add("marker");
    marker.src = index === currentIndex ? marcador[0].src : marcador[1].src;
    markersContainer.appendChild(marker);
    return marker;
});

function updateMarkers() {
    markers.forEach((marker, index) => {
        marker.src = index === currentIndex ? marcador[0].src : marcador[1].src;
    });
}

prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    updateSlider();
});

nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    updateSlider();
});

sliderContainer.appendChild(prevButton);
sliderContainer.appendChild(imgElement);
sliderContainer.appendChild(nextButton);
sliderContainer.appendChild(captionElement);

updateSlider();
