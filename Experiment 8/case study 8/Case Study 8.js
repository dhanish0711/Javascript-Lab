document.getElementById("name").addEventListener("input", function() {
    let val = this.value.trim();
    if (val === "") {
        document.getElementById("nameError").innerHTML = "Name is required.";
    } else if (!/^[A-Za-z ]+$/.test(val)) {
        document.getElementById("nameError").innerHTML = "Only letters allowed.";
    } else {
        document.getElementById("nameError").innerHTML = "";
    }
});

let sexRadios = document.getElementsByName("sex");
for (let i = 0; i < sexRadios.length; i++) {
    sexRadios[i].addEventListener("change", function() {
        document.getElementById("sexError").innerHTML = "";
    });
}

document.getElementById("ability").addEventListener("input", function() {
    let val = this.value.trim();
    if (val.length > 0) {
        document.getElementById("abilityError").innerHTML = "";
    }
});

document.getElementById("gymForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let sex = "";
    for (let i = 0; i < sexRadios.length; i++) {
        if (sexRadios[i].checked) {
            sex = sexRadios[i].value;
            break;
        }
    }
    let eyeColor = document.getElementById("eyeColor").value;
    let over6Feet = document.getElementById("over6Feet").checked;
    let over200Pounds = document.getElementById("over200Pounds").checked;
    let ability = document.getElementById("ability").value.trim();

    let isValid = true;

    if (name === "") {
        document.getElementById("nameError").innerHTML = "Name is required.";
        isValid = false;
    } else if (!/^[A-Za-z ]+$/.test(name)) {
        document.getElementById("nameError").innerHTML = "Only letters allowed.";
        isValid = false;
    } else {
        document.getElementById("nameError").innerHTML = "";
    }

    if (sex === "") {
        document.getElementById("sexError").innerHTML = "Please select your sex.";
        isValid = false;
    } else {
        document.getElementById("sexError").innerHTML = "";
    }

    if (ability === "") {
        document.getElementById("abilityError").innerHTML = "Please describe your athletic ability.";
        isValid = false;
    } else {
        document.getElementById("abilityError").innerHTML = "";
    }

    let resultCard = document.getElementById("resultCard");

    if (isValid) {
        let appliedTraits = [];
        if (over6Feet) appliedTraits.push("Over 6 feet tall");
        if (over200Pounds) appliedTraits.push("Over 200 pounds");
        let traitsDisplay = appliedTraits.length > 0 ? appliedTraits.join(", ") : "None";

        resultCard.style.display = "block";
        resultCard.innerHTML = "<h3>Admission Submitted Successfully!</h3>" +
            "<p><b>Name:</b> " + name + "</p>" +
            "<p><b>Sex:</b> " + sex + "</p>" +
            "<p><b>Eye Color:</b> " + eyeColor + "</p>" +
            "<p><b>Physical Attributes:</b> " + traitsDisplay + "</p>" +
            "<p><b>Athletic Ability:</b> " + ability + "</p>";

        alert("Information submitted successfully!");
    } else {
        resultCard.style.display = "none";
        resultCard.innerHTML = "";
        alert("Please correct the errors before submitting.");
    }
});
