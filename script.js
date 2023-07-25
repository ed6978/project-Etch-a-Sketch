const gridContainer = document.getElementById("grid-container");
const gridButtonGenerator = document.createElement("button");
const buttonContainer = document.createElement("div");
const gridCell = document.createElement("div");
const colors = [
  "red",
  "green",
  "orange",
  "pink",
  "purple",
  "blue",
  "black",
  "velvet",
  "violet",
  "brown",
  "yellow",
  "grey",
  "lavender",
  "maroon",
  "indigo",
  "cyan",
];

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
    cell.addEventListener("mouseover", changeColor); // color squares
    cell.addEventListener("mouseover", eraser); // eraser
    // cell.addEventListener("click", randomColorPicks);
    gridContainer.appendChild(cell);
  }
}

generateGrid(16, 16);

//drawing color //
function changeColor(event) {
  event.target.style.backgroundColor = "black";
}

function eraser(event) {
  event.target.style.backgroundColor = "white";
}

//reset grid //
function resetGridCell() {
  const gridCells = document.querySelectorAll(".grid-cell");
  gridCells.forEach((cell) => {
    cell.style.backgroundColor = "";
  });
}

//reset button //
const resetButton = document.createElement("button");
resetButton.textContent = "Reset";
resetButton.classList.add("reset-button");
resetButton.addEventListener("click", resetGridCell);
document.body.appendChild(resetButton);

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

// color button //
const colorBtn = document.createElement("button");
colorBtn.textContent = "Draw";
colorBtn.classList.add("color-btn");

colorBtn.addEventListener("click", function () {
  gridContainer.querySelectorAll(".grid-cell").forEach((cell) => {
    cell.removeEventListener("mouseover", eraser);
    cell.addEventListener("mouseover", changeColor);
  });
});
document.body.appendChild(colorBtn);

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
      "Sorry that value is not supported please keep the format under 100"
    );
  } else if (value <= 100) {
    generateGrid(value);
  }
});

document.body.appendChild(setGridSizeBtn);

//buttons //
buttonContainer.appendChild(colorBtn);
buttonContainer.appendChild(eraserBtn);
buttonContainer.appendChild(resetButton);
buttonContainer.appendChild(setGridSizeBtn);

document.body.appendChild(buttonContainer);

// random color pick //

function randomColorPicks(event) {
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
    cell.addEventListener("mouseover", randomColorPicks);
  });
});
document.body.appendChild(randomColorBtn);
