import { exploreItems } from '../data/timeline.js';

/**
 * Módulo para la sección interactiva "Explorar".
 * Renderiza tarjetas expandibles con contenido historiográfico detallado,
 * garantizando accesibilidad total mediante teclado y atributos ARIA.
 */
export function setupExplore() {
  const container = document.querySelector('#explore-container');
  if (!container || !Array.isArray(exploreItems) || exploreItems.length === 0) {
    return;
  }

  container.classList.add('explore-grid');
  container.replaceChildren();

  exploreItems.forEach((item, index) => {
    const card = document.createElement('article');
    card.className = 'explore-card reveal';
    card.id = item.id || `explore-${index + 1}`;

    const trigger = document.createElement('button');
    trigger.type = 'button';
    trigger.className = 'explore-trigger';
    trigger.setAttribute('aria-expanded', 'false');
    trigger.setAttribute('aria-controls', `detail-${item.id}`);

    const header = document.createElement('div');
    header.className = 'explore-header';

    const yearBadge = document.createElement('span');
    yearBadge.className = 'explore-year';
    yearBadge.textContent = item.year;

    const title = document.createElement('h3');
    title.className = 'explore-title';
    title.textContent = item.title;

    const excerpt = document.createElement('p');
    excerpt.className = 'explore-excerpt';
    excerpt.textContent = item.excerpt;

    header.append(yearBadge, title, excerpt);

    const toggleIcon = document.createElement('span');
    toggleIcon.className = 'explore-icon';
    toggleIcon.setAttribute('aria-hidden', 'true');
    toggleIcon.textContent = '+';

    trigger.append(header, toggleIcon);

    const detailPanel = document.createElement('div');
    detailPanel.className = 'explore-panel explore-detail';
    detailPanel.id = `detail-${item.id}`;
    detailPanel.hidden = true;

    // Renderizar los párrafos del texto extendido
    const paragraphs = item.detail.split('\n\n');
    paragraphs.forEach((pText) => {
      if (pText.trim()) {
        const p = document.createElement('p');
        p.textContent = pText.trim();
        detailPanel.append(p);
      }
    });

    // Control de apertura y cierre
    trigger.addEventListener('click', () => {
      const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
      const nextState = !isExpanded;

      trigger.setAttribute('aria-expanded', String(nextState));
      detailPanel.hidden = !nextState;
      card.classList.toggle('is-expanded', nextState);
      card.classList.toggle('is-active', nextState);
      detailPanel.classList.toggle('is-open', nextState);
      toggleIcon.textContent = nextState ? '−' : '+';
    });

    card.append(trigger, detailPanel);
    container.append(card);
  });
}
