// q5_timetable.js
(function(){
  const select = document.getElementById('q5-day');
  const list = document.getElementById('q5-list');

  function load(day){
    list.innerHTML = 'Loading...';
    fetch('http://localhost:3005/timetable?day=' + encodeURIComponent(day))
      .then(r=>r.json())
      .then(data=>{
        list.innerHTML = '';
        if(!data || data.length===0){
          list.textContent = 'No classes today.';
          return;
        }
        data.forEach(item=>{
          const div = document.createElement('div');
          div.className = 'row';
          div.innerHTML = `<strong>${item.subject}</strong> — ${item.faculty}<div>${item.time}</div>`;
          list.appendChild(div);
        });
      }).catch(()=> { list.textContent = 'Failed to load timetable'; });
  }

  select.addEventListener('change', ()=> load(select.value));
  // initial
  load(select.value);
})();
