var shoppingProducts = JSON.parse(localStorage.productArray);

function remember() {
    document.getElementById("clicks").innerHTML = " " + shoppingProducts.length + "";
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
            localStorage.setItem("loggedInUser", JSON.stringify(userAccounts[i]))
           
            window.location.href = "userPage.html";

            var userIcon = document.getElementById("userIcon");
            userIcon.href = "userPage.html";

            var userDetails = document.getElementById("user");
            userDetails.innerText = "" + userName.value;
        
        } else {
            alert('Fel användarnamn eller lösenord');
        }
    }
    
}





