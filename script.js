'use strict';

const container = document.querySelector('.container');
const customInput = document.querySelector('.custom-size-input');

for (let i = 0; i < 256; i++) {
  const div = document.createElement('div');
  div.classList.add('gridItem');
  container.appendChild(div);
}

// /////////////////////////////////////////////////////////////////////////

function changeColor(e) {
  if (e.target.classList.contains('gridItem')) {
    e.target.classList.add('hovered');
  }
}

const divs = document.querySelectorAll('div');

divs.forEach((div) => {
  div.addEventListener('mouseenter', changeColor);
});

// /////////////////////////////////////////////////////////////////////////

customInput.addEventListener('click', () => {
  prompt('Enter the desired size (max: 100)', '16');
});
