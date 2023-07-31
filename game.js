// creating the computer's choice function
function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors']
    const random = Math.floor(Math.random() * 3);
    return choices[random]
}

// creating the game function
function playround(playerSelection, computerSelection) {

    if(playerSelection === 'rock') {
        if (computerSelection === 'Paper') {
            computer++
            return "You lose! Paper beats Rock!"
        } else if (computerSelection === 'Scissors') {
            player++
            return "You win! Rock beats Scissors!"
        } else {
            return "It's a tie! Both chose Rock."
        }
        } else if(playerSelection === 'paper') {
        if (computerSelection === 'Rock') {
            player++
            return "You win! Paper beats Rock!"
        } else if (computerSelection === ' Scissors') {
            computer++
            return "You lose! Scissors beats Paper!"
        } else {
            return "It's a tie! Both chose Paper."
        }
        } else if(playerSelection === 'scissors') {
        if(computerSelection === 'Rock') {
            computer++
            return "You lose! Rock beats Scissors!"
        } else if(computerSelection === 'Paper') {
            player++
            return "You win! Scissors beats Paper!"
        } else {
            return "It's a tie! Both chose Scissors."
        }
        } else {
            return "Invalid input! Please choose Rock, Paper or Scissors"
        }
}

// setting some values (counter and results)
let i = 0
let computer = 0
let player = 0

// using a whle-loop to play the game 5 times
while(i < 5) {
    const computerSelection = getComputerChoice()
    let playerSelection = prompt("Rock, Paper or Scissors? Choose!")
    playerSelection = playerSelection.toLowerCase()
    console.log(playround(playerSelection, computerSelection))
    console.log(`Computer's choice was ${computerSelection}`)
    console.log(`Player: ${player}\nComputer: ${computer}`)
    i++
}


