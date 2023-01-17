
// Object of Arrays of characters to be included in the password
var allCharactersObject = { 
  
  // Array of special characters to be included in password
    specialCharacters: [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.'
  ],

  // Array of numeric characters to be included in password
 numericCharacters: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],

  // Array of lowercase characters to be included in password
  lowerCasedCharacters: [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ],

  // Array of uppercase characters to be included in password
  upperCasedCharacters: [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
  ],

};

let userData = [];
/*
class optionResults {
  constructor (userLength, upperCharTrue, lowCharTrue, numbersTrue, specialCharTrue) {
    this.
  }
} 
*/




// Function to prompt user for password options
function getPasswordOptions() {

  var userInput = prompt("How long would you like your password to be?  Please input a number between 10 and 64!");

  var userLength = parseInt(userInput);

  

  if (userLength >= 10 && userLength <= 64) {   
    alert ( "Thankyou! Your password will be " + userLength + " characters long.") 
  } else if (userLength < 10 || userLength > 64) {
    alert ( "You entered an incorrect number! Please enter a number between 10-64!" );
  }

  let addUserData = {
    userLength: ,
    upperCharTrue: ,
    lowCharTrue: ,
    numbersTrue:,
    specialCharTrue: ;
  }

}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

