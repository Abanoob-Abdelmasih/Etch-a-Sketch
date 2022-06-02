'use strict';

const container = document.querySelector('.container');
const customInput = document.querySelector('.custom-size-input');

// window.addEventListener('load', layoutMaker);

// /////////////////////////////////////////////////////////////////////////

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function layoutMaker(size = 16) {
  removeAllChildNodes(container);
  container.setAttribute(
    'style',
    `grid-template-rows: repeat(${size}, 1fr); grid-template-columns: repeat(${size}, 1fr);`
  );
  const n = size * size;
  for (let i = 0; i < n; i++) {
    const div = document.createElement('div');
    div.classList.add('gridItem');
    container.appendChild(div);
  }

  function changeColor(e) {
    if (e.target.classList.contains('gridItem')) {
      e.target.classList.add('hovered');
      console.log(e.target);
    }
  }

  const divs = document.querySelectorAll('div');

  divs.forEach((div) => {
    div.addEventListener('mouseenter', changeColor);
  });
}

// /////////////////////////////////////////////////////////////////////////

customInput.addEventListener('click', () => {
  const sketchSize = prompt('Enter the desired size (min: 2 - max: 100)', '16');
  if (sketchSize >= 2 && sketchSize <= 100) {
    layoutMaker(sketchSize);
  } else {
    alert('Invalid value');
  }
});

// /////////////////////////////////////////////////////////////////////////

layoutMaker();
