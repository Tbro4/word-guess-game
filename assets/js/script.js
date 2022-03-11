//Variables that point to references in html (usind ID or Class) using document.querySelector

//this will need an eventListener
var startButton = document.querySelector(".start-button");
var wordDisplay = document.querySelector(".word-blanks");
//refers to span with total wins/losses
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
//this will need an eventListener
var resetButton = document.querySelector(".reset-button");
//displays numeric value of seconds left
var timerCount = document.querySelector(".timer-count");

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

//program chooses a word from the array wordList
function wordChooser() {
  var randomWord = wordList[Math.floor(Math.random() * wordList.length)];
  //   console.log(randomWord);
  return randomWord;
}

function init() {
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
      //   console.log(subStringMutated);
    }

    //check if any underscores remain. if not, display YOU WIN! If so, return?

    if (subStringMutated.includes("_")) {
      console.log("keep going!");
    } else {
      console.log("WINNER");
    }
  });
}

startButton.addEventListener("click", init);

//look at #15 Keyboard events for keydown info

//refer to #19 for the attributes for the displayed word will switch between the letter or a underline symbol
