"use strict";

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".message").textContent = "No Number! ❌❌";
  } else if (guess === number) {
    document.querySelector(".number").textContent = number;
    document.querySelector(".message").textContent = "Correct Number! 🎉🎉🥳";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess > number) {
    if (score == 0) {
      document.querySelector(".message").textContent = "You Lost the game!";
    } else {
      document.querySelector(".message").textContent =
        "Think Smaller Number..!";
      score--;
      document.querySelector(".score").textContent = score;
      document.querySelector(".guess").value = "";
    }
  } else if (guess < number) {
    if (score == 0) {
      document.querySelector(".message").textContent = "You Lost the game!";
    } else {
      document.querySelector(".message").textContent = "Think Bigger Number..!";
      score--;
      document.querySelector(".score").textContent = score;
      document.querySelector(".guess").value = "";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "💀";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
