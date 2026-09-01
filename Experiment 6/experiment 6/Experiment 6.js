function processString() {
    let paragraph = document.getElementById("paragraph").value;
    let email = document.getElementById("email").value; 

    let words = paragraph.split(/\s+/);

    let vowels = paragraph.match(/[aeiou]/gi); 
    let vowelCount = vowels ? vowels.length : 0; 

    let replacedParagraph = paragraph.replace(
        /JavaScript/gi, 
        "JavaScript Programming"
    ); 

    let searchWord = "powerful"; 
    let position = paragraph.indexOf(searchWord); 

    let emailRegex = 
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; 

    let emailResult; 

    if(emailRegex.test(email)) {
        emailResult = "Valid Email Address"; 
    } else {
        emailResult = "Invalid Email Address";
    }
    let emailText = 
    "For queries contact student@example.com or admin@college.edu"; 

    let extractedEmails = emailText.match(
        /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g 
    ); 

    let reeversedParagraph = paragraph.split("").reverse().join(""); 

    document.getElementById("output").innerHTML = `
    <h3>1. Original Paragraph</h3>
    <p>${paragraph}</p> 

    <h3> 2. split() - Words </h3>
    <p> ${words.join(",")}</p>

    <h3> 3. match() - Vowels </h3>
    <p> ${vowels ? vowels.join(", ") : "NO VOWELS FOUND!"}</p>

    <h3> 4. Vowel Count </h3>
    <p> Total number of vowels: <b>${vowelCount}</b></p>

    <h3> 5. replace() - Replace Text </h3>
    <p> ${replacedParagraph} </p>

    <h3> 6. indexOf() - Search Word </h3>
    <p>
        Position of "<b>${searchWord}</b>":
        <b>${position}</b>
    </p>

    <h3> 7. Email Validation using Regex </h3>
    <p>
        Email: <b>${email}</b><br>
        Result: <b>${emailResult}</b>
    </p>

    <h3> 8. Regex - Extracted Information </h3>
    <p>
        ${extractedEmails ? extractedEmails.join("<br>") : "NO EMAIL ADDRESS FOUND!"}
    </p>

    <h3> 9. Reversed Paragraph </h3>
    <p> ${reeversedParagraph} </p>
    `;
}
