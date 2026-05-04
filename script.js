// Starting values
let padSide = 16;
let colorMode = "black"
let scaleMode = "no-scale"


const container = document.querySelector(".pad-container");

const redrawButton = document.querySelector("#redraw");
redrawButton.addEventListener('click', () => {
  let newGridSize = 16
  do {
    newGridSize = prompt("Enter new grid size (max: 100)");
  } while (newGridSize > 100 || newGridSize <= 0 || isNaN(newGridSize) || Math.floor(+newGridSize) !== +newGridSize)
  clearGrid();
  padSide = +newGridSize;
  setGrid(padSide);
});

const colorSwitch = document.querySelector("#color-mode");
colorSwitch.addEventListener('click', () => {
  if (colorMode === "black") {
    colorMode = "random";
  } else {
    colorMode = "black";
  }
});

const clearButton = document.querySelector("#clear");
clearButton.addEventListener('click', () => {
  clearGrid();
  setGrid(padSide);
})

function setGrid(sidePixels){
  let padPixelNumber = sidePixels * sidePixels;

  for (let i = 0; i < padPixelNumber; i++) {
    const div = document.createElement("div");
    div.classList.add("pixel");
    div.style.flex = `0 0 ${100/sidePixels}%`;
    div.style.opacity = 0.1;
    div.addEventListener('mouseenter', () => {
      if (!div.style.backgroundColor || div.style.backgroundColor === "black") {
        div.style.backgroundColor = colorPicker(colorMode);
      }
      if (+div.style.opacity < 1){
        div.style.opacity = +div.style.opacity + 0.1;
      }
    });
    container.appendChild(div);
  }
}

function clearGrid() {
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
}

function colorPicker(mode) {
  switch (mode) {
    case "black":
      return "black";
      break;
    case "random":
      return randomColor();
      break;
    default:
      return "black";
      break;
  }
}

function randomColor() {
  // Source - https://stackoverflow.com/a/5365036
  // Posted by ZPiDER, modified by community. See post 'Timeline' for change history
  // Retrieved 2026-05-04, License - CC BY-SA 4.0

  return "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0")
}


setGrid(padSide)

