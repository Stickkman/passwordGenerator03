// Assignment code here
var criteriaChoice;
var passLength;

var passwordChars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"; 


var passUpper = "no";
var askSpecial = "no";
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    // PROMPTS FOR PASSWORD LENGTH
    passLength = window.prompt("Please select desired character length, between 8 and 128", "8");
        // IF LENGTH IS NOT IN RANGE RESTART PROMPT
        if (passLength < 8 || passLength > 128) {
            window.alert("Please make sure your choice is between 8 and 128 for security standards.");
            writePassword();
        } 
            askUpper();
          
    
    function askUpper(){        // PROMPTS TO INCLUDE UPPERCASE
        passUpper = window.prompt("Lowercase characters only will be selected by default, would you like to include uppercase as well, please type yes or no", "yes")
            // IF USER DOES NOT ENTER VIABLE RESPONSE ASK AGAIN
            if (passUpper != "yes" && passUpper != "no" ) {
            window.alert("Please enter either 'yes' or 'no'");
            askUpper();
        }   
    }
     
             askNumeric();

    function askNumeric() {
        passNumeric = window.prompt("Would you like to include numeric characters, please enter 'yes' or 'no'", "yes");
        // IF USER DOES NOT ENTER VIABLE RESPONSE ASK AGAIN
        if (passNumeric !="yes" && passNumberic !="no") {
            window.alert("Please enter either 'yes' or 'no'");
            askNumeric();
        }
    }
    
            askSpecial();

    function askSpecial() {
        passSpecial = window.prompt("Would you like to include special characters, please enter 'yes' or 'no'", "yes");
        // IF USER DOES NOT ENTER VIABLE RESPONSE ASK AGAIN
        if (passSpecial != "yes" && passSpecial != "no") {
            window.alert("Please enter either 'yes' or 'no'");
            askSpecial();
        }
    }
    
    
    window.alert("PassUpper:"+ passUpper + " Passlen:" +passLength + "PassNumeric:" + passNumeric + "PassSpecial:" + passSpecial);      
    }

    // var password = generatePassword() 
    var passwordChars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"; 
   
    

        
    
    
  var passwordText = document.querySelector("#password");

// data of passwordText stored in password variable
  passwordText.value = password;



// Add event listener to generate button, when clicked runs writePassword function
generateBtn.addEventListener("click", writePassword);

