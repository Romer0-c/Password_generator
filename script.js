// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//setting variable for possible character:
var capitalChoice = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowerChoice = 'abcdefghijklmnopqrstuvwxyz';
var numChoice = '0123456789';
var specialChoice = '~!@#$%^&*()_+=;'

//save user choice
var chosenChar = {};

//prompting the user to spefific character length
//var getLength = parseInt(prompt("Please choose the length of your password. Must be between 8 and 128."));
var passLength = prompt("Please choose the length of your password. Must be between 8 and 128.");
    if (passLength >= 8 && passLength <= 128) {
        var getLength = parseInt(passLength);
    }

// Prompt user to select items

function promptUserInput() {
 var numberChar = confirm("Do you wish to include numbers?"); 
 var lowerChar = confirm("Do you wish to include lower case letters?");
 var upperChar = confirm("Do you wish to include upper case letters?");
 var specialChar = confirm("Do you wish to include special characters?");

//saving prompted details to chosenChar Object: 

if (numberChar) {
  chosenChar["numChoice"] = numChoice;
}
if (lowerChar) {
  chosenChar["lowerChoice"] = lowerChoice;
}
if (upperChar) {
  chosenChar["capitalChoice"] = capitalChoice;
}
if (specialChar) {
  chosenChar["specialChoice"] = specialChoice;
}
}

//console.log(chosenChar);


promptUserInput();



// this writes the password : 

function writePassword() {
    let generatePassword = '';
    for (var i = 0; i < getLength; i++) {
        let passwordEls = Object.keys(chosenChar)
        let randomEl = passwordEls[Math.floor(Math.random() * passwordEls.length)]
        let char = getRandomCharacter(chosenChar[randomEl]);

        generatePassword += char; 
    }
    //writes value of generated password to applicable DOM element "password".
    document.getElementById("password").innerHTML = generatePassword;
    return generatePassword
} 

//chooses random characters
function getRandomCharacter(str) {
    return str [Math.floor(Math.random() * str.length)]
}

writePassword(); 

// if the value is smaller or greater than the avilable options the script stops.
if (getLength < 8 && getLength > 128) {
    alert("Please select a valid entry.");
    //return; 
}

// copy to clipboard functionallity 
function copyClipboard() {
    var copyText = document.getElementById("password");
    var text = copyText.textContent;
    if (text.length > 0) {
        copyText.select();
        copyText.setSelectionRange(0, 99999)
        document.execCommand("copy");
        alert("Your password has been copied to clipboard.");
    }
}