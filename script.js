const btnStart = document.querySelector('#btn-start');
btnStart.addEventListener(`click`, promptUser);
const grid = document.querySelector('.grid');
const squares = document.querySelectorAll('.grid-item');



function promptUser() {
    document.querySelector('.grid').innerHTML = '';
    let gridSize = parseInt(prompt(`Pick grid size between 16 and 100`));
    if (gridSize < 16 || gridSize > 100) {
        alert(`Please pick a number between 16 and 100`);
    } else {
        createGrid(gridSize);
        const squares = document.querySelectorAll('.grid-item');
        squares.forEach((square) => {
        square.addEventListener(`mouseover`, changeColor);
        } );
    }
}

function createGrid(gridSize) {
    
    for (let i=0; i < gridSize; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-item');
        document.querySelector('.grid').appendChild(square);
        
    }
}
           
function changeColor(e) {
        e.target.style.backgroundColor = `black`;
    
    
}