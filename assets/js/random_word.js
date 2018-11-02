const axios = require('axios');
const app = require('./app');

const randomWord = {
    // Properties
    guessChances: 0,
    guessNumber: 0,
    guessArray: [],
    returnedword: '',
    randomWordUrl: 'https://nlp.fi.muni.cz/projekty/random_word/run.cgi?language_selection=en&word_selection=verbs&model_selection=use&length_selection=&probability_selection=true',

    // Methods
    // Grab a random word from an API
    getRandomWord: function () {
        return new Promise((resolve, reject) => {
            axios.get(this.randomWordUrl)
                .then((result) => {
                    this.returnedword = result.data.replace(/\r?\n/g, '').toLowerCase();
                    this.setGame();
                    resolve();
                }).catch((err) => {
                    console.log(err);
                    reject();
                })
        })
    },


    // Setup for the game
    // Remove the extra space behind the word
    // Fill guess array with '_' to show progress
    setGame: function () {
        if (this.returnedword) {
            this.guessNumber = (this.returnedword.length) + 3;
        }

        console.log(`The length of the random word is: ${this.returnedword.length}`);

        for (let count = 1; count <= (this.returnedword.length); count++) {
            this.guessArray.push('_');
        }
    },

    reset: function () {
        this.guessNumber = 0;
        this.guessChances = 0;
        this.returnedword = '';
        this.guessArray = [];
        return;
    }
};

module.exports = randomWord;