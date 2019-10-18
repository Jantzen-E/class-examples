function submitForm(event) {
    event.preventDefault();
    let isFormValid = true;
    //get values from HTML inputs elements
    
    const firstNameElement = document.querySelector('#firstName');
    const firstName = firstNameElement.value;
    const lastNameElement = document.querySelector('#lastName');
    const lastName = lastNameElement.value;
    const ageElement = document.querySelector('#age');
    const age = ageElement.value;
    const emailElement = document.querySelector('#email');
    const email = emailElement.value;
    const eighteenOrOlderElement = document.querySelector('#eighteenOrOlder');
    const eighteenOrOlder = eighteenOrOlderElement.value;
    const passwordElement = document.querySelector('#password');
    const password = passwordElement.value;
    const passwordElementConfirm = document.querySelector('#passwordConfirm');
    const passwordConfirm = passwordElementConfirm.value;


    //clearing error classes
    firstNameElement.classList.remove('error');
    lastNameElement.classList.remove('error');
    ageElement.classList.remove('error');
    emailElement.classList.remove('error');
    eighteenOrOlderElement.classList.remove('error');
    passwordElement.classList.remove('error');
    passwordElementConfirm.classList.remove('error');

    //validate all values
    if(firstName === '') {
            //firstName is NOT valid
        firstNameElement.classList.add('error');
            //highlight the firstName input box to red;
        isFormValid = false;
    }

    if(lastName === '') {
        lastNameElement.classList.add('error'); 
        isFormValid = false;
    }

    const numberAge = Number(age);
    //converting string to number

    if(age === '' || isNaN(numberAge) || numberAge < 0) {
        ageElement.classList.add('error');
        isFormValid = false;
    }

    
    const isEmailValid = emailIsValid(email);

    if(!isEmailValid) {
        emailElement.classList.add('error');
        isFormValid = false;
    }
    

    const eighteenOrOlderBoolean = Boolean(eighteenOrOlder);

    if(eighteenOrOlderBoolean === 'true' && numberAge < 18) {
        ageElement.classList.add('error');
        isFormValid = false;
    }

    if(password === '' || passwordConfirm === '') {
        passwordElement.classList.add('error');
        passwordElementConfirm.classList.add('error');
        isFormValid = false;
    }

    if(password.length < 8 || passwordConfirm.length < 8) {
        passwordElement.classList.add('error');
        passwordElementConfirm.classList.add('error');
        isFormValid = false;
    }

    if(password !== passwordConfirm) {
        passwordElement.classList.add('error');
        passwordElementConfirm.classList.add('error');
        isFormValid = false;
    }

    if(isFormValid) {
        alert
    }
}


    //conditional = evaluates to true or false

    //if form is valid, submit to server

    //if form is not valid, show an error
function emailIsValid (email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailPattern.test(email);
    
    return isValid;
}