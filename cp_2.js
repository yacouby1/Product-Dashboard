function fetchProductsThen() {
    fetch("https://www.course-api.com/javascript-store-products")
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);

            data.forEach(function(product) {
                console.log(product.fields.name);
            });
        })
        .catch(function(error) {
            console.log("Error:", error);
        });
}

async function fetchProductsAsync() {
    try {
        const response = await fetch("https://www.course-api.com/javascript-store-products");
        const data = await response.json();

        displayProducts(data);

    } catch (error) {
        handleError(error);
    }
}

function displayProducts(products) {
    const container = document.getElementById("product-container");

    container.innerHTML = "";

    products.slice(0, 5).forEach(function(product) {
        const name = product.fields.name;
        const price = product.fields.price;
        const image = product.fields.image[0].url;

        const card = document.createElement("div");
        card.classList.add("product-card");

        card.innerHTML = `
            <img src="${image}" alt="${name}">
            <h3>${name}</h3>
            <p>$${price}</p>
        `;

        container.appendChild(card);
    });
}

function handleError(error) {
    console.log("An error occurred:", error);
}

fetchProductsThen();
fetchProductsAsync();