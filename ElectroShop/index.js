"use strict";
const storeName = "ElectroShop";
const storeDescription = "Electronics Online Store";
const currency = "JD";
let availableProducts = 5;
let isStoreOpen = true;
let productNames = [
    "Laptop",
    "Phone",
    "Headphones",
    "Keyboard",
    "Mouse"
];
let productInfo = [
    "Laptop",
    650,
    true
];
let productPrices = [
    650,
    400,
    80,
    150,
    25
];
let storeStatus = document.getElementById("storeStatus");
if (storeStatus) {
    if (isStoreOpen) {
        storeStatus.innerHTML = "Store is Open";
    }
    else {
        storeStatus.innerHTML = "Store is Closed";
    }
}
let productPrice = 650;
let priceCheck = document.getElementById("priceCheck");
if (priceCheck) {
    if (productPrice > 500) {
        priceCheck.innerHTML = "Expensive Product";
    }
    else if (productPrice >= 100 && productPrice <= 500) {
        priceCheck.innerHTML = "Medium Price";
    }
    else {
        priceCheck.innerHTML = "Affordable Product";
    }
}
let productsContainer = document.getElementById("products");
if (productsContainer) {
    productsContainer.innerHTML = "";
    for (let product of productNames) {
        productsContainer.innerHTML += `<p>${product}</p>`;
    }
}
let count = 0;
for (let price of productPrices) {
    if (price > 100) {
        count++;
    }
}
let productCount = document.getElementById("productCount");
if (productCount) {
    productCount.innerHTML = `${count} products`;
}
//DAY2
//function1
function calculateDiscount(originalPrice, discountPercentage) {
    let discount = originalPrice * discountPercentage / 100;
    let finalPrice = originalPrice - discount;
    return finalPrice;
}
let finalPrice = calculateDiscount(500, 10);
let discountResult = document.getElementById("discountResult");
if (discountResult) {
    discountResult.innerHTML = `Final Price: ${finalPrice} JD`;
}
//function 2
function checkProductAvailability(quantity) {
    if (quantity > 0) {
        return "In Stock";
    }
    else {
        return "Out of Stock";
    }
}
let availability = checkProductAvailability(5);
let availabilityResult = document.getElementById("availabilityResult");
if (availabilityResult) {
    availabilityResult.innerHTML = availability;
}
//optional function 
function displayProductInfo(name, price, description, currency = "USD") {
    let productInfo = document.getElementById("productDetails");
    if (productInfo) {
        productInfo.innerHTML = `
            <h3>${name}</h3>
            <p>Price: ${price} ${currency}</p>
            <p>Description: ${description ?? "No description"}</p>
        `;
    }
}
displayProductInfo("Laptop", 650, "HP Laptop");
// Rest Parameters
function calculateTotalPrice(...prices) {
    let total = 0;
    for (let price of prices) {
        total += price;
    }
    return total;
}
let totalPrice = calculateTotalPrice(100, 200, 50, 150);
let totalPriceResult = document.getElementById("totalPriceResult");
if (totalPriceResult) {
    totalPriceResult.innerHTML = `Total Price: ${totalPrice}`;
}
//last part array of objects
let electronicProducts = [
    {
        name: "Laptop",
        description: "Core i5, 8GB RAM",
        price: 650
    },
    {
        name: "Headphones",
        description: "Wireless Bluetooth headphones",
        price: 75
    },
    {
        name: "Keyboard",
        description: "Mechanical gaming keyboard",
        price: 45
    }
];
function loadProducts() {
    let container = document.getElementById("loadedProducts");
    if (container) {
        container.innerHTML = "";
        for (let product of electronicProducts) {
            container.innerHTML += `
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p>Price: ${product.price} JD</p>
                <hr>
            `;
        }
    }
}
