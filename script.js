const nav = document.querySelector('header');

window.addEventListener('scroll', function() {
  if (window.scrollY > 0) {
    nav.style.backgroundColor = '#fff'; // Change background color on scroll
    nav.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)'; // Add shadow on scroll
  } else {
    nav.style.backgroundColor = 'rgba(255, 255, 255, 0.9)'; // Reset background color
    nav.style.boxShadow = 'none'; // Reset shadow
  }
});