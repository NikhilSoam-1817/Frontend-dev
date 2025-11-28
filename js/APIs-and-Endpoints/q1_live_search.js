// q1_live_search.js
$(function(){
  const $input = $('#q1-search');
  const $results = $('#q1-results');
  const $loading = $('#q1-loading');
  let timer = null;

  function render(products){
    $results.empty();
    if(!products || products.length===0){
      $results.append('<div class="no-results">No products found</div>');
      return;
    }
    products.forEach(p=>{
      const $el = $(`
        <div class="product">
          <img src="${p.image}" alt="${p.name}">
          <div>
            <div><strong>${p.name}</strong></div>
            <div>₹ ${p.price.toFixed ? p.price.toFixed(2) : p.price}</div>
          </div>
        </div>
      `);
      $results.append($el);
    });
  }

  function search(q){
    $loading.show();
    $.ajax({
      url: 'http://localhost:3001/products',
      data: { q },
      method: 'GET',
      success: function(data){ render(data); },
      error: function(){ $results.html('<div class="no-results">Error loading products</div>'); },
      complete: function(){ $loading.hide(); }
    });
  }

  $input.on('input', function(){
    const q = $(this).val().trim();
    clearTimeout(timer);
    timer = setTimeout(()=> search(q), 250);
  });

  // initial load
  search('');
});
