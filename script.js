let humanScore = 0;
let computerScore = 0;
let humanScoreText = document.querySelector(".human-score");
let computerScoreText = document.querySelector(".computer-score");

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    let emoji = document.querySelector(".computer-choice");
    switch (computerChoice) {
        case 0:
            emoji.textContent = "🪨";
            return "ROCK";
        case 1:
            emoji.textContent = "📜";
            return "PAPER";
        case 2:
            emoji.textContent = "✂️";
            return "SCISSORS";
    }
}

function getHumanChoice() {
    let menu = document.querySelector(".selection");
    let emoji = document.querySelector(".human-choice");
    menu.addEventListener('click', (e) => {
        let target = e.target;
        let humanChoice = null;

        switch (target.id) {
            case 'ROCK':
                console.log("ROCK was clicked");
                emoji.textContent = "🪨";
                humanChoice = "ROCK";
                break;
            case 'PAPER':
                emoji.textContent = "📜";
                console.log("PAPER was clicked");
                humanChoice = "PAPER";
                break;
            case 'SCISSORS':
                emoji.textContent = "✂️";
                console.log("SCISSORS was clicked");
                humanChoice = "SCISSORS";
                break;
        }

        if (humanChoice) {
            playRound(humanChoice, getComputerChoice());
        }
    });
}

function playRound(humanChoice, computerChoice) {
    let roundWinner = document.querySelector(".winner");

    if (humanChoice === computerChoice) {
        roundWinner.textContent = "It's a TIE!";
    } else if (
        (humanChoice === "ROCK" && computerChoice === "SCISSORS") ||
        (humanChoice === "SCISSORS" && computerChoice === 'PAPER') ||
        (humanChoice === "PAPER" && computerChoice === "ROCK")
    ) {
        roundWinner.textContent = "You WIN!";
        humanScore++;
    } else {
        roundWinner.textContent = "The Computer WINS!";
        computerScore++;
    }

    humanScoreText.textContent = `${humanScore}`;
    computerScoreText.textContent = `${computerScore}`;

    if (humanScore == 5 || computerScore == 5) {
        displayWinner(computerScore, humanScore);
    }
}

function displayWinner(computerScore, humanScore) {
    let cover = document.querySelector(".game-end");
    let text = document.createElement("div");
    text.classList.add("text");
    
    cover.setAttribute("style", `
        display: flex; 
        position: fixed; 
        top: 0; 
        left: 0; 
        width: 100%; 
        height: 100%; 
        background-color: rgba(0, 0, 0, 0.9); 
        align-items: center; 
        justify-content: center;
        z-index: 9999;
    `);
    
    text.setAttribute("style", `
        font-family: Arcade; 
        font-size: 80px; 
        color: #5cefff; 
        text-align: center; 
        text-shadow: 2px 2px red;
    `);
    
    if (computerScore > humanScore) {     
        text.textContent = "The computer WINS the game!";
    } else if (humanScore > computerScore) {
        text.textContent = "You WIN the game!";
    } else {
        text.textContent = "It was a TIE!";
    }
    
    cover.appendChild(text);
}

getHumanChoice();

