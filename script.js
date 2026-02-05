const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const bgMusic = document.getElementById("bgMusic");
const errorSound = document.getElementById("errorSound");
const victorySound = document.getElementById("victorySound");
const mainTitle = document.getElementById("mainTitle");
const finalMessage = document.getElementById("finalMessage");
const startBtn = document.getElementById("startBtn");
const welcomeScreen = document.getElementById("welcomeScreen");
const mainContainer = document.getElementById("mainContainer");

const noImages = ["images/2.jpeg", "images/3.jpeg", "images/4.jpeg", "images/5.jpeg", "images/6.jpeg", "images/7.jpeg", "images/8.jpeg", "images/9.jpeg"];
let index = 0;
let yesScale = 1;

// Al presionar el botón de inicio, se activa la música y se muestra el juego
startBtn.addEventListener("click", () => {
    welcomeScreen.classList.add("hidden");
    mainContainer.classList.remove("hidden");
    bgMusic.play().catch(e => console.log("Audio bloqueado:", e));
});

function huir() {
    // Mover el botón NO
    noBtn.style.position = "fixed";
    const maxX = window.innerWidth - noBtn.offsetWidth - 30;
    const maxY = window.innerHeight - noBtn.offsetHeight - 30;
    noBtn.style.left = `${Math.floor(Math.random() * maxX)}px`;
    noBtn.style.top = `${Math.floor(Math.random() * maxY)}px`;

    // Efectos de sonido y vibración
    errorSound.currentTime = 0;
    errorSound.play();
    if (navigator.vibrate) navigator.vibrate(80);

    // Cambiar imágenes de fondo
    if (index < noImages.length) {
        document.body.style.backgroundImage = `url('${noImages[index]}')`;
        index++;
    }

    // El botón SÍ crece un poco (máximo 1.8 para no tapar el texto)
    if (yesScale < 1.8) {
        yesScale += 0.12;
        yesBtn.style.transform = `scale(${yesScale})`;
    }
}

noBtn.addEventListener("mouseenter", huir);
noBtn.addEventListener("touchstart", (e) => { e.preventDefault(); huir(); });

yesBtn.addEventListener("click", () => {
    bgMusic.pause();
    victorySound.play();
    confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });

    document.body.style.backgroundImage = "url('images/Final.jpeg')";
    mainTitle.innerText = "¡Sabía que dirías que sí! 💖🥰";
    document.querySelector(".buttons").style.display = "none";
    finalMessage.classList.remove("hidden");
});
