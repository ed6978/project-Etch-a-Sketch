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
    cell.addEventListener("mouseover", changeColor); // color squares
    cell.addEventListener("mouseover", eraser); // eraser
    gridContainer.appendChild(cell);
  }
}

// user choice on grid size through prompt//
// function setGridSize() {
//   let gridSizeInput = prompt("What size would you like the grid?");
//   let gridSize = parseInt(gridSizeInput, 10);

//   if (isNan(gridSize) || gridSize <= 0) {
//     alert("Please enter a valid positive number for your chosen grid size");
//     return;
//   }
//   generateGrid(gridSize);

//   gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
//   gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
// }

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

// color button to use after using an eraser
const colorBtn = document.createElement("button");
colorBtn.textContent = "Pen";
colorBtn.classList.add("color-btn");

colorBtn.addEventListener("click", function () {
  gridContainer.querySelectorAll(".grid-cell").forEach((cell) => {
    cell.removeEventListener("mouseover", eraser);
    cell.addEventListener("mouseover", changeColor);
  });
});
document.body.appendChild(colorBtn);

//user grid size input //

// user grid size choice
let setGridSizeBtn = document.createElement("button");
setGridSizeBtn.textContent = "Grid Size";
setGridSizeBtn.classList.add("user-grid-choice");
setGridSizeBtn.addEventListener("click", function () {
  const value = prompt("What size would you like the grid?");
  if (typeof value === "undefined") {
    return;
  }
  if (value > 100) {
    value = alert("Sorry that value is not supported");
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
