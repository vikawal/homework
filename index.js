//Task 1 Game (details in style sheet)
const getUserChoice = (userInput) => {
  userInput = prompt ('What do you choose: rock, scissors or paper?'); 
  userInput = userInput.toLowerCase(); 
  if (userInput == "rock" || userInput == "paper" || userInput == "scissors") {
return userInput;
}
else {
    alert ('ERROR, you can choose only between paper rock and scissrs');
    throw new Error ("ERROR");  
} 
} 
console.log (getUserChoice());

let getComputerChoice = () => {
    let anyNumber = Math.floor(Math.random() * 3);
    alert (anyNumber);
 
    if (anyNumber == 0) {
        return "rock";
    }
    else if (anyNumber == 1) {
        return "scissors";
    }
    else if (anyNumber == 2) {
        return "paper";
    }
    else {
        return "Fuck";
    }
}
console.log (getComputerChoice());


let determineWinner = (userChoice, computerChoice) => {
        //console.log(`getUserChoice = "${getUserChoice}"; userChoice = "${userChoice}"`);
        
   if (userChoice === computerChoice) {
  return "The game was a tie";
   }   
 else if (userChoice === "rock") {
    if (computerChoice === "paper") {
        return "Computer WON!";
    }
    else {
        return "You WON!";
    }   
}

 else if (userChoice === "paper") {
    if (computerChoice === "scissors") {
        return "Computer WON!";
    }
    else { 
        return "You WON!";
    }
}

 else if (userChoice === "scissors") {
    if (computerChoice === "rock") {
        return "Computer WON!";
    }
    else {
        return "You WON!";  
    }
}  
}  
console.log (determineWinner());

let playGame = () => {
    
    let userChoice = getUserChoice();
    //console.log (userChoice);
    let computerChoice = getComputerChoice();
    //console.log (computerChoice);
    determineWinner(userChoice, computerChoice);
    //console.log (determineWinner());
    
    //console.log (determineWinner (userChoice, computerChoice));
}
console.log (determineWinner (userChoice, computerChoice));
//playGame();