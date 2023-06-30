const gridContainer = document.getElementById("grid-container");
const gridButtonGenerator = document.createElement("button");

//creates and generates grids
function generateGrid(rows, cols) {
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const gridCell = document.createElement("div");
      gridCell.classList.add("grid-cell");
      gridContainer.appendChild(gridCell);
    }
  }
}
generateGrid(30, 30);
