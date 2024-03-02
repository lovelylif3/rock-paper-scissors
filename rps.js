console.log("Welcome! Please choose rock, paper or scissors in the prompt. When you're ready to play, execute the playRound function.")

let playerChoice = prompt("Rock, paper, or scissors?").toLowerCase;


 function playRound(computerChoice, playerChoice) {

    function getComputerChoice() {
        const choiceOptions = ["Rock", "Paper", "Scissors"];
        let computerChoice = choiceOptions[Math.floor(Math.random() * choiceOptions.length)];
        return computerChoice
    }

         if ((playerChoice === 'rock' && computerChoice === 'scissors') || (playerChoice === 'scissors' && 'computerChoice' === 'paper') || (playerChoice === 'paper' && computerChoice === 'rock')) {
            return "You win!" + playerChoice + " beats " + computerChoice + "!";
        } else if (playerChoice === 'scissors' && 'computerChoice' === 'paper'); {
            return "You win! scissors beat paper";
        // } else if (playerChoice === 'paper' && computerChoice === 'rock'); {
        //     return "You win! paper beats rock";
        // } else if (playerChoice === 'rock' && computerChoice === 'paper'); {
        //     return "You lose! paper beats rock"
        // } else if (playerChoice === 'paper' && computerChoice === 'scissors'); {
        //     return "You lose! scissors beats paper"
        // } else if (playerChoice === 'scissors' && computerChoice === 'rock'); {
        //     return "You lose! rock beats scissors"
        // } else if (playerChoice === 'paper' && computerChoice === 'paper'); {
        //     return "Tie! rock vs rock"
        // } else if (playerChoice === 'paper' && computerChoice === 'rock'); {
        //     return "Tie! paper vs paper"
        // } else if (playerChoice === 'paper' && computerChoice === 'rock'); {
        //     return "Tie! scissors vs scissors"
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