// initialize algorithm variables
let gridNumber = 16;
let gridWidth = window.innerWidth;
let gridHeight = window.innerHeight;
let squareSize = '';

// initialize DOM variables
const head = document.querySelector('head');
const headStyle = document.createElement('style');
const container = document.querySelector('.container');
const grid = document.createElement('div');
const resetButton = document.createElement('button');

// calculate square size and insert style into head
function calcSquare() {
    if (gridHeight < gridWidth) {
        squareSize = (gridHeight * .70) / gridNumber;
    } else {
        squareSize = (gridWidth * .70) / gridNumber;
    }
    headStyle.textContent = `.square {height: ${squareSize}px; width: ${squareSize}px;}`;
    head.appendChild(headStyle);
}
calcSquare();

// watch for window resizing and recalculate square size
window.addEventListener('resize', () => {
    gridWidth = window.innerWidth;
    gridHeight = window.innerHeight;
    calcSquare();
});

// reset grid button
function resetGrid() {
    // squares.forEach((square) => {
    //     square.classList.remove('active');
    // });
    gridNumber = prompt("How many squares per side? (100 max)", "16");
    if ((gridNumber != null) && (gridNumber <= 100)) {
      calcSquare(gridNumber);
      grid.textContent = '';
      createGrid();
      fillSquares();
    }
}
resetButton.classList.add('reset-button');
resetButton.textContent = 'reset';
container.appendChild(resetButton);
resetButton.addEventListener('click', resetGrid);

// create grid
grid.classList.add('grid');
container.appendChild(grid);
function createGrid() {
    for (let i = 0; i < gridNumber; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        grid.appendChild(row);
        for (let i = 0; i < gridNumber; i++) {
            let square = document.createElement('div');
            square.classList.add('square');
            row.appendChild(square);
        }
    }
}
createGrid();

// fill squares on mouseover
function fillSquares() {
    // query all squares
    let squares = document.querySelectorAll('.square');
    // loop through each square
    squares.forEach((square) => {
        // and add a 'mouseover' listener
        square.addEventListener('mouseover', () => {
            // add active class 
            square.classList.add('active');
        });
    });
}
fillSquares();
