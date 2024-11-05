(function () {
  const $btn = document.getElementById("btn-toggle");
  const $box = document.getElementById("box");

  $btn.addEventListener("click", function (e) {
    if ($box.classList.contains("hidden")) {
      $box.classList.remove("hidden");
    } else {
      $box.classList.add("hidden");
    }
  });
})();
