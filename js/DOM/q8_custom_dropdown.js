// q8_custom_dropdown.js
const dd = document.getElementById('custom-dd');
const btn = document.getElementById('dd-btn');
const options = document.getElementById('dd-options');

// Toggle options on button click
btn.addEventListener('click', (e)=>{
  e.stopPropagation();
  options.style.display = options.style.display === 'block' ? 'none' : 'block';
});

// Option click updates button text
options.addEventListener('click', (e)=>{
  const opt = e.target.closest('div[data-value]');
  if (!opt) return;
  btn.textContent = opt.textContent;
  options.style.display = 'none';
});

// Use capturing phase to detect outside click and close dropdown
document.addEventListener('click', (e)=>{
  // this runs in capture phase by default here we can't set via addEventListener third param omitted; set capture true
}, true);

// attach actual closing listener in capture phase to close when clicking outside
document.addEventListener('click', (e)=>{
  if (!dd.contains(e.target)) options.style.display = 'none';
}, true);
