let dobDay = document.getElementById("dobDay");
for (let i = 1; i <= 31; i++) {
    let opt = document.createElement("option");
    opt.value = i;
    opt.text = i;
    dobDay.appendChild(opt);
}

let dobYear = document.getElementById("dobYear");
let currentYear = new Date().getFullYear();
for (let y = currentYear; y >= 1950; y--) {
    let opt = document.createElement("option");
    opt.value = y;
    opt.text = y;
    dobYear.appendChild(opt);
}

function clearErrors() {
    let errors = document.getElementsByClassName("error-msg");
    for (let i = 0; i < errors.length; i++) {
        errors[i].innerHTML = "";
    }
}

let allInputs = document.querySelectorAll("input[type='text'], input[type='email'], input[type='url'], input[type='password']");

for (let i = 0; i < allInputs.length; i++) {
    allInputs[i].addEventListener("focus", function() {
        this.style.borderColor = "royalblue";
    });

    allInputs[i].addEventListener("blur", function() {
        this.style.borderColor = "lightgray";
    });
}

document.getElementById("terms").addEventListener("change", function() {
    if (this.checked) {
        document.getElementById("termsError").innerHTML = "";
    }
});

function validateForm(event) {
    if (event) {
        event.preventDefault();
    }
    
    clearErrors();
    let isValid = true;

    let firstname = document.getElementById("firstname").value.trim();
    if (firstname === "") {
        document.getElementById("firstnameError").innerHTML = "Firstname is required.";
        isValid = false;
    } else if (!/^[a-zA-Z]+$/.test(firstname)) {
        document.getElementById("firstnameError").innerHTML = "Only alphabets are allowed.";
        isValid = false;
    }

    let lastname = document.getElementById("lastname").value.trim();
    if (lastname !== "" && !/^[a-zA-Z]+$/.test(lastname)) {
        document.getElementById("lastnameError").innerHTML = "Only alphabets are allowed.";
        isValid = false;
    }

    let username = document.getElementById("username").value.trim();
    if (username === "") {
        document.getElementById("usernameError").innerHTML = "Username is required.";
        isValid = false;
    } else if (username.length < 4) {
        document.getElementById("usernameError").innerHTML = "Username must be at least 4 characters.";
        isValid = false;
    }

    let email = document.getElementById("email").value.trim();
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email !== "" && !emailPattern.test(email)) {
        document.getElementById("emailError").innerHTML = "Please enter a valid email address.";
        isValid = false;
    }

    let website = document.getElementById("website").value.trim();
    let urlPattern = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/;
    if (website !== "" && !urlPattern.test(website)) {
        document.getElementById("websiteError").innerHTML = "Please enter a valid website URL.";
        isValid = false;
    }

    let password = document.getElementById("password").value;
    if (password === "") {
        document.getElementById("passwordError").innerHTML = "Password is required.";
        isValid = false;
    } else if (password.length < 6) {
        document.getElementById("passwordError").innerHTML = "Password must be at least 6 characters.";
        isValid = false;
    }

    let rePassword = document.getElementById("rePassword").value;
    if (rePassword === "") {
        document.getElementById("rePasswordError").innerHTML = "Please confirm your password.";
        isValid = false;
    } else if (password !== rePassword) {
        document.getElementById("rePasswordError").innerHTML = "Passwords do not match.";
        isValid = false;
    }

    let terms = document.getElementById("terms").checked;
    if (!terms) {
        document.getElementById("termsError").innerHTML = "You must agree to the terms & conditions.";
        isValid = false;
    }

    if (isValid) {
        let successMsg = document.getElementById("successMsg");
        successMsg.style.display = "block";
        successMsg.innerHTML = "Registration Successful for <b>" + username + "</b>!";
        alert("Form submitted successfully!");
    }

    return false;
}

document.getElementById("registrationForm").addEventListener("submit", validateForm);
