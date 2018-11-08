var listOfProducts = JSON.parse(localStorage.productArray);

function shopingSite() {
    document.getElementById("clicks").innerHTML = " " + localStorage.clickcount + "";
    sumOfALl();
    showShopingCart();
}


function showShopingCart() {
    for (i = 0; i < listOfProducts.length; i++) {
        var mobileProduct = createMobileCard(listOfProducts[i]);
        mobileTemplate.appendChild(mobileProduct);
      }
      document.body.appendChild(mobileTemplate);


}


/** Calculates total price of items in localStorage, the total price  */
function sumOfALl() {
    var total = 0;
    console.log(listOfProducts)
    for( var i = 0; i < listOfProducts.length; i++){
        total += listOfProducts[i].price;
    }
    document.getElementById("sumOfAll").append(total)
  
}