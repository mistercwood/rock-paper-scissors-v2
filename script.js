console.log("Welcome to Rock-Paper-Scissors! Good luck!");

let playerSelection;
let compSelection;
let playerScore = 0;
let compScore = 0;

// Get player choice from prompt, alert for non-valid entries and try again if needed.
function playerPrompt() {
    let playerChoice = prompt("Make your choice: 'rock', 'paper', or 'scissors'?");
    playerChoice = playerChoice.toLowerCase();
    while ((playerChoice != "rock") && (playerChoice != "paper") && (playerChoice != "scissors")) {
        alert("You can only choose 'rock', 'paper', or 'scissors', please try again!");
        playerChoice = prompt("Make your choice: 'rock', 'paper', or 'scissors'?");
    }
    return playerChoice;
}

// Generate Computer choice by random selection.
function computerPlay() {
    options = ["rock", "paper", "scissors"]
    compChoice = options[Math.floor(Math.random() * 3)];
    return compChoice;
}

// Get both choices, check to see whether Player or Computer wins, return the outcome.
function playRound(playerSelection, compSelection) {
    
    playerSelection = playerPrompt();
    compSelection = computerPlay();

    if ( (playerSelection === "rock" && compSelection === "scissors") || 
    (playerSelection === "paper" && compSelection === "rock") || 
    (playerSelection === "scissors" && compSelection === "paper") ) {
        result = `Well done, ${playerSelection} beats ${compSelection}. You win!`;
        playerScore++;
    }
    else if ( (playerSelection === "rock" && compSelection === "paper") || 
    (playerSelection === "paper" && compSelection === "scissors") || 
    (playerSelection === "scissors" && compSelection === "rock") ) {
        result = `Oh no, ${compSelection} beats ${playerSelection}. You lose!`;
        compScore++;
    }
    else if ( (playerSelection === "rock" && compSelection === "rock") || 
    (playerSelection === "paper" && compSelection === "paper") || 
    (playerSelection === "scissors" && compSelection === "scissors") ) {
        result = `You both chose ${playerSelection}. It's a draw!`;
    }

    return result;
}

// Play 5 times, tracking the wins for both players but ignoring ties, then show who the overall winner is.
function game() {
    for (let i = 0; (playerScore + compScore) < 5; i++) {
        console.log(playRound(playerSelection, compSelection));
        console.log(`The current score is: Player - ${playerScore}, Computer - ${compScore}.`);
    }
    let winner = (playerScore > compScore) ? (`You win, ${playerScore} to ${compScore}.`)
    : (`You lose, ${playerScore} to ${compScore}.`);
    console.log(winner);
}

// Initialise the game and display a farewell message once win conditions are met.
game();   
console.log("Game Over! Thanks for playing!");