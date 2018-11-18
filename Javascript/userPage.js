function initUserPage() {
    
    //Shopping cart numbers
    document.getElementById("clicks").innerHTML = shoppingProducts.length;
    
    //User logged in
    var loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    
    if(loggedInUser) {
        //Makes your username visible at the navbar when logged in
        var userDetails = document.getElementById("user");
        userDetails.innerText = "" + loggedInUser.userName;
        
        //When logged in the icon directs you to userPage
        var iconLink = document.getElementById("userIcon");
        iconLink.href = "./userPage.html";
        printOutHistory()
    }
}

function printOutHistory() {

    var orders = JSON.parse(localStorage.getItem("orders")); 
    var loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    var userPageDiv = document.getElementsByClassName("userPageDiv")[0];

    for (var i = 0; i < orders.length; i++) {
        if(loggedInUser.userName == orders[i].user) {
            var orderContainer = printOrder(orders[i])
            userPageDiv.appendChild(orderContainer)
        }

    }
}

function printOrder(order) {
    var orderContainer = document.createElement("div");
    orderContainer.className = "orderContainerClass";

    var newDate = new Date(order.date)


    var orderTitle = document.createElement("h3");
    orderTitle.className = "titleText"
    orderTitle.innerText = newDate.toDateString();
    orderContainer.appendChild(orderTitle)

    for (var i = 0; i < order.products.length; i++) {
        orderContainer.appendChild(printProductCard(order.products[i]));
    }
    return orderContainer
}

function printProductCard(product) {
    var productTemplate = document.createElement("div");
    productTemplate.className = "productTemplateClass";

    var orderImage = document.createElement("img");
    orderImage.className = "shoppingImages";
    orderImage.src = " " +product.image;
    productTemplate.appendChild(orderImage);

    var orderName = document.createElement("h3")
    orderName.classname = "titleText";
    orderName.innerText = " " + product.title;
    productTemplate.appendChild(orderName)

    var orderTitle = document.createElement("p");
    orderTitle.innerText = product.price + " kr";
    productTemplate.appendChild(orderTitle);

    



    return productTemplate
}