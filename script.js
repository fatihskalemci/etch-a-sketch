const container = document.querySelector(".pad-container");

const redrawButton = document.querySelector("#redraw");
redrawButton.addEventListener('click', () => {
  let newGridSize = 16
  do {
    newGridSize = prompt("Enter new grid size (max: 100)");
  } while (newGridSize > 100 || newGridSize <= 0 || isNaN(newGridSize) || Math.floor(+newGridSize) !== +newGridSize)
  clearGrid();
  setGrid(+newGridSize);
})

let padSide = 16;

function setGrid(sidePixels){
  let padPixelNumber = sidePixels * sidePixels;

  for (let i = 0; i < padPixelNumber; i++) {
    const div = document.createElement("div");
    div.classList.add("pixel");
    div.style.flex = `0 0 ${100/sidePixels}%`;
    div.addEventListener('mouseenter', () => {
        div.style.backgroundColor = "black"
    });
    container.appendChild(div);
  }
}

function clearGrid() {
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
}



setGrid(padSide)

