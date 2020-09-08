// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = "abcdefghijklmnopqrstuvwxyz"
var uppercase = lowercase.toLocaleUpperCase();
var numbers = "1234567890";
var symbols = "!@#$%^&*(),.";
var lengthOfString;

// Write password to the #password input
function writePassword() {
  lengthOfString = askLengthOfPassword();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

//generates the password
function generatePassword() {
  var passwordArray = questionsAsked().split("")
  var passwordText = "";
  var key;
  var amountOfViableChar = passwordArray.length - 1;
  for (var i = 0; i < lengthOfString; i++) {
    key = Math.floor(Math.random() * amountOfViableChar);
    passwordText = passwordText + passwordArray[key];
  }
  return passwordText;
}

//asks for length of password
function askLengthOfPassword() {
  var length = 0;
  while (!(length >= 8 && length <= 128)) {
    length = prompt("How long will the password be?");
    if (!(length >= 8 && length <= 128)) {
      alert("Invalid entry!")
    }
  }
  return parseInt(length);
}

//asks the question about strings
function questionsAsked() {
  var stringParts;

  while (!stringParts) {
    var confirmThings = confirm("Do you want lowercase letters?");
    if (confirmThings) {
      if (!stringParts) {
        stringParts = "";
      }
      stringParts = stringParts + lowercase;
    }


    confirmThings = confirm("Do you want uppercase letters?");
    if (confirmThings) {
      if (!stringParts) {
        stringParts = "";
      }

      stringParts = stringParts + uppercase;
    }


    confirmThings = confirm("Do you want numbers?");
    if (confirmThings) {
      if (!stringParts) {
        stringParts = "";
      }

      stringParts = stringParts + numbers;
    }


    confirmThings = confirm("Do you want special characters?");
    if (confirmThings) {
      if (!stringParts) {
        stringParts = "";
      }

      stringParts = stringParts + symbols;
    }

    if (!stringParts) {
      alert("Invalid entry! Must selct a selection.");
    }
}

  return stringParts;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
