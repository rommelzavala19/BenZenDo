# Benjamín Zeledón: Pensamiento y legado de la soberanía

Proyecto web editorial, educativo y responsive sobre la trayectoria histórica, el pensamiento político y el legado de Benjamín Zeledón.

## Estado

**Publicación web completa, funcional y verificada.** Incluye diseño editorial contemporáneo, estructura modular en HTML5 semántico, CSS3 legible con design tokens y JavaScript vanilla con módulos ES. Contenido histórico rigurosamente redactado en español, cronología ampliada, retrato histórico en dominio público integrado localmente, interactividad de exploración accesible y total adaptabilidad responsive (móvil, tablet y escritorio).

## Ejecutar localmente

1. Abrí `index.html` en un navegador moderno. Como el JavaScript utiliza módulos ES (`<script type="module">`), se recomienda ejecutar un servidor HTTP local para evitar restricciones CORS de archivos locales:
   ```bash
   python -m http.server 8000
   ```
2. Visitá `http://localhost:8000` en tu navegador.

## Estructura del proyecto

- `index.html`: Estructura semántica completa (portada hero con retrato y composición CSS, banda de introducción, contexto histórico, trayectoria cronológica, pilares del pensamiento, acontecimientos de 1912, legado con pregunta reflexiva, módulo interactivo «Explorar» y pie de página completo).
- `assets/css/styles.css`: Hoja de estilos editorial contemporánea, organizada por secciones, con variables CSS (`:root`), paleta en marfil, carbón y azul profundo con acentos cobrizos, animaciones sutiles, accesibilidad para teclado, `prefers-reduced-motion` y soporte de impresión.
- `assets/js/main.js`: Orquestador principal que inicializa la navegación, renderizado dinámico de datos y observadores de animación.
- `assets/js/components/`:
  - `navigation.js`: Navegación con menú móvil accesible (`aria-expanded`), cierre con Escape o clic exterior, e indicador dinámico de sección activa (`IntersectionObserver`).
  - `scroll-reveal.js`: Animaciones de entrada discretas y respetuosas de `prefers-reduced-motion`.
  - `explore.js`: Acordeón interactivo accesible para la exploración en profundidad de hitos históricos.
- `assets/js/data/`:
  - `timeline.js`: Cronología histórica documentada de 11 hitos (1879–1980) y conjunto de datos para la sección «Explorar».
  - `content.js`: Datos editoriales para bloques de contexto, pilares de soberanía y fases del conflicto de 1912.
- `assets/images/`:
  - `portrait-benjamin-zeledon.jpg`: Retrato histórico atribuido a Joseph Lapisky (Dominio público, Wikimedia Commons).
- `docs/`: Documentación de fuentes primarias, secundarias, registro de licencias y requisitos técnicos.

## Principios editoriales y de accesibilidad

- **Rigor histórico:** Hechos respaldados en fuentes académicas e institucionales documentadas; no se inventan citas ni certezas sobre detalles en disputa (muerte en combate vs. carretera).
- **Accesibilidad integral (WCAG AA):** Enlace de salto al contenido (`.skip-link`), jerarquía lógica de encabezados, foco visible de alto contraste, atributos ARIA interactivos y respeto a la preferencia de movimiento reducido.
- **Privacidad absoluta:** Sin dependencias externas pesadas, sin rastreadores, sin analítica de terceros y sin recopilación de datos personales.
