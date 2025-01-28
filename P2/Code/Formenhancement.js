// index.js

// Function to validate name
function validateName() {
    const name = document.getElementById('name').value;
    const nameError = document.getElementById('name-error');

    if (name.trim() === "") {
        nameError.textContent = "Name is required.";
        return false;
    } else {
        nameError.textContent = "";
        return true;
    }
}

// Function to validate email
function validateEmail() {
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('email-error');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.trim() === "") {
        emailError.textContent = "Email is required.";
        return false;
    } else if (!emailPattern.test(email)) {
        emailError.textContent = "Please enter a valid email.";
        return false;
    } else {
        emailError.textContent = "";
        return true;
    }
}

// Function to validate message
function validateMessage() {
    const message = document.getElementById('message').value;
    const messageError = document.getElementById('message-error');

    if (message.trim() === "") {
        messageError.textContent = "Message is required.";
        return false;
    } else if (message.length < 10) {
        messageError.textContent = "Message must be at least 10 characters.";
        return false;
    } else {
        messageError.textContent = "";
        return true;
    }
}

// Function to validate the entire form
function validateForm(event) {
    event.preventDefault();

    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isMessageValid = validateMessage();
    const successMessage = document.getElementById('success-message');

    if (isNameValid && isEmailValid && isMessageValid) {
        successMessage.textContent = "Form submitted successfully!";
        successMessage.style.color = "green";
        setTimeout(() => {
            successMessage.textContent = "";
        }, 3000);
        return true;
    } else {
        successMessage.textContent = "Please fill out all fields correctly.";
        successMessage.style.color = "red";
        setTimeout(() => {
            successMessage.textContent = "";
        }, 3000);
        return false;
    }
}

// Add event listener to the form
document.getElementById('contact-form').addEventListener('submit', validateForm);
