const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

const noImages = [
    "images/2.jpeg",
    "images/3.jpeg",
    "images/4.jpeg",
    "images/5.jpeg",
    "images/6.jpeg",
    "images/7.jpeg",
    "images/8.jpeg",
    "images/9.jpeg"
];

let index = 0;

// Función para mover el botón y cambiar imagen
noBtn.addEventListener("mouseenter", () => {
    // 1. Mover el botón a una posición aleatoria
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;

    // 2. Cambiar la imagen de fondo (de la 2 a la 9)
    if (index < noImages.length) {
        document.body.style.backgroundImage = `url('${noImages[index]}')`;
        index++;
    } else {
        index = 0; // Reinicia las imágenes si sigue intentando dar a No
    }
});

// Cuando por fin dice que SÍ
yesBtn.addEventListener("click", () => {
    document.body.style.backgroundImage = "url('images/Final.jpeg')";
    document.querySelector("h1").innerText = "¡Sabía que dirías que sí! 💖🥰";
    document.querySelector(".buttons").style.display = "none";
});
