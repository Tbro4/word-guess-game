//Only thing broken is if the start button is clicked while the timer is running, the timer does not reset and will run as many times as start has been clicked

//Variables that point to references in html (usind ID or Class) using document.querySelector

//this will need an eventListener
var startButton = document.querySelector(".start-button");
var wordDisplay = document.querySelector(".word-blanks");
//refers to span with total wins/losses
var wins = document.querySelector(".win");
var losses = document.querySelector(".lose");
//this will need an eventListener
var resetButton = document.querySelector(".reset-button");
//displays numeric value of seconds left
var timerCount = document.querySelector(".timer-count");

var secondsLeft = 10;
var win = localStorage.getItem("wins");
var loss = localStorage.getItem("losses");

wins.textContent = win;
losses.textContent = loss;
// var win = 0;
// var loss = 0;
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
//resets local storage of wins and losses
function reset() {
  win = 0;
  loss = 0;

  localStorage.setItem("wins", win);
  localStorage.setItem("losses", loss);
  wins.textContent = win;
  losses.textContent = loss;
}

//program chooses a word from the array wordList
function wordChooser() {
  var randomWord = wordList[Math.floor(Math.random() * wordList.length)];
  //   console.log(randomWord);
  return randomWord;
}

function init() {
  //reset secondsLeft to 10 and clear chosenWord and substrinngs
  secondsLeft = 10;
  chosenWord = "";
  subStringArray = "";
  subStringMutated = "";
  // console.log(chosenWord);
  // console.log(subStringArray);
  // console.log(subStringMutated);

  //start timer
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timerCount.textContent = secondsLeft;
    // $(".timer-count").text(secondsLeft);

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      wordDisplay.textContent = "YOU LOSE!!!";
      //adds a loss
      loss++;
      //displays updated losses
      losses.textContent = loss;
      localStorage.setItem("losses", loss);

      chosenWord = "";
      subStringArray = "";
      subStringMutated = "";
      //adds 10 secs back to the clock
      secondsLeft = 10;
    }
  }, 1000);

  //brings in the word chosen from wordChooser
  var chosenWord = wordChooser();
  console.log(chosenWord);
  //splits the word into its letters as an array (this will be used to compare against key presses)
  var subStringArray = chosenWord.split("");
  //   console.log(subStringArray);
  //identical substring that we can mutate to/from letters/underscores
  var subStringMutated = chosenWord.split("");
  //   console.log(subStringMutated);

  //loops through substring and changes each character to underscore (this mutates the array which is why we need an identical one to compare key presses to)
  for (var i = 0; i < subStringMutated.length; i++) {
    subStringMutated[i] = "_";
  }

  //displayd the rejoined word as all underscores
  wordDisplay.textContent = subStringMutated.join(" ");

  //starts to listen for key presses. IF the key matches a letter in the word, change the underscore back to that letter
  document.addEventListener("keydown", function (event) {
    var key = event.key.toLowerCase();
    // console.log(key);
    //for each key press, loop through and check if it matches a letter in the array
    for (var i = 0; i < subStringArray.length; i++) {
      //if it matches, change it back to its letter
      if (key === subStringArray[i]) {
        subStringMutated[i] = key;
        //display updated string
        wordDisplay.textContent = subStringMutated.join(" ");
      }
      // console.log(subStringMutated);
    }
    console.log(subStringMutated);

    //check if any underscores remain. if not, display YOU WIN! If so, return?
    //need a way to clear chosenWord
    if (!subStringMutated.includes("_") && !subStringMutated.includes("")) {
      clearInterval(timerInterval);
      wordDisplay.textContent = "WINNER!!";
      win++;
      wins.textContent = win;
      localStorage.setItem("wins", win);

      chosenWord = "";
      subStringArray = "";
      subStringMutated = "";
      // console.log(chosenWord);
      // console.log(subStringArray);
      // console.log(subStringMutated);
    }
  });
}

startButton.addEventListener("click", init);
resetButton.addEventListener("click", reset);
