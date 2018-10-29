// 
const randomWord = require('./random_word');
const inquirer = require('inquirer');




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
            console.log('\nStarting the game ....');
            randomWord.getRandomWord();
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
function getGuess() {[
    inquirer.prompt([
        {
            type: 'input',
            message: 'Choose a letter',
            name: 'menuLetter',
        }
    ]).then(result => {
        firstLetter = result.menuLetter.charAt(0);
        randomWord.wordCheck(randomWord.returnedword.split(''), firstLetter);
    })
]}