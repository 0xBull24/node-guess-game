// 
const randomWord = require('./random_word');
const inquirer = require('inquirer');

randomWord.getRandomWord();

inquirer.prompt([{
    type: 'list',
    message: 'What would you like to do?',
    name: 'menuChoice',
    choices: ['Play a game', 'Exit the game'],
}]).then((result) => {
    switch (result.menuChoice) {
        case 'Play a game':
            console.log('\nStarting the game ....');
            getGuess();
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

// Grab guess from the user
function getGuess() {
    console.log(`Your guess chances is: ${randomWord.guessChances}`);
    console.log(`You can guess ${randomWord.guessNumber} times`);
    if (randomWord.guessChances <= randomWord.guessNumber) {
        [
            inquirer.prompt([{
                type: 'input',
                message: 'Choose a letter',
                name: 'menuLetter',
            }]).then(result => {
                firstLetter = result.menuLetter.charAt(0);
                randomWord.wordCheck(randomWord.returnedword.split(''), firstLetter);
            })
        ]
    } else {
        console.log(`Sorry you lose`);
        process.exit();
    }
}