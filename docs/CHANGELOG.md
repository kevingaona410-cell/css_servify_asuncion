# CHANGELOG - Pruebas con usuarios y Lighthouse

## Pruebas con usuarios

### Persona 1

- **Tarea:** Navegar desde la página de inicio hasta el listado de proveedores y localizar cómo comenzar una búsqueda.
- **Dificultad encontrada:** Los llamados a la acción principales no destacaban lo suficiente.
- **Comentario textual:** “Hacer más visible CTA”.
- **Cambio aplicado:** Se reforzaron visualmente los botones “Explorar proveedores” y “Ver todos los proveedores”.

### Persona 2

- **Tarea:** Buscar proveedores utilizando el filtro y revisar la información disponible en sus tarjetas.
- **Dificultad encontrada:** El filtro podía organizarse de una forma más clara y la información mostrada podía ser más útil.
- **Comentario textual:** “Tener el texto de filtro junto al desplegable” y sugerencia de mostrar años de experiencia en lugar de edad.
- **Cambio aplicado:** Se agrupó la etiqueta con el selector y se reemplazó la edad por años de experiencia.

### Persona 3

- **Tarea:** Probar el modo claro y oscuro, revisar el perfil de un proveedor y evaluar la información mostrada.
- **Dificultad encontrada:** No encontró dificultades importantes durante la navegación.
- **Comentario textual:** “La verdad está re bien, me gusta cómo cambia del modo claro al oscuro, es un detalle bonito y se entiende bien. Lo unico que le faltaria serian los datos de contacto de los proveedores.”
- **Cambio aplicado:** Se validó el funcionamiento del cambio de tema y se tomó la observación sobre los datos de los proveedores para reforzar la información mostrada agregando los datos de contacto.

## Lighthouse

Se realizaron pruebas en las tres páginas, utilizando modo claro y oscuro tanto en móvil como en PC.

### Resultados principales

- **Inicio:** resultados cercanos o iguales a 100 en las distintas pruebas.
- **Proveedores móvil:** 100 o valores cercanos a 100.
- **Proveedor móvil:** 100 o valores cercanos a 100.
- **Proveedores PC:** Performance entre 90 y 100; Accessibility 95 en modo oscuro.
- **Proveedor PC:** Performance 86 en ambos temas.

También se identificaron valores de **CLS** en las vistas desktop, que quedan registrados como puntos de optimización futura.

## Datos y mejoras

A partir de las pruebas se realizaron estas mejoras:

- Mayor visibilidad de los CTA.
- Footer ubicado correctamente