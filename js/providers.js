// Referencias DOM - estados y contenedores definidos en providers.html
const providersList = document.getElementById("providers-list");
const loadingState = document.getElementById("loading-state");
const errorState = document.getElementById("error-state");
const emptyState = document.getElementById("empty-state");
const professionFilter = document.getElementById("category-filter");

// Crea la tarjeta visual de un proveedor: nombre / categoría (profesion) / calificación visual (★) / acción (ver detalle).
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

//Pobla el filtro de categorías en el HTML.
function populateProfessionFilter(providers) {
    const professions = [...new Set(providers.map((provider) => provider.profesion))]; // extrae la profesion sin repetir en un array
    professions.forEach((profession) => {
        const option = document.createElement("option");
        option.value = profession;
        option.textContent = profession;
        professionFilter.appendChild(option);
    });
}
// Renderiza la lista de proveedores y gestiona el estado "Sin resultados").
function renderProviders(providers) {
    providersList.innerHTML = "";   // limpia tarjetas anteriores para no duplicar al filtrar.
    
    //muestra el estado vacio y hace return (no renderiza nada más).
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

// Cargando visible mientras fetch está pendiente (docs/challenge.md:40)
loadingState.hidden = false;

// se hace fetch directo a JSON local.
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

// vuelve a consultar el JSON y filtra en cliente.
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
