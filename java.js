// ROCK PAPER SCISSORS LIZARD SPOCK

/* RULES: Scissors cut Paper, Paper covers Rock, Rock crushes Lizard, Lizard poisons Spock, Spock smashes Scissors
Scissors decapitate Lizard, Lizard eats Paper, Paper disproves Spock, Spock vaporizes Rock, Rock crushes Scissors */


/* - Make variables: userScore, computerScore, result, 5 choices.
   - There are eleven results(one of them is tie) and conditions(switch / if).
   - Create five addeventlisteners (one for each button).

   */

let userScore = 0;
let computerScore = 0;
const USER_SCORE = document.getElementById("userScore");
const COMP_SCORE = document.getElementById("computerScore");
const RESULT = document.getElementById("result");
const CHOICES = ["paper", "scissors", "rock", "lizard", "spock"];
const RESULTS = ["Scissors cut Paper", "Paper covers Rock", "Rock crushes Lizard",
    "Lizard poisons Spock", "Spock smashes Scissors", "Scissors decapitate Lizard",
    "Lizard eats Paper", "Paper disproves Spock", "Spock vaporizes Rock", "Rock crushes Scissors"];
const YOU_WIN = ", you win!";
const YOU_LOSE = ", you're a loser!";

// computer's random choice.
function getRandomChoice(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
function win(){
    userScore++;
    USER_SCORE.innerHTML = userScore;
   //console.log("win");
}
function lose(){
    computerScore++
    COMP_SCORE.innerHTML = computerScore;
    //console.log("lost");
}

// PAPER BTN
document.getElementById("btn-one").addEventListener("click", () => {
    let compRandomNum = getRandomChoice(5);
    let userChoice = CHOICES[0];
    let compChoice = CHOICES[compRandomNum];

    if (userChoice === compChoice) {
        RESULT.innerText = "You both choose paper, it's a tie!";
        // losing
    } else if (compChoice === CHOICES[1]) {
        RESULT.innerText = RESULTS[0] + YOU_LOSE;
        lose();
    }else if (compChoice === CHOICES[3]){
        RESULT.innerText = RESULTS[6] + YOU_LOSE;
        lose();
        //winning
    }else if (compChoice === CHOICES[4]){
        RESULT.innerText = RESULTS[7] + YOU_WIN;
        win();
    } // last option (else = only result)
    else{
        RESULT.innerText = RESULTS[1] + YOU_WIN;
        win();
    }

    console.log(userChoice);
    console.log(compChoice);

})
// SCISSORS BTN
document.getElementById("btn-two").addEventListener("click", () => {
    let compRandomNum = getRandomChoice(5);
    let userChoice = CHOICES[1];
    let compChoice = CHOICES[compRandomNum];

    if(userChoice === compChoice){
        RESULT.innerText = "You both choose scissors, it's a tie!";
        //WIN
    }else if(compChoice === CHOICES[0]){
        RESULT.innerText = RESULTS[0] + YOU_WIN
        win();
    }else if(compChoice === CHOICES[3]){
        RESULT.innerText = RESULTS[5] + YOU_WIN;
        win();
    } //LOSE
     else if(compChoice === CHOICES[4]){
         RESULT.innerText = RESULTS[4] + YOU_LOSE;
         lose()
    }else if(compChoice === CHOICES[2]){
         RESULT.innerText = RESULTS[9] + YOU_LOSE;
         lose()
    }

    console.log(userChoice);
    console.log(compChoice);
})
// ROCK BTN
document.getElementById("btn-three").addEventListener("click", ()=> {
    let compRandomNum = getRandomChoice(5);
    let userChoice = CHOICES[2];
    let compChoice = CHOICES[compRandomNum];

    if (userChoice === compChoice) {
        RESULT.innerText = "You both choose rock, it's a tie!";
    }    //LOSE
    else if (compChoice === CHOICES[0]){
        RESULT.innerText = RESULTS[1] + YOU_LOSE;
        lose()
    }else if (compChoice === CHOICES[4]){
        RESULT.innerText = RESULTS[8] + YOU_LOSE;
        lose()
    }    // WIN
     else if (compChoice === CHOICES[3]){
         RESULT.innerText = RESULTS[2] + YOU_WIN;
         win();
    }else if (compChoice === CHOICES[1]){
         RESULT.innerText = RESULTS[9] + YOU_WIN;
         win();
    }
    console.log(userChoice);
    console.log(compChoice);
})
// LIZARD
document.getElementById("btn-four").addEventListener("click", () =>{
    let compRandomNum = getRandomChoice(5);
    let userChoice = CHOICES[3];
    let compChoice = CHOICES[compRandomNum];

    if (userChoice === compChoice) {
        RESULT.innerText = "You both choose lizard, it's a tie!"
    }//LOSE
     else if (compChoice === CHOICES[2]){
         RESULT.innerText = RESULTS[2] + YOU_LOSE;
         lose()
    }else if (compChoice === CHOICES[1]){
         RESULT.innerText = RESULTS[5] + YOU_LOSE;
         lose()
    }// WIN
     else if (compChoice === CHOICES[4]){
         RESULT.innerText = RESULTS[3] + YOU_WIN;
        win()
    }else {
         RESULT.innerText = RESULTS[8] + YOU_WIN;
         win();
    }
     console.log(userChoice);
     console.log(compChoice);







})
// SPOCK
document.getElementById("btn-five").addEventListener("click", () =>{
    let compRandomNum = getRandomChoice(5);
    let userChoice = CHOICES[4];
    let compChoice = CHOICES[compRandomNum];

    if (userChoice === compChoice){
        RESULT.innerText = "You both choose Spock, it's a tie!"
    }// LOSE
    else if (compChoice === CHOICES[3]){
        RESULT.innerText = RESULTS[3] + YOU_LOSE;
        lose()
    }else if (compChoice === CHOICES[0]){
        RESULT.innerText = RESULTS[7] + YOU_LOSE
        lose()
    }//WIN
    else if (compChoice === CHOICES[1]){
        RESULT.innerText = RESULTS[4] + YOU_WIN;
        win()
    }else{
        RESULT.innerText = RESULTS[8] + YOU_WIN;
        win()
    }

    console.log(userChoice);
    console.log(compChoice);
})









