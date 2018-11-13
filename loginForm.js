// Name and Password from the register-form
var name = document.getElementById('exampleInputEmail1');
var pw = document.getElementById('exampleInputPassword1');

// storing input from register-form
function store() {
    localStorage.setItem('exampleInputEmail1', name.value);
    localStorage.setItem('exampleInputPassword1', pw.value);
}

// check if stored data from register-form is equal to entered data in the   login-form
function check() {

    // stored data from the register-form
    var storedName = localStorage.getItem('exampleInputEmail1');
    var storedPw = localStorage.getItem('exampleInputPassword1');

    // entered data from the login-form
    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPassword');

    // check if stored data from register-form is equal to data from login form
    if(userName.value == storedName && userPw.value == storedPw) {
        alert('You are logged in.');
    }else {
        alert('ERROR.');
    }
}
