# Servify Asunción

### Búsquedas rápidas, confiables y sin complicaciones

Aplicación web para encontrar proveedores de servicios locales en Asunción, comparar información y consultar sus perfiles de forma clara y sencilla.

> Un proyecto desarrollado para el challenge **La Batalla Final de la App de Servicios**.

---

**Servify Asunción** busca solucionar este problema ofreciendo una interfaz simple para encontrar proveedores de distintos servicios, consultar su información y comparar sus calificaciones.

La aplicación fue diseñada priorizando:

- Usabilidad
- Responsive design
- Accesibilidad
- Contraste visual
- Navegación clara
- Rendimiento

---

## 🚀 Demo
http://127.0.0.1:5500/index.html
**Sitio desplegado:**  

**Repositorio:**  
https://github.com/kevingaona410-cell/css_servify_asuncion

---

## 🧩 Funcionalidades

### Inicio
La página principal explica el propósito de la aplicación y ofrece llamados a la acción para acceder al listado de proveedores.

### Proveedores
Los proveedores se muestran mediante tarjetas con:

- Nombre
- Profesión
- Años de experiencia
- Calificación
- Acceso al detalle

Los datos se obtienen desde un archivo `JSON` mediante `fetch`, evitando hardcodearlos directamente en el HTML.

### Filtro de categorías
Permite filtrar los proveedores por profesión sin volver a solicitar los datos.

### Perfil del proveedor
Cada proveedor dispone de una página individual con información detallada.

### Estados de carga
La aplicación contempla:

- ⏳ Cargando
- 🚫 Sin resultados
- ❌ Error

### Tema claro y oscuro
El usuario puede cambiar entre ambos temas y la preferencia se mantiene mediante `localStorage`.

### Responsive
La interfaz se adapta a dispositivos móviles, tablets y escritorio.

---

## 🏗️ Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- JSON
- Git / GitHub
- Netlify o GitHub Pages

### Estrategia de estilos

Se utilizó **CSS estructurado**, separado por responsabilidad:

```text
css/
├── common.css
├── home.css
├── providers.css
└── provider.css
```

`common.css` contiene las variables y estilos compartidos, mientras que cada página posee su propio archivo de estilos.

---

## 📁 Estructura del proyecto

```text
css_servify_asuncion/
│
├── assets/
│   └── logo.png
│
├── css/
│   ├── common.css
│   ├── home.css
│   ├── providers.css
│   └── provider.css
│
├── data/
│   └── providers.json
│
├── js/
│   ├── provider.js
│   ├── providers.js
│   └── theme.js
│
├── docs/
│   └── challenge.md
│
├── index.html
├── providers.html
├── provider.html
├── CHANGELOG.md
└── README.md
```

---

## ▶️ Cómo ejecutar

El proyecto es estático y no requiere un backend.

Debido al uso de `fetch()` para cargar `providers.json`, se recomienda ejecutarlo mediante un servidor local.

### Opción 1: VS Code

Abrir el proyecto en Visual Studio Code y utilizar una extensión como **Live Server**.

Luego abrir:

```text
index.html
```

### Opción 2: Python

Desde la carpeta del proyecto:

```bash
python -m http.server 8000
```

Después acceder a:

```text
http://localhost:8000
```

---

## 🌐 Cómo desplegar

El proyecto puede desplegarse directamente en **Netlify** o **GitHub Pages** porque está compuesto por archivos estáticos.

### Netlify

1. Subir el repositorio a GitHub.
2. Crear un nuevo sitio en Netlify.
3. Seleccionar el repositorio.
4. No es necesario utilizar un comando de build.
5. Publicar el proyecto.

### GitHub Pages

1. Entrar al repositorio.
2. Ir a **Settings → Pages**.
3. Seleccionar la rama `main`.
4. Seleccionar la carpeta `/root`.
5. Guardar y esperar la publicación.

---

## ♿ Accesibilidad

Durante el desarrollo se realizaron mejoras relacionadas con accesibilidad:

- Contraste de textos y fondos.
- Estados `focus-visible`.
- Labels asociados a controles.
- Navegación básica mediante teclado.
- Adaptación del modo claro y oscuro.
- Mayor visibilidad de botones y elementos interactivos.

---

## ⚡ Rendimiento

Se optimizó la carga de proveedores evitando realizar un nuevo `fetch()` cada vez que cambia el filtro.

Los datos se cargan una sola vez y posteriormente se filtran en memoria.

Esto reduce solicitudes innecesarias durante la interacción del usuario.

---

## 🔎 Evidencia Lighthouse

Se realizaron pruebas de Lighthouse en:

- `index.html`
- `providers.html`
- `provider.html`

Utilizando:

- Móvil
- PC
- Modo claro
- Modo oscuro

### Resultados

| Página | Dispositivo / Tema | Resultado |
|---|---|---|
| Index | Móvil / Claro | **100** |
| Index | Móvil / Oscuro | **≈100** |
| Index | PC / Claro | **100** |
| Index | PC / Oscuro | **≈100** |
| Providers | Móvil / Claro | **100** |
| Providers | Móvil / Oscuro | **≈100** |
| Providers | PC / Claro | **100 Performance** |
| Providers | PC / Oscuro | **90 Performance / 95 Accessibility** |
| Provider | Móvil / Claro | **≈100 / 99 Performance** |
| Provider | Móvil / Oscuro | **≈100** |
| Provider | PC / Claro | **86 Performance** |
| Provider | PC / Oscuro | **86 Performance** |

### CLS detectado

Durante las pruebas de escritorio también se identificaron cambios de **Cumulative Layout Shift (CLS)**:

- `providers.html` PC claro: **0.821**
- `providers.html` PC oscuro: **0.206**
- `provider.html` PC claro: **0.287**
- `provider.html` PC oscuro: **0.288**

Estos valores quedan registrados como puntos pendientes de optimización futura.

### Mejoras aplicadas a partir de Lighthouse

Entre las mejoras realizadas se encuentran:

- Corrección de problemas de contraste.
- Ajustes específicos para modo oscuro.
- Mejora de la visibilidad de elementos interactivos.
- Corrección de estilos que se sobrescribían entre sí.
- Optimización de la carga y filtrado de proveedores.

---

## 👥 Pruebas con usuarios

Se realizaron pruebas con usuarios reales para evaluar navegación, claridad de la información, filtros, temas y perfiles de proveedores.

Las tareas, dificultades, comentarios y cambios realizados se encuentran documentados en:

**`CHANGELOG.md`**

---

## 📋 Cumplimiento del challenge

- ✅ 3 páginas funcionales.
- ✅ Datos desacoplados mediante JSON + `fetch`.
- ✅ Estados de carga, error y sin resultados.
- ✅ Diseño responsive.
- ✅ Tema claro y oscuro.
- ✅ Contraste y accesibilidad revisados.
- ✅ Navegación básica por teclado.
- ✅ Pruebas con usuarios.
- ✅ Mejoras implementadas a partir del feedback.
- ✅ Lighthouse ejecutado.
- ✅ Mejoras reales de accesibilidad y rendimiento.
- ✅ Código organizado y mantenible.
- ✅ Estrategia de estilos consistente mediante CSS.
- ✅ Proyecto preparado para despliegue estático.

---

## 📄 Documentación adicional

- [`CHANGELOG.md`](./CHANGELOG.md) — pruebas con usuarios y mejoras realizadas.
- [`docs/challenge.md`](./docs/challenge.md) — enunciado del challenge.