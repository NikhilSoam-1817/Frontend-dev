// q2_char_counter.js
const textarea = document.getElementById('q2-text');
const counter = document.getElementById('counter');
const resetBtn = document.getElementById('q2-reset');
const MAX = 100;

function updateCounter(e){
  // remaining chars
  const remaining = MAX - textarea.value.length;
  counter.textContent = remaining;

  // visual warnings
  if (remaining <= 0) {
    counter.style.background = 'red';
    // prevent additional typing via input handler: here we trim to MAX
    if (textarea.value.length > MAX) textarea.value = textarea.value.slice(0, MAX);
  } else if (remaining <= 20) {
    counter.style.background = 'yellow';
  } else {
    counter.style.background = 'transparent';
  }
}

// preventDefault on keypress when at limit (to strictly follow requirement)
textarea.addEventListener('keydown', (e)=>{
  if (textarea.value.length >= MAX && e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) {
    e.preventDefault();
  }
});

textarea.addEventListener('input', updateCounter);
resetBtn.addEventListener('click', ()=>{
  textarea.value = '';
  updateCounter();
});

// initial
updateCounter();
