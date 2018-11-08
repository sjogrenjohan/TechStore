var listOfProducts = JSON.parse(localStorage.productArray);

function shopingSite() {
    document.getElementById("clicks").innerHTML = " " + localStorage.clickcount + "";
    sumOfALl();
    showShopingCart();
}

        // Shows the localstorage, items// 
function showShopingCart() {
    for (i = 0; i < listOfProducts.length; i++) {
        var mobileProduct = createShopingCart(listOfProducts[i]);
        mobileTemplate.appendChild(mobileProduct);
      }
      document.body.appendChild(mobileTemplate);


}

        // Change the card layout for shopping card // 
function createShopingCart(product) {
    var mobileProduct = document.createElement("div");
    mobileProduct.className = "divShoppingProduct";

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
    shoppingButton.onclick = clickME.bind(undefined, product);
    

    var shoppingCart = document.createElement("span")
    shoppingCart.className = "fa fa-cart-arrow-down "

    var shoppingCartText = document.createElement("span")
    shoppingCartText.innerText = " Lägg till i kundvagnen"

    mobileProduct.appendChild(shoppingButton)

    shoppingButton.appendChild(shoppingCart)
    shoppingButton.appendChild(shoppingCartText)

    return mobileProduct;
}






// Calculates total price of items in localStorage, the total price  //
function sumOfALl() {
    var total = 0;
    for( var i = 0; i < listOfProducts.length; i++){
        total += listOfProducts[i].price;
    }
    document.getElementById("sumOfAll").append(total)
  
}