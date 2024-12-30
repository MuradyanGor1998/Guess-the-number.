"use strict";

const body = document.querySelector("body");
// buttons
const again = document.querySelector(".again");
const stop = document.querySelector("#stop");
const check = document.querySelector(".check");
// in process
const number = document.querySelector(".number");
const guessInput = document.querySelector(".guess");
const message = document.querySelector("#message");
const timer = document.querySelector("#timer");
// score
const lowscore = document.querySelector(".highscore"); //0
const highscore = document.querySelector(".score"); //20
/// random number
let randomNum = Math.floor(1 + Math.random(number) * 20);
console.log(randomNum);
// scores
let minScore = 0;
let maxScores = 20;
let isGame = true;

function minMax() {
  const lowscore = (document.querySelector(".highscore").textContent =
    minScore); //0
  const highscore = (document.querySelector(".score").textContent = maxScores); //20
}

function equalScores() {
  if (minScore == maxScores) {
    message.textContent = "You Lose !";
    body.style.backgroundColor = "#FF1E00";
    isGame = false;
  }
}
// lowscore
again.addEventListener("click", () => {
  window.location.reload();
});

//stop timer
stop.addEventListener("click", () => {});

//guess number logic
check.addEventListener("click", () => {
  if (isGame) {
    if (guessInput.value > 0 && guessInput.value <= 20) {
      if (guessInput.value == randomNum) {
        number.innerHTML = guessInput.value;
        message.textContent = "You Win  !";
        body.style.backgroundColor = "#59CE8F";
        equalScores();
        maxScores--;
        minScore++;
        minMax();
        isGame = false;
      } else if (guessInput.value < randomNum) {
        guessInput.value = "";
        message.textContent = "My number Is Hight !";
        equalScores();
        minScore++;
        maxScores--;
        minMax();
      } else {
        guessInput.value = "";
        message.textContent = "My number Is Low  !";
        equalScores();
        maxScores--;
        minScore++;
        minMax();
      }
    } else {
      return false;
    }
  }
});

// timer
function today() {
  const date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  if (hh < 10) {
    hh = `0${hh}`;
  }
  if (mm < 10) {
    mm = `0${mm}`;
  }
  if (ss < 10) {
    ss = `0${ss}`;
  }
  const formattedTime = `${hh}:${mm}:${ss}`;
  timer.innerHTML = formattedTime;
}
let timerLogic = true;
let intervalId;

function startTimer() {
  today();
  intervalId = setInterval(today, 1000);
}
startTimer();
function stopTimer() {
  clearInterval(intervalId);
}

stop.addEventListener("click", function () {
  if (timerLogic) {
    stopTimer();
    timerLogic = false;
  } else {
    startTimer();
    timerLogic = true;
  }
});
