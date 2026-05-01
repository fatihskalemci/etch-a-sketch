let container = document.querySelector(".pad-container");

let padSide = 64;

let padPixelNumber = padSide * padSide;

for (let i = 0; i < padPixelNumber; i++) {
    let div = document.createElement("div");
    div.classList.add("pixel");
    div.style.flex = `0 0 ${100/padSide}%`;
    div.addEventListener('mouseenter', () => {
        div.style.backgroundColor = "black"
    });
    container.appendChild(div);
}

