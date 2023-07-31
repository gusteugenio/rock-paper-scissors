function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors']
    const random = Math.floor(Math.random() * 3);
    return choices[random]
}


function playround(playerSelection, computerSelection) {

    if(playerSelection === 'rock') {
        if (computerSelection === 'Paper') {
            return "You lose! Paper beats Rock!"
            computer++
        } else if (computerSelection === 'Scissors') {
            return "You win! Rock beats Scissors!"
            player++
        } else {
            return "It's a tie! Both chose Rock."
        }
        } else if(playerSelection === 'paper') {
        if (computerSelection === 'Rock') {
            return "You win! Paper beats Rock!"
            player++
        } else if (computerSelection === ' Scissors') {
            return "You lose! Scissors beats Paper!"
            computer++
        } else {
            return "It's a tie! Both chose Paper."
        }
        } else if(playerSelection ==- 'scissors') {
        if(computerSelection === 'Rock') {
            return "You lose! Rock beats Scissors!"
            computer++
        } else if(computerSelection === 'Paper') {
            return "You win! Scissors beats Paper!"
            player++
        } else {
            return "It's a tie! Both chose Scissors."
        }
        } else {
            return "Invalid input! Please choose Rock, Paper or Scissors"
        }
}

let i = 0
let computer = 0
let player = 0
while(i < 5) {
    const computerSelection = getComputerChoice()
    let playerSelection = prompt("Rock, Paper or Scissors? Choose!")
    playerSelection = playerSelection.toLowerCase()
    console.log(playround(playerSelection, computerSelection))
    console.log(`Computer's choice was ${computerSelection}`)
    console.log(`Player: ${player}\nComputer: ${computer}`)
    i++
}


