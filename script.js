const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const bgMusic = document.getElementById("bgMusic");
const errorSound = document.getElementById("errorSound");
const victorySound = document.getElementById("victorySound");
const counterText = document.getElementById("counter");
const mainTitle = document.getElementById("mainTitle");
const finalMessage = document.getElementById("finalMessage");

const noImages = ["images/2.jpeg", "images/3.jpeg", "images/4.jpeg", "images/5.jpeg", "images/6.jpeg", "images/7.jpeg", "images/8.jpeg", "images/9.jpeg"];
let index = 0;
let yesScale = 1;

function huir() {
    // Inicia música de fondo al interactuar
    bgMusic.play().catch(() => {});

    // Movimiento aleatorio
    noBtn.style.position = "fixed";
    const maxX = window.innerWidth - noBtn.offsetWidth - 20;
    const maxY = window.innerHeight - noBtn.offsetHeight - 20;
    noBtn.style.left = `${Math.floor(Math.random() * maxX)}px`;
    noBtn.style.top = `${Math.floor(Math.random() * maxY)}px`;

    // Efectos: Sonido y Vibración
    errorSound.currentTime = 0;
    errorSound.play();
    if (navigator.vibrate) navigator.vibrate(80);

    // Imágenes y Contador
    if (index < noImages.length) {
        document.body.style.backgroundImage = `url('${noImages[index]}')`;
        index++;
        counterText.innerText = `Intentos de huida: ${index} / 8`;
    }

    // El botón SÍ crece un poco (máximo doble tamaño)
    if (yesScale < 2) {
        yesScale += 0.15;
        yesBtn.style.transform = `scale(${yesScale})`;
    }
}

noBtn.addEventListener("mouseenter", huir);
noBtn.addEventListener("touchstart", (e) => { e.preventDefault(); huir(); });

yesBtn.addEventListener("click", () => {
    // Victoria: Sonido, Confeti e Imagen Final
    bgMusic.pause();
    victorySound.play();
    confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });

    document.body.style.backgroundImage = "url('images/Final.jpeg')";
    mainTitle.innerText = "¡Sabía que dirías que sí! 💖🥰";
    document.querySelector(".buttons").style.display = "none";
    counterText.style.display = "none";
    finalMessage.classList.remove("hidden");
});
