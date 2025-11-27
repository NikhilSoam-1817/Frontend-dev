/*
Q6 – E-Commerce Dashboard: Product Card Fetcher
- Use Fake Store API: https://fakestoreapi.com/products
- Fetch product data and log Title, Price, Image URL
- Handle errors and provide a DOM helper for browser usage
*/

async function fetchProductsAndLog() {
  try {
    const resp = await fetch('https://fakestoreapi.com/products');
    if (!resp.ok) throw new Error('Network response not ok');
    const products = await resp.json();
    for (const p of products) {
      console.log('Product:', p.title);
      console.log('Price: $' + p.price);
      console.log('Image:', p.image);
      console.log('---');
    }
    return products;
  } catch (err) {
    console.error('Failed to load products. Please try again.');
    throw err;
  }
}

// Bonus DOM helper (browser)
function createProductCard(product) {
  const card = document.createElement('div');
  card.className = 'product-card';
  const title = document.createElement('h3'); title.textContent = product.title;
  const price = document.createElement('p'); price.textContent = '$' + product.price;
  const img = document.createElement('img'); img.src = product.image; img.alt = product.title;
  card.appendChild(title); card.appendChild(price); card.appendChild(img);
  return card;
}

async function fetchAndRenderProducts() {
  if (typeof document === 'undefined') {
    console.warn('DOM not available: fetchAndRenderProducts is for browsers only.');
    return;
  }
  try {
    const products = await fetchProductsAndLog();
    const container = document.createElement('div'); container.id = 'product-container';
    document.body.appendChild(container);
    for (const p of products) container.appendChild(createProductCard(p));
  } catch (err) {
    const el = document.createElement('p'); el.textContent = 'Failed to load products. Please try again.';
    document.body.appendChild(el);
  }
}

if (typeof module !== 'undefined') module.exports = { fetchProductsAndLog, fetchAndRenderProducts, createProductCard };
