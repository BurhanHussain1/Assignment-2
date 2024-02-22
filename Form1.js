const signupForm = document.getElementById('signup-form');

function validateSignUp(event) {
    const name = document.getElementById('name').value;
    const lname = document.getElementById('lname').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const age = document.getElementById('age').value;
    const phone = document.getElementById('phone').value;
    const country = document.getElementById('country').value;

    const errors = [];

    if (!name.trim()) {
        errors.push('First name is required.');
    }

    if (!lname.trim()) {
        errors.push('Last name is required.');
    }

    if (!password.trim()) {
        errors.push('Password is required.');
    } else if (!containsSpecialAndNumericCharacters(password)) {
        errors.push('Password must be at least 8 characters long and contain at least 1 special character and 1 numeric character.');
    }

    if (confirmPassword !== password) {
        errors.push('Passwords do not match.');
    }

    if (!age.trim() || isNaN(age) || age < 18) {
        errors.push('Please enter a valid age (18+).');
    }

    if (phone.trim() && !isValidPhoneNumber(phone)) {
        errors.push('Invalid phone number format (xxx-xxx-xxxx).');
    }

    if (!country) {
        errors.push('Please select a country.');
    }

    if (errors.length > 0) {
        event.preventDefault(); 
        displayErrors(signupForm, errors);
    }

    else {
        alert('Form submitted successfully!');
    }
}

function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function containsSpecialAndNumericCharacters(password) {
    const specialCharacterRegex = /[!@#$%^&*(),.?":{}|<>]/;
    const numericCharacterRegex = /\d/;
    return specialCharacterRegex.test(password) && numericCharacterRegex.test(password);
}

function isValidPhoneNumber(phone) {
    const regex = /^\d{3}-\d{3}-\d{4}$/;
    return regex.test(phone);
}

function displayErrors(form, errors) {
    const errorElement = form.querySelector('.error');
    if (errorElement) {
        errorElement.remove();
    }

    const errorMessage = document.createElement('div');
    errorMessage.classList.add('error');
    errorMessage.textContent = errors.join('\n');
    form.appendChild(errorMessage);
    setTimeout(() => {
        errorMessage.remove();
    }, 5000); 
}

signupForm.addEventListener('submit', validateSignUp);

