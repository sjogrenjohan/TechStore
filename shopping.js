var listOfProducts = JSON.parse(localStorage.productArray);

function shopingSite() {
    document.getElementById("clicks").innerHTML = " " + localStorage.clickcount + "";
    sumOfAll();
    showShopingCart();
    shoppingHeadline();
}

var shoppingTemplate = document.createElement("div");
shoppingTemplate.className = "shoppingTemplateClass";


        // Shows the localstorage, items// 
function showShopingCart() {
    for (i = 0; i < listOfProducts.length; i++) {
        var mobileProduct = createShopingCart(listOfProducts[i]);
        shoppingTemplate.appendChild(mobileProduct);
      }
      document.body.appendChild(shoppingTemplate);


}
    //Creates the headline
function shoppingHeadline() {
    var headlineContainer = document.createElement("div");
    headlineContainer.className = "headlineContainerClass";

    var shoppingCartIcon = document.createElement("h1");
    shoppingCartIcon.className = "fa fa-cart-arrow-down ";
    headlineContainer.appendChild(shoppingCartIcon);

    var shoppingHeadline = document.createElement("h1");
    shoppingHeadline.innerText = "Kundvagn";
    headlineContainer.appendChild(shoppingHeadline);


    
}

        // Change the card layout for shopping card // 
function createShopingCart(product) {
    var mobileProduct = document.createElement("div");
    mobileProduct.className = "divShoppingProduct";
    
    
    var mobileImage = document.createElement("img");
    mobileImage.className = "shoppingImages"
    mobileImage.src = " " +product.image;
    mobileProduct.appendChild(mobileImage);

    var mobileName = document.createElement("h2")
    mobileName.className = "titleText";
    mobileName.innerText = " " +product.title;
    mobileProduct.appendChild(mobileName);

    var mobileName = document.createElement("p")
    mobileName.className = "priceText";
    mobileName.innerText = product.price + " kr ";
    mobileProduct.appendChild(mobileName);

    var shoppingButton = document.createElement("button")
    shoppingButton.className = "removeProductButton";
    shoppingButton.onclick = addToCart.bind(undefined, product);
    

    var shoppingCart = document.createElement("span")
    shoppingCart.className = "fa fa-trash-o ";

    var shoppingCartText = document.createElement("span")
    shoppingCartText.className = "removeButtonText";
    shoppingCartText.innerText = " Ta bort";

    mobileProduct.appendChild(shoppingButton)

    shoppingButton.appendChild(shoppingCart)
    shoppingButton.appendChild(shoppingCartText)

    return mobileProduct;
}


// Calculates total price of items in localStorage, the total price  //
function sumOfAll() {
    var total = 0;
    for( var i = 0; i < listOfProducts.length; i++){
        total += listOfProducts[i].price;
    }
    document.getElementById("sumOfAll").append(total)
  
}