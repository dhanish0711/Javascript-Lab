document.getElementById("name").addEventListener("input", function() {
    let name = this.value;
    if (/^[A-Za-z ]+$/.test(name)) {
        document.getElementById("nameError").innerHTML = "";
    } else {
        document.getElementById("nameError").innerHTML = "Only letters allowed.";
    }
});

document.getElementById("age").addEventListener("blur", function() {
    let age = this.value;
    if (age >= 16 && age <= 60) {
        document.getElementById("ageError").innerHTML = "";
    } else {
        document.getElementById("ageError").innerHTML = "Age must be between 16 and 60.";
    }
});

document.getElementById("email").addEventListener("input", function() {
    let email = this.value;
    let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (pattern.test(email)) {
        document.getElementById("emailError").innerHTML = "";
    } else {
        document.getElementById("emailError").innerHTML = "Invalid email.";
    }
});

document.getElementById("mobile").addEventListener("input", function() {
    let mobile = this.value;

    if (/^\d{10}$/.test(mobile)) {
        document.getElementById("mobileError").innerHTML = "";
    } else {
        document.getElementById("mobileError").innerHTML = "Enter 10-digit mobile number.";
    }
});

document.getElementById("plan").addEventListener("change", function() {
    if (this.value == "") {
        document.getElementById("planError").innerHTML = "Please select a plan.";
    } else {
        document.getElementById("planError").innerHTML = "";
    }
});

document.getElementById("gymForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let email = document.getElementById("email").value;
    let mobile = document.getElementById("mobile").value;
    let plan = document.getElementById("plan").value;

    let isValid = true;

    if (!/^[A-Za-z ]+$/.test(name)) {
        document.getElementById("nameError").innerHTML = "Only letters allowed.";
        isValid = false;
    } else {
        document.getElementById("nameError").innerHTML = "";
    }

    if (!(age >= 16 && age <= 60)) {
        document.getElementById("ageError").innerHTML = "Age must be between 16 and 60.";
        isValid = false;
    } else {
        document.getElementById("ageError").innerHTML = "";
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").innerHTML = "Invalid email.";
        isValid = false;
    } else {
        document.getElementById("emailError").innerHTML = "";
    }

    if (!/^\d{10}$/.test(mobile)) {
        document.getElementById("mobileError").innerHTML = "Enter 10-digit mobile number.";
        isValid = false;
    } else {
        document.getElementById("mobileError").innerHTML = "";
    }

    if (plan == "") {
        document.getElementById("planError").innerHTML = "Please select a plan.";
        isValid = false;
    } else {
        document.getElementById("planError").innerHTML = "";
    }

    if (isValid) {
        let result = document.getElementById("result");
        result.style.display = "block";
        result.innerHTML = "Gym Admission Successful!";
    } else {
        let result = document.getElementById("result");
        result.style.display = "none";
        result.innerHTML = "";
        alert("Please correct the errors before submitting.");
    }
});
