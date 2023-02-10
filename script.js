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

generateGrid(gridSize);

