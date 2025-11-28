// q7_mouse_logger.js
const box = document.getElementById('box');
const coords = document.getElementById('coords');

// Track mouse move inside box
box.addEventListener('mousemove', (e)=>{
  const rect = box.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  coords.textContent = `x: ${Math.round(x)}, y: ${Math.round(y)}`;
});

// On double-click drop a red dot
box.addEventListener('dblclick', (e)=>{
  const rect = box.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const dot = document.createElement('div');
  dot.className = 'dot';
  dot.style.left = x + 'px';
  dot.style.top = y + 'px';
  box.appendChild(dot);
});
