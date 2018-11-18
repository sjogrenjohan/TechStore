var shoppingProducts = JSON.parse(localStorage.productArray);

function remember() {
    
    //Shopping cart
    document.getElementById("clicks").innerHTML = " " + shoppingProducts.length + "";
    
    //User logged in
    var loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    if(loggedInUser) {
        window.location.href = "./userPage.html";
    }

}

// storing input from register-form
function store() {
    // Name and Password from the register-form
    var name = document.getElementById('exampleInputEmail1');
    var pw = document.getElementById('exampleInputPassword1');
    var newUser =  {
        userName: name.value,
        userPassword: pw.value
    }
    var userAccounts = JSON.parse(localStorage.getItem("userAccounts")) 
    if(!userAccounts) {
        userAccounts = [newUser]
    }
    else {
        userAccounts.push(newUser)
    }
    
    localStorage.setItem("userAccounts", JSON.stringify(userAccounts))
}

// check if stored data from register-form is equal to entered data in the   login-form
function check() {

    //Retrieve user login details from local storage
    var userAccounts = JSON.parse(localStorage.getItem("userAccounts"));
    
    // entered data from the login-form
    var inputName = document.getElementById('userName');
    var inputPassword = document.getElementById('userPassword');
    
    // check if stored data from register-form is equal to data from login form
    for(var i = 0; i < userAccounts.length; i++) {
        if(userAccounts[i].userName == inputName.value && userAccounts[i].userPassword == inputPassword.value) {
            //Creates an array for a logged in user
            localStorage.setItem("loggedInUser", JSON.stringify(userAccounts[i]))

            //Makes your username visible at the navbar when logged in
            var userDetails = document.getElementById("user");
            userDetails.innerText = "" + userAccounts[i].userName;

            window.location.href = "./userPage.html";
            
            break
        } else {
            alert('Fel användarnamn eller lösenord');
        }
    }
    
}

function logout() {
    localStorage.removeItem("loggedInUser");
    window.location.href = "app://index.html";
}






