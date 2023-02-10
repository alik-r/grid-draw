'use strict';

const grid = document.querySelector('#grid');
let gridSize = 8;

function getRandColor() {
  const rand256 = () => Math.floor(Math.random() * 256);
  return `rgb(${rand256()}, ${rand256()}, ${rand256()})`;
}

function changeColor(event) {
  event.target.style.backgroundColor = getRandColor();
}

function generateGrid(size) {
    for(let i = 0;i < gridSize * gridSize;i++) {
        grid.style['grid-template-columns'] = `repeat(${gridSize}, 1fr)`;
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-square');
        gridSquare.addEventListener('mouseover', changeColor);
        grid.appendChild(gridSquare);
    }    
}

// Resizing
function resizeGrid() {
  const newSize = Number(
      prompt("Enter number of squares per side (max. 40):")
    );
    if (newSize && newSize <= 40) {
      gridSize = newSize;
      grid.innerHTML = "";
      generateGrid(gridSize);
    } else {
      console.log('Grid sizes larger than 40 not supported.')
    }
}

const btnResize = document.querySelector('.resize');
btnResize.addEventListener('click', resizeGrid);

// Clearing
const initColor = 'whitesmoke';

function clearGrid() {
    if(grid.innerHTML !== "") {
      const squares = document.querySelectorAll('.grid-square');
      for(const square of squares) {
        square.style.backgroundColor = initColor;
      }
    }
}

const btnClear = document.querySelector('.clear');
btnClear.addEventListener('click', clearGrid);

generateGrid(gridSize);

