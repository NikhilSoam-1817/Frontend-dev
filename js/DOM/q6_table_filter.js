// q6_table_filter.js
const q6Search = document.getElementById('q6-search');
const q6Table = document.getElementById('students').tBodies[0];
const q6No = document.getElementById('q6-no');

q6Search.addEventListener('input', ()=>{
  const q = q6Search.value.trim().toLowerCase();
  let visible = 0;
  Array.from(q6Table.rows).forEach(row=>{
    const name = row.cells[0].textContent.toLowerCase();
    const branch = row.cells[1].textContent.toLowerCase();
    const match = name.includes(q) || branch.includes(q);
    row.style.display = match ? '' : 'none';
    if (match) visible++;
  });
  q6No.style.display = visible === 0 ? 'block' : 'none';
});
