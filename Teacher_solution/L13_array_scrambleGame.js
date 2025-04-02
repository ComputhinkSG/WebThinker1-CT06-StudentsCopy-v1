/////////////////////////////////////////////////////////
// Recap 1:

// let inputField;
// let outputText = "";
// let submitButton;

// function setup() {
//     createCanvas(600, 400);

//     // Create input field
//     inputField = createInput("Enter text here");
//     inputField.position(width / 2 - 100, height / 2 - 50);
//     inputField.size(200, 40); // Set size
//     inputField.style("font-size", "20px"); // Set font size

//     // Create button
//     submitButton = createButton("Display");
//     submitButton.position(width / 2 - 50, height / 2 + 10);
//     submitButton.size(100, 30); // Set size
//     submitButton.style("font-size", "16px"); // Set font size
//     submitButton.mousePressed(displayText);
// }

// function draw() {
//     background(220);
//     textSize(24);
//     textAlign(CENTER, CENTER);
//     text(outputText, width / 2, height / 2 + 80);
// }

// function displayText() {
//     outputText = inputField.value();
// }

/////////////////////////////////////////////////////////
// Task 1: Input & Buttons set up

// let words = [
//     "elephant", "backpack", "keyboard", "hospital", "sunlight",
//     "raincoat", "notebook", "shoulder", "football", "bathroom"];

// let hiddenWord;
// let inputBox, submitButton, scrambleButton;
// let message = "";
// let score = 0;
// let streak = 0;
// let maxStreak = 0;

// function setup() {
//     createCanvas(600, 400);
//     textSize(24);
//     textAlign(CENTER, CENTER);

//     pickNewWord();

//     // Create input field
//     inputBox = createInput();
//     inputBox.size(150, 30);
//     inputBox.style("font-size", "20px");
//     inputBox.position(width / 2 - 80, height / 2 + 20);

//     // Create submit button
//     submitButton = createButton("Submit");
//     submitButton.position(width / 2 + 100, height / 2 + 23);
//     submitButton.size(150, 30);
//     submitButton.style("font-size", "20px");

//     // create scramble again button
//     scrambleButton = createButton("Rescramble");
//     scrambleButton.position(width/2 -250, height / 2 +23);
//     scrambleButton.size(150,30);
//     scrambleButton.style("font-size", "20px");
// }

// function draw() {
//     background(220);

//     fill(0);
//     text("Word Scramble Game!", width / 2, height / 6);
//     text("Random Word: " + hiddenWord.toUpperCase(), width / 2, height / 4+50);
//     text("Score: " + score, width / 2, height - 100);
//     text("Streak: " + streak + " (Max: " + maxStreak + ")", width / 2, height - 70);
//     text(message, width / 2, height - 40);
// }

// function pickNewWord() {
//     hiddenWord = random(words);
// }

/////////////////////////////////////////////////////////
// Task 2: Scramble Word

// let words = [
//     "elephant", "backpack", "keyboard", "hospital", "sunlight",
//     "raincoat", "notebook", "shoulder", "football", "bathroom"];

// let hiddenWord, scrambledWord;
// let inputBox, submitButton, scrambleButton;
// let message = "";
// let score = 0;
// let streak = 0;
// let maxStreak = 0;


// function setup() {
//     createCanvas(600, 400);
//     textSize(24);
//     textAlign(CENTER, CENTER);

//     pickNewWord();

//     // Create input field
//     inputBox = createInput();
//     inputBox.size(150, 30);
//     inputBox.style("font-size", "20px");
//     inputBox.position(width / 2 - 80, height / 2 + 20);

//     // Create submit button
//     submitButton = createButton("Submit");
//     submitButton.position(width / 2 + 100, height / 2 + 23);
//     submitButton.size(150, 30);
//     submitButton.style("font-size", "20px");

//      // create scramble again button
//     scrambleButton = createButton("Rescramble");
//     scrambleButton.position(width/2 -250, height / 2 +23);
//     scrambleButton.size(150,30);
//     scrambleButton.style("font-size", "20px");
// }

// function draw() {
//     background(220);

//     fill(0);
//     text("Word Scramble Game!", width / 2, height / 6);
//     text("Scrambled Word: " + scrambledWord.toUpperCase(), width / 2, height / 4+50);
//     text("Score: " + score, width / 2, height - 100);
//     text("Streak: " + streak + " (Max: " + maxStreak + ")", width / 2, height - 70);
//     text(message, width / 2, height - 40);
// }

// // Shuffles a word's characters randomly.
// function shuffleWord(word) {
//     let arr = word.split('');
//     for (let i = arr.length - 1; i > 0; i--) {
//         let j = floor(random(i + 1));
//         [arr[i], arr[j]] = [arr[j], arr[i]];
//     }
//     return arr.join('');
// }

// // Picks and shuffles a new word.
// function pickNewWord() {
//     hiddenWord = random(words);
//     scrambledWord = shuffleWord(hiddenWord);
// }

/////////////////////////////////////////////////////////
// Task 3: Scramble Again

// let words = [
//     "elephant", "backpack", "keyboard", "hospital", "sunlight",
//     "raincoat", "notebook", "shoulder", "football", "bathroom"
// ];

// let hiddenWord, scrambledWord;
// let inputBox, submitButton, scrambleButton;
// let message = "";
// let score = 0;
// let streak = 0;
// let maxStreak = 0;

// function setup() {
//     createCanvas(600, 400);
//     textSize(24);
//     textAlign(CENTER, CENTER);

//     pickNewWord();

//     // Create input field
//     inputBox = createInput();
//     inputBox.size(150, 30);
//     inputBox.style("font-size", "20px");
//     inputBox.position(width / 2 - 80, height / 2 + 20);

//     // Create submit button
//     submitButton = createButton("Submit");
//     submitButton.position(width / 2 + 100, height / 2 + 23);
//     submitButton.size(150, 30);
//     submitButton.style("font-size", "20px");
//     // submitButton.mousePressed(checkGuess);

//     // create scramble again button
//     scrambleButton = createButton("Rescramble");
//     scrambleButton.position(width / 2 - 250, height / 2 + 23);
//     scrambleButton.size(150, 30);
//     scrambleButton.style("font-size", "20px");
//     scrambleButton.mousePressed(scrambleAgain);
// }

// function draw() {
//     background(220);

//     fill(0);
//     text("Word Scramble Game!", width / 2, height / 6);
//     text("Scrambled Word: " + scrambledWord.toUpperCase(), width / 2, height / 4 + 50);
//     text("Score: " + score, width / 2, height - 100);
//     text("Streak: " + streak + " (Max: " + maxStreak + ")", width / 2, height - 70);
//     text(message, width / 2, height - 40);
// }

// // Shuffles a word's characters randomly.
// function shuffleWord(word) {
//     let arr = word.split('');
//     for (let i = arr.length - 1; i > 0; i--) {
//         let j = floor(random(i + 1));
//         [arr[i], arr[j]] = [arr[j], arr[i]];
//     }
//     return arr.join('');
// }

// // Picks and shuffles a new word.
// function pickNewWord() {
//     hiddenWord = random(words);
//     scrambledWord = shuffleWord(hiddenWord);
// }

// function scrambleAgain() {
//     scrambledWord = shuffleWord(hiddenWord);
// }

/////////////////////////////////////////////////////////
// Task 4: Check Guess

// let words = [
//     "elephant", "backpack", "keyboard", "hospital", "sunlight",
//     "raincoat", "notebook", "shoulder", "football", "bathroom"];

// let hiddenWord, scrambledWord;
// let inputBox, submitButton, scrambleButton;
// let message = "";
// let attempts = 0;
// let score = 0;
// let streak = 0;
// let maxStreak = 0;

// function setup() {
//     createCanvas(600, 400);
//     textSize(24);
//     textAlign(CENTER, CENTER);

//     pickNewWord();

//     // Create input field
//     inputBox = createInput();
//     inputBox.size(150, 30);
//     inputBox.style("font-size", "20px");
//     inputBox.position(width / 2 - 80, height / 2 + 20);

//     // Create submit button
//     submitButton = createButton("Submit");
//     submitButton.position(width / 2 + 100, height / 2 + 23);
//     submitButton.size(150, 30);
//     submitButton.style("font-size", "20px");
//     // submitButton.mousePressed(checkGuess);

//     // create scramble again button
//     scrambleButton = createButton("Rescramble");
//     scrambleButton.position(width/2 -250, height / 2 +23);
//     scrambleButton.size(150,30);
//     scrambleButton.style("font-size", "20px");
//     scrambleButton.mousePressed(scrambleAgain);
// }

// function draw() {
//     background(220);

//     fill(0);
//     text("Word Scramble Game!", width / 2, height / 6);
//     text("Scrambled Word: " + scrambledWord.toUpperCase(), width / 2, height / 4+50);
//     text("Score: " + score, width / 2, height - 100);
//     text("Streak: " + streak + " (Max: " + maxStreak + ")", width / 2, height - 70);
//     text(message, width / 2, height - 40);
// }

// // Shuffles a word's characters randomly.
// function shuffleWord(word) {
//     let arr = word.split('');
//     for (let i = arr.length - 1; i > 0; i--) {
//         let j = floor(random(i + 1));
//         [arr[i], arr[j]] = [arr[j], arr[i]];
//     }
//     return arr.join('');
// }

// // Picks and shuffles a new word.
// function pickNewWord() {
//     hiddenWord = random(words);
//     scrambledWord = shuffleWord(hiddenWord);
// }

// function scrambleAgain(){
//     scrambledWord = shuffleWord(hiddenWord);
// }

// function checkGuess() {
//     let guess = inputBox.value().toLowerCase();
//     attempts++;

//     if (guess === hiddenWord) {
//         message = "Correct! Moving to next word!";
//         hidx = words.indexOf(hiddenWord)
//         words.splice(hidx, 1)
//         score++;
//         if (attempts === 1) {
//             streak++;
//             maxStreak = max(streak, maxStreak);
//         } else {
//             streak = 0;
//         }
//         attempts = 0;
//         inputBox.value(""); // Clear input field
//         pickNewWord(); // Signal draw() to pick a new word
//     } else {
//         message = "Incorrect! Try again!";
//         streak = 0
//     }
// }

/////////////////////////////////////////////////////////
// Challenge 1: Adding Sounds

// let words = [
//     "elephant", "backpack", "keyboard", "hospital", "sunlight",
//     "raincoat", "notebook", "shoulder", "football", "bathroom"];

// let hiddenWord, scrambledWord;
// let inputBox, submitButton, scrambleButton;
// let message = "";
// let attempts = 0;
// let score = 0;
// let streak = 0;
// let maxStreak = 0;

// let correctSound, wrongSound, streakResetSound;

// function preload() {
//     correctSound = loadSound('assets/Win.mp3'); // Replace with actual file path
//     wrongSound = loadSound('assets/Lose.mp3'); // Replace with actual file path
//     streakResetSound = loadSound('assets/DunDunDunnn.mp3'); // Replace with actual file path
// }

// function setup() {
//     createCanvas(600, 400);
//     textSize(24);
//     textAlign(CENTER, CENTER);

//     pickNewWord();

//     // Create input field
//     inputBox = createInput();
//     inputBox.size(150, 30);
//     inputBox.style("font-size", "20px");
//     inputBox.position(width / 2 - 80, height / 2 + 20);

//     // Create submit button
//     submitButton = createButton("Submit");
//     submitButton.position(width / 2 + 100, height / 2 + 23);
//     submitButton.size(150, 30);
//     submitButton.style("font-size", "20px");
//     submitButton.mousePressed(checkGuess);

//     // create scramble again button
//     scrambleButton = createButton("Rescramble");
//     scrambleButton.position(width/2 -250, height / 2 +23);
//     scrambleButton.size(150,30);
//     scrambleButton.style("font-size", "20px");
//     scrambleButton.mousePressed(scrambleAgain);    
// }

// function draw() {
//     background(220);

//     fill(0);
//     text("Word Scramble Game!", width / 2, height / 6);
//     text("Scrambled Word: " + scrambledWord.toUpperCase(), width / 2, height / 4+50);
//     text("Score: " + score, width / 2, height - 100);
//     text("Streak: " + streak + " (Max: " + maxStreak + ")", width / 2, height - 70);
//     text(message, width / 2, height - 40);
// }

// function pickNewWord() {
//     hiddenWord = random(words);
//     scrambledWord = shuffleWord(hiddenWord);
// }

// function shuffleWord(word) {
//     let arr = word.split('');
//     for (let i = arr.length - 1; i > 0; i--) {
//         let j = floor(random(i + 1));
//         [arr[i], arr[j]] = [arr[j], arr[i]];
//     }
//     return arr.join('');
// }

// function scrambleAgain(){
//     scrambledWord = shuffleWord(hiddenWord);
//     streakResetSound.play();
// }

// function checkGuess() {
//     let guess = inputBox.value().toLowerCase();
//     attempts++;

//     if (guess === hiddenWord) {
//         message = "Correct! Moving to next word!";
//         hidx = words.indexOf(hiddenWord)
//         words.splice(hidx, 1)
//         score++;
//         if (attempts === 1) {
//             streak++;
//             maxStreak = max(streak, maxStreak);
//         } else {
//             streak = 0;
//         }
//         correctSound.play();
//         attempts = 0;
//         inputBox.value(""); // Clear input field
//         pickNewWord(); // Signal draw() to pick a new word
//     } else {
//         message = "Incorrect! Try again!";
//         streak = 0
//         wrongSound.play();
//     }
// }

/////////////////////////////////////////////////////////
// Challenge 2: Categories

// // Arrays to store words for different categories
// let animalWords = ["elephant", "giraffe", "monkey", "tiger", "penguin"];
// let objectWords = ["backpack", "keyboard", "notebook", "football"];
// let placeWords = ["hospital", "bathroom", "school", "park"];
// let natureWords = ["sunlight", "raincoat", "mountain", "river"];

// // Variables to store the current game state
// let hiddenWord, scrambledWord, currentCategory; // The correct word, the scrambled word, and the category
// let inputBox, submitButton, scrambleButton; // Input field and buttons
// let message = ""; // Message to display to the user (correct/incorrect)
// let attempts = 0; // Number of attempts for the current word
// let score = 0; // Player's score
// let streak = 0; // Current correct guess streak
// let maxStreak = 0; // Maximum correct guess streak

// // Sound variables
// let correctSound, wrongSound, streakResetSound;

// // preload() function loads sound files before setup()
// function preload() {
//   correctSound = loadSound('assets/Win.mp3'); // Sound for correct guess
//   wrongSound = loadSound('assets/Lose.mp3'); // Sound for incorrect guess
//   streakResetSound = loadSound('assets/DunDunDunnn.mp3'); // Sound for rescrambling
// }

// // setup() function initializes the game
// function setup() {
//   createCanvas(600, 400); // Create a canvas of 600x400 pixels
//   textSize(24); // Set the text size
//   textAlign(CENTER, CENTER); // Align text to the center

//   pickNewWord(); // Select a new word and scramble it

//   // Create input field for user's guess
//   inputBox = createInput();
//   inputBox.size(150, 30); // Set input box size
//   inputBox.style("font-size", "20px"); // Set font size of input text
//   inputBox.position(width / 2 - 80, height / 2 + 20); // Position the input box

//   // Create submit button to check the guess
//   submitButton = createButton("Submit");
//   submitButton.position(width / 2 + 100, height / 2 + 23); // Position the submit button
//   submitButton.size(150, 30); // Set submit button size
//   submitButton.style("font-size", "20px"); // Set font size of button text
//   submitButton.mousePressed(checkGuess); // Call checkGuess() when button is pressed

//   // Create scramble button to rescramble
//   scrambleButton = createButton("Rescramble");
//   scrambleButton.position(width / 2 - 250, height / 2 + 23); // Position the scramble button
//   scrambleButton.size(150, 30); // Set scramble button size
//   scrambleButton.style("font-size", "20px"); // Set font size of button text
//   scrambleButton.mousePressed(scrambleAgain); // call scrambleAgain() when button is pressed
// }

// // draw() function renders the game elements on the canvas
// function draw() {
//   background(220); // Set background color

//   fill(0); // Set text color to black
//   text("Word Scramble Game!", width / 2, height / 6); // Display game title
//   text("Category: " + currentCategory.toUpperCase(), width / 2, height / 4); // Display current category
//   text("Scrambled Word: " + scrambledWord.toUpperCase(), width / 2, height / 4 + 50); // Display scrambled word
//   text("Score: " + score, width / 2, height - 100); // Display player's score
//   text("Streak: " + streak + " (Max: " + maxStreak + ")", width / 2, height - 70); // Display current and max streak
//   text(message, width / 2, height - 40); // Display messages (correct/incorrect)
// }

// // pickNewWord() function selects a new word and scrambles it
// function pickNewWord() {
//   let categoryNum = floor(random(4)); // Generate a random number to select a category (0-3)
//   let wordList; // Variable to store the word list based on the selected category

//   // Select the word list and category based on the random number
//   if (categoryNum === 0) {
//     wordList = animalWords;
//     currentCategory = "animals";
//   } else if (categoryNum === 1) {
//     wordList = objectWords;
//     currentCategory = "objects";
//   } else if (categoryNum === 2) {
//     wordList = placeWords;
//     currentCategory = "places";
//   } else {
//     wordList = natureWords;
//     currentCategory = "nature";
//   }

//   hiddenWord = random(wordList); // Select a random word from the selected word list
//   scrambledWord = shuffleWord(hiddenWord); // Scramble the selected word
// }

// // shuffleWord() function shuffles the letters of a word
// function shuffleWord(word) {
//   let arr = word.split(''); // Convert the word to an array of characters
//   for (let i = arr.length - 1; i > 0; i--) {
//     let j = floor(random(i + 1)); // Generate a random index
//     [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap characters at indices i and j
//   }
//   return arr.join(''); // Join the shuffled characters back into a string
// }

// // scrambleAgain() function rescrambles the current word and plays a sound.
// function scrambleAgain() {
//   scrambledWord = shuffleWord(hiddenWord); // Rescramble the word
//   streakResetSound.play(); // Play the rescramble sound
// }

// // checkGuess() function checks the user's guess and updates the game state
// function checkGuess() {
//   let guess = inputBox.value().toLowerCase(); // Get the user's guess and convert it to lowercase
//   attempts++; // Increment the attempts counter

//   let wordList; // Variable to store the word list based on the current category

//   // Select the word list based on the current category
//   if (currentCategory === "animals") {
//     wordList = animalWords;
//   } else if (currentCategory === "objects") {
//     wordList = objectWords;
//   } else if (currentCategory === "places") {
//     wordList = placeWords;
//   } else {
//     wordList = natureWords;
//   }

//   // Check if the guess is correct
//   if (guess === hiddenWord) {
//     message = "Correct! Moving to next word!";
//     let hidx = wordList.indexOf(hiddenWord); // Find the index of the correct word in the wordList
//     wordList.splice(hidx, 1); // Remove the correct word from the wordList so it wont show up again.
//     score++; // Increment the score
//     if (attempts === 1) {
//       streak++; // Increment the streak if it's the first attempt
//       maxStreak = max(streak, maxStreak); // Update the maximum streak
//     } else {
//       streak = 0; // Reset the streak if it's not the first attempt
//     }
//     correctSound.play(); // Play the correct sound
//     attempts = 0; // Reset the attempts counter
//     inputBox.value(""); // Clear the input field
//     pickNewWord(); // Select a new word
//   } else {
//     message = "Incorrect! Try again!";
//     streak = 0; // Reset the streak if the guess is incorrect
//     wrongSound.play(); // Play the incorrect sound
//   }
// }

/////////////////////////////////////////////////////////
// Codes used in slides (but not activities)

// split() examples:

// "hello,world".split(",") // Returns ["hello", "world"]
// "abc".split("")          // Returns ["a", "b", "c"]
// "1,2,3,4,5".split(",", 3) // Returns ["1", "2", "3"]
// "no separator".split() // Returns ["no separator"]



// join() examples:

// ["hello", "world"].join(" ") // Returns "hello world"
// ["a", "b", "c"].join("")     // Returns "abc"
// [1, 2, 3].join("-")          // Returns "1-2-3"
// [1,2,3].join()               // returns "1,2,3"



// floor() examples:

// Math.floor(3.9)  // Returns 3
// Math.floor(-3.1) // Returns -4
// Math.floor(5)    // Returns 5



// splice() example:

// const numbers = [1, 2, 3, 4, 5];

// // Remove 2 elements starting from index 1
// numbers.splice(1, 2); // numbers is now [1, 4, 5]



// indexOf() example:

// const fruits = ["apple", "banana", "orange", "apple"];

// // Find the index of the first "apple"
// const index1 = fruits.indexOf("apple"); // index1 will be 0



// max() example:

// const maxValue1 = max(10, 5, 20, 15); // maxValue1 will be 20