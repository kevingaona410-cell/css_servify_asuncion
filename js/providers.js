
// Contenedor principal donde se renderizan las tarjetas de proveedores.
const providersList = document.getElementById("providers-list");

// Se obtiene la información desde el archivo JSON y se muestra
// en la página para que el usuario vea la lista disponible.
const loadingState = document.getElementById("loading-state");
const errorState = document.getElementById("error-state");
const emptyState = document.getElementById("empty-state");

loadingState.hidden = false;

fetch("data/providers.json")
    .then(response => response.json())
    .then(providers => {
        loadingState.hidden = true;

        providers.forEach(provider => {
            const card = createProviderCard(provider);

            providersList.appendChild(card);
    });

    populateProfessionFilter(providers);
    
    
}).catch(error => {
    loadingState.hidden = true;
    errorState.hidden = false;

    console.error(error);
});;

// Función reutilizable para crear la tarjeta visual de cada proveedor.
// Aquí se arma el contenido de la tarjeta para luego insertarla en el DOM.
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

// El filtro de categoría permite buscar proveedores por especialidad.
const professionFilter = document.getElementById("category-filter");

// Genera las opciones del select a partir de las profesiones disponibles
// en la lista de proveedores para filtrar el contenido dinámicamente.
function populateProfessionFilter(providers) {
    const professions = [...new Set(
        providers.map(provider => provider.profesion)
    )];

    professions.forEach(profession => {
        const option = document.createElement("option");

        option.value = profession;
        option.textContent = profession;

        professionFilter.appendChild(option);
    });
}

// Esta función muestra solo los proveedores que coinciden con el filtro seleccionado.
function renderProviders(providers) {
    providersList.innerHTML = "";

    if (providers.length === 0) {
        emptyState.hidden = false;
        return;
    }

    emptyState.hidden = true;

    providers.forEach(provider => {
        const card = createProviderCard(provider);
        providersList.appendChild(card);
    });
}

// Cuando cambia la opción del filtro se muestran solo los proveedores de la profesión elegida
professionFilter.addEventListener("change", () => {

    const selectedProfession = professionFilter.value;

    fetch("data/providers.json")
        .then(response => response.json())
        .then(providers => {
        
            const filteredProviders =
            selectedProfession === "all"
                ? providers
                : providers.filter(
                    provider => provider.profesion === selectedProfession
                );

            renderProviders(filteredProviders);
        });
    });

