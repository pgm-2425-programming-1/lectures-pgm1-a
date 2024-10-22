(() => {
  const $title1 = document.getElementById("title-1");

  // iets 1 keer uitvoeren na een bepaalde tijd
  setTimeout(function () {
    $title1.innerHTML = "Ik ben vervangen";
  }, 2 * 1000);

  const $name = document.getElementById("name");

  const names = ["Bruno", "Akdenis", "Sverre", "Tomasz"];

  // iets blijven uitvoeren elke x seconden
  const intervalId = setInterval(function () {
    const name = names.pop();
    if (name) {
      $name.innerHTML = name;
    } else {
      // het interval stop zetten
      clearInterval(intervalId);
    }
  }, 1 * 1000);

  function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  $circle = document.getElementById("circle");
  const colors = ["red", "blue", "green", "orange", "purple", "yellow", "cyan", "pink"];
  // set interval, dit maal met een arrow function
  setInterval(() => {
    const size = generateRandomNumber(50, 80);
    const randomColor = colors[generateRandomNumber(0, colors.length - 1)];
    $circle.style.width = size + "vw";
    $circle.style.height = size + "vw";
    $circle.style.backgroundColor = randomColor;
  }, 500);
})();
