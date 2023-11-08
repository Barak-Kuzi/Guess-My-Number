const resetBtn = document.querySelector("#resetBtn");
const checkBtn = document.querySelector("#checkBtn");
const guessNumber = document.querySelector("#theGuess");
const scoreText = document.querySelector("#score");
const highScoreText = document.querySelector("#highScore");
const messageText = document.querySelector("#message");
const secretNumberText = document.querySelector("#secretNumber");
const minNumber = 1;
const maxNumber = 20;
let highScore = 0;
let currentScore = maxNumber;
let secretNumber = randomNumber();
let myGuess;
let running = false;
let alreadyWon = false;

checkBtn.addEventListener("click", checkGuessNumber);
resetBtn.addEventListener("click", playAgain);

function randomNumber(){
    return Math.trunc((Math.random() * maxNumber) + minNumber);
}

function checkGuessNumber(){
    myGuess = guessNumber.value;
    if(!myGuess){
        messageText.textContent = "No input";
    }
    else{
        running = true;
    }
    if(running && !alreadyWon){
        switch (true){
            case(myGuess < secretNumber):
                currentScore -= 1;
                messageText.textContent = "Too low";
                scoreText.textContent = currentScore;
                break;
            case(myGuess > secretNumber):
                currentScore -= 1;
                messageText.textContent = "Too High";
                scoreText.textContent = currentScore;
                break;
            case(myGuess == secretNumber):
                messageText.textContent = "You are Correct!";
                secretNumberText.textContent = secretNumber;
                highScoreText.textContent = currentScore;
                highScore = currentScore;
                running = false;
                alreadyWon = true;
                break;
        }
    }
    else if(running && alreadyWon){
        messageText.textContent = `You have already won!
        If you want to continue, press "Play Again"`;
    }
}

function playAgain(){
    secretNumber = randomNumber();
    currentScore = maxNumber;
    guessNumber.value = "";
    messageText.textContent = `Start guessing..😜`;
    secretNumberText.textContent = "?";
    running = false;
    alreadyWon = false;
}
