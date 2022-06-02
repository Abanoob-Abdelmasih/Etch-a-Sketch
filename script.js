'use strict';

const container = document.querySelector('.container');

for (let i = 0; i < 256; i++) {
  const div = document.createElement('div');
  div.classList.add('gridItem');
  container.appendChild(div);
}

function changeColor(e) {
  if (e.target.classList.contains('gridItem')) {
    e.target.classList.add('hovered');
  }
}

const divs = document.querySelectorAll('div');

divs.forEach((div) => {
  div.addEventListener('mouseenter', changeColor);
});
