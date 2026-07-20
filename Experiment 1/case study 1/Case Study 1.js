var submitBtn = document.getElementById("submitBtn");

submitBtn && (submitBtn.onclick = () => {
    var name = document.getElementById("studentName").value.trim();
    var prn = document.getElementById("prn").value.trim();
    var email = document.getElementById("email").value.trim();
    var spec = document.getElementById("specialization").value;

    var isFormValid = (name !== "") && (prn !== "") && (email !== "");

    (name === "") && alert("Please enter Name!");
    (name !== "" && prn === "") && alert("Please enter PRN!");
    (name !== "" && prn !== "" && email === "") && alert("Please enter Email!");

    isFormValid && alert("Welcome to SIT Nagpur");

    var outputHtml = "<h3>Submitted Information:</h3>" +
                     "<p><strong>Name:</strong> " + name + "</p>" +
                     "<p><strong>PRN:</strong> " + prn + "</p>" +
                     "<p><strong>Email:</strong> " + email + "</p>" +
                     "<p><strong>Specialization:</strong> " + spec + "</p>";

    isFormValid && (document.getElementById("output").innerHTML = outputHtml);
    isFormValid && (document.getElementById("output").style.display = "block");
});
