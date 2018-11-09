var shoppingProducts = JSON.parse(localStorage.productArray);

function shopingSite() {
    document.getElementById("clicks").innerHTML = " " + shoppingProducts.length + "";
    shoppingHeadline();
    showShopingCart();
    confirmOrder();
    sumOfAll();
}

var shoppingTemplate = document.createElement("div");
shoppingTemplate.className = "shoppingTemplateClass";


        // Shows the localstorage, items// 
    function showShopingCart() {
    for (i = 0; i < shoppingProducts.length; i++) {
        var mobileProduct = createShopingCart(shoppingProducts[i]);
        shoppingTemplate.appendChild(mobileProduct);
      }
      document.body.appendChild(shoppingTemplate);


}
    //Creates the headline
function shoppingHeadline() {
    var headlineContainer = document.createElement("div");
    headlineContainer.className = "headlineContainerClass";
    
    var shoppingCartIcon = document.createElement("span");
    shoppingCartIcon.style.display = "inline-block";
    shoppingCartIcon.className = "cartIcon fa fa-shopping-cart ";
    headlineContainer.appendChild(shoppingCartIcon);
    
    var headlineText = document.createElement("span");
    headlineText.style.display = "inline-block";
    
    var shoppingHeadline = document.createElement("h1")
    shoppingHeadline.className = "headlineShoppingCart";
    shoppingHeadline.innerText =  "Kundvagn";
    headlineText.appendChild(shoppingHeadline);
    headlineContainer.appendChild(headlineText);

    
    
    document.body.appendChild(headlineContainer);

    
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

//Creates an element with total price and a button to confirm the order

function confirmOrder() {
    var totalConfirm = document.createElement("div");
    totalConfirm.className = "confirmOrderClass";

    var totalPrice = document.createElement("p")
    totalPrice.id = "sumOfAll";
    totalPrice.innerText = "Totalt pris: "
    totalConfirm.appendChild(totalPrice)
    
    var confirmButton = document.createElement("button");
    confirmButton.className ="confirmButtonClass";
    totalConfirm.appendChild(confirmButton)

    var confirmIcon = document.createElement("span");
    confirmIcon.className = "confirmIcon fa fa-check";
    confirmButton.appendChild(confirmIcon);

    var confirmText = document.createElement("span");
    confirmText.innerText = "Slutför ditt köp";
    confirmButton.appendChild(confirmText)
    
    document.body.appendChild(totalConfirm);
}


// Calculates total price of items in localStorage, the total price  //
function sumOfAll() {
    var total = 0;
    for( var i = 0; i < shoppingProducts.length; i++){
        total += shoppingProducts[i].price;
    }
    document.getElementById("sumOfAll").append(total + " kr")
  
}