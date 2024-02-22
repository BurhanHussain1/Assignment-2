const signinForm = document.getElementById('signin-form');

function validateSignIn(event) {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const errors = [];

    if (!username.trim()) {
        errors.push('Username is required.');
    }

    if (!password.trim()) {
        errors.push('Password is required.');
    } else if (password.length < 8) {
        errors.push('Password must be at least 8 characters long.');
    } else if (!containsSpecialAndNumericCharacters(password)) {
        errors.push('Password must contain at least one special character and one numeric character.');
    }

    if (username.length < 3) {
        errors.push('Username must be at least 3 characters long.');
    }

    if (errors.length > 0) {
        event.preventDefault();
        displayErrors(signinForm, errors);
    }

    else {
        alert('Form submitted successfully!');
    }
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

function containsSpecialAndNumericCharacters(password) {
    const specialCharacterRegex = /[!@#$%^&*(),.?":{}|<>]/;
    const numericCharacterRegex = /\d/;
    return specialCharacterRegex.test(password) && numericCharacterRegex.test(password);
}

signinForm.addEventListener('submit', validateSignIn);
