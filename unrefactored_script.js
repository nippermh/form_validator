/*
This code has been refactored
*/

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//show input error message
function showError(input, message) {
    const formControl= input.parentElement; //get form-control
    //adding error to the form-control class
    formControl.className = 'form-control error'; //over write the form class
    const small = formControl.querySelector('small');
    //change the error message to be the one in showError
    small.innerText = message;
}



//show success outline
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

//Check email is valid
function isValidEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

//Event Listeners
form.addEventListener('submit', function(e) {
    e.preventDefault(); //prevents submitting 
    //console.log('username.value');
    //this is all removed in the refactored code
    if(username.value === '') {
        showError(username, 'Username is required');
    } else {
       showSuccess(username); 
    }

    if(email.value === '') {
        showError(email, 'Email is required');
    } else if(!isValidEmail(email.value)) {
        showError(email, 'Email is not valid');
    } else {
       showSuccess(email); 
    }

    if(password.value === '') {
        showError(password, 'Password is required');
    } else {
       showSuccess(password); 
    }

    if(password2.value === '') {
        showError(password2, 'Password confirmation is required');
    } else {
       showSuccess(password2); 
    }
});
