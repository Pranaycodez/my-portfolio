// Function to validate name
window.validateName = function() {
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
window.validateEmail = function() {
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
window.validateMessage = function() {
    const message = document.getElementById('message').value;
    const messageError = document.getElementById('message-error');

    if (message.trim() === "") {
        messageError.textContent = "Message is required.";
        return false;
    } else {
        messageError.textContent = "";
        return true;
    }
}