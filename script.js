//get all the elements
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//show input error message
function showError(input, message) {
    const formControl= input.parentElement; //get form-control
    //adding error to the form-control class
    formControl.className = 'form-control error'; //over write the form class to red
    const small = formControl.querySelector('small');
    //show the error message inside small tag
    small.innerText = message;
}

//show success outline
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

//Check email is valid
function checkEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, 'Email is not valid');
    }
}


//Check required fields
function checkRequired(inputArr) { //passing through the array below
    //for each loops through the array
    inputArr.forEach(function(input){ //pass in each input
        //console.log(input); 
        //console.log(input.id);
        //trim remove whitespace from both sides of a string
        if(input.value.trim() === '') {
            //will use whatever is in the id to create unique error message
            //showError(input, `${input.id} is required`);
            showError(input, `${getFieldName(input)} is required`);
        } else {
            showSuccess(input);
        }
    });
}

//check input length
function checkLength(input, min, max) {
    if(input.value.length < min) {
        showError(
            input, 
            `${getFieldName(input)} must be at least ${min} characters`
            );
    } else if(input.value.length > max) {
        showError(
            input, 
            `${getFieldName(input)} must be less than ${max} characters`
            );

    } else {
        showSuccess(input);
    }
}

//Check passwords match
function checkPasswordsMatch(input1, input2) {
    if(input1.value !== input2.value) {
        showError(input2, 'Passwords do not match');
    }
}

//Get field Name
function getFieldName(input) {
    //make the first letter in the error message a capital letter
    //slice removes the first letter from the message and add the rest
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
//Event Listeners
form.addEventListener('submit', function(e) {
    e.preventDefault(); //prevents submitting 
    //console.log('username.value');
    //pass in an array of all the inputs we want to validate
    checkRequired([username, email, password, password2]);
    checkLength(username, 3, 15); //minimum of 3 characters and max of 15
    checkLength(password, 6, 25); //min of 6 characters and max of 25
    checkEmail(email);
    checkPasswordsMatch(password, password2);

});
