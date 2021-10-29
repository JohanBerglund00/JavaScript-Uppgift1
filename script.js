function validate() {
    const firstName = document.getElementById('firstName')
    const lastName = document.getElementById('lastName')

    if (firstName.value.trim().length < 2) {
        alert ('First and last name needs to contain at least 2 characters excluding spaces.')
        firstName.style.border = "solid 2px red";
        return false;
    }
    else if (lastName.value.trim().length < 2) {
        alert ('First and last name needs to contain at least 2 characters excluding spaces.')
        lastName.style.border = "solid 2px red";
        return false;
    }
    else {
        true;
    }
}