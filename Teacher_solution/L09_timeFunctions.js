// Comment out each section before moving to the next

/////////////////////////////////////////////////////////
// Recap 1: Bouncing Text

// let textString = "Bounce!"; // Initializes a string variable with the text "Bounce!".
// let x; // Declares a variable 'x' to store the horizontal position of the text.
// let speedX = 3; // Initializes a variable 'speedX' to control the horizontal speed of the text.
// let textSizeValue = 32; // Initializes a variable 'textSizeValue' to set the size of the text.
// let fontColor; // Declares a variable 'fontColor' to store the color of the text.

// function setup() {
//   let canvas = createCanvas(600, 400); // Creates a canvas of 600 pixels width and 400 pixels height.
//   x = width / 2; // Sets the initial horizontal position of the text to the center of the canvas.
//   textAlign(CENTER, CENTER); // Sets the text alignment to center horizontally and vertically.
//   fontColor = color(0); // Sets the font color to black.
// }

// function draw() {
//   background(240); // Sets the background color to light gray.
//   textSize(textSizeValue); // Sets the size of the text using the 'textSizeValue' variable.
//   fill(0); // Sets the fill color of the text to black.
//   text(textString, x, height / 2); // Draws the text 'textString' at the calculated position.

//   x += speedX; // Updates the horizontal position of the text by adding the 'speedX'.

//   if (x > width || x < 0) {
//     speedX *= -1; // If the text reaches the edges of the canvas, reverses the 'speedX' to make it bounce.
//   }
// }

/////////////////////////////////////////////////////////
// Task 1: Digital Clock

// function setup() {
//     createCanvas(600, 400);
//     textAlign(CENTER, CENTER);
// }

// function draw() {
//     background(220);

//     // Display digital clock
//     let h = hour();
//     let m = minute();
//     let s = second();
//     let timeString = nf(h, 2) + ':' + nf(m, 2) + ':' + nf(s, 2);
//     fill(0);
//     textSize(72);
//     text(timeString, width / 2, height / 2);
// }

/////////////////////////////////////////////////////////
// Task 2: Countdown Timer

// let countdown = 5;
// let interval;

// function setup() {
//     createCanvas(600, 400);
//     textAlign(CENTER, CENTER);
// }

// function draw() {
//     background(220);

//     textSize(32)
//     text("Click me to start the timer", width / 2, height - 50);

//     textSize(100)
//     text(countdown, width / 2, height / 2);
// }

// function mousePressed() {
//     interval = setInterval(updateCountdown, 1000);
// }

// function updateCountdown() {
//     if (countdown > 0) {
//         countdown -= 1;
//     } else {
//         clearInterval(interval); // Stop countdown at 0
//     }
// }

/////////////////////////////////////////////////////////
// Task 3: Alarm

// let countdown = 5;
// let interval;
// let bgColor;
// let alarmSound;

// function preload() {
//   alarmSound = loadSound('assets/bossaNova.mp3'); // Ensure file is in the correct path
// }

// function setup() {
//   createCanvas(600, 400);
//   textAlign(CENTER, CENTER);
//   bgColor = color(220);
// }

// function draw() {
//   background(bgColor);

//   textSize(32)
//   text("Click me to start the timer", width / 2, height - 50);

//   textSize(100)
//   text(countdown, width / 2, height / 2);
// }

// // Start timer on mouse click and enable sound playback
// function mousePressed() {
//   userStartAudio(); // Enables audio playback
//   interval = setInterval(updateCountdown, 1000);
// }

// function updateCountdown() {
//   if (countdown > 0) {
//     countdown -= 1;
//   } else {
//     clearInterval(interval); // Stop countdown at 0
//     alarm = setInterval(soundAlarm, 500);
//   }
// }

// function soundAlarm() {
//   bgColor = color(random(255), random(255), random(255));
//   alarmSound.play();
// }

/////////////////////////////////////////////////////////
// Challenge 1: Time + countdown

// let countdown = 5; // Initialize the countdown value
// let interval; // Variable to hold the interval timer
// let alarmSound; // Variable to hold the sound file

// function preload() {
//   alarmSound = loadSound('assets/bossaNova.mp3'); // Load the sound file
// }

// function setup() {
//   createCanvas(600, 400); // Create the canvas
//   textAlign(CENTER, CENTER); // Set text alignment to center
//   bgColor = color(220); // Set the background color
// }

// function draw() {
//   background(bgColor); // Set the background color

//   // Display digital clock
//   let h = hour(); // Get the current hour
//   let m = minute(); // Get the current minute
//   let s = second(); // Get the current second
//   let timeString = nf(h, 2) + ':' + nf(m, 2) + ':' + nf(s, 2); // Format the time string
//   fill(0); // Set the fill color to black
//   textSize(72); // Set the text size
//   text(timeString, width / 2, height / 3); // Display the time
  
//   // Display countdown timer
//   fill(255, 0, 0); // Set the fill color to red
//   textSize(24); // Set the text size
//   text("Countdown Timer:", width / 2, (2 * height) / 3 - 50); // Display the label
//   text(countdown, width / 2, (2 * height) / 3); // Display the countdown value

//   textSize(16); // Set the text size
//   text("Click me to start the timer", width / 2, height - 50); // Display the start instruction
// }

// // Start timer on mouse click and enable sound playback
// function mousePressed() {
//   userStartAudio(); // Enables audio playback
//   interval = setInterval(updateCountdown, 1000); // Start the countdown timer
// }

// function updateCountdown() {
//   if (countdown > 0) { // If the countdown is greater than 0
//     countdown--; // Decrement the countdown
//   } else {
//     clearInterval(interval); // Stop the countdown timer
//     setInterval(soundAlarm, 500); // Start the alarm sound timer
//   }
// }

// function soundAlarm() {
//   bgColor = color(random(255), random(255), random(255)); // Change background color randomly
//   alarmSound.play(); // Play the alarm sound
// }

/////////////////////////////////////////////////////////
// Challenge 2: Space to Reset

// let countdown = 5; // Initialize the countdown value
// let interval; // Variable to hold the interval timer
// let alarmSound; // Variable to hold the sound file
// let alarmInterval; // Variable to hold the alarm interval

// function preload() {
//   alarmSound = loadSound('assets/bossaNova.mp3'); // Load the sound file
// }

// function setup() {
//   createCanvas(600, 400); // Create the canvas
//   textAlign(CENTER, CENTER); // Set text alignment to center
//   bgColor = color(220); // Set the background color
// }

// function draw() {
//   background(bgColor); // Set the background color

//   // Display digital clock
//   let h = hour(); // Get the current hour
//   let m = minute(); // Get the current minute
//   let s = second(); // Get the current second
//   let timeString = nf(h, 2) + ':' + nf(m, 2) + ':' + nf(s, 2); // Format the time string
//   fill(0); // Set the fill color to black
//   textSize(72); // Set the text size
//   text(timeString, width / 2, height / 3); // Display the time

//   // Display countdown timer
//   fill(255, 0, 0); // Set the fill color to red
//   textSize(24); // Set the text size
//   text("Countdown Timer:", width / 2, (2 * height) / 3 - 50); // Display the label
//   text(countdown, width / 2, (2 * height) / 3); // Display the countdown value

//   textSize(16); // Set the text size
//   text("Click me to start the timer", width / 2, height - 50); // Display the start instruction
//   text("Press spacebar to reset", width / 2, height - 20); // Display reset instruction
// }

// // Start timer on mouse click and enable sound playback
// function mousePressed() {
//   userStartAudio(); // Enables audio playback
//   if (interval) {
//     clearInterval(interval); // Clear any existing interval
//   }
//   if (alarmInterval)
//     clearInterval(alarmInterval);
//   countdown = 5; // Reset countdown
//   interval = setInterval(updateCountdown, 1000); // Start the countdown timer
// }

// function updateCountdown() {
//   if (countdown > 0) { // If the countdown is greater than 0
//     countdown--; // Decrement the countdown
//   } else {
//     clearInterval(interval); // Stop the countdown timer
//     alarmInterval = setInterval(soundAlarm, 500); // Start the alarm sound timer, store interval id
//   }
// }

// function soundAlarm() {
//   bgColor = color(random(255), random(255), random(255)); // Change background color randomly
//   alarmSound.play(); // Play the alarm sound
// }

// function keyPressed() {
//   if (keyCode === 32) { // Check if the spacebar is pressed (keyCode 32)
//     clearInterval(interval); // Stop the countdown timer
//     clearInterval(alarmInterval); // Stop the alarm sound timer
//     countdown = 5; // Reset the countdown value
//     bgColor = color(220); // Reset the background color
//   }
// }

/////////////////////////////////////////////////////////
// Codes used in slides (but not activities)

// let countdown = 5;
// let interval;
// let alarmSound;
// let alarmActive = false;
// let lastColorChange = 0;
// let lastSoundPlay = 0;
// let bgColor;
// let timerStarted = false;

// function preload() {
//     alarmSound = loadSound('assets/bossaNova.mp3'); // Ensure file is in the correct path
// }

// function setup() {
//     createCanvas(600, 400);
//     // textSize(32);
//     textAlign(CENTER, CENTER);
//     bgColor = color(220);
// }

// function draw() {
//     background(bgColor);

//     // if (!timerStarted) {
//     //     fill(0);
//     //     text("Click to start the timer", width / 2, height / 2);
//     //     return;
//     // }

//     // Display digital clock
//     let h = hour();
//     let m = minute();
//     let s = second();
//     let timeString = nf(h, 2) + ':' + nf(m, 2) + ':' + nf(s, 2);
//     fill(0);
//     textSize(72);
//     // text("Digital Clock:", width / 2, height / 3 - 50);
//     text(timeString, width / 2, height / 3);
    
//     // Display countdown timer
//     fill(255, 0, 0);
//     textSize(24);
//     text("Countdown Timer:", width / 2, (2 * height) / 3 - 50);
//     text(countdown, width / 2, (2 * height) / 3);

//     textSize(16);
//     text("Click me to start the timer", width / 2, height - 50);
// }

// // Start timer on mouse click and enable sound playback
// function mousePressed() {
//   userStartAudio(); // Enables audio playback
//   timerStarted = true;
//   interval = setInterval(updateCountdown, 1000);
// }

// function updateCountdown() {
//   if (countdown > 0) {
//     countdown--;
//   } else {
//     clearInterval(interval); // Stop countdown at 0
//     alarm = setInterval(soundAlarm, 500);
//   }
// }

// function soundAlarm() {
//   bgColor = color(random(255), random(255), random(255));
//   alarmSound.play();
// }



// setInterval() and clearInterval()

// let intervalId;

// function setup() {
//   createCanvas(200, 100);
//   background(200);
//   intervalId = setInterval(drawCircle, 1000); //call drawCircle every 1000 milliseconds (1 second)
// }

// let x = 0;

// function drawCircle() {
//   clear();
//   circle(x, 50, 20);
//   x += 10;
//   if(x > 200){
//     x = 0;
//   }
// }

// function mousePressed(){
//   clearInterval(intervalId); //stop the loop when the mouse is pressed.
// }