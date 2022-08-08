let userName = 'Trio';

userName ==='Trio' ? console.log(`Hello, ${userName}`) : console.log(`Hello!`)

let userQuestion = 'Magic ball tell something'
console.log(userQuestion)

// floor - round down
// ceil - round up
let randomNumber = Math.floor(Math.random() * 8);

let eightBall =''

switch(randomNumber) {
    case 0:
        eightBall = 'It is certain'
        break;

    case 1:
        eightBall ='It is decidely so'
        break;
    
    case 2:
        eightBall = 'Reply hazy try'
        break;
    
    case 3:
        eightBall ='Cannot predict now'
        break;
    
    case 4:
        eightBall = 'Do not count on it'
        break;
    
    case 5: 
        eightBall ='My sources say no'
        break;
    case 6:
        eightBall='Outlook not so good'
        break;
    default:
        eightBall='Signs poiny to yes'
}

console.log(eightBall)

