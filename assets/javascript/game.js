// variables with initial values
var win = 0;
var loss = 0;
var guessLeft = 9;
var guesses = [];
var computerChoice = [];

// define array of possible computer choices
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// computer makes random letter selection
var computerChoice = letters[Math.floor(Math.random() * letters.length)];
console.log(computerChoice[0]);

// function to log user's guess 
document.onkeydown = function(event) {
    var userGuess = event.key;
    guesses.push(userGuess);

    // compares user's guess against computer's choice and adds 1 to win or subtracts 1 from guesses left
    if (userGuess === computerChoice) {
        win++;
        guessLeft = 9;
        guesses.length = 0;
        computerChoice.length = 0;
    } else {
        guessLeft--;
    }
    // adds 1 to loss once guesses left = 0
    if (guessLeft === 0) {
        loss++;
        guessLeft = 9;
        guesses.length = 0;
        computerChoice.length = 0;
    }

    // updates page with wins, losses, etc.
    document.getElementById("win").innerHTML = "Wins: " + win;
    document.getElementById("loss").innerHTML = "Losses: " + loss;
    document.getElementById("guessLeft").innerHTML = "Guesses left: " + guessLeft;
    document.getElementById("guesses").innerHTML = "Your guesses so far: " + guesses;
}
