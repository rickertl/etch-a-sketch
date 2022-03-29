// initialize algorithm variables
const gridNumber = 16;
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
        squareSize = (gridHeight * .75) / gridNumber;
    } else {
        squareSize = (gridWidth * .75) / gridNumber;
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
    squares.forEach((square) => {
        square.classList.remove('active');
    });
}
resetButton.classList.add('reset-button');
resetButton.textContent = 'reset';
resetButton.setAttribute('onClick', 'resetGrid()')
container.appendChild(resetButton);

// create grid
grid.classList.add('grid');
container.appendChild(grid);
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

// fill squares on mouseover
// query all squares
const squares = document.querySelectorAll('.square');
// loop through each square
squares.forEach((square) => {
    // and add a 'mouseover' listener
    square.addEventListener('mouseover', () => {
        // add active class 
        square.classList.add('active');
    });
});
