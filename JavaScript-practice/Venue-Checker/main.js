//var age = prompt("What is your age");
//
//
//if (age < 0 ) {
//    console.error("Not a valid age");
//}  else if (age === "21") {
//    console.log("Happy 21st birthday");
//}  else if (age % 2 !== 0) {
//    console.log("your age is odd!");
//} else if (Math.sqrt(age) === Math.sqrt(age)) {
//    console.log("perfect square");
//}

//





(function() {
    
var rightGuess = 7; 
var userGuess = prompt("Guess a number between 1-100");
  
  
    while (Number(userGuess) != rightGuess) {
        
        userGuess = prompt("Wrong try again!");
      
    }
    
    console.log("you guessed it!!");
    
    
    
})(); 