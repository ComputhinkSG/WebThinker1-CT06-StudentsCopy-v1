// Comment out each section before moving to the next

/////////////////////////////////////////////////////////
// Recap 1: Sliding Square

// let x = 50;
// let speed = 3;

// function setup() {
//     createCanvas(400, 400);
//     fill(255); // Initialize with white
//     noStroke(); // Remove the outline
// }

// function draw() {
//     background(220); // Light gray background

//     // Update square position
//     x += speed;

//     // Check for boundaries and reverse direction
//     if (x > width - 50 || x < 0) {
//         speed *= -1;
//         // Change color randomly
//         fill(random(255), random(255), random(255));
//     }

//     // Draw the square
//     square(x, height / 2 - 25, 50); // Center the square vertically
// }

/////////////////////////////////////////////////////////
// Task 1: Self Introduction

// function setup() {
//     createCanvas(400, 400); // Create a canvas of 400x100 pixels
//     background(220); // Set background to light gray
//     textSize(16); // Set text size
//     text("My name is McDonald Kentucky", 50, 50); // Display text at (50, 50)
//     text("I am 16 this year", 50, 100); // Display text at (50, 100)
//     text("My favourite activity is eating", 50, 150); // Display text at (50, 150)
//   }

/////////////////////////////////////////////////////////
// Task 2:

// let favoriteFoods = ["Pizza", "Burger", "Sushi", "Tacos", "Pasta"];

// function setup() {
//     createCanvas(400, 400);
//     textSize(24);
//     textAlign(LEFT, TOP);
// }

// function draw() {
//     background(220);
    
//     fill(0);
//     text("My Favorite Foods:", 50, 50);

//     // Loop through the array and display each food item on the canvas
//     for (let i = 0; i < favoriteFoods.length; i++) {
//         text((i + 1) + ". " + favoriteFoods[i], 50, 80 + i * 30);
//     }
// }

/////////////////////////////////////////////////////////
// Task 3: Scrolling Words

// let yPos;
// let favoriteFoods = ["Pizza", "Burger", "Sushi", "Tacos", "Pasta"];

// function setup() {
//     createCanvas(600, 400);
//     yPos = height; // Start text at the bottom of the screen
//     fill(255, 255, 0);
//     textSize(24);
//     textAlign(CENTER, CENTER);
// }

// function draw() {
//     background(0);

//     translate(width / 2, yPos); // resets origin to center
//     scale(1, 3); // Creates the perspective effect

//     yPos -= 0.6; // Move text upwards

//     for (let i = 0; i < favoriteFoods.length; i++) {
//         text((i + 1) + ". " + favoriteFoods[i], 0, i * 30);
//     }
// }

/////////////////////////////////////////////////////////
// Task 4: Endless Scrolling

// let yPos;
// let storyText = [
//     "A long time ago in a galaxy far,",
//     "far away...",
//     "",
//     "EPISODE I",
//     "THE BEGINNING",
//     "",
//     "It is a period of learning...",
//     "Students have begun their journey",
//     "into the world of p5.js.",
//     "With newfound powers, they",
//     "create amazing visuals and",
//     "animations...",
//     "",
//     "May the Code be with you!"
// ];

// function setup() {
//     createCanvas(600, 400);
//     yPos = height; // Start text at the bottom of the screen
//     fill(255, 255, 0);
//     textSize(24);
//     textAlign(CENTER, CENTER);
// }

// function draw() {
//     background(0);

//     translate(width / 2, yPos); // resets origin to center
//     scale(1, 3); // Creates the perspective effect
//     for (let i = 0; i < storyText.length; i++) {
//         text(storyText[i], 0, i * 40);
//     }

//     yPos -= 0.6; // Move text upwards

//     // Reset text position when it goes off screen
//     if (yPos < -storyText.length * 40) {
//         yPos = height;
//     }
// }

/////////////////////////////////////////////////////////
// Challenge 1: Background music

// let yPos;
// let storyText = [
//     "A long time ago in a galaxy far,",
//     "far away...",
//     "",
//     "EPISODE I",
//     "THE BEGINNING",
//     "",
//     "It is a period of learning...",
//     "Students have begun their journey",
//     "into the world of p5.js.",
//     "With newfound powers, they",
//     "create amazing visuals and",
//     "animations...",
//     "",
//     "May the Code be with you!"
// ];

// let bgMusic;

// function preload() {
//     bgMusic = loadSound('assets/star_wars_theme_8_bit.mp3'); // Replace with actual file path
// }

// function setup() {
//     createCanvas(600, 400);
//     yPos = height; // Start text at the bottom of the screen
//     userStartAudio(); // Enables audio playback in browsers
//     bgMusic.loop(); // Start looping the background music
// }

// function draw() {
//     background(0);
//     fill(255, 255, 0);
//     textSize(24);
//     textAlign(CENTER, CENTER);

//     translate(width / 2, yPos); // resets origin to center
//     scale(1, 3); // Creates the perspective effect
//     for (let i = 0; i < storyText.length; i++) {
//         text(storyText[i], 0, i * 40);
//     }

//     yPos -= 0.6; // Move text upwards

//     // Reset text position when it goes off screen
//     if (yPos < -storyText.length * 40) {
//         yPos = height;
//     }
    
// }

/////////////////////////////////////////////////////////
// Challenge 2: Click to start

// let yPos;
// let storyText = [
//     "A long time ago in a galaxy far,",
//     "far away...",
//     "",
//     "EPISODE I",
//     "THE BEGINNING",
//     "",
//     "It is a period of learning...",
//     "Students have begun their journey",
//     "into the world of p5.js.",
//     "With newfound powers, they",
//     "create amazing visuals and",
//     "animations...",
//     "",
//     "May the Code be with you!"
// ];

// let bgMusic;
// let audioStarted = false;

// function preload() {
//     bgMusic = loadSound('assets/star_wars_theme_8_bit.mp3'); // Replace with actual file path
// }

// function setup() {
//     createCanvas(600, 400);
//     yPos = height; // Start text at the bottom of the screen
// }

// function draw() {
//     background(0);
//     fill(255, 255, 0);
//     textSize(24);
//     textAlign(CENTER, CENTER);

//     if (audioStarted){
  
//         translate(width / 2, yPos); // resets origin to center
//         scale(1, 3); // Creates the perspective effect
//         for (let i = 0; i < storyText.length; i++) {
//             text(storyText[i], 0, i * 40);
//         }
    
//         yPos -= 0.6; // Move text upwards
    
//         // Reset text position when it goes off screen
//         if (yPos < -storyText.length * 40) {
//             yPos = height;
//         }
//     }
//     else{
//         text("Click to start the show", width/2,height/2)
//     }
    
// }

// function mousePressed() {
//     if (!audioStarted) {
//         userStartAudio(); // Enables audio playback in browsers
//         bgMusic.loop(); // Start looping the background music
//         audioStarted = true;
//     }
// }

/////////////////////////////////////////////////////////
// Codes used in slides (but not activities)

// Drawing text:

// function setup() {
//     createCanvas(400, 100); // Create a canvas of 400x100 pixels
//     background(220); // Set background to light gray
//     textSize(32); // Set text size
//     text("Hello, p5.js!", 0, 50); // Display text at (0, 50)
//   }



// To loop through an array:

// let favoriteFoods = ["Pizza", "Burger", "Sushi", "Tacos", "Pasta"];

// for (let i = 0, i < favoriteFoods.length; i++) {
//     console.log(favoriteFoods[i]);
// }



// Moving Text:

// let yPos;

// function setup() {
//     createCanvas(600, 400);
//     yPos = height; // Start text at the bottom of the screen
//     fill(255, 255, 0);
//     textSize(24);
//     textAlign(CENTER, CENTER);
// }

// function draw() {
//     background(0);

//     translate(width / 2, yPos); // resets origin to center
//     scale(1, 3); // Creates the perspective effect
//     text("Moving Text", 0, 0);

//     yPos -= 0.6; // Move text upwards
// }