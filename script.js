const noButton = document.getElementById("no");
const yesButton = document.getElementById("yes");
const body = document.body;

// Fondos cuando intenta presionar "No"
const noBackgrounds = [
  "2.jpeg",
  "3.jpeg",
  "4.jpeg",
  "5.jpeg",
  "6.jpeg",
  "7.jpeg",
  "8.jpeg",
  "9.jpeg"
];

// Fondo final cuando presiona "Sí"
const yesBackground = "Final.jpeg";

let currentIndex = 0;
let accepted = false;

// Cuando el mouse pasa sobre "No"
noButton.addEventListener("mouseover", () => {
  if (accepted) return;

  const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
  const y = Math.random() * (window.innerHeight - noButton.offsetHeight);

  noButton.style.left = `${x}px`;
  noButton.style.top = `${y}px`;

  body.style.backgroundImage = `url('${noBackgrounds[currentIndex]}')`;

  currentIndex++;
  if (currentIndex >= noBackgrounds.length) {
    currentIndex = 0;
  }
});

// Cuando presiona "Sí"
yesButton.addEventListener("click", () => {
  accepted = true;
  body.style.backgroundImage = `url('${yesBackground}')`;
  alert("💖 Sabía que dirías que sí 💖");
});
