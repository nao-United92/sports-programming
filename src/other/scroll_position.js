let position = localStorage.getItem('position');
position = JSON.parse(position);

if (position === null) {
  position = { x: 0, y: 0 };
} else {
  window.scroll({ top: position.y, left: position.x, behavior: 'smooth' });
}

const intevalId = setInterval(() => {
  position.x = window.scrollX;
  position.y = window.scrollY;
  localStorage.setItem('position', JSON.stringify(position));
}, 1000);
