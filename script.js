const gridContainer = document.getElementById("grid-container");
const gridButtonGenerator = document.createElement("button");

//creates and generates grids //
function generateGrid(rows, cols) {
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const gridCell = document.createElement("div");
      gridCell.classList.add("grid-cell");
      gridCell.addEventListener("mouseover", changeColor); // color squares
      gridCell.addEventListener("click", eraser); // eraser
      gridContainer.appendChild(gridCell);
    }
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

// 34x34 square grid button//

const userGridChoiceOne = document.createElement("button");
userGridChoiceOne.textContent = "34x34";
userGridChoiceOne.classList.add("user-choice-one");

// userGridChoiceOne.addEventListener("click", function () {
//   generateGrid(34, 34);
// });
// document.body.appendChild(userGridChoiceOne);

// eraser //
const eraserBtn = document.createElement("button");
eraserBtn.textContent = "Eraser";
eraserBtn.addEventListener("click", function () {
  gridContainer.querySelectorAll(".grid-cell").forEach((cell) => {
    cell.removeEventListener("mouseover", changeColor);
    cell.addEventListener("mouseover", eraser);
  });
});
document.body.appendChild(eraserBtn);

function color(event) {
  cell.removeEventListener("mouseover", eraser);
  cell.addEventListener("mouseover", changeColor);
}

const colorBtn = document.createElement("button");
colorBtn.textContent = "Color";
colorBtn.addEventListener();
