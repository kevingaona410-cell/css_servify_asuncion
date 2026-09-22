// provider.js - Página 3/3 Detalle | Cumple docs/challenge.md:43
// Flujo: lee ?id= de la URL -> fetch desacoplado a data/providers.json -> find por id -> inyecta DOM
// 3 estados (análogos a providers.html): Cargando / No encontrado / Error

// Lee el id del proveedor desde la query string (ej: provider.html?id=3)
const params = new URLSearchParams(window.location.search);
const providerId = params.get("id");

// Referencias a los estados del perfil individual (provider.html)
// querySelector por clase para compatibilidad + getElementById para nuevos estados
const providerError = document.querySelector(".provider-error"); // sección "Proveedor no encontrado" -> se muestra si el id no existe (estado Not Found)
const providerProfile = document.querySelector(".provider-profile"); // contenedor del detalle -> se oculta si hay error y se muestra si el find tiene éxito
const loadingState = document.getElementById("loading-state");
const errorState = document.getElementById("error-state");
const notFoundState = document.getElementById("not-found-state"); // alias de providerError con id
const profileSection = document.getElementById("provider-profile"); // alias de providerProfile con id

fetch("data/providers.json")
    .then((response) => response.json())
    .then((providers) => {
        const provider = providers.find((provider) => provider.id === Number(providerId));

        // Oculta cargando siempre que termina el fetch
        if (loadingState) loadingState.hidden = true;

        if (!provider) {
            // Estado: No encontrado
            providerProfile.hidden = true;
            if (profileSection) profileSection.hidden = true;
            providerError.hidden = false;
            if (notFoundState) notFoundState.hidden = false;
            return;
        }

        // Estado: Éxito - inyección directa al DOM
        document.getElementById("provider-name").textContent = provider.nombre;
        document.getElementById("provider-profession").textContent = provider.profesion;
        document.getElementById("provider-age").textContent = `${provider.edad} años`;
        document.getElementById("provider-experience").textContent = `${provider.experiencia} años de experiencia`;
        document.getElementById("provider-rating").textContent = `★ ${provider.calificacion}`;
        document.getElementById("provider-phone").textContent = provider.telefono;
        document.getElementById("provider-contact").href = `tel:${provider.telefono.replace(/\s+/g, "")}`;
        document.getElementById("provider-description").textContent = provider.descripcion;

        providerProfile.hidden = false;
        if (profileSection) profileSection.hidden = false;
    })
    .catch((error) => {
        if (loadingState) loadingState.hidden = true;
        providerProfile.hidden = true;
        if (profileSection) profileSection.hidden = true;
        if (errorState) errorState.hidden = false;
        console.error("Error al cargar el proveedor:", error);
    });
