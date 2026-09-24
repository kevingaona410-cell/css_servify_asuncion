
// Contenedor principal donde se renderizan las tarjetas de proveedores.
const providersList = document.getElementById("providers-list");

// Se obtiene la información desde el archivo JSON y se muestra
// en la página para que el usuario vea la lista disponible.
const loadingState = document.getElementById("loading-state");
const errorState = document.getElementById("error-state");
const emptyState = document.getElementById("empty-state");
const professionFilter = document.getElementById("category-filter");
const professionSearch = document.getElementById("profession-search");

let providersCache = [];

async function loadProviders() {
    loadingState.hidden = false;

    try {
        const response = await fetch("data/providers.json");
        const providers = await response.json();
        providersCache = providers;

        loadingState.hidden = true;
        populateProfessionFilter(providers);
        renderProviders(providers);
    } catch (error) {
        loadingState.hidden = true;
        errorState.hidden = false;
        console.error(error);
    }
}

// Función reutilizable para crear la tarjeta visual de cada proveedor.
function createProviderCard(provider) {
    const article = document.createElement("article");
    article.classList.add("provider-card");

    article.innerHTML = `
        <div class="provider-card__summary">
            <h3>${provider.nombre}</h3>
            <p>${provider.profesion}</p>
            <p>${provider.experiencia} años de experiencia</p>
            <p class="rating">★ ${provider.calificacion}</p>
        </div>

        <div class="provider-card__details">
            <div class="provider-card__details-inner">
                <h3>${provider.nombre}</h3>
                <p>${provider.profesion}</p>
                <p>${provider.experiencia} años de experiencia</p>
                <p>${provider.descripcion}</p>
                <p>📞 ${provider.telefono}</p>
                <a href="provider.html?id=${provider.id}">Ver perfil →</a>
            </div>
        </div>
    `;

    return article;
}

// Genera las opciones del select a partir de las profesiones disponibles
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

// Esta función muestra solo los proveedores que coinciden con los filtros activos.
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

function applyFilters() {
    const selectedProfession = professionFilter.value;
    const searchTerm = professionSearch.value.trim().toLocaleLowerCase();
    const filteredProviders = providersCache.filter(provider => {
        const matchesCategory = selectedProfession === "all"
            || provider.profesion === selectedProfession;
        const matchesSearch = provider.profesion.toLocaleLowerCase().includes(searchTerm);

        return matchesCategory && matchesSearch;
    });

    renderProviders(filteredProviders);
}

professionFilter.addEventListener("change", applyFilters);
professionSearch.addEventListener("input", applyFilters);

loadProviders();

