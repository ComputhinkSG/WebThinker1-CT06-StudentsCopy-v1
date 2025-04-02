/////////////////////////////////////////////////////////
// Recap 1: Input and Button

// let inputBox, submitButton;
// let message = "";

// function setup() {
//     createCanvas(600, 400);
//     textSize(24);
//     textAlign(CENTER, CENTER);

//     // Create input box
//     inputBox = createInput();
//     inputBox.position(width / 2 - 80, height / 2 - 100);

//     // Create submit button
//     submitButton = createButton("Guess");
//     submitButton.position(width / 2 + 100, height / 2 - 100);
//     submitButton.mousePressed(checkGuess);
// }

// function draw() {
//     background(220);

//     fill(0);
//     text(message, width / 2, height - 150);
// }

// function checkGuess() {
//     message = inputBox.value();
// }

/////////////////////////////////////////////////////////
// Task 1: Size and Style

// let inputBox, submitButton;
// let message = "";

// function setup() {
//     createCanvas(600, 400);
//     textSize(24);
//     textAlign(CENTER, CENTER);

//     // Create input box
//     inputBox = createInput();
//     inputBox.size(150, 30);
//     inputBox.style("font-size", "20px");
//     inputBox.position(width / 2 - 80, height / 2 - 100);

//     // Create submit button
//     submitButton = createButton("Guess");
//     submitButton.position(width / 2 + 100, height / 2 - 100);
//     submitButton.size(150, 30);
//     submitButton.style("font-size", "20px");
//     submitButton.mousePressed(checkGuess);
// }

// function draw() {
//     background(220);

//     fill(0);
//     text(message, width / 2, height - 150);
// }

// function checkGuess() {
//     message = inputBox.value();
// }

/////////////////////////////////////////////////////////
// Task 2: Select Random Word

// let words = ["apple", "mango", "grape", "peach", "melon", "table", "chair", "brick", "cloud", "storm", 
//     "beach", "river", "flame", "grass", "skull", "horse", "laser", "brain", "plane", "train"];

// let randomWord;
// let inputBox, submitButton;
// let message = "";
// let attempts = 0;

// function setup() {
//     createCanvas(600, 400);
//     textSize(24);
//     textAlign(CENTER, CENTER);

//     // Select a random 5-letter word
//     randomWord = random(words);

//     // Create input box
//     inputBox = createInput();
//     inputBox.size(150, 30);
//     inputBox.style("font-size", "20px");
//     inputBox.position(width / 2 - 80, height / 2 + 20);

//     // Create submit button
//     submitButton = createButton("Guess");
//     submitButton.position(width / 2 + 100, height / 2 + 20);
//     submitButton.size(150, 30);
//     submitButton.style("font-size", "20px");
//     submitButton.mousePressed(checkGuess);
// }

// function draw() {
//     background(220);

//     fill(0);
//     text("Guess the Hidden Word!", width / 2, height / 6);
//     text("Attempts: " + attempts, width / 2, height / 4);

//     // Display hint: first letter and underscores
//     text("Hint: " + randomWord, width / 2, height / 3);
    
//     text(message, width / 2, height - 50);
// }

// function checkGuess() {
//     message = inputBox.value();
// }

/////////////////////////////////////////////////////////
// Task 3: Showing Hint

// let words = ["apple", "mango", "grape", "peach", "melon", "table", "chair", "brick", "cloud", "storm", 
//     "beach", "river", "flame", "grass", "skull", "horse", "laser", "brain", "plane", "train"];

// let hiddenWord;
// let inputBox, submitButton;
// let message = "";
// let attempts = 0;
// let displayText = ""; // Holds underscores with first letter revealed

// function setup() {
//     createCanvas(600, 400);
//     textSize(24);
//     textAlign(CENTER, CENTER);

//     // Select a random 5-letter word
//     hiddenWord = random(words);

//     // Create the display text with the first letter visible but last letter hidden
//     displayText = hiddenWord[0].toUpperCase() + " " + "_ ".repeat(hiddenWord.length - 1);

//     // Create input box
//     inputBox = createInput();
//     inputBox.size(150, 30);
//     inputBox.style("font-size", "20px");
//     inputBox.position(width / 2 - 80, height / 2 + 20);

//     // Create submit button
//     submitButton = createButton("Guess");
//     submitButton.position(width / 2 + 100, height / 2 + 20);
//     submitButton.size(150, 30);
//     submitButton.style("font-size", "20px");
//     submitButton.mousePressed(checkGuess);
// }

// function draw() {
//     background(220);

//     fill(0);
//     text("Guess the Hidden Word!", width / 2, height / 6);
//     text("Attempts: " + attempts, width / 2, height / 4);

//     // Display hint: first letter and underscores
//     text("Hint: " + displayText, width / 2, height / 3);
    
//     text(message, width / 2, height - 50);
// }

// function checkGuess() {
//     message = inputBox.value();
// }

/////////////////////////////////////////////////////////
// Task 4: Get Correct Letters

// let words = ["apple", "mango", "grape", "peach", "melon", "table", "chair", "brick", "cloud", "storm", 
//     "beach", "river", "flame", "grass", "skull", "horse", "laser", "brain", "plane", "train"];

// let hiddenWord;
// let inputBox, submitButton;
// let message = "";
// let attempts = 0;
// let displayText = ""; // Holds underscores with first letter revealed

// function setup() {
//     createCanvas(600, 400);
//     textSize(24);
//     textAlign(CENTER, CENTER);

//     // Select a random 5-letter word
//     hiddenWord = random(words);

//     // Create the display text with the first letter visible but last letter hidden
//     displayText = hiddenWord[0].toUpperCase() + " " + "_ ".repeat(hiddenWord.length - 1);

//     // Create input box
//     inputBox = createInput();
//     inputBox.size(150, 30);
//     inputBox.style("font-size", "20px");
//     inputBox.position(width / 2 - 80, height / 2 + 20);

//     // Create submit button
//     submitButton = createButton("Guess");
//     submitButton.position(width / 2 + 100, height / 2 + 20);
//     submitButton.size(150, 30);
//     submitButton.style("font-size", "20px");
//     submitButton.mousePressed(checkGuess);
// }

// function draw() {
//     background(220);

//     fill(0);
//     text("Guess the Hidden Word!", width / 2, height / 6);
//     text("Attempts: " + attempts, width / 2, height / 4);

//     // Display hint: first letter and underscores
//     text("Hint: " + displayText, width / 2, height / 3);
    
//     text(message, width / 2, height - 50);
// }

// // Function that runs when button is pressed
// function checkGuess() {
//     let guess = inputBox.value().toLowerCase();
//     let correctLetters = getCorrectLetters(guess, hiddenWord);
//     message = "Correct letters: " + correctLetters;
// }

// // Function to get the list of correct letters 
// function getCorrectLetters(guess, word) {
//     let correctLetters = "";
//     for (let i = 0; i < word.length; i++) {

//         if (word.includes(guess[i]) && !correctLetters.includes(guess[i].toUpperCase())) {
//             correctLetters += guess[i].toUpperCase() + " ";
//         }
//     }
//     return correctLetters;
// }

/////////////////////////////////////////////////////////
// Task 5: Validation

// let words = ["apple", "mango", "grape", "peach", "melon", "table", "chair", "brick", "cloud", "storm", 
//     "beach", "river", "flame", "grass", "skull", "horse", "laser", "brain", "plane", "train"];

// let hiddenWord;
// let inputBox, submitButton;
// let message = "";
// let attempts = 0;
// let displayText = ""; // Holds underscores with first letter revealed

// function setup() {
//     createCanvas(600, 400);
//     textSize(24);
//     textAlign(CENTER, CENTER);

//     // Select a random 5-letter word
//     hiddenWord = random(words);

//     // Create the display text with the first letter visible but last letter hidden
//     displayText = hiddenWord[0].toUpperCase() + " " + "_ ".repeat(hiddenWord.length - 1);

//     // Create input box
//     inputBox = createInput();
//     inputBox.size(150, 30);
//     inputBox.style("font-size", "20px");
//     inputBox.position(width / 2 - 80, height / 2 + 20);

//     // Create submit button
//     submitButton = createButton("Guess");
//     submitButton.position(width / 2 + 100, height / 2 + 20);
//     submitButton.size(150, 30);
//     submitButton.style("font-size", "20px");
//     submitButton.mousePressed(checkGuess);
// }

// function draw() {
//     background(220);

//     fill(0);
//     text("Guess the Hidden Word!", width / 2, height / 6);
//     text("Attempts: " + attempts, width / 2, height / 4);

//     // Display hint: first letter and underscores
//     text("Hint: " + displayText, width / 2, height / 3);
    
//     text(message, width / 2, height - 50);
// }

// function checkGuess() {
//     let guess = inputBox.value().toLowerCase();
//     attempts++;

//     if (guess === hiddenWord) {
//         message = "Correct! The word was '" + hiddenWord.toUpperCase() + "'!";
//     } 
//     else if (guess.length != 5){
//         message = "5 letter words only."
//     }
//     else {
//         let correctLetters = getCorrectLetters(guess, hiddenWord);
//         message = "Wrong! Correct letters: " + correctLetters;
//     }
// }

// // Function to get the list of correct letters 
// function getCorrectLetters(guess, word) {
//     let correctLetters = "";
//     for (let i = 0; i < word.length; i++) {

//         if (word.includes(guess[i]) && !correctLetters.includes(guess[i].toUpperCase())) {
//             correctLetters += guess[i].toUpperCase() + " ";
//         }
//     }
//     return correctLetters;
// }

/////////////////////////////////////////////////////////
// Challenge 1: Visual Representation of Attempts

// let words = ["apple", "mango", "grape", "peach", "melon", "table", "chair", "brick", "cloud", "storm",
//     "beach", "river", "flame", "grass", "skull", "horse", "laser", "brain", "plane", "train"];

// let hiddenWord;
// let inputBox, submitButton;
// let message = "";
// let attempts = 0;
// let displayText = ""; // Holds underscores with first letter revealed
// let maxAttempts = 5; // Add max attempts

// function setup() {
//     createCanvas(600, 400);
//     textSize(24);
//     textAlign(CENTER, CENTER);

//     // Select a random 5-letter word
//     hiddenWord = random(words);

//     // Create the display text with the first letter visible but last letter hidden
//     displayText = hiddenWord[0].toUpperCase() + " " + "_ ".repeat(hiddenWord.length - 1);

//     // Create input box
//     inputBox = createInput();
//     inputBox.size(150, 30);
//     inputBox.style("font-size", "20px");
//     inputBox.position(width / 2 - 80, height / 2 + 20);

//     // Create submit button
//     submitButton = createButton("Guess");
//     submitButton.position(width / 2 + 100, height / 2 + 20);
//     submitButton.size(150, 30);
//     submitButton.style("font-size", "20px");
//     submitButton.mousePressed(checkGuess);
// }

// function draw() {
//     background(220);

//     fill(0);
//     text("Guess the Hidden Word!", width / 2, height / 6);
//     text("Attempts: " + attempts + " / " + maxAttempts, width / 2, height / 4); // Show attempts and max attempts

//     // Display hint: first letter and underscores
//     text("Hint: " + displayText, width / 2, height / 3);

//     text(message, width / 2, height - 50);

//     if (attempts >= maxAttempts && message.startsWith("Wrong")) { // game over logic
//         message = "Game Over! The word was '" + hiddenWord.toUpperCase() + "'.";
//     }
// }

// function checkGuess() {
//     if (attempts < maxAttempts) {
//         let guess = inputBox.value().toLowerCase();
//         attempts++;

//         if (guess === hiddenWord) {
//             message = "Correct! The word was '" + hiddenWord.toUpperCase() + "'!";
//             submitButton.attribute("disabled", true); // Disable submit button once guessed.
//         } else if (guess.length !== 5) {
//             message = "5 letter words only.";
//         } else {
//             let correctLetters = getCorrectLetters(guess, hiddenWord);
//             message = "Wrong! Correct letters: " + correctLetters;
//         }
//         inputBox.value(""); // clear the input box
//     }
// }

// // Function to get the list of correct letters
// function getCorrectLetters(guess, word) {
//     let correctLetters = "";
//     for (let i = 0; i < word.length; i++) {
//         if (word.includes(guess[i]) && !correctLetters.includes(guess[i].toUpperCase())) {
//             correctLetters += guess[i].toUpperCase() + " ";
//         }
//     }
//     return correctLetters;
// }

/////////////////////////////////////////////////////////
// Codes used in slides (but not activities)

// Task Finale:

// let words = ["apple", "mango", "grape", "peach", "melon", "table", "chair", "brick", "cloud", "storm", 
//     "beach", "river", "flame", "grass", "skull", "horse", "laser", "brain", "plane", "train"];

// let hiddenWord;
// let inputBox, submitButton;
// let message = "";
// let attempts = 0;
// let displayText = ""; // Holds underscores with first letter revealed

// function setup() {
//     createCanvas(600, 400);
//     textSize(24);
//     textAlign(CENTER, CENTER);

//     // Select a random 5-letter word
//     hiddenWord = random(words);

//     // Create the display text with the first letter visible but last letter hidden
//     displayText = hiddenWord[0].toUpperCase() + " " + "_ ".repeat(hiddenWord.length - 1);

//     // Create input box
//     inputBox = createInput();
//     inputBox.size(150, 30);
//     inputBox.style("font-size", "20px");
//     inputBox.position(width / 2 - 80, height / 2 + 20);

//     // Create submit button
//     submitButton = createButton("Guess");
//     submitButton.position(width / 2 + 100, height / 2 + 20);
//     submitButton.size(150, 30);
//     submitButton.style("font-size", "20px");
//     submitButton.mousePressed(checkGuess);
// }

// function draw() {
//     background(220);

//     fill(0);
//     text("Guess the Hidden Word!", width / 2, height / 6);
//     text("Attempts: " + attempts, width / 2, height / 4);

//     // Display hint: first letter and underscores
//     text("Hint: " + displayText, width / 2, height / 3);
    
//     text(message, width / 2, height - 50);
// }

// function checkGuess() {
//     let guess = inputBox.value().toLowerCase();
//     attempts++;

//     if (guess === hiddenWord) {
//         message = "Correct! The word was '" + hiddenWord.toUpperCase() + "'!";
//     } 
//     else if (guess.length != 5){
//         message = "5 letter words only."
//     }
//     else {
//         let correctLetters = getCorrectLetters(guess, hiddenWord);
//         message = "Wrong! Correct letters: " + correctLetters;
//     }
// }

// // Function to get the list of correct letters 
// function getCorrectLetters(guess, word) {
//     let correctLetters = "";
//     for (let i = 0; i < word.length; i++) {

//         if (word.includes(guess[i]) && !correctLetters.includes(guess[i].toUpperCase())) {
//             correctLetters += guess[i].toUpperCase() + " ";
//         }
//     }
//     return correctLetters;
// }