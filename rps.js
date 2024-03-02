console.log("Welcome! Please set playerChoice to rock, paper or scissors. When you're ready, execute the playRound function.")

prompt("Rock, paper, or scissors?").toLowerCase;

function getComputerChoice() {
    const choiceOptions = ["Rock", "Paper", "Scissors"];
    let computerChoice = choiceOptions[Math.floor(Math.random() * choiceOptions.length)];
    return computerChoice

}

function playRound(computerChoice, playerChoice) {
    if (playerChoice === "rock" && computerChoice === "scissors")
        
}