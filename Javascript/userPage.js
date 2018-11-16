var orderHistory = JSON.parse(localStorage.orders)   

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
            iconLink.href = "/userPage.html";
        }
        printOutHistory()
    }

    function printOutHistory() {
        for (i = 0; i < orderHistory.length; i++)
            document.getElementsByClassName("userPageDiv").innerHTML += (i+1) + ": " + orderHistory[i];

    }

