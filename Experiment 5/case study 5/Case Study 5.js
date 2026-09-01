let numbers = [];

function addNumber() {
    let val = parseFloat(document.getElementById("numberInput").value);

    if (isNaN(val)) {
        alert("Please enter a valid number");
        return;
    }

    let item = {
        id: numbers.length + 1,
        value: val
    };

    numbers.push(item);
    displayData();

    document.getElementById("numberInput").value = "";
}

function addRandomNumber() {
    let randomVal = Math.floor(Math.random() * 100) + 1;
    let item = {
        id: numbers.length + 1,
        value: randomVal
    };

    numbers.push(item);
    displayData();
}

function resetArray() {
    numbers = [];
    displayData();
}

function displayData() {
    let display = document.getElementById("arrayDisplay");
    display.innerHTML = "";

    numbers.forEach(function(item) {
        let chip = document.createElement("span");
        chip.className = "number-chip";
        chip.textContent = item.value;
        display.appendChild(chip);
    });

    document.getElementById("totalCount").textContent = numbers.length;

    if (numbers.length === 0) {
        display.innerHTML = '<span class="empty-msg">Array is currently empty</span>';
        document.getElementById("maxValue").textContent = "-";
        document.getElementById("minValue").textContent = "-";
        return;
    }

    let values = numbers.map(function(item) {
        return item.value;
    });

    let maxVal = values.reduce(function(max, val) {
        return val > max ? val : max;
    }, values[0]);

    let minVal = values.reduce(function(min, val) {
        return val < min ? val : min;
    }, values[0]);

    document.getElementById("maxValue").textContent = maxVal;
    document.getElementById("minValue").textContent = minVal;
}

document.getElementById("numberInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addNumber();
    }
});

displayData();



