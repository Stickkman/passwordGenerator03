// Assignment code here
//Variable to store password length
var passLength=128;
//variable for including numeric criteria
var includeNumeric ="yes";
//variable for including uppercase criteria
var includeUpper ="yes";
// variable for including special characters criteria
var includeSpecial ="yes";
// variable to hold generated password
var finalPassword ="";

//arrays for different criteria
var mainArray = [];
var lowercaseArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercaseArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numberArray = [0,1,2,3,4,5,6,7,8,9];
var specialArray = ["!","\" ","#","$","%","&","\",","(",")","*","+",",","-",".","/","\\",":",";","<",">","=","?","@","[","]","^","_", "`", "{", "}", "|", "~"];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
//Characters from password are created with this function
function generatePassword() {
    console.log("function generatePassword was run"); //test function started after button clicked
    //move onto first criteria question about length
    askLength(); 
    
// PROMPTS FOR PASSWORD LENGTH
       function askLength() {
       passLength = window.prompt("Please select desired character length, between 8 and 128, default value is 128", "128");
       // IF LENGTH IS NOT IN RANGE RESTART PROMPT
       if (passLength < 8 || passLength > 128) {
           window.alert("Please make sure your choice is between 8 and 128 for security standards.");
           askLength();
        } 
        //Updates the length of the password
        return passLength; 
        }
        // move onto next criteria uppercase
        askUpper();

//Prompts to include Upper Cass Criteria        
        function askUpper(passUpper){        
            passUpper = window.prompt("Lowercase characters only will be selected by default, would you like to include uppercase as well, please type yes or no", "no")
                // IF USER DOES NOT ENTER VIABLE RESPONSE ASK AGAIN
                if (passUpper != "yes" && passUpper != "no" ) {
                window.alert("Please enter either 'yes' or 'no'");
                askUpper();
            }   
                if (passUpper =="yes"){
                    includeUpper="yes"; console.log("ran passupper yes, value includeupper yes"); // test 
                }
                if (passUpper =="no"){
                    includeUpper ="no"; console.log("ran passupper no, value inclueupper no"); // test
                }
        } 
        // move onto next criteria numbers
        askNumeric();

 //Prompts to include Numeric Criteria   
       function askNumeric(passNumeric) {
        passNumeric = window.prompt("Would you like to include numeric characters, please enter 'yes' or 'no', default is yes", "yes");
        // IF USER DOES NOT ENTER VIABLE RESPONSE ASK AGAIN
        if (passNumeric !="yes" && passNumeric !="no") {
            window.alert("Please enter either 'yes' or 'no'");
            askNumeric();
        }
        if (passNumeric =="yes") {
            includeNumeric = "yes"; console.log("ran passnumeric yes, value yes"); // test
        }
        if (passNumeric =="no"){
            includeNumeric = "no"; console.log("ran passnumeric no, value no"); // test
            
        } }
        // move onto next criteria special characters
            askSpecial();
//Prompts to include Special Characters Critera
    function askSpecial(passSpecial) {
        passSpecial = window.prompt("Would you like to include special characters, please enter 'yes' or 'no'", "yes");
        // IF USER DOES NOT ENTER VIABLE RESPONSE ASK AGAIN
        if (passSpecial != "yes" && passSpecial != "no") {
            window.alert("Please enter either 'yes' or 'no'");
            askSpecial();
        }
        if (passSpecial == "yes") {
            includeSpecial = "yes"; console.log("ran passSpecial yes, value yes"); // test
        }
        if (passSpecial == "no") {
            includeSpecial = "no" ; console.log("ran passSpecial no, value no"); // test
        } 

    } 
    // tests for criteria logic results
    console.log("includeNumeric= " + includeNumeric + " includeupper=" + includeUpper + " includeSpecial= " + includeSpecial);
       
        makePass();
        //Logic for created correct array from previous criteria choices
            function makePass() {
            if (includeUpper =="yes" && includeNumeric =="yes" && includeSpecial == "yes") {
                mainArray = lowercaseArray.concat(uppercaseArray, numberArray, specialArray); console.log("test y y y" + mainArray);
            }
            if (includeUpper =="yes" && includeNumeric =="no" && includeSpecial == "no") {
                mainArray = lowercaseArray.concat(uppercaseArray); console.log("test y n n" + mainArray); 
            }
            if (includeUpper =="yes" && includeNumeric =="yes" && includeSpecial == "no") {
                mainArray = lowercaseArray.concat(uppercaseArray, numberArray); console.log("test y y n" + mainArray);
            }
            if (includeUpper =="no" && includeNumeric =="no" && includeSpecial == "no") {
                mainArray = lowercaseArray; console.log("test n n n" + mainArray);
            }
            if (includeUpper =="no" && includeNumeric =="yes" && includeSpecial == "yes") {
                mainArray = lowercaseArray.concat(numberArray, specialArray); console.log("test n y y " + mainArray);
            }
            if (includeUpper =="no" && includeNumeric =="no" && includeSpecial == "yes") {
                mainArray = lowercaseArray.concat(specialArray); console.log("test n n y " + mainArray);
            }
            if (includeUpper =="no" && includeNumeric =="yes" && includeSpecial == "no") {
                mainArray = lowercaseArray.concat(numberArray); console.log("test n y n" + mainArray);
            }
        }
        console.log("global scope test " + mainArray); // test scope if issues
        
        // call randomize function
        randomizePass();

        //randomizes main array password from makePass function
        function randomizePass() {
            // loop for character randomization
            for (i = 0; i <= mainArray.length; i++)
            {
            var randomChar = mainArray[Math.floor(Math.random()*mainArray.length)];
            // adds random characters one by one based on desired passworld length
            finalPassword = finalPassword += randomChar; console.log("During Loop " +  finalPassword );
            }
            console.log("End loop - Final Password: " + finalPassword);
            // cut password to specificed size from criteria if issues occur, failsafe
            finalPassword = finalPassword.slice(0, passLength);
            console.log("End loop after slice " + finalPassword);
            }
                      
     // Returns final generated password to be updated in writepassword function
    return finalPassword;

}

// function to display generated password on screen
function writePassword() {
  //The function generatePassword is called and the value stored in variable 'password'  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  //Password value updated on the page  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
