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
            <p class="category">${product.category}</p>
            <h3 class="title">${product.title}</h3>
            <p class="price">${product.price}$</p>
            <button class="product-btn" id>+</button>
        </article>`
    }
}
getProducts();