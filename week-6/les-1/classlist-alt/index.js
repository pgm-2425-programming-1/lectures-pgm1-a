(function () {
  const $btn = document.getElementById("btn-toggle");
  const $circle = document.getElementById("circle");

  $btn.innerHTML = getButtonText();

  $btn.addEventListener("click", function (e) {
    // kortste manier
    $circle.classList.toggle("alternative");

    $btn.innerHTML = getButtonText();
  });

  function getButtonText() {
    if ($circle.classList.contains("alternative")) {
      return "Toon de cirkel";
    } else {
      return "Toon de rechthoek";
    }
  }
})();
