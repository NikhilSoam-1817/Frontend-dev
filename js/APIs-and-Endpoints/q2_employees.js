// q2_employees.js
(function(){
  const base = 'http://localhost:3002/employees';
  const tbody = document.querySelector('#emp-table tbody');
  const errorEl = document.getElementById('q2-error');

  function showError(msg){
    errorEl.textContent = msg;
    errorEl.style.display = 'block';
    setTimeout(()=> errorEl.style.display='none', 4000);
  }

  function fetchEmployees(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', base);
    xhr.onload = function(){
      if(xhr.status>=200 && xhr.status<300){
        const list = JSON.parse(xhr.responseText);
        render(list);
      } else {
        showError('Failed to load employees');
      }
    };
    xhr.onerror = ()=> showError('Network error while loading employees');
    xhr.send();
  }

  function render(list){
    tbody.innerHTML = '';
    list.forEach(emp=>{
      const tr = document.createElement('tr');
      const statusText = document.createElement('td');
      statusText.textContent = emp.status;
      const toggleTd = document.createElement('td');
      const btn = document.createElement('button');
      btn.textContent = emp.status === 'active' ? 'Set Inactive' : 'Set Active';
      btn.addEventListener('click', function(){
        const previous = emp.status;
        // optimistic UI
        emp.status = (previous==='active'?'inactive':'active');
        statusText.textContent = emp.status;
        btn.textContent = emp.status === 'active' ? 'Set Inactive' : 'Set Active';

        // PATCH request
        const patchXhr = new XMLHttpRequest();
        patchXhr.open('PATCH', base + '/' + emp.id);
        patchXhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
        patchXhr.onload = function(){
          if(!(patchXhr.status>=200 && patchXhr.status<300)){
            // revert UI
            emp.status = previous;
            statusText.textContent = previous;
            btn.textContent = previous === 'active' ? 'Set Inactive' : 'Set Active';
            showError('Failed to update status on server');
          }
        };
        patchXhr.onerror = function(){
          // revert UI
          emp.status = previous;
          statusText.textContent = previous;
          btn.textContent = previous === 'active' ? 'Set Inactive' : 'Set Active';
          showError('Network error while updating status');
        };
        patchXhr.send(JSON.stringify({ status: emp.status }));
      });

      tr.innerHTML = `<td>${emp.name}</td>`;
      tr.appendChild(statusText);
      toggleTd.appendChild(btn);
      tr.appendChild(toggleTd);
      tbody.appendChild(tr);
    });
  }

  fetchEmployees();
})();
