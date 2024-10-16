console.log("Hallo iedereen");

console.log(window.innerHeight);
console.log(window.innerWidth);

document.body.style.backgroundColor = "#ff0000";

// via tag
document.getElementsByTagName("h1")[0].innerText = "DOM is fun";

// via class -> enkel indien er meerdere zijn
document.getElementsByClassName("title")[0].innerText = "Change";

// via id
const $title = document.getElementById("title");
$title.innerText = "Tekst via id aangepast";
$title.style.fontSize = "3.5rem";

const beers = ["Stella", "Maes", "Cara Pils", "Heineken", "Duvel", "La Chouffe", "Corona"];

const $list = document.getElementById("list");
if ($list !== null) {
  let html = "";
  for (const beer of beers) {
    html += `<li class="list-item"><h2>${beer}</h2></li>`;
  }

  $list.innerHTML = html;
}
