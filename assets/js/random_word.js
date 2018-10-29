const axios = require('axios');

const randomWord = {
    // Properties
    returnedword: 'test',
    randomWordUrl: 'https://nlp.fi.muni.cz/projekty/random_word/run.cgi?language_selection=en&word_selection=verbs&model_selection=use&length_selection=&probability_selection=true',

    // Methods
    getRandomWord: function () {
        axios.get(this.randomWordUrl)
            .then((result) => {
                // this.returnedword = result.data
                // console.log(result.data);
                // console.log(result.data.length);
            }).catch((err) => {
                console.log(err)
            })
    },

    wordCheck: function(array, guess) {
        array.forEach(element => {
            if (guess === element) {
                element.replace('_', guess)
            }
        });
    }
};

module.exports = randomWord;