"use strict";
// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "Correct number";

// document.querySelector(".number").textContent = 15;
// document.querySelector(".score").textContent = 10;

// document.querySelector('.guess').value = 50;
// console.log(document.querySelector(".guess").value)

// main code
let secretnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// this function for code refactring
const displaymassage = function(message){
  document.querySelector(".message").textContent = message;
}

document.querySelector(".check").addEventListener("click", function () {
  var guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  //  When there is no input
  if (!guess) {
    // document.querySelector(".message").textContent = "No number";
    displaymassage("No number")

    //  When player wins
    // code refactring
  } else if (guess === secretnumber) {
    // document.querySelector(".message").textContent = " Correct Number";
    displaymassage('Correct Number')
    document.querySelector(".number").textContent = secretnumber;

    // Manipulating CSS Styles
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if(score > highscore){
      highscore = score;
      document.querySelector('.highscore').
      textContent = highscore;
    }
    // When guess is wrong
  } else if (guess !== secretnumber ){
    if (score > 1) {
      // document.querySelector(".message").textContent
      // = guess > secretnumber ? "Too high!" : "Too Low!";
      displaymassage(guess > secretnumber ? "Too high!" : "Too Low!")
      score = score - 1;
      document.querySelector(".score").textContent = score;
    } else {
      // document.querySelector(".message").textContent = " You lost the game";
      displaymassage(" You lost the game")
      document.querySelector(".score").textContent = 0;
    }
  }

    // When game is too high
  // }else if (guess > secretnumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "Too high!";0;
  //     score = score - 1;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = " You lost the game";
  //     document.querySelector(".score").textContent = 0;
  //   }

  //   // When game is too low
  // } else if (guess < secretnumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "Too Low!";
  //     score = score - 1;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = " You lost the game";
  //     document.querySelector(".score").textContent = 0;
  //   }
  // }
});

// for replay game
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretnumber = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector('.message').textContent = 
  // "Start guessing";
  displaymassage("Start guessing....")
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector("body").style.
  backgroundColor = "#222";
  document.querySelector(".number").style.width = 
  "15rem";
});

// ////////////////////////////////////////////////////////////
