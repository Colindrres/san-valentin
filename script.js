const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const bgMusic = document.getElementById("bgMusic");
const errorSound = document.getElementById("errorSound");
const counterText = document.getElementById("counter");
const mainTitle = document.getElementById("mainTitle");
const finalMessage = document.getElementById("finalMessage");

// Tus 8 imágenes de la carpeta images
const noImages = [
    "images/2.jpeg", "images/3.jpeg", "images/4.jpeg",
    "images/5.jpeg", "images/6.jpeg", "images/7.jpeg",
    "images/8.jpeg", "images/9.jpeg"
];

let index = 0;
let yesScale = 1; 

function huir() {
    // Activar música de fondo al primer intento (si no ha sonado ya)
    bgMusic.play().catch(() => {});

    // Volver el botón NO flotante y moverlo
    noBtn.style.position = "fixed";
    const maxX = window.innerWidth - noBtn.offsetWidth - 30;
    const maxY = window.innerHeight - noBtn.offsetHeight - 30;
    
    noBtn.style.left = `${Math.floor(Math.random() * maxX)}px`;
    noBtn.style.top = `${Math.floor(Math.random() * maxY)}px`;

    // Sonido gracioso de error
    errorSound.currentTime = 0;
    errorSound.play();

    // Vibración para celulares Android
    if (navigator.vibrate) {
        navigator.vibrate(80);
    }

    // Cambiar imagen según el contador (máximo 8)
    if (index < noImages.length) {
        document.body.style.backgroundImage = `url('${noImages[index]}')`;
        index++;
        counterText.innerText = `Intentos de huida: ${index} / 8`;
    }

    // El botón SI crece un poco (máximo hasta el doble 2.0)
    if (yesScale < 2) {
        yesScale += 0.12;
        yesBtn.style.transform = `scale(${yesScale})`;
    }
}

// Evento para computadoras
noBtn.addEventListener("mouseenter", huir);

// Evento para celulares (evita que se presione el SI por error)
noBtn.addEventListener("touchstart", (e) => {
    e.preventDefault();
    huir();
});

// Cuando por fin logran darle al SI
yesBtn.addEventListener("click", () => {
    // Celebración con confeti de colores románticos
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff4d6d', '#ffffff', '#ffb3c1']
    });

    // Cambiar a imagen final y limpiar pantalla
    document.body.style.backgroundImage = "url('images/Final.jpeg')";
    mainTitle.innerText = "¡Sabía que dirías que sí! 💖🥰";
    document.querySelector(".buttons").style.display = "none";
    counterText.style.display = "none";

    // Mostrar el mensaje romántico final
    finalMessage.classList.remove("hidden");
});
