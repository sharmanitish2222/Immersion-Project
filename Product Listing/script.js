 const btn = document.getElementById('btn');
    const inp = document.getElementById('inp');
    const resultDiv = document.getElementById('result');
    const errorDiv = document.getElementById('error');

    const tempUrl = 'https://dummyjson.com/products/search?q=';

    btn.addEventListener('click', () => {
      const searchTerm = inp.value.trim();
      if (searchTerm === '') {
        errorDiv.textContent = 'Please enter a search term.';
        resultDiv.innerHTML = '';
        return;
      }

      errorDiv.textContent = '';
      const URL = tempUrl + encodeURIComponent(searchTerm);

      fetch(URL)
        .then(res => res.json())
        .then(data => {
          const products = data.products;
          resultDiv.innerHTML = '';

          if (products.length === 0) {
            resultDiv.innerHTML = '<p>No products found.</p>';
            return;
          }

          products.forEach(product => {
            const div = document.createElement('div');
            div.className = 'product';
            div.innerHTML = `
              <strong>${product.title}</strong><br>
              Price: $${product.price}<br>
              <img src="${product.thumbnail}" alt="${product.title}" width="100">
            `;
            resultDiv.appendChild(div);
          });
        })
        .catch(err => {
          errorDiv.textContent = 'Something went wrong while fetching products.';
          console.error(err);
        });
    });










const btn=document.getElementById('btn');
const inp=document.getElementById('inp');

const tempUrl=' dummyjson.com/products/search?q='
btn.addEventListener('click',()=>{
  const URL=tempUrl+inp.value;
  fetch(URL)
      .then((res)=>{
        return res.json()
      })
      .then((data)=>{
        console.log(data.products);

      })

})