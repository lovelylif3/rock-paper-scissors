function getComputerChoice() {
    const choiceOptions = ["Rock", "Paper", "Scissors"];
    let choice = choiceOptions[Math.floor(Math.random() * choiceOptions.length)];
    return choice

}