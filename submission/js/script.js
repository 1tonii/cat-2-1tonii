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
// Customer Wishlist

let wishListInput = document.querySelector("#wishlistInput");
let wishListButton = document.querySelector("#wishlistForm button");
let wishListItems = document.querySelector("#wishlistItems");
 let formMessage = document.querySelector("#formMessage");
 let wishlist = [];
wishListButton.addEventListener("click", function(event){

    event.preventDefault();

    let productName = wishListInput.value.trim();

    if (productName === "") {

    formMessage.textContent = "Please enter a product name";
    formMessage.style.color = "red";

} else {

            let li = document.createElement("li");
    li.textContent = productName;

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Remove";

    deleteButton.addEventListener("click", function(){
        li.remove();
    });

    li.appendChild(deleteButton);
    wishListItems.appendChild(li);
    wishlist.push(productName);
localStorage.setItem("wishlist", JSON.stringify(wishlist));

    wishListInput.value = "";

    formMessage.textContent = "Item added successfully";
    formMessage.style.color = "green";
}
});
window.addEventListener("load", function () {

    let saved = localStorage.getItem("wishlist");

    if (saved) {
        wishlist = JSON.parse(saved);

        wishlist.forEach(function (item) {

            let li = document.createElement("li");
            li.textContent = item;

            let deleteButton = document.createElement("button");
            deleteButton.textContent = "Remove";

            deleteButton.addEventListener("click", function () {
                li.remove();
            });

            li.appendChild(deleteButton);
            wishListItems.appendChild(li);

        });
    }
let banner = document.querySelector(".banner");
let bannerText = document.querySelector("#bannerText");

banner.addEventListener("click", function () {
    bannerText.classList.toggle("hidden");
});
});