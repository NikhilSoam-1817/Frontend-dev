// q3_multistep.js
const steps = [...document.querySelectorAll('.step')];
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

function showStep(n){
  steps.forEach((s, i)=> s.classList.toggle('active', i === n));
}

function validateName(){ 
  const v = nameInput.value.trim();
  const err = document.getElementById('err-name');
  if (!v) { err.textContent = 'Name is required'; return false; }
  err.textContent=''; return true;
}
function validateEmail(){
  const v = emailInput.value.trim();
  const err = document.getElementById('err-email');
  if (!v || !v.includes('@')) { err.textContent = 'Enter a valid email'; return false; }
  err.textContent=''; return true;
}
function validatePassword(){
  const v = passwordInput.value;
  const err = document.getElementById('err-password');
  if (!v || v.length < 6) { err.textContent = 'Password must be at least 6 characters'; return false; }
  err.textContent=''; return true;
}

document.getElementById('next-1').addEventListener('click', ()=>{
  if (validateName()) showStep(1);
});
document.getElementById('back-2').addEventListener('click', ()=> showStep(0));
document.getElementById('next-2').addEventListener('click', ()=>{
  if (validateEmail()) showStep(2);
});
document.getElementById('back-3').addEventListener('click', ()=> showStep(1));
document.getElementById('finish').addEventListener('click', ()=>{
  const ok = validatePassword();
  if (!ok) return;
  // show summary
  const s = document.getElementById('summary-content');
  s.innerHTML = `<div><strong>Name:</strong> ${escapeHtml(nameInput.value.trim())}</div>
                 <div><strong>Email:</strong> ${escapeHtml(emailInput.value.trim())}</div>`;
  showStep(3);
});

// clear error on input
[nameInput, emailInput, passwordInput].forEach(inp=>{
  inp.addEventListener('input', ()=>{
    document.getElementById('err-'+inp.id).textContent = '';
  });
});

// escape helper
function escapeHtml(s){ return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
