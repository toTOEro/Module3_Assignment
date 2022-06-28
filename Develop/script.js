// Assignment code here

function generatePassword() {
  // Initializing variables
  var characters = "";
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "0123456789"
  var special = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
  var pw = '';
  var pwlength = '';
  var specialAnswer = false;
  var numAnswer = false;
  var lowerAnswer = false;
  var upperAnswer = false;

  // Function to prompt user to configure password
  function pwConfig() {
    specialAnswer = window.confirm('Do you want special characters?');
    numAnswer = window.confirm('Do you want numbers?');
    lowerAnswer = window.confirm('Do you want lower case letters?');
    upperAnswer = window.confirm('Do you want upper case letters?');

    // Pending user answers, the following if statements add to the character pool for password generation
    if (specialAnswer == true) {
      characters = characters.concat(special)
    };

    if (numAnswer == true) {
      characters = characters.concat(numbers)
    };

    if (lowerAnswer == true) {
      characters = characters.concat(lower)
    };

    if (upperAnswer == true) {
      characters = characters.concat(upper)
    };
  }

  // Function to query for length
  function lengthQuery() {
    pwlength = window.prompt('How many characters should this be?\nThis must be at least 8 characters, no more than 128 characters.');
  };


  // While loop to query for password length
  while (pwlength < 8 || pwlength > 128) {
    lengthQuery();
    if (pwlength < 8 || pwlength > 128) {
      window.alert('Choose a value between 8 and 128')
    }
  };


  // While loop to query for password configuration
  
  while (specialAnswer == false && numAnswer == false && lowerAnswer == false && upperAnswer == false) {
    pwConfig();

    if (specialAnswer == false && numAnswer == false && lowerAnswer == false && upperAnswer == false) {
      window.alert('You must choose ok to one of the prompts!');
    }  
  };


  // Generates the password based off the character pool formed in lengthQuery()
  for (let i = 0; i < pwlength; i++) {
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
