const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if(userInput ==='rock' || userInput ==='scissors' || userInput ==='paper' || userInput ==='bomb' ){
        return userInput;
    }else {
        console.log('Error, please type: rock, paper, scissors.')
    }
}

// console.log(getUserChoice('paper'))
// console.log(getUserChoice('tomato'))

const getComputerChoice = () => {
    const randomNum = Math.floor(Math.random() * 3)

    switch (randomNum){
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
};
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice){
        return 'This game is a tie';
    }
    if (userChoice === 'rock'){
        if (computerChoice === 'paper'){
            return 'Computer won!';
        } else {
            return 'Yay, you won!';
        }
    }
    if (userChoice === 'paper'){
        if (computerChoice === 'scissors'){
            return 'Computer won!';
        } else {
            return 'Yay, you won!';
        }
    }
    if (userChoice === 'scissors'){
        if (computerChoice === 'rock'){
            return 'Computer won!';
        } else {
            return 'Yay, you won!';
        }
    }
    if(userChoice === 'bomb'){
        return 'You know the secret word!'
    }

};

console.log(determineWinner('rock', 'scissors'))
console.log(determineWinner('rock', 'rock'))
console.log(determineWinner('paper', 'rock'))

const playGame = () => {
    const userChoice = getUserChoice('rock');
    const computerChoice = getComputerChoice();
    console.log('You threw: '+ userChoice)
    console.log('The computer threw: ' + computerChoice)
    console.log(determineWinner(userChoice,computerChoice))
}
playGame()