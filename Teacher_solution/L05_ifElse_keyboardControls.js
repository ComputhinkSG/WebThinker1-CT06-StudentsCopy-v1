/////////////////////////////////////////////////////////
// Recap 1: Paint Brush

// let size = 5;

// function setup() {
//   createCanvas(400, 400);
//   background(220);
//   noStroke();
// }

// function mousePressed() {
//   fill(random(255), random(255), random(255));
//   size = 5;
// }

// function mouseDragged() {
//   circle(mouseX, mouseY, size);
//   size += 0.5;
// }

/////////////////////////////////////////////////////////
// Task 1: Shape Drawer

// function setup() {
//   // Creates a 200x200 pixel canvas.
//   createCanvas(200, 200);
// }

// function draw() {
//   // Sets a light gray background.
//   background(220);

//   // Draws a triangle if 'T' is pressed.
//   if (key === 'T') {
//     triangle(100, 50, 25, 150, 175, 150);
//   }

//   // Draws a circle if 'C' is pressed.
//   if (key === 'C') {
//     circle(100, 100, 100);
//   }

//   // Draws a square if 'S' is pressed.
//   if (key === 'S') {
//     square(50, 50, 100);
//   }
//   //draw loops.
// }

/////////////////////////////////////////////////////////
// Task 2: Up and Down arrow control

// let circleColor = 0; // 0 = black, 255 = red

// function setup() {
//   createCanvas(400, 400);
// }

// function draw() {
//   background(220);
//   // Red scale, green and blue are 0.
//   fill(circleColor, 0, 0);
//   circle(width / 2, height / 2, 100);
// }

// function keyPressed() {
//   if (keyCode === 38) {
//     circleColor = 255; // Red
//   }
//   if (keyCode === 40) {
//     circleColor = 0; // Black
//   }
// }

/////////////////////////////////////////////////////////
// Task 3: Else Yellow

// let fillColor;

// function setup() {
//   createCanvas(400, 400);
//   fillColor = color(255); // Default color: white
// }

// function draw() {
//   background(220);
//   fill(fillColor);
//   ellipse(width / 2, height / 2, 200, 200);
// }

// function keyPressed() {
//   if (key === 'r' || key === 'R') {
//     fillColor = color(255, 0, 0); // Red
//   } else if (key === 'G') {
//     fillColor = color(0, 255, 0); // Green
//   } else if (key === 'B') {
//     fillColor = color(0, 0, 255); // Blue
//   } else if (key ==='W') {
//     fillColor = color(255); // White
//   } else {
//     fillColor = color(255, 255, 0); // Yellow (default if other keys pressed)
//   }
// }

/////////////////////////////////////////////////////////
// Task 4: Ball Control

// // Initialize the ball's properties
// let ballX = 300; // Ball's horizontal position
// let ballY = 200; // Ball's vertical position
// let ballSize = 40; // Ball's diameter
// let ballSpeed = 5; // Ball's regular movement speed
// let ballBoost = 10; // Ball's boosted movement speed

// function setup() {
//   createCanvas(400, 400); // Create a canvas of 400x400 pixels
//   background(220); // Set the background color to light gray
// }

// function draw() {
//   background(220); // Clear the background with light gray

//   // Draw the ball
//   fill(0, 102, 255); // Set the fill color to blue
//   noStroke(); // Disable stroke (outline)
//   ellipse(ballX, ballY, ballSize); // Draw a circle (ellipse) at ballX, ballY with ballSize diameter

//   // Continuous movement using keyIsDown
//   if (keyIsDown(LEFT_ARROW)) { // If the left arrow key is pressed
//     if (keyIsDown(SHIFT)) { // If the shift key is also pressed
//       ballX -= ballBoost; // Move the ball left by boost amount
//     } else {
//       ballX -= ballSpeed; // Move the ball left by regular speed amount
//     }
//   }
//   if (keyIsDown(RIGHT_ARROW)) { // If the right arrow key is pressed
//     if (keyIsDown(SHIFT)) { // If the shift key is also pressed
//       ballX += ballBoost; // Move the ball right by boost amount
//     } else {
//       ballX += ballSpeed; // Move the ball right by regular speed amount
//     }
//   }
//   if (keyIsDown(UP_ARROW)) { // If the up arrow key is pressed
//     if (keyIsDown(SHIFT)) { // If the shift key is also pressed
//       ballY -= ballBoost; // Move the ball up by boost amount
//     } else {
//       ballY -= ballSpeed; // Move the ball up by regular speed amount
//     }
//   }
//   if (keyIsDown(DOWN_ARROW)) { // If the down arrow key is pressed
//     if (keyIsDown(SHIFT)) { // If the shift key is also pressed
//       ballY += ballBoost; // Move the ball down by boost amount
//     } else {
//       ballY += ballSpeed; // Move the ball down by regular speed amount
//     }
//   }

//   // Constrain ball within canvas boundaries
//   // https://p5js.org/reference/p5/constrain/
//   ballX = constrain(ballX, 0 + 20, width - 20); // Keep ballX within canvas width, with 20-pixel margin
//   ballY = constrain(ballY, 0 + 20, height - 20); // Keep ballY within canvas height, with 20-pixel margin
// }

// // reset the ball position to center
// // single press
// function keyPressed() {
//   if (key === 'r' || key === 'R') { // If 'r' or 'R' is pressed
//     ballX = width / 2; // Set ballX to the horizontal center of the canvas
//     ballY = height / 2; // Set ballY to the vertical center of the canvas
//   }
// }

/////////////////////////////////////////////////////////
// Challenge 1: Press and Release Random Circles

// function setup() {
//     createCanvas(400, 400);
//     background(220);
// }

// function keyPressed() {
//     numCircles = floor(random(5, 20));

//     for (let i = 0; i < numCircles; i++) {
//         let circleX = random(width);
//         let circleY = random(height);
//         let circleDiameter = random(10, 50);
//         let circleRed = random(255);
//         let circleGreen = random(255);
//         let circleBlue = random(255);
//         fill(circleRed, circleGreen, circleBlue);
//         ellipse(circleX, circleY, circleDiameter);
//     }
// }

// function keyReleased() {
//     background(220);
// }

/////////////////////////////////////////////////////////
// Challenge 2: Interactive Shapes

// let shapeType = 'rect'; // Default shape
// let shapeSize = 50;
// let shapeColor = 'black';
// let x, y;

// function setup() {
//     createCanvas(400, 400);
//     x = width / 2;
//     y = height / 2;
// }

// function draw() {
//     background(220); // Light gray background
//     fill(shapeColor);

//     if (shapeType === 'rect') {
//         rect(x - shapeSize / 2, y - shapeSize / 2, shapeSize, shapeSize);
//     }
//     if (shapeType === 'ellipse') {
//         ellipse(x, y, shapeSize, shapeSize);
//     }
//     if (shapeType === 'triangle') {
//         triangle(x, y - shapeSize / 2, x - shapeSize / 2, y + shapeSize / 2, x + shapeSize / 2, y + shapeSize / 2);
//     }
// }

// function keyPressed() {
//     if (key === 'R') {
//         shapeType = 'rect';
//     }
//     if (key === 'E') {
//         shapeType = 'ellipse';
//     }
//     if (key === 'T') {
//         shapeType = 'triangle';
//     }
//     if (key === 'B') {
//         shapeColor = 'blue';
//     }
//     if (key === 'G') {
//         shapeColor = 'green';
//     }
//     if (key === 'Y') {
//         shapeColor = 'yellow';
//     }
//     if (key === '+') {
//         shapeSize += 10;
//     }
//     if (key === '-') {
//         shapeSize -= 10;
//         if (shapeSize < 10) {
//         shapeSize = 10; // Prevent negative sizes
//         }
//     }
// }

// function mouseDragged() {
//     x = mouseX;
//     y = mouseY;
// }

// function keyReleased() {
//     shapeColor = 'black'; // Reset to black on release
// }

/////////////////////////////////////////////////////////
// Challenge 3: Shape Changer with Mouse

// function setup() {
//   // Creates a 400x400 pixel canvas.
//   createCanvas(400, 400);
//   // Disables drawing outlines around shapes.
//   noStroke();
// }

// function draw() {
//   // Sets a light gray background.
//   background(220);

//   // Checks the mouseX position to determine the circle's color.
//   if (mouseX < 100) {
//     // Sets the fill color to red.
//     fill(255, 0, 0);
//     // Draws a red circle at the center of the canvas.
//     circle(width / 2, height / 2, 200);
//   } else if (mouseX < 200) {
//     // Sets the fill color to green.
//     fill(0, 255, 0);
//     // Draws a green circle at the center of the canvas.
//     circle(width / 2, height / 2, 200);
//   } else {
//     // Sets the fill color to blue.
//     fill(0, 0, 255);
//     // Draws a blue circle at the center of the canvas.
//     circle(width / 2, height / 2, 200);
//   }

//   // Sets the fill color to black.
//   fill(0);
//   // Draws a small black circle at the current mouse position.
//   circle(mouseX, mouseY, 10);
// }

/////////////////////////////////////////////////////////
// Challenge 4: Moving Arrow

// let y = 300;
// let direction = 1; // 1 for up, 0 for down

// function setup() {
//   createCanvas(400, 400);
// }

// function draw() {
//   background(220);
//   if (direction == 1) {
//     y -= 3;
//     if (y < 0) {
//       y = 0;
//     }
//     triangle(0 + (width / 2 - 50), 100 + y, 100 + (width / 2 - 50), 100 + y, 50 + (width / 2 - 50), 0 + y);
//   }
//   if (direction == 0) {
//     y += 3;
//     if (y > 300) {
//       y = 300;
//     }
//     triangle(0 + (width / 2 - 50), 0 + y, 100 + (width / 2 - 50), 0 + y, 50 + (width / 2 - 50), 100 + y);
//   }
// }

// function keyPressed() {
//   // when up arrow pressed
//   if (keyCode == 38) {
//     direction = 1;
//   }
//   if (keyCode == 40) {
//     direction = 0;
//   }
// }

/////////////////////////////////////////////////////////
// Codes used in slides (but not activities)

// keyPressed() and keyReleased():

// Initial size
// let rectSize = 50;

// function setup() {
//     createCanvas(400, 400);
// }

// function draw() {
//     // Reset background each frame
//     background(220);
//     // Draw rectangle in centre of canvas
//     rect(width / 2 - rectSize / 2, height / 2 - rectSize / 2, rectSize, rectSize);
// }

// function keyPressed() {
//     // Increase size when key is pressed
//     rectSize = 100;
// }

// function keyReleased() {
//     // Reset size when key is released
//     rectSize = 50;
// }




// 'if' statement:

// let showCircle = false;

// function setup() {
//   createCanvas(200, 200);
// }

// function draw() {
//   background(220);
//   if (showCircle) {
//     circle(width / 2, height / 2, 100);
//   }
// }

// function keyPressed() {
//   if (key === 'C') {
//     showCircle = !showCircle; // Toggle the boolean
//   }
// }



// Example of 'key':

// if (key === 'A') {
//     // Code for when the 'A' key is pressed
// }
// if (key === '1') {
//     // Code for when the '1' key is pressed
// }



// Example of 'keyCode':

// if (keyCode === UP_ARROW) {
//     // Code for when the up arrow key is pressed
// }
// if (keyCode === 32) { // 32 is the keyCode for spacebar
//     // Code for when the spacebar is pressed
// }



// Exercise 1: Printing 'key' and 'keyCode'

// function setup() {
//     // This is required
// }

// function keyPressed() {
//     console.log("key:", key);
//     console.log("keyCode:", keyCode);
// }



// if-else demo:

// let circleColor = 0; // 0 = black, 255 = red

// function setup() {
//   createCanvas(400, 400);
// }

// function draw() {
//   background(220);
//   // Red scale, green and blue are 0.
//   fill(circleColor, 0, 0);
//   circle(width / 2, height / 2, 100);
// }

// function keyPressed() {
//   if (keyCode === 38) {
//     circleColor = 255; // Red
//   } else {
//     circleColor = 0; // Black
//   }
// }



// if-elseif-else demo:

// let circleColor = 0; // 0 = black, 255 = red

// function setup() {
//   createCanvas(400, 400);
// }

// function draw() {
//   background(220);
//   // Red scale, green and blue are 0.
//   fill(circleColor, 0, 0);
//   circle(width / 2, height / 2, 100);
// }

// function keyPressed() {
//   // if up arrow pressed
//   if (keyCode === 38) {
//     circleColor = 255; // Red
//   // if down arrow pressed
//   } else if (keyCode === 40) {
//     circleColor = 0; // Black
//   } else {
//     circleColor = 200; // Grey
//   }
// }



// using keyIsDown():

// let x = 0;

// function setup() {
//   createCanvas(400, 400);
// }

// function draw() {
//   background(220);
//   if (keyIsDown(RIGHT_ARROW)) {
//     x += 1
//   }
//   circle(width / 2 + x, height / 2, 100);
// }



// using 'if keyCode':

// let x = 0;

// function setup() {
//   createCanvas(400, 400);
// }

// function draw() {
//   background(220);
//   if (keyCode == RIGHT_ARROW) {
//     x += 1
//   }
//   circle(width / 2 + x, height / 2, 100);
// }



// using constrain()

// if x < 0 {
//   x = 0;
// } else if (x > 200) {
//   x = 200;
// }

// x = constrain(x, 0, 200);




// moving and staying within canvas:

// let x = 200; // Initial horizontal position of the circle
// let speed = 5; // Movement speed of the circle

// function setup() {
//   createCanvas(400, 400); // Create a 400x400 pixel canvas
// }

// function draw() {
//   background(220); // Set the background to light gray
//   circle(x, height / 2, 50); // Draw a circle at the horizontal position x, vertical center, and diameter 50

//   // Move the circle based on arrow key input
//   if (keyIsDown(LEFT_ARROW)) { // Check if the left arrow key is pressed
//     x -= speed; // Move the circle left by the speed value
//   }
//   if (keyIsDown(RIGHT_ARROW)) { // Check if the right arrow key is pressed
//     x += speed; // Move the circle right by the speed value
//   }

//   // Optional: Prevent the circle from moving off the canvas
//   if (x < 25) { // Check if the circle's left edge is beyond the left canvas edge
//     x = 25; // Reset the circle's left edge to the canvas edge
//   }
//   if (x > width - 25) { // Check if the circle's right edge is beyond the right canvas edge
//     x = width - 25; // Reset the circle's right edge to the canvas edge
//   }
// }