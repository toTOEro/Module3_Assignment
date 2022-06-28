// Assignment code here




function generatePassword() {
  console.log('Password Generating...');
  // Initializing Character Pool, password variable, and defining length  
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  var numbers = '0123456789'
  var symbols = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
  var pw = '';
  var length = characters.length;
  pwlength = window.prompt('How many characters should this be?\n This must be at least 8 characters, no more than 128 characters.');

    while (pwlength < 8 || pwlength > 128) {
      window.alert('Choose a value between 8 and 128')
      pwlength = window.prompt('How many characters should this be?\n This must be at least 8 characters, no more than 128 characters.');
    };

    symAnswer = window.confirm('Do you want symbols?');
    numAnswer = window.confirm('Do you want numbers?');

    if (symAnswer == true) {
      characters = characters.concat(symbols)
    };

    if (numAnswer == true) {
      characters = characters.concat(numbers)
    };


    for (let i = 0; i < pwlength; i++) {
      pw = pw + characters.charAt(Math.floor(Math.random() * length));
      
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
