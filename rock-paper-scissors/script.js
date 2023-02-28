function getComputerChoice () {
    let computer = Math.floor(Math.random()*4);
    if (computer === 1) {
        return ('rock');
    } else if (computer === 2) {
        return ('paper');
    } else {
        return ('scissors');
    }
}

let computerSelection = getComputerChoice();


let playerSelection = prompt("Choose between: Rock, Paper or Scissors!").toLowerCase();

function round(playerSelection, computerSelection) {
    
    if (playerSelection === computerSelection) {
        return `It's a tie! You and the computer both chose ${playerSelection}.`;
    } else if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')) {
        return `You won! ${playerSelection} beats ${computerSelection}!`;
    } else if ((playerSelection === 'rock' && computerSelection === 'paper') ||
    (playerSelection === 'paper' && computerSelection === 'scissors') ||
    (playerSelection === 'scissors' && computerSelection === 'rock')) {
        return `You lose! ${computerSelection} beats ${playerSelection}!`;
    } else {
        return `Invalid choice! Please choose rock, paper or scissors.`;
    }
    
}

console.log(`Computer chose: ${computerSelection}. You chose ${playerSelection}`);

console.log(round(playerSelection, computerSelection));

// ok a função funciona (não sei se bem), mas continua dando undefined porque não coloquei parâmetros na função. Mas os parâmetros deviam ser auto.