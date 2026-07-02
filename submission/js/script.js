const products = [
    {
        name: "Power Converter",
        category: "Electrical Power Device",
        price: "KSh 500"
    },
    {
        name: "Professional Microphone",
        category: "Professional Audio System",
        price: "KSh 600"
    },
    {
        name: "Car Speaker",
        category: "Car Audio System",
        price: "KSh 2500"
    }
];
let productsContainer = document.querySelector("#featured-products");
products.forEach(function(product){

    let productCard = document.createElement("div");

    let productName = document.createElement("h4");
    productName.textContent = product.name;

    let productCategory = document.createElement("p");
    productCategory.textContent = "Category: " + product.category;

    let productPrice = document.createElement("p");
    productPrice.textContent = "Price: " + product.price;

    productCard.appendChild(productName);
    productCard.appendChild(productCategory);
    productCard.appendChild(productPrice);

    productsContainer.appendChild(productCard);

});