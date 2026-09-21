// theme.js - Toggle claro/oscuro | Header minimalista ☀️/🌙
// Usa html[data-theme="dark"] + localStorage + prefers-color-scheme

const THEME_KEY = "servify-theme";
const button = document.querySelector('button[aria-label="Cambiar tema"]');
const html = document.documentElement;

function getPreferredTheme() {
  const stored = localStorage.getItem(THEME_KEY);
  if (stored === "dark" || stored === "light") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(theme) {
  if (theme === "dark") {
    html.setAttribute("data-theme", "dark");
    if (button) button.setAttribute("aria-pressed", "true");
  } else {
    html.removeAttribute("data-theme");
    if (button) button.setAttribute("aria-pressed", "false");
  }
  localStorage.setItem(THEME_KEY, theme);
}

// Inicializa al cargar (evita FOUC)
applyTheme(getPreferredTheme());

// Toggle al hacer click
if (button) {
  button.addEventListener("click", () => {
    const isDark = html.getAttribute("data-theme") === "dark";
    applyTheme(isDark ? "light" : "dark");
  });
}
