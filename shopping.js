function shopingSite() {
    document.getElementById("clicks").innerHTML = " " + localStorage.clickcount + "";
    sumOfALl();
}


function showShopingCart() {
    var listOfProducts = JSON.parse(localStorage.productArray);
    for (var i = 0; i < listOfProducts.length;i++){
        
    }


}


/** Calculates total price of items in localStorage, the total price  */
function sumOfALl() {
    var total = 0;
    var listOfProducts = JSON.parse(localStorage.productArray);
    for( var i = 0; i < listOfProducts.length; i++){
        total += listOfProducts[i].price;
    }
    document.getElementById("sumOfAll").append(total)
  
}