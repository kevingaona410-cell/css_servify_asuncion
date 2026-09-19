// provider.js - Página 3/3 Detalle | Cumple docs/challenge.md:43 (tercera página funcional)
// Flujo: lee ?id= de la URL -> fetch desacoplado a data/providers.json -> find por id -> inyecta DOM

// Lee el id del proveedor desde la query string (ej: provider.html?id=3)
// URLSearchParams evita parseo manual y soporta URLs sin id (retorna null)
const params = new URLSearchParams(window.location.search);
const providerId = params.get("id");

// fetch: misma fuente desacoplada que providers.js (simula API real, docs/challenge.md:34)
// No se hardcodean datos en HTML; todo viene del JSON
fetch("data/providers.json")
    .then((response) => response.json())
    .then((providers) => {
        // find: busca coincidencia exacta por id; Number() normaliza string -> number
        const provider = providers.find((provider) => provider.id === Number(providerId));

        // Guard v1: evita TypeError si id inexistente o ?id vacío (provider === undefined)
        // En esta primera versión solo se evita el crash y se deja el placeholder del HTML
        if (!provider) {
            console.warn(`Proveedor no encontrado para id=${providerId}`);
            return;
        }

        // Inyección directa al DOM (estructura ya existe en provider.html)
        document.getElementById("provider-name").textContent = provider.nombre;
        document.getElementById("provider-profession").textContent = provider.profesion;
        document.getElementById("provider-age").textContent = `${provider.edad} años`;
        document.getElementById("provider-rating").textContent = `★ ${provider.calificacion}`;
        document.getElementById("provider-description").textContent = provider.descripcion;
    })
    .catch((error) => {
        // v1 minimal: solo loguea error de red/parseo; no manipula estados visuales extra
        console.error("Error al cargar el proveedor:", error);
    });
