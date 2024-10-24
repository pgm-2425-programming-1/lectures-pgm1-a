(() => {
  const mountains = [
    { name: "Kilimanjaro", height: 5895, place: "Tanzania" },
    { name: "Everest", height: 8848, place: "Nepal" },
    { name: "Mount Fuji", height: 3776, place: "Japan" },
    { name: "Vaalserberg", height: 323, place: "Netherlands" },
    { name: "Denali", height: 6168, place: "United States" },
    { name: "Popocatepetl", height: 5465, place: "Mexico" },
    { name: "Mont Blanc", height: 4808, place: "Italy/France" },
  ];

  function getHighestMountain(mountains) {
    let highest = 0;
    for (const mountain of mountains) {
      if (mountain.height > highest) {
        highest = mountain.height;
      }
    }
    return highest;
  }

  // zoek de hoogste berg van de lijst (8848)
  const highest = getHighestMountain(mountains);

  const $mountains = document.getElementById("mountains");

  let html = "";
  for (const mountain of mountains) {
    const percentage = (mountain.height / highest) * 100;
    html += `<li class="mountains-list__item" style="height: ${percentage}%"></li>`;
  }

  $mountains.innerHTML = html;
})();
