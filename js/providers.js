// providers.js - Página 2/3 Proveedores | Cumple docs/challenge.md:26 y 34
// Flujo: fetch desacoplado a data/providers.json -> render tarjetas -> filtro por categoría
// 3 estados del challenge: loading (fetch pendiente), error (catch), empty (renderProviders sin match)

// Referencias DOM - estados y contenedores definidos en providers.html
const providersList = document.getElementById("providers-list");
const loadingState = document.getElementById("loading-state");
const errorState = document.getElementById("error-state");
const emptyState = document.getElementById("empty-state");
const professionFilter = document.getElementById("category-filter");

// Crea la tarjeta visual de un proveedor.Estructura cumple challenge: nombre / categoría (profesion) / calificación visual (★) / acción (ver detalle).

function createProviderCard(provider) {
    const article = document.createElement("article");
    article.innerHTML = `
        <h3>${provider.nombre}</h3>
        <p>${provider.profesion}</p>
        <p>${provider.edad} años</p>
        <p>★ ${provider.calificacion}</p>
        <a href="provider.html?id=${provider.id}">Detalles</a>
    `;
    return article;
}

/**
 * Pobla el <select> con profesiones únicas del dataset.
 * Permite filtrar sin hardcodear categorías en el HTML.
 */
function populateProfessionFilter(providers) {
    const professions = [...new Set(providers.map((provider) => provider.profesion))];
    professions.forEach((profession) => {
        const option = document.createElement("option");
        option.value = profession;
        option.textContent = profession;
        professionFilter.appendChild(option);
    });
}

/**
 * Renderiza la lista filtrada y gestiona el estado "Sin resultados".
 * Vacía el contenedor y muestra emptyState si providers.length === 0.
 */
function renderProviders(providers) {
    providersList.innerHTML = "";

    if (providers.length === 0) {
        emptyState.hidden = false;
        return;
    }

    emptyState.hidden = true;

    providers.forEach((provider) => {
        const card = createProviderCard(provider);
        providersList.appendChild(card);
    });
}

// Estado inicial: Cargando visible mientras fetch está pendiente (docs/challenge.md:40)
loadingState.hidden = false;

// fetch: simula consumo de API real desacoplada (docs/challenge.md:34 - datos NO hardcodeados en HTML)
// Nota v1: se hace fetch directo a JSON local; en producción sería una API (json-server, REST).
fetch("data/providers.json")
    .then((response) => response.json())
    .then((providers) => {
        loadingState.hidden = true;
        // Render inicial usa la misma función que el filtro para mantener consistencia de estados
        renderProviders(providers);
        populateProfessionFilter(providers);
    })
    .catch((error) => {
        loadingState.hidden = true;
        errorState.hidden = false;
        console.error(error);
    });

// Filtro por categoría: vuelve a consultar el JSON y filtra en cliente (v1 simple).
// Nota arquitectónica: v1 hace re-fetch en cada change; optimización futura es cachear providers en memoria.
professionFilter.addEventListener("change", () => {
    const selectedProfession = professionFilter.value;

    fetch("data/providers.json")
        .then((response) => response.json())
        .then((providers) => {
            const filteredProviders =
                selectedProfession === "all"
                    ? providers
                    : providers.filter((provider) => provider.profesion === selectedProfession);

            renderProviders(filteredProviders);
        });
});
