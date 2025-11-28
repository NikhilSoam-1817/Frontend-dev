// q9_form.js
const form = document.getElementById('q9-form');
const nameField = document.getElementById('f-name');
const emailField = document.getElementById('f-email');
const passwordField = document.getElementById('f-password');
const msg = document.getElementById('q9-msg');

function validate(){
  let ok = true;
  // name
  if (!nameField.value.trim()) {
    document.getElementById('err-name').textContent = 'Name is required';
    ok = false;
  } else document.getElementById('err-name').textContent = '';
  // email
  if (!emailField.value.trim() || !emailField.value.includes('@')) {
    document.getElementById('err-email').textContent = 'Valid email required';
    ok = false;
  } else document.getElementById('err-email').textContent = '';
  // password
  if (!passwordField.value || passwordField.value.length < 6) {
    document.getElementById('err-password').textContent = 'Password must be at least 6 chars';
    ok = false;
  } else document.getElementById('err-password').textContent = '';
  return ok;
}

form.addEventListener('submit', (e)=>{
  e.preventDefault(); // prevent actual submission
  msg.textContent = '';
  if (validate()) {
    msg.textContent = 'Form Submitted Successfully';
    msg.className = 'success';
    form.reset();
  }
});

// remove errors as user corrects inputs
[nameField, emailField, passwordField].forEach(field=>{
  field.addEventListener('input', () => {
    validate(); // live error clearing
    msg.textContent = '';
    msg.className = '';
  });
});
