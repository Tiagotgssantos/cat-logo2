function searchProducts() {
  const input = document.getElementById('searchInput');
  const filter = input.value.toLowerCase();
  const catalog = document.getElementById('catalog');
  const products = catalog.getElementsByClassName('product');

  for (let i = 0; i < products.length; i++) {
      const product = products[i];
      const text = product.textContent || product.innerText;
      if (text.toLowerCase().includes(filter)) {
          product.style.display = "";
      } else {
          product.style.display = "none";
      }
  }
}
