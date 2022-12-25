const btnStart = document.querySelector('#btn-start');

btnStart.addEventListener('click', promptUser);

function promptUser() {
    let gridSize = prompt(`Pick grid size between 16 and 100`);
    if (gridSize < 16 || gridSize >100) {
        alert(`Please pick a number between 16 and 100`);
    } else {
        createGrid(gridSize);
    }
}

function createGrid(gridSize) {
    const grid = document.querySelector('.grid');
    const div = document.createElement('div');
    for (let i=0; i < gridSize; i++) {
        div.classList.add('grid-item');
        document.getElementById('grid').appendChild(div);
    }
}