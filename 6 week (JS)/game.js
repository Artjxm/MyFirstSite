   var words = ['pasta'/*"fish", "axe", "teapot", "sunflower",
     "watermelon", "star", "bug", "pickles", "sauce", "crab"*/]
  var word = words[Math.floor(Math.random() * words.length)];
  var answer = [];
  for (var i = 0; i < word.length; ++i) {
    answer[i] = '_';
  }

  var lives = word.length;
  var unsolvedLetters = word.length;

  while (lives > 0) {
    if (!unsolvedLetters)
      break;
    alert("Hidden word: " + answer.join(' ') +
      " lives left: " + lives);
    var userInput = prompt("Make a guess or press" +
      " 'Cancel' to stop the game");
    if (userInput === null)
      break;
    else if (userInput.length !== 1) {
      alert('Input only 1 letter, please!');
      --lives;
    }
    // 1 letter input
    else {
      var letterGuessed = false;
      // hidden word iteration
      for (var j = 0; j < word.length; ++j) {
        if (userInput === answer[j] && letterGuessed) {
          alert("This letter is already guessed!");
          letterGuessed = false;
        }
        else if (userInput === word[j]) {
          answer[j] = userInput;
          letterGuessed = true;
          --unsolvedLetters;
          if (!unsolvedLetters) {
            alert("YOU WON!");
            break;
          }
        }
      }
      if (!letterGuessed) {
        --lives;
        alert("Wrong letter, please try again");
      }
    }
  }
  if (!lives)
    alert("You have no lives left!");
  alert("Thank you for playing the game! The hidden word" +
    " was " + word);
