var listOfProducts;
var shoppingCart;

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
    shoppingCart = JSON.parse(localStorage.getItem("productArray")); //TODO check for undefined
    document.getElementById("clicks").innerHTML = shoppingCart.length;
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
     if (!shoppingCart) {
         shoppingCart = [product];
     }else {

         shoppingCart.push(product);
     }
     
    var productArray = JSON.stringify(shoppingCart);
    localStorage.productArray = productArray;
    document.getElementById("clicks").innerHTML = shoppingCart.length;
}
