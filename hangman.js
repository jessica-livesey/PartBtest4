let availableLetters;
let sayings; 
let guessInput;
let guess;
let guessButton;
let lettersGuessed;
let lettersMatched;
let output;
let man;
let letters;
let wrongGuesses;
let currentWord;
let numLettersMatched;
let messages;
let guesses;

function setup() {

    /* start config options */
    availableLetters = "abcdefghijklmnopqrstuvwxyz";
    wrongGuesses = 0;
    document.getElementById("hmImg").src = 'Hangman-0.png';
    sayings = ["best of both worlds",
            "cry over spilt milk",
            "elvis has left the building",
            "feel a bit under the weather", 
            "give the benefit of the doubt",
            "hit the nail on the head",
            "kill two birds with one stone",
            "on the ball",
            "piece of cake",
            "your guess is as good as mine"];
    /*Creates an array and creates objects within the array*/
    messages = {
        win: 'You win!',
        lose: 'Game over!',
        guessed: ' already guessed, please try again...',
        validLetter: 'Please enter a letter from A-Z'
    };
    

    
    lettersGuessed = lettersMatched = '';
    numLettersMatched = 0;

    /* choose a word */
    currentWord = sayings[Math.floor(Math.random() * sayings.length)];

    output = document.getElementById("output");
    man = document.getElementById("man");
    guessInput = document.getElementById("letter");


    man.innerHTML = 'You have had ' + wrongGuesses + ' wrong guesses';
    document.getElementById('currentletter').innerHTML = 'Previous Guesses: ' + lettersGuessed + ' ';
    output.innerHTML = '';    

    document.getElementById("letter").value = '';
    
    

    /* make sure guess button is enabled */
    guessButton = document.getElementById("guess");
    guessInput.style.display = 'inline';
    guessButton.style.display = 'inline';

    /* set up display of letters in current word */
    letters = document.getElementById("letters");
    letters.innerHTML = '<li class="current-word"><strong>Current word:<\strong></li><br>';

    let letter;
    let i;
    for (i = 0; i < currentWord.length; i++) {
        letter = '<li class="letter letter' + currentWord.charAt(i).toUpperCase() + '">' + currentWord.charAt(i).toUpperCase() + '</li>';
        letters.insertAdjacentHTML('beforeend', letter);
    }
    
}

function gameOver(win) {
    if (win) {
        output.innerHTML = messages.win;
        output.classList.add('win');
    } else {
        output.innerHTML = messages.lose;
        output.classList.add('error');
    }

    guessInput.style.display = guessButton.style.display = 'none';
    guessInput.value = '';
}

/* Start game - should ideally check for existing functions attached to window.onload */
window.onload = setup();

/* buttons */
document.getElementById("restart").onclick = setup;

/* reset letter to guess on click */
guessInput.onclick = function () {
    this.value = '';
};

/* main guess function when user clicks #guess */
document.getElementById('hangman').onsubmit = function (e) {
    if (e.preventDefault) e.preventDefault();
    output.innerHTML = '';
    output.classList.remove('error', 'warning');
    guess = guessInput.value;

    /* does guess have a value? if yes continue, if no, error */
    if (guess) {
        
        /* is guess a valid letter? if so carry on, else error */
        if (availableLetters.indexOf(guess) > -1) {
            /* has it been guessed (missed or matched) already? if so, abandon & add notice */
            if ((lettersMatched && lettersMatched.indexOf(guess) > -1) || (lettersGuessed && lettersGuessed.indexOf(guess) > -1)) {
                output.innerHTML = '"' + guess.toUpperCase() + '"' + messages.guessed;
                output.classList.add("warning");
            }
            /* does guess exist in current word? if so, add to letters already matched, if final letter added, game over with win message */
            else if (currentWord.indexOf(guess) > -1) {
                var lettersToShow;
                lettersToShow = document.querySelectorAll(".letter" + guess.toUpperCase());

                for (var i = 0; i < lettersToShow.length; i++) {
                    lettersToShow[i].classList.add("correct");
                }
                
                
                /* check to see if letter appears multiple times */
                for (var j = 0; j < currentWord.length; j++) {
                    if (currentWord.charAt(j) === guess) {
                        numLettersMatched += 1;
                    }
                }

                lettersMatched += guess;
                let withoutSpace = currentWord.replace(/ /g,"");
                console.log(withoutSpace)
                if (numLettersMatched === withoutSpace.length) {
                    gameOver(true);

                }
            }
            /* guess doesn't exist in current word and hasn't been guessed before, add to lettersGuessed, reduce wrongGuesses & update user */
            else {
                lettersGuessed += guess;
                wrongGuesses++;
                man.innerHTML = 'You have had ' + wrongGuesses + ' wrong guesses';
                document.getElementById('currentletter').innerHTML = 'Previous Guesses: ' + lettersGuessed + ' ';
                /*if (wrongGuesses === 0) */
                if (wrongGuesses == 1) {
                    document.getElementById("hmImg").src = 'Hangman-1.png';
                }
                else if (wrongGuesses == 2) {
                    document.getElementById("hmImg").src = 'Hangman-2.png';
                }
                else if (wrongGuesses == 3) {
                    document.getElementById("hmImg").src = 'Hangman-3.png';
                }
                else if (wrongGuesses == 4) {
                    document.getElementById("hmImg").src = 'Hangman-4.png';
                }
                else if (wrongGuesses == 5) {
                    document.getElementById("hmImg").src = 'Hangman-5.png';
                }
                else if (wrongGuesses == 6) {
                    document.getElementById("hmImg").src = 'Hangman-6.png';
                    gameOver();
                }
            
            }
        }
        /* not a valid letter, error */
        else {
            output.classList.add('error');
            output.innerHTML = messages.validLetter;
        }
    }
    /* no letter entered, error */
    else {
        output.classList.add('error');
        output.innerHTML = messages.validLetter;
    }
    return false;
};

function hintFunction() {
    alert("HINT! \n The dashes that aren't level are where the spaces are in  the saying");
}
