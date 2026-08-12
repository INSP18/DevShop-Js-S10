async function getProducts() {
    try{
        const response = await fetch("https://fakestoreapi.com/products");
        const products = await response.json();
        console.log(products)

        displayProducts(products)
    }catch(error){
        console.error("Impossible de charger les produits")
    }
}

function displayProducts(products){
    const container = document.getElementById("products-container")
    container.innerHTML=" ";

    for(let i=0; i<products.length; i++){
        const product = products[i]
        container.innerHTML +=`
        <article class="product-card">
            <img src="${product.image}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p class="price">${product.price}$</p>
            <button>Ajouter au pannier</button>
        </article>`
    }
}
getProducts();