/////////////////////////////////////////////////////////
// Recap 1: Word Scramble

// let words = ["apple", "mango", "grape", "peach", "melon"];
// let hiddenWord;
// let scrambledWord;
// let input;
// let submitButton;
// let message = "";

// function setup() {
//   createCanvas(400, 400);
//   textAlign(CENTER, CENTER);

//   // 1. Word Selection and Scrambling
//   hiddenWord = random(words);
//   scrambledWord = shuffleWord(hiddenWord);

//   // 2. Display Scrambled Word
//   textSize(20);

//   // 3. User Input
//   input = createInput("");
//   input.position(width / 2 - 80, height / 2);

//   // 4. Submit Button
//   submitButton = createButton("Submit");
//   submitButton.position(width / 2 - 30, height / 2 + 30);
//   submitButton.mousePressed(checkGuess);
// }

// function draw() {
//   background(220);

//   text("Scrambled Word: " + scrambledWord, width / 2, height / 4);
//   text(message, width / 2, height * 0.75);
// }

// // Function to shuffle the word
// function shuffleWord(word) {
//   let arr = word.split('');
//   for (let i = arr.length - 1; i > 0; i--) {
//     let j = floor(random(i + 1));
//     [arr[i], arr[j]] = [arr[j], arr[i]];
//   }
//   return arr.join('');
// }

// // Function to check the user's guess
// function checkGuess() {
//   let guess = input.value().toLowerCase();
//   if (guess === hiddenWord.toLowerCase()) {
//     message = "Correct!";
//   } else {
//     message = "Incorrect, try again!";
//   }
//   input.value(""); // Clear the input field
//   // Pick a new word
//     hiddenWord = random(words);
//     scrambledWord = shuffleWord(hiddenWord);
// }

/////////////////////////////////////////////////////////
// Task 1: Falling Stars

// let starX = [];
// let starY = [];
// let starSize = [];
// let starSpeed = [];
// let numStars = 10;

// function setup() {
//     createCanvas(600, 400);

//     // Generate initial stars
//     for (let i = 0; i < numStars; i++) {
//         starX.push(random(width));
//         starY.push(random(-300, -50));
//         starSize.push(random(10, 20));
//         starSpeed.push(random(1, 3));
//     }
// }

// function draw() {
//     background(0);

//     // Update and draw stars
//     for (let i = 0; i < numStars; i++) {
//         fill(255, 255, 0);
//         ellipse(starX[i], starY[i], starSize[i]);
//         starY[i] += starSpeed[i];

//         // Reset stars if they go off screen
//         if (starY[i] > height) {
//             starY[i] = random(-200, -50);
//             starX[i] = random(width);
//             starSpeed[i] = random(2, 5);
//         }
//     }
// }

/////////////////////////////////////////////////////////
// Task 2: Player Sprite

// let playerX;
// let starX = [];
// let starY = [];
// let starSize = [];
// let starSpeed = [];
// let numStars = 10;

// function setup() {
//     createCanvas(600, 400);
//     playerX = width / 2;

//     // Generate initial stars
//     for (let i = 0; i < numStars; i++) {
//         starX.push(random(width));
//         starY.push(random(-300, -50));
//         starSize.push(random(10, 20));
//         starSpeed.push(random(1, 3));
//     }
// }

// function draw() {
//     background(0);

//     // Move player
//     if (keyIsDown(LEFT_ARROW)) {
//         playerX -= 5;
//     }
//     if (keyIsDown(RIGHT_ARROW)) {
//         playerX += 5;
//     }
//     playerX = constrain(playerX, 0, width - 40);

//     // Draw player
//     fill(0, 255, 0);
//     rect(playerX, height - 40, 40, 40);

//     // Update and draw stars
//     for (let i = 0; i < numStars; i++) {
//         fill(255, 255, 0);
//         ellipse(starX[i], starY[i], starSize[i]);
//         starY[i] += starSpeed[i];

//         // Reset stars if they go off screen
//         if (starY[i] > height) {
//             starY[i] = random(-200, -50);
//             starX[i] = random(width);
//             starSpeed[i] = random(2, 5);
//         }
//     }
// }

/////////////////////////////////////////////////////////
// Task 3: Collision Detection

// let playerX;
// let starX = [];
// let starY = [];
// let starSize = [];
// let starSpeed = [];
// let gameOver = false;
// let numStars = 10;

// function setup() {
//     createCanvas(600, 400);
//     playerX = width / 2;

//     // Generate initial stars
//     for (let i = 0; i < numStars; i++) {
//         starX.push(random(width));
//         starY.push(random(-300, -50));
//         starSize.push(random(10, 20));
//         starSpeed.push(random(1, 3));
//     }
// }

// function draw() {
//     background(0);

//     if (!gameOver) {
//         // Move player
//         if (keyIsDown(LEFT_ARROW)) {
//             playerX -= 5;
//         }
//         if (keyIsDown(RIGHT_ARROW)) {
//             playerX += 5;
//         }
//         playerX = constrain(playerX, 0, width - 40);

//         // Draw player
//         fill(0, 255, 0);
//         rect(playerX, height - 40, 40, 40);

//         // Update and draw stars
//         for (let i = 0; i < numStars; i++) {
//             fill(255, 255, 0);
//             ellipse(starX[i], starY[i], starSize[i]);
//             starY[i] += starSpeed[i];

//             // Check for collision
//             if (starY[i] > height - 40 && (starX[i] - playerX) >=  0 && (starX[i] - playerX) <= 40) {
//                 gameOver = true;
//             }

//             // Reset stars if they go off screen
//             if (starY[i] > height) {
//                 starY[i] = random(-200, -50);
//                 starX[i] = random(width);
//                 starSpeed[i] = random(2, 5);
//             }
//         }
//     } else {
//         fill(255, 0, 0);
//         textSize(32);
//         text("Game Over", width / 2, height / 2);
//     }
// }

/////////////////////////////////////////////////////////
// Task 4: Adding Score

// let playerX;
// let starX = [];
// let starY = [];
// let starSize = [];
// let starSpeed = [];
// let score = 0;
// let gameOver = false;
// let numStars = 10;

// function setup() {
//     createCanvas(600, 400);
//     playerX = width / 2;

//     // Generate initial stars
//     for (let i = 0; i < numStars; i++) {
//         starX.push(random(width));
//         starY.push(random(-300, -50));
//         starSize.push(random(10, 20));
//         starSpeed.push(random(1, 3));
//     }
// }

// function draw() {
//     background(0);

//     if (!gameOver) {
//         fill(255);
//         textSize(24);
//         text("Score: " + score, 20, 30);

//         // Move player
//         if (keyIsDown(LEFT_ARROW)) {
//             playerX -= 5;
//         }
//         if (keyIsDown(RIGHT_ARROW)) {
//             playerX += 5;
//         }
//         playerX = constrain(playerX, 0, width - 40);

//         // Draw player
//         fill(0, 255, 0);
//         rect(playerX, height - 40, 40, 40);

//         // Update and draw stars
//         for (let i = 0; i < numStars; i++) {
//             fill(255, 255, 0);
//             ellipse(starX[i], starY[i], starSize[i]);
//             starY[i] += starSpeed[i];

//             // Check for collision
//             if (starY[i] > height - 40 && (starX[i] - playerX) >=  0 && (starX[i] - playerX) <= 40) {
//                 gameOver = true;
//             }

//             // Reset stars if they go off screen
//             if (starY[i] > height) {
//                 starY[i] = random(-200, -50);
//                 starX[i] = random(width);
//                 starSpeed[i] = random(2, 5);
//                 score++;
//             }
//         }
//     } else {
//         fill(255, 0, 0);
//         textSize(32);
//         text("Game Over", width / 2, height / 2);
//         text("Final Score: " + score, width / 2, height / 2 + 40);
//     }
// }

/////////////////////////////////////////////////////////
// Task 5: Sound effects

// let playerX;
// let starX = [];
// let starY = [];
// let starSize = [];
// let starSpeed = [];
// let score = 0;
// let gameOver = false;
// let numStars = 10;
// let osc;
// let audioStarted = false; // Tracks whether user has enabled sound

// function setup() {
//     createCanvas(600, 400);
//     playerX = width / 2;

//     // Initialize oscillator for sound
//     osc = new p5.Oscillator();
//     osc.start();
//     osc.amp(0);

//     // Generate initial stars
//     for (let i = 0; i < numStars; i++) {
//         starX.push(random(width));
//         starY.push(random(-300, -50));
//         starSize.push(random(10, 20));
//         starSpeed.push(random(1, 3));
//     }
// }

// function draw() {
//     background(0);

//     if (audioStarted){
//         if (!gameOver) {
//             fill(255);
//             textSize(24);
//             text("Score: " + score, 20, 30);
    
//             // Move player
//             if (keyIsDown(LEFT_ARROW)) {
//                 playerX -= 5;
//             }
//             if (keyIsDown(RIGHT_ARROW)) {
//                 playerX += 5;
//             }
//             playerX = constrain(playerX, 0, width - 40);
    
//             // Draw player
//             fill(0, 255, 0);
//             rect(playerX, height - 40, 40, 40);
    
//             // Update and draw stars
//             for (let i = 0; i < numStars; i++) {
//                 fill(255, 255, 0);
//                 ellipse(starX[i], starY[i], starSize[i]);
//                 starY[i] += starSpeed[i];
    
//                 // Check for collision
//                 if (starY[i] > height - 40 && (starX[i] - playerX) >=  0 && (starX[i] - playerX) <= 40) {
//                     gameOver = true;
//                     osc.amp(0);
//                 }
    
//                 // Reset stars if they go off screen
//                 if (starY[i] > height) {
//                     starY[i] = random(-200, -50);
//                     starX[i] = random(width);
//                     starSpeed[i] = random(2, 5);
//                     score++;
//                     playRandomTone();
//                 }
//             }
//         } else {
//             fill(255, 0, 0);
//             textSize(32);
//             text("Game Over", width / 2, height / 2);
//             text("Final Score: " + score, width / 2, height / 2 + 40);
//         }
//     }

    
// }

// // Ensure sound works by enabling audio on user interaction
// function mousePressed() {
//     if (!audioStarted) {
//         userStartAudio();
//         audioStarted = true;
//     }
// }

// // Function to play a random sound when stars hit the ground
// function playRandomTone() {
//     if (audioStarted) { // Ensure audio is enabled before playing sound
//         let freq = random(100, 1000); // Choose a random frequency
//         osc.freq(freq);
//         osc.amp(0.5, 0.1); // Quickly ramp up volume
//         setTimeout(() => osc.amp(0, 0.5), 500); // Fade out after 200ms
//     }
// }

/////////////////////////////////////////////////////////