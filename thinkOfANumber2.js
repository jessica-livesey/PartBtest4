let randomNumber = Math.floor(Math.random() * 100) + 1;
let lastResult = document.querySelector('.lastResult');
let guesses = document.querySelector('.guesses');
let lowOrHi = document.querySelector('.lowOrHi');
let guessSubmit = document.querySelector('.guessSubmit');
let guessAgain = document.querySelector('.guessAgain');
let guessField = document.querySelector('.guessField');
let field_set2 = document.querySelector('.field_set2');
let guessCount = 0;
let tenMore = randomNumber + 10;
let tenLess = randomNumber - 10;
let thirtyMore = randomNumber + 30;
let thirtyLess = randomNumber - 30;

console.log(randomNumber);

guessField.focus();

function checkGuess() {
    let userGuess = Number(guessField.value);
    if(guessCount == 0) {
        guesses.textContent = 'Previous guesses: ';
    }
    guesses.textContent += userGuess + ' ';
    if(userGuess === randomNumber) {
        lastResult.textContent = 'Congratulations! You got it right!';
        lastResult.style.backgroundColor = 'green';
        field_set2.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
    } 
    else {
        if(userGuess >= tenLess && userGuess <= tenMore){
            lastResult.textContent = 'Wrong!';
            lastResult.style.backgroundColor = 'red';
            field_set2.style.backgroundColor = 'red';
            if(userGuess < randomNumber) {
                lowOrHi.textContent = 'Your guess was too low!';
            } 
            else if(userGuess > randomNumber) {
                lowOrHi.textContent = 'Your guess was too high!';
            }
        }
        else if(userGuess >= thirtyLess && userGuess < thirtyMore){
            lastResult.textContent = 'Wrong!';
            lastResult.style.backgroundColor = 'white';
            field_set2.style.backgroundColor = 'white';
            if(userGuess < randomNumber) {
                lowOrHi.textContent = 'Your guess was too low!';
            } 
            else if(userGuess > randomNumber) {
                lowOrHi.textContent = 'Your guess was too high!';
            }
            
        }
        else{
            lastResult.textContent = 'Wrong!';
            lastResult.style.backgroundColor = 'blue';
            field_set2.style.backgroundColor = 'blue';
            if(userGuess < randomNumber) {
                lowOrHi.textContent = 'Your guess was too low!';
            } 
            else if(userGuess > randomNumber) {
                lowOrHi.textContent = 'Your guess was too high!';
            }
        }
    }
    guessCount++;
    guessField.value = '';
    guessField.focus();
    document.getElementById("counter").innerHTML = 'You have had ' + guessCount + ' to guess it';
    
}

guessSubmit.addEventListener('click', checkGuess);
