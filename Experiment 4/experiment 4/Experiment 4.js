function reverseString(str) {
    return str.split("").reverse().join("");
}

function message() {
    var msg = "Palindrome Checker";
    function display() {
        return msg;
    }
    return display;
}

function checkPalindrome() {
    try {
        var word = document.getElementById("word").value.trim();
        var resultDiv = document.getElementById("result");

        if (word == "") {
            throw "Please enter a string";
        }
        for (let i = 0; i < word.length; i++) {
            let ch = word[i];
            let code = ch.charCodeAt(0);
            let isAlphaNumeric = (code >= 48 && code <= 57) ||
                (code >= 65 && code <= 90) ||
                (code >= 97 && code <= 122);
            if (!isAlphaNumeric) {
                throw "Only alphabets/digits are allowed!";
            }
        }
        if (word.length < 3) {
            throw "Please enter at least 3 characters";
        }
        if (word.length > 30) {
            throw "Maximum 30 characters allowed";
        }

        let input = word.toLowerCase();
        var reverse = reverseString(input);
        var isPalindrome = (input === reverse);

        resultDiv.style.display = "block";
        resultDiv.className = isPalindrome ? "status-pass" : "status-fail";
        resultDiv.innerHTML = `
            <hr>
            <div class="result-details">
                <p><strong>Word:</strong> ${word}</p>
                <p><strong>Reversed:</strong> ${reverse}</p>
                <p><strong>Result:</strong> ${isPalindrome ? "PALINDROME" : "NOT A PALINDROME"}</p>
            </div>
        `;
    }
    catch (error) {
        alert(error);
    }
}