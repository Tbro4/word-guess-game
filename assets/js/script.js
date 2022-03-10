//Variables that point to references in html (usind ID or Class) using document.querySelector

//this will need an eventListener
var startButton = document.querySelector("start-button");
var wordDisplay = document.querySelector("word-blanks");
//refers to span with total wins/losses
var win = document.querySelector("win");
var lose = document.querySelector("lose");
//this will need an eventListener
var resetButton = document.querySelector("reset-button");
//displays numeric value of seconds left
var timerCount = document.querySelector("timer-count");

var wins = 0;
var losses = 0;
var wordList = [
  "guitar",
  "piano",
  "mandolin",
  "bass",
  "drums",
  "microphone",
  "banjo",
  "ukulele",
  "violin",
  "trumpet",
  "flute",
];
var chosenWord;
