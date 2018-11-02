var listOfProducts;

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
//Skapar en div för mobilprodukten på sidan
var mobileTemplate = document.createElement("div");
mobileTemplate.className = "mobileTemplateClass";

function initSite() {
    loadProducts();
    
}


/** Uses the loaded products data to create a visible product list on the website */
function addProductsToWebpage() {
    for(var i=0; i < listOfProducts.length; i++)  {
        var mobileProduct = createMobileCard(listOfProducts[i]);
        mobileTemplate.appendChild(mobileProduct);
    }
    document.body.appendChild(mobileTemplate);

}

function createMobileCard(listOfProducts) {
    var mobileProduct = document.createElement("div");
    mobileProduct.className = "divMobileProduct";

    var mobileName = document.createElement("h2")
    mobileName.innerText = " " +listOfProducts.title;
    mobileProduct.appendChild(mobileName);

    var mobileName = document.createElement("p")
    mobileName.innerText = " " +listOfProducts.description;
    mobileProduct.appendChild(mobileName);

    var mobileImage = document.createElement("img");
    var imageName = "./assets/iPhoneX.png";
    mobileImage.src = " " +listOfProducts.image;
    mobileProduct.appendChild(mobileImage);

    var mobileName = document.createElement("p")
    mobileName.innerText = listOfProducts.price + " kr ";
    mobileProduct.appendChild(mobileName);

    var shoppingCart = document.createElement("p")
    shoppingCart.className = "shoppingCartButton fa fa-cart-arrow-down "
    shoppingCart.innerText = " Lägg till i kundvagnen"
    mobileProduct.appendChild(shoppingCart)


    return mobileProduct;
}