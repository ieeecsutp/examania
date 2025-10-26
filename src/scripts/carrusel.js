import Splide from '@splidejs/splide';
  import '@splidejs/splide/css';

  // Función para inicializar el carrusel
  function initCarousel() {
    const carouselElement = document.querySelector('#hero-splide');
    
    if (carouselElement && !carouselElement.classList.contains('is-initialized')) {
      const splide = new Splide('#hero-splide', {
        type: 'loop',
        perPage: 3,
        autoplay: true,
        interval: 4000,
        pauseOnHover: true,
        pauseOnFocus: true,
        arrows: true,
        pagination: true,
        speed: 800,
        gap: '1rem',
        padding: { left: 0, right: 0 },
        breakpoints: {
          768: {
            perPage: 2,
          },
          481: {
            perPage: 1,
          }
        }
      });

      splide.mount();
    }
  }

  // Inicializar cuando el DOM esté listo
  document.addEventListener('astro:page-load', initCarousel);
  
  // Inicializar en la carga inicial (por si astro:page-load no se dispara)
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCarousel);
  } else {
    initCarousel();
  }