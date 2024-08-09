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

let currentIndex = 0;
const slideInterval = 2000; // Intervalo em milissegundos (3 segundos)
const totalSlides = document.querySelectorAll('.carousel-slide').length;
let slideTimer;

function showSlide(index) {
  const slides = document.querySelectorAll('.carousel-slide');
  const actualIndex = index % totalSlides;

  const offset = -actualIndex * 100;
  document.querySelector('.carousel-container').style.transform = `translateX(${offset}%)`;

  // Adiciona ou remove a classe 'zoom' para o slide ativo
  slides.forEach((slide, i) => {
    if (i === actualIndex) {
      slide.classList.add('zoom');
    } else {
      slide.classList.remove('zoom');
    }
  });

  // Se atingir o final dos slides, reposiciona para o início
  if (actualIndex === totalSlides - 1) {
    setTimeout(() => {
      document.querySelector('.carousel-container').style.transition = 'none';
      showSlide(0);
      setTimeout(() => {
        document.querySelector('.carousel-container').style.transition = 'transform 0.5s ease';
      }, 20);
    }, slideInterval);
  }
}

function nextSlide() {
  showSlide(currentIndex + 1);
  currentIndex++;
}

function prevSlide() {
  showSlide(currentIndex - 1);
  currentIndex--;
}

function startCarousel() {
  slideTimer = setInterval(nextSlide, slideInterval);
}

function stopCarousel() {
  clearInterval(slideTimer);
}

// Inicializa o carrossel
showSlide(currentIndex);
startCarousel();

// Opcional: parar o carrossel ao passar o mouse sobre ele
document.querySelector('.carousel').addEventListener('mouseover', stopCarousel);
document.querySelector('.carousel').addEventListener('mouseout', startCarousel);
