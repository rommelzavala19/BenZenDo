# Requisitos legales y técnicos

Documento de orientación del proyecto; no constituye asesoría legal. Verificar siempre la versión vigente de cada norma y su aplicación al sitio concreto.

## Marco legal a investigar

- **Constitución Política de Nicaragua**, texto publicado en La Gaceta No. 32, 18 de febrero de 2025: consultar el texto consolidado para referencias a soberanía, privacidad, libertad de expresión, información y habeas data. No atribuir a la Constitución requisitos técnicos específicos que no estén en el texto.
- **Ley No. 312, Ley de Derecho de Autor y Derechos Conexos:** revisar protección de obras, fotografías, límites de cita y dominio público; no tratar la excepción de cita como autorización general para reutilizar imágenes.
- **Ley No. 787, Ley de Protección de Datos Personales:** pendiente de verificación del texto oficial consolidado, reformas y alcance aplicable.
- **Ley No. 1042, Ley Especial de Ciberdelitos:** pendiente de verificación del texto oficial consolidado y pertinencia al proyecto.

La web informativa prevista no necesita cuentas, formularios ni recopilar datos personales. Mantener esa decisión reduce riesgos de privacidad. Si se agregan formularios, analítica, comentarios, cookies o servicios externos, evaluar obligaciones legales y documentarlas antes de publicarlos.

## Checklist técnico

### HTML y accesibilidad
- [ ] HTML semántico y `lang="es"`.
- [ ] Un `h1` principal; jerarquía coherente de encabezados.
- [ ] Enlace para saltar al contenido.
- [ ] Navegación por teclado y foco visible.
- [ ] Contraste adecuado en texto, enlaces y controles.
- [ ] Texto alternativo apropiado para imágenes.
- [ ] Navegación móvil con estado accesible (`aria-expanded`).
- [ ] Comprobar `prefers-reduced-motion`.
- [ ] No transmitir información solo por color.

### Responsive y rendimiento
- [ ] Probar móvil, tablet y escritorio.
- [ ] Optimizar imágenes localmente y declarar dimensiones cuando se integren.
- [ ] Evitar dependencias innecesarias y recursos de terceros no documentados.
- [ ] Comprobar que no existan errores de consola ni enlaces rotos.
- [ ] Probar módulos ES mediante servidor local.
- [ ] Revisar carga y legibilidad con conexiones lentas.

### SEO y transparencia
- [ ] Título, descripción, idioma y contenido descriptivo.
- [ ] Enlaces a fuentes y créditos visibles para el público.
- [ ] Fechas de consulta y licencias documentadas en el repositorio.
- [ ] No usar citas textuales sin cotejo y referencia precisa.
- [ ] No publicar datos históricos inciertos como hechos incontrovertibles.

### Revisión final
- [ ] Revisar contenido histórico con fuentes cruzadas.
- [ ] Validar enlaces y atribuciones.
- [ ] Probar navegación con teclado y lector de pantalla básico.
- [ ] Comprobar consola, tamaños de pantalla y movimiento reducido.
- [ ] Confirmar que no se recolecten datos personales ni se carguen trackers inesperados.
