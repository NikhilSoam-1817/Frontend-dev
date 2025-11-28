// q4_dashboard.js
(function(){
  const endpoints = {
    users: 'http://localhost:3004/users',
    orders: 'http://localhost:3004/orders',
    products: 'http://localhost:3004/products'
  };

  const warnEl = document.getElementById('q4-warn');

  Promise.all([
    fetch(endpoints.users).then(r=>r.ok? r.json() : Promise.reject('users')),
    fetch(endpoints.orders).then(r=>r.ok? r.json() : Promise.reject('orders')),
    fetch(endpoints.products).then(r=>r.ok? r.json() : Promise.reject('products'))
  ]).then(([users, orders, products])=>{
    document.getElementById('card-users').innerHTML = `<h3>Users</h3><div>${users.length}</div>`;
    document.getElementById('card-orders').innerHTML = `<h3>Orders</h3><div>${orders.length}</div>`;
    document.getElementById('card-products').innerHTML = `<h3>Products</h3><div>${products.length}</div>`;
  }).catch(err=>{
    // Attempt to load individually with graceful degradation
    warnEl.style.display='block';
    // try each one separately
    fetch(endpoints.users).then(r=>r.json()).then(data=> document.getElementById('card-users').innerHTML = `<h3>Users</h3><div>${data.length}</div>`).catch(()=>{});
    fetch(endpoints.orders).then(r=>r.json()).then(data=> document.getElementById('card-orders').innerHTML = `<h3>Orders</h3><div>${data.length}</div>`).catch(()=>{});
    fetch(endpoints.products).then(r=>r.json()).then(data=> document.getElementById('card-products').innerHTML = `<h3>Products</h3><div>${data.length}</div>`).catch(()=>{});
  });
})();
