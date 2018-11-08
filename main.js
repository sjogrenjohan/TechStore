var listOfProducts;

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
//Skapar en div för mobilprodukten på sidanh
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
    shoppingButton.onclick = clickME;
    shoppingButton.setAttribute("data", product.title)

    var shoppingCart = document.createElement("span")
    shoppingCart.className = "fa fa-cart-arrow-down "

    var shoppingCartText = document.createElement("span")
    shoppingCartText.innerText = " Lägg till i kundvagnen"

    mobileProduct.appendChild(shoppingButton)

    shoppingButton.appendChild(shoppingCart)
    shoppingButton.appendChild(shoppingCartText)

    return mobileProduct;
}


function clickME(element) {
    if(typeof(Storage) !== "0") {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount)+1;
        } else {
            localStorage.clickcount = 1;
        }
        document.getElementById("clicks").innerHTML = " " + localStorage.clickcount + "";
    } else {
        document.getElementById("clicks").innerHTML = "Sorry, your browser does not support web storage...";
    }
    
    var productTitle = element.setAttribute("data")

    for(var i = 0; i < product.title; i++) {
        if(productTitle == product[i].title) {
            cart.push(product[i])
        }
    }

    /* localStorage.setItem("data", shoppingButton.product.title); */

}