// q6_register.js
(function(){
  const form = document.getElementById('q6-form');
  const msg = document.getElementById('q6-msg');
  const base = 'http://localhost:3006/users';

  form.addEventListener('submit', function(e){
    e.preventDefault();
    const fd = new FormData(form);
    const name = fd.get('name').trim();
    const email = fd.get('email').trim();

    msg.textContent = 'Checking...';

    // Check duplicate
    axios.get(base, { params: { email } })
      .then(resp=>{
        if(Array.isArray(resp.data) && resp.data.length>0){
          msg.textContent = 'Email already registered.';
        } else {
          // register
          axios.post(base, { name, email })
            .then(()=> msg.textContent = 'Registered successfully.')
            .catch(()=> msg.textContent = 'Failed to register.');
        }
      })
      .catch(()=> msg.textContent = 'Failed to check email.');
  });
})();
