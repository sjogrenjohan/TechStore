var shoppingProducts = JSON.parse(localStorage.productArray);

function remember() {
    document.getElementById("clicks").innerHTML = " " + shoppingProducts.length + "";
}