function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3) + 1;
    let compch = ''
    if (choice === 1){
        compch = 'Rock'
        console.log(compch)
    } else if(choice === 2){
        compch = 'Paper'
        console.log(compch)
    } else if(choice === 3){
        compch = 'Scissors'
        console.log(compch)
    }
}

