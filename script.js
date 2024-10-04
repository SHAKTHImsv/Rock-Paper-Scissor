const buttons = document.querySelectorAll("button");
const resultEl = document.getElementById('result');
const playerScoreEl = document.getElementById('user-score');
const computerScoreEl = document.getElementById('device-score');
const computerSelectionEl = document.getElementById('computer-selection');
let playerScore = 0;
let computerScore = 0;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const computerChoice = computerPlay();
        const result = playRound(button.id, computerChoice);
        resultEl.textContent = result;
        updateComputerSelectionEmoji(computerChoice);
    });
});

function computerPlay() {
    const choices = ["rock", "paper", "scissor"];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissor") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissor" && computerSelection === "paper")
    ) {
        playerScore++;
        playerScoreEl.textContent = playerScore;
        return "You win! " + playerSelection + " beats " + computerSelection;
    } else {
        computerScore++;
        computerScoreEl.textContent = computerScore;
        return "You lose! " + computerSelection + " beats " + playerSelection;
    }
}

function updateComputerSelectionEmoji(choice) {
    const emojis = {
        rock: '&#x1f44a;',   
        paper: '&#9995;',    
        scissor: '&#x270c;'  
    };

    computerSelectionEl.innerHTML = emojis[choice];
    computerSelectionEl.style.display = 'block';
}
