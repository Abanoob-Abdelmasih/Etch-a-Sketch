'use strict';

const container = document.querySelector('.container');

function changeColor(e) {
  console.log(e);
  if (e.target.classList.contains('gridItem')) {
    e.target.classList.add('hovered');
  }
}

for (let i = 0; i < 256; i++) {
  const div = document.createElement('div');
  div.classList.add('gridItem');
  container.appendChild(div);
}

const divs = document.querySelectorAll('div');
console.log(divs);

divs.forEach((div) => {
  div.addEventListener('mouseenter', changeColor);
});
