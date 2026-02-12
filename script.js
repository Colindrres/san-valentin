const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const bgMusic = document.getElementById("bgMusic");
const errorSound = document.getElementById("errorSound");
const victorySound = document.getElementById("victorySound");
const mainTitle = document.getElementById("mainTitle");
const finalMessage = document.getElementById("finalMessage");
const typewriterText = document.getElementById("typewriterText");
const startBtn = document.getElementById("startBtn");
const welcomeScreen = document.getElementById("welcomeScreen");
const mainContainer = document.getElementById("mainContainer");

const noImages = ["images/3.jpeg", "images/4.jpeg", "images/5.jpeg", "images/6.jpeg", "images/7.jpeg", "images/8.jpeg", "images/9.jpeg"];
let index = 0;
let yesScale = 1;

// Función para el efecto máquina de escribir
function typeWriter(text, i, fnCallback) {
    if (i < text.length) {
        typewriterText.innerHTML = text.substring(0, i + 1);
        setTimeout(function() {
            typeWriter(text, i + 1, fnCallback)
        }, 100);
    } else if (typeof fnCallback == 'function') {
        setTimeout(fnCallback, 700);
    }
}

startBtn.addEventListener("click", () => {
    welcomeScreen.classList.add("hidden");
    mainContainer.classList.remove("hidden");
    bgMusic.play().catch(e => console.log("Audio bloqueado:", e));
});

function huir() {
    noBtn.style.position = "fixed";
    const maxX = window.innerWidth - noBtn.offsetWidth - 30;
    const maxY = window.innerHeight - noBtn.offsetHeight - 30;
    noBtn.style.left = `${Math.floor(Math.random() * maxX)}px`;
    noBtn.style.top = `${Math.floor(Math.random() * maxY)}px`;

    errorSound.currentTime = 0;
    errorSound.play();
    if (navigator.vibrate) navigator.vibrate(80);

    if (index < noImages.length) {
        document.body.style.backgroundImage = `url('${noImages[index]}')`;
        index++;
    }

    if (yesScale < 1.7) {
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
    mainTitle.innerText = "¡Yo sabía que si querías! 💖🥰";
    document.querySelector(".buttons").style.display = "none";
    
    finalMessage.classList.remove("hidden");
    typewriterText.classList.add("animating-cursor");
    
    // Inicia el efecto de escritura con tu mensaje
    typeWriter("Ahora si besemonos ya!... \n ¡ jajaja mentira, Te amo mucho pero si besemonos! ✨", 0);
});
