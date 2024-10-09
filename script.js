const form = document.querySelector('#form');
const mode = document.querySelector('.mode')
const playAgain = document.querySelector('.play-again')
let error = document.querySelector('.shaking-box')
let g = 0;
let i = 0
let randomNumber = Math.round(Math.random() * 100)
let hardMode = false
console.log(randomNumber)

form.addEventListener('submit', (e) => {
    e.preventDefault()
    let inputElement = document.querySelector('.number-input');
    let numberValue = parseFloat(inputElement.value);
    let guessBtn = document.querySelector('.guess')
    inputElement.value = '';
    error.style.display = 'none';
    if(numberValue < 1 || numberValue > 100){
        error.style.display = 'flex';
        return
    }
    if(!isNaN(numberValue)){
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
        }
    }
    else{
        error.style.display = 'flex';
        return
    }
    g = g + 1
    document.querySelector('.guesses').innerHTML = g
    i = i + 1
    if (hardMode && i > 4) {
        document.querySelector('.output').innerText = `Wrong! The number was ${randomNumber}`;
        inputElement.disabled = true;
        guessBtn.disabled = true;
        playAgain.style.display = 'block';
    }
})

mode.addEventListener('click', (e) => {
    e.preventDefault()
    if(hardMode){
        mode.innerHTML = 'Switch to Hard Mode'
        mode.style.backgroundColor = 'red'
        document.querySelector('.description').innerHTML = 'Make a guess between 1 - 100'
        hardMode = false
    }
    else{
        mode.innerHTML = 'Switch to Easy Mode'
        mode.style.backgroundColor = '#3498db'
        document.querySelector('.description').innerHTML = 'Make a guess between 1 - 100 </br> you only have 5 tries'
        hardMode = true
    }
})

playAgain.addEventListener('click', (e) =>{
    e.preventDefault()
    location.reload()
})
