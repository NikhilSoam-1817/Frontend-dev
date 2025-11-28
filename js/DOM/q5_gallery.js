// q5_gallery.js
const gallery = document.getElementById('gallery');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalInner = document.getElementById('modal-inner');

// Open modal when clicking an image (event delegation)
gallery.addEventListener('click', (e)=>{
  const img = e.target.closest('img');
  if (!img) return;
  modalImg.src = img.src;
  modal.style.display = 'flex';
});

// Clicking outside modal closes it
modal.addEventListener('click', ()=>{
  modal.style.display = 'none';
  modalImg.src = '';
});

// Prevent clicks inside inner from closing (stopPropagation)
modalInner.addEventListener('click', (e)=>{
  e.stopPropagation();
});
