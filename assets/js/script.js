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
  console.log(subStringArray);
  //identical substring that we can change
  var subStringMutated = chosenWord.split("");
  console.log(subStringMutated);

  //loops through substring and changes each character to underscore (HOWEVER, THIS IS MUTATING THE ARRAY, so how can we compare keystrokes?)
  for (var i = 0; i < subStringMutated.length; i++) {
    subStringMutated[i] = "_";
  }

  //displayd the rejoined word as all underscores
  wordDisplay.textContent = subStringMutated.join(" ");

  //starts to listen for key presses. IF the key matches a letter in the word, change the underscore back to that letter
  document.addEventListener("keydown", function (event) {
    var key = event.key.toLowerCase();
    console.log(key);
    for (var i = 0; i < subStringArray.length; i++) {
      if (key === subStringArray[i]) {
        subStringMutated[i] = key;
        wordDisplay.textContent = subStringMutated.join(" ");
      }
    }
  });
}

startButton.addEventListener("click", init);

//look at #15 Keyboard events for keydown info

//refer to #19 for the attributes for the displayed word will switch between the letter or a underline symbol
