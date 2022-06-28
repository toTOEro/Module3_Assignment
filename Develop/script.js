// Assignment code here




function generatePassword() {
  // Initializing variables
  var characters = "";
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "0123456789"
  var special = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
  var pw = '';

  function pwConfig() {
    specialAnswer = window.confirm('Do you want special characters?');
    numAnswer = window.confirm('Do you want numbers?');
    lowerAnswer = window.confirm('Do you want lower case letters?');
    upperAnswer = window.confirm('Do you want upper case letters?');
  }

  pwlength = window.prompt('How many characters should this be?\n This must be at least 8 characters, no more than 128 characters.');

  while (pwlength < 8 || pwlength > 128) {
    window.alert('Choose a value between 8 and 128')
    pwlength = window.prompt('How many characters should this be?\n This must be at least 8 characters, no more than 128 characters.');
  };

  pwConfig()
  
  while (specialAnswer == false && numAnswer == false && lowerAnswer == false && upperAnswer == false) {
    window.alert('You must choose yes to one of the prompts!');
    pwConfig();
  }

  if (specialAnswer == true) {
    characters = characters.concat(special)
    console.log(characters)
  };

  if (numAnswer == true) {
    characters = characters.concat(numbers)
    console.log(characters)
  };

  if (lowerAnswer == true) {
    characters = characters.concat(lower)
    console.log(characters)
  };

  if (upperAnswer == true) {
    characters = characters.concat(upper)
    console.log(characters)
  };

  for (let i = 0; i < pwlength; i++) {
    // console.log(characters)
    console.log(pwlength)
    console.log(pw)
    pw = pw + characters.charAt(Math.floor(Math.random() * characters.length));
  };
  return pw;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
