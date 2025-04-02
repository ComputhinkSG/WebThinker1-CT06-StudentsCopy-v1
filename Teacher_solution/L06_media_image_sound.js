/////////////////////////////////////////////////////////
// Recap 1: Restrained Square

// let x, y; // Position of the square's top-left corner
// let speed = 5; // Movement speed
// let size = 50; // Size of the moving square
// let colorValue = 200; // Fill color of the moving square
// let constraintSize = 300; // Size of the inner square constraint

// function setup() {
//   createCanvas(400, 400);
//   x = width / 2 - size / 2; // Initialize x to the top-left corner
//   y = height / 2 - size / 2; // Initialize y to the top-left corner
// }

// function draw() {
//   background(100); // Set background color

//   // Movement based on key presses.
//   if (keyIsDown(UP_ARROW)) {
//     y -= speed;
//   }
//   if (keyIsDown(DOWN_ARROW)) {
//     y += speed;
//   }
//   if (keyIsDown(LEFT_ARROW)) {
//     x -= speed;
//   }
//   if (keyIsDown(RIGHT_ARROW)) {
//     x += speed;
//   }

//   // Calculate the constraint boundaries.
//   let constraintLeft = (width - constraintSize) / 2;
//   let constraintRight = (width + constraintSize) / 2 - size;
//   let constraintTop = (height - constraintSize) / 2;
//   let constraintBottom = (height + constraintSize) / 2 - size;

//   // Constrain the moving square to the inner square.
//   x = constrain(x, constraintLeft, constraintRight);
//   y = constrain(y, constraintTop, constraintBottom);

//   // Draw the constraint square.
//   stroke(255); // White outline
//   noFill(); // No fill color
//   rect((width - constraintSize) / 2, (height - constraintSize) / 2, constraintSize, constraintSize); // Draw the constraint rectangle.
//   noStroke(); // Remove the stroke after drawing the constraint

//   fill(colorValue); // Set fill color for the moving square
//   rect(x, y, size, size); // Draw the moving square

//   // Change color when space bar is held down.
//   if (keyIsDown(32)) {
//     colorValue = 50;
//   } else {
//     colorValue = 200;
//   }
// }

/////////////////////////////////////////////////////////
// Exercise 1: Looping Sound

// let soundEffect;

// function preload() {
//     soundEffect = loadSound('assets/bossaNova.mp3');
// }

// function setup() {
//     createCanvas(200, 200);
//     background("lightblue");
// }

// function keyPressed() {
//     if (keyCode === 32) { // Spacebar to trigger sound effect
//         soundEffect.loop();
//     }
// }

/////////////////////////////////////////////////////////
// Task 1a: Moving static image

// let staticImage;
// let staticImageX = 100, staticImageY = 280;
// let staticSpeed = 5; // Speed of static image movement

// function preload() {
//     staticImage = loadImage('assets/pico-a.png');
// }

// function setup() {
//     createCanvas(600, 400);
// }

// function draw() {
//     background("lightblue");
    
//     // Move the static image left and right
//     if (keyIsDown(LEFT_ARROW)) {
//         staticImageX -= staticSpeed;
//     }
//     if (keyIsDown(RIGHT_ARROW)) {
//         staticImageX += staticSpeed;
//     }
    
//     // Constrain static image within canvas boundaries
//     staticImageX = constrain(staticImageX, 0, width - 100);
    
//     // Draw the static image
//     image(staticImage, staticImageX, staticImageY, 100, 100); // Display static image
// }

/////////////////////////////////////////////////////////
// Task 1b: Pop sound

// let staticImage;
// let staticImageX = 100, staticImageY = 280;
// let staticSpeed = 5; // Speed of static image movement
// let soundEffect;

// function preload() {
//     staticImage = loadImage('assets/pico-a.png');
//     soundEffect = loadSound('assets/pop.mp3');
// }

// function setup() {
//     createCanvas(600, 400);
// }

// function draw() {
//     background("lightblue");
    
//     // Move the static image left and right
//     if (keyIsDown(LEFT_ARROW)) {
//         staticImageX -= staticSpeed;
//     }
//     if (keyIsDown(RIGHT_ARROW)) {
//         staticImageX += staticSpeed;
//     }
    
//     // Constrain static image within canvas boundaries
//     staticImageX = constrain(staticImageX, 0, width - 100);
    
//     // Draw the static image
//     image(staticImage, staticImageX, staticImageY, 100, 100); // Display static image
// }

// function keyPressed() {
//     if (keyCode === 32) { // Spacebar to trigger sound effect
//         soundEffect.play();
//     }
// }

/////////////////////////////////////////////////////////
// Task 1c: Background music

// let staticImage;
// let staticImageX = 100, staticImageY = 280;
// let staticSpeed = 5; // Speed of static image movement
// let soundEffect;
// let bgMusic;

// function preload() {
//     staticImage = loadImage('assets/pico-a.png');
//     soundEffect = loadSound('assets/pop.mp3');
//     bgMusic = loadSound('assets/bossaNova.mp3');
// }

// function setup() {
//     createCanvas(600, 400);
//     bgMusic.loop(); // Play background music in a loop. 
//     // browser will block until user action. so need to press space key
// }

// function draw() {
//     background("lightblue");
    
//     // Move the static image left and right
//     if (keyIsDown(LEFT_ARROW)) {
//         staticImageX -= staticSpeed;
//     }
//     if (keyIsDown(RIGHT_ARROW)) {
//         staticImageX += staticSpeed;
//     }
    
//     // Constrain static image within canvas boundaries
//     staticImageX = constrain(staticImageX, 0, width - 100);
    
//     // Draw the static image
//     image(staticImage, staticImageX, staticImageY, 100, 100); // Display static image
// }

// function keyPressed() {
//     if (keyCode === 32) { // Spacebar to trigger sound effect
//         soundEffect.play();
//     }
// }

/////////////////////////////////////////////////////////
// Challenge 1: Pico Walk

// let pico; // Variables to hold the loaded image objects
// let x = 50; // Initial x position of the image
// let y = 50; // Initial y position of the image

// function preload() {
//     // Load the image before setup()
//     pico = loadImage('assets/pico-a.png'); // Load Pico image
// }

// function setup() {
//     createCanvas(400, 400); // Create a canvas of 400x400 pixels
// }

// function draw() {
//     background(220); // Set the background color to light gray

//     // Check arrow key input for movement
//     if (keyIsDown(LEFT_ARROW)) {
//         x -= 2;
//     }
//     if (keyIsDown(RIGHT_ARROW)) {
//         x += 2;
//     }
//     if (keyIsDown(UP_ARROW)) {
//         y -= 2;
//     }
//     if (keyIsDown(DOWN_ARROW)) {
//         y += 2;
//     }

//     // Constrain the x and y positions within the canvas boundaries
//     x = constrain(x, 0, width - pico.width);
//     y = constrain(y, 0, height - pico.height);

//     image(pico, x, y); // Display the current image at (x, y)
// }

/////////////////////////////////////////////////////////
// Challenge 2: Sound effect

// let pico; // Variables to hold the loaded image objects
// let x = 50; // Initial x position of the image
// let y = 50; // Initial y position of the image
// let popSound;
// let redBackground = false;
// let redBackgroundTimer = 0;

// function preload() {
//     // Load the image before setup()
//     pico = loadImage('assets/pico-a.png'); // Load Pico image
//     popSound = loadSound('assets/pop.mp3');
// }

// function setup() {
//     createCanvas(400, 400); // Create a canvas of 400x400 pixels
// }

// function draw() {
//   if (redBackground) {
//     background(255, 0, 0);
//     if (redBackgroundTimer > 10) {
//       redBackground = false;
//     }
//   } else {
//     background(220); // Set the background color to light gray
//   }

//   redBackgroundTimer += 1

//   // Check arrow key input for movement
//   if (keyIsDown(LEFT_ARROW)) {
//     x -= 2;
//   }
//   if (keyIsDown(RIGHT_ARROW)) {
//     x += 2;
//   }
//   if (keyIsDown(UP_ARROW)) {
//     y -= 2;
//   }
//   if (keyIsDown(DOWN_ARROW)) {
//     y += 2;
//   }

//   let previousX = x;
//   let previousY = y;
//   x = constrain(x, 0, width - pico.width);
//   y = constrain(y, 0, height - pico.height);

//   // Check for edge collisions and play sound only if position changed after constrain.
//   if(x != previousX || y != previousY){
//     popSound.play();
//     redBackground = true;
//   }

//   image(pico, x, y); // Display the current image at (x, y)
// }

/////////////////////////////////////////////////////////
// 

// let soundEffect, bgMusic, staticImage;
// let staticImageX = 100, staticImageY = 280;
// let staticSpeed = 5; // Speed of static image movement

// function preload() {
//     soundEffect = loadSound('assets/pop.mp3');
//     bgMusic = loadSound('assets/bossaNova.mp3');
//     staticImage = loadImage('assets/pico-a.png');
// }

// function setup() {
//     createCanvas(600, 400);
//     bgMusic.loop(); // Play background music in a loop. 
//     // browser will block until user action. so need to press space key
// }

// function draw() {
//     background("lightblue");
    
//     // Move the static image left and right
//     if (keyIsDown(LEFT_ARROW)) {
//         staticImageX -= staticSpeed;
//         // soundEffect.play();
//     }
//     if (keyIsDown(RIGHT_ARROW)) {
//         staticImageX += staticSpeed;
//         // soundEffect.play();
//     }
    
//     // Constrain static image within canvas boundaries
//     staticImageX = constrain(staticImageX, 0, width - 100);
    
//     // Draw the static image
//     image(staticImage, staticImageX, staticImageY, 100, 100); // Display static image
// }

// function keyPressed() {
//     if (keyCode === 32) { // Spacebar to trigger sound effect
//         soundEffect.play();
//     }
// }

/////////////////////////////////////////////////////////
// Codes used in slides (but not activities)

// Overview of Loading & Using Media:

// let soundEffect, bgMusic, staticImage;

// function preload() {
//     soundEffect = loadSound('assets/pop.mp3');
//     bgMusic = loadSound('assets/bossaNova.mp3');
//     staticImage = loadImage('assets/pico-a.png');
// }

// function setup() {
//     createCanvas(200, 200);
//     bgMusic.loop(); // Play background music in a loop. 
//     // browser will block until user action. so need to press space key
// }

// function draw() {
//     background("lightblue");
//     image(staticImage, 0, 0, 100, 100); // Display static image
// }

// function keyPressed() {
//     if (keyCode === 32) { // Spacebar to trigger sound effect
//         soundEffect.play();
//     }
// }



// Displaying Image:

// let staticImage;

// function preload() {
//     staticImage = loadImage('assets/pico-a.png');
// }

// function setup() {
//     createCanvas(200, 200);
//     background("lightblue");
//     image(staticImage, 0, 0, 100, 100); // Display static image
// }



// Playing sound

// let soundEffect;

// function preload() {
//     soundEffect = loadSound('assets/pop.mp3');
// }

// function setup() {
//     createCanvas(200, 200);
//     background("lightblue");
// }

// function keyPressed() {
//     if (keyCode === 32) { // Spacebar to trigger sound effect
//         soundEffect.play();
//     }
// }