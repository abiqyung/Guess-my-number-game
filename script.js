"use strict";
// --- First try ---
// const guessNumber = Math.trunc(Math.random() * 20) + 1;

// const guessInput = document.querySelector(".guess").value;
// const currentMassage = document.querySelector('.message').value;
// const currentSign = document.querySelector('.number').value;
// const theButton = document.querySelector('.check');
// const highscore = document.querySelector('.highscore').value;
// const score = document.querySelector('.score').value;
// const titleGame = document.querySelector('.header');

// theButton.addEventListener('click', function () {
//     if (guessInput = guessNumber) {
//         currentSign = guessNumber;
//         currentMassage = "You Win!";
//         titleGame ="Congratss!!";
//         if (score > highscore) {
//             highscore = score;
//         } else {
//             highscore = highscore;
//         }
//     } else if (guessInput > guessNumber && score > 1) {
//         currentMassage = "Too High!";
//         titleGame ="Try Again!";
//         score = score - 1;
//     } else if (guessInput < guessNumber && score > 1) {
//         currentMassage = "Too Low!";
//         titleGame = "Try Again!";
//         score = score - 1;
//     } else (guessInput != guessNumber && score < 1 ) {
//         currentMassage = "You Lose!";
//         titleGame = "Try Again!";
//         score = 0;
//     }
// ;
// }
// --- Second Try ---

let score = 20;
let highscore = 0;
let guessNumber = Math.trunc(Math.random() * 20) + 1;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guessInput = Number(document.querySelector(".guess").value);
  if (!guessInput) {
    displayMessage("There is no number!");
  } else if (guessInput === guessNumber) {
    displayMessage("You Win!");
    document.querySelector(".number").textContent = guessNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guessInput !== guessNumber) {
    if (score > 1) {
      displayMessage(guessInput > guessNumber ? "Too High!" : "Too Low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You Loose!");
      score = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  guessNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").textContent = "";
});
