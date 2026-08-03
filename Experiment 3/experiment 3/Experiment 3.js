function gradeSystem() {
    var name = document.getElementById("name").value.trim();
    var marks = document.getElementById("marks").value;

    if (name == "") {
        alert("Please enter student name: ");
        return;
    }

    if (marks == "") {
        alert("Please enter marks: ");
        return;
    }
    marks = Number(marks);

    if (marks < 0 || marks > 100) {
        alert("Marks should be between 0 and 100.");
        return;
    }

    var grade;
    var result;

    if (marks >= 90) {
        grade = "A+";
        result = "Pass";
    }
    else if (marks >= 80) {
        grade = "A";
        result = "Pass";
    }
    else if (marks >= 70) {
        grade = "B";
        result = "Pass";
    }
    else if (marks >= 60) {
        grade = "C";
        result = "Pass";
    }
    else if (marks >= 50) {
        grade = "D";
        result = "Pass";
    }
    else if (marks >= 40) {
        grade = "E";
        result = "Pass";
    } else {
        grade = "F";
        result = "Fail";
    }

    var reportDiv = document.getElementById("report");
    if (reportDiv) {
        reportDiv.innerHTML = `
            <h2>Student Grade Report</h2>
            <hr>
            <div class="report-details">
                <p><b>Student Name:</b> <span>${name}</span></p>
                <p><b>Marks:</b> <span>${marks} / 100</span></p>
                <p><b>Grade:</b> <span class="badge grade-${grade.replace('+', 'plus')}">${grade}</span></p>
                <p><b>Result:</b> <span class="badge status-${result.toLowerCase()}">${result}</span></p>
            </div>
        `;
        reportDiv.classList.add("visible");
    } else {
        document.open();
        document.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Student Grade Report</title>
                <link rel="stylesheet" href="3.css">
            </head>
            <body class="report-view">
                <div class="container">
                    <div class="card result-card">
                        <h2>Student Grade Report</h2>
                        <hr>
                        <div class="report-details">
                            <p><b>Student Name:</b> <span>${name}</span></p>
                            <p><b>Marks:</b> <span>${marks} / 100</span></p>
                            <p><b>Grade:</b> <span class="badge grade-${grade.replace('+', 'plus')}">${grade}</span></p>
                            <p><b>Result:</b> <span class="badge status-${result.toLowerCase()}">${result}</span></p>
                        </div>
                        <button class="btn btn-secondary" onclick="location.reload()">Back to Form</button>
                    </div>
                </div>
            </body>
            </html>
        `);
        document.close();
    }
}
