# Changelog - Pruebas con usuarios y Lighthouse

Se realizaron pruebas con 2 personas y una revisión mediante Lighthouse. A partir de los comentarios y resultados obtenidos se aplicaron las siguientes mejoras.

### 1. Llamados a la acción poco visibles
- **Problema:** Los botones “Explorar proveedores” y “Ver todos los proveedores” no destacaban suficientemente.
- **Comentario:** “Hacer más visible CTA”.
- **Cambio aplicado:** Se reforzó el diseño visual de ambos botones para diferenciarlos claramente de los enlaces normales.

### 2. Footer mal ubicado
- **Problema:** En páginas con poco contenido, el footer aparecía demasiado arriba.
- **Comentario:** “Footer al final de la página”.
- **Cambio aplicado:** Se ajustó la estructura y los estilos para mantener el footer al final de la página cuando el contenido es corto.

### 3. Contraste insuficiente
- **Problema:** Lighthouse detectó problemas de contraste en algunos elementos de la interfaz.
- **Cambio aplicado:** Se revisaron los colores de texto, fondos, botones y elementos interactivos en los modos claro y oscuro.
- **Resultado:** Las vistas principales alcanzan resultados cercanos al máximo en Lighthouse. `index.html` en modo claro obtiene **100/100/100/100**.

### 4. Modo oscuro
- **Problema:** Algunos elementos, especialmente las estrellas de valoración, tenían poca visibilidad en modo oscuro.
- **Comentario:** “Estrellas en el modo oscuro no se notan”.
- **Cambio aplicado:** Se ajustaron los estilos de las calificaciones y se mejoró el contraste de diferentes elementos del tema oscuro.
- **Resultado actual:** `providers.html` en modo oscuro registra **95 en Accessibility**. Las demás vistas se mantienen en valores cercanos a 100.

### 5. Información de los proveedores
- **Problema:** Mostrar la edad del proveedor aportaba poca información para elegir un profesional.
- **Cambio aplicado:** Se reemplazó el dato de edad por **años de experiencia**, tanto en la lista como en el detalle del proveedor.

### 6. Filtro de categorías
- **Problema:** El texto del filtro y el selector estaban visualmente separados.
- **Cambio aplicado:** Se agruparon ambos elementos y se adaptó su disposición para pantallas pequeñas.

### 7. Sección “Cómo funciona”
- **Problema:** La sección presentaba diferencias visuales entre los modos claro y oscuro.
- **Cambio aplicado:** Se ajustaron fondos, bordes y elementos internos para mantener una apariencia consistente en ambos temas.

### 8. Rendimiento
- **Problema:** `providers.js` realizaba una nueva solicitud a `providers.json` cada vez que se cambiaba el filtro.
- **Cambio aplicado:** Los datos ahora se cargan una sola vez y se filtran en memoria, evitando solicitudes innecesarias.

### 9. Revisión de Lighthouse
- **Resultado:** Las vistas móviles alcanzan **100 o valores cercanos a 100** en las diferentes categorías.
- **Providers desktop:** modo claro **76 → 100 en Performance**, aunque se detectó un **CLS de 0.821** durante la revisión; modo oscuro **90 Performance / 95 Accessibility**, con **CLS de 0.206**.
- **Provider desktop:** modo claro **86 Performance**, con **CLS de 0.287**; modo oscuro **86 Performance**, con **CLS de 0.288**.
- **Acción:** Los valores de CLS y las puntuaciones de Performance en desktop quedan registrados como puntos pendientes para una futura optimización.