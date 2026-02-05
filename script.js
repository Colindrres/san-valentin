const noButton = document.getElementById("no");
const yesButton = document.getElementById("yes");
const body = document.body;

const noBackgrounds = [
  "images/2.jpeg",
  "images/3.jpeg",
  "images/4.jpeg",
  "images/5.jpeg",
  "images/6.jpeg",
  "images/7.jpeg",
  "images/8.jpeg",
  "images/9.jpeg"
];

const yesBackground = "images/Final.jpeg";

let currentIndex = 0;
let accepted = false;

noButton.addEventListener("mouseover", () => {
  if (accepted) return;

  const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
  const y = Math.random() * (window.innerHeight - noButton.offsetHeight);

  noButton.style.left = `${x}px`;
  noButton.style.top = `${y}px`;

  body.style.backgroundImage = `url('${noBackgrounds[currentIndex]}')`;

  currentIndex = (currentIndex + 1) % noBackgrounds.length;
});

yesButton.addEventListener("click", () => {
  accepted = true;
  body.style.backgroundImage = `url('${yesBackground}')`;
  alert("💖 Sabía que dirías que sí 💖");
});
