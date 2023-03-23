// Assignment Code
var generateBtn = document.querySelector("#generate")

function generatePassword() {
// This line prompts the user to enter how many characters their password will have
var passLength = parseInt(prompt("Choose a password length between 8 and 128"));
  //If the user chooses a number lower than 8 or more than 128, they will be asked to try again
  if (passLength < 8 || passLength > 128) {
    alert("Password length must be between 8 and 128 characters. Please try again.");
    return;
  }
//This line prompts the user if they would like to have captilized characters for their password   
var passCaps = confirm("Would you like to use capitalized characters for your password?");
//This prompt asks the user if they would like to include special characters for their password
var passSpec = confirm("Would you like to use special characters for your password?");
//This prompt asks the user if they would like to have numbers in their password
var passNum = confirm("Would you like to have numbers in your password?");
 
  var userPass = "";
//This line is for the possible characters the password will have
  var chars = "abcdefghijklmnopqrstuvwxyz";
  var criteria = [" Lower case letters"];
//These are "if" statements for password criteria
if (passCaps){
    chars +="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    criteria += ", Capitalized letters"
  } 
if (passSpec) {
    chars += "!@#$%^&*<>?~";
    criteria += ", Special characters"
  }
if (passNum) {
     chars +="1234567890";
     criteria += ", Numbers"
}
//This line asks the user to confirm the chosen criteria(s)
userPass = confirm("Your password has the following criteria: " + criteria +  ". Please press 'OK' to continue")
//This turns the "chars" string into an array
  chars = chars.split("");
//This "for" loop is to randomly select characters from the "chars" array
  for (var i=0; i < passLength; i++){
    var randomPass = Math.floor(Math.random() * chars.length);
    if (userPass){
      userPass = userPass.toString().replace(/true|false/, ""); 
      userPass += chars[randomPass];}
      else if (!userPass){
        userPass = "Please Try Again";
        break;
      }
  }
  
  return userPass;


} 


// Write password to the #password input
function writePassword() {
 
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
