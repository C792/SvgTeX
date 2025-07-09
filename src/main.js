const { invoke } = window.__TAURI__.core;

async function print() {
  const t = document.getElementById('mathinput').value;
  const svgContainer = document.getElementById('svg');
  svgContainer.innerHTML = '';
  const rawsvg = 'https://latex.codecogs.com/svg.image?' + t;
  try {
    const response = await fetch(rawsvg);
    if (!response.ok) {
        throw new Error('Failed to fetch SVG');
    }
    const svgText = await response.text();
    svgContainer.innerHTML = svgText;
  } catch (error) {
    console.error('Error fetching SVG:', error);
  }
  // save it <- ongoing
}

function out() {
  const t = document.getElementById('mathinput').value;  
  var raw = katex.renderToString(t, {
    throwOnError: false,
    displayMode: true,
  });
  document.querySelector('span.katex-display').innerHTML = raw;

  // document.getElementById('output').innerHTML = svgString;
}

function dark() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

function color() {
  document.body.classList.remove("dark-mode");
  const color = document.getElementById('color').value;
  const bgcolor = document.getElementById('bgcolor').value;
  if (color) {
    document.querySelector('.h1').style.color = color;
  } else {
    document.querySelector('.h1').style.color = 'black';
  }
  if (bgcolor) {
    document.body.style.backgroundColor = bgcolor;
  } else {
    document.body.style.backgroundColor = 'white';
  }
}

document.addEventListener('keydown', function (event) {
  if (event.ctrlKey && event.key === 's') {
    event.preventDefault();
    print();
  }
  if (event.key === 'F1') {
    event.preventDefault();
    dark();
  }
  if (event.key === 'F2') {
    event.preventDefault();
    document.getElementById('colors').classList.toggle('hide');
  }
});