function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/*
 * Button
 */
const $btn = document.getElementById("btn");

// luisteren naar click event
$btn.addEventListener("click", function (event) {
  event.currentTarget.style.background = "orange";
});

/*
 * Button win
 */
const $btnWin = document.getElementById("btn-win");

$btnWin.addEventListener("mouseenter", function (e) {
  e.currentTarget.style.left = `${generateRandomNumber(5, 95)}vw`;
  e.currentTarget.style.top = `${generateRandomNumber(5, 95)}vh`;
});

$btnWin.addEventListener("click", function (e) {
  window.alert("Je hebt gewonnen");
});

/*
 * Rectangles
 */
const $rectangles = document.querySelectorAll(".rectangle");
for (const $rectangle of $rectangles) {
  $rectangle.addEventListener("click", function (e) {
    console.log(e);

    e.currentTarget.style.transform = "rotate(180deg)";
  });
}
