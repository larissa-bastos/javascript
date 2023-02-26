function getComputerChoice () {
    let computer = Math.floor(Math.random()*4)
    if (computer === 1) {
        return ('Rock');
    } else if (computer === 2) {
        return ('Paper');
    } else {
        return ('Scissors');
    }
}

console.log(getComputerChoice()) 
