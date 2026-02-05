const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

const noImages = [
    "images/2.jpeg", "images/3.jpeg", "images/4.jpeg",
    "images/5.jpeg", "images/6.jpeg", "images/7.jpeg",
    "images/8.jpeg", "images/9.jpeg"
];

let index = 0;

function moverBotonNo() {

    noBtn.style.position = "fixed";

    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;

    if (index < noImages.length) {
        document.body.style.backgroundImage = `url('${noImages[index]}')`;
        index++;
    } else {
        index = 0;
    }
}

noBtn.addEventListener("mouseenter", moverBotonNo);

noBtn.addEventListener("touchstart", (e) => {
    e.preventDefault(); 
    moverBotonNo();
});

yesBtn.addEventListener("click", () => {
    document.body.style.backgroundImage = "url('images/Final.jpeg')";
    document.querySelector("h1").innerText = "¡Sabía que dirías que sí! 💖🥰";
    document.querySelector(".buttons").style.display = "none";
});
