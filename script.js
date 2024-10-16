const form = document.querySelector('#form');
const mode = document.querySelector('.mode')
const playAgain = document.querySelector('.play-again')
const prevGuessDiv = document.querySelector('.prev-guesses')
let error = document.querySelector('.shaking-box')
const inputElement = document.querySelector('.number-input');
const guessBtn = document.querySelector('.guess')
let g = 0;
let i = 0
let randomNumber = Math.round(Math.random() * 100)
let hardMode = false

form.addEventListener('submit', (e) => {
    e.preventDefault()
    let numberValue = parseFloat(inputElement.value);
    error.style.display = 'none';
    g = g + 1
    document.querySelector('.guesses').innerHTML = g
    if(!isNaN(numberValue) && numberValue > -1 && numberValue < 101){
        const newGuess = creatPreviousGuess(numberValue)
        prevGuessDiv.appendChild(newGuess)
        if(numberValue < randomNumber){
            document.querySelector('.output').innerText = "Higher";
        }
        else if(numberValue > randomNumber){
            document.querySelector('.output').innerText = "Lower";
        }
        else{
            document.querySelector('.output').innerText = "You Guessed Right";
            inputElement.disabled = true;
            guessBtn.disabled = true;
            playAgain.style.display = 'block'
            return
        }
    }
    else{
        error.style.display = 'flex';
        return
    }
    i = i + 1
    if (hardMode && i > 4) {
        document.querySelector('.output').innerText = `Wrong! The number was ${randomNumber}`;
        inputElement.disabled = true;
        guessBtn.disabled = true;
        playAgain.style.display = 'block';
    }
    inputElement.value = '';
})

const prevGuess = document.createElement('ul')
prevGuess.classList.add('prev-guess')
function creatPreviousGuess(value){
    
    const guess = document.createElement('li')
    guess.textContent = value

    prevGuess.appendChild(guess)

    return prevGuess
}

function resetGame(){
    g = 0;
    i = 0;
    randomNumber = Math.round(Math.random() * 100);
    document.querySelector('.guesses').innerHTML = 0
    const guessList = document.querySelectorAll('.prev-guess li');
    guessList.forEach((guessItem) => {
        guessItem.remove();
    });
    inputElement.disabled = false;
    guessBtn.disabled = false;
    playAgain.style.display = 'none';
    document.querySelector('.output').innerText = "Make a Guess";
    prevGuessDiv.innerHTML = '';
    inputElement.value = '';
    console.log(randomNumber)
}

mode.addEventListener('click', (e) => {
    e.preventDefault()
    if(hardMode){
        document.querySelector('.switch').innerHTML = 'Switch to Hard Mode'
        mode.style.backgroundColor = 'red'
        document.querySelector('.description').innerHTML = 'Make a guess between 0 - 100'
        hardMode = false
    }
    else{
        document.querySelector('.switch').innerHTML = 'Switch to Easy Mode'
        mode.style.backgroundColor = '#3498db'
        document.querySelector('.description').innerHTML = 'Make a guess between 0 - 100 </br> you only have 5 tries'
        hardMode = true
    }
    resetGame()
})

playAgain.addEventListener('click', (e) =>{
    e.preventDefault()
    resetGame()
})
