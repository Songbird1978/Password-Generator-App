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
var userLength; //this is a variable for the userLength - the length of the user input length

let userData = []; //this is an empty array to store password options and answers from the character prompts

// Function to prompt user for password options
function getPasswordOptions() { 

  var userInput = prompt("How long would you like your password to be?  Please input a number between 10 and 64!");// This is the first prompt
  userLength = parseInt(userInput); //this is declaring userLength as the userINput and using parseInt to return an Integer from a string (textbox user entry)

 
  if (userLength >= 10 && userLength <= 64) {   //if userLength is greater than or equal to 10 and less than or equal to 64
    alert ( "Thankyou! Your password will be " + userLength + " characters long."); //accept that this is their password length
  } else if (userLength < 10 || userLength > 64) { //if it's below 10 or higher than 64, 
    alert ( "You entered an incorrect number! Please enter a number between 10-64!" ); //they are reminded to enter a number between 10-64
      return false;
    
  }; //if false, returns to the beginning of the conditional statements to start again.
  
  


    
  var specialCharTrue = confirm ("Would you like your password to include Special characters?");
    if (specialCharTrue === true ) { //new variable created for special characters to be true or false
        userData = userData.concat(specialCharacters); //concatenate the character choices into userData array
      };
  
  var upperCharTrue = confirm ( "Would you like your password to include uppercase characters?"); 
    if (upperCharTrue ===true )  { //new variable as above
        userData = userData.concat(upperCasedCharacters);  //concatenation as above
      
      }; 
  
  var lowCharTrue = confirm ( "Would you like your password to include lowercase characters?"); 
  if (lowCharTrue ===true )  { //new variable as above 
      userData = userData.concat(lowerCasedCharacters); //concatenation as above
      };

  var numbersTrue = confirm ( "Would you like your password to include numerical characters?"); 
  if (numbersTrue ===true )  { //new variable as above
      userData = userData.concat(numericCharacters); //concatenation as above
      }; 
  
  console.log(userData); //this logs the array of user choices. 


};  







// Function to generate password with user input


  function generatePassword() {
  
    let password = 0; //this ensures that the password is clear each time the function is run.
    localStorage.clear();
    for (let i = 0; i < userLength; i++) { //for loop over the user length
    let randomIndex = Math.floor(Math.random() * userData.length); //declaring new variable to store random characters
    password += userData[randomIndex]; //defining the password as the random Index taken from the userData.
  }
  return password; //returning password to the WritePassword function
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate'); //calling the functions to generate the password within the html document

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  if (password === false) { // if there is no password, return to writePassword.
    
    return writePassword();
  }
  
  console.log(password); // console log the password
  var passwordText = document.querySelector('#password'); //selecting the area of html to put the password

  passwordText.value = password; // writing the password to the html document.
}

// Add event listener to generate button



generateBtn.addEventListener('click', writePassword); //generating the functions on click - event listener.
//generateBtn.addEventListener ('click', location.reload());

document.addEventListener("DOMContentLoaded", (onclick)); //making sure that the DOM content is loaded before the javascript runs.

