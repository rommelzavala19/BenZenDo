import { setupNavigation } from './components/navigation.js';
import { setupScrollReveal } from './components/scroll-reveal.js';
import { setupExplore } from './components/explore.js';
import { timelineItems } from './data/timeline.js';
import { contextBlocks, pensamiento, eventos1912 } from './data/content.js';

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

function init() {
  setupNavigation();
  renderTimeline();
  renderContext();
  renderPensamiento();
  renderEventos1912();
  setupExplore();
  setupScrollReveal();
}

/**
 * Renderiza la cronología histórica documentada.
 */
function renderTimeline() {
  const list = document.querySelector('#timeline-list');
  if (!list || !Array.isArray(timelineItems) || timelineItems.length === 0) return;

  list.replaceChildren();

  timelineItems.forEach((item) => {
    const entry = document.createElement('li');
    entry.className = 'timeline-item reveal';
    if (item.category) {
      entry.setAttribute('data-category', item.category);
    }

    const year = document.createElement('span');
    year.className = 'timeline-year';
    year.textContent = item.year;

    const content = document.createElement('div');
    const title = document.createElement('h3');
    title.textContent = item.title;

    const description = document.createElement('p');
    description.textContent = item.description;

    content.append(title, description);
    entry.append(year, content);
    list.append(entry);
  });
}

/**
 * Renderiza los bloques explicativos de contexto histórico.
 */
function renderContext() {
  const container = document.querySelector('#context-container');
  if (!container || !Array.isArray(contextBlocks) || contextBlocks.length === 0) return;

  container.replaceChildren();

  contextBlocks.forEach((block) => {
    const card = document.createElement('article');
    card.className = 'context-card context-block reveal';

    const title = document.createElement('h3');
    title.textContent = block.title;

    const text = document.createElement('p');
    text.textContent = block.text;

    card.append(title, text);
    container.append(card);
  });
}

/**
 * Renderiza los pilares del pensamiento político de Zeledón.
 */
function renderPensamiento() {
  const container = document.querySelector('#pillars-container') || document.querySelector('#pensamiento-pillars');
  if (!container || !pensamiento || !Array.isArray(pensamiento.pillarItems)) return;

  container.replaceChildren();

  pensamiento.pillarItems.forEach((item) => {
    const card = document.createElement('article');
    card.className = 'pillar-card reveal';

    if (item.icon) {
      const icon = document.createElement('span');
      icon.className = 'pillar-icon';
      icon.setAttribute('aria-hidden', 'true');
      icon.textContent = item.icon;
      card.append(icon);
    }

    const title = document.createElement('h3');
    title.textContent = item.title;

    const text = document.createElement('p');
    text.textContent = item.text;

    card.append(title, text);
    container.append(card);
  });
}

/**
 * Renderiza las fases del conflicto de 1912.
 */
function renderEventos1912() {
  const container = document.querySelector('#eventos-container') || document.querySelector('#eventos-1912');
  if (!container || !eventos1912 || !Array.isArray(eventos1912.phases)) return;

  container.replaceChildren();

  eventos1912.phases.forEach((phase) => {
    const card = document.createElement('article');
    card.className = 'phase-card evento-card reveal';

    const number = document.createElement('span');
    number.className = 'phase-number evento-number';
    number.textContent = phase.number;

    const title = document.createElement('h3');
    title.textContent = phase.title;

    const text = document.createElement('p');
    text.textContent = phase.text;

    card.append(number, title, text);
    container.append(card);
  });
}
