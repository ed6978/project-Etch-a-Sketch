const gridContainer = document.getElementById("grid-container");
const gridButtonGenerator = document.createElement("button");

//creates and generates grids
function generateGrid(rows, cols) {
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const gridCell = document.createElement("div");
      gridCell.classList.add("grid-cell");
      gridCell.addEventListener("click", changeColor);
      gridContainer.appendChild(gridCell);
    }
  }
}
generateGrid(16, 16);

function changeColor(event) {
  event.target.style.backgroundColor = "black";
}
console.log(changeColor);

function resetGridCell() {
  const gridCells = document.querySelectorAll(".grid-cell");
  gridCells.forEach((cell) => {
    cell.style.backgroundColor = "";
  });
}

const resetButton = document.createElement("button");
resetButton.textContent = "Reset";
resetButton.classList.add("reset-button");
resetButton.addEventListener("click", resetGridCell);
document.body.appendChild(resetButton);
