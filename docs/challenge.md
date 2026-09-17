En Asunción existe una criatura legendaria: el Plomero Fantasma.
Promete volver mañana… y desaparece.
Y no olvidemos al electricista que convirtió un timbre en un pedido automático de pizza.

La ciudad está cansada.

Tu misión es cambiar esa historia construyendo una app web moderna para encontrar y calificar proveedores de servicios locales. Algo tipo Tinder… pero con menos drama y más estrellas de cinco puntos.

Tu aplicación debe ser clara, rápida, usable y profesional.
Tienes dos semanas para competir por el premio imaginario más prestigioso del ecosistema:
"App del Año para Personas Hastiadas de Asunción" (AAPHA).

🧠 Lo que debes dominar en el camino
Piensa como usuario real. Diseño UI/UX claro. Colores que no quemen la retina. Tipografías legibles. No Comic Sans. Nunca Comic Sans.
Organiza botones, tarjetas y formularios con jerarquía visual.
Elige una estrategia de estilos: CSS bien estructurado o Tailwind. Solo una. Sé consistente.
Tu app debe estar desplegada (Netlify o GitHub Pages). Nada de "funciona en mi máquina".
Ejecuta Lighthouse. Aplica al menos 2 mejoras reales (rendimiento o accesibilidad) e incluye evidencia en el README.
Debe ser responsive, tener contraste adecuado, navegación básica por teclado y labels claros. No pedimos estándares NASA. Pedimos criterio profesional.
🏗️ El Campo de Batalla (Estructura mínima)
Tu app debe tener 3 páginas reales:

1️⃣ Inicio
Explica qué es la app, el problema que resuelve y un CTA claro hacia proveedores.

2️⃣ Proveedores de Servicios
Listado en tarjetas mostrando:

Nombre
Categoría
Calificación visual
Acción (ver detalle / llamar / ver más)
Los datos NO pueden estar hardcodeados en el HTML.
Debes consumirlos desde una fuente desacoplada (JSON con fetch, json-server o API simulada).
El frontend debe comportarse como si hablara con un backend real.

El listado debe contemplar 3 estados obligatorios:

Estado	Descripción
⏳ Cargando	Mientras se obtienen los datos
🚫 Sin resultados	Cuando no hay proveedores disponibles
❌ Error	Cuando falla la carga de datos
3️⃣ Tercera Página Funcional
No vale 404.
Debe aportar valor real (detalle, comparador, perfil, consejos, FAQ, login visual, etc.).

👥 El Juicio Humano
Realiza pruebas con al menos 5 personas reales.
Para cada una documenta:

Tarea asignada
Dificultad encontrada
Comentario textual
Cambio aplicado
Debes implementar al menos 1 mejora real basada en feedback.
Todo documentado en CHANGELOG.md.

🚀 Entrega Obligatoria
Debes entregar:

Enlace público al sitio desplegado
Repositorio en GitHub
README con:
Cómo ejecutar
Cómo desplegar
Evidencia Lighthouse
CHANGELOG.md documentado
Reglas claras:
❌ No datos estáticos directos en HTML.
✅ Uso consistente del framework de estilos elegido.
✅ Código organizado y mantenible.
🌟 Si quieres ir más allá
Login básico
Registro real de proveedores
Evitar spam
API real
Botón tel: funcional
Integración con Google Maps
Animaciones suaves o microinteracciones
No se trata de encontrar al plomero perfecto.
Se trata de construir una experiencia clara, útil y profesional.

Si tu app resuelve el problema, maneja estados reales, está bien estructurada y demuestra criterio técnico…

Ya ganaste la batalla. 🐧⚡
```