/////////////////////////////////////////////////////////
// Recap 1: Array of bouncing balls

// let circleX = [200, 200, 200];
// let circleY = [50, 150, 250];
// let circleSpeed = [];
// let circleColour = [];
// let numCircle = 3; // Number of circles
// let circleSize = 50;

// function setup() {
//     createCanvas(400, 300);

//     circleColour = [color(255,0,0),color(0,255,0),color(0,0,255)];

//     // Generate initial stars
//     for (let i = 0; i < numCircle; i++) {
//         circleSpeed.push(random(1, 3));
//     }
// }

// function draw() {
//     background(0);

//     // Update and draw stars
//     for (let i = 0; i < numCircle; i++) {
//         fill(circleColour[i]);
//         ellipse(circleX[i], circleY[i], circleSize);
//         circleX[i] += circleSpeed[i];

//         // Check for collision
//         if (circleX[i] > width - circleSize/2 || circleX[i] < circleSize/2) {
//             circleSpeed[i] *= -1;
//         }
//     }
// }

/////////////////////////////////////////////////////////
// Task 1: Player Sprite

// let playerX = 100;
// let playerY;
// let playerSize = 30;
// let velocity = 0;
// let isGrounded = false;

// function setup() {
//     createCanvas(600, 400);
//     textAlign(CENTER, CENTER);
//     playerY = height - playerSize;
// }

// function draw() {
//     background(0);

//     // Gravity and jump logic
//     velocity += 0.8; // Increasing velocity (to simulate gravity)
//     playerY += velocity;

//     if (playerY >= height - playerSize) {
//         playerY = height - playerSize;
//         isGrounded = true;
//         velocity = 0;
//     } else {
//         isGrounded = false;
//     }

//     // Draw player
//     fill(0, 255, 0);
//     rect(playerX, playerY, playerSize, playerSize);

//     fill(255);
//     textSize(20);
//     text("Press SPACE to jump", width / 2, 30);
// }

// function keyPressed() {
//     if (key === ' ' && isGrounded) {
//         velocity = -12;
//     }
// }

/////////////////////////////////////////////////////////
// Task 2: Endless Obstacles

// let playerX = 100;
// let playerY;
// let playerSize = 30;
// let velocity = 0;
// let isGrounded = false;

// let spikesX = [];
// let spikeWidth = 20;
// let spikeHeight = 30;
// let spikeSpeed = 5;

// function setup() {
//     createCanvas(600, 400);
//     textAlign(CENTER, CENTER);
//     playerY = height - playerSize;

//     for (let i = 0; i < 3; i++) {
//         spikesX.push(width + i * 300);
//     }
// }

// function draw() {
//     background(0);

//     // Gravity and jump logic
//     velocity += 0.8; // Increasing velocity (to simulate gravity)
//     playerY += velocity;

//     if (playerY >= height - playerSize) {
//         playerY = height - playerSize;
//         isGrounded = true;
//         velocity = 0;
//     } else {
//         isGrounded = false;
//     }

//     // Draw player
//     fill(0, 255, 0);
//     rect(playerX, playerY, playerSize, playerSize);

//     // Move and draw spikes
//     fill(255, 0, 0);
//     for (let i = 0; i < spikesX.length; i++) {
//         spikesX[i] -= spikeSpeed;

//         if (spikesX[i] < -spikeWidth) {
//             spikesX[i] = width + random(100, 300);
//         }

//         triangle(spikesX[i], height, spikesX[i] + spikeWidth / 2, height - spikeHeight, spikesX[i] + spikeWidth, height);
//     }

//     fill(255);
//     textSize(20);
//     text("Press SPACE to jump", width / 2, 30);
// }

// function keyPressed() {
//     if (key === ' ' && isGrounded) {
//         velocity = -12;
//     }
// }

/////////////////////////////////////////////////////////
// Task 3: Lose Condition

// let playerX = 100;
// let playerY;
// let playerSize = 30;
// let velocity = 0;
// let isGrounded = false;

// let spikesX = [];
// let spikeWidth = 20;
// let spikeHeight = 30;
// let spikeSpeed = 5;

// let gameOver = false;

// function setup() {
//     createCanvas(600, 400);
//     textAlign(CENTER, CENTER);
//     playerY = height - playerSize;

//     for (let i = 0; i < 3; i++) {
//         spikesX.push(width + i * 300);
//     }
// }

// function draw() {
//     background(0);

//     if (!gameOver) {
//         // Gravity and jump logic
//         velocity += 0.8; // Increasing velocity (to simulate gravity)
//         playerY += velocity;

//         if (playerY >= height - playerSize) {
//             playerY = height - playerSize;
//             isGrounded = true;
//             velocity = 0;
//         } else {
//             isGrounded = false;
//         }

//         // Draw player
//         fill(0, 255, 0);
//         rect(playerX, playerY, playerSize, playerSize);

//         // Move and draw spikes
//         fill(255, 0, 0);
//         for (let i = 0; i < spikesX.length; i++) {
//             spikesX[i] -= spikeSpeed;

//             if (spikesX[i] < -spikeWidth) {
//                 spikesX[i] = width + random(100, 300);
//             }

//             triangle(spikesX[i], height, spikesX[i] + spikeWidth / 2, height - spikeHeight, spikesX[i] + spikeWidth, height);

//             // Collision detection
//             if (
//                 playerX + playerSize > spikesX[i] &&
//                 playerX < spikesX[i] + spikeWidth &&
//                 playerY + playerSize > height - spikeHeight
//             ) {
//                 gameOver = true;
//             }
//         }

//         fill(255);
//         textSize(20);
//         text("Press SPACE to jump", width / 2, 30);
//     } else {
//         fill(255, 0, 0);
//         textSize(32);
//         text("Game Over!", width / 2, height / 2 - 20);
//     }
// }

// function keyPressed() {
//     if (key === ' ' && isGrounded && !gameOver) {
//         velocity = -12;
//     }
// }

/////////////////////////////////////////////////////////
// Task 4: Score Tracking

// let playerX = 100;
// let playerY;
// let playerSize = 30;
// let velocity = 0;
// let isGrounded = false;

// let spikesX = [];
// let spikeWidth = 20;
// let spikeHeight = 30;
// let spikeSpeed = 5;

// let gameOver = false;
// let score = 0;

// function setup() {
//     createCanvas(600, 400);
//     textAlign(CENTER, CENTER);
//     playerY = height - playerSize;

//     for (let i = 0; i < 3; i++) {
//         spikesX.push(width + i * 300);
//     }
// }

// function draw() {
//     background(0);

//     if (!gameOver) {
//         // Gravity and jump logic
//         velocity += 0.8; // Increasing velocity (to simulate gravity)
//         playerY += velocity;

//         if (playerY >= height - playerSize) {
//             playerY = height - playerSize;
//             isGrounded = true;
//             velocity = 0;
//         } else {
//             isGrounded = false;
//         }

//         // Draw player
//         fill(0, 255, 0);
//         rect(playerX, playerY, playerSize, playerSize);

//         // Move and draw spikes
//         fill(255, 0, 0);
//         for (let i = 0; i < spikesX.length; i++) {
//             spikesX[i] -= spikeSpeed;

//             if (spikesX[i] < -spikeWidth) {
//                 spikesX[i] = width + random(100, 300);
//                 score++; // Add to score when a spike is avoided
//             }

//             triangle(spikesX[i], height, spikesX[i] + spikeWidth / 2, height - spikeHeight, spikesX[i] + spikeWidth, height);

//             // Collision detection
//             if (
//                 playerX + playerSize > spikesX[i] &&
//                 playerX < spikesX[i] + spikeWidth &&
//                 playerY + playerSize > height - spikeHeight
//             ) {
//                 gameOver = true;
//             }
//         }

//         fill(255);
//         textSize(20);
//         text("Press SPACE to jump", width / 2, 30);
//         text("Score: " + score, width / 2, 60);

//     } else {
//         fill(255, 0, 0);
//         textSize(32);
//         text("Game Over!", width / 2, height / 2 - 20);
//         textSize(20);
//         text("Final Score: " + score, width / 2, height / 2 + 10);
//     }
// }

// function keyPressed() {
//     if (key === ' ' && isGrounded && !gameOver) {
//         velocity = -12;
//     }
// }

/////////////////////////////////////////////////////////
// Challenge 1: "R" to restart

// let playerX = 100;
// let playerY;
// let playerSize = 30;
// let velocity = 0;
// let isGrounded = false;

// let spikesX = [];
// let spikeWidth = 20;
// let spikeHeight = 30;
// let spikeSpeed = 5;

// let gameOver = false;
// let score = 0;

// function setup() {
//     createCanvas(600, 400);
//     textAlign(CENTER, CENTER);
//     playerY = height - playerSize;

//     for (let i = 0; i < 3; i++) {
//         spikesX.push(width + i * 300);
//     }
// }

// function draw() {
//     background(0);

//     if (!gameOver) {
//         // Gravity and jump logic
//         velocity += 0.8; // Increasing velocity (to simulate gravity)
//         playerY += velocity;

//         if (playerY >= height - playerSize) {
//             playerY = height - playerSize;
//             isGrounded = true;
//             velocity = 0;
//         } else {
//             isGrounded = false;
//         }

//         // Draw player
//         fill(0, 255, 0);
//         rect(playerX, playerY, playerSize, playerSize);

//         // Move and draw spikes
//         fill(255, 0, 0);
//         for (let i = 0; i < spikesX.length; i++) {
//             spikesX[i] -= spikeSpeed;

//             if (spikesX[i] < -spikeWidth) {
//                 spikesX[i] = width + random(100, 300);
//                 score++; // Add to score when a spike is avoided
//             }

//             triangle(spikesX[i], height, spikesX[i] + spikeWidth / 2, height - spikeHeight, spikesX[i] + spikeWidth, height);

//             // Collision detection
//             if (
//                 playerX + playerSize > spikesX[i] &&
//                 playerX < spikesX[i] + spikeWidth &&
//                 playerY + playerSize > height - spikeHeight
//             ) {
//                 gameOver = true;
//             }
//         }

//         fill(255);
//         textSize(20);
//         text("Press SPACE to jump", width / 2, 30);
//         text("Score: " + score, width / 2, 60);

//     } else {
//         fill(255, 0, 0);
//         textSize(32);
//         text("Game Over!", width / 2, height / 2 - 20);
//         textSize(20);
//         text("Final Score: " + score, width / 2, height / 2 + 10);
//         text("Press R to restart", width / 2, height / 2 + 40);
//     }
// }

// function keyPressed() {
//     if (key === ' ' && isGrounded && !gameOver) {
//         velocity = -12;
//     }

//     if ((key === 'r' || key === 'R') && gameOver) {
//         restartGame();
//     }
// }

// function restartGame() {
//     playerY = height - playerSize;
//     velocity = 0;
//     spikesX = [];
//     for (let i = 0; i < 3; i++) {
//         spikesX.push(width + i * 300);
//     }
//     gameOver = false;
//     score = 0;
// }

/////////////////////////////////////////////////////////
// Challenge 2: "Space" to start

// let playerX = 100;
// let playerY;
// let playerSize = 30;
// let velocity = 0;
// let isGrounded = false;

// let spikesX = [];
// let spikeWidth = 20;
// let spikeHeight = 30;
// let spikeSpeed = 5;

// let gameOver = false;
// let gameStarted = false;
// let score = 0;

// function setup() {
//     createCanvas(600, 400);
//     textAlign(CENTER, CENTER);
//     playerY = height - playerSize;

//     for (let i = 0; i < 3; i++) {
//         spikesX.push(width + i * 300);
//     }
// }

// function draw() {
//     background(0);

//     if (!gameStarted) {
//         fill(255);
//         textSize(32);
//         text("Press SPACE to Start", width / 2, height / 2);
//         return; // If game yet to start, exit draw() function
//     }

//     if (!gameOver) {
//         // Gravity and jump logic
//         velocity += 0.8; // Increasing velocity (to simulate gravity)
//         playerY += velocity;

//         if (playerY >= height - playerSize) {
//             playerY = height - playerSize;
//             isGrounded = true;
//             velocity = 0;
//         } else {
//             isGrounded = false;
//         }

//         // Draw player
//         fill(0, 255, 0);
//         rect(playerX, playerY, playerSize, playerSize);

//         // Move and draw spikes
//         fill(255, 0, 0);
//         for (let i = 0; i < spikesX.length; i++) {
//             spikesX[i] -= spikeSpeed;

//             if (spikesX[i] < -spikeWidth) {
//                 spikesX[i] = width + random(100, 300);
//                 score++; // Add to score when a spike is avoided
//             }

//             triangle(spikesX[i], height, spikesX[i] + spikeWidth / 2, height - spikeHeight, spikesX[i] + spikeWidth, height);

//             // Collision detection
//             if (
//                 playerX + playerSize > spikesX[i] &&
//                 playerX < spikesX[i] + spikeWidth &&
//                 playerY + playerSize > height - spikeHeight
//             ) {
//                 gameOver = true;
//             }
//         }

//         fill(255);
//         textSize(20);
//         text("Press SPACE to jump", width / 2, 30);
//         text("Score: " + score, width / 2, 60);

//     } else {
//         fill(255, 0, 0);
//         textSize(32);
//         text("Game Over!", width / 2, height / 2 - 20);
//         textSize(20);
//         text("Final Score: " + score, width / 2, height / 2 + 10);
//         text("Press R to restart", width / 2, height / 2 + 40);
//     }
// }

// function keyPressed() {
//     if (!gameStarted && key === ' ') {
//         gameStarted = true;
//         return;
//     }

//     if (key === ' ' && isGrounded && !gameOver) {
//         velocity = -12;
//     }

//     if ((key === 'r' || key === 'R') && gameOver) {
//         restartGame();
//     }
// }

// function restartGame() {
//     playerY = height - playerSize;
//     velocity = 0;
//     spikesX = [];
//     for (let i = 0; i < 3; i++) {
//         spikesX.push(width + i * 300);
//     }
//     gameOver = false;
//     score = 0;
// }

/////////////////////////////////////////////////////////
// Challenge 3: Adding Sound

// let playerX = 100;
// let playerY;
// let playerSize = 30;
// let velocity = 0;
// let isGrounded = false;

// let spikesX = [];
// let spikeWidth = 20;
// let spikeHeight = 30;
// let spikeSpeed = 5;

// let gameOver = false;
// let gameStarted = false;
// let score = 0;

// let bgMusic, deathSound;
// let musicStarted = false;

// function preload() {
//     bgMusic = loadSound('assets/bossaNova.mp3');
//     deathSound = loadSound('assets/DunDunDunnn.mp3');
// }

// function setup() {
//     createCanvas(600, 400);
//     textAlign(CENTER, CENTER);
//     playerY = height - playerSize;

//     for (let i = 0; i < 3; i++) {
//         spikesX.push(width + i * 300);
//     }
// }

// function draw() {
//     background(0);

//     if (!gameStarted) {
//         fill(255);
//         textSize(32);
//         text("Press SPACE to Start", width / 2, height / 2);
//         return; // If game yet to start, exit draw() function
//     }

//     if (!musicStarted && !gameOver) {
//         userStartAudio(); // Enables playback in browsers
//         bgMusic.setLoop(true);
//         bgMusic.play();
//         musicStarted = true;
//     }

//     if (!gameOver) {
//         // Gravity and jump logic
//         velocity += 0.8; // Increasing velocity (to simulate gravity)
//         playerY += velocity;

//         if (playerY >= height - playerSize) {
//             playerY = height - playerSize;
//             isGrounded = true;
//             velocity = 0;
//         } else {
//             isGrounded = false;
//         }

//         // Draw player
//         fill(0, 255, 0);
//         rect(playerX, playerY, playerSize, playerSize);

//         // Move and draw spikes
//         fill(255, 0, 0);
//         for (let i = 0; i < spikesX.length; i++) {
//             spikesX[i] -= spikeSpeed;

//             if (spikesX[i] < -spikeWidth) {
//                 spikesX[i] = width + random(100, 300);
//                 score++; // Add to score when a spike is avoided
//             }

//             triangle(spikesX[i], height, spikesX[i] + spikeWidth / 2, height - spikeHeight, spikesX[i] + spikeWidth, height);

//             // Collision detection
//             if (
//                 playerX + playerSize > spikesX[i] &&
//                 playerX < spikesX[i] + spikeWidth &&
//                 playerY + playerSize > height - spikeHeight
//             ) {
//                 gameOver = true;
//                 deathSound.play();
//                 bgMusic.stop();
//             }
//         }

//         fill(255);
//         textSize(20);
//         text("Press SPACE to jump", width / 2, 30);
//         text("Score: " + score, width / 2, 60);

//     } else {
//         fill(255, 0, 0);
//         textSize(32);
//         text("Game Over!", width / 2, height / 2 - 20);
//         textSize(20);
//         text("Final Score: " + score, width / 2, height / 2 + 10);
//         text("Press R to restart", width / 2, height / 2 + 40);
//     }
// }

// function keyPressed() {
//     if (!gameStarted && key === ' ') {
//         gameStarted = true;
//         return;
//     }

//     if (key === ' ' && isGrounded && !gameOver) {
//         velocity = -12;
//     }

//     if ((key === 'r' || key === 'R') && gameOver) {
//         restartGame();
//     }
// }

// function restartGame() {
//     playerY = height - playerSize;
//     velocity = 0;
//     spikesX = [];
//     for (let i = 0; i < 3; i++) {
//         spikesX.push(width + i * 300);
//     }
//     gameOver = false;
//     score = 0;
//     bgMusic.play();
// }

/////////////////////////////////////////////////////////