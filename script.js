// Array of special characters to be included in password
    specialCharacters = [
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
  ];

  // Array of numeric characters to be included in password
  numericCharacters =  ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  // Array of lowercase characters to be included in password
  lowerCasedCharacters =  [
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
  ];

  // Array of uppercase characters to be included in password
  upperCasedCharacters =  [
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
  ];





var specialCharTrue; //this is a variable for the special characters
var upperCharTrue; //this is a variable for the uppercase characters
var lowCharTrue; //this is a variable for the lowercase characters
var numbersTrue; //this is a variable for the numeric characters
var userLength;

let userData = []; //this is an empty array to store password options and answers from the character prompts

// Function to prompt user for password options
function getPasswordOptions() { 

  var userInput = prompt("How long would you like your password to be?  Please input a number between 10 and 64!");// This is the first prompt
  userLength = parseInt(userInput); //this is declaring userLength as the userINput and using parseInt to return an Integer from a string (textbox user entry)

 
  if (userLength >= 10 && userLength <= 64) {   
    alert ( "Thankyou! Your password will be " + userLength + " characters long.");
  } else if (userLength < 10 || userLength > 64) {
    alert ( "You entered an incorrect number! Please enter a number between 10-64!" );
  };
    
  var specialCharTrue = confirm ("Would you like your password to include Special characters?");
    if (specialCharTrue === true ) { 
      userData.push(specialCharacters);
  }; 
  
  var upperCharTrue = confirm ( "Would you like your password to include uppercase characters?") 
    if (upperCharTrue ===true )  {
      userData.push(upperCasedCharacters);  
  };
  
  var lowCharTrue = confirm ( "Would you like your password to include lowercase characters?") 
  if (lowCharTrue ===true )  { 
    userData.push(lowerCasedCharacters);
  };

  var numbersTrue = confirm ( "Would you like your password to include numerical characters?") 
  if (numbersTrue ===true )  {
    userData.push(numericCharacters);
  };

console.log (userData);

}


// Function for getting a random element from an array

//
function getRandom() {



array.forEach(element => {

  return [Math.floor(Math.random()*userLength)];

});

  
};




// Function to generate password with user input
function generatePassword() {
  return ("generated password will go here");
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

document.addEventListener("DOMContentLoaded", (onclick));
