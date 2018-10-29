// 
const randomWord = require('./random_word');
const inquirer = require('inquirer');
let guessNumber;
let guessArray = []



inquirer.prompt([
    {
        type: 'list',
        message: 'What would you like to do?',
        name: 'menuChoice',
        choices: ['Play a game', 'Exit the game'],
    }
]).then((result) => {
    switch (result.menuChoice) {
        case 'Play a game':
            console.log('Starting the game ....');
            if (randomWord.returnedword) {
                guessNumber = (randomWord.returnedword.length - 1) + 3
            }
            console.log(`The length of the random word is: ${guessNumber}`);

            for (let count = 0; count <= guessNumber; count++) {
                guessArray.push('_');
            }
            console.log(guessArray);
            break;
        case 'Exit the game':
            process.exit();
            break
        default:
            break;
    }
}).catch((err) => {
    console.log(err);
});