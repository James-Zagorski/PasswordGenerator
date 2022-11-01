// Assignment Code
var generateBtn = document.querySelector("#generate");

var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",]
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",]
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8,", "9",]
var specialcharacters = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.',]
function generatePassword() {
  var allChars = [];
  var randomPassword 
  var passwordLength = prompt (
    "How long do you want this password to be?"
  )

  while(passwordLength < 8 || passwordLength > 128){
    alert ("Your password length must be between 8 and 128 characters")
    passwordLength = prompt (
      "How long do you want this password to be?"
    )
  }
  var addUppercase = confirm ("Would you like to add uppercase letters to your password?")
  if(addUppercase === true){
    allChars = allChars.concat(uppercase)
    console.log(allChars)
  }
  var addLowercase = confirm ("Would you like to add Lowercase letters to your password?")
  if(addLowercase === true){
    allChars = allChars.concat(lowercase)
    console.log(allChars)
  }
  var addnumbers = confirm ("Would you like to add numbers letters to your password?")
  if(addnumbers === true){
    allChars = allChars.concat(numbers)
    console.log(allChars)
  }
  var addspecialCharacters = confirm ("Would you like to add special characters letters to your password?")
  if(addspecialCharacters === true){
    allChars = allChars.concat(specialcharacters)
    console.log(allChars)
  }

  var randomPassword=""
  for (let index = 0; index < passwordLength; index++) {
    randomPassword += allChars[Math.floor(Math.random() * allChars.length)] 
  console.log(`randomPassword: ${randomPassword}`)
  console.log(`passwordLength: ${passwordLength}`)
  }
  return randomPassword  
  
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
