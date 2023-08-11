const gridContainer = document.getElementById("grid-container");
const gridButtonGenerator = document.createElement("button");
const buttonContainer = document.createElement("div");
const gridCell = document.createElement("div");

//button container to style buttons//
buttonContainer.classList.add("button-container");

//creates and generates grids //
function generateGrid(size) {
  gridContainer.innerHTML = "";
  gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const cell = gridCell.cloneNode();
    cell.classList.add("grid-cell");
    cell.addEventListener("mouseover", changeColor); // color squares.. draw button
    cell.addEventListener("mouseover", eraser); // eraser
    gridContainer.appendChild(cell);
  }
}

generateGrid(16, 16);

// drawing color //
function changeColor(event) {
  event.target.style.backgroundColor = "#1a1a1a";
}

// eraser //
function eraser(event) {
  event.target.style.backgroundColor = "#e0e0e0";
}

// reset grid //
function resetGridCell() {
  const gridCells = document.querySelectorAll(".grid-cell");
  gridCells.forEach((cell) => {
    cell.style.backgroundColor = "";
  });
}

// reset button //
const resetButton = document.createElement("button");
resetButton.textContent = "Reset";
resetButton.classList.add("reset-button");
resetButton.addEventListener("click", resetGridCell);
document.body.appendChild(resetButton);
buttonContainer.appendChild(resetButton);

// eraser //
const eraserBtn = document.createElement("button");
eraserBtn.textContent = "Eraser";
eraserBtn.classList.add("eraser");

eraserBtn.addEventListener("click", function () {
  gridContainer.querySelectorAll(".grid-cell").forEach((cell) => {
    cell.removeEventListener("mouseover", changeColor);
    cell.addEventListener("mouseover", eraser);
  });
});
document.body.appendChild(eraserBtn);
buttonContainer.appendChild(eraserBtn);

// draw button function //
const colorBtn = document.createElement("button");
colorBtn.textContent = "Draw";
colorBtn.classList.add("color-btn");

colorBtn.addEventListener("click", function () {
  gridContainer.querySelectorAll(".grid-cell").forEach((cell) => {
    cell.removeEventListener("mouseover", eraser);
    cell.removeEventListener("mouseover", randomColorPicks);
    cell.addEventListener("mouseover", changeColor);
  });
});
document.body.appendChild(colorBtn);
buttonContainer.appendChild(colorBtn);

// user grid size input //
let setGridSizeBtn = document.createElement("button");
setGridSizeBtn.textContent = "Grid Size";
setGridSizeBtn.classList.add("user-grid-choice");

setGridSizeBtn.addEventListener("click", function () {
  const value = prompt("What size would you like the grid?");
  if (typeof value === "undefined") {
    return;
  }
  if (value > 100) {
    value = alert(
      "Sorry that value is not supported please keep the format 100 or under"
    );
  } else if (value <= 100) {
    generateGrid(value);
  }
});

document.body.appendChild(setGridSizeBtn);
buttonContainer.appendChild(setGridSizeBtn);
document.body.appendChild(buttonContainer);

// random color pick //
function randomColorPicks(event) {
  const colors = [
    "red",
    "green",
    "orange",
    "pink",
    "purple",
    "blue",
    "velvet",
    "violet",
    "brown",
    "yellow",
    "#994d00",
    "lavender",
    "maroon",
    "indigo",
    "cyan",
  ];
  let randomColorIndex = Math.floor(Math.random() * colors.length);
  let randomColor = colors[randomColorIndex];
  event.target.style.background = randomColor;
}

const randomColorBtn = document.createElement("button");
randomColorBtn.classList.add("random-colors");
randomColorBtn.textContent = "Random Colors";

randomColorBtn.addEventListener("click", function () {
  gridContainer.querySelectorAll(".grid-cell").forEach((cell) => {
    cell.removeEventListener("mouseover", eraser);
    cell.removeEventListener("mouseover", changeColor);
    cell.addEventListener("mouseover", randomColorPicks);
  });
});
document.body.appendChild(randomColorBtn);
buttonContainer.appendChild(randomColorBtn);

// opacity //
let opacityIncrement = 0.1;
const maxOpacity = 1;
let increasingOpacity = true;

function darkeningEffect(event) {
  if (increasingOpacity) {
    opacityIncrement = Math.min(maxOpacity, opacityIncrement + 0.1);
    if (opacityIncrement === maxOpacity) {
      increasingOpacity = false;
    }
  } else {
    opacityIncrement = Math.max(0.1, opacityIncrement - 0.1);
    if (opacityIncrement === 0.1) {
      increasingOpacity = true;
    }
  }

  let opacityColor = `rgba(0, 0, 0, ${opacityIncrement})`;
  event.target.style.background = opacityColor;
}

const opacityButton = document.createElement("button");
opacityButton.textContent = "Opacity";
opacityButton.classList.add("opacity-button");

opacityButton.addEventListener("click", function () {
  gridContainer.querySelectorAll(".grid-cell").forEach((cell) => {
    cell.removeEventListener("mouseover", changeColor);
    cell.removeEventListener("mouseover", randomColorPicks);
    cell.removeEventListener("mouseover", eraser);
    cell.addEventListener("mouseover", darkeningEffect);
  });
});

document.body.appendChild(opacityButton);
buttonContainer.appendChild(opacityButton);

// div outskirt design
const boxDesign = document.createElement("div");
boxDesign.classList.add("box-design");
document.body.appendChild(boxDesign);
boxDesign.appendChild(gridContainer);
