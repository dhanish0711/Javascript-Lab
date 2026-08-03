function getPasswordValidationError(password) {
    if (password.length == 0) {
        return "Please enter a password.";
    }
    if (password.length < 8) {
        return "Password is too short (minimum 8 characters).";
    }
    if (password.length > 20) {
        return "Password is too long (maximum 20 characters).";
    }
    if (password.indexOf(" ") !== -1) {
        return "Password must not contain spaces.";
    }

    var hasUppercase = false;
    var hasLowercase = false;
    var hasNumber = false;
    var hasSpecial = false;
    var specialChars = "!@#$%^&*(),.?\":{}|<>";

    for (var i = 0; i < password.length; i++) {
        var char = password[i];
        if (char >= 'A' && char <= 'Z') {
            hasUppercase = true;
        } else if (char >= 'a' && char <= 'z') {
            hasLowercase = true;
        } else if (char >= '0' && char <= '9') {
            hasNumber = true;
        } else if (specialChars.indexOf(char) !== -1) {
            hasSpecial = true;
        }
    }

    if (!hasUppercase) {
        return "Password must contain at least one uppercase letter.";
    }
    if (!hasLowercase) {
        return "Password must contain at least one lowercase letter.";
    }
    if (!hasNumber) {
        return "Password must contain at least one number.";
    }
    if (!hasSpecial) {
        return "Password must contain at least one special character.";
    }

    return null;
}

function handleRegister(event) {
    event.preventDefault();
    var user = document.getElementById("registerUser").value.trim();
    var email = document.getElementById("registerEmail").value.trim();
    var password = document.getElementById("registerPassword").value;
    var confirmPassword = document.getElementById("registerConfirmPassword").value;
    var message = document.getElementById("message");

    if (user === "") {
        message.innerText = "Please choose a username.";
        message.className = "error";
        message.style.display = "block";
        return;
    }
    if (email === "") {
        message.innerText = "Please enter your email.";
        message.className = "error";
        message.style.display = "block";
        return;
    }
    if (email.indexOf("@") === -1) {
        message.innerText = "Please enter a valid email address.";
        message.className = "error";
        message.style.display = "block";
        return;
    }

    var passwordError = getPasswordValidationError(password);
    if (passwordError) {
        message.innerText = passwordError;
        message.className = "error";
        message.style.display = "block";
        return;
    }

    if (password !== confirmPassword) {
        message.innerText = "Passwords do not match.";
        message.className = "error";
        message.style.display = "block";
        return;
    }

    message.innerText = "Registration successful!";
    message.className = "success";
    message.style.display = "block";
}

function toggleRegVisibility() {
    var passwordField = document.getElementById("registerPassword");
    var confirmField = document.getElementById("registerConfirmPassword");

    if (passwordField.type === "password") {
        passwordField.type = "text";
        confirmField.type = "text";
    } else {
        passwordField.type = "password";
        confirmField.type = "password";
    }
}
