console.log("Welcome! Please choose rock, paper or scissors in the prompt. When you're ready to play, execute the playRound function.")

let playerChoice = prompt("Rock, paper, or scissors?").toLowerCase;

function getComputerChoice() {
    const choiceOptions = ["Rock", "Paper", "Scissors"];
    let computerChoice = choiceOptions[Math.floor(Math.random() * choiceOptions.length)];
    return computerChoice

}

// function playRound(computerChoice, playerChoice) {
//     switch 
//     // (playerChoice === "rock" && computerChoice === "scissors")

// }