var listOfProducts;
var productArray = JSON.stringify(cart);
var cart = []

/** Get products from the json file and store it in a global variable */
function loadProducts() {
    fetch("./products.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(products) {
        listOfProducts = products;
        addProductsToWebpage();
    });
}
//Skapar en "main-div" för mobilprodukten på sidan
var mobileTemplate = document.createElement("div");
mobileTemplate.className = "mobileTemplateClass";

function initSite() {
    loadProducts();
    document.getElementById("clicks").innerHTML = " " + localStorage.clickcount + "";

}


/** Uses the loaded products data to create a visible product list on the website */
function addProductsToWebpage() {
    console.log(listOfProducts);
    for(var i=0; i < listOfProducts.length; i++)  {
        var mobileProduct = createMobileCard(listOfProducts[i]);
        mobileTemplate.appendChild(mobileProduct);
    }
    document.body.appendChild(mobileTemplate);

}
    // Change the card layout for shopping card // 
function createMobileCard(product) {
    var mobileProduct = document.createElement("div");
    mobileProduct.className = "divMobileProduct";

    var mobileName = document.createElement("h2")
    mobileName.innerText = " " +product.title;
    mobileProduct.appendChild(mobileName);

    var mobileName = document.createElement("p")
    mobileName.innerText = " " +product.description;
    mobileProduct.appendChild(mobileName);

    var mobileImage = document.createElement("img");

    mobileImage.src = " " +product.image;

    mobileProduct.appendChild(mobileImage);

    var mobileName = document.createElement("p")
    mobileName.innerText = product.price + " kr ";
    mobileProduct.appendChild(mobileName);

    var shoppingButton = document.createElement("button")
    shoppingButton.className = "shoppingCartButton"
    shoppingButton.onclick = addToCart.bind(undefined, product);
    

    var shoppingCart = document.createElement("span")
    shoppingCart.className = "fa fa-cart-arrow-down "

    var shoppingCartText = document.createElement("span")
    shoppingCartText.innerText = " Lägg till i kundvagnen"

    mobileProduct.appendChild(shoppingButton)
    shoppingButton.appendChild(shoppingCart)
    shoppingButton.appendChild(shoppingCartText)

    return mobileProduct;
}

/** Addes a clickcounter and addes items to localstorage */
function addToCart(product) {
    if(typeof(Storage) !== "0") {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount)+1;
        } else {
            localStorage.clickcount = 1;
        }
        document.getElementById("clicks").innerHTML = " " + localStorage.clickcount + "";
    } 
    
    cart.push(product);
    console.log(cart);
    var productArray = JSON.stringify(cart);
    console.log(productArray)
    localStorage.productArray = productArray;

}
