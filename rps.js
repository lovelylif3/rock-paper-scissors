const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const resultText = document.querySelector('#resultText');

resultText.textContent = "Let's play rock, paper, scissors! Make a choice to play a round against the computer."
rockButton.addEventListener("click", () => {
    playRound(computerChoice, "rock");
});

paperButton.addEventListener("click", () => {
    playRound(computerChoice, "paper");
});

scissorsButton.addEventListener("click", () => {
    playRound(computerChoice, "scissors");
});


console.log("Welcome to Rock, Paper, Scissors! When you're ready to play, execute the playGame() function. You will play 5 rounds against the computer. Your input is not case-sensitive, but please don't misspell it :)")

let playerChoice
let computerChoice
let roundCount = 0
let playerPoints = 0
let computerPoints = 0
let gameWinner

function getComputerChoice() {
    const choiceOptions = ["Rock", "Paper", "Scissors"];
    let result = choiceOptions[Math.floor(Math.random() * choiceOptions.length)];
    return result.toLowerCase()
}

// function getPlayerChoice() {
//     return prompt("Rock, Paper, or Scissors?")
// }

 function playRound(computerChoice, playerChoice) {
    // playerChoice = getPlayerChoice()
    computerChoice = getComputerChoice()

    if ((playerPoints < 5) && (computerPoints < 5)) {

        if ((playerChoice === 'rock' && computerChoice === 'scissors') || (playerChoice === 'scissors' && computerChoice === 'paper') || (playerChoice === 'paper' && computerChoice === 'rock')) {
            playerPoints ++
            resultText.textContent = `You won the round. The computer picked ${computerChoice}. The running score is: You ${playerPoints} Computer ${computerPoints}`
            if ((playerPoints < computerPoints) && ((playerPoints === 5) || (computerPoints === 5))) {
                resultText.textContent = `You lose the game! Computer: ${computerPoints} You: ${playerPoints}`
            } else if ((playerPoints > computerPoints) && ((playerPoints === 5) || (computerPoints === 5))) {
                resultText.textContent = `You win the game! Computer: ${computerPoints} You: ${playerPoints}`
            }
            // return "You win! " + playerChoice + " beats " + computerChoice + "!";
        } else if ((playerChoice === 'rock' && computerChoice === 'paper') || (playerChoice === 'paper' && computerChoice === 'scissors') || (playerChoice === 'scissors' && computerChoice === 'rock')) {
            computerPoints ++
            resultText.textContent = `You lost the round. The computer picked ${computerChoice}... The running score is: You ${playerPoints} Computer ${computerPoints}`
            if ((playerPoints < computerPoints) && ((playerPoints === 5) || (computerPoints === 5))) {
                resultText.textContent = `You lose the game! Computer: ${computerPoints} You: ${playerPoints}`
            } else if ((playerPoints > computerPoints) && ((playerPoints === 5) || (computerPoints === 5))) {
                resultText.textContent = `You win the game! Computer: ${computerPoints} You: ${playerPoints}`
            }
            // return "You lose! " + computerChoice + " beats " + playerChoice + "!";
        } else if ((playerChoice === 'paper' && computerChoice === 'paper') ||(playerChoice === 'rock' && computerChoice === 'rock') || (playerChoice === 'scissors' && computerChoice === 'scissors')) {
            // return //"Tie! You both picked " + computerChoice + ".";
            resultText.textContent = `This round was a tie. You both picked ${computerChoice}! The running score is: You ${playerPoints} Computer ${computerPoints}`
            if ((playerPoints < computerPoints) && ((playerPoints === 5) || (computerPoints === 5))) {
                resultText.textContent = `You lose the game! Computer: ${computerPoints} You: ${playerPoints}`
            } else if ((playerPoints > computerPoints) && ((playerPoints === 5) || (computerPoints === 5))) {
                resultText.textContent = `You win the game! Computer: ${computerPoints} You: ${playerPoints}`
            }
        } else {
            // return "Something went wrong... Check spelling of your input."
            if ((playerPoints < computerPoints) && ((playerPoints === 5) || (computerPoints === 5))) {
                resultText.textContent = `You lose the game! Computer: ${computerPoints} You: ${playerPoints}`
            } else if ((playerPoints > computerPoints) && ((playerPoints === 5) || (computerPoints === 5))) {
                resultText.textContent = `You win the game! Computer: ${computerPoints} You: ${playerPoints}`
            }
        }
    } else {
        if ((playerPoints < computerPoints) && ((playerPoints === 5) || (computerPoints === 5))) {
            resultText.textContent = `You lose the game! Computer: ${computerPoints} You: ${playerPoints}`
        } else if ((playerPoints > computerPoints) && ((playerPoints === 5) || (computerPoints === 5))) {
            resultText.textContent = `You win the game! Computer: ${computerPoints} You: ${playerPoints}`
        }
    }
 }

//  function playGame() {
//     playerPoints = 0
//     computerPoints = 0
//     playRound(computerChoice, playerChoice);
//     playRound(computerChoice, playerChoice);
//     playRound(computerChoice, playerChoice); 
//     playRound(computerChoice, playerChoice);
//     playRound(computerChoice, playerChoice);

//    if (playerPoints > computerPoints) {
//         console.log(`You won by ${playerPoints - computerPoints} point(s). You had ${playerPoints} point(s) and the computer had ${computerPoints}. Great job!`)
//     } else if (playerPoints < computerPoints) {
//         console.log(`You lost by ${computerPoints - playerPoints} point(s). You had ${playerPoints} point(s) and the computer had ${computerPoints}. Better luck next time!`)
//     } else if (playerPoints === computerPoints)
//         console.log(`The game was a tie. You had ${playerPoints} point(s) and the computer had ${computerPoints}.`)
//  }