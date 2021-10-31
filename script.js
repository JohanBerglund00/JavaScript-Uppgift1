function validate() {
    const firstName = document.getElementById('firstName')
    const lastName = document.getElementById('lastName')
    const email = document.getElementById('email')
    const password = document.getElementById('password')
    const passwordConfirm = document.getElementById('passwordConfirm')
    const dob = document.getElementById('dob')
    const address = document.getElementById('address')
    const postalCode = document.getElementById('postalCode')

    if (firstName.value.trim().length < 2) {
        document.getElementById('firstNameError').style.visibility="visible";
        firstName.style.border = "solid 2px red";
        return false;
    }
    
    else if (lastName.value.trim().length < 2) {
        document.getElementById('lastNameError').style.visibility="visible";
        lastName.style.border = "solid 2px red";
        return false;
    }

    else if (email.value.trim().length < 8) {
        document.getElementById('emailError').style.visibility="visible";
        email.style.border = "solid 2px red";
        return false;
    }

    else if (password.value.trim().length < 8 || password.value.trim() !== passwordConfirm.value.trim()) {
        document.getElementById('passwordError').style.visibility="visible";
        document.getElementById('passwordConfirmError').style.visibility="visible";
        password.style.border = "solid 2px red";
        passwordConfirm.style.border = "solid 2px red";
        return false;
    }

    else if (dob.value.trim().length < 8 || dob.value.trim().length > 8) { // ANVÄNDAREN MÅSTE VARA 18 ÅR ELLER ÄLDRE!!!
        document.getElementById('dobError').style.visibility="visible";
        dob.style.border = "solid 2px red";
        return false;
    }

    else if (address.value.trim().length < 2) {
        document.getElementById('addressError').style.visibility="visible";
        address.style.border=  "solid 2px red"
        return false;
    }

    else if (postalCode.value.trim().length < 5 || postalCode.value.trim().length > 5) {
        document.getElementById('postalCodeError').style.visibility="visible";
        postalCode.style.border=  "solid 2px red"
        return false;
    }
    
    else {
        true;
    }
}



/*function validate() {
    const email = document.getElementById('email').value;
    const regex = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,20})(.[a-z]{2,8})$/;
    
    if (regex.test(text)) {
        document.getElementById('emailError').style.visibility="visible";
        email.style.border = "solid 2px red";
    }

    else {
        true;
    }
}*/