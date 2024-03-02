console.log("Welcome! Please set playerChoice to rock, paper or scissors. When you're ready to play, execute playRound(computerChoice, playerChoice) function.")

let playerChoice = prompt("Rock, paper, or scissors?")
let computerChoice

function getComputerChoice() {
    const choiceOptions = ["Rock", "Paper", "Scissors"];
    let result = choiceOptions[Math.floor(Math.random() * choiceOptions.length)];
    return result.toLowerCase()
}

 function playRound(computerChoice, playerChoice) {

    computerChoice = getComputerChoice()

    if ((playerChoice === 'rock' && computerChoice === 'scissors') || (playerChoice === 'scissors' && computerChoice === 'paper') || (playerChoice === 'paper' && computerChoice === 'rock')) {
        return "You win! " + playerChoice + " beats " + computerChoice + "!";
    } else if ((playerChoice === 'rock' && computerChoice === 'paper') || (playerChoice === 'paper' && computerChoice === 'scissors') || (playerChoice === 'scissors' && computerChoice === 'rock')) {
        return "You lose! " + computerChoice + " beats " + playerChoice + "!";
    } else if ((playerChoice === 'paper' && computerChoice === 'paper') ||(playerChoice === 'rock' && computerChoice === 'rock') || (playerChoice === 'scissors' && computerChoice === 'scissors')) {
        return "Tie! You both picked " + computerChoice + ".";
    } else {
        return "Something went wrong."
    }

 }