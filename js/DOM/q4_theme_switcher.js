// q4_theme_switcher.js
// Use setAttribute and store current theme in data-theme attribute on body
const themeButtons = document.querySelectorAll('.btn');
const body = document.body;

themeButtons.forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const t = btn.getAttribute('data-theme');
    // apply theme via setAttribute
    body.setAttribute('data-theme', t);
    // persist attribute explicitly (already set on body)
    body.dataset.theme = t;
  });
});

// On load, ensure attribute exists
if (!body.getAttribute('data-theme')) {
  body.setAttribute('data-theme','light');
  body.dataset.theme = 'light';
}
