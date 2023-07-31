function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors']
    const random = Math.floor(Math.random() * 3);
    return choices[random]
}

const playerSelection = 'rock'

function playround(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()

    if(playerSelection === 'rock') {
     if (computerSelection === 'Paper') {
        return "You lose! Paper beats Rock!"
     } else if (computerSelection === 'Scissors') {
        return "You win! Rock beats Scissors!"
     } else {
        return "It's a tie! Both chose Rock."
     }
    } else if(playerSelection === 'paper') {
     if (computerSelection === 'Rock') {
        return "You win! Paper beats Rock!"
     } else if (computerSelection === ' Scissors') {
        return "You lose! Scissors beats Paper!"
     } else {
        return "It's a tie! Both chose Paper."
     }
    } else if(playerSelection ==- 'scissors') {
     if(computerSelection === 'Rock') {
        return "You lose! Rock beats Scissors!"
     } else if(computerSelection === 'Paper') {
        return "You win! Scissors beats Paper!"
     } else {
        return "It's a tie! Both chose Scissors."
     }
    } else {
        return "Invalid input! Please choose Rock, Paper or Scissors"
    }
} 

const computerSelection = getComputerChoice()
console.log(`Computer's choice was ${computerSelection}`)
console.log(playround(playerSelection, computerSelection))