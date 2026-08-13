let cart = []
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
            <button class="product-btn" onclick="addTocart(${product.id})">+</button>
        </article>`
    }
}

async function addTocart(productId){
    try{
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`)
        const product = await response.json()

        cart.push(product)
        console.log('Produit ajouté au panier', product.title)
        console.log('contenu actuel du panier', cart)

        alert(`${product.title} a été ajouté au panier`)
    }catch(error){
        console.error(" Impossible de charger les produits pour le moment. Réessayer")
    }
}
getProducts();