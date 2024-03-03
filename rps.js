console.log("Welcome to Rock, Paper, Scissors! When you're ready to play, execute playRound(computerChoice, playerChoice) function. Your input is not case-sensitive, but please don't misspell it :)")

let playerChoice
let computerChoice

function getComputerChoice() {
    const choiceOptions = ["Rock", "Paper", "Scissors"];
    let result = choiceOptions[Math.floor(Math.random() * choiceOptions.length)];
    return result.toLowerCase()
}

function getPlayerChoice() {
    return prompt("Rock, Paper, or Scissors?")
}
 function playRound(computerChoice, playerChoice) {
    playerChoice = getPlayerChoice()
    computerChoice = getComputerChoice()

    if ((playerChoice === 'rock' && computerChoice === 'scissors') || (playerChoice === 'scissors' && computerChoice === 'paper') || (playerChoice === 'paper' && computerChoice === 'rock')) {
        return "You win! " + playerChoice + " beats " + computerChoice + "!";
    } else if ((playerChoice === 'rock' && computerChoice === 'paper') || (playerChoice === 'paper' && computerChoice === 'scissors') || (playerChoice === 'scissors' && computerChoice === 'rock')) {
        return "You lose! " + computerChoice + " beats " + playerChoice + "!";
    } else if ((playerChoice === 'paper' && computerChoice === 'paper') ||(playerChoice === 'rock' && computerChoice === 'rock') || (playerChoice === 'scissors' && computerChoice === 'scissors')) {
        return "Tie! You both picked " + computerChoice + ".";
    } else {
        return "Something went wrong... Check spelling of your input."
    }

 }