/**
 * Módulo de navegación accesible y reactiva.
 * Controla el menú móvil, indicador de sección activa y estilo del encabezado al hacer scroll.
 */

export function setupNavigation() {
  setupMobileMenu();
  setupActiveSection();
  setupScrollHeader();
}

function setupMobileMenu() {
  const button = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#site-nav');
  if (!button || !nav) return;

  function closeMenu() {
    button.setAttribute('aria-expanded', 'false');
    nav.classList.remove('is-open');
  }

  function toggleMenu() {
    const isOpen = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!isOpen));
    nav.classList.toggle('is-open', !isOpen);
  }

  button.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  // Cerrar al pulsar un enlace de navegación
  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  // Cerrar al pulsar la tecla Escape
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && nav.classList.contains('is-open')) {
      closeMenu();
      button.focus();
    }
  });

  // Cerrar al hacer clic fuera del menú y del botón
  document.addEventListener('click', (event) => {
    if (
      nav.classList.contains('is-open') &&
      !nav.contains(event.target) &&
      !button.contains(event.target)
    ) {
      closeMenu();
    }
  });
}

function setupActiveSection() {
  const navLinks = document.querySelectorAll('#site-nav a[href^="#"]');
  if (!navLinks.length) return;

  const sectionMap = new Map();
  navLinks.forEach((link) => {
    const targetId = link.getAttribute('href').slice(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      sectionMap.set(targetEl, link);
    }
  });

  if (!('IntersectionObserver' in window)) return;

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -55% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((l) => l.classList.remove('nav-active'));
        const activeLink = sectionMap.get(entry.target);
        if (activeLink) {
          activeLink.classList.add('nav-active');
        }
      }
    });
  }, observerOptions);

  sectionMap.forEach((_, section) => {
    observer.observe(section);
  });
}

function setupScrollHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const scrollThreshold = 30;

  function onScroll() {
    if (window.scrollY > scrollThreshold) {
      header.classList.add('header-scrolled');
    } else {
      header.classList.remove('header-scrolled');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}
