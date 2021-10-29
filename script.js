function validate() {
    const firstName = document.getElementById('firstName')
    const lastName = document.getElementById('lastName')

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