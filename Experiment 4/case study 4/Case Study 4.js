function isUpperAlpha(str) {
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (char < 'A' || char > 'Z') {
            return false;
        }
    }
    return true;
}

function isDigits(str) {
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (char < '0' || char > '9') {
            return false;
        }
    }
    return true;
}

function validateRegistrationNumber(regNo) {
    if (!regNo || regNo.trim() === "") {
        throw new Error("Registration number should not be empty.");
    }

    regNo = regNo.trim();

    if (regNo.length !== 10) {
        throw new Error("Length should be exactly 10 characters.");
    }

    const stateCode = regNo.substring(0, 2);
    const districtCode = regNo.substring(2, 4);
    const series = regNo.substring(4, 6);
    const vehicleNo = regNo.substring(6, 10);

    if (!isUpperAlpha(stateCode)) {
        throw new Error("First two characters must be uppercase alphabets (State Code).");
    }

    if (!isDigits(districtCode)) {
        throw new Error("Next two characters must be digits (District Code).");
    }

    if (!isUpperAlpha(series)) {
        throw new Error("Next two characters must be uppercase alphabets (Series).");
    }

    if (!isDigits(vehicleNo)) {
        throw new Error("Last four characters must be digits (Vehicle Number).");
    }

    return true;
}

function validateVehicleRegistration() {
    const inputElement = document.getElementById("regNo");
    const resultElement = document.getElementById("result");
    const regNo = inputElement.value;

    try {
        validateRegistrationNumber(regNo);
        resultElement.className = "valid";
        resultElement.innerHTML = `<strong>Valid</strong>: ${regNo.toUpperCase()} is a valid vehicle registration number.`;
    } catch (error) {
        resultElement.className = "invalid";
        resultElement.innerHTML = `<strong>Invalid</strong>: ${error.message}`;
    }
}
