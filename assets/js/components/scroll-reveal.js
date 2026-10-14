/**
 * Módulo de animación de aparición progresiva al desplazarse (scroll reveal).
 * Respeta rigurosamente las preferencias de accesibilidad de movimiento reducido.
 */

export function setupScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal');
  if (!revealElements.length) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Si el usuario prefiere movimiento reducido o si IntersectionObserver no está soportado,
  // mostrar inmediatamente todos los elementos sin transición diferida.
  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    revealElements.forEach((el) => {
      el.classList.add('revealed');
    });
    return;
  }

  const observerOptions = {
    threshold: 0.15
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach((el) => {
    revealObserver.observe(el);
  });
}
