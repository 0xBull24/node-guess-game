# Command Line Word Guessing Game

This game grabs random words using an api and ask the user to guess letters of that word.

Win / Lose Condition - All of the letters of the word are guessed correctly before the number of guess is exceeded, otherwise you can choose to play again or exit

## Prerequisites

For this app to run you will first need to make sure you have [Node with NPM](https://nodejs.org/en/) installed on your machine. Once it is downloaded you can run the code below from a terminal to make sure you have it installed properly.

```bash
node -v
```

### Installing

To install the files needed to run the game by cloning the repo then running the following command from the root folder of the clone

```bash
npm install
```

## Running the application

Run the following command to actually start the game from the root folder

```node
node \assets\js\app.js
```

or you can navigate to the `\assets\js\` folder and run

```node
node app.js
```

## Demo

![Denmo](./assets/images/hangmandemo.gif)

I'm terrible with guessing these words

## Built With

* [Axios](https://www.npmjs.com/package/axios) - HTTP Request
* [Inquirer](https://www.npmjs.com/package/inquirer) - CLI Prompts

## Authors

* **Darron Biles** - [Me](https://github.com/DBiles)