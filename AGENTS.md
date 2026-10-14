# Instrucciones para agentes de código

## Objetivo
Crear una experiencia web moderna y accesible titulada **“Benjamín Zeledón: Pensamiento y legado de la soberanía”**, centrada en trayectoria, pensamiento político, contexto de 1909–1912 y legado histórico.

## Antes de cambiar contenido histórico
- Consultar `docs/fuentes-historicas.md` y `docs/investigacion-pendiente.md`.
- No presentar interpretaciones como hechos neutrales.
- No inventar citas textuales. Toda cita debe cotejarse con la fuente primaria o con una transcripción fiable, con referencia precisa.
- Si dos fuentes discrepan, señalar la discrepancia o usar una formulación prudente; no elegir una versión sin justificación.
- No completar la cronología con fechas no verificadas.

## Código y arquitectura
- Mantener HTML, CSS y JavaScript en archivos separados.
- JavaScript vanilla; evitar dependencias externas salvo que exista una razón concreta.
- Usar módulos ES y funciones pequeñas con nombres descriptivos.
- No introducir compiladores, frameworks ni rastreadores sin aprobación.
- Mantener el contenido textual separado de la lógica siempre que resulte práctico.

## Diseño y accesibilidad
- Estética editorial contemporánea, clara, sobria y cálida; no parecer un museo antiguo ni una infografía escolar genérica.
- Responsive desde móvil; probar también tablet y escritorio.
- Usar etiquetas semánticas, jerarquía de encabezados, enlaces descriptivos, foco visible, navegación por teclado, contraste adecuado y `prefers-reduced-motion`.
- No depender únicamente del color para comunicar información.
- Respetar `alt` significativo para imágenes informativas y `alt=""` para decorativas.

## Imágenes y propiedad intelectual
- No descargar ni incorporar imágenes sin revisar su licencia y procedencia.
- Registrar título, autor atribuido, fuente, URL de la página de licencia, tipo de licencia/estado, fecha de consulta y cualquier limitación conocida en `docs/fuentes-y-licencias.md`.
- No asumir que una imagen es reutilizable por aparecer en una página institucional.
- No hotlinkear imágenes de terceros como solución final.

## Calidad
- No dejar enlaces rotos ni controles inertes.
- Probar navegación móvil, enlaces internos, importaciones JavaScript y consola del navegador.
- Comprobar HTML semántico, tamaños de pantalla y movimiento reducido.
- Actualizar documentación y registro de fuentes cuando se agregue contenido.
