const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

const noImages = [
    "images/2.jpeg", "images/3.jpeg", "images/4.jpeg",
    "images/5.jpeg", "images/6.jpeg", "images/7.jpeg",
    "images/8.jpeg", "images/9.jpeg"
];

let index = 0;

/**
 * Función principal para mover el botón
 */
function huir() {
    // Al primer intento de tocarlo, lo sacamos del flujo normal
    noBtn.style.position = "fixed";

    // Calculamos límites para que no se salga de la pantalla (restamos el tamaño del botón)
    const padding = 20;
    const maxX = window.innerWidth - noBtn.offsetWidth - padding;
    const maxY = window.innerHeight - noBtn.offsetHeight - padding;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;

    // Cambiamos la imagen de fondo
    if (index < noImages.length) {
        document.body.style.backgroundImage = `url('${noImages[index]}')`;
        index++;
    } else {
        index = 0; // Reinicia el ciclo de fotos si es muy persistente
    }
}

// Para PC: Se mueve cuando el mouse se acerca
noBtn.addEventListener("mouseenter", huir);

// Para Celular: Se mueve al tocarlo y evita el click accidental en lo que esté debajo
noBtn.addEventListener("touchstart", (e) => {
    e.preventDefault(); // Bloquea el click fantasma
    huir();
});

// Botón SÍ: Final feliz
yesBtn.addEventListener("click", () => {
    document.body.style.backgroundImage = "url('images/Final.jpeg')";
    document.querySelector("h1").innerText = "¡Sabía que dirías que sí! 💖🥰";
    document.querySelector(".buttons").style.display = "none";
});
