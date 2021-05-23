let playerSelection;
let compSelection;
let playerScore = 0;
let compScore = 0;

const playerScoreText = document.querySelector('#playerScoreText');
const compScoreText = document.querySelector('#compScoreText');
const gameStatusText = document.querySelector('#gameStatusText');

const rockButton = document.querySelector('#rock');
rockButton.addEventListener('click', () => {
    playRound('rock', compSelection);
});

const paperButton = document.querySelector('#paper');
paperButton.addEventListener('click', () => {
    playRound('paper', compSelection);
});

const scissorsButton = document.querySelector('#scissors');
scissorsButton.addEventListener('click', () => {
    playRound('scissors', compSelection);
});

function computerPlay() {
    options = ["rock", "paper", "scissors"]
    compChoice = options[Math.floor(Math.random() * 3)];
    return compChoice;
}

const resetButton = document.querySelector('#resetGame');
resetButton.addEventListener('click', () => {
    resetGame();
});

function resetGame() {
    playerScore = 0;
    compScore = 0;
    playerScoreText.textContent = 'Player: 0';
    compScoreText.textContent = 'Computer: 0';
    gameStatusText.textContent = 'Choose your fighter to start the game, best of 5 wins!';
}

function winCheck() {
    if ((playerScore + compScore) >= 5) {
        let winner = (playerScore > compScore) ? (`You won, ${playerScore} to ${compScore}.`)
        : (`You lost, ${playerScore} to ${compScore}.`);
        gameStatusText.textContent = winner;
    }
}

function playRound(playerSelection, compSelection) {
    if ((playerScore + compScore) >= 5) {
        return;
    }
    else {
        compSelection = computerPlay();
        
        if ( (playerSelection === "rock" && compSelection === "scissors") || 
        (playerSelection === "paper" && compSelection === "rock") || 
        (playerSelection === "scissors" && compSelection === "paper") ) {
            gameStatusText.textContent = `Well done, ${playerSelection} beats ${compSelection}. You win!`;
            playerScore++;
            playerScoreText.textContent = `Player: ${playerScore}`;
        }
        else if ( (playerSelection === "rock" && compSelection === "paper") || 
        (playerSelection === "paper" && compSelection === "scissors") || 
        (playerSelection === "scissors" && compSelection === "rock") ) {
            gameStatusText.textContent = `Oh no, ${compSelection} beats ${playerSelection}. You lose!`;
            compScore++;
            compScoreText.textContent = `Computer: ${compScore}`;
        }
        else if ( (playerSelection === "rock" && compSelection === "rock") || 
        (playerSelection === "paper" && compSelection === "paper") || 
        (playerSelection === "scissors" && compSelection === "scissors") ) {
            gameStatusText.textContent = `You both chose ${playerSelection}. It's a draw!`;
        }
    }
    winCheck();    
}
