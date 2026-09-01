function reverseString() {
    let str = document.getElementById("strInput").value;
    
    if (str.trim() === "") {
        document.getElementById("result").innerHTML = "<b style='color:red;'>Please enter a string!</b>";
        return;
    }

    let reversedStr = str.split("").reverse().join("");

    document.getElementById("result").innerHTML = `
        <p><b>Original String:</b> ${str}</p>
        <p><b>Reversed String:</b> ${reversedStr}</p>
    `;
}

function countVowels() {
    let paragraph = document.getElementById("paragraphInput").value;

    if (paragraph.trim() === "") {
        document.getElementById("vowelResult").innerHTML = "<b style='color:red;'>Please enter a paragraph!</b>";
        return;
    }

    let vowels = paragraph.match(/[aeiou]/gi);
    let vowelCount = vowels ? vowels.length : 0;
    let vowelsList = vowels ? vowels.join(", ") : "No vowels found";

    document.getElementById("vowelResult").innerHTML = `
        <p><b>Vowels Found:</b> ${vowelsList}</p>
        <p><b>Total Number of Vowels:</b> <b>${vowelCount}</b></p>
    `;
}
