var previousString = "";
var formID = document.querySelector('#signup');
var usernameID = document.querySelector('#username');
var passwordID = document.querySelector('#password');
var rePasswordID = document.querySelector('#rePassword');

function checkPassword(password) {

    var flag = true;
    var passwordRef = document.querySelector(`#${password}`);
    if(passwordRef != null)
        var passwordValue = passwordRef.value;
    var errorElem = document.querySelector("#errorList");

    if(passwordRef != null) {
        if(passwordRef.name === "password")
            previousString = passwordValue;

        if(passwordValue === "") {
            passwordRef.style.border = "none";
            passwordRef.style.background = "#f1f1f1";
            errorElem.innerHTML = "";
            //return false;
            flag = false;
        }
    }

    var regEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

    var errorElem = document.querySelector("#errorList");

    if(passwordRef != null) {
        if(passwordValue.match(regEx)){

            if(passwordRef.name === "rePassword") {
                if(previousString === passwordValue) {
                    errorElem.innerHTML = "";
                    passwordRef.style.border = "none";
                    passwordRef.style.background = "#f1f1f1";
                    //return true;
                    flag = true;
                }
                else {
                    errorElem.innerHTML = "Your passwords dont match, please re-enter the password."
                    errorElem.style.color = 'red';
                    errorElem.style.fontSize = '20px';
                    errorElem.style.fontFamily = "monospace";
                    formID.rePassword.select();
                    passwordRef.style.border = "red 2px solid";
                    //passwordRef.style.background = "#FC80A5";
                    passwordRef.style.background = "#ff6e6e";
                    //return false;
                    flag = false;
                }
            }
            else{
                errorElem.innerHTML = "";
                passwordRef.style.border = "none";
                passwordRef.style.background = "#f1f1f1";
                //return true;
                flag = true;
            }
        }
        else{
            if(passwordRef.name === "password") {
                errorElem.innerHTML = "Password must be at least 6 characters long, have at least 1 digit, 1 uppercase and 1 special character. Special characters allowed: @$!%*?&#"
                formID.password.select();
            }
            else if(passwordRef.name === "rePassword") {
                errorElem.innerHTML = "Retyped Password must be at least 6 characters long, have at least 1 digit, 1 uppercase and 1 special character. Special characters allowed: @$!%*?&#"
                formID.rePassword.select();
            }
            errorElem.style.color = 'red';
            errorElem.style.fontSize = '20px';
            errorElem.style.fontFamily = "monospace";
            passwordRef.style.border = "red 2px solid";
            passwordRef.style.background = "#ff6e6e";
            //return false;
            flag = false;
        }
    }

    if(password === 'pass' && flag) {
        passwordID.style.border = "none";
        passwordID.style.background = "#f1f1f1";
    }
    else if(password == 're' && flag){
        rePasswordID.style.border = "none";
        rePasswordID.style.background = "#f1f1f1";
    }

    return flag;
}

function checkUsername(username) {

    var flag = true;
    var usernameRef = document.querySelector(`#${username}`);
    if(usernameRef != null)
        var usernameValue = usernameRef.value;

    var regEx = /^[A-Za-z][A-Za-z\d@$!%*?&#]{5,}$/;

    var errorElem = document.querySelector("#errorList");

    if(usernameValue === "") {
        usernameRef.style.border = "none";
        usernameRef.style.background = "#f1f1f1";
        errorElem.innerHTML = "";
        //return false;
        flag = false;
    }

    if(usernameRef != null) {
        if(usernameValue.match(regEx)){
            errorElem.innerHTML = "";
            usernameRef.style.border = "none";
            usernameRef.style.background = "#f1f1f1";
            //return true;
            flag = true;
        }
        else{
            errorElem.innerHTML = "Username must start with a letter and have at least 6 characters."
            errorElem.style.color = 'red';
            errorElem.style.fontSize = '20px';
            errorElem.style.fontFamily = "monospace";
            formID.username.select();
            usernameRef.style.border = "red 2px solid";
            usernameRef.style.background = "#ff6e6e";
            formID.username.select();
            //return false;
            flag = false;
        }
    }

    if(username === 'undefined' && flag) {
        usernameID.style.border = "none";
        usernameID.style.background = "#f1f1f1";
    }
    return flag;
}

function formValid(){
    if(checkPassword('password') && checkPassword('rePassword') && checkUsername('username')) {
        alert("No errors found. This form will now be submitted.");
        return true;
    }
    return false;
}

// formID.addEventListener('submit', function(e) {
//     if(checkPassword('password') && checkPassword('rePassword') && checkUsername('username')) {
//         alert("No errors found. This form will now be submitted");
//     }
//     else{
//       return e.preventDefault();
//     }
// });