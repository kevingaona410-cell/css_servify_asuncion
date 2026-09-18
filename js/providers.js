
// Contenedor principal donde se renderizan las tarjetas de proveedores.
const providersList = document.getElementById("providers-list");

// Carga inicial de proveedores desde la fuente de datos JSON.
fetch("data/providers.json")
    .then(response => response.json())
    .then(providers => {
    console.log(providers);

    providers.forEach(provider => {
        const card = createProviderCard(provider);

        providersList.appendChild(card);
    });

    populateProfessionFilter(providers);
    });

// Función reutilizable para crear la tarjeta visual de cada proveedor.
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

// 
const professionFilter = document.getElementById("category-filter");

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

function renderProviders(providers) {
    providersList.innerHTML = "";

    providers.forEach(provider => {
        const card = createProviderCard(provider);

        providersList.appendChild(card);
    });
}


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

function renderProviders(providers) {
    providersList.innerHTML = "";

    providers.forEach(provider => {
        const card = createProviderCard(provider);

        providersList.appendChild(card);
    });
}

professionFilter.addEventListener("change", () => {
    const selectedProfession = professionFilter.value;

    fetch("data/providers.json")
    .then(response => response.json())
    .then(providers => {
        const filteredProviders = 
            selectedProfession === "all" ? providers
                : providers.filter(
                    provider => provider.profesion === selectedProfession);

                    renderProviders(filteredProviders);});
                });