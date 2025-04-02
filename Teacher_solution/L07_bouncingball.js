/////////////////////////////////////////////////////////
// Recap 1: Pico Pop

// let pico;
// let popSound;
// let picoWidth;
// let picoHeight;
// let x = 200;
// let y = 100;
// let speed = 5;

// function preload() {
//   // Load the image 'pico-a.png' and store it in the 'pico' variable.
//   pico = loadImage('assets/pico-a.png');
//   // Load the sound 'pop.mp3' and store it in the 'popSound' variable.
//   popSound = loadSound('assets/pop.mp3');
// }

// function setup() {
//   // Create a canvas with a width and height of 400 pixels.
//   createCanvas(400, 400);
//   // Store the width of the loaded 'pico' image in the 'picoWidth' variable.
//   picoWidth = pico.width;
//   // Store the height of the loaded 'pico' image in the 'picoHeight' variable.
//   picoHeight = pico.height;
// }

// function draw() {
//   // Set the background color to light gray (220).
//   background(220);

//   // Movement:
//   // Check if the left arrow key is pressed.
//   if (keyIsDown(LEFT_ARROW)) {
//     // If pressed, decrement the x-coordinate by the 'speed' value.
//     x -= speed;
//   }
//   // Check if the right arrow key is pressed.
//   if (keyIsDown(RIGHT_ARROW)) {
//     // If pressed, increment the x-coordinate by the 'speed' value.
//     x += speed;
//   }
//   // Check if the up arrow key is pressed.
//   if (keyIsDown(UP_ARROW)) {
//     // If pressed, decrement the y-coordinate by the 'speed' value.
//     y -= speed;
//   }
//   // Check if the down arrow key is pressed.
//   if (keyIsDown(DOWN_ARROW)) {
//     // If pressed, increment the y-coordinate by the 'speed' value.
//     y += speed;
//   }

//   // Calculate the adjusted x-coordinate to keep the sprite centered:
//   // Subtract half of the image's width from the x-coordinate to center it.
//   let adjustedX = x - (picoWidth / 2);

//   // Draw the 'pico' image at the calculated 'adjustedX' and 'y' coordinates, with its original width and height.
//   image(pico, adjustedX, y, picoWidth, picoHeight);
// }

// function keyPressed() {
//   // Check if the space key (keyCode 32) is pressed.
//   if (keyCode === 32) {
//     // If pressed, halve the width of the 'pico' image.
//     picoWidth = picoWidth * 0.5;
//     // Play the 'popSound' sound effect.
//     popSound.play();
//   }
// }

// function keyReleased(){
//   // Check if the space key (keyCode 32) is released.
//   if(keyCode === 32){
//     //If released, reset the width of the 'pico' image to its original width.
//     picoWidth = pico.width;
//   }
// }

/////////////////////////////////////////////////////////
// Task 1: Moving Ball

// let ballX = 300; // Initial horizontal position of the ball
// let ballY = 200; // Initial vertical position of the ball
// let ballSize = 30; // Diameter of the ball
// let ballSpeedX = 2; // Horizontal speed of the ball (pixels per frame)
// let ballSpeedY = 2; // Vertical speed of the ball (pixels per frame)

// function setup() {
//   createCanvas(600, 400); // Create a canvas of 600 pixels wide and 400 pixels high
// }

// function draw() {
//   background(220); // Set the background color to light gray (220)

//   ballX = ballX + ballSpeedX; // Update the horizontal position of the ball
//   ballY = ballY + ballSpeedY; // Update the vertical position of the ball

//   noStroke(); // Remove the outline of the shape
//   fill(255); // Set the fill color to white
//   circle(ballX, ballY, ballSize); // Draw a circle at the updated position with the specified size
// }

/////////////////////////////////////////////////////////
// Task 2: Bouncing

// let ballX = 300; // Initialize the x-coordinate of the ball to 300.
// let ballY = 200; // Initialize the y-coordinate of the ball to 200.
// let ballSize = 30; // Initialize the size (diameter) of the ball to 30.
// let ballSpeedX = 2; // Initialize the horizontal speed of the ball to 2.
// let ballSpeedY = 2; // Initialize the vertical speed of the ball to 2.

// function setup() {
//   createCanvas(600, 400); // Create a canvas with a width of 600 and a height of 400.
// }

// function draw() {
//   background(220); // Set the background color to light gray (220).

//   ballX = ballX + ballSpeedX; // Update the x-coordinate of the ball by adding the horizontal speed.
//   ballY = ballY + ballSpeedY; // Update the y-coordinate of the ball by adding the vertical speed.

//   // Check for horizontal boundary collision:
//   // If the left edge of the ball (ballX - ballSize/2) is less than or equal to 0 (left edge of the canvas)
//   // OR the right edge of the ball (ballX + ballSize/2) is greater than or equal to the canvas width,
//   if (ballX - ballSize/2 <= 0 || ballX + ballSize/2 >= width) {
//     ballSpeedX = ballSpeedX * -1; // Reverse the horizontal speed by multiplying it by -1.
//   }

//   // Check for vertical boundary collision:
//   // If the top edge of the ball (ballY - ballSize/2) is less than or equal to 0 (top edge of the canvas)
//   // OR the bottom edge of the ball (ballY + ballSize/2) is greater than or equal to the canvas height,
//   if (ballY - ballSize/2 <= 0 || ballY + ballSize/2 >= height) {
//     ballSpeedY = ballSpeedY * -1; // Reverse the vertical speed by multiplying it by -1.
//   }

//   noStroke(); // Disable the stroke (outline) of the shape.
//   fill(255); // Set the fill color to white (255).
//   circle(ballX, ballY, ballSize); // Draw a circle at the updated ballX and ballY coordinates with the specified ballSize.
// }

/////////////////////////////////////////////////////////
// Task 3: Colour changing & Trail

// let ballX = 300; // Initialize the x-coordinate of the ball to 300.
// let ballY = 200; // Initialize the y-coordinate of the ball to 200.
// let ballSize = 30; // Initialize the size (diameter) of the ball to 30.
// let ballSpeedX = 2; // Initialize the horizontal speed of the ball to 2.
// let ballSpeedY = 2; // Initialize the vertical speed of the ball to 2.

// function setup() {
//   createCanvas(600, 400); // Create a canvas with a width of 600 and a height of 400.
//   background(220); // Set the initial background color to light gray (220).
// }

// function draw() {
//   // Update the ball's position:
//   ballX = ballX + ballSpeedX; // Add the horizontal speed to the x-coordinate.
//   ballY = ballY + ballSpeedY; // Add the vertical speed to the y-coordinate.

//   // Check for horizontal boundary collision:
//   if (ballX - ballSize/2 <= 0 || ballX + ballSize/2 >= width) {
//     // If the ball hits the left or right edge of the canvas:
//     ballSpeedX = ballSpeedX * -1; // Reverse the horizontal speed.
//     fill(random(255), random(255), random(255)); // Change the ball's fill color to a random RGB color.
//   }

//   // Check for vertical boundary collision:
//   if (ballY - ballSize/2 <= 0 || ballY + ballSize/2 >= height) {
//     // If the ball hits the top or bottom edge of the canvas:
//     ballSpeedY = ballSpeedY * -1; // Reverse the vertical speed.
//     fill(random(255), random(255), random(255)); // Change the ball's fill color to a random RGB color.
//   }

//   // Draw the ball:
//   noStroke(); // Disable the stroke (outline) of the shape.
//   circle(ballX, ballY, ballSize); // Draw a circle at the updated ballX and ballY coordinates with the specified ballSize.
// }

/////////////////////////////////////////////////////////
// Task 4: Speed control

// let ballX = 300; // Initialize the x-coordinate of the ball to 300.
// let ballY = 200; // Initialize the y-coordinate of the ball to 200.
// let ballSize = 30; // Initialize the size (diameter) of the ball to 30.
// let ballSpeedX = 2; // Initialize the horizontal speed of the ball to 2.
// let ballSpeedY = 2; // Initialize the vertical speed of the ball to 2.

// function setup() {
//   createCanvas(600, 400); // Create a canvas with a width of 600 and a height of 400.
//   background(220); // Set the initial background color to light gray (220).
// }

// function draw() {
//   // Update ball position:
//   ballX = ballX + ballSpeedX; // Add the horizontal speed to the x-coordinate.
//   ballY = ballY + ballSpeedY; // Add the vertical speed to the y-coordinate.

//   // Check for horizontal boundary collision:
//   if (ballX - ballSize/2 <= 0 || ballX + ballSize/2 >= width) {
//     // If the ball hits the left or right edge of the canvas:
//     ballSpeedX = ballSpeedX * -1; // Reverse the horizontal speed.
//     fill(random(255), random(255), random(255)); // Change the ball's fill color to a random RGB color.
//   }

//   // Check for vertical boundary collision:
//   if (ballY - ballSize/2 <= 0 || ballY + ballSize/2 >= height) {
//     // If the ball hits the top or bottom edge of the canvas:
//     ballSpeedY = ballSpeedY * -1; // Reverse the vertical speed.
//     fill(random(255), random(255), random(255)); // Change the ball's fill color to a random RGB color.
//   }

//   // Draw the ball as an ellipse:
//   noStroke(); // Disable the stroke (outline) of the shape.
//   ellipse(ballX, ballY, ballSize); // Draw an ellipse at the updated ballX and ballY coordinates with the specified ballSize.
// }

// function keyPressed() {
//   // Check if the up arrow key is pressed:
//   if (keyCode === UP_ARROW) {
//     // If the up arrow key is pressed:
//     ballSpeedX *= 1.2; // Increase the horizontal speed by 20%.
//     ballSpeedY *= 1.2; // Increase the vertical speed by 20%.
//   } else if (keyCode === DOWN_ARROW) {
//     // If the down arrow key is pressed:
//     ballSpeedX *= 0.8; // Decrease the horizontal speed by 20%.
//     ballSpeedY *= 0.8; // Decrease the vertical speed by 20%.
//   }
// }

/////////////////////////////////////////////////////////
// Challenge 1: Additional User Controls

// let ballX = 300; // X-position of the ball, initial value is 300
// let ballY = 200; // Y-position of the ball, initial value is 200
// let ballSize = 30; // Size (diameter) of the ball, initial value is 30
// let ballSpeedX = 2; // Horizontal speed of the ball, initial value is 2
// let ballSpeedY = 2; // Vertical speed of the ball, initial value is 2
// let leaveTrail = true; // Boolean to control if the ball leaves a trail, initial value is true
// let changeColour = true; // Boolean to control if the ball changes color on bounce, initial value is true

// function setup() {
//   createCanvas(600, 400); // Create a canvas with width 600 and height 400 pixels
//   background(220); // Set the background color to light gray (220)
//   fill(255); // Set the fill color to white (255) for the ball
// }

// function draw() {
//   if (leaveTrail == false) { // Check if the trail is disabled
//     background(220); // If trail is disabled, clear the background to prevent drawing over previous frames
//   }

//   ballX = ballX + ballSpeedX; // Update the X-position of the ball by adding the horizontal speed
//   ballY = ballY + ballSpeedY; // Update the Y-position of the ball by adding the vertical speed

//   // Check for collision with the left or right edges of the canvas
//   if (ballX - ballSize / 2 <= 0 || ballX + ballSize / 2 >= width) {
//     ballSpeedX = ballSpeedX * -1; // Reverse the horizontal speed to make the ball bounce
//     if (changeColour == true) { // Check if color change on bounce is enabled
//       fill(random(255), random(255), random(255)); // Change the fill color to a random RGB value
//     }
//   }
//   // Check for collision with the top or bottom edges of the canvas
//   if (ballY - ballSize / 2 <= 0 || ballY + ballSize / 2 >= height) {
//     ballSpeedY = ballSpeedY * -1; // Reverse the vertical speed to make the ball bounce
//     if (changeColour == true) { // Check if color change on bounce is enabled
//       fill(random(255), random(255), random(255)); // Change the fill color to a random RGB value
//     }
//   }

//   noStroke(); // Disable the outline of the shape
//   ellipse(ballX, ballY, ballSize); // Draw the ball as an ellipse at its current position with its current size
// }

// function keyPressed() {
//   if (keyCode === UP_ARROW) { // Check if the up arrow key is pressed
//     ballSpeedX *= 1.2; // Increase the horizontal speed by 20%
//     ballSpeedY *= 1.2; // Increase the vertical speed by 20%
//   } else if (keyCode === DOWN_ARROW) { // Check if the down arrow key is pressed
//     ballSpeedX *= 0.8; // Decrease the horizontal speed by 20%
//     ballSpeedY *= 0.8; // Decrease the vertical speed by 20%
//   } else if (keyCode === 67) { // if 'c' is pressed (ASCII code 67)
//     changeColour = !changeColour; // Toggle the changeColour boolean (true becomes false, false becomes true)
//   } else if (keyCode === 84) { // if 't' is pressed (ASCII code 84)
//     leaveTrail = !leaveTrail; // Toggle the leaveTrail boolean
//   } else if (keyCode === 187) { // if '+' is pressed (ASCII code 187)
//     ballSize *= 1.2; // Increase the ball size by 20%
//   } else if (keyCode === 189) { // if '-' is pressed (ASCII code 189)
//     ballSize *= 0.8; // Decrease the ball size by 20%
//   }
// }

/////////////////////////////////////////////////////////
// Challenge 2: Additional Features

// let ballX = 300; // X-position of the ball, initial value is 300
// let ballY = 200; // Y-position of the ball, initial value is 200
// let ballSize = 30; // Size (diameter) of the ball, initial value is 30
// let ballSpeedX = 2; // Horizontal speed of the ball, initial value is 2
// let ballSpeedY = 2; // Vertical speed of the ball, initial value is 2
// let leaveTrail = true; // Boolean to control if the ball leaves a trail, initial value is true
// let changeColour = true; // Boolean to control if the ball changes color on bounce, initial value is true
// let bgMusic, pop;

// function preload() {
//   bgMusic = loadSound('assets/bossaNova.mp3');
//   pop = loadSound('assets/pop.mp3');
// }

// function setup() {
//   createCanvas(600, 400); // Create a canvas with width 600 and height 400 pixels
//   background(220); // Set the background color to light gray (220)
//   fill(255); // Set the fill color to white (255) for the ball
//   bgMusic.loop();
// }

// function draw() {
//   if (leaveTrail == false) { // Check if the trail is disabled
//     background(220); // If trail is disabled, clear the background to prevent drawing over previous frames
//   }

//   ballX = ballX + ballSpeedX; // Update the X-position of the ball by adding the horizontal speed
//   ballY = ballY + ballSpeedY; // Update the Y-position of the ball by adding the vertical speed

//   // Check for collision with the left or right edges of the canvas
//   if (ballX - ballSize / 2 <= 0 || ballX + ballSize / 2 >= width) {
//     ballSpeedX = ballSpeedX * -1; // Reverse the horizontal speed to make the ball bounce
//     pop.play();
//     if (changeColour == true) { // Check if color change on bounce is enabled
//       fill(random(255), random(255), random(255)); // Change the fill color to a random RGB value
//     }
//   }
//   // Check for collision with the top or bottom edges of the canvas
//   if (ballY - ballSize / 2 <= 0 || ballY + ballSize / 2 >= height) {
//     ballSpeedY = ballSpeedY * -1; // Reverse the vertical speed to make the ball bounce
//     pop.play();
//     if (changeColour == true) { // Check if color change on bounce is enabled
//       fill(random(255), random(255), random(255)); // Change the fill color to a random RGB value
//     }
//   }

//   noStroke(); // Disable the outline of the shape
//   ellipse(ballX, ballY, ballSize); // Draw the ball as an ellipse at its current position with its current size
// }

// function keyPressed() {
//   if (keyCode === UP_ARROW) { // Check if the up arrow key is pressed
//     ballSpeedX *= 1.2; // Increase the horizontal speed by 20%
//     ballSpeedY *= 1.2; // Increase the vertical speed by 20%
//   } else if (keyCode === DOWN_ARROW) { // Check if the down arrow key is pressed
//     ballSpeedX *= 0.8; // Decrease the horizontal speed by 20%
//     ballSpeedY *= 0.8; // Decrease the vertical speed by 20%
//   } else if (keyCode === 67) { // if 'c' is pressed (ASCII code 67)
//     changeColour = !changeColour; // Toggle the changeColour boolean (true becomes false, false becomes true)
//   } else if (keyCode === 84) { // if 't' is pressed (ASCII code 84)
//     leaveTrail = !leaveTrail; // Toggle the leaveTrail boolean
//   } else if (keyCode === 187) { // if '+' is pressed (ASCII code 187)
//     ballSize *= 1.2; // Increase the ball size by 20%
//   } else if (keyCode === 189) { // if '-' is pressed (ASCII code 189)
//     ballSize *= 0.8; // Decrease the ball size by 20%
//   }
// }

/////////////////////////////////////////////////////////
// Codes used in slides (but not activities)

