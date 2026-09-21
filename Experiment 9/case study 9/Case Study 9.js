let cells = document.querySelectorAll("#scheduleTable tbody td");
let editInput = document.getElementById("editInput");
let saveBtn = document.getElementById("saveBtn");
let resetBtn = document.getElementById("resetBtn");
let selectedInfo = document.getElementById("selectedInfo");

let currentCellIndex = null;

// Assign an index to each cell and load saved modifications
cells.forEach(function(cell, index) {
    cell.setAttribute("data-cell-index", index);

    cell.addEventListener("click", function() {
        currentCellIndex = index;
        let day = this.getAttribute("data-day") || "N/A";
        let time = this.getAttribute("data-time") || "N/A";
        let text = this.innerText.trim();

        // Update edit input
        if (editInput) {
            editInput.value = text;
            editInput.focus();
        }

        if (selectedInfo) {
            selectedInfo.innerText = "Selected (" + day + ", " + time + "): " + text;
        }

        // Save current active selection to sessionStorage
        sessionStorage.setItem("lastSelectedCell", JSON.stringify({
            index: index,
            day: day,
            time: time,
            content: text
        }));

        // Show alert box on click event
        alert("Schedule Details:\nDay: " + day + "\nTime: " + time + "\nTopic/Session: " + text);
    });
});

// Save edited content to localStorage and sessionStorage
if (saveBtn) {
    saveBtn.addEventListener("click", function() {
        if (currentCellIndex === null) {
            alert("Please click on a table cell first to select what to edit.");
            return;
        }

        let newText = editInput.value.trim();
        if (newText === "") {
            alert("Please enter some text to save.");
            return;
        }

        let targetCell = cells[currentCellIndex];
        targetCell.innerText = newText;

        // Retrieve existing saved edits from localStorage
        let edits = JSON.parse(localStorage.getItem("scheduleEdits") || "{}");
        edits[currentCellIndex] = newText;

        // Save to localStorage (persists across page reloads)
        localStorage.setItem("scheduleEdits", JSON.stringify(edits));

        // Save last edit activity to sessionStorage
        sessionStorage.setItem("lastEditedTime", new Date().toLocaleTimeString());

        if (selectedInfo) {
            selectedInfo.innerText = "Saved successfully: " + newText;
        }
        alert("Schedule updated and saved to storage!");
    });
}

// Reset edits and clear localStorage
if (resetBtn) {
    resetBtn.addEventListener("click", function() {
        localStorage.removeItem("scheduleEdits");
        sessionStorage.removeItem("lastSelectedCell");
        sessionStorage.removeItem("lastEditedTime");
        location.reload();
    });
}

// Load saved edits from localStorage on page load
window.addEventListener("DOMContentLoaded", function() {
    let edits = JSON.parse(localStorage.getItem("scheduleEdits") || "{}");
    for (let index in edits) {
        if (cells[index]) {
            cells[index].innerText = edits[index];
        }
    }

    // Check if there was a previous session selection
    let sessionData = sessionStorage.getItem("lastSelectedCell");
    if (sessionData && selectedInfo) {
        let parsed = JSON.parse(sessionData);
        selectedInfo.innerText = "Resumed session cell (" + parsed.day + "): " + parsed.content;
    }
});


