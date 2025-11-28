// q1_products.js
// Product List Manager: add, edit, delete using event delegation
const q1Input = document.getElementById('q1-input');
const q1AddBtn = document.getElementById('q1-add');
const productList = document.getElementById('product-list');

let products = [];

// Render the list from the products array
function renderProducts() {
  productList.innerHTML = '';
  products.forEach((p, idx) => {
    const li = document.createElement('li');
    li.dataset.index = idx;
    li.innerHTML = `
      <span class="label">${escapeHtml(p)}</span>
      <div class="controls">
        <button class="edit">Edit</button>
        <button class="delete">Delete</button>
      </div>
    `;
    productList.appendChild(li);
  });
}

// Escape simple html to avoid injection in this demo
function escapeHtml(s){ return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

// Add
q1AddBtn.addEventListener('click', () => {
  const value = q1Input.value.trim();
  if (!value) return;
  products.push(value);
  q1Input.value = '';
  renderProducts();
});

// Event delegation for edit/delete and handling outside click to auto-save
productList.addEventListener('click', (e) => {
  const li = e.target.closest('li');
  if (!li) return;
  const idx = Number(li.dataset.index);

  if (e.target.classList.contains('delete')) {
    products.splice(idx,1);
    renderProducts();
    return;
  }

  if (e.target.classList.contains('edit')) {
    enterEditMode(li, idx);
    return;
  }
});

// Enter edit mode for a list item
function enterEditMode(li, idx){
  // If any other editing item exists, save it first
  const currentEditing = productList.querySelector('.editing');
  if (currentEditing && currentEditing !== li) {
    saveEdit(currentEditing);
  }

  li.classList.add('editing');
  const label = li.querySelector('.label');
  const original = products[idx];
  label.style.display = 'none';

  const input = document.createElement('input');
  input.type = 'text';
  input.value = original;
  input.dataset.index = idx;
  li.insertBefore(input, li.firstChild);

  input.focus();

  // When clicking outside (on document) -> save
  function outsideClickHandler(ev){
    if (!li.contains(ev.target)) {
      saveEdit(li);
    }
  }

  document.addEventListener('click', outsideClickHandler, { once: true });

  // Save on Enter
  input.addEventListener('keydown', (ev)=>{
    if (ev.key === 'Enter') {
      ev.preventDefault();
      saveEdit(li);
    }
  });
}

// Save edit from li
function saveEdit(li){
  const input = li.querySelector('input');
  if (!input) return;
  const idx = Number(input.dataset.index);
  const newVal = input.value.trim();
  if (newVal) products[idx] = newVal;
  li.classList.remove('editing');
  input.remove();
  renderProducts();
}

// initial sample
products = ['Laptop','Mouse','Keyboard'];
renderProducts();
