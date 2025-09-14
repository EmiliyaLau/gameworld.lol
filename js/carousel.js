
const carouselInner = document.getElementById('carouselInner');
const prevBtn = document.getElementById('carouselPrev');
const nextBtn = document.getElementById('carouselNext');
let index = 0;
function updateCarousel() {
  const items = document.querySelectorAll('.carousel-item');
  const width = items[0].offsetWidth;
  carouselInner.style.transform = `translateX(-${index * width}px)`;
}
prevBtn.addEventListener('click', () => { index = Math.max(index - 1, 0); updateCarousel(); });
nextBtn.addEventListener('click', () => { const items = document.querySelectorAll('.carousel-item'); index = Math.min(index + 1, items.length - 1); updateCarousel(); });
