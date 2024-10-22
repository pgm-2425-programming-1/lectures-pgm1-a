(() => {
  const $title = document.getElementById("date");

  const date = new Date(1755673200000);

  $title.innerHTML = `${String(date.getDate()).padStart(2, "0")}/${String(date.getMonth() + 1).padStart(
    2,
    "0"
  )}/${date.getFullYear()}`;
})();
