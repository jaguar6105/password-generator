// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = "abcdefghijklmnopqrstuvwxyz"
var uppercase = lowercase.toLocaleUpperCase();
var numbers = "1234567890";
var symbols = "!@#$%^&*()_-+=?/><`~,.";


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//generates the password
function generatePassword() {
  return   questionsAsked();
}

//asks the question about strings
function questionsAsked() {
  var sizeOfString = "";

  var confirmThings = confirm("Do you want lowercase letters?");
  if(confirmThings)
  {
    sizeOfString = lowercase;
  }


  confirmThings = confirm("Do you want uppercase letters?");
  if(confirmThings)
  {
    sizeOfString = sizeOfString + uppercase;
  }


  confirmThings = confirm("Do you want numbers?");
  if(confirmThings)
  {
    sizeOfString = sizeOfString + numbers;
  }


  confirmThings = confirm("Do you want special characters?");
  if(confirmThings)
  {
    sizeOfString = sizeOfString + symbols;
  }

  return sizeOfString;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
