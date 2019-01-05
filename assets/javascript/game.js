// default values
var win = 0;
var loss = 0;
var guessLeft = 9;

// define letters for computer
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// computer makes randam letter selection
var computerChoice = letters[Math.floor(Math.random() * letters.length)];
console.log(computerChoice);

// record user's key entry and add guessed letter to Your guesses so far
document.onkeypress = function(event) {
    var userGuess = event.key;

    if(userGuess === computerChoice){
        win++;
    }else{
        guessLeft--;
    }

    if(guessLeft === 0){
        loss++
    }

    document.getElementById('win').innerHTML = "Wins: " + win;
    document.getElementById('loss').innerHTML = "Losses: " + loss;
    document.getElementById('guessLeft').innerHTML = "Guesses left: " + guessLeft;

}

// compare user guess to computer selection x 9

// decrement total guesses (9) by 1 for each key entry

// add 1 to wins if user guesses computer's selection or add 1 to losses if user didn't guess correctly