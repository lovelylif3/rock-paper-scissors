console.log("Welcome! Please set playerChoice to rock, paper or scissors. When you're ready to play, execute the playRound function.")

let playerChoice = prompt("Rock, paper, or scissors?")
let computerChoice = getComputerChoice()


// function getPlayerChoice() {
//     let result = prompt("Rock, paper, or scissors?").toLowerCase
//     return result   
// }

function getComputerChoice() {
    const choiceOptions = ["Rock", "Paper", "Scissors"];
    let result = choiceOptions[Math.floor(Math.random() * choiceOptions.length)];
    return result.toLowerCase()
}

 function playRound(computerChoice, playerChoice) {
    
         if ((playerChoice === 'rock' && computerChoice === 'scissors') || (playerChoice === 'scissors' && 'computerChoice' === 'paper') || (playerChoice === 'paper' && computerChoice === 'rock')) {
            return "You win! " + playerChoice + " beats " + computerChoice + "!";
        } else if ((playerChoice === 'rock' && computerChoice === 'paper') || (playerChoice === 'paper' && computerChoice === 'scissors') || (playerChoice === 'scissors' && computerChoice === 'rock')) {
            return "You lose! " + computerChoice + " beats " + playerChoice + "!";
        } else if ((playerChoice === 'paper' && computerChoice === 'paper') ||(playerChoice === 'paper' && computerChoice === 'rock') || (playerChoice === 'paper' && computerChoice === 'rock')) {
            return "Tie! You both picked " + computerChoice + ".";
        } else {
            return "Something went wrong."
        }

 }

//
// playerChoice === scissors && computerChoice === paper
// playerChoice === paper && computerChoice === rock
// playerChoice === rock && computerChoice === scissors
// playerChoice === rock && computerChoice === scissors
// playerChoice === rock && computerChoice === scissors
// playerChoice === rock && computerChoice === scissors
    
// // }