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

// NO huye
noBtn.addEventListener("mouseenter", () => {
    const x = Math.random() * (window.innerWidth - 120);
    const y = Math.random() * (window.innerHeight - 60);

    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;

    if (index < noImages.length) {
        document.body.style.backgroundImage = `url('${noImages[index]}')`;
        index++;
    }
});

// SÍ gana
yesBtn.addEventListener("click", () => {
    document.body.style.backgroundImage = "url('images/Final.jpeg')";
    document.querySelector("h1").innerText = "¡Sabía que dirías que sí! 💖🥰";
    document.querySelector(".buttons").style.display = "none";
});

