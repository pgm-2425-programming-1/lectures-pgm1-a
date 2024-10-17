function generateRandomNumber(max) {
  return Math.floor(Math.random() * (max + 1));
}

// const $circles = document.querySelector("#circles");
const $circles = document.getElementById("circles");

const colors = ["red", "blue", "green", "orange", "purple", "yellow"];

let html = "";

for (let i = 0; i < 3000; i++) {
  const randomWidth = generateRandomNumber(35);
  const randomColor = colors[generateRandomNumber(colors.length - 1)];
  const randomTop = generateRandomNumber(window.innerHeight - randomWidth);
  const randomLeft = generateRandomNumber(window.innerWidth - randomWidth);
  html += `<div class="circle" style="background-color: ${randomColor}; width: ${randomWidth}px; height: ${randomWidth}px; left: ${randomLeft}px; top: ${randomTop}px;"></div>`;
}

$circles.innerHTML = html;
