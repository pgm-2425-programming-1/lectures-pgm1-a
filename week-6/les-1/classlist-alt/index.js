(function () {
  const $btn = document.getElementById("btn-toggle");
  const $circle = document.getElementById("circle");

  $btn.innerHTML = getButtonText();

  $btn.addEventListener("click", function (e) {
    $circle.classList.toggle("alternative");

    $btn.innerHTML = getButtonText();
  });

  function getButtonText() {
    if ($circle.classList.contains("alternative")) {
      return "Toon cirkel";
    } else {
      return "Toon rechthoek";
    }
  }
})();
