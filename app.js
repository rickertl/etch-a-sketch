// initialize algorithm variables
const gridSize = 16;

// initialize DOM variables
const container = document.querySelector('.container');
const resetButton = document.createElement('button');

// create grid
for (let i = 0; i < gridSize; i++) {
    let row = document.createElement('div');
    row.classList.add('row');
    container.appendChild(row);
    for (let i = 0; i < gridSize; i++) {
        let square = document.createElement('div');
        square.classList.add('square');
        row.appendChild(square);
    }
}

/**
 * Hover effect
 */
// query squares
const squares = document.querySelectorAll('.square');
// loop through each square
squares.forEach((square) => {
    // and add a 'click' listener
    square.addEventListener('mouseover', () => {
        square.classList.add('active');
    });
});

// reset grid
function resetGrid() {
    squares.forEach((square) => {
        square.classList.remove('active');
    });
}
resetButton.classList.add('reset-button');
resetButton.textContent = 'reset';
resetButton.setAttribute('onClick', 'resetGrid()')
container.prepend(resetButton);


