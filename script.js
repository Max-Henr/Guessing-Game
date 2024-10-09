const form = document.querySelector('#form');
let error = document.querySelector('.shaking-box')
let playAgain = document.querySelector('.play-again')
let g = 0;
let randomNumber = Math.round(Math.random() * 100)
console.log(randomNumber)

form.addEventListener('submit', (e) => {
    e.preventDefault()
    let inputElement = document.querySelector('.number-input');
    let numberValue = parseFloat(inputElement.value);
    let guessBtn = document.querySelector('.guess')
    inputElement.value = '';
    error.style.display = 'none';
    if(numberValue < 1 || numberValue > 100){
        // document.querySelector('.output').innerHTML = "enter a valid number"
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
        // document.querySelector('.output').innerHTML = "enter a valid number"
        error.style.display = 'flex';
        return
    }
    g = g + 1
    document.querySelector('.guesses').innerHTML = g
})