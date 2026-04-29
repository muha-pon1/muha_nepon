const knopka = document.querySelector('.knopka')
const input = document.querySelector('.guessInput')
const message = document.querySelector('message')


let randomNumber = Math.floor(Math.random() * 100) + 1;
let gameOver = false;


knopka.addEventListener("click", () => {
   if (gameOver) return

   const userGuess = Number(input.value);

   if (!userGuess || userGuess < 1 || userGuess > 100) {
    message.textContent = "Введи число від 1 до 100";
    return;    
   }

   if (userGuess === randomNumber) {
    message.textContent = 'Вгадав';
    endGame();
   } else if (userGuess < randomNumber) {
    message.textContent = 'Більше';
   } else {
    message.textContent = 'Меньше';
   }

 input.value = ""
})


input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        knopka.click()
    }
})
