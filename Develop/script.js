// Assignment code here




function generatePassword() {
  console.log('Password Generating...');
  // Initializing Character Pool, password variable, and defining length  
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  var pw = '';
  var length = characters.length;
  pwlength = window.prompt('How many characters should this be?');

  if (pwlength

    for (let i = 0; i < pwlength; i++) {
      pw = pw + characters.charAt(Math.floor(Math.random() * length));
      
    }
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
