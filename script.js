const gridContainer = document.getElementById("grid-container");
const gridButtonGenerator = document.createElement("button");

//creates and generates grids
function generateGrid(rows, cols) {
  gridContainer.style.gridTemplateColumns = `repeat(${cols}), 1fr)`;

  for (let i = 0; i < rows * cols; i++) {
    const gridCell = document.createElement("div");
    gridCell.classList.add("grid-cell");
    gridContainer.appendChild(gridCell);
  }
}
generateGrid(16, 16);
